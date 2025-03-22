import { FaNoteSticky } from "react-icons/fa6";
import { useRef, useState } from "react";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import NotesContainer from "./NotesContainer";

function Notes() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-text" ref={parentRef}>
      <IconButton
        className="p-2 rounded-sm hover:bg-primary"
        needTooltip={!isOpen}
        tooltipPlaceholder="Notes"
        tooltipDirection="left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaNoteSticky className="text-[1.5rem]" />
      </IconButton>
      <Menu
        header="Notes"
        open={isOpen}
        closeFn={() => setIsOpen(false)}
        direction="top-left"
        parentRef={parentRef}
        className="w-fit max-w-[40rem] max-h-[25rem] overflow-y-auto "
      >
        <NotesContainer />
      </Menu>
    </div>
  );
}

export default Notes;
