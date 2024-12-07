import { FaGithub } from "react-icons/fa";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function ModalContainer({ id, title, description, technologies, screenshots, closeModal }) {
    const [currentSection, setCurrentSection] = useState(0);
    const itemsPerSection = 5;

    const totalSection = Math.ceil(technologies.length / itemsPerSection);

    const currentTechnologies = technologies.slice(currentSection * itemsPerSection, (currentSection + 1) * itemsPerSection);

    const nextSection = () => {
        if(currentSection < totalSection - 1) {
            setCurrentSection(prevSection => prevSection + 1);
        }
    };

    const prevSection = () => {
        if(currentSection > 0) {
            setCurrentSection(prevSection => prevSection-1);
        }
    };

    const sectionRef = useRef(null);

    return (
    <div id={id} className='flex mt-36 w-full'>
        <div data-modal-backdrop="static" tabIndex="-1" data-modal-target="project-info" data-modal-toggle="project-info" aria-hidden="true" className='modal-overlay' onClick={closeModal}>
            <div className="flex flex-col dark:bg-black bg-pink-500 rounded-xl border-2 border-zinc-800 modal-container pl-8 pr-8" onClick={
                (e) => e.stopPropagation()
            }>
                <nav className="pt-2 text-end text-zinc-700">
                    <button onClick={closeModal}><CloseIcon/></button>
                </nav>
                <div className="flex flex-col gap-7">
                    <header className="mt-4 flex gap-6">
                        <span className='text-xl font-bold'>
                            { title }
                        </span>
                        <a className="flex text-lg text-violet-800 gap-2" href="https://github.com/RiyaSushma/Movie_Recommendation_system" >
                            <FaGithub className="mt-2"/>
                            <span className="mt-1">Get Code</span>
                        </a>
                    </header>
                    <section className="border border-zinc-800 p-5 rounded-xl">
                        {description}
                    </section>
                    <section className="flex gap-5 overflow-scroll" ref={sectionRef}>
                        <button onClick={prevSection} disabled={currentSection === 0} className={`${currentSection === 0 ? "hidden" : "" } hover:bg-zinc-800 flex items-center gap-1 text-white bg-black px-3 py-1 rounded-md`}>
                            <FaChevronLeft/>
                        </button>

                        {currentTechnologies.map((technology, index) => (
                            <div className="bg-zinc-800 p-2.5 w-fit rounded-md" key={index}>
                                {technology}
                            </div>
                        ))}

                        <button className={`${((currentSection === totalSection - 1) && (currentTechnologies.length < itemsPerSection)) ? "hidden" : "" } flex items-center gap-1 text-white bg-black px-3 py-1 rounded-md hover:bg-zinc-800`} onClick={nextSection} disabled={nextSection === totalSection-1}>
                            <FaChevronRight/>
                        </button>
                    </section>
                    <section className="flex gap-3 rounded-sm">
                        {screenshots.map((screenshot, index) => (
                            <>
                            <img src={screenshot} key={index} className="object-contain"/>
                            {console.log(screenshot)}
                            </>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalContainer;