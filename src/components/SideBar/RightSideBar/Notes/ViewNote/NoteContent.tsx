import { useEffect, useRef } from "react";
import { noteT } from "../../../../../types";

type noteContentPropsT = {
  noteInfo: noteT;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function NoteContent({ noteInfo, onChange }: noteContentPropsT) {
  const rowLength = noteInfo.note_content.split("\n").length;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [noteInfo.note_content]);
  return (
    <textarea
      ref={textAreaRef}
      rows={rowLength}
      name=""
      id=""
      className="bg-transparent outline-none h-fit  flex-grow resize-none"
      placeholder="Write here..."
      value={noteInfo.note_content}
      onChange={onChange}
    />
  );
}

export default NoteContent;
