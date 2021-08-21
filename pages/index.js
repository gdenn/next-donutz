import Head from 'next/head'

import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'

import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import { useState } from 'react'
import Layout from '../components/Layout'


const Home = ({ priceList }) => {

  const [orders, setOrders] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const addOrder = (id, amount, price, title, image) => {
    setOrders([...orders, { id: id, amount: amount, price: price, title: title, image: image }])
    setTotalPrice(totalPrice + parseFloat(price))
  }
 
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