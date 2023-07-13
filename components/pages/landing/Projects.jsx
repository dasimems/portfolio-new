import Button from "@/components/general/Button"
import PageContainer from "@/components/general/PageContainer"
import SectionHeader from "@/components/general/SectionHeader"
import { ArrowRight } from "react-iconly"

const Projects = () => {
    return(
        <PageContainer className="py-20 md:py-40">

            <div className="flex items-center justify-between">
                <SectionHeader titleOne="Projects" titleTwo="Completed" />

                <Button buttonDescription="Know more about me" type="primary" className="w-[50px] h-[50px] items-center justify-center pl-0 pr-0 pt-0 pb-0">
                    <ArrowRight set="bold" />
                </Button>
            </div>

        </PageContainer>
    )
}

export default Projects