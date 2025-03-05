import Search from "../../../assets/Search";
import IconButton from "../../UI/Buttons/IconButton";
import SearchEngineOption from "./SearchEngineOption";

function SearchBox() {
  return (
    <div className="flex w-full h-full items-center justify-center ">
      <div
        className="flex w-[100%] justify-between bg-secondary rounded-[2rem] p-1
          sm: 
          md:w-[75%]
          lg:w-[65%]
          xl:w-[55%]
    "
      >
        <SearchEngineOption />
        <input
          type="text"
          className="w-full bg-transparent rounded-[inherit] outline-none px-3"
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
    </div>
  );
}

export default SearchBox;
