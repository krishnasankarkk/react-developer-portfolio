function About(props) {
    return (
        <div className="flex flex-col items-center justify-center w-[100%] h-full z-0 mt-8">
            <p className="font-extrabold text-sm md:text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>SOFTWARE</span> DEVELOPER</p>
            <p className='p-4 text-3xl md:text-6xl font-bold flex flex-col text-center md:flex-row gap-4'>
            Hey, It&apos;s me <span className={`flex flex-col items-center ${props.theme ? 'text-blue' : 'text-green'}`}>
            Krishnasankar
            </span>
            </p>
            <p className='text-xl md:text-2xl w-96 p-8 md:p-4 md:w-[50%] text-center'>
            <span className={`${props.theme ? 'text-blue' : 'text-green'}`}>Passionate</span> freelance software developer with a knack for solving complex problems and crafting efficient solutions.
            </p>
            <br />
            <p className="font-semibold mb-2">Connect with me</p>
            <span className="flex flex-row gap-4">
                <a className="cursor-none" href="https://www.linkedin.com/in/krishnasankarkk/">
                    <img 
                        src={`${props.theme ? 'linkedin-dark.png' : 'linkedin1.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
                <a className="cursor-none" href="https://www.instagram.com/artbykichu">
                    <img 
                        src={`${props.theme ? 'insta-b.png' : 'insta-w.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
                <a className="cursor-none" href="https://api.whatsapp.com/send?phone=917306310132">
                    <img 
                        src={`${props.theme ? 'whatsapp.png' : 'whatsapp2.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
                <a className="cursor-none" href="https://github.com/krishnasankarkk">
                    <img 
                        src={`${props.theme ? 'github-sign.png' : 'github-sign1.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
            </span>
            <br />
            <p className="font-semibold mb-2">Or</p>
            <a className="font-semibold cursor-none flex flex-row gap-1 items-center transition-all duration-200 hover:scale-95" href="mailto:krishnasankarofficial@gmail.com">
                <img 
                    src={`${props.theme ? 'plane-blue.png' : 'plane-green.png'}`} 
                    alt="" 
                    className="w-5 h-5"
                />
                <span className={`${props.theme ? 'text-dark' : 'text-light'}`}>krishnasankarofficial@gmail.com</span>
            </a>
            <a className="font-semibold cursor-none flex flex-row gap-1 items-center transition-all duration-200 hover:scale-95" href="tel:+917306310132">
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