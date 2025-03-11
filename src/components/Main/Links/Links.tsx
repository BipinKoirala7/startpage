import "../../../App.css";

import LinksHeader from "./LinksHeader";
import LinksOptions from "./LinksOptions";
import LinksContainer from "./LinksContainer";
import useFolderStore from "../../../store/folderStore";

function Links() {
  const selected_folder = useFolderStore((state) => state.selectedFolder);

  if (selected_folder === null) {
    return (
      <div
        className=" w-full max-h-full h-full  gap-2 items-center justify-center flex backdrop-filter-[10px] bg-surface rounded-md
    "
      >
        <div className="px-4 py-4 border-[1px] border-primary rounded-lg">
          No folder is selected
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full max-h-full h-full w-full  py-2 px-3 bg-surface overflow-y-auto rounded-md">
      <div className="flex items-center justify-between w-full">
        <LinksHeader />
        <LinksOptions />
      </div>
      <LinksContainer />
    </div>
  );
}

export default Links;
