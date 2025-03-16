import { useEffect, useRef } from "react";
import { noteT } from "../../../../../types";

type noteTitlePropsT = {
  noteInfo: noteT;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function NoteTitle({ noteInfo, onChange }: noteTitlePropsT) {
    const rowLength = noteInfo.note_title.split("\n").length;
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    },[noteInfo.note_title])
  return (
      <textarea
          ref={textAreaRef}
          rows={rowLength}
      placeholder="Title"
      className="bg-transparent text-text px-0 py-1 text-[1.25rem] outline-none border-none h-full resize-none"
      value={noteInfo.note_title}
      onChange={onChange}
    />
  );
}

export default NoteTitle;
