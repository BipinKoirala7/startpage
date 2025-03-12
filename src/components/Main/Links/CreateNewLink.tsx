import { GoPlus } from "react-icons/go";

import IconButton from "../../UI/Buttons/IconButton";
import { useRef, useState } from "react";
import Menu from "../../UI/Modal/Menu";
import Input from "../../UI/Input";
import { v4 } from "uuid";
import useFolderStore from "../../../store/folderStore";
import { useMutation } from "@tanstack/react-query";
import useLinkStore from "../../../store/linkStore";
import { apiResponseT, linkT } from "../../../types";

function CreateNewLink() {
  const selected_folder_id = useFolderStore(
    (state) => state.selectedFolder?.folder_id
  );
  const addLinks = useLinkStore((state) => state.addLink);

  const [isOpen, setIsOpen] = useState(false);
  const menuParentElementRef = useRef<HTMLDivElement | null>(null);

  if (!selected_folder_id) return null;

  const [linkInfo, setLinkInfo] = useState<linkT>({
    link_id: v4(),
    folder_id: selected_folder_id,
    link_name: "",
    link_url: "",
    link_icon_url: "",
    link_background_color: "",
    created_At: new Date().toISOString(),
  });

  const MutateFn = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BASE_API_URL + "/links/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(linkInfo),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result: apiResponseT<linkT[]> = await response.json();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: MutateFn,
    onSuccess: () => {
      addLinks(linkInfo);
      setIsOpen(false);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return (
    <div className="relative flex" ref={menuParentElementRef}>
      <IconButton
        className={`text-[1.5rem] transition duration-300  p-1 aspect-square rounded-md hover:bg-primary`}
        needTooltip={false}
        tooltipPlaceholder={"Add Links"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GoPlus />
      </IconButton>
      <Menu
        open={isOpen}
        parentRef={menuParentElementRef}
        direction="left"
        closeFn={() => setIsOpen(false)}
      >
        <div className="bg-primary rounded-lg p-4 text-text flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="link-name">Link Name:</label>
              <Input
                className=""
                type="text"
                id="link_name"
                name="link_name"
                onChange={(e) =>
                  setLinkInfo((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="link-url">Link Url:</label>
              <Input
                className=""
                type="text"
                id="link_url"
                name="link_url"
                onChange={(e) =>
                  setLinkInfo((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="link_icon_url">Link Icon Url:</label>
              <Input
                className=""
                type="text"
                id="link_icon_url"
                name="link_icon_url"
                onChange={(e) =>
                  setLinkInfo((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="link_background_color">
                Link Background Color:
              </label>
              <Input
                className=""
                type="text"
                id="link_background_color"
                name="link_background_color"
                onChange={(e) =>
                  setLinkInfo((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <IconButton
            className="border-[1px] border-neutral bg-secondary w-full rounded-md py-1 hover:bg-neutral"
            onClick={() => mutate()}
          >
            {isPending ? "..." : "Save"}
          </IconButton>
        </div>
      </Menu>
    </div>
  );
}

export default CreateNewLink;
