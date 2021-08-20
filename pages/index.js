import Head from 'next/head'

import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'


export default function Home({ priceList }) {
 
  return (
    <div>
      <Head>
        <title>NextJs Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
            <SearchBar/>
            <ShooppingCartButton price={5.99}/>
      </Header>

      <MainContent>
        <CardView>
            {priceList.map((priceListItem) => <Card key={`card-${priceListItem.id}`} {...priceListItem}/>)}
          </CardView>
      </MainContent>

      <Footer/>
    </div>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } });
