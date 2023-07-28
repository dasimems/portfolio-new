import Button from "@/components/general/Button";
import Link from "next/link";
import { ArrowRight } from "react-iconly";

const ProjectCard = ({ className, type }) => {
  return (
    <Link
      data-aos="fade"
      href=""
      className={`p-5 md:p-0 bg-slate-300 cursor-pointer rounded-md relative group/project ${className}`}
    >
      <span className="inline-flex relative md:absolute z-[1] md:top-5 md:left-5 font-medium text-primary py-2 px-5 text-xs bg-primary-200 rounded-[50px]">
        {type}
      </span>

      <div className="relative md:absolute md:bottom-5 md:left-0 md:px-7 flex items-center w-full justify-between">
        <h1 aria-label="project title" className="font-bold text-slate-800">
          Project Title
        </h1>

        <Button className="pt-0 group-hover/project:bg-primary group-hover/project:text-white pl-0 pr-0 pb-0 w-[50px] h-[50px] items-center justify-center bg-primary-300 text-primary">
          <ArrowRight set="bold" />
        </Button>
      </div>
    </Link>
  );
};

export default ProjectCard;
