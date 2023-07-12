"use client";
import { useState } from "react";
import { AccordionCard } from "..";

const Accordion = ({data}) => {

    if(!data || !Array.isArray(data)){
        data = []
    }

    const [activeCard, setActiveCard] = useState(0);

    return(
        <div className="flex flex-col">

            {data.map((details, index)=>{
                
                return(
                <AccordionCard removeLine={index === (data.length - 1)} id={index} onChange={(id)=>{
                    setActiveCard(id);
                }} active={activeCard === index} {...details} key={index} />
            )})}

        </div>
    )
}

export default Accordion