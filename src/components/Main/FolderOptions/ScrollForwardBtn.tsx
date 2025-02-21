import { IoChevronForwardCircle } from "react-icons/io5";
import IconButton from "../../UI/Buttons/IconButton";
import { scrollForward } from "../../../util/util";

function ScrollForwardBtn() {
  return (
    <div
      className="absolute top-[50%] right-0 translate-y-[-50%] z-[10] bg-secondary p-2 rounded-full hover:bg-neutral transition-all duration-300"
      onClick={scrollForward}
    >
      <IconButton
        className="aspect-square min-w-6"
        needTooltip={false}
        tooltipPlaceholder={"forward"}
        onClick={() => {}}
      >
        <IoChevronForwardCircle className="text-[1.25rem]" title="forward" />
      </IconButton>
    </div>
  );
}

export default ScrollForwardBtn