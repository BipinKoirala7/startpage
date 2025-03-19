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
      name={name}
      id={id}
      value={value}
      className={`${className} max-w-full bg-transparent text-text resize-none outline-none`}
      onChange={onChange}
      placeholder={placeholder}
      rows={1}
    />
  );
}

export default TextArea;
