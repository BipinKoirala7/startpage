import { ChangeEvent } from "react";

type InputPropsT = {
  value?: string,
  name?:string,
  className: string,
  id?: string,
  type: "text" | "number",
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  disabled?: boolean,
  placeholder?:string
};

function Input(props: InputPropsT) {
  const { className, type, value, id, onChange,disabled,name,placeholder } = props;
  return (
    <input
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      className={`${className} px-2 py-1 bg-secondary text-text rounded-md outline-none border-none`}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default Input;
