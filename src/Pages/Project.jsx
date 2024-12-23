import Movie_Recommendation_profile from '/projects/movie_recommendation.png';
import Movie_Recommender_SS from '/projects/movie_recommender_ss.png';
import InstaClone from '/projects/insta-clone.png';
import InstaClone_SS from '/projects/insta-clone-ss.png';
import Text_Sentiment_Analysis from '/projects/text-sentiment-analysis.png';
import Text_Sentiment_Analysis_SS from '/projects/text-sentiment-analysis-ss.png';
import { PinContainer } from '../utils/PinContainer';
import ModalContainer from '../utils/ModalContainer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHrefStateValue } from '../State/Context';

function Project() {

    const projects = [
        {
            id: '1',
            title: "Movie Recommendation System",
            hover_title: "Read More",
            img: Movie_Recommendation_profile,
            technologies: ["Python", "Streamlit", "Scikit Learn", "Numpy", "Pandas", "Jupyter Notebook"],
            link: "https://github.com/RiyaSushma/Movie_Recommendation_system",
            description: "Dive into a world of personalized tailored just for you. Simply type in the movies you love, and discover a curated list of titles you'll enjoy. With movie suggestons that match your tastes, every viewing is a new adventure. Let the movie magic begin!",
            screenshots: [Movie_Recommendation_profile, Movie_Recommender_SS]
        },
        {
            id: '2',
            title: "InstaClone",
            hover_title: "Read More",
            img: InstaClone,
            technologies: ["Python", "Streamlit", "Scikit Learn", "Numpy", "Pandas", "Jupyter Notebook"],
            link: "https://github.com/RiyaSushma/Insta-Clone",
            description: "Dive into a world of personalized tailored just for you. Simply type in the movies you love, and discover a curated list of titles you'll enjoy. With movie suggestons that match your tastes, every viewing is a new adventure. Let the movie magic begin!",
            screenshots: [InstaClone, InstaClone_SS]
        },
        {
            id: '3',
            title: "Text Sentiment Analysis",
            hover_title: "Read More",
            img: Text_Sentiment_Analysis,
            technologies: ["Python", "Streamlit", "Scikit Learn", "Numpy", "Pandas", "Jupyter Notebook", "TextBlob", "PRAW"],
            link: "https://github.com/RiyaSushma/Text-Sentiment-Analysis",
            description: "Dive into a world of personalized tailored just for you. Simply type in the movies you love, and discover a curated list of titles you'll enjoy. With movie suggestons that match your tastes, every viewing is a new adventure. Let the movie magic begin!",
            screenshots: [Text_Sentiment_Analysis, Text_Sentiment_Analysis_SS]
        },
        {
            id: '4',
            title: "Text Sentiment Analysis",
            hover_title: "Read More",
            img: Text_Sentiment_Analysis,
            technologies: ["Python", "Streamlit", "Scikit Learn", "Numpy", "Pandas", "Jupyter Notebook", "TextBlob", "PRAW"],
            link: "https://github.com/RiyaSushma/Text-Sentiment-Analysis",
            description: "Dive into a world of personalized tailored just for you. Simply type in the movies you love, and discover a curated list of titles you'll enjoy. With movie suggestons that match your tastes, every viewing is a new adventure. Let the movie magic begin!",
            screenshots: [Text_Sentiment_Analysis, Text_Sentiment_Analysis_SS]
        },
        {
            id: '5',
            title: "Food Ordering Web App",
            hover_title: "Read More",
            img: Text_Sentiment_Analysis,
            technologies: [],
            link: "https://github.com/RiyaSushma/Food-Order-App",
            description: "Dive into a world of personalized tailored just for you. Simply type in the movies you love, and discover a curated list of titles you'll enjoy. With movie suggestons that match your tastes, every viewing is a new adventure. Let the movie magic begin!",
            screenshots: [Text_Sentiment_Analysis, Text_Sentiment_Analysis_SS]
        }
    ];

    const {state: {href}} = useHrefStateValue();

    const isProjectRoute = (href === '#project');

    const [isExpanded, setIsExpanded] = useState(isProjectRoute); 

    const initialSection = isProjectRoute ? projects : projects.slice(0, 3);
    console.log("initialSection: ", initialSection);

    const [currentSection, setCurrentSection] = useState(isProjectRoute ? projects : projects.slice(0, 3));

    useEffect(() => {
        setCurrentSection(initialSection);
        setIsExpanded(isProjectRoute);
    }, [isProjectRoute]);

    console.log("currentSection: ", currentSection);

    const toggleExpand = () => {
        setIsExpanded((prevState) => {
            const nextState = !prevState;
            setCurrentSection(nextState ? projects: projects.slice(0, 3));
            return nextState;
        })
    }

    const [activeModalProjectId, setActiveModalProjectId] = useState(null);
    const closeModal = () => {
        setActiveModalProjectId(null);
    }

    return (
        <div className="flex mt-36 w-full min-h-screen h-auto" id="project">
            <section className="w-full">
                <section className="flex flex-col p-4 w-full relative">
                <h3 className="font-bold lg:text-xl md:text-lg sm:text-lg s:text-lg xs:text-lg xxl:text-xl dark:text-white text-black text-center
                mt-4">
                            A Small Selection of Recent Projects
                        </h3>
                        <div className='grid col-span-full xl:grid-cols-3 xxl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center justify-center relative z-70 gap-5'>
                            {currentSection.map(({ id, title, hover_title, img, className = "text-white", containerClassName="", technologies, link, description, screenshots }) => (
                                <div key={id} onClick={() => setActiveModalProjectId(id)}>
                                    <PinContainer key={id} id={id} hover_title={hover_title} img={img} className={className} containerClassName={containerClassName} link={link} technologies={technologies} screenshots={screenshots} title={title} description={description}>
                                    <div className='project-container'>
                                        <img src={ img } className='rounded-lg'/>
                                        <h1 className='font-semibold pt-3 pb-3 text-xl'>{ title }</h1>
                                        <p>{ description }</p>
                                    </div>
                                </PinContainer>

                                {
                                    activeModalProjectId === id && (
                                        <ModalContainer key={id} id={id} title={title} description={description} technologies={technologies} screenshots={screenshots} closeModal={closeModal}/>
                                    )
                                }
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                        <button className="font-medium lg:p-3 md:p-3 sm:p-3 s:p-3 xs:p-3 lg:text-2xl md:text-xl sm:text-lg s:text-lg xs:text-lg border border-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-black dark:text-white mt-28" onClick={toggleExpand}>
                            { isExpanded ? "Show Less": "Show More" }
                        </button>
                        </div>
                </section>
            </section>
        </div>
    );
}

export default Project;