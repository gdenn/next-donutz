import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import Layout from '../components/Layout'
import useOrders from '../hooks/useOrders'


const Home = ({ priceList }) => {

  const {addOrder, totalPrice, orders} = useOrders()

  return (
    <Layout>
      {{
        header: (
          <>
            <SearchBar/>
            <ShooppingCartButton price={totalPrice.toFixed(2)} orders={orders}/>
          </>
        ),
        main: (
          <CardView>
            {priceList.map((priceListItem) => (
              <Card key={`card-${priceListItem.id}`} 
                    {...priceListItem}
                    onValueChanged={(amount) => addOrder(priceListItem.id, amount, priceListItem.price, priceListItem.title, priceListItem.image)}/>
            ))}
          </CardView>
        )
      }}
    </Layout>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } })

export default Home