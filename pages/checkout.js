import Layout from '../components/Layout'
import OrderList from '../components/OrderList'

const Checkout = ({}) => (
    <Layout>
      {{
        header: (
          <></>
        ),
        main: (
          <>
            <OrderList/>
          </>
        )
      }}
    </Layout>
  )

export default Checkout