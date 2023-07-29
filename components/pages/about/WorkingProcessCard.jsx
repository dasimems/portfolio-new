import { ArrowDownSVG, ArrowSVG } from "@/assets/images";
import Image from "next/image";

const WorkingProcessCard = ({
  title,
  description,
  icon,
  arrowHidden,
  imageClassName,
  ...props
}) => {
  return (
    <div
      className="flex flex-col gap-6 items-center text-center relative"
      {...props}
    >
      {!arrowHidden &&
        <Image
          src={ArrowSVG}
          className={`max-w-[20%] bouncing hidden md:block object-contain -rotate-[13deg] absolute top-0 left-[95%] ${imageClassName}`}
          alt=""
        />}
      {!arrowHidden &&
        <Image
          src={ArrowDownSVG}
          className="max-h-[20%] bouncing-two block md:hidden object-contain absolute top-[120%] left-1/2 -translate-x-1/2"
          alt=""
        />}

      <div className="w-[60px] flex text-xl h-[60px] bg-primary rounded-full items-center justify-center after:absolute after:w-[120%] after:h-[120%] after:rounded-full workflow-anim relative after:border-dashed after:border after:border-primary after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2">
        {icon}
      </div>
      <h1 className="text-lg md:text-xl font-bold text-slate-700">
        {title}
      </h1>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default WorkingProcessCard;
