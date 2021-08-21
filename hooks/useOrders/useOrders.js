import { useAppContext } from "../../contexts/AppContext/AppContext"


const useOrders = () => {

    const {orders, setOrders, totalPrice, setTotalPrice} = useAppContext()

    const addOrder = (id, amount, price, title, image) => {

        const newOrders = [...orders]

        const matchingOrder = newOrders.find(order => order.id === id)

        if (matchingOrder) {
            matchingOrder.amount += amount
        } else {
            newOrders.push({id: id, amount: amount, price: price, title: title, image: image})
        }

        setOrders(newOrders)
        setTotalPrice(totalPrice + amount * parseFloat(price))
    }

    return { addOrder: addOrder, orders: orders, totalPrice: totalPrice, roundedTotalPrice: totalPrice.toFixed(2)}
}

export default useOrders