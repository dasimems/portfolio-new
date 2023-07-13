import PageContainer from "../PageContainer"
import FooterSocials from "./FooterSocials"

const Footer = () => {

    const date = new Date()

    return(
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between  duration-300 bg-white px-[5%] py-5 top-4 w-full min-[1921px]:px-[80px]">

                
            <FooterSocials />
            <p>Copyrights &copy; Dasimems {date.getFullYear()}</p>

        </div>
    )
}

export default Footer