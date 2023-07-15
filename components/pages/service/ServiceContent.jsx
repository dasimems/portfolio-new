import PageContainer from "@/components/general/PageContainer";
import { services } from "@/utils/general";
import ServiceCard from "../general/service/ServiceCard";
import { useEffect, useState } from "react";

const ServiceContent = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeCardDetails, setActiveCardDetails] = useState(null);

  useEffect(
    () => {
      if (services[activeCard]) {
        setActiveCardDetails(services[activeCard]);
      }
    },
    [activeCard]
  );

  return (
    <PageContainer className="flex items-start justify-between gap-10">
      <div className="grid grid-cols-1 min-[1223px]:grid-cols-2 gap-10 flex-1">
        {services.map((data, index) =>
          <ServiceCard
            onClick={()=>{
              setActiveCard(index)
            }}
            enableHover
            active={index === activeCard}
            className="cursor-pointer"
            {...data}
            hideTooMuch
            key={index}
          />
        )}
      </div>
      <div className="bg-[rgba(255,255,255,.5)] py-10 rounded-lg w-[50%] min-[1223px]:w-[30%] sticky max-h-[calc(100vh-80px)] top-[80px] hidden md:flex flex-col gap-6">

            <div className="w-full h-full px-10 overflow-y-scroll special-scroll-two">
              <h1 className="text-lg font-bold md:text-xl">{activeCardDetails?.title}</h1>

              <div className="flex flex-col gap-2">
                <h2 className="font-medium">Skills</h2>

                <ul className="pl-1 list-disc list-inside text-primary">
                  {activeCardDetails && activeCardDetails.skills && Array.isArray(activeCardDetails.skills) && activeCardDetails.skills.map((skill, index)=>(
                    <li key={index} className={`text-slate-700 ${index !== 0? "mt-2" : ""}`}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-medium">Tools</h2>

                <ul className="pl-1 list-disc list-inside text-primary">
                  {activeCardDetails && activeCardDetails.tools && Array.isArray(activeCardDetails.tools) && activeCardDetails.tools.map((tools, index)=>(
                    <li key={index} className={`text-slate-700 ${index !== 0? "mt-2" : ""}`}>{tools}</li>
                  ))}
                </ul>
              </div>
              
            </div>
      </div>
    </PageContainer>
  );
};

export default ServiceContent;
