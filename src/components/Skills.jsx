import './Skills.css'

function Skills(props) {
    return (
        <div 
            className="skills flex flex-col items-center justify-center w-[100%] h-full z-40 mt-0 mb-8 md:m-0 overflow-auto"
            id=""
        >
        <br />
        <br />
           <p className="font-extrabold text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>SKILLS</span></p>
           <br />
           <div className="flex flex-row overflow-auto flex-wrap gap-4 p-4 items-start justify-center">
                <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                    <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                        <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Frontend</span>
                        Development
                    </span>
                    <br />
                    <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/html.png" alt="" />
                                <p>HTML</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/css.png" alt="" />
                                <p>CSS</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-8 h-6" src="skills/tailwind.png" alt="" />
                                <p>Tailwind Css</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/js.png" alt="" />
                                <p>JavaScript</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/react.png" alt="" />
                                <p>React Js</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/vue.png" alt="" />
                                <p>Vue Js</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/jquery.png" alt="" />
                                <p>JQuery</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                    </span>
                </div>
                <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                    <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                        <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Backend</span>
                        Development
                    </span>
                    <br />
                    <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/python.png" alt="" />
                                <p>Python</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-12 h-5" src="skills/django.png" alt="" />
                                <p>Python Django</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-12 h-5" src="skills/django.png" alt="" />
                                <p>Django REST API</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/flask.png" alt="" />
                                <p>Python Flask</p>
                                <p className="ml-auto">60%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[60%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-6 h-6" src="skills/laravel.png" alt="" />
                                <p>PHP Laravel</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-6" src="skills/node.png" alt="" />
                                <p>Node Js</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                        <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Database</span>
                            Management
                        </span>
                        <br />
                        <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start gap-2">
                                    <img className="w-6 h-6" src="skills/mysql.png" alt="" />
                                    <p>MySQL</p>
                                    <p className="ml-auto">90%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                            </span>
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start gap-2">
                                    <img className="w-6 h-6" src="skills/postgre.png" alt="" />
                                    <p>PostgreSQL</p>
                                    <p className="ml-auto">90%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                            </span>
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start">
                                    <img className="w-10 h-6" src="skills/mongo.png" alt="" />
                                    <p>MongoDB</p>
                                    <p className="ml-auto">80%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                            </span>
                        </span>
                    </div>
                    <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                        <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Hosting</span>
                            Providers
                        </span>
                        <br />
                        <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start gap-2">
                                    <img className="w-6 h-6" src="skills/aws.png" alt="" />
                                    <p>AWS</p>
                                    <p className="ml-auto">90%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                            </span>
                        </span>
                        <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start gap-2">
                                    <img className="w-6 h-6" src="skills/vercel.png" alt="" />
                                    <p>Vercel</p>
                                    <p className="ml-auto">90%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Skills