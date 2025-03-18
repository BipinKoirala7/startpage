import { useEffect, useRef } from "react";

type TextAreaPropsT = {
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
};

function TextArea({
  name,
  id,
  value,
  className,
  onChange,
  placeholder,
}: TextAreaPropsT) {
  const rowLength = value?.split("\n").length || 1;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [value]);
  return (
    <textarea
      ref={textAreaRef}
      rows={rowLength}
      name={name}
      id={id}
      value={value}
      className={`${className} max-w-full bg-transparent text-text px-0 py-1 text-[1.25rem] flex-grow resize-none outline-none border-none`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default TextArea;
