import { PiInfoLight } from "react-icons/pi";
import IconButton from "../../UI/Buttons/IconButton";
import useFolderStore from "../../../store/folderStore";

function LinksOptions() {
  const selected_folder = useFolderStore(state => state.selectedFolder);
  if (selected_folder === null) return null;
  return (
    <IconButton
      className="text-[1.5rem] transition duration-300  p-1 aspect-square rounded-[5%] hover:bg-primary"
      needTooltip={false}
      tooltipPlaceholder={"info"}
      onClick={() => {}}
    >
      <PiInfoLight />
    </IconButton>
  );
}

export default LinksOptions