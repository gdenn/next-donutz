import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import NextLink from 'next/link'

import classNames from "classnames"

import Button from "@/components/Button"
import useOrders from "@/hooks/useOrders"
import ListView, { ListItem } from "@/components/ListView"

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
                    <ListView>
                        {orders.map(({id, amount, price, title, image}) => (
                            <ListItem key={`item-${id}`}>
                                <div className="relative h-24 w-24">
                                    <Image src={image} layout="fill" objectFit="cover" alt="" className="rounded"/>
                                </div>
                                <div className="flex flex-row justify-around w-full">
                                    <span className="self-center">{title}</span>
                                    <span className="self-center">{amount}</span>
                                    <span className="self-center">{price}€</span>
                                </div>
                            </ListItem>
                        ))}
                    </ListView>
                </div>
            </div>
        </div>
    )
}

export default ShooppingCartButton