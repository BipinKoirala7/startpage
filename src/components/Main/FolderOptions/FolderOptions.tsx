import "../../../App.css";
import { FiFolderPlus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { apiResponseT, type folderT } from "../../../types";
import FolderUI from "../../UI/FolderUI";
import ScrollForwardBtn from "./ScrollForwardBtn";
import ScrollBackBtn from "./ScrollBackBtn";
import useFolderStore from "../../../store/folderStore";
import IconButton from "../../UI/Buttons/IconButton";

function FolderOptions() {
  const folders: Array<folderT> | null = useFolderStore(
    (state) => state.folders
  );
  const selectFolder = useFolderStore((state) => state.setSelectedFolder);
  const loadFolders = useFolderStore((state) => state.loadFolders);
  const { isError, data, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/api/folders");
      const data: apiResponseT<Array<folderT>> = await response.json();
      return data;
    },
  });
  useEffect(() => {
    if (data && data.data) {
      loadFolders(data.data);
    }
  }, [data, loadFolders]);

  if (isError)
    return (
      <div className="w-full h-full flex items-center justify-center gap-4">
        Error occured
      </div>
    );
  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center gap-4">
        Loading...
      </div>
    );
  return (
    <div
      className="relative flex gap-4 overflow-x-auto max-w-full px-2 py-1 rounded-md items-center bg-surface
        sm:px-4
        md:px-8
        lg:px-10
        xl:px-14
        "
    >
      {folders !== null && folders.length > 0 ? (
        <>
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
                  onClick={() => {
                    console.log(folder_id);
                    selectFolder(folder_id);
                  }}
                />
              );
            })}
          </div>
          <ScrollForwardBtn />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center gap-4">
          No folders!{" "}
          {
            <IconButton className="gap-2 hover:bg-primary p-2 rounded-md">
              <FiFolderPlus className="text-[1.5rem] aspect-sqaure" />{" "}
              <p>Create One</p>
            </IconButton>
          }
        </div>
      )}
    </div>
  );
}

export default FolderOptions;
