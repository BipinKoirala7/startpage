import { useState } from "react";
import { noteT } from "../../../../types";
import useNoteStore from "../../../../store/useNoteStore";

type viewNotePropsT = {
  note: noteT;
};

function ViewNote(props: viewNotePropsT) {
    const { note } = props;
    const [noteInfo, setNoteInfo] = useState<noteT>({
        user_id: note.user_id,
        note_id: note.note_id,
        note_title: note.note_title,
        note_content: note.note_content,
        created_At: note.created_At,
        updated_At: note.updated_At
    })
    const updateNote = useNoteStore((state) => state.updateNote);

    function handleSave() {
        updateNote(noteInfo);
    }

  return (
    <div className="flex flex-col gap-2 h-full p-4 w-full">
      <div className="h-full w-full flex flex-col gap-2">
        <textarea
          placeholder="Title"
          className="bg-transparent text-text px-0 py-1 text-[1.25rem] outline-none border-none h-full resize-none"
          value={noteInfo.note_title}
          onChange={(e) =>
            setNoteInfo({ ...noteInfo, note_title: e.target.value })
          }
        />
        <p className="text-[0.75rem] text-neutral">
          {new Date().toLocaleString()}
        </p>
        <textarea
          name=""
          id=""
          className="bg-transparent outline-none h-full flex-grow resize-none"
          placeholder="Write here..."
          value={noteInfo.note_content}
          onChange={(e) =>
            setNoteInfo({ ...noteInfo, note_content: e.target.value })
          }
        />
          </div>
          <button onClick={handleSave} className="bg-primary text-text rounded-md px-4 py-2 text-center">Save</button>
    </div>
  );
}

export default ViewNote;
