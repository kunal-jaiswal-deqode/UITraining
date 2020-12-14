import { useState } from "react";
import DashBoard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <DashBoard showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
}

export default App;
