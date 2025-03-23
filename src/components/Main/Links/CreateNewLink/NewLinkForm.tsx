import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";

import { linkT } from "../../../../types";
import Input from "../../../UI/Input";
import IconButton from "../../../UI/Buttons/IconButton";
import useFolderStore from "../../../../store/folderStore";
import useLinkStore from "../../../../store/linkStore";
import { getUrl } from "../../../../util/getIconUrl";
import { createNewLink } from "../../../../util/LinkFunctions";
import { getShortLink } from "../../../../util/util";

type LinkFormPropsT = {
  closeMenu: () => void;
};

function NewLinkForm({ closeMenu }: LinkFormPropsT) {
  const selected_folder_id = useFolderStore((state) =>
    state.selectedFolder ? state.selectedFolder.folder_id : null
  );
  const addLinks = useLinkStore((state) => state.addLink);

  const [linkInfo, setLinkInfo] = useState<linkT>({
    link_id: uuid(),
    folder_id: selected_folder_id || "",
    link_name: "",
    link_url: "",
    link_icon_url: null,
    link_background_color: null,
    created_at: new Date().toISOString(),
  });

  const MutateFn = async () => {
    try {
      const data = await createNewLink(linkInfo);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "An unexpected error occurred.");
      } else {
        throw new Error("Error while creatng a link");
      }
    }
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: MutateFn,
    onMutate: async () => {
      const urlData = await getUrl({ url: linkInfo.link_url });
      console.log(urlData);
      setLinkInfo((prev) => {
        return {
          ...prev,
          link_icon_url:
            (urlData.data?.favicon as string) ||
            (urlData.data?.image as string) ||
            null,
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
    onSuccess: async () => {
      addLinks(linkInfo);
      closeMenu();
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  if (!selected_folder_id) return null;

  return (
    <form className="bg-primary rounded-lg p-4 text-text flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="link-name">Link Name:</label>
          <Input
            className="px-2 py-1"
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
            className="px-2 py-1"
            type="text"
            id="link_url"
            name="link_url"
            onChange={(e) =>
              setLinkInfo((prev) => {
                return {
                  ...prev,
                  [e.target.name]: getShortLink(e.target.value),
                };
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="link_icon_url">Link Icon Url:</label>
          <Input
            className="px-2 py-1"
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
          <div className="flex gap-2 items-center bg-secondary rounded-[.25rem] w-full px-2">
            <Input
              className=" py-1 min-h-10"
              type="color"
              id="link_background_color"
              name="link_background_color"
              value={linkInfo.link_background_color || "#000000"}
              onChange={(e) => {
                const colorValue =
                  e.target.value === "#000000" ? null : e.target.value;
                setLinkInfo((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: colorValue,
                  };
                });
              }}
            />
            <p className="text-neutral text-[0.9rem]">
              Hex Color : {linkInfo.link_background_color || "Default"}
            </p>
          </div>
        </div>
      </div>
      <IconButton
        className="border-[1px] border-neutral bg-secondary w-full rounded-md py-1 hover:bg-neutral"
        onClick={() => mutate()}
      >
        {isPending ? "..." : "Save"}
      </IconButton>
      {isError && <div className="text-red-500">{error.message}</div>}
    </form>
  );
}

export default NewLinkForm;
