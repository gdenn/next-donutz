import Image from "next/image"
import useOrders from "../../hooks/useOrders"

import ListView from "../ListView/ListView"
import ListItem from "../ListItem"
import Button from "../Button"

const OrderList = () => {

    const {orders} = useOrders()

    console.log("orders: ", orders)

    return (
        <>
            <span className="uppercase font-mono font-semibold text-xl px-5">Your Orders</span>
            <ListView className="w-4/6">
                {orders.map(order => (
                    <ListItem key={`item-${order.id}`}>
                        <div className="relative h-32 w-32">
                            <Image src={order.image} layout="fill" objectFit="cover" alt="" className="rounded"/>
                        </div>
                        <div className="flex flex-row h-full items-center flex-grow">
                            <span className="flex-grow mx-8 text-xl font-">{order.title}</span>
                            <span className="w-20">{order.amount}</span>
                            <span className="w-20">{order.price}€</span>
                        </div>
                        <Button className="h-10 self-center mx-4" primary>
                            <span>Remove</span>
                        </Button>
                    </ListItem>
                ))}
            </ListView>
        </>
    )
}

export default OrderList