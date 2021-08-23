import Layout from '@/components//Layout'
import OrderList from '@/components//OrderList'

import BreadCrumbs, { ActiveLink, BackLink } from '@/components//BreadCrumbs'


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
              <ActiveLink title="Shopping Cart"/> 
            </BreadCrumbs>
            <OrderList/>
          </>
        )
      }}
    </Layout>
  )

export default Checkout