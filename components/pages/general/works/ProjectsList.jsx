import ProjectCard from "./ProjectCard";

const ProjectList = ({ inverted }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-[700px] gap-3">
      <ProjectCard
        type="Mobile"
        className={`w-full md:w-[30%] h-auto md:h-full ${inverted
          ? "order-2"
          : "order-1"}`}
      />
      <div
        className={`w-full md:w-[70%] h-auto md:h-full flex flex-col gap-3 ${inverted
          ? "order-1"
          : "order-2"}`}
      >
        <ProjectCard type="Web" className="w-full md:h-[50%]" />
        <ProjectCard type="Web" className="w-full md:h-[50%]" />
      </div>
    </div>
  );
};

export default ProjectList;
