import { useEffect, useState } from "react";
import DashBoard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import _debounce from "lodash.debounce";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100);

    window.addEventListener("resize", handleResize);
    console.log(width);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <DashBoard showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
}

export default App;
