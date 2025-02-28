import useFolderStore from "../../../store/folderStore";
import IconButton from "../../UI/Buttons/IconButton";

function LinksHeader() {
      const { folder_name, folder_icon_url } = useFolderStore(
        (state) => state.selectedFolder
      );
  return (
    <div className="flex items-center gap-2">
      {folder_icon_url && (
        <IconButton
          needTooltip={false}
          tooltipPlaceholder={folder_name}
          className=""
          onClick={() => {}}
        >
          <img
            src={folder_icon_url}
            alt="folder icon"
            className="w-6 h-6 max-w-6"
          />
        </IconButton>
      )}
      <p>{folder_name}</p>
    </div>
  );
}

export default LinksHeader;