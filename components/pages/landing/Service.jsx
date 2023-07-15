import PageContainer from "@/components/general/PageContainer";
import ServiceList from "../general/service/ServiceList";
import SectionHeader from "@/components/general/SectionHeader";
import Button from "@/components/general/Button";

const Service = () => {
  return (
    <PageContainer className="grid grid-cols-1 gap-20 py-20 bg-white md:grid-cols-2">
      <ServiceList className="p-5 rounded-md bg-primary-50" />

      <div className="flex flex-col items-start gap-6">
        <div className="flex justify-center w-full text-center md:text-left md:justify-start">
          <SectionHeader titleOne="My Awesome" titleTwo="Services" />
        </div>

        <p className="text-slate-700">
          By utilizing the power of technological innovation and offering a wide
          range of services. I am a master at building dynamic websites that
          captivate your audience, creating cutting-edge mobile apps that
          improve user experiences, implementing safe blockchain solutions that
          revolutionize data integrity, designing user-friendly UI/UX layouts
          that encourage engagement and creating visually stunning graphics that
          strengthen your brand identity. Count on me to provide competent
          solutions that turn your concepts into online successes.
        </p>

        <Button type="primary">View my projects</Button>
      </div>
    </PageContainer>
  );
};

export default Service;
