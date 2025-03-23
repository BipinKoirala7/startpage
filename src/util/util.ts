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

export function getFullLink(link:string) {
  if (link.includes("https")) return link;
  else if (link.includes("www")) return "https://" + link;
  else return "https://" + "www." + link;
}

export function getShortLink(link:string) {
  if (link.includes("https://")) {
    const newLink = link.split("https://")[1];
    if (newLink.includes("www.")) return newLink.split("www.")[1];
    else return newLink;
  } else if (link.includes("www.")) return link.split("www.")[1];
  else return link;
}