type propsT = {
  name: string | null;
};

import { BiSolidLeftArrow } from "react-icons/bi";
import TooltipPlaceholder from "./TooltipPlaceholder";

function TooltipContainer(props: propsT) {
  const { name } = props;
  return (
    <div className="flex items-center justify-center gap-1 relative  px-3 py-2 bg-neutral rounded-[inherit]">
      <BiSolidLeftArrow className="w-5 h-5 text-neutral absolute top-[50%] translate-y-[-50%] left-[0] translate-x-[-50%]" />
      <TooltipPlaceholder name={name} />
    </div>
  );
}

export default TooltipContainer;
