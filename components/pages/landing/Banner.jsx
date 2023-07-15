import {
  BannerImageFullOne,
  BannerImageFullThree,
  BannerImageFullTwo,
  BannerImageOne
} from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [active, setActive] = useState(0);

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
    <PageContainer className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-40 md:min-h-screen md:max-h-[768px] min-[1921px]:min-h-[unset] min-[1921px]:max-h-[unset] min-[1921px]:py-56">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium">
          Hi! I am <span className="font-bold">Duyil Ayomid</span>
        </h1>
        <p className="text-lg md:text-xl">
          A web, mobile app, Blockchain Developer and also an Electrical
          ELectronics Engineer
        </p>
        <Button type="primary">Hire Me</Button>
      </div>

      <div className="flex items-center md:justify-center">
        <div className="w-full h-[90vw] md:w-[32vw] md:h-[32vw] max-w-xs max-h-[20rem] md:max-w-md md:max-h-[28rem] relative">
          <div
            className={`w-[80%] h-[80%] anim-one  bg-primary-200 rounded-full overflow-hidden absolute top-0 left-0 ${active ===
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
            className={`w-[80%] h-[80%] anim-one bg-primary-200 rounded-full overflow-hidden absolute top-0 right-0 ${active ===
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
            className={`w-[80%] h-[80%] anim-three bg-primary-200 rounded-full overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 ${active ===
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
      </div>
    </PageContainer>
  );
};

export default Banner;
