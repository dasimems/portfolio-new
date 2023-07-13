import PageContainer from "@/components/general/PageContainer"
import SectionHeader from "@/components/general/SectionHeader"
import { whatMakesMeExceptionalList } from "@/utils/general"
import WhyMeCard from "../general/why-me/WhyMeCard"

const WhyMe = () => {
    return(
        <PageContainer className="flex flex-col gap-20 py-20 md:py-40 bg-[rgba(255,255,255,.4)]">

        <div className="flex items-center justify-center text-center">
            <SectionHeader titleOne="What Makes Me" titleTwo="Exceptional" />

        </div>


        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {whatMakesMeExceptionalList.map((data, index)=>(
                <WhyMeCard {...data} key={index} />
            ))}
        </div>


        </PageContainer>
    )
}

export default WhyMe