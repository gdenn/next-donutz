import Head from "next/head"

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import { Actions } from "./Actions"

const Layout = ({children}) => {

    const {header, main, actions} = children

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

            <Actions>
                {actions}
            </Actions>

            <Footer/>
        </div>
    )
}

export default Layout