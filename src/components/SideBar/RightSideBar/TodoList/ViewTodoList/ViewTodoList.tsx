import { useRef, useState } from "react";
import { todoListT } from "../../../../../types";
import Menu from "../../../../UI/Modal/Menu";

type viewTodoListPropsT = {
  todoList: todoListT;
};

function ViewTodoList({ todoList }: viewTodoListPropsT) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={parentRef}>
      <div
        className="border-[1px] border-secondary px-4 py-2 rounded-md cursor-pointer hover:bg-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{todoList.todo_list_title}</p>
      </div>
      <Menu
        className=""
        open={isOpen}
        closeFn={() => setIsOpen(!isOpen)}
        parentRef={parentRef}
        direction="center"
      >
        <div className="flex flex-col gap-2">
          <p>{todoList.todo_list_title}</p>
          <p>{new Date(todoList.created_at).toLocaleString()}</p>
          <div></div>
        </div>
      </Menu>
    </div>
  );
}

export default ViewTodoList;
