const ServiceCard = ({className,Icon, title, description}) => {
    return(
        <div className={`p-2 rounded-md flex items-center justify-center bg-white ${className}`}>

            <div className="flex items-center gap-6 py-5 px-8 bg-white rounded-md">

                <div className="w-[80px] shrink-0 h-[80px] rounded-full bg-primary-50 inline-flex items-center justify-center">

                    {Icon && typeof(Icon) !== "string" && <Icon />}

                </div>

                <div className="flex flex-col flex-1 gap-4">
                    <h2 className="text-lg font-bold">{title}</h2>

                    <p className="text-slate-700">{description}</p>
                </div>
            </div>


        </div>
    )
}

export default ServiceCard