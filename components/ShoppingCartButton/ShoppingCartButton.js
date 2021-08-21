import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import NextLink from 'next/link'

import { useState } from "react"
import classNames from "classnames"

const ShooppingCartButton = ({price, orders}) => {

    const [ordersHidden, setOrdersHidden] = useState(true)

    return (
        <div className="flex flex-col">
            <NextLink href="/checkout">
                <button onMouseEnter={() => setOrdersHidden(false)}
                        onMouseLeave={() => setOrdersHidden(true)}
                        className="flex flex-row place-items-center hover:border-transparent hover:bg-white hover:text-blue-500 bg-transparent text-white font-semibold py-2 px-4 border border-white rounded">
                    <FontAwesomeIcon className="w-6 h-6 mx-2" icon={faShoppingCart}/>
                    <span className="mx-2 text-xl">{price} €</span>
                </button>
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