import HouseIcon from '@mui/icons-material/House';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import TerminalIcon from '@mui/icons-material/Terminal';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeStateValue } from '../../State/Context';
import { toggle_mode } from '../../State/Actions/actions';

function Sidebar() {

    const { state:{ darkMode }, dispatch } = useThemeStateValue();

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    const handleMode = () => {
        dispatch(toggle_mode());
    }

    const handleSectionChange = (navSection) => {
        const section = document.getElementById(navSection);

        if(section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className='border dark:border-blue-50 border-black flex lg:flex-col items-center justify-center rounded-3xl dark:text-white text-black bg-white dark:bg-black h-auto'>
            <div className='flex flex-col p-3 gap-4'>
                <button onClick={() => handleSectionChange("app")}>
                    <HouseIcon/>
                </button>
                <button onClick={() => handleSectionChange("about")} className='dark:bg-black bg-white'>
                    <InfoIcon/>
                </button>
                <button onClick={() => handleSectionChange("project")}>
                    <TerminalIcon/>
                </button>
                <button onClick={() => handleSectionChange("contact")}>
                    <PhoneIcon/>
                </button>
                <div
                    className="rounded-full lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-8 sm:w-8 s:h-7 s:w-7 xs:h-7 xs:w-7 border-2 border-dashed rotating-circle items-center justify-center flex hover:border-purple-500 dark:border-white border-black">
                        <div className="stationary-icon w-full h-full flex items-center justify-center" onClick={handleMode}>
                            {darkMode ? 
                            <DarkModeIcon
                                className="text-white hover:text-purple-500" /> : 
                            <LightModeIcon className="text-black hover:text-purple-500"/>}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;