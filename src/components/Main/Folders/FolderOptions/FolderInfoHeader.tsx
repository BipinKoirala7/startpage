import { FcFolder } from "react-icons/fc";

import useFolderStore from "../../../../store/folderStore";
import Input from "../../../UI/Input";

type InfoHeaderPropsT = {
  isEditMode: boolean;
};

function FolderInfoHeaders(props: InfoHeaderPropsT) {
  const { isEditMode } = props;
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  if (!selectedFolder) return null;
  const { folder_icon_url, folder_name } = selectedFolder;
  return (
    <div className="flex gap-4 items-center">
      {folder_icon_url ? (
        <img
          src={folder_icon_url}
          alt=""
          className="aspect-square w-[7.5rem] object-cover"
        />
      ) : (
        <FcFolder className="text-[7.5rem] aspect-square" />
      )}
      <div className="flex flex-col gap-2 justify-center">
        <label htmlFor="folder_name">Folder Name:</label>
        <Input type="text" className="" value={folder_name} disabled={!isEditMode}/>
      </div>
    </div>
  );
}

export default FolderInfoHeaders;
