import { services } from "@/utils/general";
import ServiceCard from "./ServiceCard";
import Button from "@/components/general/Button";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "react-iconly";

const ServiceList = ({ horizontal, className }) => {
  return (
    <div className="relative">
      <div
        className={`flex flex-shrink-0 gap-6 special-scroll relative ${horizontal
          ? "flex-row w-full special-scroll-horizontal"
          : "flex-col h-[400px] special-scroll-vertical"} ${className}`}
      >
        {services.map((data, index) => <ServiceCard {...data} key={index} />)}
      </div>

      {!horizontal &&
        <div
          className={`flex items-center w-full gap-6 absolute justify-center -bottom-[20px]`}
        >
          <Button className="h-[30px] w-[30px] pl-0 pr-0 text-primary items-center justify-center">
            <ArrowDown set="bold" size="small" />
          </Button>
          <Button className="h-[30px] w-[30px] pl-0 pr-0 text-primary items-center justify-center">
            <ArrowUp set="bold" size="small" />
          </Button>
        </div>}
      {horizontal &&
        <div
          className={`flex items-center w-full gap-6 absolute justify-between top-1/2 -translate-y-1/2`}
        >
          <Button className="h-[30px] -ml-[15px] w-[30px] pl-0 pr-0 text-primary items-center justify-center">
            <ArrowLeft set="bold" size="small" />
          </Button>
          <Button className="h-[30px] w-[30px] -mr-[15px] pl-0 pr-0 text-primary items-center justify-center">
            <ArrowRight set="bold" size="small" />
          </Button>
        </div>}
    </div>
  );
};

export default ServiceList;
