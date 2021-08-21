import Head from 'next/head'

import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'

const Checkout = ({}) => {

    return (
        <div className="flex flex-col justify-between h-screen">
        <Head>
            <title>NextJs Donuts</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header>
            
        </Header>

        <MainContent>
            
        </MainContent>

        <Footer/>
        </div>
    )
}

export default Checkout