import { GoPlus } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { v4 } from "uuid";

import IconButton from "../../../../UI/Buttons/IconButton";
import Menu from "../../../../UI/Modal/Menu";
import { todoListT } from "../../../../../types";
import { createTodoList } from "../../../../../util/TodoListFunction";
import { useUser } from "../../../../../hooks/useUser";
import TodoListTitle from "./TodoListTitle";
import TodosContainer from "./TodosContainer";

function AddTodoListBtn() {
  const todo_list_id = v4();
  const created_time = new Date();
  const user = useUser();
 const [ save, setSave ] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const [todoList, setTodoList] = useState<todoListT>({
    user_id: user?.user_id || "33ddf372-5f0d-48ec-a810-696213b6282f",
    todo_list_id: todo_list_id,
    todo_list_title: "",
    created_at: created_time.toISOString(),
    updated_at: created_time.toISOString(),
  });

  console.log(todoList.todo_list_title);

  const mutateFn = async () => {
    try {
      const response = await createTodoList(todoList);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "An unexpected error occurred.");
      } else {
        throw new Error("An unexpected error occurred.");
      }
    }
  };

  const { mutate } = useMutation({ mutationFn: mutateFn });

  return (
    <>
      <div className="" ref={parentRef} onClick={() => setIsOpen(!isOpen)}>
        <IconButton className="w-full p-2 rounded-md border-[1px] border-secondary hover:bg-secondary">
          <GoPlus className="text-[1.25rem]" />
          Add Todo List
        </IconButton>
      </div>
      <Menu
        header="New TodoList"
        open={isOpen}
        closeFn={() => setIsOpen(false)}
        className="w-fit"
        parentRef={parentRef}
        direction="center"
      >
        <div className="flex flex-col gap-2 px-3 py-3">
          <TodoListTitle todoList={todoList} setTodoList={setTodoList} />
          <p className="text-[0.75rem] text-neutral">
            {created_time.toLocaleString()}
          </p>
          <TodosContainer
            save={save}
            todo_list_id={todo_list_id}
            user_id={user?.user_id || "33ddf372-5f0d-48ec-a810-696213b6282f"}
          />
          <IconButton
            className="w-full bg-transparent border-[1px] border-secondary rounded-md hover:bg-secondary py-1"
            onClick={() => {
              mutate();
              setSave(true);
              setIsOpen(false);
            }}
          >
            Add
          </IconButton>
        </div>
      </Menu>
    </>
  );
}

export default AddTodoListBtn;
