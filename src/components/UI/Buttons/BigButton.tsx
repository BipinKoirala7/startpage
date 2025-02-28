type BigButtonProps = {
  name: string;
  icon_link: string;
  onClick?: () => void;
};

function BigButton(props: BigButtonProps) {
  const { name, icon_link,onClick } = props;
  return (
    <button
      className={`w-full transition-all duration-200 ease-linear text-ellipsis overflow-hidden  aspect-[3/2] rounded-[1rem] flex gap-2 flex-col  items-center justify-center border-[2px] bg-transparent border-primary
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
  );
}

export default BigButton;
