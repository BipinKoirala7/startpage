import FolderOpen from "../../assets/FolderOpen";
import Folder from "../../assets/Folder";
import { folderT } from "../../types";
import useFolderStore from "../../store/folderStore";

type FolderPropT = {
  className: string;
  folder_info: folderT;
};

function FolderUI(props: FolderPropT) {
  const selectFolder = useFolderStore((state) => state.setSelectedFolder);
  const { className, folder_info } = props;
  const {
    folder_id,
    folder_name,
    folder_icon_url,
    folder_background_color,
  } = folder_info;
  const isSelected = useFolderStore((state) => state.selectedFolder.folder_id === folder_id);
  function handleCLick() {
    selectFolder(folder_id);
  }
  return (
    <div
      style={{
        backgroundColor: folder_background_color,
      }}
      className={`w-full h-fit border-[1px] border-secondary px-4 py-2 rounded-[.25rem]  hover:rounded-[.5rem] flex gap-2 transition-all duration-200 ease-linear relative justify-center items-center cursor-pointer ${className} ${
        isSelected ? "bg-tertiary text-black" : "hover:bg-secondary"
      }`}
      onClick={handleCLick}
    >
      {folder_icon_url ? (
        <img
          src={folder_icon_url}
          alt=""
          className="max-w-6 w-6 aspect-square mix-blend-multiply"
        />
      ) : isSelected ? (
        <FolderOpen className="max-w-6 w-6 " fill="black" stroke="white" />
      ) : (
        <Folder className="max-w-6 w-6" fill="none" stroke="white" />
      )}
      <p className=" text-nowrap">{folder_name}</p>
    </div>
  );
}

export default FolderUI;
