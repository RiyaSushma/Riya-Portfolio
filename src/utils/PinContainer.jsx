import React, { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const PinContainer = ({
    children,
    id,
    hover_title,
    img,
    className = "text-white",
    containerClassName = "w-48 h-48",
    link,
    technologies,
    screenshots,
    title,
    description
}) => {

    const [transform, setTransform] = useState(
        "translate(-50%,-50%) rotateX(0deg)"
    );

    const onMouseEnter = () => {
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };

    const onMouseLeave = () => {
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };

    return (
        <div
            className={cn(
                "relative group/pin cursor-pointer mb-36",
                containerClassName
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div
                style={{
                    perspective: "62.5rem",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="flex items-center justify-center absolute left-1/2 bottom-3 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    style={{
                        transform: transform,
                    }}
                    className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_0.5rem_1rem_rgb(0_0_0/0.4)] dark:bg-black bg-pink-400 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
                >
                    <div className={cn("relative", className)} key={id}>
                        {children}
                    </div>
                </div>
            </div>
            <PinPerspective
                hover_title={hover_title}
                href={link}
                id={id}
                img={img}
                containerClassName={containerClassName}
                screenshots={screenshots}
                technologies={technologies}
                title={title}
                description={description}
            />
        </div>
    );
};

export const PinPerspective = ({
    href,
    id,
    hover_title,
    img,
    className = "text-white",
    containerClassName = "w-48 h-48",
    technologies,
    screenshots,
    title,
    description
}) => {

    return (
        <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 transition duration-500">
            <div className="w-full h-full -mt-7 flex-none inset-0">
                <div className="absolute top-1/4 inset-x-0 flex justify-center">
                    <div
                        key={id}
                        rel="noopener noreferrer"
                        className="relative flex space-x-2 items-center rounded-full dark:bg-zinc-950 bg-pink-500 py-0.5 px-4 ring-1 ring-white/10"
                    >
                        <div
                            id={id}
                            className="relative text-white text-xs font-bold inline-block py-0.5 hover:cursor-pointer"
                            key={id}
                        >
                            {hover_title}
                        </div>
                    
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                    </div>
                </div>
                <div
                    key={id}
                    style={{
                        perspective: "62.5rem",
                        transform: "rotateX(70deg) translateZ(0)",
                    }}
                    className="absolute left-1/2 top-2/3 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                >
                    <>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,

                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: 0,
                            }}
                            className="absolute left-1/2 top-2/3 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,
                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: 2,
                            }}
                            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,

                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: 4,
                            }}
                            className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                    </>
                </div>

                <>
                    <motion.div className="absolute right-1/2 bottom-1/3 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-16 group-hover/pin:h-36 blur-[2px]" />
                    <motion.div className="absolute right-1/2 bottom-1/3 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-16 group-hover/pin:h-36" />
                    <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/3 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full blur-[3px]" />
                    <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/3 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full " />
                </>
            </div>
        </motion.div>
    );
};
