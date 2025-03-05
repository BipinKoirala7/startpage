import { FaNoteSticky } from "react-icons/fa6";
import { useState } from "react";

import IconButton from "../../UI/Buttons/IconButton";
import Modal from "../../UI/Modal/Modal";

function Notes() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <IconButton
        className="p-2 rounded-sm hover:bg-primary"
        needTooltip={!isOpen}
        tooltipPlaceholder="Notes"
        tooltipDirection="left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaNoteSticky className="text-[1.5rem]" />
      </IconButton>
      <Modal className="min-w-40" shouldOpen={isOpen}>
        <div>this is the modal box</div>
      </Modal>
    </div>
  );
}

export default Notes;
