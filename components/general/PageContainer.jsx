import { forwardRef, useEffect } from "react";

const PageContainer = forwardRef(
  ({ children, className, innerContent, ...prop }, ref) => {
    return (
      <div className={`w-full flex items-center justify-center`}>
        <div
          ref={ref}
          className={`px-[5%] min-[1921px]:px-[80px] w-full ${!innerContent
            ? "max-w-[1920px]"
            : ""} ${className ? className : ""}`}
          {...prop}
        >
          {children}
        </div>
      </div>
    );
  }
);

PageContainer.displayName = "PPage Container";

export default PageContainer;
