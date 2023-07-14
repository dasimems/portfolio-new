import PageContainer from "@/components/general/PageContainer"
import Conviction from "@/components/pages/general/Conviction"
import ProjectList from "@/components/pages/general/works/ProjectsList"
import Banner from "@/components/pages/works/Banner"

const Works = () => {
    return(

        <>

            <Banner />

            <PageContainer className="py-20 pt-0 flex-col flex gap-3">

                <ProjectList />
                <ProjectList inverted />
                <ProjectList />
                <ProjectList inverted />

            </PageContainer>


            <Conviction />

        </>

    )
}

export default Works

Works.title = "Projects"