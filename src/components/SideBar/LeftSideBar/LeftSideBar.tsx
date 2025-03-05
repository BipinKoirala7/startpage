import "../../../App.css";

import CreateLinkContainer from "./CreateLinkContainer";
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
      <CreateLinkContainer />
      <LinkContainer />
      <SettingsButton />
    </div>
  );
}

export default LeftSideBar;
