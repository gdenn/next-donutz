import priceList from '../public/product-list.json'

import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import Layout from '../components/Layout'
import ProductCardView from '../components/ProductCardVIew'


const Home = ({ priceList }) => (
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

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } })

export default Home