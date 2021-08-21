import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import NextLink from 'next/link'

import classNames from "classnames"
import Button from "../Button"
import useOrders from "../../hooks/useOrders"
import useShoppingCartButton from "./useShoppingCartButton"

const ShooppingCartButton = () => {

    const {ordersHidden, setOrdersHidden} = useShoppingCartButton()

    const {orders, roundedTotalPrice} = useOrders()

    return (
        <div className="flex flex-col">
            <NextLink href="/checkout">
                <Button secondary onMouseEnter={() => setOrdersHidden(false)} onMouseLeave={() => setOrdersHidden(true)}>
                    <FontAwesomeIcon className="w-6 h-6 mx-2" icon={faShoppingCart}/>
                    <span className="mx-2 text-xl">{roundedTotalPrice} €</span>
                </Button>
            </NextLink>
            <div onMouseEnter={() => setOrdersHidden(false)} 
                 onMouseLeave={() => setOrdersHidden(true)} 
                 className={classNames("relative", {"hidden": ordersHidden})}>

                <div className="absolute z-10 block w-96 top-0 right-0">
                    <ul className="rounded border-solid border-white">
                        {orders.map(({id, amount, price, title, image}) => (
                            <li key={`item-${id}`} className="flex flex-row h-24 border-solid border hover:scale-110 border-white text-white font-sans bg-blue-500 pr-2 rounded">
                                <div className="relative h-24 w-24">
                                    <Image src={image} layout="fill" objectFit="cover" alt="" className="rounded"/>
                                </div>
                                
                                <div className="flex flex-row h-full justify-around items-center flex-grow">
                                    <span className="">{title}</span>
                                    <span>{amount}</span>
                                    <span>{price}€</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShooppingCartButton