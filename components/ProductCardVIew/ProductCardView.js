import useOrders from "../../hooks/useOrders"
import Card from "../Card"
import CardView from "../CardView"

const ProductCardView = ({priceList}) => {

    const { addOrder } =  useOrders()
    
    return (
        <CardView>
            {priceList.map((priceListItem) => (
                <Card key={`card-${priceListItem.id}`} 
                    {...priceListItem}
                    onValueChanged={(amount) => addOrder(priceListItem.id, amount, priceListItem.price, priceListItem.title, priceListItem.image)}/>
            ))}
        </CardView>
    )
}

export default ProductCardView