const SectionHeader = ({
  titleOne,
  titleTwo,
  titleOneProps,
  titleTwoProps,
  className,
  ...props
}) => {
  return (
    <h1
      className={`text-lg md:text-2xl font-medium inline-flex gap-2 items-center ${className}`}
      {...props}
    >
      <span {...titleOneProps}>
        {titleOne}
      </span>
      <span
        className="font-bold border-2 text-primary-dark inline-flex py-1 px-3 border-primary rounded-sm"
        {...titleTwoProps}
      >
        {titleTwo}
      </span>
    </h1>
  );
};

export default SectionHeader;
