import "../../App.css"

import { IoChevronBackCircle } from "react-icons/io5";
import { FolderOptionsT } from "../../types";
import IconButton from "../UI/Buttons/IconButton";
import FolderUI from "../UI/FolderUI";

function FolderOptions() {
  const FolderOptions: FolderOptionsT[] = [
    {
      name: "ICP",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "ICP",
    },
    {
      name: "Football",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "Football",
    },
    {
      name: "Social Media",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "Social Media",
    },
    {
      name: "Programming",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "Programming",
    },
    {
      name: "Basketball",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "Basketball",
    },
    {
      name: "Dating",
      className: "",
      needTooltip: false,
      tooltipPlaceholder:"Dating"
    },
    {
      name: "Facebook",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "Facebook",
    },
    {
      name: "Youtube",
      className: "",
      needTooltip: false,
      tooltipPlaceholder: "Youtube",
    },
    {
      name: "Web Dev",
      className: "",
      needTooltip: false,
      tooltipPlaceholder:"Web Dev"
    }
  ];

  return (
    <div
      className="relative flex gap-4 overflow-x-auto max-w-full
    sm:
    md:overflow-x-hidden
    lg:
    xl:
    "
    >
      <div className="absolute top-0 left-0 translate-x-[-50%] z-[10] bg-primary p-3 rounded-full">
        <IconButton
          className="aspect-square"
          needTooltip={false}
          tooltipPlaceholder={"back"}
          onClick={() => {}}
        >
          <IoChevronBackCircle className="" />
        </IconButton>
      </div>
      {FolderOptions.map((item) => {
        const { name, className, needTooltip, tooltipPlaceholder } = item;
        return (
          <FolderUI
            key={name}
            name={name}
            className={className}
            needTooltip={needTooltip}
            tooltipPlaceholder={tooltipPlaceholder}
          />
        );
      })}
    </div>
  );
}

export default FolderOptions