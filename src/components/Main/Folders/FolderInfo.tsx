import { PiInfoLight } from "react-icons/pi";
import IconButton from "../../UI/Buttons/IconButton";
import { useState } from "react";
import Modal from "../../UI/Modal/Modal";

function FolderInfo() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex">
      <IconButton
        className="text-[1.5rem] transition duration-300  p-1 aspect-square rounded-md hover:bg-primary"
        needTooltip={false}
        tooltipPlaceholder={"Add Links"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <PiInfoLight />
      </IconButton>
      <Modal className="" direction="bottom" shouldOpen={isOpen}>
        <div>Create New Link</div>
      </Modal>
    </div>
  );
}

export default FolderInfo