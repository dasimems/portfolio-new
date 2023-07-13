import { useCallback, useEffect, useRef } from "react"
import PageContainer from "../PageContainer"
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import Button from "../Button";
import {Call} from "react-iconly"
import { FaBars } from "react-icons/fa";

const Nav = () => {

    const navRef = useRef(null);

    const changeNavBar = useCallback((type)=>{

        if(type === "full"){

            navRef.current.classList.remove("rounded-full");
            navRef.current.classList.remove("top-4");
            navRef.current.classList.remove("w-[90%]");
            navRef.current.classList.remove("p-2");


            navRef.current.classList.add("px-[5%]");
            navRef.current.classList.add("top-0");
            navRef.current.classList.add("py-[15px]");
            navRef.current.classList.add("w-full");

        }else{

            navRef.current.classList.add("rounded-full");
            navRef.current.classList.add("top-4");
            navRef.current.classList.add("w-[90%]");
            navRef.current.classList.add("p-2");

            navRef.current.classList.remove("px-[5%]");
            navRef.current.classList.remove("top-0");
            navRef.current.classList.remove("py-[15px]");
            navRef.current.classList.remove("w-full");

        }


    }, [])

    useEffect(()=>{


        function checkScroll() {
            if(window.scrollY > 100){
                changeNavBar("full")
            }else{
                changeNavBar("short")

            }
        }

        window.addEventListener("scroll", ()=>{

            checkScroll();
            
        })

        checkScroll();
    }, [changeNavBar])

    return(

        <div ref={navRef} className="fixed z-[9999] flex items-center justify-between left-1/2 duration-300 bg-white p-2 rounded-full top-4 w-[90%] -translate-x-1/2 min-[1921px]:px-[80px]">

                <button className="h-[40px] w-[40px] md:hidden inline-flex items-center justify-center">
                    <FaBars />
                </button>
            <div className="flex items-center gap-6">


                <div className="hidden md:block">
                    <Logo imageSize={40} textHidden/>

                </div>

                <div className="md:hidden">
                    <Logo imageHidden/>

                </div>


                <DesktopNav />

            </div>

            <Button type="primary" className="gap-2 h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-auto md:w-auto items-center justify-center" buttonDescription="Contact me">
                <span className="md:hidden"><Call set="bold" /></span>
                <span className="hidden md:block">Contact Me</span>
                
            </Button>


        </div>

    )
}

export default Nav