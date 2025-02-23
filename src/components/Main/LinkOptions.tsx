import { PiInfoLight } from "react-icons/pi";

import "../../App.css";
import useFolderStore from "../../store/folderStore";
import BigButton from "../UI/Buttons/BigButton";
import IconButton from "../UI/Buttons/IconButton";

function LinkOptions() {
  const { folder_name, folder_icon_url } = useFolderStore(
    (state) => state.selectedFolder
  );
  const options = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    },
  ];
  return (
    <div className="max-w-full max-h-full h-full w-full  py-2 px-3 bg-surface">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          {folder_icon_url && (
            <IconButton
              needTooltip={false}
              tooltipPlaceholder={folder_name}
              className=""
              onClick={() => {}}
            >
              <img src={folder_icon_url} alt="folder icon" className="w-6 h-6 max-w-6" />
            </IconButton>
          )}
          <p>{folder_name ? folder_name : "Choose"}</p>
        </div>
        <IconButton
          className="text-[1.5rem] transition duration-300  p-1 aspect-square rounded-[5%] hover:bg-primary"
          needTooltip={false}
          tooltipPlaceholder={"info"}
          onClick={() => {}}
        >
          <PiInfoLight />
        </IconButton>
      </div>
      <div
        className="max-w-full max-h-full h-full  w-full gap-2 items-center justify-center overflow-y-auto grid grid-cols-[repeat(auto-fill,minmax(30%,1fr))] p-2
        sm:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
        md:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
        lg:grid-cols-[repeat(auto-fill,minmax(17.5%,1fr))]
        xl:grid-cols-[repeat(auto-fill,minmax(10.5%,1fr))]
    "
      >
        {options.map((option, index) => {
          return (
            <BigButton
              name={option.name}
              link={option.link}
              key={index}
            ></BigButton>
          );
        })}
      </div>
    </div>
  );
}

export default LinkOptions;
