import { useState, useRef, useEffect } from "react"
import DOMPurify from "dompurify"

function Contact(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showName, setShowName] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const [showMessage, setshowMessage] = useState(false)
    const containerRef = useRef(null)

    useEffect(()=>{
        scrollToBottom()
    })

    const scrollToBottom = () => {
        if(containerRef.current){
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth',
                'scroll-behavior': 'smooth 3s',
            })
            // containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }

    const handleEmailEnter = (e) => {
        if(e.key=='Enter'){
            setEmail(e.target.value)
            setShowEmail(true)
        }
    }
    const handleNameEnter = (e) => {
        if(e.key=='Enter'){
            setName(e.target.value)
            setShowName(true)
        }
    }
    const handleMessageEnter = (e) => {
        if(e.key=='Enter' && !e.shiftKey){
            setMessage(e.target.value.replace(/\n/g, ' <br/> '))
            setshowMessage(true)
        }
    }
    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    return (
        <div 
            className="skills flex flex-col items-center justify-center w-[100%] h-full z-40 mt-0 md:m-0 overflow-auto"
            id=""
        >
        <br />
        <br />
           <p className="font-extrabold md:text-xl text-lg"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>CONTACT</span></p>
           <br />
            <span className="font-[Montserrat-Bold] text-5xl mb-4 text-center">Let&apos;s Get In Touch</span>
           <div className="flex flex-col gap-1 overflow-auto md:w-[60%] w-[100%] h-[500px] md:p-4 p-1 rounded-3xl transition-all duration-700" ref={containerRef}>
                <br /><br />
                <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 md:rounded-full rounded-2xl rounded-bl-none w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                >Hi</span>
                <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 md:rounded-full rounded-2xl rounded-tl-none w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                >I am Krishnasankar <br />
                What&apos;s your name ?</span>
                <br />
                {showName && (
                    <div className="flex flex-col gap-1">
                        <span className={`ml-auto font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 rounded-2xl md:rounded-full w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >{titleCase(name)}</span><br />
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 md:rounded-full rounded-2xl rounded-bl-none w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >Nice to meet you, {titleCase(name)}</span>
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 md:rounded-full rounded-2xl rounded-tl-none w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >Can you give me your valid email ID ?<br/>So I can get back to you soon!</span>
                    </div>
                )}
                <br />
                {showEmail && (
                    <div className="flex flex-col gap-1">
                        <span className={`ml-auto font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 rounded-2xl md:rounded-full w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >{email}</span><br />
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 rounded-2xl md:rounded-full w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >Ok. <br/> How can I help you ?</span>
                    </div>
                )}
                <br />
                {showMessage && (
                    <div className="flex flex-col gap-1">
                        <span 
                            className={`ml-auto font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 rounded-2xl md:rounded-full w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }}
                        ></span><br />
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 rounded-2xl md:rounded-full w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >Got it.</span>
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-40 p-4 rounded-2xl md:rounded-full w-fit min-w-14 flex items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6`}
                        >I&apos;ll get back to you soon...<br/>Don&apos;t forget to check your mail!</span>
                    </div>
                )}
                <br />
           </div>
            <div className="flex items-center justify-center mt-8 md:w-[60%] w-[98%]">
                {!showName && (
                    <input 
                        className={`w-full ${props.theme ? 'bg-dark text-dark' : 'bg-light text-light'} pl-4 bg-opacity-20 font-bold md:text-xl text-lg border-none p-4 focus:outline-none rounded-2xl md:rounded-full`}
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter Your Name..."
                        onKeyDownCapture={handleNameEnter}
                    />
                )}
                {!showEmail && showName && (
                    <input 
                        className={`w-full ${props.theme ? 'bg-dark text-dark' : 'bg-light text-light'} pl-4 bg-opacity-20 font-bold md:text-xl text-lg border-none p-4 focus:outline-none rounded-2xl md:rounded-full`}
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter Your Email ID..."
                        onKeyDownCapture={handleEmailEnter}
                    />
                )}
                {!showMessage && showEmail && showName && (
                    <textarea
                        className={`w-full h-min-32 ${props.theme ? 'bg-dark text-dark' : 'bg-light text-light'} pl-4 bg-opacity-20 font-bold md:text-xl text-lg border-none p-4 focus:outline-none rounded-2xl md:rounded-full`}
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter Your Message..."
                        onKeyDownCapture={handleMessageEnter}
                    />
                )}
            </div>
        </div>
    )
}

export default Contact