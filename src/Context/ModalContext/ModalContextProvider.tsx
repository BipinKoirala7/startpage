import { ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";

import { FaCircleInfo } from "react-icons/fa6";
import ModalContext from "./ModalContext";
import { informativeClass } from "../../util/util";

export type ModalContent = {
  icon: JSX.Element;
  content: ReactNode;
  type: "sucess" | "fail" | "informative" | "none";
  modalId: string;
};

export type modalContentArr = Array<ModalContent>;
export interface ModalContextProps {
  modalContent: ModalContent[];
  addModalContent: (modalInfo: ModalContent) => void;
  removeModalContent: (modalId: string) => void;
}

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalContent, setModalContent] = useState<modalContentArr>([
    {
      icon: <FaCircleInfo className={`${informativeClass}`} />,
      content: (
        <p>
          this is the context moda element's 
        </p>
      ),
      type: "informative",
      modalId: uuid(),
    },
  ]);

  function addModalContent(modalInfo: ModalContent) {
    setModalContent((prev) => prev.concat(modalInfo));
  }

  function removeModalContent(modalId: string) {
    setModalContent((prev) =>
      prev.filter((modal) => {
        return modal.modalId !== modalId;
      })
    );
  }
  const contextValue: ModalContextProps = {
    modalContent,
    addModalContent,
    removeModalContent
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}
