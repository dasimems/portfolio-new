import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { partnerList } from "@/utils/general";
import PartnerCard from "./PartnersCard";

const Colleagues = () => {
  return (
    <PageContainer className="py-20 flex-col flex items-start gap-20">
      <SectionHeader
        className="after:w-screen relative after:absolute after:border after:border-dashed after:border-primary after:left-[100%] after:top-1/2 after:-translate-y-1/2 team-slide"
        titleOne="Professional"
        titleTwo="Partners"
        titleOneProps={{
          "data-aos": "slide-down"
        }}
        titleTwoProps={{
          "data-aos": "slide-up"
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 min-[1074px]:grid-cols-5 justify-center w-full gap-10">
        {partnerList.map((data, index) =>
          <PartnerCard
            {...data}
            key={index}
            data-aos="slide-up"
            data-aos-delay={(index * 20).toString()}
          />
        )}
      </div>

      <p
        className="text-slate-600 text-center self-center max-w-[800px]"
        data-aos="fade"
      >
        Working with this accomplished team of experts has been a rewarding
        experience. The accomplishments i achieve are the results of their
        knowledge and devotion to their craft.
      </p>
    </PageContainer>
  );
};

export default Colleagues;
