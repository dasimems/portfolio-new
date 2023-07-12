import Button from "@/components/general/Button"
import PageContainer from "@/components/general/PageContainer"

const Banner = () => {
    return(
        <PageContainer className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-40 md:min-h-screen md:max-h-[768px]">

            <div className="flex flex-col items-start gap-6">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium">Hi! I am <span className="font-bold">Duyil Ayomid</span></h1>
                <p className="text-lg md:text-xl">A web, mobile app, Blockchain Developer and also an Electrical ELectronics Engineer</p>
                <Button type="primary">
                    Hire Me
                </Button>
            </div>

            <div className="flex items-center md:justify-center">
                <div className="w-full h-[90vw] md:w-[32vw] md:h-[32vw] max-w-xs max-h-[20rem] md:max-w-md md:max-h-[28rem] relative">

                    <div className="w-[80%] h-[80%] bg-primary-200 rounded-full absolute top-0 left-0"></div>
                    <div className="w-[80%] h-[80%] bg-primary-200 rounded-full absolute top-0 right-0"></div>
                    <div className="w-[80%] h-[80%] bg-primary-200 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>

                </div>
            </div>

        </PageContainer>
    )
}

export default Banner