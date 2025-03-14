import { useRef, useState } from "react";
import IconButton from "./IconButton";
import useLinkStore from "../../../store/linkStore";
import useFolderStore from "../../../store/folderStore";
import Menu from "../Modal/Menu";

type BigButtonProps = {
  link_id: string;
  name: string;
  icon_link: string;
  onClick?: () => void;
};

function BigButton(props: BigButtonProps) {
  const [openContextMenu, setOpenContextMenu] = useState<boolean>(false);

  const menuParentElementRef = useRef<HTMLDivElement | null>(null);

  const deleteLinks = useLinkStore((state) => state.removeLink);
  const selected_folder_id = useFolderStore(
    (state) => state.selectedFolder?.folder_id
  );

  if (!selected_folder_id) return null;
  const { name, icon_link, onClick, link_id } = props;
  function handleContextMenu(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) {
    e.preventDefault();
    setOpenContextMenu((prev) => !prev);
  }
  return (
    <div
      ref={menuParentElementRef}
      className="relative rounded-[1rem]  border-[2px] bg-transparent border-primary flex"
      onContextMenu={handleContextMenu}
    >
      <button
        className={`w-full transition-all duration-200 ease-linear text-ellipsis  aspect-[3/2] rounded-[.75rem] flex gap-2 flex-col  items-center justify-center relative
        sm:
        md:
        lg:hover:bg-primary lg:hover:border-transparent
        xl:
        `}
        onClick={onClick}
      >
        <img src={icon_link} alt="Image" className="max-w-8 w-8" />
        <p className="w-full text-ellipsis text-nowrap overflow-hidden">
          {name}
        </p>
      </button>
      <Menu
        parentRef={menuParentElementRef}
        open={openContextMenu}
        closeFn={() => setOpenContextMenu(false)}
        direction="right"
      >
        <div
          className={`h-full w-full px-2 py-3 rounded-[inherit] grid grid-rows-2 gap-1 text-white`}
        >
          <IconButton className="bg-primary w-full rounded-md px-3 py-1 hover:text-text hover:bg-neutral">
            Edit
          </IconButton>
          <IconButton
            className="bg-primary  w-full rounded-md py-1 hover:bg-accent2 hover:text-text"
            onClick={() => {
              fetch(import.meta.env.VITE_BASE_API_URL + "/links/" + link_id, {
                method: "DELETE",
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  deleteLinks(link_id);
                });
            }}
          >
            Delete
          </IconButton>
        </div>
      </Menu>
    </div>
  );
}
// when cright click then two or three options will be shown in the button

export default BigButton;
