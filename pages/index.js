import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import Layout from '../components/Layout'
import useOrders from '../hooks/useOrders'
import ProductCardView from '../components/ProductCardVIew'


const Home = ({ priceList }) => {
  return (
    <Layout>
      {{
        header: (
          <>
            <SearchBar/>
            <ShooppingCartButton/>
          </>
        ),
        main: (
          <ProductCardView priceList={priceList}/>
        )
      }}
    </Layout>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } })

export default Home