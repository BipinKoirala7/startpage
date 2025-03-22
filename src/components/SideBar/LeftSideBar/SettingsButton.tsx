import { IoSettingsOutline } from "react-icons/io5";
import IconButton from "../../UI/Buttons/IconButton";
import { useRef, useState } from "react";
import Menu from "../../UI/Modal/Menu";

function SettingsButton() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="" ref={parentRef}>
        <IconButton
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-accent2 p-4 rounded-[50%] hover:rounded-[20%]"
          needTooltip={true}
          tooltipPlaceholder="Settings"
        >
          <IoSettingsOutline className="text-[1.5rem] text-accent1" />
        </IconButton>
      </div>
      <Menu
        header="Settings"
        open={isOpen}
        parentRef={parentRef}
        direction="center"
        closeFn={() => setIsOpen(false)}
        className="min-w-[20rem] flex"
      >
        <div className="flex flex-col gap-4 px-2 py-2 min-h-full min-w-full">
            <div className="flex flex-col gap-2 h-full">
              <p>Theme</p>
              <div className="flex gap-2 items-center">
                <p>Light</p>
                <p>Dark</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-full">
              <p>Language</p>
              <div className="flex gap-2 items-center">
                <p>English</p>
                <p>French</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-full">
              <p>Notifications</p>
              <div className="flex gap-2 items-center">
                <p>On</p>
                <p>Off</p>
              </div>
            </div>
        </div>
      </Menu>
    </>
  );
}

export default SettingsButton;
