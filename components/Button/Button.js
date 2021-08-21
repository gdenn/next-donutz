import classNames from "classnames"


const BASE_CLASSES = "flex flex-row place-items-center rounded py-2 px-4 border font-bold "
const SECONDARY_CLASSES = "hover:border-transparent hover:bg-white hover:text-blue-500 bg-transparent text-white border-white"
const PRIMARY_CLASSES = "bg-blue-500 hover:bg-blue-700 text-white"

const Button = ({
    children, 
    // event listeners
    onMouseEnter, 
    onMouseLeave,
    onClick, 
    // button style
    primary, secondary,
    // addtional classes 
    className
}) => (
    <button className={classNames(BASE_CLASSES, {[SECONDARY_CLASSES]: secondary, [PRIMARY_CLASSES]: primary}, className)}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
        {children}
    </button>
)

export default Button