import { useState, useRef } from 'react'

import './Projects.css'

function Projects(props) {
    const projects = [
        { 
            name: 'Kwikmart - Online Shopping',
            image:'projects/kwikmart.png',
            url:'https://kwikmart.one',
            repoUrl:'https://github.com/krishnasankarkk/django-kwikmart',
            technologiesUsed:['HTML', 'CSS', 'TailwindCss', 'Python', 'Django', 'SQLite', 'Git', 'AWS EC2']
        },
        { 
            name: 'Keralagram - Social Network',
            image:'projects/keralagram.png',
            repoUrl:'https://github.com/krishnasankarkk/django-keralagram',
            technologiesUsed:['HTML', 'CSS', 'TailwindCss', 'Python', 'Django', 'PostgreSQL', 'Git', 'Vercel']
        },
        { 
            name: 'Vendor Management System - REST API',
            image:'projects/vendor.png',
            repoUrl:'https://github.com/krishnasankarkk/vendor-management-system',
            technologiesUsed:['Python', 'Django', 'Django REST API', 'SQLite', 'Git']
        },
        { 
            name: 'Alien Invasion - 2D Game',
            image:'projects/alien.png',
            repoUrl:'https://github.com/krishnasankarkk/pygame-alien-invasion',
            technologiesUsed:['Python', 'Pygame', 'Git']
        },
    ]
    const [showDetails, setShowDetails] = useState(Array(projects.length).fill(false));
    const containerRef = useRef(null)
   
    const handleMouseEnter = (i) => {
        handleMousePointer()
        setShowDetails(prevState => {
            const newState = [...prevState];
            newState[i] = true;
            return newState;
        })
    }
    const handleMouseLeave = (i) => {
        handleMousePointerLeave()
        setShowDetails(prevState => {
            const newState = [...prevState];
            newState[i] = false;
            return newState;
        })
    }
    const handleMousePointer = () => {
        props.setMousePointer(true)
    }
    const handleMousePointerLeave = () => {
        props.setMousePointer(false)
    }
    // const scrollProjectsLeft = () => {
    //     if(containerRef.current){
    //         containerRef.current.scrollLeft -= 20
    //     }
    // }
    // const scrollProjectsRight = () => {
    //     if(containerRef.current){
    //         containerRef.current.scrollLeft += 20
    //     }
    // }

    return (
        <div 
            className="skills flex flex-col items-center justify-center w-[100%] h-full z-40 mt-0 overflow-auto"
            id=""
        >
        <br />
        <br />
            <p className="font-extrabold text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>PROJECTS</span></p>
            <br />
            <div 
                className="flex flex-col w-[90%] overflow-y-scroll gap-4 items-center justify-start"
                ref={containerRef}
            >
                <p className="font-bold text-xl md:w-[60%] w-[90%] text-justify">
                    Explore a showcase of my diverse range of projects, each meticulously crafted to solve real-world problems.
                    These projects reflect my passion for technology and creativity.
                </p>
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className={`project relative flex flex-col ${props.theme ? 'bg-light' : 'bg-dark'} rounded-xl w-[90%] h-[44%] md:w-[60%] md:h-[500px]`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img 
                            className={`w-full h-full object-cover rounded-xl transition-all duration-300 ${showDetails[index] ? 'opacity-20' : 'opacity-100'}`}
                            src={project.image} 
                            alt=""
                        />
                        {/* Conditional rendering of project-details based on showDetails state */}
                        {showDetails[index] && (
                            <div className='absolute w-full h-full flex flex-col items-center justify-center gap-4'>
                                <a
                                    href={project.url ? project.url : project.repoUrl}
                                    target='_blank'
                                    rel='noopener' 
                                    className={`cursor-none flex flex-row gap-4 project-details ${props.theme ? 'text-blue' : 'text-green'} font-extrabold font-[Poppins] md:text-3xl text-xl`} 
                                >
                                    {project.name}
                                    {project.url && (
                                        <img 
                                            src={`${props.theme ? 'expand.png' : 'expand-green.png'}`} 
                                            alt="" 
                                            className='md:w-8 md:h-8 w-6 h-6'                
                                        />
                                    )}
                                </a>
                                <a
                                    href={project.repoUrl}
                                    target='_blank'
                                    rel='noopener' 
                                    className={`cursor-none flex flex-row gap-4 project-details ${props.theme ? 'text-blue' : 'text-green'} font-extrabold font-[Poppins] md:text-3xl text-xl`} 
                                >
                                    Github Repo
                                    <img 
                                        src={`${props.theme ? 'expand.png' : 'expand-green.png'}`} 
                                        alt="" 
                                        className='md:w-8 md:h-8 w-6 h-6'                
                                    />
                                </a>
                                <p className='flex flex-row gap-2 flex-wrap'>
                                    {project.technologiesUsed.map((item, i)=>(
                                        <span 
                                            key={i} 
                                            className={`${props.theme ? 'bg-blue text-dark' : 'bg-green text-light'} bg-opacity-20 p-1 rounded-full pl-2 pr-2 text-sm font-bold`}
                                        >{item}</span>  
                                    ))}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
                {/* <div 
                    className="w-20 h-full bg-light z-50 fixed left-0"
                    onMouseEnter={scrollProjectsLeft}
                ></div>
                <div 
                    className="w-20 h-full bg-light z-50 fixed right-0"
                    onMouseEnter={scrollProjectsRight}
                ></div> */}
            </div>
        </div>
    )
}

export default Projects