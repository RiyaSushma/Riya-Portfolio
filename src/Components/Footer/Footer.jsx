import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function Footer() {

  const [navigateIndex, setNavigateIndex] = useState(0);

  const options =[
    "app",
    "about",
    "expertise",
    "project",
    "contact",
  ];
  
  const scrollToSection = () => {
    setNavigateIndex((prevIndex) => {
        if(prevIndex === 3) {
          return 0;
        }
        return prevIndex + 1;
      }
    );
    const section = document.getElementById(options[navigateIndex]);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <footer className="fixed inset-x-0 bottom-0 p-4 flex w-full justify-center z-20">
      <button className='w-16 h-14 dark:bg-black bg-white flex items-center justify-center rounded-xl dark:text-white text-black border-black border' onClick={() => scrollToSection()}>
        <KeyboardArrowDownIcon/>
      </button>
    </footer>
  );
}

export default Footer;