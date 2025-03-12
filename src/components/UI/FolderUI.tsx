import FolderOpen from "../../assets/FolderOpen";
import Folder from "../../assets/Folder";
import { folderT } from "../../types";
import useFolderStore from "../../store/folderStore";

type FolderPropT = {
  className: string;
  folder_info: folderT;
  onClick?: () => void;
};

function FolderUI(props: FolderPropT) {
  const { className, folder_info,onClick } = props;
  const {
    folder_id,
    folder_name,
    folder_icon_url,
    folder_background_color,
  } = folder_info;
  const isSelected = useFolderStore((state) => state.selectedFolder?.folder_id === folder_id);
  return (
    <div
      style={{
        backgroundColor: folder_background_color,
      }}
      className={`transition-element w-full h-fit border-[1px] border-primary px-4 py-2 rounded-[.25rem] flex gap-2  relative justify-center items-center cursor-pointer  ${className} ${
        isSelected ? "bg-tertiary " : "hover:bg-primary"
      }`}
      onClick={onClick}
    >
      {folder_icon_url ? (
        <img
          src={folder_icon_url}
          alt=""
          className="max-w-6 w-6 aspect-square"
        />
      ) : isSelected ? (
        <FolderOpen className="max-w-6 w-6 " fill="white" stroke="white" />
      ) : (
        <Folder className="max-w-6 w-6" fill="none" stroke="white" />
      )}
      <p className=" text-nowrap">{folder_name}</p>
    </div>
  );
}

export default FolderUI;
