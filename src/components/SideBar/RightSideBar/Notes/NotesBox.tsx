import { useRef, useState } from "react";

import Menu from "../../../UI/Modal/Menu";
import ViewNote from "./ViewNote/ViewNote";
import { noteT } from "../../../../types";

type NoteBoxPropsT = {
  note: noteT;
};

function NoteBox(props: NoteBoxPropsT) {
  const { note_id, note_title, created_at, note_content } = props.note;

  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        ref={parentRef}
        key={note_id}
        className="max-w-[10rem] flex flex-col gap-2 justify-between border-[2px] border-secondary px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-250 cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col h-full justify-between">
          <p className="text-[1.25rem] text-ellipsis line-clamp-2">
            {note_title}
          </p>
          <p className="text-[0.75rem] text-ellipsis line-clamp-2">
            {note_content}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[0.5rem] text-neutral text-nowrap">
            {new Date(created_at).toDateString()}
          </p>
        </div>
      </div>
      <Menu
        open={isOpen}
        parentRef={parentRef}
        direction="center"
        closeFn={() => setIsOpen(false)}
        className="min-w-[20rem] flex"
      >
        <ViewNote note={props.note} closeFn={() => setIsOpen(false)} />
      </Menu>
    </>
  );
}

export default NoteBox;
