import "../../../App.css";

import LinksHeader from "./LinksHeader";
import LinksOptions from "./LinksOptions";
import LinksContainer from "./LinksContainer";
import useFolderStore from "../../../store/folderStore";

function Links() {
  const selectedFolder = useFolderStore(state => state.selectedFolder);
  console.log(selectedFolder);
  return (
    <div className="max-w-full max-h-full h-full w-full  py-2 px-3 bg-surface overflow-y-auto">
      <div className="flex items-center justify-between w-full">
        <LinksHeader />
        <LinksOptions />
      </div>
      <LinksContainer />
    </div>
  );
}

export default Links;
