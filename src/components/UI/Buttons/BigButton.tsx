import { useState } from "react";
import IconButton from "./IconButton";
import useLinkStore from "../../../store/linkStore";
import useFolderStore from "../../../store/folderStore";

type BigButtonProps = {
  link_id:string,
  name: string;
  icon_link: string;
  onClick?: () => void;
};

function BigButton(props: BigButtonProps) {
  const deleteLinks = useLinkStore(state=> state.removeLink)
  const selected_folder_id = useFolderStore(state => state.selectedFolder?.folder_id)

  if(!selected_folder_id) return null;
  const [openContextMenu, setOpenContextMenu] = useState<boolean>(false);
  const { name, icon_link, onClick,link_id } = props;
  function handleContextMenu(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) {
    e.preventDefault();
    setOpenContextMenu((prev) => !prev);
  }
  return (
    <div
      className="relative rounded-[1rem]  border-[2px] bg-transparent border-primary "
      onContextMenu={handleContextMenu}
    >
      {!openContextMenu ? (
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
      ) : (
        <div
          className={`h-full w-full p-2 rounded-[inherit] grid grid-rows-2 gap-1`}
        >
          <IconButton className="bg-primary w-full rounded-t-[.75rem] rounded-md py-1 hover:text-text hover:bg-neutral">
            Edit
          </IconButton>
          <IconButton className="bg-primary  w-full rounded-b-[.75rem] rounded-md py-1 hover:bg-accent2 hover:text-text" onClick={()=>{
            fetch(import.meta.env.VITE_BASE_API_URL + '/links/'+selected_folder_id + '/' +link_id,{
              method:'DELETE',
            }).then(response => response.json()).then(data => {
              console.log(data)
              deleteLinks(link_id)
            })
          }}>
            Delete
          </IconButton>
        </div>
      )}
    </div>
  );
}
// when cright click then two or three options will be shown in the button

export default BigButton;
