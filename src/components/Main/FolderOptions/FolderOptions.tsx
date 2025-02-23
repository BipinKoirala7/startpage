import "../../../App.css";

import { type folderT } from "../../../types";
import FolderUI from "../../UI/FolderUI";
import ScrollForwardBtn from "./ScrollForwardBtn";
import ScrollBackBtn from "./ScrollBackBtn";
import useFolderStore from "../../../store/folderStore";

function FolderOptions() {
  const folders: Array<folderT> = useFolderStore((state) => state.folders);
  return (
    <div
      className="relative flex gap-4 overflow-x-auto max-w-full px-2 py-1 rounded-sm items-center
        sm:px-4
        md:px-8
        lg:px-10
        xl:px-14
        "
    >
      <ScrollBackBtn />
      <div
        id="folderOptions-container"
        className=" flex gap-4 overflow-x-auto max-w-full py-2 
        sm:
        md:
        lg:
        xl:
        "
      >
        {folders.map((item) => {
          const { folder_id } = item;
          const className = ``;
          return (
            <FolderUI
              key={folder_id}
              className={className}
              folder_info={item}
            />
          );
        })}
      </div>
      <ScrollForwardBtn />
    </div>
  );
}

export default FolderOptions;
