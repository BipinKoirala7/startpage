import "../../App.css";

import DateAndTime from "./Date&Time";
import FolderOptions from "./FolderOptions/FolderOptions";
import Links from "./Links/Links";
import SearchBox from "./SearchBox/SearchBox";

function CenterMain() {
  return (
    <div
      className="grid grid-rows-[1.5fr_.75fr_3fr_.75fr] overflow-hidden px-4 gap-2 w-full h-full grow shrink-0 basis-[100%]
      sm:basis-[100%]
      md:basis-[80%]
      lg:basis-[85%]
      xl:basis-[87.5%]
      "
    >
      <DateAndTime />
      <SearchBox />
      <Links />
      <FolderOptions />
    </div>
  );
}

export default CenterMain;
