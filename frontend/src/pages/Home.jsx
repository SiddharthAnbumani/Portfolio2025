import '.././index.css'

export default function Home() {
  return (
    <div className="background-section-home h-screen flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center w-full h-screen">
        
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

            {/* Social Buttons */}
            <div className="flex space-x-3 mt-5 self-start">
              <a className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black" href='https://www.linkedin.com/in/siddharth-anbumani-778b0124a/'>LinkedIn</a>
              <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">I</button>
              <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:bg-white hover:text-black">W</button>
            </div>
          </div>

          {/* Right Section - Image with Proper Aspect Ratio */}
          <div className="w-full lg:w-1/3 flex-none flex items-center justify-center">
            {/* Fix Image Stretching */}
            <img src="Frank.jpg" alt="Siddharth's Profile" className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="background-section-home-2 h-screen flex items-center justify-center">
        <div></div>
      </div>
    </div>
  )
}
