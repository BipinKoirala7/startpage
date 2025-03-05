import { useUser } from "../../../hooks/useUser";
import TodoList from "./TodoList";
import Notes from "./Notes";
import User from "./User";
import Timer from "./Timer";

function RightSideBar() {
  const user = useUser();
  console.log(user);
  return (
    <div
      className="w-full h-full  hidden flex-col justify-between items-center py-4 bg-surface
        sm:
        md:flex
        lg:
        xl:
        "
    >
      <div
        className="flex flex-col items-center gap-2 h-full
        sm:
        md:flex md:justify-between
        lg:
        xl:"
      >
        <div className="flex flex-col gap-2">
          <div className="bg-primary p-2">Weather Box</div>
          <div className="bg-primary p-2">Date and Time Box</div>
        </div>
        <div className="flex flex-col gap-2">
          <TodoList />
          <Notes />
          <Timer />
          <User />
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
