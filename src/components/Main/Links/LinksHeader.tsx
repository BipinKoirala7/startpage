import { FcFolder } from "react-icons/fc";

import useFolderStore from "../../../store/folderStore";
import IconButton from "../../UI/Buttons/IconButton";

function LinksHeader() {
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  if (!selectedFolder) return null;

  const { folder_name, folder_icon_url } = selectedFolder;
  return (
    <div className="flex items-center gap-2">
      {folder_icon_url ? (
        <IconButton
          needTooltip={false}
          tooltipPlaceholder={folder_name}
          className=""
        >
          <img
            src={folder_icon_url}
            alt="folder icon"
            className="w-6 h-6 max-w-6"
          />
        </IconButton>
      ) : (
        <IconButton className="">
          <FcFolder
            className="text-[1.5rem] text-accent1 aspect-square"
          />
        </IconButton>
      )}
      <p>{folder_name}</p>
    </div>
  );
}

export default LinksHeader;
