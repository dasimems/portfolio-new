const ServiceCard = ({
  className,
  Icon,
  title,
  col,
  description,
  hideTooMuch,
  active,
  enableHover,
  ...props
}) => {
  return (
    <div
      {...props}
      aria-label={title}
      className={`p-2 rounded-md flex items-center justify-center md:justify-start ${hideTooMuch
        ? "overflow-hidden"
        : ""} ${active ? "bg-primary-200" : `bg-white ${enableHover? "hover:bg-primary-100" : ""}`} ${className}`}
    >
      <div
        className={`flex items-center flex-col text-center ${col
          ? ""
          : "md:flex-row md:text-left"} gap-6 px-8 py-5 bg-white rounded-md`}
      >
        <div className="w-[80px] shrink-0 text-3xl text-primary-700 h-[80px] rounded-full bg-primary-50 inline-flex items-center justify-center">
          {Icon && typeof Icon !== "string" && <Icon />}
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <h2 aria-label={title} className="text-lg font-bold">
            {title}
          </h2>

          <p className="text-slate-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
