import { forwardRef } from "react"

const PageContainer = forwardRef(({children, className, ...prop}, ref) => {
    return(
        <div ref={ref} className={`px-[5%] ${className? className : ""}`} {...prop}>
            {children}
        </div>
    )
})

PageContainer.displayName = "PPage Container"

export default PageContainer