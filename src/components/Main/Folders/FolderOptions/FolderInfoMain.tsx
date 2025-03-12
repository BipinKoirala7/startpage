import { useState } from "react";
import useFolderStore from "../../../../store/folderStore";
import Input from "../../../UI/Input";
import FolderInfoHeaders from "./FolderInfoHeader";

function FolderInfoMain() {
  const [ isEditMode, setIsEditMode] = useState(false);

  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  if (selectedFolder == null) return <div>Error occured!</div>;
  const {
    folder_description,
    folder_background_color,
    created_At,
    updated_At,
  } = selectedFolder;
  return (
    <div className="bg-primary rounded-lg p-4 text-text flex flex-col gap-4">
      <FolderInfoHeaders isEditMode={isEditMode}/>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
          <label htmlFor="folder_name">Folder Background Color:</label>
          <Input className="" type="text" value={folder_background_color} disabled={!isEditMode}/>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
          <label htmlFor="folder_name">Folder Description:</label>
          <textarea
            value={folder_description}
            className="px-2 py-1 bg-secondary text-neutral rounded-md outline-none border-none"
            disabled={!isEditMode}
          />
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
          <p>Created At:</p>
          <p className="text-text">{new Date(created_At).toLocaleString()}</p>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
          <p>Last Updated At:</p>
          <p className="text-text">{updated_At}</p>
        </div>
      </div>
    </div>
  );
}

export default FolderInfoMain;
