import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShooppingCartButton = ({amountItems, price}) => {
    return (
        <button className="flex flex-row place-items-center hover:border-transparent hover:bg-white hover:text-blue-500 bg-transparent text-white font-semibold py-2 px-4 border border-white rounded">
            <FontAwesomeIcon className="w-6 h-6 mx-2" icon={faShoppingCart}/>
            <span className="mx-2 text-xl">{price} €</span>
        </button>
    )
}

export default ShooppingCartButton