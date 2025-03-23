import { ChangeEvent, forwardRef } from "react";

type InputPropsT = {
  value?: string;
  name?: string;
  className: string;
  id?: string;
  type: "text" | "number" | "color";
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
      className={`${className} bg-secondary  rounded-[0.25rem] outline-none px-2 py-1border-none`}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
    />
  );
});

export default Input;
