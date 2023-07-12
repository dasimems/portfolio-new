import { navRoutes } from "@/utils/general"
import LinkComponent from "./LinkComponent"

const DesktopNav = () => {
    return(

        <ul className="gap-6 md:gap-8 lg:gap-10 hidden md:flex">

            {navRoutes.map((data, index) => (
                <LinkComponent {...data} key={index} />
            ))}


        </ul>

    )
}

export default DesktopNav