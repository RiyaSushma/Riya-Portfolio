import Home from "./Pages/Home";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMouseEnter = () => {
    setShowSidebar(true);
  };

  const handleMouseLeave = () => {
    setShowSidebar(false);
  };


  return (
    <div className="relative z-0" id="app">
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
          className={`fixed items-center h-screen flex bg-transparent text-white transition-all ease-in-out duration-300 ${
            showSidebar ? "w-auto" : "w-0"
          } overflow-hidden z-50`}
        >
          <Sidebar/>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-20"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <ArrowForwardIosIcon/>
        </button>
      </div>
      <div className="relative p-3 z-0 pl-10 pr-10">
      <Header/>
      <Home/>
      <div className="bottom-0">
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;