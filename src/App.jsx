import Home from "./Pages/Home";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleMouseEnter = () => {
      console.log("mouse enter");
      setShowSidebar(true);

      document.getElementById("sidebar").style.width = "auto";
    };

    const handleMouseLeave = () => {
      console.log("mouse leave");
      setShowSidebar(false);
    };

    return (
        <div className="relative z-0" id="app">
            <div id="sidebar" 
                className="fixed left-0 top-0 h-screen flex items-center w-32 bottom-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`bg-transparent text-white ${
                        showSidebar ? "w-auto" : "w-0"
                    } overflow-hidden z-50`}
                >
                    <Sidebar />
                </div>
                <div>
                    {/* {!showSidebar && (
                        <button
                            className="p-2 bg-gray-800 text-white rounded-full z-30"
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <ArrowForwardIosIcon />
                        </button>
                    )} */}
                    {!showSidebar && (
                        <div
                            className="p-2 bg-gray-800 text-white rounded-full z-50"
                            // onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <ArrowForwardIosIcon />
                        </div>
                    )}
                </div>
            </div>
            <div className="relative p-3 z-0 pl-10 pr-10">
                <Header />
                <Home />
                <div className="bottom-0">
                    <Footer />
                </div>
            </div>
        </div>

        // <div className="full-screen">
        //   <div className="header">
        //     <Header/>
        //   </div>
        //   <div className="home">
        //     <Home/>
        //   </div>
        //   <div className="sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        //   <div
        //       className={`fixed items-center h-screen flex bg-transparent text-white transition-all ease-in-out duration-300 ${
        //         showSidebar ? "w-auto" : "w-0"
        //       } overflow-hidden z-50`}
        //     >
        //       <Sidebar/>
        //     </div>
        //     <button
        //       className="left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-20"
        //       onClick={() => setShowSidebar(!showSidebar)}
        //     >
        //       <ArrowForwardIosIcon/>
        //     </button>
        //   </div>
        //   <div className="footer">
        //     <Footer/>
        //   </div>
        // </div>
    );
}

export default App;
