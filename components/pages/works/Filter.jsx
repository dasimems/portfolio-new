import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { projectCategoriesList } from "@/utils/general";

const FilterButton = ({ text, ...props }) => {
  return (
    <Button buttonDescription={text} {...props}>
      {text}
    </Button>
  );
};

const Filter = () => {
  return (
    <div className=" z-10 sticky top-[76px] py-5 bg-[#EAEDFA]">
      <PageContainer className="">
        <div className="overflow-x-scroll flex gap-4 special-scroll">
          {projectCategoriesList.map(({ shortName }, index) =>
            <FilterButton text={shortName} key={index} />
          )}
        </div>
      </PageContainer>
    </div>
  );
};

export default Filter;
