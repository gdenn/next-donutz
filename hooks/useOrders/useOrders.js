import { useAppContext } from "../../contexts/AppContext/AppContext"


const useOrders = () => {

    const {orders, setOrders, totalPrice, setTotalPrice} = useAppContext()

    const addOrder = (id, amount, price, title, image) => {
        setOrders([...orders, { id: id, amount: amount, price: price, title: title, image: image }])
        setTotalPrice(totalPrice + parseFloat(price))
    }

    return { addOrder: addOrder, orders: orders, totalPrice: totalPrice}
}

export default useOrders