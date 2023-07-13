import Button from "@/components/general/Button"
import PageContainer from "@/components/general/PageContainer"
import SectionHeader from "@/components/general/SectionHeader"
import {  ArrowRight } from "react-iconly"

const About = () => {
    return(
    <PageContainer className="flex flex-col gap-20 py-20 md:py-40">

        <div className="flex flex-col items-center justify-center gap-10 text-center">
            <SectionHeader titleOne="About" titleTwo='Me' />

            <p className="text-slate-700 ">Occaecat nulla enim ipsum anim mollit voluptate ut ut veniam cillum culpa. Non labore officia mollit veniam adipisicing enim eu sint ex magna. Do aliquip non enim aliquip amet ea velit magna enim. Incididunt adipisicing et cupidatat aliquip culpa aliqua nisi.</p>

        </div>

        <div className="relative bg-[rgba(255,255,255,.7)] h-[250px] rounded-md"></div>

        <div className="flex justify-end">
            <Button buttonDescription="Know more about me" type="primary" className="w-[50px] h-[50px] items-center justify-center pl-0 pr-0 pt-0 pb-0">
                <ArrowRight set="bold" />
            </Button>
        </div>


    </PageContainer>
    )
}

export default About