import { useCallback, useEffect, useRef, useState } from "react";
import PageContainer from "../PageContainer";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import Button from "../Button";
import { Call } from "react-iconly";
import { FaBars } from "react-icons/fa";
import Modal from "../Modal";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";

const Nav = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const {pathname} = useRouter();

  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const changeNavBar = useCallback(type => {
    if (type === "full") {
      navRef.current.classList.remove("rounded-full");
      navRef.current.classList.remove("top-4");
      navRef.current.classList.remove("w-[100%]");
      navRef.current.classList.remove("p-2");

      navRef.current.classList.add("px-[5%]");
      navRef.current.classList.add("top-0");
      navRef.current.classList.add("py-[15px]");
      navRef.current.classList.add("w-full");


    // left-[1%] top-[80px] rounded-lg h-[calc(100%-90px)]
      mobileMenuRef.current.classList.add("left-0")
      mobileMenuRef.current.classList.add("top-[70px]")
      mobileMenuRef.current.classList.add("h-[calc(100%-70px)]")

      mobileMenuRef.current.classList.remove("left-[1%]")
      mobileMenuRef.current.classList.remove("top-[80px]")
      mobileMenuRef.current.classList.remove("rounded-lg")
      mobileMenuRef.current.classList.remove("h-[calc(100%-90px)]")
    } else {
      navRef.current.classList.add("rounded-full");
      navRef.current.classList.add("top-4");
      navRef.current.classList.add("w-[90%]");
      navRef.current.classList.add("p-2");

      navRef.current.classList.remove("px-[5%]");
      navRef.current.classList.remove("top-0");
      navRef.current.classList.remove("py-[15px]");
      navRef.current.classList.remove("w-full");

      
      mobileMenuRef.current.classList.remove("left-0")
      mobileMenuRef.current.classList.remove("top-[70px]")
      mobileMenuRef.current.classList.remove("h-[calc(100%-70px)]")

      mobileMenuRef.current.classList.add("left-[1%]")
      mobileMenuRef.current.classList.add("top-[80px]")
      mobileMenuRef.current.classList.add("rounded-lg")
      mobileMenuRef.current.classList.add("h-[calc(100%-90px)]")
    }
  }, []);

  useEffect(
    () => {
      function checkScroll() {
        if (window.scrollY > 100) {
          changeNavBar("full");
        } else {
          changeNavBar("short");
        }
      }

      window.addEventListener("scroll", () => {
        checkScroll();
      });

      checkScroll();
    },
    [changeNavBar]
  );

  useEffect(()=>{
    if(mobileNavOpened){
        setTimeout(()=> {setOpenMenu(true)} , 100)
    }else{
        setOpenMenu(false)

    }
  }, [mobileNavOpened])

  useEffect(() => {

    setMobileNavOpened(false)
    
  }, [pathname]);

  return (

    <>
        <div
        ref={navRef}
        className="fixed z-[9999] flex items-center justify-between left-1/2 duration-300 bg-white p-2 rounded-full top-4 w-[90%] -translate-x-1/2 min-[1921px]:px-[80px]"
        >
        <button className="h-[40px] w-[40px] md:hidden inline-flex items-center justify-center" onClick={()=>{
            

                if(mobileNavOpened){

                    setOpenMenu(false)

                    setTimeout(()=>{
                        setMobileNavOpened(false)
                    }, 100)

                    
                }else{

                    setMobileNavOpened(true)

                }
        }}>
            <FaBars />
        </button>
        <div className="flex items-center gap-6">
            <div className="hidden md:block">
            <Logo imageSize={40} textHidden />
            </div>

            <div className="md:hidden">
            <Logo imageHidden />
            </div>

            <DesktopNav />
        </div>

        <Button
            type="primary"
            className="gap-2 h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-auto md:w-auto items-center justify-center"
            buttonDescription="Contact me"
        >
            <span className="md:hidden">
            <Call set="bold" />
            </span>
            <span className="hidden md:block">Contact Me</span>
        </Button>
        </div>

        <Modal opened={mobileNavOpened} onClose={()=>{setMobileNavOpened(false)}} containerClassName="h-full">

            <div ref={mobileMenuRef} className={`special-scroll-vertical-two overflow-y-scroll absolute w-full max-w-[350px] duration-300 bg-white py-10 px-10 left-[1%] top-[80px] rounded-lg h-[calc(100%-90px)] flex flex-col gap-10 ${openMenu? "translate-x-0" : "-translate-x-[150px]"}`}>

                <div className="flex items-center justify-between">
                    <Logo />
                </div>

                <hr/>

                <MobileNav />

            </div>

        </Modal>
    </>
  );
};

export default Nav;
