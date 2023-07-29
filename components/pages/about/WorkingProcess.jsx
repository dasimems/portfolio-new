import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import WorkingProcessCard from "./WorkingProcessCard";
import Image from "next/image";
import { Development, Launch, Planning } from "@/assets/images";

const ProcessingIcon = ({ src }) => {
  return <Image src={src} className="w-[60%] object-contain" alt="" />;
};

const WorkingProcess = () => {
  return (
    <PageContainer className="py-28 flex flex-col gap-20 bg-primary-50">
      <SectionHeader
        titleOne="Understanding"
        titleTwo=" My Workflow"
        className="justify-center text-center"
        titleOneProps={{
          "data-aos": "fade-right"
        }}
        titleTwoProps={{
          "data-aos": "fade-left"
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 min-[768px]:gap-10 min-[962px]:gap-20">
        <WorkingProcessCard
          icon={<ProcessingIcon src={Planning} />}
          data-aos="fade-up"
          title="Planning and Designing"
          description="The project's earliest phases entail defining objectives, detailing tactics, and designing blueprints to create the program effectively. It includes establishing project objectives, outlining specifications, designing architectural designs, and producing user interface prototypes."
        />
        <WorkingProcessCard
          data-aos="fade-up"
          data-aos-delay="150"
          icon={<ProcessingIcon src={Development} />}
          title="Research and Development"
          description="It entails undertaking research to address complex issues, experimenting with new technology, and exploring novel concepts. It focuses on advancing technological frontiers to produce cutting-edge software solutions."
          imageClassName="bouncing-delay"
        />
        <WorkingProcessCard
          data-aos="fade-up"
          data-aos-delay="300"
          icon={<ProcessingIcon src={Launch} />}
          arrowHidden
          title="Testing and Deployment"
          description="This entails carefully inspecting the program for flaws, bugs, and performance concerns to ensure everything functions flawlessly. The software is rigorously examined to identify and address any issues, ensuring that it functions without a hitch. It is deployed and made available to users for use in the actual world after it passes the tests."
        />
      </div>
    </PageContainer>
  );
};

export default WorkingProcess;
