import PageContainer from "@/components/general/PageContainer";
import ServiceList from "../general/service/ServiceList";
import SectionHeader from "@/components/general/SectionHeader";
import Button from "@/components/general/Button";
import { serviceText } from "@/utils/general";
import { ArrowRight } from "react-iconly";
import { SolutionImageOne, SolutionSvgImageOne } from "@/assets/images";
import Image from "next/image";

const Service = () => {
  return (
    <PageContainer className="flex flex-col gap-20">
      <div className="flex justify-between w-full text-center">
        <SectionHeader titleOne="My Awesome" titleTwo="Services" />

        <Button
          type="primary"
          className="pt-0 pb-0 pl-0 pr-0 w-[50px] h-[50px] items-center justify-center"
        >
          <ArrowRight set="bold" />
        </Button>
      </div>

      <ServiceList className="p-5 rounded-md bg-primary-50" />

      <div className="grid grid-cols-1 gap-20 py-20 bg-white md:grid-cols-2 p-10">
        <div className="relative min-h-[120px]">
          <Image
            src={SolutionImageOne}
            alt="Duyil Ayomid - Digital Solutions Architect"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-6">
          <SectionHeader titleOne="Digital Solutions" titleTwo="Architect" />
          <p className="text-slate-700">
            {serviceText}
          </p>

          <Button type="primary">View my projects</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Service;
