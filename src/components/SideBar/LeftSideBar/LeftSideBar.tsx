import "../../../App.css";

import CreateFolderContainer from "./CreateFolderContainer";
import LinkContainer from "./LinkContainer";
import SettingsButton from "./SettingsButton";

function LeftSideBar() {
  return (
    <div
      id="left-container"
      className="w-full hidden flex-col justify-between items-center py-2
      sm:
      md:flex
      lg:
      "
    >
      <CreateFolderContainer />
      <LinkContainer />
      <SettingsButton />
    </div>
  );
}

export default LeftSideBar;
