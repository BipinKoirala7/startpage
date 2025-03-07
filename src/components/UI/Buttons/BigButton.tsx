import { useState } from "react";

type BigButtonProps = {
  name: string;
  icon_link: string;
  onClick?: () => void;
};

function BigButton(props: BigButtonProps) {
  const [ openContextMenu,setOpenContextMenu] = useState<boolean>(false);
  const { name, icon_link, onClick } = props;
  function handleContextMenu(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setOpenContextMenu(prev => !prev);
  }
  return (
    <div className="relative" onContextMenu={handleContextMenu}>
      <button
        className={`w-full transition-all duration-200 ease-linear text-ellipsis  aspect-[3/2] rounded-[1rem] flex gap-2 flex-col  items-center justify-center border-[2px] bg-transparent border-primary relative
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
      <div className={`${openContextMenu ? "block": "hidden"
        } absolute -right-0 -top-0 bg-secondary p-2 z-30 `}>
          this is the Context Menu
        </div>
    </div>
  );
}
// when cright click then two or three options will be shown in the button

export default BigButton;
