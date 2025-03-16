import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AiOutlineDelete } from "react-icons/ai";

import { noteT, patchMethod } from "../../../../../types";
import useNoteStore from "../../../../../store/useNoteStore";
import {
  deleteNote as deleteNoteFn,
  updateNote as updateNoteFn,
} from "../../../../../util/noteFunctions";
import IconButton from "../../../../UI/Buttons/IconButton";
import NoteTitle from "./NoteTitle";
import NoteContent from "./NoteContent";

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
    created_at: note.created_at,
    updated_at: note.updated_at,
  });
  const [isTitleUpdated, setIsTitleUpdated] = useState(false);
  const [isContentUpdated, setIsContentUpdated] = useState(false);

  const updateNote = useNoteStore((state) => state.updateNote);
  const deleteNote = useNoteStore((state) => state.deleteNote);

  const mutatFn = async () => {
    try {
      if (isTitleUpdated) {
        const patchInfo: patchMethod = {
          changeProperty: "note_title",
          new_value: noteInfo.note_title,
        };
        const data = await updateNoteFn(patchInfo, note);
        console.log(data);
      }
      if (isContentUpdated) {
        const patchInfo: patchMethod = {
          changeProperty: "note_content",
          new_value: noteInfo.note_content,
        };
        const data = await updateNoteFn(patchInfo, note);
        console.log(data);
      }
      updateNote(noteInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: mutatFn,
    onSuccess: () => {
      console.log("Successfully updated a note");
    },
  });

  function handleSave() {
    setNoteInfo((prev) => ({ ...prev, updated_at: new Date().toISOString() }));
    mutate();
  }

  const date = new Date(note.updated_at);

  const handleDeleteBtn = async () => {
    try {
      await deleteNoteFn(note);
      deleteNote(note);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (noteInfo.note_title !== note.note_title) {
      setIsTitleUpdated(true);
    } else {
      setIsTitleUpdated(false);
    }
    if (noteInfo.note_content !== note.note_content) {
      setIsContentUpdated(true);
    } else {
      setIsContentUpdated(false);
    }
  }, [noteInfo, note]);

  return (
    <div className="flex flex-col gap-2 h-full p-4 w-full">
      <div className="h-full w-full flex flex-col gap-2">
        <NoteTitle
          noteInfo={noteInfo}
          onChange={(e) =>
            setNoteInfo({ ...noteInfo, note_title: e.target.value })
          }
        />
        <p className="text-[0.75rem] text-neutral">
          last updated :-{date.toLocaleString()}
        </p>
        <NoteContent
          noteInfo={noteInfo}
          onChange={(e) =>
            setNoteInfo({ ...noteInfo, note_content: e.target.value })
          }
        />
      </div>
      <div className="flex gap-2 items-center justify-between w-full">
        <button
          onClick={handleSave}
          className={`border-secondary border-[1px] text-text rounded-md px-4 py-2 text-center hover:bg-secondary transition-colors duration-300 cursor-pointer ${
            !(isTitleUpdated || isContentUpdated) ? "opacity-50" : ""
          }`}
          disabled={!(isTitleUpdated || isContentUpdated)}
        >
          {isPending ? "Saving..." : "Save"}
        </button>
        <IconButton
          className="w-fit gap-2 rounded-md px-4 py-2 text-center bg-accent2"
          onClick={handleDeleteBtn}
        >
          <AiOutlineDelete className="text-[1.25rem]" />
          <p>Delete</p>
        </IconButton>
      </div>
    </div>
  );
}

export default ViewNote;
