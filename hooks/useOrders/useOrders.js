import { useAppContext } from "../../contexts/AppContext/AppContext"


const useOrders = () => {

    const {orders, setOrders, totalPrice, setTotalPrice} = useAppContext()

    const calculateTotalPrice = () => orders.reduce((acc, order) => acc + parseInt(order.amount) * parseFloat(order.price), 0)

    const addOrder = (id, amount, price, title, image) => {

        const amountAsInteger = parseInt(amount)
        const priceAsFloat = parseFloat(price)

        const newOrders = [...orders]

        const matchingOrder = newOrders.find(order => order.id === id)

        if (matchingOrder) {
            matchingOrder.amount += amountAsInteger
        } else {
            newOrders.push({id: id, amount: amountAsInteger, price: priceAsFloat, title: title, image: image})
        }

        setOrders(newOrders)
        setTotalPrice(calculateTotalPrice(newOrders))
    }

    const removeOrder = (id) => {
        
        setOrders([
            ...orders.filter(order => id != order.id)
        ])
        setTotalPrice(calculateTotalPrice(orders))
    }

    return { 
        addOrder: addOrder,
        removeOrder: removeOrder,
        orders: orders, 
        totalPrice: totalPrice 
    }
}

export default useOrders