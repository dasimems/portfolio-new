import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { aboutMe } from "@/utils/general";
import { Download } from "react-iconly";

const Banner = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-32 items-center text-center justify-center">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-slate-700">
        Who I Am
      </h1>
      <p className="md:text-lg text-slate-500 max-w-[750px]">
        {aboutMe}
      </p>

      <Button type="primary" className="gap-2">
        <span>Download Portfolio</span>
        <span>
          <Download />
        </span>
      </Button>
    </PageContainer>
  );
};

export default Banner;
