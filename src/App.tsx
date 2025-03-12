import "./App.css";
import CenterMain from "./components/Main/CenterMain";
import LeftSideBar from "./components/SideBar/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/SideBar/RightSideBar/RightSideBar";
import useThemeStore from "./store/themeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);
  console.log(theme);
  return (
    <main
      style={{
        backgroundColor: theme.background_color,
      }}
      id="main-wrapper"
      className="text-[#AFA3A3] w-full h-full max-w-screen max-h-screen justify-center p-2 flex "
    >
      <LeftSideBar />
      <CenterMain />
      <RightSideBar />
    </main>
  );
}

export default App;
