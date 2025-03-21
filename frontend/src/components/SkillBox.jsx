import { useDebugValue } from "react";

export default function SkillBox(){
    return (
        <div className="flex space-x-2  flex-wrap justify-center">
            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">HTML 5</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="html.png" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">CSS</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="css.webp" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">JavaScript</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="js.png" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">Node</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="node.svg" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">Express</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="express.png" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">React</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="react3.jpg" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-blue w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">Next.js</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="nextjs.png" alt="" className="w-20- h-20"/>
            </div>

            <div className=" bg-black w-60 mt-5 h-60 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-white mt-2">Mongo DB</h1>
                <p className="text-white m-3">
                    I need this to be not more than one line or two line
                   </p>
                <img src="mongodb.webp" alt="" className="w-20- h-20"/>
            </div>
            
            
        </div>
    )
}