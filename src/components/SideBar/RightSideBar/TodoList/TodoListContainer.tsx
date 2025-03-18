import { CiSearch } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import noTodo from "../../../../../public/noData.svg";

import Input from "../../../UI/Input";
import SkeletonUI from "../../../UI/SkeletonUI";
import AddTodoListBtn from "./AddTodoList/AddTodoListBtn";
import { getTodoListByUserId } from "../../../../util/TodoListFunction";
import ViewTodoList from "./ViewTodoList/ViewTodoList";
import useTodoListStore from "../../../../store/useTodoListStore";

function TodoListContainer() {
  let content;
  const loadTodoList= useTodoListStore((state) => state.loadTodoList);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["todolist"],
    queryFn: async () => {
      try {
        const response = await getTodoListByUserId(
          "33ddf372-5f0d-48ec-a810-696213b6282f"
        );
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
      loadTodoList(data);
    }
  }, [data, loadTodoList]);

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
      <div className="col-span-2 flex flex-col gap-2 items-center p-1">
        <img src={noTodo} alt="No Data Available" className="w-32" />
        <p>No to do list available</p>
      </div>
    );
  }

  if (data && data.length > 0) {
    content = (
      <>
          {data.map((item) => (
            <ViewTodoList key={item.todo_list_id} todoList={item} />
          ))}
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
      <AddTodoListBtn />
    </div>
  );
}

export default TodoListContainer;
