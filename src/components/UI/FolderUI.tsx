import { useState } from "react";
import IconButton from "./Buttons/IconButton";
import FolderOpen from "../../assets/FolderOpen";
import Folder from "../../assets/Folder";

type FolderPropT = {
  className: string;
  needTooltip: boolean;
  tooltipPlaceholder: string;
  name: string;
};

function FolderUI(props: FolderPropT) {
  const { className, needTooltip, tooltipPlaceholder, name } = props;
  const [isOpen, setIsOpen] = useState(false);

  function handleCLick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <IconButton
      className={`w-full h-fit border-[1px] border-secondary px-4 py-2 rounded-[.25rem] hover:bg-secondary hover:rounded-[.5rem] flex gap-2 ${className}`}
      needTooltip={needTooltip}
      tooltipPlaceholder={tooltipPlaceholder}
      onClick={handleCLick}
    >
      {isOpen ? (
        <FolderOpen className="max-w-6 w-6" fill="white" stroke="white" />
      ) : (
        <Folder className="max-w-6 w-6" fill="none" stroke="white" />
      )}
      <p className=" text-nowrap">{name}</p>
    </IconButton>
  );
}

export default FolderUI;
