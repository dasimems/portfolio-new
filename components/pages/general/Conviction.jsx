import { DoubtingImage } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import Image from "next/image";

const Conviction = () => {
  return (
    <PageContainer className="py-20">
      <div className="flex flex-col gap-4 md:gap-8 items-center overflow-hidden relative bg-[rgba(255,255,255,.5)] px-20 py-24 rounded-lg justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-700 text-center">
          Still Doubting me?
        </h1>

        <Button type="primary" className="button-animation py-3">
          Try Me
        </Button>

        <Image
          src={DoubtingImage}
          aria-label="Doubting me? Try Me"
          className="absolute right-0 -bottom-[55px] opacity-80 max-w-[120px] md:max-w-[170px]"
          alt="Doubting me? Try Me"
        />
      </div>
    </PageContainer>
  );
};

export default Conviction;
