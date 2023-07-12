import Link from "next/link"
import { useRouter } from "next/router";

const LinkComponent = ({label, path, Icon, showIcon, className, description}) => {

    const {pathname} = useRouter();


    let type = "";

    if(!path || typeof(path) !== "string"){
        path = ""
    }

    if(path && path.toString().slice(0, 1) === "#"){
        type = "hash"

    }

    if(!description){
        description = label
    }

    let linkClassName = `font-medium ${pathname === "path"? "" : "text-slate-700"}`;

    return(
        
        <>

            {type === "hash"? <a aria-label={description} href={path} className={`${linkClassName} ${className}`}>

                {Icon && typeof(Icon) !== "string" && showIcon && <span><Icon /></span>}
                 <span>{label}</span>

            </a> : <Link aria-label={description} href={path} className={`${linkClassName} ${className}`}>

                {Icon && typeof(Icon) !== "string" && showIcon && <span><Icon /></span>}
                 <span>{label}</span>
                
            </Link>}
        
        </>
        
    )
}

export default LinkComponent