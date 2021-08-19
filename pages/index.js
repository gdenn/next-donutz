import Head from 'next/head'
import styles from '../styles/Home.module.css'

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

      <div className="h-20 bg-blue-500 shadow-lg">

      </div>

      <main className="container my-8 mx-auto px-4 md:px-12">
        <CardView>
          {priceList.map((priceListItem) => <Card key={`card-${priceListItem.id}`} {...priceListItem}/>)}
        </CardView>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } });
