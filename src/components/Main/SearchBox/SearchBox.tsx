import {  useEffect, useState } from "react";
import IconButton from "../../UI/Buttons/IconButton";
import SearchEngineOption from "./SearchEngineOption";

import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

function SearchBox() {
  const [searchInputValue,setSearchInputValue] = useState<string>("");
  useEffect(() => {
    const handleEnterPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (searchInputValue) {
          window.open(
            `https://www.google.com/search?q=${searchInputValue}`,
            "_blank"
          );
        }
      }
    };

    document.addEventListener("keydown", handleEnterPress);
    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  }, [searchInputValue]); 
  return (
    <div className="flex w-full h-full items-center justify-center ">
      <div
        className="flex w-[100%] justify-between items-center bg-secondary rounded-[2rem] p-1
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
          onChange={(e) => setSearchInputValue(e.target.value)}
          value={searchInputValue}
        />
        <IconButton
          className="h-fit rounded-[1rem] hover:rounded-[inherit]  p-2 hover:bg-primary "
          needTooltip={false}
          tooltipPlaceholder={""}
          onClick={() => {
            setSearchInputValue("");
          }}
        >
          <MdClear
            className=" text-[1.5rem] text-neutral "
          />
        </IconButton>
        <IconButton
          className="rounded-[inherit] hover:rounded-[inherit]  p-3 hover:bg-accent2"
          needTooltip={false}
          tooltipPlaceholder={""}
          onClick={() => {
            if (searchInputValue) {
              window.open(
                `https://www.google.com/search?q=${searchInputValue}`,
                "_blank"
              );
            }
          }}
        >
          <CiSearch
            className="aspect-[1/1] text-[1.5rem] text-accent1 "
            strokeWidth={1.5}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default SearchBox;
