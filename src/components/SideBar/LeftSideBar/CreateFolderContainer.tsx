import { v4 as uuid } from "uuid";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import { HiMiniFolderPlus } from "react-icons/hi2";
import IconButton from "../../UI/Buttons/IconButton";
import { folderT } from "../../../types";
import { createNewFolder } from "../../../util/FolderFunctions";
import Menu from "../../UI/Modal/Menu";
import Input from "../../UI/Input";
import TextArea from "../../UI/TextArea";
import useFolderStore from "../../../store/folderStore";

function CreateFolderContainer() {
  const parentRef = useRef<HTMLDivElement>(null);
  const addFolder = useFolderStore((state) => state.addFolder);

  const [folderInfo, setFolderInfo] = useState<folderT>({
    folder_id: uuid(),
    folder_name: "",
    folder_description: "",
    folder_icon_url: "",
    folder_background_color: "",
    created_at:new Date().toISOString(),
    updated_at:new Date().toISOString(),
  });

  const mutationFn = async () => {
    try {
      const data = await createNewFolder(folderInfo);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "An unexpected error occurred.");
      } else {
        throw new Error("An unexpected error occurred.");
      }
    }
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn,
    onSuccess: () => {
      addFolder(folderInfo);
      setFolderInfo({
        folder_id: "",
        folder_name: "",
        folder_description: "",
        folder_icon_url: "",
        folder_background_color: "",
        created_at: "",
        updated_at: "",
      });
      handleCloseFunction();
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const [isOpenDialogBox, setIsOpenDialogBox] = useState<boolean>(false);

  function handleSaveFunction() {
    mutate();
  }

  function handleClick() {
    setIsOpenDialogBox(true);
  }

  function handleCloseFunction() {
    setIsOpenDialogBox(false);
  }

  useEffect(() => {
    
  },[])

  return (
    <div ref={parentRef}>
      <IconButton
        onClick={handleClick}
        className="p-4 bg-accent2 rounded-[50%] hover:rounded-[20%]"
        needTooltip={true}
        tooltipPlaceholder={"New Folder"}
      >
        <HiMiniFolderPlus className="text-[1.5rem] text-accent1 aspect-square" />
      </IconButton>
      <Menu
        parentRef={parentRef}
        header="New Folder"
        open={isOpenDialogBox}
        closeFn={() => handleCloseFunction()}
        direction="center"
        className=""
      >
        <div className="w-full grid grid-cols-[auto_1fr] gap-4 items-center px-4 py-2">
          <label htmlFor="name">Folder Name:</label>
          <Input
            type="text"
            name="folder_name"
            className="px-2 py-2 bg-primary  rounded-[.25rem] outline-none"
            onChange={(e) =>
              setFolderInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="folder_description">Folder description:</label>
          <TextArea
            id="folder_description"
            name="folder_description"
            className="px-2 py-2 rounded-[.25rem] outline-none bg-secondary"
            value={folderInfo.folder_description}
            onChange={(e) =>
              setFolderInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="name">Folder Icon Url:</label>
          <Input
            type="text"
            name="folder_icon_url"
            className="px-2 py-2 bg-primary  rounded-[.25rem] outline-none"
            onChange={(e) =>
              setFolderInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="name">Folder Background Color:</label>
          <div className="flex gap-2 items-center bg-secondary rounded-[.25rem] w-full">
            <Input
              type="color"
              name="folder_background_color"
              className="px-1 py-1 bg-primary min-h-10 rounded-[.25rem] outline-none"
              onChange={(e) =>
                setFolderInfo((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <p className="text-neutral">
              Hexcolor : {folderInfo.folder_background_color}
            </p>
          </div>
          <IconButton
            onClick={handleSaveFunction}
            className="w-full border-[1px] border-secondary bg-primary hover:border-accent1 hover:bg-accent1 hover:text-primary transition-all rounded-[.25rem] py-2 col-span-2"
          >
            {isPending ? <>...</> : <>Save</>}
          </IconButton>
          {isError && <div className="text-red-500">{error.message}</div>}
        </div>
      </Menu>
    </div>
  );
}

export default CreateFolderContainer;
