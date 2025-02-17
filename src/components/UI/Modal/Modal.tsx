import { useEffect } from "react";
import { ModalContextProps } from "../../../Context/ModalContextProvider";
import { useModalContext } from "../../../util/util";
import { createPortal } from "react-dom";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import IconButton from "../Buttons/IconButton";

function Modal() {
  const { modalContent }: ModalContextProps = useModalContext();
  useEffect(() => {
    console.log(modalContent);
    console.log("modal ran");
  }, [modalContent]);
  return createPortal(
    <div className="w-fit max-w-[25rem] h-fit fixed top-[5%] right-[2.5%] bg-input rounded-[.25rem] px-4 py-2 text-white flex items-center gap-3 border-[1px] border-green-500">
      <IoIosCheckmarkCircle className="w-12 h-12" />
      {modalContent}
      <IconButton
        className="p-2 hover:bg-primary rounded-full aspect-square"
        needTooltip={false}
        tooltipPlaceholder="close"
        onClick={() => {}}
      >
        <IoCloseOutline />
      </IconButton>
    </div>,
    document.getElementById("modal") as Element
  );
}

export default Modal;
