import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import IconButton from "../Buttons/IconButton";
import { RxCross2 } from "react-icons/rx";

type MenuPropsT = {
  children: ReactNode;
  open: boolean;
  parentRef: React.RefObject<HTMLElement>;
  direction:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  closeFn: () => void;
  className?: string;
  header?: string;
};

function Menu({
  open,
  parentRef,
  children,
  direction,
  closeFn,
  className,
  header,
}: MenuPropsT) {
  const [position, setPosition] = useState({
    top: "0px",
    left: "0px",
  });
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined);
  const [shouldShow, setShouldShow] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && parentRef.current) {
      setParentRect(parentRef.current.getBoundingClientRect());
    }
  }, [open, parentRef]);

  useEffect(() => {
    if (!open) return;

    const handleResize = () => {
      if (parentRef.current) {
        setParentRect(parentRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open, parentRef]);

  useEffect(() => {
    if (!modalContainerRef.current || !parentRect) return;

    const calculatePosition = () => {
      let top;
      let left;

      switch (direction) {
        case "top":
          top = parentRect.top - modalContainerRef.current!.offsetHeight + "px";
          left =
            parentRect.left +
            parentRect.width / 2 -
            modalContainerRef.current!.offsetWidth / 2 +
            "px";
          break;
        case "bottom":
          top = parentRect.bottom + "px";
          left =
            parentRect.left +
            parentRect.width / 2 -
            modalContainerRef.current!.offsetWidth / 2 +
            "px";
          break;
        case "left":
          top =
            parentRect.top +
            (parentRect.width * 1) / 2 -
            (modalContainerRef.current!.offsetHeight * 1) / 2 +
            "px";
          left =
            parentRect.left -
            modalContainerRef.current!.offsetWidth -
            (parentRect.width * 1) / 5 +
            "px";
          break;
        case "right":
          top =
            parentRect.top +
            (parentRect.height * 1) / 2 -
            (modalContainerRef.current!.offsetHeight * 1) / 2 +
            "px";
          left = parentRect.right + (parentRect.width * 1) / 5 + "px";
          break;
        case "top-left":
          top =
            parentRect.bottom - modalContainerRef.current!.offsetHeight + "px";
          left =
            parentRect.right -
            modalContainerRef.current!.offsetWidth -
            parentRect.width -
            (parentRect.width * 1) / 5 +
            "px";
          break;
        case "top-right":
          top =
            parentRect.bottom - modalContainerRef.current!.offsetHeight + "px";
          left = parentRect.right + (parentRect.width * 1) / 5 + "px";
          break;
        case "bottom-left":
          top = parentRect.top + "px";
          left =
            parentRect.left -
            modalContainerRef.current!.offsetWidth -
            (parentRect.width * 1) / 5 +
            "px";
          break;
        case "bottom-right":
          top = parentRect.top + "px";
          left = parentRect.right + (parentRect.width * 1) / 5 + "px";
          break;
        case "center":
          top =
            window.innerHeight / 2 -
            modalContainerRef.current!.offsetHeight / 2 +
            "px";
          left =
            window.innerWidth / 2 -
            modalContainerRef.current!.offsetWidth / 2 +
            "px";
          break;
        default:
          top = parentRect.bottom + "px";
          left =
            parentRect.left - modalContainerRef.current!.offsetWidth + "px";
          break;
      }

      const menuWidth = modalContainerRef.current!.offsetWidth;
      const menuHeight = modalContainerRef.current!.offsetHeight;

      const parsedTop = parseInt(top);
      const parsedLeft = parseInt(left);

      if (parsedTop < 0) {
        top = "0px";
      } else if (parsedTop + menuHeight > window.innerHeight) {
        top = window.innerHeight - menuHeight + "px";
      }

      if (parsedLeft < 0) {
        left = "0px";
      } else if (parsedLeft + menuWidth > window.innerWidth) {
        left = window.innerWidth - menuWidth + "px";
      }

      setPosition({
        top,
        left,
      });

      setShouldShow(true); // Mark position as calculated
    };

    calculatePosition();

    const resizeObserver = new ResizeObserver(() => {
      calculatePosition();
    });
    resizeObserver.observe(modalContainerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [parentRect, direction]);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot || !open || !parentRect) return null;

  return createPortal(
    <div
      ref={modalContainerRef}
      className={`${className} absolute bg-primary rounded-lg shadow-lg border-[1px] border-secondary text-text flex max-h-screen overflow-hidden transition-transform duration-100 ${
        shouldShow
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-2 opacity-0"
      }`}
      style={position}
    >
      <div className="flex flex-col w-full relative">
        {header && (
          <div className="w-full flex items-center justify-between border-b-[1px] border-secondary px-1 pl-3 py-1">
            <p className="text-[1.25rem]">{header}</p>
            <IconButton
              className="p-2 hover:bg-secondary rounded-md"
              needTooltip={true}
              tooltipPlaceholder={"close"}
              tooltipDirection="top"
              onClick={() => {
                closeFn();
                setShouldShow(false);
              }}
            >
              <RxCross2 />
            </IconButton>
          </div>
        )}
        {children}
        {!header && (
          <div className="absolute top-1 right-1">
            <IconButton
              className="bg-transparent rounded-md hover:bg-secondary w-fit h-fit px-2 py-2"
              onClick={() => {
                closeFn();
                setShouldShow(false);
              }}
            >
              <RxCross2 />
            </IconButton>
          </div>
        )}
      </div>
    </div>,
    modalRoot
  );
}
export default Menu;
