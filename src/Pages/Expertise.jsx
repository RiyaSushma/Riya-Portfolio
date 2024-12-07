import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
import Marquee from "react-fast-marquee";

function Expertise() {
  return (
    <div className="flex mt-36 w-full" id="expertise">
            <section className="flex flex-col text-black dark:text-white h-full overflow-hidden items-center justify-center">
                <h3 className="font-bold lg:text-xl text-center md:text-lg sm:text-lg s:text-lg xs:text-lg xxl:text-xl dark:text-white text-black  p-6">
                    Expertise
                </h3>
                <section className="flex flex-wrap justify-center w-full h-1/4 gap-0 items-center">
                    <div className="flex rounded-2xl items-center w-5/6">
                        <Marquee className="marquee-container" speed={70} pauseOnClick={true} pauseOnHover={true}>
                            <div className="flex gap-10 items-center p-4">
                                <div className="flex flex-col items-center justify-center w-40 border dark:border-white border-black dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-cyan-800 dark:hover:bg-cyan-800">
                                    <RiReactjsLine className="text-7xl text-cyan-500"/> 
                                    <h1 className="text-center font-bold text-xl pl-1 pr-1">React</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-green-900 dark:hover:bg-green-900 items-center">
                                    <SiMongodb className="text-7xl text-green-500"/>
                                    <h1 className="text-center font-bold text-xl">Mongodb</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-green-800 dark:hover:bg-green-800 items-center">
                                    <FaNodeJs className="text-7xl text-green-500"/>
                                    <h1 className="text-center font-bold text-xl">Node Js</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-600 items-center">
                                    <svg width="5rem" height="5rem">
                                        <defs>
                                            <linearGradient id="gradient-decor" gradientTransform="rotate(360)">
                                                <stop offset="50%" stopColor="yellow"/>
                                                <stop offset="50%" stopColor="gold"/>
                                            </linearGradient>
                                        </defs>
                                        <IconContext.Provider value={{ attr: { fill: "url('#gradient-decor')" } }}>
                                            <IoLogoJavascript className="text-7xl" />
                                        </IconContext.Provider>
                                    </svg>
                                    <h1 className="text-center font-bold text-xl">Javascript</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-400 items-center">
                                    <FaBootstrap className="text-7xl text-purple-600"/>
                                    <h1 className="text-center font-bold text-xl">Bootstrap</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 items-center">
                                    <SiExpress className="text-7xl dark:text-white text-black"/>
                                    <h1 className="text-center font-bold text-xl">Express Js</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-red-200 dark:hover:bg-red-200 items-center">
                                    <svg width="5rem" height="5rem">
                                        <defs>
                                            <linearGradient id="html-gradient" gradientTransform="rotate(360)">
                                                <stop offset="70%" stopColor="red"/>
                                                <stop offset="50%" stopColor="orange"/>
                                            </linearGradient>
                                        </defs>
                                        <IconContext.Provider value={{ attr: { fill: "url('#html-gradient')" } }}>
                                            <FaHtml5 className="text-7xl"/>
                                        </IconContext.Provider>
                                    </svg>
                                    <h1 className="text-center font-bold text-xl">HTML</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-400 items-center">
                                    <svg width="5rem" height="5rem">
                                        <defs>
                                            <linearGradient id="css-gradient" gradientTransform="rotate(360)">
                                                <stop offset="70%" stopColor="blue"/>
                                                <stop offset="50%" stopColor="lightblue"/>
                                            </linearGradient>
                                        </defs>
                                        <IconContext.Provider value={{ attr: { fill: "url('#css-gradient')" } }}>
                                            <FaCss3Alt className="text-7xl" />
                                        </IconContext.Provider>
                                    </svg>
                                    <h1 className="text-center font-bold text-xl">CSS</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-purple-300 dark:hover:bg-purple-300 items-center">
                                    <SiRedux className="text-7xl text-purple-500" />
                                    <h1 className="text-center font-bold text-xl">Redux</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-300 items-center">
                                    <FaPython className="text-7xl text-blue-600" />
                                    <h1 className="text-center font-bold text-xl">Python</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-400 items-center">
                                    <SiNumpy className="text-7xl text-blue-300"/>
                                    <h1 className="text-center font-bold text-xl">Numpy</h1>
                                </div>
                                <div className="flex flex-col w-40 border dark:border-white border-black justify-center dark:bg-zinc-900 bg-pink-300 p-8 rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-300 items-center">
                                    <DiMysql className="text-7xl text-blue-500" />
                                    <h1 className="text-center font-bold text-xl">MySql</h1>
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </section>
            </section>
    </div>
  )
}

// function Expertise() {
//     return (
//         <div className="expertise-container">
//             <section
//                 id="expertise"
//                 className="flex flex-col text-black dark:text-white h-full w-full overflow-hidden"
//             >
//                 <h3 className="font-bold lg:text-xl text-center p-6">
//                     Expertise
//                 </h3>
//                 <div className="flex w-full justify-center h-48 items-center">
//                 <div className="scroll-container xl:w-11/12 lg:w-11/12 md:w-2/3 sm:w-2/3 xs:w-2/3 h-full">
//                     <div className="scroll-content xl:gap-10 lg:gap-10 md:gap-1 sm:gap-1 xs:gap-1">
//                         <RiReactjsLine className="text-7xl text-cyan-500" />
//                         <SiMongodb className="text-7xl text-green-500" />
//                         <FaNodeJs className="text-7xl text-green-500" />
//                         <IoLogoJavascript className="text-7xl text-yellow-500" />
//                         <FaBootstrap className="text-7xl text-purple-600" />
//                         <SiExpress className="text-7xl dark:text-white text-black" />
//                         <FaHtml5 className="text-7xl text-orange-500" />
//                         <FaCss3Alt className="text-7xl text-blue-500" />
//                         <SiRedux className="text-7xl text-purple-500" />
//                         <FaPython className="text-7xl text-blue-600" />
//                         <SiNumpy className="text-7xl" />
//                         <DiMysql className="text-7xl" />
//                     </div>
//                     <div className="scroll-content xl:gap-10 lg:gap-10 md:gap-1 sm:gap-1 xs:gap-1">
//                         <RiReactjsLine className="text-7xl text-cyan-500" />
//                         <SiMongodb className="text-7xl text-green-500" />
//                         <FaNodeJs className="text-7xl text-green-500" />
//                         <IoLogoJavascript className="text-7xl text-yellow-500" />
//                         <FaBootstrap className="text-7xl text-purple-600" />
//                         <SiExpress className="text-7xl dark:text-white text-black" />
//                         <FaHtml5 className="text-7xl text-orange-500" />
//                         <FaCss3Alt className="text-7xl text-blue-500" />
//                         <SiRedux className="text-7xl text-purple-500" />
//                         <FaPython className="text-7xl text-blue-600" />
//                         <SiNumpy className="text-7xl" />
//                         <DiMysql className="text-7xl" />
//                     </div>
//                 </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

export default Expertise;

