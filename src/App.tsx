import "./App.css";
import CenterMain from "./components/Main/CenterMain";
import LeftSideBar from "./components/SideBar/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/SideBar/RightSideBar/RightSideBar";

function App() {
  return (
    <main
      id="main-wrapper"
      className="text-text w-full h-full max-w-screen max-h-screen justify-center p-2 flex bg-background"
    >
      <LeftSideBar />
      <CenterMain />
      <RightSideBar />
    </main>
  );
}

export default App;
