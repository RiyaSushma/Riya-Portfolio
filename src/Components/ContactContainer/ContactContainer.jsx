import { useEffect } from "react";
import useHover from "../../hooks/useHover";

function ContactContainer({
    label = "",
    type = "", 
    value = "",
    onChange = () => {},
    name = "", 
    required = false,
    isTextArea = false,
    id,
    isButton = false
}) {

    const { handleMouseLeave, handleMouseMove } = useHover();

    useEffect(() => {
        console.log(id);
    })
 
    return (
        <div className="flex w-full gap-2 p-2 flex-col dark:text-white text-black">
            {!isButton ? (<label className="flex items-center justify-start sm:text-sm xs:text-sm md:text-sm peer-disabled:opacity-70">{label}</label>): ""}
            <div className={`${isButton ? "flex items-center justify-center" : ""} rounded-lg p-0.5 min-w-full bg-purple-600`} id={id} onMouseMove={(e) => handleMouseMove(e, id, isButton)} onMouseLeave={() => handleMouseLeave(id)}>
                {isTextArea ? (
                    <textarea className="w-full border gradient-border-input p-1 rounded-lg justify-start flex pl-3 xs:text-sm s:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base resize-none hover:border-none text-black dark:border-gray-400 border-pink-500 " type={type} rows="5" value={value} onChange={onChange} onClick={() => handleMouseLeave(id)} required={required} name={name} />
                ): (
                    isButton ? (
                        <button value={value} type={type} className="transition-linear cursor-pointer text-center lg:text-base md:text-sm sm:text-sm s:text-sm xs:text-sm xxl:text-base p-2 rounded-lg">{label}</button>
                    ) : (
                        <input className="w-full border dark:border-gray-400 border-pink-500 gradient-border-input p-2 rounded-lg justify-start flex pl-3 xs:text-sm s:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base hover:border-none dark:text-white text-black" type={type} value={value} onChange={onChange} onClick={() => handleMouseLeave(id)} required={required} name={name} id={id} />
                    )
                )}
            </div>
        </div>
    );
}

export default ContactContainer;