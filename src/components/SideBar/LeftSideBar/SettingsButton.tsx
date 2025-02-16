import { IoSettingsOutline } from "react-icons/io5";
import IconButton from "../../UI/Buttons/IconButton";

function SettingsButton() {
  return (
    <IconButton
      onClick={() => {}}
      className="bg-accent2 p-4 rounded-[50%] hover:rounded-[20%]"
      needTooltip={true}
      tooltipPlaceholder="Settings"
    >
      <IoSettingsOutline className="text-[1.5rem] text-accent1" />
    </IconButton>
  );
}

export default SettingsButton