import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useHrefStateValue, useThemeStateValue } from "../../State/Context";
import { toggle_mode } from "../../State/Actions/actions";
import Logo from "../../utils/Logo";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { CHANGE_HREF } from "../../State/Actions/actionTypes";

function Header() {

    const { state: {href}, dispatch: hrefDispatch } = useHrefStateValue();

    const { state: {darkMode} , dispatch} = useThemeStateValue(); 
    useEffect(() => {
        if(darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleMode = () => {
        dispatch(toggle_mode());
    }

    const handleAnchorLink = (e) => {
        console.log(e.getAttribute('href'));
        const href = e.getAttribute('href');
        hrefDispatch({ type: CHANGE_HREF, payload: href });
    }

    const navigateItems = [
        {
            name: "Home",
            url: "#header",
            active: true
        },
        {
            name: "About",
            url: "#about",
            active: true
        },
        {
            name: "Expertise",
            url: "#expertise",
            active: true
        },
        {
            name: "Projects",
            url: "#project",
            active: true
        },
        {
            name: "Contact",
            url: "#contact",
            active: true
        }
    ];

    return (
        <header className="shadow w-full" id="header">
            <motion.div
                initial={{ y:"60%", opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <section className="w-full max-w-full">
                <nav className="flex justify-center text-black">
                    <h3 className="text-black font-poppins lg:m-6 md:m-5 sm:mt-8 lg:text-lg xs:text-2xl s:text-2xl md:text-3xl sm:text-2xl underline-transition dark:text-white">
                        <ProfileIcon/>
                    </h3>
                    <ul className="flex ml-auto">
                        {
                            navigateItems.map((items) => items.active ? (
                                <li 
                                    key={items.name}
                                    onClick={(e) => handleAnchorLink(e.target)}
                                >
                                    {/* <button className="rounded-lg text-black md:m-5 lg:m-6 sm:m-3 sm:mt-6 pb-1 font-poppins font-medium lg:text-lg md:text-lg sm:text-lg underline-transition dark:text-gray-400" onClick={() => navigate(items.url)}>
                                        {items.name}
                                    </button> */}
                                    <AnchorLink className="rounded-lg md:m-5 
                                    xs:m-3 xs:mt-6 s:m-3 s:mt-6 lg:m-6 sm:m-3 sm:mt-6 pb-1 font-poppins font-medium lg:text-lg md:text-lg sm:text-lg underline-transition dark:text-gray-400 text-black" href={items.url}>
                                        {items.name}
                                    </AnchorLink>
                                    { navigateItems.name }
                                </li>
                            ) : (
                                null
                            ))
                        }
                    </ul>
                    <div
                        className="xl:m-4 lg:m-4 sm:m-2 xs:m-2 md:m-3 rounded-full lg:h-12 lg:w-12 md:h-7 md:w-7 md:mt-4 sm:mt-5 xs:mt-5 s:mt-5 sm:h-7 sm:w-7 s:h-7 s:w-7 xs:h-7 xs:w-7 border-2 border-dashed rotating-circle items-center justify-center flex hover:border-purple-500 border-black dark:border-white">
                        <div className="stationary-icon w-full h-full flex items-center justify-center" onClick={toggleMode}>
                        {darkMode ? <DarkModeIcon
                                className="text-white hover:text-purple-500" /> : <LightModeIcon className="text-black hover:text-purple-500"/>}
                        </div>
                    </div>

                    <div className="rounded-full lg:h-16 lg:w-16 lg:mt-3 md:h-14 md:w-14 md:mt-3 sm:mt-4 s:mt-5 xs:mt-5 sm:h-7 sm:w-7 s:h-7 s:w-7 xs:h-7 xs:w-7 flex justify-center rotating-circle background-image items-center">
                        <div className="stationary-icon w-full h-full flex items-center justify-center">
                            <img
                                src="/images/logo.png"
                                className="lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-4 sm:w-4 s:h-4 s:w-4 xs:h-4 xs:w-4 lg:mt-1 md:mt-1 sm:mt-1 xs:mt-0.5 s:mt-0.5"
                            />
                        </div>
                    </div>
                </nav>
            </section>
            </motion.div>
        </header>
    );
}

export default Header;