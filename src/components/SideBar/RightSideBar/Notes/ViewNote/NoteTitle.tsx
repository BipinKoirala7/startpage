import { noteT } from "../../../../../types";
import TextArea from "../../../../UI/TextArea";

type noteTitlePropsT = {
  noteInfo: noteT;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function NoteTitle({ noteInfo, onChange }: noteTitlePropsT) {
  return (
    <TextArea
      placeholder="Title"
      className="text-[1.25rem] h-fit"
      value={noteInfo.note_title}
      onChange={onChange}
    />
  );
}

export default NoteTitle;
