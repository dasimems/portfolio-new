import { socialList } from "@/utils/general";

const FooterSocials = ({ className }) => {
  return (
    <ul
      className={`flex flex-wrap items-center gap-6 text-primary-700 ${className}`}
    >
      {socialList.map(({ link, Icon, name }, index) => (
        <li key={index} className="text-lg md:text-xl">
          <a
            title={`Follow me on ${name}`}
            href={link}
            aria-label={`Follow me on ${name}`}
            target="_blank"
            rel="norefferer"
            className="inline-flex hover:translate-y-[5px] duration-300 hover:text-primary"
          >
            {Icon && typeof Icon !== "string" && <Icon />}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocials;
