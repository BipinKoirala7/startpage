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
};

function Menu({
  open,
  parentRef,
  children,
  direction,
  closeFn,
  className,
}: MenuPropsT) {
  const [position, setPosition] = useState({
    top: "0px",
    left: "0px",
  });
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined);
  const [ shouldShow, setShouldShow ] = useState(false);
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
            parentRect.left - modalContainerRef.current!.offsetWidth + "px";
          break;
        case "right":
          top =
            parentRect.top +
            (parentRect.width * 1) / 2 -
            (modalContainerRef.current!.offsetHeight * 1) / 2 +
            "px";
          left = parentRect.right + "px";
          break;
        case "top-left":
          top = parentRect.top - modalContainerRef.current!.offsetHeight + "px";
          left =
            parentRect.right -
            modalContainerRef.current!.offsetWidth -
            parentRect.width +
            "px";
          break;
        case "top-right":
          top = parentRect.top - modalContainerRef.current!.offsetHeight + "px";
          left = parentRect.right + "px";
          break;
        case "bottom-left":
          top = parentRect.bottom + "px";
          left =
            parentRect.left - modalContainerRef.current!.offsetWidth + "px";
          break;
        case "bottom-right":
          top = parentRect.bottom + "px";
          left = parentRect.right + "px";
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
  if (!modalRoot || !open || !parentRect ) return null;

  return createPortal(
    <div
      ref={modalContainerRef}
      className={`${className} absolute bg-primary rounded-lg p-3 shadow-lg border-[1px] border-secondary text-text flex max-h-screen overflow-hidden transition-transform duration-100 ${shouldShow ? "transform translate-y-0 opacity-100" : "transform translate-y-2 opacity-0"}`}
      style={position}
    >
      {children}
      <button onClick={() => {
        closeFn()
        setShouldShow(false)
      }} className="absolute top-1 right-1 text-text">
        <IconButton
          className="p-2 hover:bg-secondary rounded-md"
          needTooltip={true}
          tooltipPlaceholder={"close"}
          tooltipDirection="top"
        >
          <RxCross2 />
        </IconButton>
      </button>
    </div>,
    modalRoot
  );
}
export default Menu;
