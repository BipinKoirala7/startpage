import { createContext } from "react";
import { ModalContextProps } from "./ModalContextProvider";

const ModalContext = createContext<ModalContextProps | null>(null);
export default ModalContext;