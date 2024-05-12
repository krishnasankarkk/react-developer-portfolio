import { useState, useRef } from 'react'
import './Projects.css'

function Projects(props) {
    const projects = [
        { name: 'Kwikmart Online Shopping', image:'projects/kwikmart.png' },
        { name: 'Kwikmart Online Shopping', image:'projects/kwikmart.png' },
        { name: 'Kwikmart Online Shopping', image:'projects/kwikmart.png' },
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
    const scrollProjectsLeft = () => {
        if(containerRef.current){
            containerRef.current.scrollLeft -= 20
        }
    }
    const scrollProjectsRight = () => {
        if(containerRef.current){
            containerRef.current.scrollLeft += 20
        }
    }

    return (
        <div 
            className="skills flex flex-col items-center justify-center w-[100%] h-full z-40 mt-16 md:m-0"
            id=""
        >
        <br />
        <br />
            <p className="font-extrabold text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>PROJECTS</span></p>
            <br />
            <div 
                className="flex flex-row w-[95%] overflow-x-scroll gap-4 items-start justify-start"
                ref={containerRef}
            >
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className={`project relative flex flex-col ${props.theme ? 'bg-blue' : 'bg-green'} bg-opacity-20 rounded-xl w-[900px] h-[510px]`}
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
                            <span 
                                className={`flex flex-row gap-4 project-details absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${props.theme ? 'text-blue' : 'text-green'} font-extrabold font-[Poppins] text-3xl`} 
                            >
                                {project.name}
                                <img 
                                    src={`${props.theme ? 'expand.png' : 'expand-green.png'}`} 
                                    alt="" 
                                    className='w-8 h-8'                
                                />
                            </span>
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