import '.././index.css'

export default function Home() {
  return (
    <div className="background-section h-screen flex items-center justify-center">
      {/* Centering the container vertically */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Responsive Flex - Column on small screens, Row on large screens */}
        <div className="flex flex-col lg:flex-row justify-center w-full">
        
          {/* Left Section - Text */}
          <div className="w-full lg:w-2/3 bg-transparent flex flex-col justify-center my-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold font-[anton]">
              This is Siddharth Anbumani
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl text-white font-extrabold font-[alata]">
              Web Designer + Web Developer
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white font-bold mt-5 backdrop-blur-lg rounded-md">
              Vehement about web development, delving into React, Next.js, Node.js,
              and Express to build robust full-stack applications. Well-versed in MongoDB
              and PostgreSQL for efficient database management. Exploring Three.js for
              immersive 3D experiences and GSAP for smooth, interactive animations.
            </p>

            {/* Social Buttons - Left Aligned */}
            <div className="flex space-x-3 mt-5 self-start">
              <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">LinkedIn</button>
              <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">I</button>
              <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">W</button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/3 bg-transparent my-10 flex items-center justify-center">
            <img src="Frank.jpg" alt="Siddharth's Profile" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

