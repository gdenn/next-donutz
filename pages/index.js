import Head from 'next/head'
import styles from '../styles/Home.module.css'

import priceList from '../public/product-list.json'

import CardView from '../components/CardView'
import Card from '../components/Card'


export default function Home({ priceList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>

      </div>
      <main className={styles.main}>
        <CardView>
          { priceList.map(({ title, price, image }, index) => (
              <Card key={`card${index}`} image={require(`../public/donuts/${image}`)} price={price} title={title}/>
            ))}
        </CardView>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export const getStaticProps = async (context) => ({ "props": { "priceList": priceList } });
