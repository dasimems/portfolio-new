import { DoubtingImage } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import Image from "next/image";
import { useRouter } from "next/router";

const Conviction = () => {
  const { pathname } = useRouter();
  return (
    <PageContainer data-aos="zoom-in" className="py-20">
      <div className="flex flex-col gap-4 md:gap-8 items-center overflow-hidden relative bg-[rgba(255,255,255,.5)] px-20 py-24 rounded-lg justify-center">
        <h1 className="text-2xl font-bold text-center md:text-4xl text-slate-700">
          Still Not Convinced?
        </h1>

        <Button
          link={`${pathname}?nav=contact`}
          type="primary"
          buttonDescription="Try me"
          className="py-3 button-animation"
        >
          Try Me
        </Button>

        <Image
          src={DoubtingImage}
          aria-label="Still Not Convinced? Try Me"
          className="absolute right-0 -bottom-[55px] opacity-80 max-w-[120px] md:max-w-[170px]"
          alt="Doubting me? Try Me"
        />
      </div>
    </PageContainer>
  );
};

export default Conviction;
