import { socialList } from "@/utils/general"

const FooterSocials = () => {
    return(
        <ul className="flex flex-wrap items-center gap-6 text-primary-700">
            {socialList.map(({link, Icon}, index)=>(
                <li key={index} className="text-lg md:text-xl">
                    <a href={link} target="_blank" rel="norefferer">{Icon && typeof(Icon) !== "string" && <Icon />}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterSocials;