function About(props) {
    return (
        <div className="flex flex-col items-center justify-center w-[100%] h-full z-0">
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
                <a href="https://www.linkedin.com/in/krishnasankarkk/">
                    <img 
                        src={`${props.theme ? 'linkedin-dark.png' : 'linkedin1.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
                <a href="https://www.instagram.com/artbykichu">
                    <img 
                        src={`${props.theme ? 'insta-b.png' : 'insta-w.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
                <a href="https://api.whatsapp.com/send?phone=917306310132">
                    <img 
                        src={`${props.theme ? 'whatsapp.png' : 'whatsapp2.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
                <a href="https://github.com/krishnasankarkk">
                    <img 
                        src={`${props.theme ? 'github-sign.png' : 'github-sign1.png'}`} 
                        alt="" 
                        className="transition-all duration-200 hover:-translate-y-1"
                    />
                </a>
            </span>
        </div>
    )
}

export default About