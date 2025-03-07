import { ReactNode, useEffect, useRef } from "react";
import IconButton from "./Buttons/IconButton";
import { IoIosClose } from "react-icons/io";

type DialogPropsT = {
  children: ReactNode,
  isOpen: boolean,
  closeFunction:()=> void
};

function DialogUI(props: DialogPropsT) {
  const { children, isOpen,closeFunction } = props;
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
      if (isOpen && dialogRef.current && !dialogRef.current.open) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.close();
      }
},[isOpen])
  return (
    <dialog
      ref={dialogRef}
      style={{
        backdropFilter: "blur(5px)",
      }}
      className=" bg-transparent w-full h-full rounded-[1rem] text-white  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-none outline-none z-20  items-center justify-center transition-all"
    >
      <div className=" w-full h-full flex items-center justify-center rounded-[1rem]">
        <div className="relative w-fit h-fit bg-surface p-10  rounded-[1rem]">
          {children}
        <button
          title="close dialog"
          onClick={() => {
            dialogRef.current?.close();
            closeFunction();
          }}
          className="absolute top-[.25rem] right-[.25rem] "
        >
          <IconButton
            className="  top-0 left-0 p-2 bg-input rounded-[50%] hover:bg-accent2"
            needTooltip={false}
            tooltipPlaceholder={"close"}
            onClick={() => {dialogRef.current?.close();}}
          >
            <IoIosClose className="text-[1.5rem] text-accent1" />
          </IconButton>
        </button>
        </div>
      </div>
    </dialog>
  );
}

export default DialogUI;