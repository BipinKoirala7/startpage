import "../../../App.css";
import { FiFolderPlus } from "react-icons/fi";

import FolderUI from "../../UI/FolderUI";
import useFolderStore from "../../../store/folderStore";
import IconButton from "../../UI/Buttons/IconButton";
import { folderT } from "../../../types";

function FolderOptions() {
  const folders: Array<folderT> | null = useFolderStore(
    (state) => state.folders
  );
  const selectFolder = useFolderStore((state) => state.setSelectedFolder);
  return (
    <>
      {folders !== null && folders.length > 0 ? (
        <>
          <div
            id="folderOptions-container"
            className="flex gap-4 overflow-x-auto max-w-full py-2 
            sm:
            md:
            lg:
            xl:
            "
          >
            {folders.map((item) => {
              const { folder_id } = item;
              return (
                <FolderUI
                  key={folder_id}
                  className=""
                  folder_info={item}
                  onClick={() => {
                    selectFolder(folder_id);
                  }}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center gap-4">
          No folders!{" "}
          {
            <IconButton className={`gap-2 hover:bg-primary p-2 rounded-md`}>
              <FiFolderPlus className="text-[1.5rem] aspect-sqaure" />{" "}
              <p>Create One</p>
            </IconButton>
          }
        </div>
      )}
    </>
  );
}

export default FolderOptions;
