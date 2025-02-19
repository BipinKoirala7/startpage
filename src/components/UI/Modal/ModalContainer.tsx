import { useEffect, useRef, useState } from "react";

import { ModalContextProps } from "../../../Context/ModalContextProvider";
import { useModalContext } from "../../../util/util";
import ModalUI from "./ModalUI";

function ModalContainer() {
  const { modalContent }: ModalContextProps = useModalContext();
  console.log(modalContent);
  const [isOpen, setIsOpen] = useState(false);
  const modalContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(isOpen);
    if (modalContent.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    if (isOpen && modalContainer.current) {
      modalContainer.current.classList.add("modalAnimationIn");
    }
  }, [modalContent, isOpen]);
  return (
    <div
      ref={modalContainer}
      id="modal-wrapper"
      className="w-fit h-screen fixed top-[0%] right-[-110%] text-black font-[0.9rem]  rounded-t-[.25rem] max-w-[90%] bg-neutral p-2 flex gap-4 flex-col transition-all duration-300
      sm:max-w-[80%]
      md:max-w-[60%]
      lg:max-w-[20rem]
      xl:max-w-[25rem]"
    >
      <div className="relative w-full h-full">
        {modalContent.map((item) => (
          <ModalUI
            key={item.modalId}
            content={item.content}
            type={item.type}
            icon={item.icon}
            modalId={item.modalId}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalContainer;
