import { useEffect, useRef } from "react";
import { ModalContent } from "../../../Context/ModalContext/ModalContextProvider";
import { IoCloseOutline } from "react-icons/io5";
import IconButton from "../Buttons/IconButton";
import { useModalContext } from "../../../util/util";

function ModalUI(props: ModalContent) {
  const { removeModalContent } = useModalContext();
  const { type, content, icon, modalId } = props;
  const counter = useRef(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const modalContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (modalContainer.current) {
      modalContainer.current.classList.add("modalAnimationIn");
    }
    const interval = setInterval(() => {
      if (counter.current < 100) {
        counter.current++;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${counter.current}%`;
        }
      } else {
        clearInterval(interval);
         modalContainer.current?.classList.add("modalAnimationOut");
        setTimeout(()=> {},250)
        setTimeout(() => {
          removeModalContent(modalId);
        }, 250);
      }
      console.log(counter.current)
    }, 50);
  }, [counter]);
  return (
    <div
    className=" w-fit"
     ref={modalContainer}
    >
      <div
        id="modal-container"
        className={` flex items-center gap-3 relative justify-between  ${
          type === "informative"
            ? "bg-blue-100"
            : type === "sucess"
            ? "bg-green-100"
            : type === "fail"
            ? "bg-red-100"
            : "bg-yellow-100"
        } px-4 py-4 rounded-[inherit]`}
      >
        <div className={`z-10 flex gap-2 rounded-[.25rem] items-center`}>
          {icon}
          {content}
        </div>
        <IconButton
          className={`z-10 p-2 ${
            type === "informative"
              ? "hover:bg-blue-700"
              : type === "sucess"
              ? "hover:bg-green-600"
              : type === "fail"
              ? "hover:bg-red-600"
              : "hover:bg-yellow-500"
          } hover:text-white rounded-full aspect-square`}
          needTooltip={false}
          tooltipPlaceholder="close"
          onClick={() => (counter.current = 99)}
        >
          <IoCloseOutline className="" />
        </IconButton>
        <div
          ref={progressBarRef}
          id="progress-bar"
          className={`z-0 absolute ${
            type === "informative"
              ? "bg-blue-700"
              : type === "sucess"
              ? "bg-green-600"
              : type === "fail"
              ? "bg-red-600"
              : "bg-yellow-500"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default ModalUI;

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
