import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { serviceText } from "@/utils/general";
import { useRouter } from "next/router";

const Banner = () => {
  const { pathname } = useRouter();
  return (
    <PageContainer className="flex flex-col items-center justify-center gap-10 py-32 text-center">
      <h1 className="text-xl font-bold sm:text-3xl md:text-5xl text-slate-700">
        Services I Offer
      </h1>
      <p className="md:text-lg text-slate-500 max-w-[850px]">{serviceText}</p>

      <Button link={`${pathname}?nav=contact`} type="primary">
        Hire Me
      </Button>
    </PageContainer>
  );
};

export default Banner;
