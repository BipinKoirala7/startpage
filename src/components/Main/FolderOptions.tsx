import "../../App.css";

import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { FolderOptionsT } from "../../types";
import IconButton from "../UI/Buttons/IconButton";
import FolderUI from "../UI/FolderUI";
import { scrollBack, scrollForward } from "../../util/util";

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
      tooltipPlaceholder: "Dating",
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
      tooltipPlaceholder: "Web Dev",
    },
  ];

  return (
    <div
      className="relative flex gap-4 overflow-x-auto max-w-full px-12
        sm:
        md:
        lg:
        xl:
        "
    >
      <div
        className="absolute top-[50%] left-0 translate-y-[-50%] z-[10] bg-primary p-2 rounded-full"
        onClick={scrollBack}
      >
        <IconButton
          className="aspect-square w-8"
          needTooltip={false}
          tooltipPlaceholder={"back"}
          onClick={() => {}}
        >
          <IoChevronBackCircle className="" title="back" />
        </IconButton>
      </div>
      <div className="absolute top-[50%] right-0 translate-y-[-50%] z-[10] bg-primary p-2 rounded-full"
      onClick={scrollForward}
      >
        <IconButton
          className="aspect-square w-8"
          needTooltip={false}
          tooltipPlaceholder={"forward"}
          onClick={() => {}}
        >
          <IoChevronForwardCircle className="" title="forward" />
        </IconButton>
      </div>
      <div
        id="folderOptions-container"
        className=" flex gap-4 overflow-x-auto max-w-full p-2
          sm:
          md:
          lg:
          xl:
          "
      >
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
    </div>
  );
}

export default FolderOptions;
