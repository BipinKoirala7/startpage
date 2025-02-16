import Search from "../../assets/Search";
import IconButton from "../UI/Buttons/IconButton";

function SearchBox() {
  return (
    <div
      className="flex w-[100%] justify-between  bg-input border-[2px] border-primary rounded-[2rem] p-1
    sm: 
    md:w-[75%]
    lg:w-[65%]
    xl:w-[55%]
    "
    >
      <input
        type="text"
        className="w-full bg-input rounded-[inherit] outline-none px-3"
        placeholder="Search here...."
      />
      <IconButton
        className="bg-button rounded-[inherit] hover:rounded-[inherit]  p-3 hover:bg-accent2"
        needTooltip={false}
        tooltipPlaceholder={""}
        onClick={() => {}}
      >
        <Search
          className="aspect-[1/1] max-w-6 w-6"
          fill="none"
          stroke="white"
        />
      </IconButton>
    </div>
  );
}

export default SearchBox;
