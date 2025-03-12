import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import IconButton from "../Buttons/IconButton";
import { RxCross2 } from "react-icons/rx";

type MenuPropsT = {
    children: ReactNode;
    open: boolean;
    parentRef: React.RefObject<HTMLElement>;
    direction: "top" | "left" | "right" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center",
    closeFn: () => void
};

function Menu({ open, parentRef, children, direction, closeFn }: MenuPropsT) {
    const [position, setPosition] = useState({
        top: "0px",
        left: "0px"
    })
    const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined);
    const modalContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open && parentRef.current) {
            setParentRect(parentRef.current.getBoundingClientRect());
        }
    }, [open, parentRef]);

    useEffect(() => {
        if (!modalContainerRef.current || !parentRect) return;

        let top;
        let left;

        switch (direction) {
            case "top":
                top = (parentRect.top - modalContainerRef.current.offsetHeight) + "px";
                left = (parentRect.left + (parentRect.width / 2) - (modalContainerRef.current.offsetWidth / 2)) + "px";
                break;
            case "bottom":
                top = (parentRect.bottom) + "px";
                left = (parentRect.left + (parentRect.width / 2) - (modalContainerRef.current.offsetWidth / 2)) + "px";
                break;
            case "left":
                top = ((parentRect.top + parentRect.width * 1 / 2) - modalContainerRef.current.offsetHeight * 1 / 2) + "px";
                left = (parentRect.left) - (modalContainerRef.current.offsetWidth) + "px";
                break;
            case "right":
                top = ((parentRect.top + parentRect.width * 1 / 2) - modalContainerRef.current.offsetHeight * 1 / 2) + "px";
                left = (parentRect.right) + "px";
                break;
            case "top-left":
                top = (parentRect.top - modalContainerRef.current.offsetHeight) + "px";
                left = (parentRect.right - modalContainerRef.current.offsetWidth - parentRect.width) + "px";
                break;
            case "top-right":
                top = (parentRect.top - modalContainerRef.current.offsetHeight) + "px";
                left = (parentRect.right) + "px";
                break;
            case "bottom-left":
                top = (parentRect.bottom) + "px";
                left = (parentRect.left - modalContainerRef.current.offsetWidth) + "px";
                break;
            case "bottom-right":
                top = (parentRect.bottom) + "px";
                left = (parentRect.right) + "px";
                break;
            case "center":
                top = (window.innerHeight / 2 - modalContainerRef.current.offsetHeight / 2) + "px";
                left = (window.innerWidth / 2 - modalContainerRef.current.offsetWidth / 2) + "px";
                break;
            default:
                top = (parentRect.bottom) + "px";
                left = (parentRect.left - modalContainerRef.current.offsetWidth) + "px";
                break;
        }

        setPosition({
            top: top,
            left: left
        });
    }, [parentRect, direction, modalContainerRef.current]);

    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !open || !parentRect) return null;

    return createPortal(
        <div
            ref={modalContainerRef}
            className="absolute bg-primary rounded-lg p-3 shadow-lg"
            style={position}
        >
            {children}
            <button onClick={closeFn} className="absolute top-1 right-1 text-text">
                <IconButton className="p-2 hover:bg-secondary rounded-md" needTooltip={true} tooltipPlaceholder={"close"} tooltipDirection="top">
                    <RxCross2 />
                </IconButton>
            </button>
        </div>,
        modalRoot
    );
}
export default Menu