import { todoListT } from "../../../../../types";
import Input from "../../../../UI/Input";

type TodoListTitlePropsT = {
  todoList: todoListT;
  setTodoList: React.Dispatch<React.SetStateAction<todoListT>>;
};

function TodoListTitle({ todoList, setTodoList }: TodoListTitlePropsT) {
  return (
    <Input
      type="text"
      placeholder="Title..."
      className="w-full bg-transparent text-[1.25rem] p-0"
      value={todoList.todo_list_title}
      onChange={(e) => {
        setTodoList((prev) => ({
          ...prev,
          todo_list_title: e.target.value,
        }));
      }}
    />
  );
}

export default TodoListTitle;
