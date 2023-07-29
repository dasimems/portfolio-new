import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";

const Colleagues = () => {
  return (
    <PageContainer className="py-20">
      <SectionHeader
        className="after:w-screen relative after:absolute after:border after:border-dashed after:border-primary after:left-[100%] after:top-1/2 after:-translate-y-1/2 team-slide"
        titleOne="Professional"
        titleTwo="Partners"
      />
    </PageContainer>
  );
};

export default Colleagues;
