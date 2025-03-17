import { CiSearch } from "react-icons/ci";
import Input from "../../../UI/Input";
import SkeletonUI from "../../../UI/SkeletonUI";
import IconButton from "../../../UI/Buttons/IconButton";
import { GoPlus } from "react-icons/go";
import useTodoStore from "../../../../store/useTodoStore";
import { useQuery } from "@tanstack/react-query";
import { getTodoListByUserId } from "../../../../util/TodoFunction";
import { useEffect } from "react";

function TodoListContainer() {
  let content;
  const loadTodos = useTodoStore((state) => state.loadTodos);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["todolist"],
    queryFn: async () => {
      try {
        const response = await getTodoListByUserId(
          "33ddf372-5f0d-48ec-a810-696213b6282f"
        );
        console.log("after the function returns", response);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return response.data;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message || "An unexpected error occurred.");
        }
        throw new Error("An unexpected error occurred.");
      }
    },
  });

  useEffect(() => {
    if (data) {
      loadTodos(data);
    }
  }, [data, loadTodos]);

  if (isLoading) {
    content = <SkeletonUI count={4} width={150} height={100} />;
  }

  if (isError) {
    content = (
      <>
        <p>{error.message}</p>
      </>
    );
  }

  if (data && data.length === 0) {
    content = (
      <>
        <p>No Todo Lists Available</p>
      </>
    );
  }

  if (data && data.length > 0) {
    content = (
      <>
        {data.map((item) => {
            return (
              <div className="flex items-center gap-2">
                    <input type="checkbox" key={item.todo_id} id={item.todo_id} name={item.todo_id} value={item.todo_id} />
                    <label htmlFor={item.todo_id}>{item.todo_title}</label>
              </div>
            );
        })}
      </>
    );
  }

  return (
    <div className="flex flex-col gap-2 px-1">
      <p className="text-[1.25rem]">Todo List</p>
      <div className="flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center bg-secondary px-2 py-1 rounded-md">
          <CiSearch className="text-[1.5rem]" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 overflow-y-auto p-1">
          {content}
        </div>
      </div>
      <IconButton className="w-full p-2 rounded-md border-[1px] border-secondary hover:bg-secondary">
        <GoPlus className="text-[1.25rem]" />
        Add Todo List
      </IconButton>
    </div>
  );
}

export default TodoListContainer;
