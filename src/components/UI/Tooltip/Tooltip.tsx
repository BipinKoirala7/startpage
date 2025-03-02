type TooltipProps = {
  placeholder: string | null;
  shouldOpen: boolean;
  tooltipId: string;
  direction?: "top" | "bottom" | "left" | "right";
};

import { BiSolidLeftArrow } from "react-icons/bi";
import "../../../App.css";

function Tooltip({
  placeholder,
  shouldOpen,
  tooltipId,
  direction = "right",
}: TooltipProps) {
  return (
    <>
      {shouldOpen && (
        <div
          id={tooltipId}
          className={`absolute z-20 ${
            direction === "top"
              ? "top-[-150%] left-1/2 -translate-x-1/2"
              : direction === "bottom"
              ? "bottom-[-150%] left-1/2 -translate-x-1/2"
              : direction === "right"
              ? "left-[110%]  top-1/2 -translate-y-1/2"
              : "right-[110%] top-1/2 -translate-y-1/2"
          } 
            p-2 rounded-md  transition-all duration-200 ease-linear
          ${
            shouldOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-1 relative  px-2 py-1 bg-primary rounded-[inherit]">
            <BiSolidLeftArrow
              className={`w-5 h-5 absolute text-primary ${
                direction === "top"
                  ? "top-[100%] -translate-y-[50%] left-1/2 -translate-x-1/2 rotate-[-90deg]"
                  : direction === "bottom"
                  ? "bottom-[75%] left-1/2 -translate-x-1/2 rotate-90"
                  : direction === "left"
                  ? "top-[50%] translate-y-[-50%] left-[100%] translate-x-[-50%] rotate-180"
                  : "top-[50%] translate-y-[-50%] left-[0%] translate-x-[-50%] rotate-0"
              } `}
            />
            <p className="text-nowrap text-text">{placeholder}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Tooltip;
