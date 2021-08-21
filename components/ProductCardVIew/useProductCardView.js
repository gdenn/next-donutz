import { useAppContext } from "../../contexts/AppContext/AppContext"


const useProductCardView = () => {

    const {orders, setOrders, totalPrice, setTotalPrice} = useAppContext()

    const addOrder = (id, amount, price, title, image) => {
        console.log("amount: ", amount)
        setOrders([...orders, { id: id, amount: amount, price: price, title: title, image: image }])
        setTotalPrice(totalPrice + amount * parseFloat(price))
    }

    return { addOrder: addOrder }
}

export default useProductCardView