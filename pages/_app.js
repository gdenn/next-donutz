import 'tailwindcss/tailwind.css'
import { AppContextProvider } from '../contexts/AppContext/AppContext'

import '../styles/globals.css'

const intialPageContextState = {
  orders: [],
  totalPrice: 0
}

const MyApp = ({ Component, pageProps }) => (
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
)

export default MyApp
