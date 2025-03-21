import { GoPlus } from "react-icons/go";
import { v4 as uuid } from "uuid";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import useNoteStore from "../../../../store/useNoteStore";
import { noteT } from "../../../../types";
import useUserStore from "../../../../store/userStore";
import { createNote } from "../../../../util/noteFunctions";
import TextArea from "../../../UI/TextArea";

function AddNoteBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const addNote = useNoteStore((state) => state.addNote);
  const user_id = useUserStore((state) => state.user?.user_id);

  // change afterward to a concrete dynamic fn
  const mutateFn = async () => {
    const newNote: noteT = {
      note_id: uuid(),
      user_id: user_id || "33ddf372-5f0d-48ec-a810-696213b6282f",
      note_title: noteTitle,
      note_content: noteDescription,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    try {
      const data = await createNote(newNote);
      if (data.error) {
        throw new Error("Invalid Data received");
      } else {
        addNote(newNote); // Ensure state is updated immediately
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate } = useMutation({
    mutationFn: mutateFn,
    onSuccess: () => {
      console.log("Successfully added a note");
      setNoteTitle(""); 
      setNoteDescription("");
    },
    onError: (error) => {
      console.log("Error occurred in Add Note Btn", error);
    },
  });

  const menuParentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative" ref={menuParentRef}>
      <IconButton
        className="p-2 border-[2px] border-secondary rounded-md w-full  hover:bg-secondary"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GoPlus className=" text-[1.25rem]" />
        Add Note
      </IconButton>
      <Menu
        open={isOpen}
        parentRef={menuParentRef}
        direction="center"
        closeFn={() => setIsOpen(false)}
        className="min-w-[20rem] min-h-[20rem]"
      >
        <div className="flex flex-col gap-4 px-2 py-2 min-h-full min-w-full">
          <p>New Note</p>
          <div className="flex flex-col gap-2 h-full">
            <TextArea
              placeholder="Title..."
              className="text-[1.25rem]"
              onChange={(e) => {
                setNoteTitle(e.target.value);
              }}
              value={noteTitle}
            />
            <p className="text-[0.75rem] text-neutral">
              {new Date().toLocaleString()}
            </p>
            <TextArea
              className="bg-transparent outline-none h-full"
              placeholder="Write here..."
              onChange={(e) => {
                setNoteDescription(e.target.value);
              }}
              value={noteDescription}
            />
          </div>
          <IconButton
            className="border-secondary border-[1px] text-text rounded-md px-4 py-2 text-center hover:bg-secondary transition-colors duration-250 cursor-pointer"
            onClick={() => {
              mutate(); // Trigger mutation
              setIsOpen(false); // Close the modal
            }}
          >
            Add Note
          </IconButton>
        </div>
      </Menu>
    </div>
  );
}

export default AddNoteBtn;
