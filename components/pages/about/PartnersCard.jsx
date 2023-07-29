import Image from "next/image";

const PartnerCard = ({ name, position, className, image, ...props }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center" {...props}>
      <div className="w-[80px] h-[80px] bg-slate-300 rounded-full overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center text-[rgba(0,0,0,.5)] text-xs flex items-center justify-center"
        />
      </div>
      <h1 className="md:text-lg font-bold">
        {name}
      </h1>

      <p className="text-slate-600 text-sm md:text-base">
        {position}
      </p>
    </div>
  );
};

export default PartnerCard;
