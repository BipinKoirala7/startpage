import Gmail from "../../../assets/Gmail";
import Instagram from "../../../assets/Instagram";
import Youtube from "../../../assets/Youtube";
import { urlLinkClick } from "../../../util/util";
import IconButton from "../../UI/Buttons/IconButton";

function LinkContainer() {
  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <IconButton
        onClick={() => urlLinkClick("https://mail.google.com/mail/u/1/#inbox")}
        className="bg-secondary  p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
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
        className="bg-secondary p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
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
        className="bg-secondary p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
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
        className="bg-secondary p-4 rounded-[50%] hover:rounded-[20%] hover:bg-accent1"
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
  );
}

export default LinkContainer