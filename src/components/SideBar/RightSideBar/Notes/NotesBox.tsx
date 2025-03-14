import { useRef, useState } from "react";
import Menu from "../../../UI/Modal/Menu";
import ViewNote from "./ViewNote";
import { noteT } from "../../../../types";

type NoteBoxPropsT = noteT

function NoteBox(props: NoteBoxPropsT) {
  const { note_id, note_title, created_At ,note_content} = props;

  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        ref={parentRef}
        key={note_id}
        className="max-w-[10rem] flex flex-col gap-2 justify-between border-[2px] border-secondary px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-250 cursor-pointer"
        onClick={()=> setIsOpen(!isOpen)}
      >
        <p className="text-[1.25rem] text-ellipsis line-clamp-3">{note_title}</p>
        <div className="flex gap-2 items-center">
          {/* <div className="flex items-center justify-center p-1 border-[1px] border-secondary rounded-[50%]">
            <CiUser className="text-[1.25rem]" />
          </div> */}
          <p className="text-[0.5rem] text-neutral text-nowrap">
            {new Date(created_At).toDateString()}
          </p>
        </div>
      </div>
      <Menu open={isOpen} parentRef={parentRef} direction="center" closeFn={() => setIsOpen(false)} className="min-w-[20rem] flex">
        <ViewNote note={{
          user_id:"123",
          note_id,
          note_title:note_title,
          note_content:note_content,
          created_At: created_At,
          updated_At:""
        }} />
      </Menu>
    </>
  );
}

export default NoteBox;
