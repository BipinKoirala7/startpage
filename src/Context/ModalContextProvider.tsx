import {  Dispatch, ReactNode, SetStateAction, useState } from "react";

import  ModalContext  from "./ModalContext";

type ModalContent = ReactNode | null;
export interface ModalContextProps {
  modalContent: ModalContent;
  setModalContent: Dispatch<SetStateAction<ModalContent>>;
}

export default function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [modalContent, setModalContent] = useState<ModalContent>(
    <div>
      <p>this is a message from the modal context provider</p>
    </div>
    );

    const contextValue: ModalContextProps = {
      modalContent,
      setModalContent,
    };

  return (
      <ModalContext.Provider value={contextValue}>
          {children}
      </ModalContext.Provider>
  );
}