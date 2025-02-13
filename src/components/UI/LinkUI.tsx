import Add from "../../assets/Add";
import IconButton from "./Buttons/IconButton";

function LinkUI() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <IconButton
      onClick={() => handleClick}
      className="p-3 bg-accent2 rounded-[50%] hover:rounded-[20%] "
      needTooltip={true}
      tooltipPlaceholder={"New Link"}
    >
      <Add fill="white" stroke="white" className="" />
    </IconButton>
  );
}

export default LinkUI;
