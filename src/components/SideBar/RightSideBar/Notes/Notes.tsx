import { FaNoteSticky } from "react-icons/fa6";
import { useRef, useState } from "react";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import AddNoteBtn from "./AddNoteBtn";
import useNoteStore from "../../../../store/useNoteStore";
import NoteBox from "./NotesBox";

function Notes() {
  const notes = useNoteStore(state => state.notes)
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
        open={isOpen}
        closeFn={() => setIsOpen(false)}
        direction="top-left"
        parentRef={parentRef}
        className="w-fit text-text"
      >
        <div className="flex flex-col gap-4 px-2 py-1">
          <p className="text-[1.25rem]">Notes</p>
          <div className="bg-primary rounded-lg  grid grid-cols-2 gap-4 w-fit">
            {notes.map((item) => {
              return <NoteBox {...item} key={item.note_id} />;
            })}
          </div>
          <AddNoteBtn />
        </div>
      </Menu>
    </div>
  );
}

export default Notes;
