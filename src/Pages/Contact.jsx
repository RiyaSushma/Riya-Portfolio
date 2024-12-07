import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import config from "../config/config";
import useHover from "../hooks/useHover";
import ContactContainer from "../Components/ContactContainer/ContactContainer";
import EmailIcon from '@mui/icons-material/Email';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BackgroundGradient } from "../utils/backgroundGradient";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const { handleMouseMove, handleMouseLeave } = useHover();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form reference is null");
            return;
        }

        console.log("Form Submitted:", form.current);

        console.log(config.service_id, " ", config.template_id, " ", config.public_key);
        
        emailjs.sendForm(config.service_id, config.template_id, form.current, config.public_key)
        .then(() => {
            console.log("Success");
        }, (error) => {
            console.log('FAILED...', error);
        });
    }


    return (
        <div className="relative w-full inset-0 mt-16 h-full rounded-3xl" id="contact">
            <BackgroundGradient>
            <section className="w-full max-w-full lg:px-14 md:px-8 sm:px-4 s:px-3 xs:px-3 h-full bg-zinc-900 rounded-3xl">
                <section className="w-full flex flex-col items-center justify-center text-black dark:text-white xxl:p-5 lg:p-5 md:p-3 sm:p-3 xs:p-3 s:p-3 h-full">
                    <h3 className="font-bold lg:text-xl md:text-lg sm:text-lg s:text-lg xs:text-lg xxl:text-xl dark:text-white text-black text-center mt-1 pt-3">
                        Contact Me
                    </h3>
                    <section className="grid grid-cols-2 w-full mt-3 rounded-lg sm:pl-2 s:pl-2 xs:pl-2 sm:pr-2 s:pr-2 xs:pr-2 xxl:pl-10 xxl:pr-10 xl:pl-10 xl:pr-10 lg:pl-4 lg:pr-4 sm:gap-2 s:gap-2 xs:gap-2 xxl:gap-16 lg:gap-16 md:gap-10 h-full">
                        <div className="w-11/12 mt-3 rounded-lg h-full flex flex-col items-center pb-16">
                            <div className="flex items-center justify-center h-full text-3xl font-bold">
                                <h3>Let's connect </h3>
                            </div>
                            <div className="flex justify-end">
                                <EmailIcon/><a href="mailto:riyag0105@gmail.com?subject=Enquiry" target="_blank" className="ml-2 text-blue-500 hover:underline lg:text-base xxl:text-base xl:text-base sm:text-sm xs:text-sm s:text-sm">riyag0105@gmail.com</a>
                            </div>
                            <div className="flex bottom-2 gap-10 mt-3 items-end">
                                <a target="_blank" href="https://github.com/RiyaSushma">
                                    <FaGithub className="text-5xl dark:text-white text-black"/>
                                </a>

                                <a target="_blank" href="https://www.linkedin.com/in/riya-riya-051211244">
                                    <FaLinkedin className="text-5xl text-blue-400"/>
                                </a>
                            </div>
                        </div>
                        <div className="w-full mt-3 rounded-lg sm:pl-2 s:pl-2 xs:pl-2 sm:pr-1 s:pr-1 xs:pr-1 xxl:pl-10 xxl:pr-3 xl:pl-10">
                            <form onSubmit={handleSubmit} ref={form} className="lg:p-5 xxl:p-5 xl:p-5 md:p-3 sm:p-3 s:p-3 xs:p-3">
                                <ContactContainer id="name" label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" required
                                />

                                <ContactContainer id="email" label="Email Address" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required
                                />

                                <ContactContainer id="subject" label="Subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" required
                                />

                                <ContactContainer id="message" label="Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} name="message"  isTextArea
                                />
                                {/* <div className="flex w-full gap-2 p-2 flex-col">
                                    <label className="flex items-center justify-start sm:text-sm xs:text-sm md:text-sm peer-disabled:opacity-70">Name</label>
                                    <div className=" rounded-lg p-0.5 min-w-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}  style={{ background: (hoverX && hoverY) ? `radial-gradient(circle at ${hoverX}px ${hoverY}px, #5D3FD3, transparent), radial-gradient(circle at ${hoverY}px ${hoverX}px, #a166ab, transparent 80%)`: "transparent" }}>
                                        <input className="border w-full border-gray-400 gradient-border-input p-2 rounded-lg justify-start flex pl-3 xs:text-sm s:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base hover:border-none" type="text" value={name} onChange={(e) => setName(e.target.value)} onClick={handleMouseLeave} required name="name"/>
                                    </div>
                                </div> */}
                                {/* 
                                <div className="flex w-full gap-2 p-2 flex-col">
                                    <label className="flex items-center justify-start sm:text-sm xs:text-sm md:text-sm" >Email Address</label>
                                    <div className="flex rounded-lg p-0.5 mouse-cursor-gradient" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} >
                                        <input className="w-full border border-gray-400 gradient-border-input p-2 rounded-lg justify-start flex pl-3 xs:text-sm s:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base" type="email" value={email} onChange={(e) => setEmail(e.target.value)} onClick={handleMouseLeave} required name="email"/>
                                    </div>
                                </div> */}

                                {/* <div className="flex w-full gap-2 p-2 flex-col">
                                    <label className="flex items-center justify-start sm:text-sm xs:text-sm md:text-sm">Subject</label>
                                    <div className="rounded-lg p-0.5 min-w-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}  style={{ background: (hoverX && hoverY) ? `radial-gradient(circle at ${hoverX}px ${hoverY}px, #5D3FD3, transparent), radial-gradient(circle at ${hoverY}px ${hoverX}px, #a166ab, transparent 80%)`: "transparent" }}>
                                        <input className="w-full border border-gray-400 gradient-border-input p-2 rounded-lg justify-start flex pl-3 xs:text-sm s:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} onClick={handleMouseLeave} required name="subject"/>
                                    </div>
                                </div>

                                <div className="flex w-full gap-2 p-2 flex-col">
                                    <label className="flex items-center justify-start sm:text-sm xs:text-sm md:text-sm">Message</label>
                                    <div className="rounded-lg p-0.5 min-w-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}  style={{ background: (hoverX && hoverY) ? `radial-gradient(circle at ${hoverX}px ${hoverY}px, #5D3FD3, transparent), radial-gradient(circle at ${hoverY}px ${hoverX}px, #a166ab, transparent 80%)`: "transparent" }}> 
                                        <textarea className="w-full border border-gray-400 gradient-border-input p-2 rounded-lg justify-start flex pl-3 xs:text-sm s:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base resize-none" type="text" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} onClick={handleMouseLeave} required name="message"/>
                                    </div>
                                </div> */}
                                <div className="flex w-full items-center justify-center p-2">
                                    <ContactContainer id="btn" label="Submit" type="submit" value="send"  isButton
                                />
                                </div>

                                {/* <div className="flex w-full gap-2 p-2 flex-col">
                                    <button className="cursor-pointer text-center lg:text-base md:text-sm sm:text-sm s:text-sm xs:text-sm xxl:text-base" type="submit" value="send">Submit</button>
                                </div> */}
                            </form>
                        </div>
                    </section>
                </section>
        </section>
            </BackgroundGradient>
        </div>
    );
}

export default Contact;