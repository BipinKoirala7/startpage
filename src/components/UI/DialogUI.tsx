import { ReactNode, useEffect, useRef } from "react";
import IconButton from "./Buttons/IconButton";

type DialogPropsT = {
  children: ReactNode;
  isOpen: boolean;
};

function DialogUI(props: DialogPropsT) {
  const { children, isOpen } = props;
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);
  return (
    <dialog
      open={isOpen}
      ref={dialogRef}
      className="rounded-[1rem] backdrop:bg-black/50 backdrop:backdrop-blur-lg bg-primary text-white p-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      {children}
      <button>
        <IconButton
          className=""
          needTooltip={false}
          tooltipPlaceholder={"close"}
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </IconButton>
      </button>
    </dialog>
  );
}

export default DialogUI;
