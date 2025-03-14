import { GoPlus } from "react-icons/go";
import IconButton from "../../../UI/Buttons/IconButton";
import { useRef, useState } from "react";
import Menu from "../../../UI/Modal/Menu";
import Input from "../../../UI/Input";

function AddNoteBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  console.log(noteTitle, noteDescription);

  const menuParentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative" ref={menuParentRef}>
      <IconButton
        className="p-2 flex items-center justify-center border-[2px] border-secondary rounded-md w-full hover:bg-secondary"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GoPlus className=" text-[1.25rem]" />
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
            <Input
              placeholder="Title"
              type="text"
              className="bg-transparent text-text px-0 py-1 text-[1.25rem] flex-grow"
              onChange={(e) => setNoteTitle(e.target.value)}
            />
            <p className="text-[0.75rem] text-neutral">{new Date().toLocaleString()}</p>
            <textarea
              name=""
              id=""
              className="bg-transparent outline-none h-full flex-grow"
              placeholder="Write here..."
              onChange={(e) => setNoteDescription(e.target.value)}
            />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default AddNoteBtn;
