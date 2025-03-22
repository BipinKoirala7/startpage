import { LuListTodo } from "react-icons/lu";
import { useRef, useState } from "react";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import TodoListContainer from "./TodoListContainer";

function TodoList() {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={parentRef} className="">
      <IconButton
        className="p-2 rounded-sm hover:bg-primary"
        needTooltip={!isOpen}
        tooltipPlaceholder="Todo List"
        tooltipDirection="left"
        onClick={() => setIsOpen(true)}
      >
        <LuListTodo className="text-[1.5rem]" />
      </IconButton>
      <Menu
        header="Todo List"
        open={isOpen}
        closeFn={() => setIsOpen(false)}
        className=""
        parentRef={parentRef}
        direction="top-left"
      >
        <TodoListContainer />
      </Menu>
    </div>
  );
}

export default TodoList;
