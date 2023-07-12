import Link from "next/link"
import { useRouter } from "next/router";

const LinkComponent = ({label, path, Icon, showIcon, className}) => {

    const {pathname} = useRouter();


    let type = "";

    if(!path || typeof(path) !== "string"){
        path = ""
    }

    if(path && path.toString().slice(0, 1) === "#"){
        type = "hash"

    }

    let linkClassName = `font-medium ${pathname === "path"? "" : "text-slate-700"}`;

    return(
        
        <>

            {type === "hash"? <a href={path} className={`${linkClassName} ${className}`}>

                {Icon && typeof(Icon) !== "string" && showIcon && <span><Icon /></span>}
                 <span>{label}</span>

            </a> : <Link href={path} className={`${linkClassName} ${className}`}>

                {Icon && typeof(Icon) !== "string" && showIcon && <span><Icon /></span>}
                 <span>{label}</span>
                
            </Link>}
        
        </>
        
    )
}

export default LinkComponent