import { PiInfoLight } from "react-icons/pi";
import { useRef, useState } from "react";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import FolderInfoMain from "./FolderInfoMain";

function FolderInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const menuParentElementRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={menuParentElementRef} className="relative flex">
      <IconButton
        className={`text-[1.5rem] transition duration-300  p-1 aspect-square rounded-md hover:bg-primary`}
        needTooltip={false}
        tooltipPlaceholder={"folder Info"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <PiInfoLight />
      </IconButton>
      <Menu
        open={isOpen}
        parentRef={menuParentElementRef}
        direction="center"
        closeFn={() => setIsOpen(false)}
      >
       <FolderInfoMain />
      </Menu>
    </div>
  );
}

export default FolderInfo;
