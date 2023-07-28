import { AboutImage } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { Routes, aboutMe } from "@/utils/general";
import Image from "next/image";
import { ArrowRight } from "react-iconly";

const About = () => {
  return (
    <PageContainer className="flex flex-col gap-20 py-20 md:py-40">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <SectionHeader data-aos="slide-up" titleOne="About" titleTwo="Me" />

        <p className="text-slate-700 " data-aos="slide-up">
          {aboutMe}
        </p>
      </div>

      <div
        className="relative bg-[rgba(255,255,255,.7)] h-[250px] overflow-hidden rounded-md"
        style={{
          background: `url(${AboutImage.src}) no-repeat`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* <Image
          src={AboutImage}
          alt="Dasimems about me"
          fill
          className="object-cover object-center opacity-70"
        /> */}

        <div className="w-full h-full bg-primary-200" />
      </div>

      <div className="flex justify-end">
        <Button
          link={Routes.About.path}
          buttonDescription="Know more about me"
          type="primary"
          className="w-[50px] h-[50px] items-center justify-center pl-0 pr-0 pt-0 pb-0"
        >
          <ArrowRight set="bold" />
        </Button>
      </div>
    </PageContainer>
  );
};

export default About;
