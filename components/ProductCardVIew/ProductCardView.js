import Card from "../Card"
import CardView from "../CardView"
import useProductCardView from "./useProductCardView"

const ProductCardView = ({priceList}) => {

    const { addOrder } =  useProductCardView()
    
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