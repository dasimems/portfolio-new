import PageContainer from "@/components/general/PageContainer"
import ServiceList from "../general/ServiceList"
import SectionHeader from "@/components/general/SectionHeader"

const Service = () => {
    return(
        <PageContainer className="bg-white py-20 grid grid-cols-1 md:grid-cols-2 gap-10">

            <ServiceList />

            <div className="flex flex-col gap-6 items-start">
                <SectionHeader titleOne="My Awesome" titleTwo="Services" />
            </div>

        </PageContainer>
    )
}

export default Service