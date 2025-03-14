// import Link from "../class/link";

import { useContext } from "react";
import ModalContext from "../Context/ModalContext/ModalContext";
import { ModalContextProps } from "../Context/ModalContext/ModalContextProvider";

export function scrollForward() {
  const scrollLeft = document.getElementById(
    "folderOptions-container"
  )?.scrollLeft;
  console.log("move forward");
  const offsewidth = document.getElementById("folderOptions-container")
    ?.children[0].scrollWidth;
  if (offsewidth && scrollLeft) {
    document.getElementById("folderOptions-container")?.scrollTo({
      left: scrollLeft + offsewidth / 10,
      behavior: "smooth",
    });
  }
}

export function scrollBack() {
  const scrollLeft = document.getElementById(
    "folderOptions-container"
  )?.scrollLeft;
  const offsewidth = document.getElementById(
    "folderOptions-container"
  )?.offsetWidth;
  console.log("move back");
  if (offsewidth && scrollLeft) {
    document.getElementById("folderOptions-container")?.scrollTo({
      left: scrollLeft - offsewidth,
      behavior: "smooth",
    });
  }
}

export async function checkImageLink(imageUrl: string) {
  try {
    const image = new Image();
    image.src = imageUrl;
  } catch {
    throw Error("Error during image link checking");
  }
}

export function urlLinkClick(url: string) {
  window.open(url, "_blank");
}
export function useModalContext() {
  const context = useContext<ModalContextProps | null>(ModalContext);
  if (!context) {
    throw new Error("Error occured in the context provider");
  }
  return context;
}
