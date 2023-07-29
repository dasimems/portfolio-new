import {
  BannerImageFullOne,
  BannerImageFullThree,
  BannerImageFullTwo,
  BannerImageOne,
  ProjectImageFour,
  ProjectImageOne,
  ProjectImageThree,
  ProjectImageTwo
} from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { Routes } from "@/utils/general";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [active, setActive] = useState(0);
  const { pathname } = useRouter();

  const changeImage = useCallback(num => {
    setTimeout(
      () => {
        setActive(num);
      },
      [4000]
    );
  }, []);

  useEffect(
    () => {
      let num = active + 1;

      if (num > 2) {
        num = 0;
      }

      changeImage(num);
    },
    [active, changeImage]
  );

  return (
    <PageContainer className="relative flex flex-col gap-10 items-center justify-center overflow-hidden py-40 md:min-h-screen md:max-h-[768px] min-[1921px]:min-h-[unset] min-[1921px]:max-h-[unset] min-[1921px]:py-56">
      <Image
        src={ProjectImageTwo}
        alt="Duyil Ayomid Project"
        className="absolute top-0 left-0 hover:scale-110 duration-300 hover:opacity-20 hover:rounded-br-none cursor-pointer w-[50%] opacity-[0.04] rounded-br-[500px]"
      />
      <Image
        src={ProjectImageFour}
        alt="Duyil Ayomid Project"
        className="absolute bottom-0 cursor-pointer hover:scale-110 duration-300 right-0 w-[50%] opacity-[0.2] hover:opacity-[0.6] rounded-tl-[500px] hover:rounded-tl-none"
      />

      <div className="flex flex-col items-center gap-6 z-[1]">
        <h1
          className="text-2xl font-medium sm:text-4xl md:text-6xl"
          data-aos="slide-up"
        >
          Hi! I am <span className="font-bold text-primary">Duyil Ayomid</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-[700px] text-center text-slate-700"
          data-aos="slide-up"
          data-aos-delay="100"
        >
          A web, mobile app, Blockchain Developer and also an Electrical
          Electronics Engineer
        </p>
        <Button
          link={Routes.About.path}
          data-aos="slide-up"
          data-aos-delay="150"
          type="primary"
          className="py-3 px-15"
        >
          Read More About Me
        </Button>
      </div>

      {/* <div className="flex items-center md:justify-center z-[1]">
        <div className="w-full h-[90vw] md:w-[32vw] md:h-[32vw] max-w-xs max-h-[20rem] md:max-w-md md:max-h-[28rem] relative">
          <div
            className={`w-[80%] h-[80%] anim-one  bg-[#F0F8FF] rounded-full overflow-hidden absolute top-0 left-0 ${active ===
            0
              ? "z-[1]"
              : "z-[unset]"}`}
          >
            <Image
              src={BannerImageFullThree}
              alt="Duyil Ayomid - Dasimems"
              fill
              priority
              className={`object-cover duration-1000 ease-in-out object-top ${active ===
              0
                ? "opacity-100"
                : "opacity-0"}`}
            />
          </div>
          <div
            className={`w-[80%] h-[80%] anim-one bg-[#F0F8FF] rounded-full overflow-hidden absolute top-0 right-0 ${active ===
            1
              ? "z-[1]"
              : "z-[unset]"}`}
          >
            <Image
              src={BannerImageFullTwo}
              alt="Duyil Ayomid - Dasimems"
              fill
              priority
              className={`object-cover duration-1000 ease-in-out object-top ${active ===
              1
                ? "opacity-100"
                : "opacity-0"}`}
            />
          </div>
          <div
            className={`w-[80%] h-[80%] anim-three bg-[#F0F8FF] rounded-full overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 ${active ===
            2
              ? "z-[1]"
              : "z-[unset]"}`}
          >
            <Image
              src={BannerImageFullOne}
              alt="Duyil Ayomid - Dasimems"
              fill
              priority
              className={`object-cover duration-1000 ease-in-out object-top ${active ===
              2
                ? "opacity-100"
                : "opacity-0"}`}
            />
          </div>
        </div>
      </div> */}
    </PageContainer>
  );
};

export default Banner;
