import "../../App.css";

import DateAndTime from "./Date&Time";
import FolderOptions from "./FolderOptions";
import LinkOptions from "./LinkOptions";
import SearchBox from "./SearchBox";

function CenterMain() {
  return (
    <div
      id="main-container"
      className="grid grid-rows-[1fr_.75fr_3fr_1fr] overflow-hidden py-6 px-4 gap-8 place-items-center"
    >
      <DateAndTime />
      <SearchBox />
      <LinkOptions />
      <FolderOptions />
    </div>
  );
}

export default CenterMain;
