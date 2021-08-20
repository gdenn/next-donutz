import Head from 'next/head'

import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'


export default function Home({ priceList }) {

  const [orders, setOrders] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const addOrder = (id, amount, price, title, image) => {
    setOrders([...orders, { id: id, amount: amount, price: price, title: title, image: image }])
    setTotalPrice(totalPrice + parseFloat(price))
  }
 
  return (
    <div>
      <Head>
        <title>NextJs Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
          <SearchBar/>
          <ShooppingCartButton price={totalPrice.toFixed(2)} orders={orders}/>
      </Header>

      <MainContent>
        <CardView>
            {priceList.map((priceListItem) => (
              <Card key={`card-${priceListItem.id}`} 
                    {...priceListItem}
                    onValueChanged={(amount) => addOrder(priceListItem.id, amount, priceListItem.price, priceListItem.title, priceListItem.image)}/>
            ))}
          </CardView>
      </MainContent>

      <Footer/>
    </div>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } });
