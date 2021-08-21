import { useState } from "react"

const useCard = (onValueChanged) => {

    const [amount, setAmount] = useState(1)
    const onClick = () => amount > 0 && onValueChanged(amount)

    const incrementAmount = () => setAmount(amount + 1)

    const decrementAmount = () => setAmount(amount - 1)

    return {
        amount: amount, 
        incrementAmount: incrementAmount, 
        decrementAmount: decrementAmount, 
        onClick: onClick
    }
}

export default useCard