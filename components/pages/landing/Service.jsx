import PageContainer from "@/components/general/PageContainer"
import ServiceList from "../general/service/ServiceList"
import SectionHeader from "@/components/general/SectionHeader"
import Button from "@/components/general/Button"

const Service = () => {
    return(
        <PageContainer className="bg-white py-20 grid grid-cols-1 md:grid-cols-2 gap-20">

            <ServiceList className="bg-primary-50 rounded-md p-5" />

            <div className="flex flex-col gap-6 items-start">
                <SectionHeader titleOne="My Awesome" titleTwo="Services" />

                <p className="text-slate-700">I offer variety of services Officia culpa aliqua reprehenderit do. Velit consequat nulla irure magna. Quis sint incididunt laborum cillum ex ex pariatur aliqua laboris duis mollit nisi ullamco cillum. Aute veniam mollit cillum occaecat aute est deserunt ea pariatur minim nulla ea elit sit. Anim sunt nulla consectetur amet minim ad reprehenderit cupidatat eu. Nisi officia esse quis sunt tempor ad Lorem reprehenderit commodo deserunt. Nisi sunt irure nostrud voluptate do dolore mollit aute quis exercitation eu.</p>

                <Button type="primary">
                    View my projects
                </Button>
            </div>

        </PageContainer>
    )
}

export default Service