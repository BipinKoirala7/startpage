import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";

import { apiResponseT, linkT } from "../../../../types";
import Input from "../../../UI/Input";
import IconButton from "../../../UI/Buttons/IconButton";
import useFolderStore from "../../../../store/folderStore";
import useLinkStore from "../../../../store/linkStore";
import { getUrl } from "../../../../util/getIconUrl";

type LinkFormPropsT = {
  closeMenu: () => void;
};

function NewLinkForm({ closeMenu }: LinkFormPropsT) {
  const selected_folder_id = useFolderStore(
    (state) => state.selectedFolder?.folder_id
  );
  const addLinks = useLinkStore((state) => state.addLink);

  const [linkInfo, setLinkInfo] = useState<linkT>({
    link_id: "",
    folder_id: "",
    link_name: "",
    link_url: "",
    link_icon_url: null,
    link_background_color: null,
    created_At: "",
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
    } catch {
      throw new Error("Error while creatng a link");
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: MutateFn,
    onMutate: async () => {
      const urlData = await getUrl({ url: linkInfo.link_url });
          setLinkInfo((prev) => {
            return {
              ...prev,
              link_icon_url: urlData.data?.favicon as string || urlData.data?.image as string || null,
            };
          });
      if (selected_folder_id) {
        setLinkInfo((prev) => {
          return {
            ...prev,
            link_id: uuid(),
            folder_id: selected_folder_id,
            created_At: new Date().toISOString(),
          };
        });
      }
    },
    onSuccess: () => {
      addLinks(linkInfo);
      closeMenu();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  if (!selected_folder_id) return null;

  return (
    <form className="bg-primary rounded-lg p-4 text-text flex flex-col gap-4">
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
          <label htmlFor="link_background_color">Link Background Color:</label>
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
    </form>
  );
}

export default NewLinkForm;
