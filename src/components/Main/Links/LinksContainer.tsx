import useFolderStore from "../../../store/folderStore";
import useLinkStore from "../../../store/linkStore";
import BigButton from "../../UI/Buttons/BigButton";

function LinksContainer() {
  const links = useLinkStore((state) => state.links);
  const selected_folder_id = useFolderStore(
    (state) => state.selectedFolder.folder_id
  );
  return (
    <div
      className="max-w-full w-full gap-2 items-center justify-center grid grid-cols-[repeat(auto-fill,minmax(30%,1fr))] p-2
        sm:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
        md:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
        lg:grid-cols-[repeat(auto-fill,minmax(17.5%,1fr))]
        xl:grid-cols-[repeat(auto-fill,minmax(10.5%,1fr))]
    "
    >
      {links.map((option, index) => {
        const { link_name, link_icon_url, folder_id,link_url } = option;
        if (selected_folder_id === folder_id) {
          return (
            <BigButton
              name={link_name}
              icon_link={
                link_icon_url
                  ? link_icon_url
                  : "https://s2.svgbox.net/octicons.svg?ic=link"
              }
              key={index}
              onClick={() => {window.open(link_url, "_blank");}}
            />
          );
        }
      })}
    </div>
  );
}

export default LinksContainer;
