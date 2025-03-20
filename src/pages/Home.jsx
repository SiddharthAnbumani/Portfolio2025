
import '.././index.css'
export default function Home(){
    return(
        <div className="background-section flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="w-2/3 bg-transparent justify-center items-center my-10 ">
                    <div>
                        <h1 className='text-5xl text-white font-extrabold font-[anton]'>This is  Siddharth Anbumani</h1>
                        <h1 className='text-8xl text-white font-extrabold font-[alata]'>Web Designer + Web Developer</h1>
                        <p className='text-white text-lg font-bold mt-5'>
                        Vehement about web development, delving into React, Next.js, Node.js,<br/>
                        and Express to build robust full-stack applications.Well-versed in MongoDB <br/>
                        and PostgreSQL for efficient database management Exploring Three.js for <br/>
                        immersive 3D experiences and GSAP for smooth, interactive animations.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 bg-transparent my-10"> 
                        <img src="Frank.jpg" alt="" />
                </div>
            </div>
            <div className='flex space-x-3'>
                <button className='bg-purple-700 text-white rounded-md px-10 py-3'>
                    Linkd In 
                </button>
                <button className='bg-purple-700 text-white rounded-md px-10 py-3'>
                    I
                </button>
                <button className='bg-purple-700 text-white rounded-md px-10 py-3'>
                    W
                </button>
            </div>
        </div>
    )
}