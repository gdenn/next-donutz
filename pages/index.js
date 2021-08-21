import priceList from '../public/product-list.json'

import SearchBar from '../components/SearchBar'
import ShooppingCartButton from '../components/ShoppingCartButton'
import Layout from '../components/Layout'
import ProductCardView from '../components/ProductCardVIew'
import BreadCrumbs, { ActiveLink } from '../components/BreadCrumbs'


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
        <>
          <BreadCrumbs>
            <ActiveLink title="Product Overview"/>
          </BreadCrumbs>
          <ProductCardView priceList={priceList}/>
        </>
      )
    }}
  </Layout>
)

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } })

export default Home