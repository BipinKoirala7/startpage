import { useRef, useState } from "react";
import { MdOutlineTimer } from "react-icons/md";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";

function Timer() {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="" ref={parentRef}>
        <IconButton
          className="p-2 rounded-sm hover:bg-primary"
          needTooltip={!isOpen}
          tooltipPlaceholder="Todo List"
          tooltipDirection="left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineTimer className="text-[1.5rem]" />
        </IconButton>
      </div>
      <Menu
        open={isOpen}
        closeFn={() => setIsOpen(false)}
        className=""
        parentRef={parentRef}
        direction="top-left"
      >
        <div className="flex flex-col gap-2 px-1">
          <p className="text-[1.25rem]">Timer</p>
          <div></div>
        </div>
      </Menu>
    </>
  );
}

export default Timer;
