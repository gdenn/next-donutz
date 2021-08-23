import Image from "next/image"

import useOrders from "@/hooks/useOrders"
import ListView, {ListItem} from "@/components/ListView"
import Button from "@/components/Button"

const OrderList = () => {

    const {orders} = useOrders()

    return (
        <>
            <span className="uppercase font-mono font-semibold text-xl px-5">Your Orders</span>
            <ListView className="w-4/6">
                {orders.map(order => (
                    <ListItem key={`item-${order.id}`}>
                        <div className="relative h-32 w-32">
                            <Image src={order.image} layout="fill" objectFit="cover" alt="" className="rounded"/>
                        </div>
                        <div className="flex flex-row flex-grow">
                            <span className="flex-grow mx-8 text-xl self-center">{order.title}</span>
                            <span className="w-20 self-center">{order.amount}</span>
                            <span className="w-20 self-center">{order.price}€</span>
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