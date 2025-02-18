import { useEffect, useRef } from "react";
import { ModalContextProps } from "../../../Context/ModalContextProvider";
import { useModalContext } from "../../../util/util";
import { createPortal } from "react-dom";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import IconButton from "../Buttons/IconButton";

function Modal() {
  const { modalContent }: ModalContextProps = useModalContext();
  const counter = useRef(0);
  const modalContainer = useRef<HTMLDivElement>(null);
  const modalWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (modalWrapper.current) {
      modalWrapper.current.classList.remove("modalAnimationIn");
      void modalWrapper.current.offsetWidth;
      modalWrapper.current.classList.add("modalAnimationIn");
    }
    const interval = setInterval(() => {
      console.log(counter.current)
      if (counter.current < 100) {
        counter.current++;
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) {
          console.log(progressBar)
          progressBar.style.width = `${counter.current}%`;
        }
      } else {
        clearInterval(interval);
        counter.current = 0;
        if (modalWrapper.current) {
          modalWrapper.current.classList.add("modalAnimationOut");
          setTimeout(() => {
            modalWrapper.current?.classList.remove("modalAnimationOut");
            modalWrapper.current?.classList.remove("modalAnimationIn");
          }, 500);
        }
      }
    }, 100)
        return () => {
          clearInterval(interval);
        };
  },
   [modalContent]);
  return createPortal(
    <div
      ref={modalWrapper}
      id="modal-wrapper"
      style={{
        width: "fit-content",
        maxWidth: "75%",
        height: "fit-content",
        position: "fixed",
        top: "5%",
        right: "-110%",
        backgroundColor: "#bbf7d0",
        borderRadius: "0.25rem",
        color: "black",
        fontSize: "0.9rem",
      }}
      className=" "
    >
      <div
        ref={modalContainer}
        id="modal-container"
        className="flex items-center gap-3 relative px-4 py-2"
      >
        <IoIosCheckmarkCircle className="w-10 h-10 fill-green-500  rounded-full " />
        {modalContent}
        <IconButton
          className="p-2 hover:bg-green-500 hover:text-white rounded-full aspect-square"
          needTooltip={false}
          tooltipPlaceholder="close"
          onClick={()=> counter.current = 99}
        >
          <IoCloseOutline className=""/>
        </IconButton>
        <div id="progress-bar"></div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
}

export default Modal;
