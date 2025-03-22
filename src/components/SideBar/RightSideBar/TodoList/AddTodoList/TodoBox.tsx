import { useEffect, useRef } from "react";
import TextArea from "../../../../UI/TextArea";

type TodoBoxPropsT = {
  todo_description: string;
  todo_id:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function TodoBox({ todo_description, todo_id, onChange }: TodoBoxPropsT) {
  const inputBox = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputBox.current?.focus();
  },[])
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id="" name="" value="" disabled />
      <TextArea
        id={todo_id}
        name={todo_id}
        value={todo_description}
        placeholder="Todo..."
        className="w-full bg-transparent"
        onChange={onChange}
        preventDefaultEnter={true}
      />
    </div>
  );
}

export default TodoBox;
