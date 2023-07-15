import { navRoutes } from "@/utils/general";
import LinkComponent from "./LinkComponent";

const MobileNav = () => {
  return (
    <ul className="gap-10 flex flex-col">
      {navRoutes.map((data, index) =>
        <LinkComponent
          className="flex items-center gap-2 "
          showIcon
          {...data}
          key={index}
        />
      )}
    </ul>
  );
};

export default MobileNav;
