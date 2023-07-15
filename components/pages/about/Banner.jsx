import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { Download } from "react-iconly";

const Banner = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-32 items-center text-center justify-center">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-slate-700">
        Who I Am
      </h1>
      <p className="md:text-lg text-slate-500 max-w-[750px]">
        Commodo proident amet ullamco officia duis aute sunt nisi fugiat in
        consequat non ad ad. Et laborum laborum do reprehenderit sit ipsum
        proident enim tempor nostrud sit esse. Culpa ullamco aliquip culpa ipsum
        ullamco veniam.
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