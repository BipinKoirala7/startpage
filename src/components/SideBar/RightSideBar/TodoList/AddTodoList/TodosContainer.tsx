import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import TodoBox from "./TodoBox";
import { todoT } from "../../../../../types";

type TodosContainerPropsT = {
  todo_list_id: string;
  user_id: string;
};

function TodosContainer({ todo_list_id, user_id }: TodosContainerPropsT) {
  const created_time = new Date();

  const createNewTodo = (): todoT => {
    return {
      user_id: user_id,
      todo_list_id: todo_list_id,
      todo_id: uuid(),
      todo_description: "",
      created_at: created_time.toISOString(),
    };
  };

  const [todosArr, setTodosArr] = useState<todoT[]>([createNewTodo()]);

  function handleChange(
    todo_id: string,
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const updatedArr = todosArr.map((item) => {
      if (item.todo_id === todo_id) {
        return {
          ...item,
          todo_description: e.target.value,
        };
      } else {
        return item;
      }
    });
    setTodosArr(updatedArr);
  }

  function removeTodoFromList(todo_id: string) {
    setTodosArr((prev) => prev.filter((item) => item.todo_id !== todo_id));
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        const newTodo = createNewTodo();
        setTodosArr((prev) => [...prev, newTodo]);
        const inputBox = document.getElementById(newTodo.todo_id);
        if (inputBox) {
          inputBox.focus();
        }
      }
      if (e.key === "Backspace") {
        console.log(e.target)
        if (todosArr.length == 1) {
          console.log("returning")
          return
        }
        else {
          const target = e.target as HTMLInputElement;
          if (target && target.id) {
            removeTodoFromList(target.id);
          }
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [createNewTodo, todosArr.length]);

  console.log(todosArr);

  return (
    <div className="flex flex-col gap-2">
      {todosArr.map((item) => (
        <TodoBox
          key={item.todo_id}
          todo_description={item.todo_description}
          todo_id={item.todo_id}
          onChange={(e) => handleChange(item.todo_id, e)}
        />
      ))}
    </div>
  );
}

export default TodosContainer;
