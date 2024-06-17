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
    const inputRef = useRef(null)

    useEffect(()=>{
        if(inputRef.current) inputRef.current.focus()
    }, [])

    useEffect(()=>{
        if(inputRef.current) inputRef.current.focus()
        scrollToBottom()
    }, [showName, showEmail, showMessage])

    const scrollToBottom = () => {
        if(containerRef.current){
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth',
                'scroll-behavior': 'smooth 3s',
            })
        }
    }

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const handleSubmit = () => {
        if(name) setShowName(true)
        if(email) setShowEmail(true)
        if(message) setshowMessage(true)
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') handleSubmit()
    }

    return (
        <div 
            className="skills flex flex-col items-center justify-between w-[100%] h-full z-40 mt-0 md:m-0 overflow-auto"
            id=""
        >
        <br />
        <br />
           <div className="flex flex-col items-center justify-center">
            <p className="font-extrabold md:text-xl text-lg"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>CONTACT</span></p>
            <br />
            <span className="font-[Montserrat-Bold] md:text-5xl text-3xl mb-4 text-center">Let&apos;s Get In Touch</span>
           </div>
           <div className="flex flex-col gap-1 overflow-auto md:w-[60%] w-[96%] h-full m-4" ref={containerRef}>
                <div className="flex flex-col items-start justify-start gap-4 w-full">
                    <a 
                        className="font-semibold cursor-none flex flex-row gap-1 items-center transition-all duration-200 hover:scale-95" 
                        href="mailto:krishnasankarofficial@gmail.com"
                        onMouseEnter={()=>props.setMousePointer(true)}
                        onMouseLeave={()=>props.setMousePointer(false)}
                    >
                        <img 
                            src={`${props.theme ? 'plane-blue.png' : 'plane-green.png'}`} 
                            alt="" 
                            className="w-5 h-5"
                        />
                        <span className={`${props.theme ? 'text-dark' : 'text-light'}`}>krishnasankarofficial@gmail.com</span>
                    </a>
                    <a 
                        className="font-semibold cursor-none flex flex-row gap-1 items-center transition-all duration-200 hover:scale-95" 
                        href="tel:+917306310132"
                        onMouseEnter={()=>props.setMousePointer(true)}
                        onMouseLeave={()=>props.setMousePointer(false)}
                    >
                        <img 
                            src={`${props.theme ? 'phone-blue.png' : 'phone-green.png'}`} 
                            alt="" 
                            className="w-5 h-5"
                        />
                        <span className={`${props.theme ? 'text-dark' : 'text-light'}`}>+91 7306310132</span>
                    </a>
                </div>
                <br />
                <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-bl-md w-fit min-w-14 flex items-center justify-center`}
                >Hi</span>
                <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-tl-md w-fit min-w-14 flex items-center justify-center`}
                >I'm Krishnasankar. <br />
                What&apos;s your name ?</span>
                <br />
                {showName && (
                    <div className="flex flex-col gap-1">
                        <span className={`ml-auto font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-br-md w-fit min-w-14 flex items-center justify-center`}
                        >{titleCase(name)}</span><br />
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-bl-md w-fit min-w-14 flex items-center justify-center`}
                        >Nice to meet you, {titleCase(name)}.</span>
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-tl-md w-fit min-w-14 flex items-center justify-center`}
                        >Can you give me your valid email ID ?<br/>So I can get back to you soon!</span>
                    </div>
                )}
                <br />
                {showEmail && (
                    <div className="flex flex-col gap-1">
                        <span className={`ml-auto font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-br-md w-fit min-w-14 flex items-center justify-center`}
                        >{email}</span><br />
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-bl-md w-fit min-w-14 flex items-center justify-center`}
                        >Ok. How can I help you ?</span>
                    </div>
                )}
                <br />
                {showMessage && (
                    <div className="flex flex-col gap-1">
                        <span 
                            className={`ml-auto font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-br-md w-fit min-w-14 flex items-center justify-center`}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }}
                        ></span><br />
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-bl-md w-fit min-w-14 flex items-center justify-center`}
                        >Got it.</span>
                        <span className={`font-bold md:text-xl text-lg ${props.theme ? 'bg-gradient-to-br from-blue to-green text-dark' : 'text-dark bg-gradient-to-br from-green to-blue'} bg-opacity-40 p-4 rounded-3xl rounded-tl-md w-fit min-w-14 flex items-center justify-center`}
                        >I&apos;ll get back to you soon...<br/>Don&apos;t forget to check your Inbox!</span>
                    </div>
                )}
                <br />
           </div>
            <div className="relative flex items-center justify-center mt-8 md:w-[60%] w-[96%]">
                {!showName && (
                    <input
                        ref={inputRef}
                        className={`w-full ${props.theme ? 'bg-dark text-dark' : 'bg-light text-light'} pl-8 bg-opacity-20
                        font-bold md:text-xl text-lg border-md p-4 focus:outline-md rounded-3xl`}
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter Your Name"
                        onKeyDownCapture={handleKeyDown}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                )}
                {!showEmail && showName && (
                    <input
                        ref={inputRef}
                        className={`w-full ${props.theme ? 'bg-dark text-dark' : 'bg-light text-light'} pl-8 bg-opacity-20
                        font-bold md:text-xl text-lg border-md p-4 focus:outline-md rounded-3xl`}
                        type="email"
                        name="message"
                        id="message"
                        placeholder="Enter Your Email ID"
                        onKeyDownCapture={handleKeyDown}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                )}
                {!showMessage && showEmail && showName && (
                    <input
                        ref={inputRef}
                        className={`w-full h-min-auto ${props.theme ? 'bg-dark text-dark' : 'bg-light text-light'} pl-8 bg-opacity-20 font-bold md:text-xl text-lg border-md p-4 focus:outline-md rounded-3xl`}
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter Your Message"
                        onKeyDownCapture={handleKeyDown}
                        onChange={(e)=>{setMessage(e.target.value)}}
                    />
                )}
                {!showMessage && (<img 
                    src={`${props.theme ? '/plane-blue.png' : '/plane-green.png' }`} 
                    alt="Send" 
                    className="absolute right-4 md:right-6 w-6 h-6"
                    onMouseEnter={()=>{props.setMousePointer(true)}}
                    onMouseLeave={()=>{props.setMousePointer(false)}}
                    onMouseDownCapture={handleSubmit}
                />)}
            </div>
        </div>
    )
}

export default Contact