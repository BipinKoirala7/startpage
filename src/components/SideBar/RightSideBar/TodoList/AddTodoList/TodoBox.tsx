import { useEffect, useRef } from "react";
import Input from "../../../../UI/Input";

type TodoBoxPropsT = {
  todo_description: string;
  todo_id:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TodoBox({ todo_description, todo_id, onChange }: TodoBoxPropsT) {
  const inputBox = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputBox.current?.focus();
  },[])
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id="" name="" value="" disabled />
      <Input
        ref={inputBox}
        id={todo_id}
        name={todo_id}
        type="text"
        value={todo_description}
        placeholder="Todo..."
        className="w-full bg-transparent"
        onChange={onChange}
      />
    </div>
  );
}

export default TodoBox;
