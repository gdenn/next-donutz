import Layout from '../components/Layout'
import OrderList from '../components/OrderList'

import BreadCrumbs, { ActiveLink, BackLink } from '../components/BreadCrumbs'
import TimeLine from '../components/TimeLine'


const Checkout = ({}) => (
    <Layout>
      {{
        header: (
          <></>
        ),
        main: (
          <>
            <BreadCrumbs>
              <BackLink title="Product Overview" linkTo="/"/>
              <ActiveLink title="Check Order"/>
            </BreadCrumbs>
            <TimeLine steps={[
              { label: "Product Overview", linkTo: "/"},
              { label: "Product Overview", active: true},
              { label: "Shipping", linkTo: "/ship"},
            ]}/>
            <OrderList/>
          </>
        )
      }}
    </Layout>
  )

export default Checkout