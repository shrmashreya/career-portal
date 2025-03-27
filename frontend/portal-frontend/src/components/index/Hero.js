// import Image from 'next/image';


const Hero = () =>{
    const showAverageSalary = () => {
        
    }
    return(
        <>
        <section className="bg-gradient-to-r from-white to-blue-300 min-h-screen flex items-center">
         <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/*Left section*/}
           <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Your
                <span className="text-blue-500"> Future <br/> Starts </span>
                 Here<br />
                </h1>

                <p className="text-gray-600 mt-8">
                Connect with industry-leading companies, expand your professional network, and unlock exciting career opportunities that align with your skills and aspirations.
                </p>
           </div>

            {/* Right Section */}
            <div className="relative top-10">
                <img 
                src="\workspace.png" 
                alt="Professional" 
                />
            </div>
         </div>
        </section>

        <section className=" relative flex justify-between items-center px-16 py-12 min-h-screen bg-gradient-to-r from-[#9093d8] via-[#636AE8] to-[#9093d8]">
            {/* Left Section */}
            <div className="absolute max-w-md top-0 left-0">
                    <img src="\images\hero21.png" alt="Graph Illustration" className="w-full h-auto" />
                </div>
                {/* middle section */}
                <div className="flex flex-col items-center justify-center gap-6 mx-auto">
                    <div onClick={showAverageSalary} className="bg-white w-56 h-12 flex justify-center items-center rounded-lg shadow-md">
                    <p className="text-gray-800 font-medium">Average Salary</p>
                    </div>
                    <div className="bg-white w-56 h-12 flex justify-center items-center rounded-lg shadow-md">
                    <p className="text-gray-800 font-medium">Placement Rate</p>
                    </div>
                    <div className="bg-white w-56 h-12 flex justify-center items-center rounded-lg shadow-md">
                    <p className="text-gray-800 font-medium">Top Recruiter</p>
                    </div>
                </div>

                {/* Right Section with Image */}
                <div className="absolute max-w-md bottom-0 right-0">
                    <img src="\images\hero22.png" alt="Graph Illustration" className="w-full h-auto" />
                </div>
        </section>
        </> 
    )
}

export default Hero;