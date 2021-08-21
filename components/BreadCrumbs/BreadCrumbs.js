import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const BreadCrumbs = ({children}) => {
    
    return (
        <div className="flex flex-row place-items-center h-4 font-mono text-sm mb-8">
            {children && children.isArray && children.map((child, idx) => (
                <>
                    {child}
                    {idx < children.length - 1 && <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 mx-1"/>}
                </>
            ))}
            {children && !children.isArray && children}
        </div>
    )
}

export default BreadCrumbs