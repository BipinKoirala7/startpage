import "../../App.css";

import IconButton from "../UI/Buttons/IconButton";
import Gmail from "../../assets/Gmail";
import Youtube from "../../assets/Youtube";
import Instagram from "../../assets/Instagram";
import Settings from "../../assets/Settings";
import Add from "../../assets/Add";
import { createNewLink, urlLinkClick } from "../../util/util";

function LeftSideBar() {
  return (
    <div
      id="left-container"
      className="w-full hidden flex-col justify-between items-center py-8
      sm:
      md:flex
      lg:
      "
    >
      <IconButton
        onClick={() => createNewLink()}
        className="p-4 bg-accent2 rounded-[50%] hover:rounded-[20%] "
        needTooltip={true}
        tooltipPlaceholder={"New Link"}
      >
        <Add
          className="max-w-6 w-6 aspect-square"
          fill="white"
          stroke="#ffebcd"
        />
      </IconButton>
      <div className="w-full flex flex-col gap-2 items-center">
        <IconButton
          onClick={() =>
            urlLinkClick("https://mail.google.com/mail/u/1/#inbox")
          }
          className="bg-primary  p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
          needTooltip={true}
          tooltipPlaceholder="Gmail"
        >
          <Gmail
            className="max-w-6 w-6 aspect-square"
            fill="white"
            stroke="#ffebcd"
          />
        </IconButton>
        <IconButton
          onClick={() => urlLinkClick}
          className="bg-primary p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
          needTooltip={true}
          tooltipPlaceholder="Youtube"
        >
          <Youtube
            className="max-w-6 w-6 aspect-square"
            fill="#F61C0D"
            stroke="#ffebcd"
          />
        </IconButton>
        <IconButton
          onClick={() => urlLinkClick}
          className="bg-primary p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
          needTooltip={true}
          tooltipPlaceholder="Instagram"
        >
          <Instagram
            className="max-w-6 w-6 aspect-square"
            fill="white"
            stroke="#ffebcd"
          />
        </IconButton>
        <IconButton
          onClick={() => urlLinkClick}
          className="bg-primary p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
          needTooltip={true}
          tooltipPlaceholder="Apple"
        >
          <img
            className="max-w-6 w-6 aspect-square"
            src="https://s2.svgbox.net/social.svg?ic=apple"
            alt=""
          />
        </IconButton>
      </div>
      <IconButton
        onClick={() => urlLinkClick}
        className="bg-accent2 p-4 rounded-[50%] hover:rounded-[20%]"
        needTooltip={true}
        tooltipPlaceholder="Settings"
      >
        <Settings
          className="max-w-6 w-6 aspect-square"
          fill="none"
          stroke="#ffebcd"
        />
      </IconButton>
    </div>
  );
}

export default LeftSideBar;
