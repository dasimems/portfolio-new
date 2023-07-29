import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { ArrowRight } from "react-iconly";
import ProjectList from "../general/works/ProjectsList";
import { Routes } from "@/utils/general";

const Projects = () => {
  return (
    <PageContainer className="flex flex-col gap-20 py-20 md:py-40">
      <div className="flex items-center justify-between">
        <SectionHeader
          data-aos="fade-right"
          titleOne="Projects"
          titleTwo="Completed"
        />

        <Button
          data-aos="fade-left"
          link={Routes.Works.path}
          buttonDescription="My Projects"
          type="primary"
          className="w-[50px] h-[50px] items-center justify-center pl-0 pr-0 pt-0 pb-0"
        >
          <ArrowRight set="bold" />
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <ProjectList />
        <ProjectList inverted />
      </div>
    </PageContainer>
  );
};

export default Projects;
