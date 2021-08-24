import Layout from '@/components//Layout'
import OrderList from '@/components//OrderList'
import BreadCrumbs, { ActiveLink, BackLink } from '@/components//BreadCrumbs'
import NavigationButton from '@/components/NavigationButton'

const ShoppingCart = ({}) => (
  <Layout>
    {{
      main: <>
          <BreadCrumbs>
            <BackLink title="Product Overview" linkTo="/"/>
            <ActiveLink title="Shopping Cart"/> 
          </BreadCrumbs>
          <OrderList/>
      </>,
      actions: <NavigationButton linkTo="/login" title="Login"/>
    }}
  </Layout>
)

export default ShoppingCart