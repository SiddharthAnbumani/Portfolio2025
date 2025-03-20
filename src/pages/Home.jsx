import '.././index.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center w-full">
        {/* Left Section - Text */}
        <div className="w-2/3 bg-transparent flex flex-col justify-center my-10">
          <h1 className="text-5xl text-white font-extrabold font-[anton]">This is Siddharth Anbumani</h1>
          <h1 className="text-8xl text-white font-extrabold font-[alata]">Web Designer + Web Developer</h1>
          <p className="text-white text-lg font-bold mt-5">
            Vehement about web development, delving into React, Next.js, Node.js,
            and Express to build robust full-stack applications. Well-versed in MongoDB
            and PostgreSQL for efficient database management. Exploring Three.js for
            immersive 3D experiences and GSAP for smooth, interactive animations.
          </p>

          {/* Social Buttons - Left Aligned */}
          <div className="flex space-x-3 mt-5 self-start">
            <button className="backdrop-blur-3xl  text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">LinkedIn</button>
            <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">I</button>
            <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">W</button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/3 bg-transparent my-10 flex items-center justify-center">
          <img src="Frank.jpg" alt="Siddharth's Profile" className="" />
        </div>
      </div>
    </div>
  )
}



// import '.././index.css'
// export default function Home(){
//     return(
//         <div className="flex flex-col justify-center">
//             <div className="flex justify-center">
//                 <div className="w-2/3 bg-transparent justify-center items-center my-10 ">
//                     <div className=''>
//                         <h1 className='text-5xl text-white font-extrabold font-[anton]'>This is  Siddharth Anbumani</h1>
//                         <h1 className='text-8xl text-white font-extrabold font-[alata]'>Web Designer + Web Developer</h1>
//                         <p className='text-white text-lg font-bold mt-5'>
//                         Vehement about web development, delving into React, Next.js, Node.js,<br/>
//                         and Express to build robust full-stack applications.Well-versed in MongoDB <br/>
//                         and PostgreSQL for efficient database management Exploring Three.js for <br/>
//                         immersive 3D experiences and GSAP for smooth, interactive animations.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-1/3 bg-transparent my-10"> 
//                         <img src="Frank.jpg" alt="" />
//                 </div>
//             </div>
//             <div className='flex space-x-3'>
//                 <button className='bg-purple-700 text-white rounded-md px-10 py-3'>
//                     Linkd In 
//                 </button>
//                 <button className='bg-purple-700 text-white rounded-md px-10 py-3'>
//                     I
//                 </button>
//                 <button className='bg-purple-700 text-white rounded-md px-10 py-3'>
//                     W
//                 </button>
//             </div>
//         </div>
//     )
// }