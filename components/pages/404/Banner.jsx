import Logo from "@/components/general/Logo";
import PageContainer from "@/components/general/PageContainer";
import { FcBrokenLink } from "react-icons/fc";

const Error404Banner = () => {
  return (
    <PageContainer className="flex items-center justify-center pb-0 py-26 md:py-40 md:pb-0">
      <div className="relative rounded-full">
        <Logo imageSize={150} textHidden className="blur-[5px]" />
        <span className="absolute text-2xl bottom-0 right-5 bg-primary-100 h-[40px] w-[40px] rounded-full items-center justify-center flex">
          <FcBrokenLink />
        </span>
        {/* <div className="blur-[100px] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] bg-[rgba(255,255,255,.1)]"></div> */}
      </div>
    </PageContainer>
  );
};

export default Error404Banner;
