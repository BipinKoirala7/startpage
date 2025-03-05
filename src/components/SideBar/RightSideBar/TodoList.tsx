import { LuListTodo } from "react-icons/lu";
import { useState } from "react";

import IconButton from "../../UI/Buttons/IconButton";
import Modal from "../../UI/Modal/Modal";

function TodoList() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <IconButton
        className="p-2 rounded-sm hover:bg-primary"
        needTooltip={!isOpen}
        tooltipPlaceholder="Todo List"
        tooltipDirection="left"
      >
        <LuListTodo className="text-[1.5rem]" />
      </IconButton>
        <Modal className="min-w-40" shouldOpen={isOpen}>
          <div>this is the modal of the list to do</div>
        </Modal>
    </div>
  );
}

export default TodoList;
