type modalPropsT = {
  children: React.ReactNode;
  direction?: string;
  shouldOpen?: boolean;
  className?: string;
};

function Modal(props: modalPropsT) {
  const { children, direction,shouldOpen=false, className} = props;
  return (
    <>
      {shouldOpen && (
        <div
          className={`${className} absolute z-20 ${
            direction === "top"
              ? "top-[-110%] left-1/2 -translate-x-1/2"
              : direction === "bottom"
              ? "top-[110%] left-1/2 -translate-x-1/2"
              : direction === "right"
              ? "left-[110%]  top-1/2 -translate-y-1/2"
              : "right-[110%] top-1/2 -translate-y-1/2"
          } 
            transition-all duration-200 ease-linear bg-surface border-[2px] border-primary rounded-md p-2`}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Modal;
