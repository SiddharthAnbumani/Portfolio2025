import React from 'react';

export default function Skills() {
  return (
    <div className="m-15">
      {/* Title */}
      <h1 className="text-5xl text-white font-extrabold m-5">My Technical Skills</h1>
      
      {/* Section 1: Skills Grid */}
      <div className="backdrop-blur-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-5">
        
        {/* HTML Card */}
        <div className="border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">HTML 5</h1>
          <p className="text-white text-center px-2 truncate">HTML for structure and layout.</p>
          <img src="html.png" alt="HTML Logo" className="w-20 h-20"/>
        </div>

        {/* CSS Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">CSS</h1>
          <p className="text-white text-center px-2 truncate">CSS for design and styling.</p>
          <img src="cssf.png" alt="CSS Logo" className="w-20 h-20"/>
        </div>

        {/* JavaScript Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">JavaScript</h1>
          <p className="text-white text-center px-2 truncate">JS for dynamic applications.</p>
          <img src="js.png" alt="JS Logo" className="w-20 h-20"/>
        </div>

        {/* TypeScript Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">TypeScript</h1>
          <p className="text-white text-center px-2 truncate">Typed JS for safety.</p>
          <img src="typescript.png" alt="TS Logo" className="w-20 h-20"/>
        </div>
      
        {/* MongoDB Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">Mongo DB</h1>
          <p className="text-white text-center px-2 truncate">NoSQL database management.</p>
          <img src="mongodb.webp" alt="MongoDB Logo" className="w-20 h-20"/>
        </div>

        {/* Express Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">Express</h1>
          <p className="text-white text-center px-2 truncate">Backend API management.</p>
          <img src="express.png" alt="Express Logo" className="w-20 h-20"/>
        </div>

        {/* React Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">React</h1>
          <p className="text-white text-center px-2 truncate">Frontend framework for UI.</p>
          <img src="reactf.webp" alt="React Logo" className="w-20 h-20"/>
        </div>

        {/* Node.js Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">Node.js</h1>
          <p className="text-white text-center px-2 truncate">Server-side JS runtime.</p>
          <img src="node.svg" alt="Node Logo" className="w-20 h-20"/>
        </div>

        {/* Next.js Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">Next.js</h1>
          <p className="text-white text-center px-2 truncate">React framework for SSR.</p>
          <img src="nextjs.png" alt="Next.js Logo" className="w-20 h-20"/>
        </div>

        {/* Bootstrap Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">Bootstrap</h1>
          <p className="text-white text-center px-2 truncate">CSS library for responsive design.</p>
          <img src="bootstrap.png" alt="Bootstrap Logo" className="w-20 h-20"/>
        </div>

        {/* React-Bootstrap Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-extrabold text-white mt-2">React-Bootstrap</h1>
          <p className="text-white text-center px-2 truncate">Bootstrap components for React.</p>
          <img src="reactbootstrap.png" alt="React Bootstrap Logo" className="w-20 h-20"/>
        </div>

        {/* TailwindCSS Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">TailwindCSS</h1>
          <p className="text-white text-center px-2 truncate">Utility-first CSS framework.</p>
          <img src="tailwindcss.png" alt="TailwindCSS Logo" className="w-20 h-20"/>
        </div>
      </div>

      {/* Section 2: Frameworks */}
      <div className="backdrop-blur-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center"> 
        {/* Shadcn Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">Shadcn</h1>
          <p className="text-white text-center px-2 truncate">UI components for React.</p>
          <img src="shadcn.png" alt="Shadcn Logo" className="w-20 h-20"/>
        </div>

        {/* Material UI Card */}
        <div className="backdrop-blur-lg border-1 w-60 h-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold text-white mt-2">MaterialUI</h1>
          <p className="text-white text-center px-2 truncate">Google's UI library.</p>
          <img src="mui.png" alt="MaterialUI Logo" className="w-20 h-20"/>
        </div>
      </div>
    </div>
  );
}


// import { useDebugValue } from "react";

// export default function SkillBox(){
//     return (

//         <div className="m-15">
//             <h1 className="text-5xl text-white font-extrabold m-5"> My Technical Skills</h1>
//             {/* <div className=" backdrop-blur-3xl flex space-x-2  flex-wrap justify-center"> */}
//             <div className="backdrop-blur-3xl flex flex-col sm:flex-row space-x-2 flex-wrap justify-center">
//             <div class="grid grid-cols-4 gap-4 m-5">
//             <div className="border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">HTML 5</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="html.png" alt="" className="w-20- h-20"/>
//             </div>

//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">CSS</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="cssf.png" alt="" className="w-20- h-20"/>
//             </div>

//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">JavaScript</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="js.png" alt="" className="w-20- h-20"/>
//             </div>
//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">TypeScript</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="typescript.png" alt="" className="w-20- h-20"/>
//             </div>
        
//             <div className=" backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">Mongo DB</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="mongodb.webp" alt="" className="w-20- h-20"/>
//             </div>

//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">Express</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="express.png" alt="" className="w-20- h-20"/>
//             </div>

//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">React</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="reactf.webp" alt="" className="w-20- h-20"/>
//             </div>

//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">Node</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="node.svg" alt="" className="w-20- h-20"/>
//             </div>

//             <div className=" backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">Next.js</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="nextjs.png" alt="" className="w-20- h-20"/>
//             </div>
//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">Bootstrap</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="bootstrap.png" alt="" className="w-20- h-20"/>
//             </div>
//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-2xl font-extrabold text-white mt-2">React-Bootstrap</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="reactbootstrap.png" alt="" className="w-20- h-20"/>
//             </div>

//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">TailwindCSS</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                    </p>
//                 <img src="tailwindcss.png" alt="" className="w-20- h-20"/>
//             </div>
//             </div>
//         </div>

//         {/* // Section 2 */}
//         <div className=" background-section-home flex space-x-2  flex-wrap justify-center"> 
//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">Shadcn</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                 </p>
//                 <img src="shadcn.png" alt="" className="w-20- h-20"/>
//             </div>
//             <div className="backdrop-blur-lg border-1 w-60 mt-5 h-60 flex flex-col justify-center items-center">
//                 <h1 className="text-4xl font-extrabold text-white mt-2">MaterialUI</h1>
//                 <p className="text-white m-3">
//                     I need this to be not more than one line or two line
//                 </p>
//                 <img src="mui.png" alt="" className="w-20- h-20"/>
//             </div>
//         </div>
// </div>
//     )
// }

