import { useUser } from "../../../hooks/useUser";
import TodoList from "./TodoList/TodoList";
import Notes from "./Notes/Notes";
import User from "./User/User";
import Timer from "./Timer/Timer";
import WeatherBox from "./Weather/WeatherBox";
import DateAndTime from "./DateAndTime/DateAndTime";

function RightSideBar() {
  const user = useUser();
  console.log(user);
  return (
    <div
      className="w-full h-full  hidden flex-col justify-between items-center py-4 text-text bg-surface
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
          <WeatherBox />
          <DateAndTime />
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
