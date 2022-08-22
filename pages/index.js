import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjas | home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur maxime magnam amet nemo excepturi laboriosam est officia placeat quam, ea ut totam unde modi libero dolores molestiae ex, aspernatur explicabo?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur maxime magnam amet nemo excepturi laboriosam est officia placeat quam, ea ut totam unde modi libero dolores molestiae ex, aspernatur explicabo?</p>
        <a className={styles.btn}>See Ninja List</a>
      </div>
    </>
  )
}
