const SectionHeader = ({ titleOne, titleTwo, ...props }) => {
  return (
    <h1
      className="text-lg md:text-2xl font-medium inline-flex gap-2 items-center"
      {...props}
    >
      {titleOne}
      <span className="font-bold border-2 text-primary-dark inline-flex py-1 px-3 border-primary rounded-sm">
        {titleTwo}
      </span>
    </h1>
  );
};

export default SectionHeader;
