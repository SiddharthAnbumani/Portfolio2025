import SkillBox from "../components/SkillBox"
export default function Contact(){
    return(

        <div>
        {/* First Section */}
        <div className="background-section-home h-screen flex items-center justify-center">
          <div className="backdrop-blur-3xl w-[80%] h-full">
            <div className="flex-col">
              <h1 className="mt-20 text-4xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">
                This is the contact
              </h1>
          </div>
          <div>
            <SkillBox/>
          </div>
        </div>
    </div>

  
        {/* Second Section
        <div className="background-section-resume-bg-2 h-screen flex items-center justify-center">
          <div className="backdrop-blur-3xl w-[80%] h-full"></div>
        </div> */}
      </div>
    )
}