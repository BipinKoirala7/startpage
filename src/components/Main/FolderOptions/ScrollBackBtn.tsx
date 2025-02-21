import IconButton from "../../UI/Buttons/IconButton";
import { scrollBack } from "../../../util/util";
import { IoChevronBackCircle } from "react-icons/io5";

function ScrollBackBtn() {
  return (
    <div
      className="absolute top-[50%] left-0 translate-y-[-50%] z-[10] bg-secondary p-2 rounded-full  hover:bg-neutral transition-all duration-300"
      onClick={scrollBack}
    >
      <IconButton
        className="aspect-square min-w-6"
        needTooltip={false}
        tooltipPlaceholder={"back"}
        onClick={() => {}}
      >
        <IoChevronBackCircle className=" text-[1.25rem]" title="back" />
      </IconButton>
    </div>
  );
}

export default ScrollBackBtn