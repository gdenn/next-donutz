import Head from 'next/head'

import Header from '../Header'
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {

    const {header, main} = children

    return (
        <div className="flex flex-col justify-between h-screen">
            <Head>
                <title>NextJs Donuts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header>
                {header}
            </Header>

            <MainContent>
                {main}
            </MainContent>

            <Footer/>
        </div>
    )
}

export default Layout