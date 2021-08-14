import Head from 'next/head'
import styles from '../styles/Home.module.css'

import firstDonutImg from '../public/donuts/donuts1.jpg'
import secondDonutImg from '../public/donuts/donuts4.jpg'
import thirdDonutImg from '../public/donuts/donuts3.jpg'
import fourthDonutImg from '../public/donuts/donuts5.jpg'
import sixthDonutImg from '../public/donuts/donuts6.jpg'
import seventhDonutImg from '../public/donuts/donuts7.jpg'
import eigthDonutImg from '../public/donuts/donuts8.jpg'

import CardView from '../components/CardView'
import Card from '../components/Card'

export default function Home() {
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
          <Card image={firstDonutImg} price="1.99" title="chocolate shipnut"/>
          <Card image={secondDonutImg} price="1.80" title="strawberry vanilla"/>
          <Card image={thirdDonutImg} price="1.55" title="mango wonder"/>
          <Card image={fourthDonutImg} price="2.55" title="crema peek"/>
          <Card image={firstDonutImg} price="1.99" title="chocolate shipnut"/>
          <Card image={eigthDonutImg} price="1.80" title="strawberry vanilla"/>
          <Card image={thirdDonutImg} price="1.55" title="mango wonder"/>
          <Card image={seventhDonutImg} price="2.55" title="crema peek"/>
          <Card image={fourthDonutImg} price="2.55" title="crema peek"/>
          <Card image={sixthDonutImg} price="1.99" title="chocolate shipnut"/>
          <Card image={eigthDonutImg} price="1.80" title="strawberry vanilla"/>
          <Card image={thirdDonutImg} price="1.55" title="mango wonder"/>
          <Card image={fourthDonutImg} price="2.55" title="crema peek"/>
          <Card image={sixthDonutImg} price="2.55" title="crema peek"/>
          <Card image={seventhDonutImg} price="1.99" title="chocolate shipnut"/>
        </CardView>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
