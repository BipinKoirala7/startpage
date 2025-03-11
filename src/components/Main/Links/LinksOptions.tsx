import CreateNewLink from "./CreateNewLink";
import FolderInfo from "../Folders/FolderInfo";

function LinksOptions() {
  return (
    <div className="flex flex-row gap-2">
     <CreateNewLink />
      <FolderInfo />
    </div>
  );
}

export default LinksOptions