import { useState } from "react"

const useShoppingCartButton = () => {
    const [ordersHidden, setOrdersHidden] = useState(true)

    return {ordersHidden, setOrdersHidden}
}

export default useShoppingCartButton

