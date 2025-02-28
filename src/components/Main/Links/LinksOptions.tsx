import { PiInfoLight } from "react-icons/pi";
import IconButton from "../../UI/Buttons/IconButton";

function LinksOptions() {
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