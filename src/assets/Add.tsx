import { svgPropT } from "../types";

function Add(props: svgPropT) {
  const { fill,stroke,className} = props
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default Add