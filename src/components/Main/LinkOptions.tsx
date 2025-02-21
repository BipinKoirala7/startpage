import "../../App.css";
import useFolderStore from "../../store/folderStore";

import BigButton from "../UI/Buttons/BigButton";

function LinkOptions() {
  const {folder_name} = useFolderStore(state => state.selectedFolder);
  const options = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    }
  ];
  return (
    <div className="max-w-full max-h-full h-full  w-full">
      <div>
        <p>Selected Folder : - {folder_name} </p>
      </div>
      <div
        // id="link-container"
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
