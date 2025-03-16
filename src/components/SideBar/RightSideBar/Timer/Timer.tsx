import { useState } from "react";
import { MdOutlineTimer } from "react-icons/md";

import IconButton from "../../../UI/Buttons/IconButton";
import Modal from "../../../UI/Modal/Modal";

function Timer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <IconButton
        className="p-2 rounded-sm hover:bg-primary"
        needTooltip={!isOpen}
        tooltipPlaceholder="Todo List"
        tooltipDirection="left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdOutlineTimer className="text-[1.5rem]" />
      </IconButton>
      <Modal className="min-w-40" shouldOpen={isOpen}>
        <div>this is the modal of the list to do</div>
      </Modal>
    </div>
  );
}

export default Timer;
