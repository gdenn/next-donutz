import classNames from "classnames"


const ListView = ({children, className}) => (
    <ul className={classNames(className)}>
        {children}
    </ul>
)

export default ListView