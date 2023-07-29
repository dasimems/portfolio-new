import { services } from "@/utils/general";
import ServiceCard from "./ServiceCard";
import Button from "@/components/general/Button";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "react-iconly";

const ServiceList = ({ horizontal, className }) => {
  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 min-[1245px]:grid-cols-3 gap-6`}
      >
        {services.map((data, index) =>
          <ServiceCard
            data-aos-delay={(index * 50).toString()}
            data-aos="slide-up"
            {...data}
            key={index}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceList;
