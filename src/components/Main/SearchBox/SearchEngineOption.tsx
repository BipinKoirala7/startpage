import { FcGoogle } from "react-icons/fc";
import { BsBing } from "react-icons/bs";
import { SiDuckduckgo } from "react-icons/si";
import { FaBrave } from "react-icons/fa6";
import { FaYahoo } from "react-icons/fa";
import { SiAol } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import IconButton from "../../UI/Buttons/IconButton";
import Modal from "../../UI/Modal/Modal";

function SearchEngineOption() {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState(0);
  const searchEngineOptions = [
    {
      name: "Google",
      icon: FcGoogle,
    },
    {
      name: "Duck Duck Go",
      icon: SiDuckduckgo,
    },
    {
      name: "Bing",
      icon: BsBing,
    },
    {
      name: "Brave",
      icon: FaBrave,
    },
    {
      name: "Yahoo",
      icon: FaYahoo,
    },
    {
      name: "AOL",
      icon: SiAol,
    },
  ];
    return (
      <div className="relative rounded-[inherit] flex items-center ">
        <IconButton
          className={`${
            isOpen && "bg-background"
          } rounded-[inherit] p-2 gap-2 hover:bg-background`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {searchEngineOptions[selectedEngine].icon({
            className: "aspect-[1/1] text-[1.75rem]",
          })}
          <IoIosArrowDown className={`text-[.75rem] aspect-[1/1]`} />
        </IconButton>
        <Modal className="rounded-md " shouldOpen={isOpen} direction="bottom">
          {searchEngineOptions.map((engine, index) => {
            const { name } = engine;
            return (
              <IconButton
                key={name}
                className="w-full px-2 py-1 rounded-sm hover:bg-primary  gap-2 grid grid-cols-[1fr_4fr] grid-rows-1"
                    onClick={() => {
                    setIsOpen(!isOpen);
                  setSelectedEngine(index);
                }}
              >
                <engine.icon className="aspect-square  text-[1.25rem]" />
                <p className="text-nowrap">{name}</p>
              </IconButton>
            );
          })}
        </Modal>
      </div>
    );
}

export default SearchEngineOption;
