import { CiUser } from "react-icons/ci";
import { useUser } from "../../../hooks/useUser";
import IconButton from "../../UI/Buttons/IconButton";

function RightSideBar() {
  const user = useUser();
  console.log(user);
  return (
    <div
      className="w-full h-full  hidden flex-col justify-between items-center py-8
        sm:
        md:flex md:bg-surface
        lg:"
    >
      <div>
        <IconButton
          className="p-2 rounded-sm hover:bg-primary"
          needTooltip={true}
          tooltipPlaceholder="Profile"
          tooltipDirection="left"
        >
          <CiUser className="text-[1.5rem]" />
        </IconButton>
      </div>
    </div>
  );
}

export default RightSideBar;
