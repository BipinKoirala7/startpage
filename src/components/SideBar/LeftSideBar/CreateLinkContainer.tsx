import { TbLinkPlus } from "react-icons/tb";
import IconButton from "../../UI/Buttons/IconButton";
import DialogUI from "../../UI/DialogUI";
import { useState } from "react";
import { useModalContext } from "../../../util/util";
import { ModalContextProps } from "../../../Context/ModalContextProvider";
import { IoAddCircle } from "react-icons/io5";
import { v4 } from "uuid";

function CreateLinkContainer() {
  const [isOpenDialogBox, setIsOpenDialogBox] = useState<boolean>(false);
  const {addModalContent}:ModalContextProps = useModalContext();
  function handleSaveFunction(){
    addModalContent({
      type: "fail",
      content: (
        <div>this is a sample text</div>
      ),
      icon: <IoAddCircle />,
      modalId: v4()
    })
    handleCloseFunction();
  }
  function handleClick() {
    setIsOpenDialogBox(true);
  }
  function handleCloseFunction() {
    setIsOpenDialogBox(false);
  }
  return (
    <>
      <IconButton
        onClick={handleClick}
        className="p-4 bg-accent2 rounded-[50%] hover:rounded-[20%]"
        needTooltip={true}
        tooltipPlaceholder={"New Link"}
      >
        <TbLinkPlus className="text-[1.5rem] text-accent1 aspect-square" />
      </IconButton>
      <DialogUI isOpen={isOpenDialogBox} closeFunction={handleCloseFunction}>
        <div className=" flex relative gap-4 flex-col">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="px-4 py-2 bg-secondary  rounded-[.25rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              className="px-4 py-2 bg-secondary  l rounded-[.25rem] outline-none"
            />
          </div>
          <button onClick={handleSaveFunction} className="bg-neutral hover:bg-accent1 hover:text-primary transition-all rounded-[.25rem] py-2">
            Save
          </button>
        </div>
      </DialogUI>
    </>
  );
}

export default CreateLinkContainer;
