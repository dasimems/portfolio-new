import PageContainer from "@/components/general/PageContainer";
import InputField from "@/components/general/form/InputField";

const Banner = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-32 items-center text-center justify-center">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-slate-700">
        Completed Projects
      </h1>
      <p className="md:text-lg text-slate-500 max-w-[750px]">
        Proven Expertise in Crafting Engaging Websites, Mobile Apps, and More
      </p>

      <InputField
        className="max-w-[500px]"
        inputClassName="rounded-l-full rounded-r-full pl-10"
        placeholder="Search Projects"
      />
    </PageContainer>
  );
};

export default Banner;
