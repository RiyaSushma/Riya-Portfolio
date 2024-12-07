import EditText from "../../utils/EditText.jsx";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Vector1 from "/images/Vector1.png";
import Vector2 from "/images/Vector2.png";
import Vector3 from "/images/Vector3.png";
import Vector4 from "/images/Vector4.png";
import Riya from "/images/Riya.png";
import { useThemeStateValue } from "../../State/Context.jsx";
import FloatingDiv from "../../utils/FloatingDiv.jsx";
import Glasses from "/images/glasses.png";
import GlassesEmoji from "/images/glassesemoji.png";
import HumbleEmoji from "/images/humble.png";
import Full_Stack_dev from "/images/full_stack.png";
import Website_dev from "/images/website_dev.png";
import AI_ML_dev from "/images/ai_ml.png";
import { useRef } from "react";
export default function HomeContainer() {
    const {state: { darkMode}, } = useThemeStateValue();

    const handleResumeDownload = () => {
        const resumeUrl = "./files/Riya_Resume.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "riya_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const ref = useRef(null);

    // const { x, y } = useFollow

    return (
        // <div className="home-container relative h-screen mx-auto w-full">
        //     <section className="flex flex-col justify-between h-full relative">
        //         <div className="flex flex-col lg:p-3 md:p-2 sm:p-1 s:p-3 xs:sm:p-3 text-black dark:text-white gap-6">
        //             <motion.div
        //                 initial={{ x: "-5%", opacity: 0 }}
        //                 whileInView={{ x: 0, opacity: 1 }}
        //                 transition={{ duration: 0.5, ease: "easeOut" }}
        //             >
        //                 <h1 className="xl:text-6xl lg:text-6xl md:text-4xl s:text-4xl xs:text-4xl mb-5">Hi! I Am</h1>
        //                 <h1 className="xl:text-6xl lg:text-6xl md:text-4xl s:text-4xl xs:text-4xl mb-5 text-purple-600">Riya</h1>
        //             </motion.div>
        //             <motion.div
        //                 initial={{ x: "-5%", opacity: 0 }}
        //                 whileInView={{ x: 0, opacity: 1 }}
        //                 transition={{ duration: 1.5, ease: "easeOut" }}
        //             >
        //                 <EditText />
        //             </motion.div>
        //             <motion.div
        //                 initial={{ y: "80%", opacity: 0 }}
        //                 whileInView={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 1.2, ease: "easeOut" }}
        //             >
        //                 <div className="flex pt-7 relative">
        //                     <div className="gradient-border">
        //                         <button
        //                             className="font-medium lg:p-3 md:p-3 sm:p-3 s:p-3 xs:p-3 lg:text-2xl md:text-xl
        //             sm:text-lg s:text-lg xs:text-lg w-full flex-shrink-0 bg-purple-100 dark:bg-indigo-900 text-black dark:text-white"
        //                             onClick={handleResumeDownload}
        //                         >
        //                             Resume
        //                             <FileDownloadIcon />
        //                         </button>
        //                     </div>
        //                 </div>
        //             </motion.div>
        //         </div>
        //         <div className="flex absolute bottom-10 gap-10">
        //             <FaGithub className="text-5xl dark:text-white text-black" />
        //             <FaLinkedin className="text-5xl dark:text-white text-black" />
        //         </div>
        //     </section>
        //     <section className="flex-1 relative z-0 h-full">
        //         <div className="profile-image-container">
        //             {darkMode ? (
        //                 <>
        //                   <img src={Vector3} alt="" className="xl:scale-0.69 lg:scale-0.69 s:left-3.5 xs:left-3.5 md:left-3.5 xl:-left-16 lg:-left-16 md:-left-15 s:-left-15 xs:-left-15 xl:-top-9 lg:-top-9 md:-top-3 s:-top-3 xs:-top-3 xs:w-70 s:w-70 md:w-70 transform h-auto rotate-10"/>
        //                   <img src={Vector4} alt="" className="xl:-top-5 lg:-top-5 md:-top-1 xs:-top-0.25 s:-top-0.25 xl:scale-0.67 lg:scale-0.67 s:left-3.5 xs:left-3.5 md:left-3.5 transform h-auto -rotate-50"/>
        //                   <img src={Riya} alt="" className="xl:scale-1  xl:left-28 lg:scale-1 lg:left-28 xs:scale-0.5 s:scale-0.5 s:left-3.5 xs:left-3.5 md:left-3.5"/>
        //                 </>
        //             ) : (
        //               <>
        //                 <img src={Vector1} alt="" className="xl:scale-0.69 lg:scale-0.69 s:left-3.5 xs:left-3.5 md:left-3.5 xl:-left-16 lg:-left-16 md:-left-15 s:-left-15 xs:-left-15 xl:-top-9 lg:-top-9 md:-top-3 s:-top-3 xs:-top-3 xs:w-70 s:w-70 md:w-70 transform h-auto" />
        //                 <img src={Vector2} alt="" className="xl:-top-5 lg:-top-5 md:-top-1 xs:-top-0.25 s:-top-0.25 xl:scale-0.67 lg:scale-0.67 s:left-3.5 xs:left-3.5 md:left-3.5 transform h-auto"/>
        //                 <img src={Riya} alt="" className="absolute xl:scale-1  xl:left-28 lg:scale-1 lg:left-28 xs:scale-0.5 s:scale-0.5 s:left-3.5 xs:left-3.5 md:left-3.5"/>
        //               </>
        //             )}
        //             <div className="absolute flex top-0 -left-12 w-auto xs:top-48 s:top-48 md:top-48">
        //               <FloatingDiv image={Website_dev} txt1="Software" txt2="Developer" className="bg-yellow-300"/>
        //             </div>
        //             <div className="absolute flex w-auto -top-7 xl:right-36 lg:right-36 md:justify-end sm:justify-end s:justify-end">
        //               <FloatingDiv image={Full_Stack_dev} txt1="Full-Stack" txt2="Developer"/>
        //             </div>

        //             <div className="absolute flex w-auto top-1/2 xl:right-36 lg:right-36 md:justify-end sm:justify-end s:justify-end">
        //               <FloatingDiv image={AI_ML_dev} txt1="AI/ML" txt2=""/>
        //             </div>

        //             <div className="absolute flex top-2 -left-20">
        //               <img src={GlassesEmoji} alt="" className="xl:lg:w-2/3 lg:w-2/3 s:w-1/3 xs:w-1/3 md:w-1/3"/>
        //             </div>

        //         </div>
        //         <motion.div
        //             initial={{ y: "50%", opacity: 0 }}
        //             whileInView={{ y: 0, opacity: 1 }}
        //             transition={{ duration: 1.2, ease: "easeOut" }}
        //         ></motion.div>
        //     </section>
        // </div>

        <div className="grid grid-cols-2 relative portfolio-container mt-11">
            <section className="relative gap-2 h-full w-full">
                <div className="grid grid-col-1 lg:p-3 md:p-2 sm:p-1 xs:p-1 xl:p-3 text-black dark:text-white xxl:gap-6 xl:gap-6 lg:gap-6 md:gap-2 sm:gap-2 xs:gap-2">
                    <motion.div
                        initial={{ x: "-2%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="xl:text-6xl lg:text-6xl md:text-4xl s:text-4xl xs:text-4xl xxl:mb-5 xl:mb-5 lg:mb-5 md:mb-3 sm:mb-2 xs:mb-2">Hi! I Am</h1>
                        <h1 className="xl:text-6xl lg:text-6xl md:text-4xl s:text-4xl xs:text-4xl xxl:mb-3 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 xs:mb-2 text-purple-600">Riya</h1>
                    </motion.div>
                    <motion.div
                        initial={{ x: "-2%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <EditText />
                    </motion.div>
                    <motion.div
                        initial={{ y: "80%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="flex">
                            <div className="gradient-border">
                                <button
                                    className="font-medium lg:p-3 md:p-3 sm:p-3 s:p-3 xs:p-3 lg:text-2xl md:text-xl
                    sm:text-lg s:text-lg xs:text-lg w-full flex-shrink-0 bg-purple-100 dark:bg-indigo-900 text-black dark:text-white"
                                    onClick={handleResumeDownload}
                                >
                                    Resume
                                    <FileDownloadIcon />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex gap-10 bottom-1">
                        <FaGithub className="text-5xl dark:text-white text-black" />
                        <FaLinkedin className="text-5xl text-blue-400" />
                    </div>
                </div>
            </section>
            <section className="relative h-full">
                <div className="profile-image-container">
                    {darkMode ? (
                        <>
                            <motion.div
                                initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "-15%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <img src={Vector3} alt="" className="xl:scale-0.69 lg:scale-0.69 s:left-3.5 xs:left-3.5 md:left-3.5 xl:-left-16 lg:-left-16 md:-left-15 s:-left-15 xs:-left-15 xl:-top-9 lg:-top-9 md:-top-3 s:-top-3 xs:-top-3 xs:w-70 s:w-70 md:w-70 transform rotate-10 object-cover block max-w-full"/>
                            </motion.div>
                          {/* <img src={Vector3} alt="" className="xl:scale-0.69 lg:scale-0.69 s:left-3.5 xs:left-3.5 md:left-3.5 xl:-left-16 lg:-left-16 md:-left-15 s:-left-15 xs:-left-15 xl:-top-9 lg:-top-9 md:-top-3 s:-top-3 xs:-top-3 xs:w-70 s:w-70 md:w-70 transform rotate-10"/> */}
                          {/* <img src={Vector3} alt="" className="xl:scale-0.69 lg:scale-0.69 inset-0 top-0 xs:w-70 s:w-70 md:w-70 transform h-auto rotate-10"/> */}
                          <motion.div initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "4.5%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                                <img src={Vector4} alt="" className="xl:-top-5 lg:-top-5 md:-top-1 xs:-top-0.25 s:-top-0.25 xl:scale-0.67 lg:scale-0.67 s:left-3.5 xs:left-3.5 md:left-3.5 transform -rotate-50 object-cover block max-w-full"/>
                          </motion.div>
                          <motion.div initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "30%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                            <img src={Riya} alt="" className="xl:scale-1 xl:left-28 lg:scale-1 lg:left-28 xs:scale-0.5 s:scale-0.5 s:left-0.5 xs:left-0.5 md:left-2.5 object-cover block max-w-full"/>
                          </motion.div>
                          {/* <img src={Vector4} alt="" className="xl:scale-0.67 top-8 left-16 lg:scale-0.67 transform h-auto -rotate-50"/> */}
                          {/* <img src={Riya} alt="" className="xl:scale-1 xl:left-28 lg:scale-1 lg:left-28 xs:scale-0.5 s:scale-0.5 top-11"/> */}
                        </>
                    ) : (
                      <>
                        <motion.div initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "-15%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                            <img src={Vector1} alt="" className="xl:scale-0.69 lg:scale-0.69 s:left-3.5 xs:left-3.5 md:left-3.5 xl:-left-16 lg:-left-16 md:-left-15 s:-left-15 xs:-left-15 xl:-top-9 lg:-top-9 md:-top-3 s:-top-3 xs:-top-3 xs:w-70 s:w-70 md:w-70 transform h-full object-cover block max-w-full" />
                        </motion.div>
                        <motion.div initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "4.5%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                            <img src={Vector2} alt="" className="xl:-top-5 lg:-top-5 md:-top-1 xs:-top-0.25 s:-top-0.25 xl:scale-0.67 lg:scale-0.67 s:left-3.5 xs:left-3.5 md:left-3.5 transform object-cover block max-w-full"/>
                        </motion.div>
                        <motion.div initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "30%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                            <img src={Riya} alt="" className="xl:scale-1 xl:left-28 lg:scale-1 lg:left-28 xs:scale-0.5 s:scale-0.5 s:left-3.5 xs:left-3.5 md:left-3.5 object-cover block max-w-full"/>
                        </motion.div>
                      </>
                    )}
                    <div className="flex top-0 -left-12 w-auto xs:top-48 s:top-48 md:top-48 z-10">
                      <FloatingDiv image={Website_dev} txt1="Software" txt2="Developer" className="bg-yellow-300"/>
                    </div>
                    <div className="flex w-auto -top-7 xl:right-36 lg:right-36 md:justify-end sm:justify-end s:justify-end z-10">
                      <FloatingDiv image={Full_Stack_dev} txt1="Full-Stack" txt2="Developer"/>
                    </div>

                    <div className="flex w-auto xl:top-96 xxl:top-96 lg:top-96 md:top-72 sm:top-72 xs:top-72 xl:right-36 lg:right-36 md:justify-end sm:justify-end s:justify-end z-10">
                      <FloatingDiv image={AI_ML_dev} txt1="AI/ML" txt2=""/>
                    </div>

                    <motion.div animate={{ x: 10 }}
                            whileFocus={{ x:0 }}
                            transition={{ ease: "easeOut", duration: 2 }}>
                        <div className="flex -left-20">
                        <img src={GlassesEmoji} alt="" className="xl:lg:w-2/3 lg:w-2/3 s:w-1/3 xs:w-1/3 md:w-1/3 block max-w-full object-cover"/>
                        </div>
                    </motion.div>

                </div>
                <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
            </section>
        </div>
    );
}
