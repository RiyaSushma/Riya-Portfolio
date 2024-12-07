import { useEffect, useState } from "react";
import Typical from "react-typical";

function EditText() {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log("hello");
    });

    return (
        <div className="element lg:text-3xl md:text-xl sm:text-xl s:text-xl font-bold bg-gradient-to-r from-pink-300 via-slate-300 to-purple-400 bg-clip-text text-transparent"> 
            <Typical
                loop={Infinity}
                wrapper="span"
                steps={[
                    "Developer", 2000,
                    "Web Developer", 2000,
                    "Machine Learning Beginner", 2000
                ]}
                typeSpeed={1000}
                backSpeed={500}
                startDelay={2000}
                backDelay={1500}
            /> 
        </div>
    );
}

export default EditText;