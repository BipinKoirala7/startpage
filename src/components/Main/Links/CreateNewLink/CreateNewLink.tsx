import { GoPlus } from "react-icons/go";

import IconButton from "../../../UI/Buttons/IconButton";
import { useRef, useState } from "react";
import Menu from "../../../UI/Modal/Menu";
import NewLinkForm from "./NewLinkForm";

function CreateNewLink() {
  const [isOpen, setIsOpen] = useState(false);
  const menuParentElementRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative flex" ref={menuParentElementRef}>
      <IconButton
        className={`text-[1.5rem] transition duration-300  p-1 aspect-square rounded-md hover:bg-primary`}
        needTooltip={false}
        tooltipPlaceholder={"Add Links"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GoPlus />
      </IconButton>
      <Menu
        open={isOpen}
        parentRef={menuParentElementRef}
        direction="left"
        closeFn={() => setIsOpen(false)}
      >
        <NewLinkForm closeMenu={()=> setIsOpen(false)}/>
      </Menu>
    </div>
  );
}

export default CreateNewLink;
