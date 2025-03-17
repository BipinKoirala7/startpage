import { useRef, useState } from "react";
import { CiUser } from "react-icons/ci";

import IconButton from "../../../UI/Buttons/IconButton";
import Menu from "../../../UI/Modal/Menu";
import { useUser } from "../../../../hooks/useUser";

function User() {
  const user = useUser();
  console.log(user);
  // right now the user is not configured very well but you have to change it to use it accordingle
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="" ref={parentRef}>
      <IconButton
        className="p-2 rounded-sm hover:bg-primary"
        needTooltip={!isOpen}
        tooltipPlaceholder="Todo List"
        tooltipDirection="left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiUser className="text-[1.5rem]" />
      </IconButton>
      <Menu open={isOpen} closeFn={() => setIsOpen(false)} className="" parentRef={parentRef} direction="top-left">
        <div className="flex flex-col gap-2 px-1">
          <p className="text-[1.25rem]">User</p>
          <div className="flex flex-col gap-2">
            {
              user === null ? (
                <div>
                  Please Sign in to view your profile
              </div>
              ) : (
                  <div>
                    <p>{user.email}</p>
                  </div>
              )
            }
          </div>
          </div>
      </Menu>
    </div>
  );
}

export default User;
