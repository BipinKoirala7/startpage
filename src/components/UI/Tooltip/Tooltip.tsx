type TooltipProps = {
  placeholder: string | null;
  shouldOpen: boolean;
  tooltipId: string;
};

import "../../../App.css";
import TooltipContainer from "./TooltipContainer";

function Tooltip(props: TooltipProps) {
  const { placeholder, shouldOpen, tooltipId } = props;
  return (
    <>
      {shouldOpen && (
        <div id={tooltipId} className={`tooltip-wrapper absolute`}>
          <TooltipContainer name={placeholder} />
        </div>
      )}
    </>
  );
}

export default Tooltip;
