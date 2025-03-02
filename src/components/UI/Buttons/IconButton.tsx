import { v4 as uuid } from 'uuid';

import { ReactNode, useState } from "react";

import Tooltip from "../Tooltip/Tooltip";

type IconButtonProps = {
  className: string;
  needTooltip: boolean;
  children: ReactNode;
  tooltipPlaceholder: string | null;
  onClick?: () => void;
  tooltipDirection?: "top" | "bottom" | "left" | "right";
};

function IconButton(props: IconButtonProps) {
  const { className, needTooltip, children, tooltipPlaceholder, onClick,tooltipDirection } =
    props;
  const [shouldOpen, setShouldOpen] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setShouldOpen(true)}
      onMouseLeave={() => setShouldOpen(false)}
      className={`${className} transition-all duration-200 ease-linear relative flex justify-center items-center cursor-pointer w-fit`}
    >
      {children}
      {needTooltip && (
        <Tooltip tooltipId={uuid()} placeholder={tooltipPlaceholder} shouldOpen={shouldOpen} direction={tooltipDirection } />
      )}
    </div>
  );
}

export default IconButton;
