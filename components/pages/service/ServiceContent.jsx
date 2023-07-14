import PageContainer from "@/components/general/PageContainer";
import { services } from "@/utils/general";
import ServiceCard from "../general/service/ServiceCard";

const ServiceContent = () => {
  return (
    <PageContainer className="flex items-start justify-between gap-10">
      <div className="grid grid-cols-1 min-[1223px]:grid-cols-2 gap-10 flex-1">
        {services.map((data, index) =>
          <ServiceCard {...data} hideTooMuch key={index} />
        )}
      </div>
      <div className="bg-[rgba(255,255,255,.5)] px-10 py-10 rounded-lg w-[50%] min-[1223px]:w-[30%] sticky max-h-[calc(100vh-80px)] top-[80px] hidden md:flex flex-col" />
    </PageContainer>
  );
};

export default ServiceContent;
