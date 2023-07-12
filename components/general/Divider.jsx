const Divider = ({text, textClassName, className}) => {

    return (
        <div className={`flex gap-8 items-center ${className? className : ""}`}>

            <div className="h-1 hidden sm:block bg-primary-lighter flex-1 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:rotate-45 after:w-2 md:after:w-4 after:h-2 md:after:h-4 after:bg-primary-lighter after:right-0"></div>

            <h2 className={`font-bold text-base md:text-lg text-center w-full sm:w-auto ${textClassName? textClassName : ""}`}>{text}</h2>

            <div className="h-1 hidden sm:block bg-primary-lighter flex-1 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:rotate-45 after:w-2 md:after:w-4 after:h-2 md:after:h-4 after:bg-primary-lighter after:left-0"></div>

        </div>
    )

}

export default Divider;