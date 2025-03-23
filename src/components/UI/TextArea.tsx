import { useEffect, useRef } from "react";

type TextAreaPropsT = {
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  ref?: React.Ref<HTMLTextAreaElement>;
  preventDefaultEnter?: boolean;
  focus?:boolean
};

function TextArea({
  name,
  id,
  value,
  className,
  onChange,
  placeholder,
  preventDefaultEnter,
  focus
}: TextAreaPropsT) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current && preventDefaultEnter) {
      textAreaRef.current.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    }
  }, [preventDefaultEnter]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
    if(focus) textAreaRef.current?.focus();
  }, [focus, value]);
  return (
    <textarea
      ref={textAreaRef}
      name={name}
      id={id}
      value={value}
      className={`${className} max-w-full text-text resize-none outline-none`}
      onChange={onChange}
      placeholder={placeholder}
      rows={1}
    />
  );
}

export default TextArea;
