"use client";
import { useCallback, useEffect, useRef, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AccordionCard = ({title, content, active, onChange, id, removeLine}) => {

    const [contentHeight, setContentHeight] = useState(0),
    contentRef = useRef(null)

    if(!onChange){
        onChange = ()=>{}
    }

    const changeHeight = useCallback(
      type => {
        const elementHeight = contentRef.current.clientHeight;

        if (type === "open") {
          setContentHeight(elementHeight);
        } else {
          setContentHeight(0);
        }
      },
      []
    );
    
    useEffect(()=>{

        if(active){
            changeHeight("open")
        }else{
            changeHeight("close")
        }

    }, [active, changeHeight])

    return(
        <div className="flex gap-10">

            <div className="flex flex-col items-center">

                <button onClick={()=>{
                    if(contentHeight > 0){
                        changeHeight()
                        onChange("")
                    }else{

                        changeHeight("open");
                        onChange(id)
                    }
                    
                }} className="inline-flex items-center justify-center relative h-[25px] w-[25px] border border-primary-lighter rounded-full">
                    <span className="relative z-[1]">{contentHeight > 0? <FaAngleUp /> : <FaAngleDown />}</span>
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full flex items-center justify-center`}>
                        <div className={` ${contentHeight > 0? "glow": ""} bg-primary-lighter w-full h-full rounded-full`}>

                        </div>
                    </div>
                </button>
                <div className={`${removeLine? "hidden" : "block"} flex-1 w-[1px] bg-primary-lighter`}></div>

            </div>
            <div className="flex-1 pb-10">
                <h2 className="cursor-pointer" onClick={()=>{
                    if(contentHeight > 0){
                        changeHeight()
                        onChange("");
                    }else{

                        changeHeight("open");
                        onChange(id);
                    }
                    
                }}>{title}</h2>

                <div className="overflow-hidden duration-300" style={{
                    height: `${contentHeight}px`
                }}>

                    <div className="py-5 text-slate-400" ref={contentRef}>
                        <p>{content}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AccordionCard