import Head from 'next/head'

import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'


export default function Home({ priceList }) {
 
  return (
    <div>
      <Head>
        <title>NextJs Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-20 bg-blue-500 shadow-lg">

      </header>

      <main className="bg-gray-100">
        <div className="container py-8 mx-auto px-4 md:px-12">
          <CardView>
            {priceList.map((priceListItem) => <Card key={`card-${priceListItem.id}`} {...priceListItem}/>)}
          </CardView>
        </div>
      </main>

      <footer className="flex flex-col justify-center h-20 bg-gray-600">
        <span className="font-sans text-lg text-white mx-auto">Built with NextJS & Tailwind</span>
        <span className="font-sans text-sm font-light text-gray-300 mx-auto">© Dennis Groß 2021</span>
      </footer>
    </div>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } });
