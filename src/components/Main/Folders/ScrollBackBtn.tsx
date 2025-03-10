import IconButton from "../../UI/Buttons/IconButton";
import { scrollBack } from "../../../util/util";
import { HiArrowSmLeft } from "react-icons/hi";

function ScrollBackBtn() {
  return (
    <div
      className=" hidden  z-[10] bg-secondary p-2 rounded-full  hover:bg-neutral transition-all duration-300
        sm:
        md:inline-block
        lg:
        xl:
        "
      onClick={scrollBack}
    >
      <IconButton
        className="aspect-square min-w-6"
        needTooltip={false}
        tooltipPlaceholder={"back"}
        onClick={() => {}}
      >
        <HiArrowSmLeft className=" text-[1.25rem]" title="back" />
      </IconButton>
    </div>
  );
}

export default ScrollBackBtn