import React from "react";
import { motion } from 'framer-motion';
import Section_Image from '/images/section_image.jpg';

function About() {
    return (
        // <div className="home-container">
        <div className="relative w-full inset-0 flex flex-col about-container mt-10 h-full" id="about">
            <h3 className="font-bold xl:text-xl lg:text-xl md:text-lg sm:text-lg s:text-lg xs:text-lg xxl:text-xl dark:text-white text-black text-center">
                About Me
            </h3>
            <section
                className="grid grid-cols-2 text-black dark:text-white h-full items-start mt-11"
            >
                <motion.div initial={{ x: "-10%", opacity: 0 }}
                                whileInView={{ x: "0%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                <section id="about" className="flex-1 flex-col text-black dark:text-white items-center justify-center p-3">
                    <div className="xs:text-justify s:text-left text-justify justify-center xxl:text-lg lg:text-lg md:text-lg sm:text-md s:text-md xs:text-md">
                    <p>
                        I'm a Computer Science graduate passionate in{" "}
                        <span className="text-purple-400 font-bold">
                            {" "}
                            JavaScript
                        </span>
                        ,{" "}
                        <span className="text-purple-400 font-bold"> HTML</span>
                        ,<span className="text-purple-400 font-bold"> CSS</span>
                        , and{" "}
                        <span className="text-purple-400 font-bold">
                            React JS
                        </span>
                        , as well as{" "}
                        <span className="text-purple-400 font-bold">
                            Python
                        </span>{" "}
                        for machine learning,{" "}
                        <span className="text-purple-400 font-bold">C++</span>{" "}
                        for data structures and algorithms, and a beginner in
                        Java and Android development.
                    </p>
                    <p>
                        My backend expertise includes working with{" "}
                        <span className="text-purple-400 font-bold">
                            {" "}
                            Express.js
                        </span>
                        ,
                        <span className="text-purple-400 font-bold">
                            {" "}
                            REST
                        </span>{" "}
                        and{" "}
                        <span className="text-purple-400 font-bold">
                            {" "}
                            GraphQL APIs
                        </span>
                        , and databases like{" "}
                        <span className="text-purple-400 font-bold">
                            {" "}
                            PostgreSQL
                        </span>
                        ,{" "}
                        <span className="text-purple-400 font-bold"> SQL</span>,
                        and
                        <span className="text-purple-400 font-bold">
                            {" "}
                            MongoDB
                        </span>
                        . Additionally, I have hands-on experience with Laravel,
                        Remix.js, and data analysis tools such as NumPy and
                        Pandas. My skills span full-stack development and
                        data-driven projects.
                    </p>
                    </div>
                </section>
                </motion.div>
               <motion.div initial={{ x: "10%", opacity: 0 }}
                                whileInView={{ x: "0%", opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}>
                <section className="relative flex w-full p-3 justify-end">
                        <div className="flex w-96 rounded-xl">
                            <img src={Section_Image} className="rounded-xl block max-w-full object-cover"/>
                        </div>
                </section>
               </motion.div>
            </section>
        </div>
    );
}

export default About;
