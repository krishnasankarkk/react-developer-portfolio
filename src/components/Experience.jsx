import './Experience.css'

function Experience(props) {
    return (
        <div 
            className="main flex flex-col items-center justify-center -translate-y-12 gap-2 w-[100%] h-full z-40 mt-16 md:m-0 overflow-auto"
            id=""
        >
        <br />
        <br />
           <p className="font-extrabold text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>EXPERIENCE</span></p>
           <br />
           <div className="timeline w-[90%] flex flex-col items-center gap-20">
                <div className="flex flex-row w-full justify-around">
                    <div className={`w-96 flex flex-col gap-2 ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-10 p-4 rounded-xl shadow-md shadow-[black] z-30`}>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-xl font-semibold`}>Learning Web Development</span>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-md font-semibold`}>Self Learning</span>
                        <span className={`font-bold ${props.theme ? 'text-blue' : 'text-green'}`}>June 2021 - June 2022</span>
                        <div className="text-sm flex flex-row gap-2 flex-wrap">
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>HTML</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>CSS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>JavaScript</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Python</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Django</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Git</span>
                        </div>
                    </div>
                    <div className={`w-96 flex flex-col gap-2 ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-10 p-4 rounded-xl shadow-md shadow-[black] z-30`}>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-xl font-semibold`}>Full Stack Developer</span>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-md font-semibold`}>Radianz Infotech</span>
                        <span className={`font-bold ${props.theme ? 'text-blue' : 'text-green'}`}>June 2022 - May 2023</span>
                        <div className="text-sm flex flex-row gap-2 flex-wrap">
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>HTML</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>CSS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Tailwind Css</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>JavaScript</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>VueJS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>PHP Laravel</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>MySQL</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Git</span>
                        </div>
                    </div>
                    <div className={`w-96 flex flex-col gap-2 ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-10 p-4 rounded-xl shadow-md shadow-[black] z-30`}>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-xl font-semibold`}>Freelance Web Developer</span>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-md font-semibold`}>Self Employed</span>
                        <span className={`font-bold ${props.theme ? 'text-blue' : 'text-green'}`}>May 2023 - Today</span>
                        <div className="text-sm flex flex-row gap-2 flex-wrap">
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>ReactJS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Tailwind Css</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Python</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Django</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Django REST API</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Flask</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>PostgreSQL</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Vercel</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>AWS</span>
                        </div>
                    </div>
                </div>
                <div className={`relative w-[2px] h-[90%] md:w-[90%] md:h-1 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full`}>
                    <div className="absolute -left-[3px] md:left-0 md:-top-[5px] w-auto md:w-full h-full md:h-auto flex flex-col md:flex-row justify-between items-center">
                        <div className={`${props.theme ? 'bg-blue' : 'bg-green'} relative md:w-4 md:h-4 w-2 h-2 rounded-full`}>
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} absolute -bottom-6 md:-bottom-8 -left-3 font-bold md:text-xl text-sm`}>2021</span>
                        </div>
                        <div className={`${props.theme ? 'bg-blue' : 'bg-green'} relative md:w-4 md:h-4 w-2 h-2 rounded-full`}>
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} absolute -bottom-6 md:-bottom-8 -left-3 font-bold md:text-xl text-sm`}>2022</span>
                        </div>
                        <div className={`${props.theme ? 'bg-blue' : 'bg-green'} relative md:w-4 md:h-4 w-2 h-2 rounded-full`}>
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} absolute -bottom-6 md:-bottom-8 -left-3 font-bold md:text-xl text-sm`}>2023</span>
                        </div>
                        <div className={`${props.theme ? 'bg-blue' : 'bg-green'} relative md:w-4 md:h-4 w-2 h-2 rounded-full`}>
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} absolute -bottom-6 md:-bottom-8 -left-3 font-bold md:text-xl text-sm`}>2024</span>
                        </div>
                    </div>
                    <div className="absolute -top-10 flex flex-row w-full justify-center">
                        <div className={`-translate-y-4 flex flex-row items-start justify-center w-full h-[80px]  border-t-4 border-dotted ${props.theme ? 'border-blue' : 'border-green'} border-opacity-60 rounded-full relative`}>
                            <div className={`w-0 h-[22px] border-l-4 border-dotted -translate-y-7 border-opacity-50 ${props.theme ? 'border-blue' : 'border-green'}`}></div>
                        </div>
                        <div className={`-translate-y-4 flex flex-row items-start justify-center w-full h-[80px]  border-t-4 border-dotted ${props.theme ? 'border-blue' : 'border-green'} border-opacity-60 rounded-full relative`}>
                            <div className={`w-0 h-[22px] border-l-4 border-dotted -translate-y-7 border-opacity-50 ${props.theme ? 'border-blue' : 'border-green'}`}></div>
                        </div>
                        <div className={`-translate-y-4 flex flex-row items-start justify-center w-full h-[80px]  border-t-4 border-dotted ${props.theme ? 'border-blue' : 'border-green'} border-opacity-60 rounded-full relative`}>
                            <div className={`w-0 h-[22px] border-l-4 border-dotted -translate-y-7 border-opacity-50 ${props.theme ? 'border-blue' : 'border-green'}`}></div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row w-full justify-center">
                    <div className="absolute -top-10 flex flex-row w-full justify-center">
                        <div className={`-translate-y-4 flex flex-row items-start justify-center w-full h-[80px]  border-t-4 border-dotted ${props.theme ? 'border-blue' : 'border-green'} border-opacity-60 rounded-full relative`}>
                            <div className={`w-0 h-[22px] border-l-4 border-dotted -translate-y-7 border-opacity-50 ${props.theme ? 'border-blue' : 'border-green'}`}></div>
                        </div>
                        <div className={`-translate-y-4 flex flex-row items-start justify-center w-full h-[80px]  border-t-4 border-dotted ${props.theme ? 'border-blue' : 'border-green'} border-opacity-60 rounded-full relative`}>
                            <div className={`w-0 h-[22px] border-l-4 border-dotted -translate-y-7 border-opacity-50 ${props.theme ? 'border-blue' : 'border-green'}`}></div>
                        </div>
                    </div>
                </div> */}
           </div>
           <div className="timeline-mobile hidden flex-col gap-2">
           <div className={`w-96 flex flex-col gap-2 ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-10 p-4 rounded-xl shadow-md shadow-[black] z-30`}>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-xl font-semibold`}>Learning Web Development</span>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-md font-semibold`}>Self Learning</span>
                        <span className={`font-bold ${props.theme ? 'text-blue' : 'text-green'}`}>June 2021 - June 2022</span>
                        <div className="text-sm flex flex-row gap-2 flex-wrap">
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>HTML</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>CSS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>JavaScript</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Python</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Django</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Git</span>
                        </div>
                    </div>
                    <div className={`w-96 flex flex-col gap-2 ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-10 p-4 rounded-xl shadow-md shadow-[black] z-30`}>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-xl font-semibold`}>Full Stack Developer</span>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-md font-semibold`}>Radianz Infotech</span>
                        <span className={`font-bold ${props.theme ? 'text-blue' : 'text-green'}`}>June 2022 - May 2023</span>
                        <div className="text-sm flex flex-row gap-2 flex-wrap">
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>HTML</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>CSS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Tailwind Css</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>JavaScript</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>VueJS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>PHP Laravel</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>MySQL</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Git</span>
                        </div>
                    </div>
                    <div className={`w-96 flex flex-col gap-2 ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-10 p-4 rounded-xl shadow-md shadow-[black] z-30`}>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-xl font-semibold`}>Freelance Web Developer</span>
                        <span className={`${props.theme ? 'text-dark' : 'text-light'} text-md font-semibold`}>Self Employed</span>
                        <span className={`font-bold ${props.theme ? 'text-blue' : 'text-green'}`}>May 2023 - Today</span>
                        <div className="text-sm flex flex-row gap-2 flex-wrap">
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>ReactJS</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Tailwind Css</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Python</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Django</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Django REST API</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Flask</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>PostgreSQL</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>Vercel</span>
                            <span className={`${props.theme ? 'bg-blue' : 'bg-green'} font-semibold bg-opacity-10 p-3 pt-1 pb-1 rounded-full`}>AWS</span>
                        </div>
                    </div>
           </div>
        </div>
    )
}

export default Experience