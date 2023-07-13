const WhyMeCard = ({stat, title}) => {
    return(
        <div className="">

            <div className="relative w-full">

                <div className="absolute w-[108%] h-full -bottom-[15%] bg-primary-200 left-1/2 -translate-x-1/2 rounded-md -z-[1]">

                </div>

                <div className="relative flex flex-col gap-6 px-10 py-16 bg-white rounded-md special-shadow">

                    

                    {/* <div className="left-1/2 absolute -translate-x-1/2 -top-[50px] flex items-center justify-center w-[80px] h-[80px] rounded-full bg-primary-200">

                        <div className="w-[90%] h-[90%] bg-white rounded-full"></div>
                        
                    </div> */}

                    <h1 className="text-xl font-bold text-center md:text-2xl text-primary">{stat}</h1>

                    <p className="font-medium text-center text-slate-700 md:text-lg">{title}</p>
                </div>

            </div>

        </div>
    )
}

export default WhyMeCard