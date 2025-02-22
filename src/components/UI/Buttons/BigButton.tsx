type BigButtonProps= {
  name: string,
  link: string,
}

function BigButton(props: BigButtonProps) {
  const { name,link } = props;
  return (
    <button
      className={`w-full transition-all duration-200 ease-linear text-ellipsis overflow-hidden p-2 aspect-[3/2] rounded-[1rem] flex gap-2 flex-col  items-center justify-center border-[2px] bg-transparent border-secondary
      sm:
      md:
      lg:hover:bg-secondary lg:hover:border-transparent
      xl:
      `}
    >
      <img src={link} alt="Image" className="" />
      <p className="w-full  text-ellipsis text-nowrap overflow-hidden">
        {name}
      </p>
    </button>
  );
}

export default BigButton