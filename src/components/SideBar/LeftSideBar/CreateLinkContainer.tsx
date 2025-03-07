import { TbLinkPlus } from "react-icons/tb";
import IconButton from "../../UI/Buttons/IconButton";
import DialogUI from "../../UI/DialogUI";
import { useState } from "react";

function CreateLinkContainer() {
  const [isOpenDialogBox, setIsOpenDialogBox] = useState<boolean>(false);

  function handleSaveFunction(){
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
              className="px-4 py-2 bg-primary  rounded-[.25rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              className="px-4 py-2 bg-primary  l rounded-[.25rem] outline-none"
            />
          </div>
          <button onClick={handleSaveFunction} className="bg-primary hover:bg-accent1 hover:text-primary transition-all rounded-[.25rem] py-2">
            Save
          </button>
        </div>
      </DialogUI>
    </>
  );
}

export default CreateLinkContainer;
