import './About.css'

function About(props) {
    const handleMousePointer = () => {
        props.setMousePointer(true)
    }
        const handleMousePointerLeave = () => {
        props.setMousePointer(false)
    }
    return (
        <div 
            className="flex flex-col items-center justify-center w-[100%] h-full z-0"
            id="about-section"
        >
            <div className={`background blur-3xl opacity-15 w-[600px] h-[500px] ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full -z-50`}></div>
            <span className="font-extrabold text-sm md:text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>SOFTWARE</span> DEVELOPER</span>
            <span className='p-4 text-3xl md:text-6xl font-[Montserrat-Bold] flex flex-col text-center md:flex-row gap-4'>
            Hey, It&apos;s me <span className={`flex flex-col items-center ${props.theme ? 'text-blue' : 'text-green'}`}>
            Krishnasankar
            </span>
            </span>
            <span className='text-lg md:text-2xl w-96 p-4 md:p-4 md:w-[50%] text-center'>
            <span className={`${props.theme ? 'text-blue' : 'text-green'}`}>Passionate</span> freelance software developer with a knack for solving complex problems and crafting efficient solutions.
            </span>
            <br />
            <span className="font-semibold mb-2">Connect with me</span>
            <span 
                className="flex flex-row gap-4"
                onMouseEnter={handleMousePointer}
                onMouseLeave={handleMousePointerLeave}
            >
                <a 
                    className="cursor-none" href="https://www.linkedin.com/in/krishnasankarkk/"
                >
                    <img 
                        src={`${props.theme ? 'linkedin-dark.png' : 'linkedin1.png'}`} 
                        alt="" 
                        className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 rounded-xl"
                    />
                </a>
                <a className="cursor-none" href="https://github.com/krishnasankarkk">
                    <img 
                        src={`${props.theme ? 'github-sign.png' : 'github-sign1.png'}`} 
                        alt="" 
                        className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 rounded-xl"
                    />
                </a>
                <a className="cursor-none" href="https://www.instagram.com/artbykichu">
                    <img 
                        src={`${props.theme ? 'insta-b.png' : 'insta-w.png'}`} 
                        alt=""
                        className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 rounded-xl"
                    />
                </a>
                <a className="cursor-none" href="https://api.whatsapp.com/send?phone=917306310132">
                    <img 
                        src={`${props.theme ? 'whatsapp.png' : 'whatsapp2.png'}`} 
                        alt="" 
                        className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 rounded-xl"
                    />
                </a>
            </span>
            <br />
            <span className="font-semibold mb-2">Or</span>
            <a 
                className="font-semibold cursor-none flex flex-row gap-1 items-center transition-all duration-200 hover:scale-95" href="mailto:krishnasankarofficial@gmail.com"
                onMouseEnter={handleMousePointer}
                onMouseLeave={handleMousePointerLeave}
            >
                <img 
                    src={`${props.theme ? 'plane-blue.png' : 'plane-green.png'}`} 
                    alt="" 
                    className="w-5 h-5"
                />
                <span className={`${props.theme ? 'text-dark' : 'text-light'}`}>krishnasankarofficial@gmail.com</span>
            </a>
            <a 
                className="font-semibold cursor-none flex flex-row gap-1 items-center transition-all duration-200 hover:scale-95" href="tel:+917306310132"
                onMouseEnter={handleMousePointer}
                onMouseLeave={handleMousePointerLeave}
            >
                <img 
                    src={`${props.theme ? 'phone-blue.png' : 'phone-green.png'}`} 
                    alt="" 
                    className="w-5 h-5"
                />
                <span className={`${props.theme ? 'text-dark' : 'text-light'}`}>+91 7306310132</span>
            </a>
        </div>
    )
}

export default About