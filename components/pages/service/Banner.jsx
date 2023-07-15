import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { serviceText } from "@/utils/general";

const Banner = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-32 items-center text-center justify-center">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-slate-700">
        Services I Offer
      </h1>
      <p className="md:text-lg text-slate-500 max-w-[850px]">
        {serviceText}
      </p>

      <Button type="primary">Hire Me</Button>
    </PageContainer>
  );
};

export default Banner;
