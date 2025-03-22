import { ChangeEvent, forwardRef } from "react";

type InputPropsT = {
  value?: string;
  name?: string;
  className: string;
  id?: string;
  type: "text" | "number";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
};

const Input = forwardRef<HTMLInputElement, InputPropsT>((props, ref) => {
  const { className, type, value, id, onChange, disabled, name, placeholder } =
    props;
  return (
    <input
      ref={ref}
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      className={`${className} bg-secondary text-text rounded-md outline-none border-none`}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
    />
  );
});

export default Input;
