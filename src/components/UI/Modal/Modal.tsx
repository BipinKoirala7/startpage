// import { useEffect, useRef } from "react";
// import { ModalContextProps } from "../../../Context/ModalContextProvider";
// import { useModalContext } from "../../../util/util";
import { createPortal } from "react-dom";

import ModalContainer from "./ModalContainer";

function Modal() {
  // const { modalContent }: ModalContextProps = useModalContext();
  // const counter = useRef(0);
  // useEffect(() => {
  //   if (modalWrapper.current) {
  //     modalWrapper.current.classList.remove("modalAnimationIn");
  //     modalWrapper.current.classList.add("modalAnimationIn");
  //   }
  //   const progressBar = document.getElementById("progress-bar");
  //   const interval = setInterval(() => {
  //     if (counter.current < 100) {
  //       counter.current++;
  //       if (progressBar) {
  //         progressBar.style.width = `${counter.current}%`;
  //       }
  //     } else {
  //       counter.current = 0;
  //       if (progressBar) {
  //         progressBar.style.width = `${counter.current}%`;
  //       }
  //       if (modalWrapper.current) {
  //         modalWrapper.current.classList.add("modalAnimationOut");
  //         setTimeout(() => {
  //           modalWrapper.current?.classList.remove("modalAnimationOut");
  //           modalWrapper.current?.classList.remove("modalAnimationIn");
  //         }, 500);
  //         clearInterval(interval);
  //       }
  //     }
  //   }, 100);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [modalContent]);
  return createPortal(
    <ModalContainer ></ModalContainer>,
    document.getElementById("modal") as Element
  );
}

export default Modal;
