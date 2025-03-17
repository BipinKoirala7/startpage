import { GoPlus } from "react-icons/go";
import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import { useRef, useState } from "react";


function AddTodoBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="" ref={parentRef}>
      <IconButton className="w-full p-2 rounded-md border-[1px] border-secondary hover:bg-secondary">
        <GoPlus className="text-[1.25rem]" />
        Add Todo List
          </IconButton>
          <Menu open={isOpen} closeFn={() => setIsOpen(false)} className="" parentRef={parentRef} direction="top-left">
              <div>
                  
              </div>
        </Menu>
    </div>
  );
}

export default AddTodoBtn