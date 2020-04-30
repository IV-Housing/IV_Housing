//Next.JS imports
import Head from 'next/head'
import Link from 'next/link'
//Style Imports
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export const siteTitle = 'Isla Vista Housing Search'

export default function Layout({children, index}){
  return (
    <div className = {styles.container}>
     <Head>
      <meta name = "description" content = "Search for housing listings throughout Isla Vista!"/>
      <meta name="og:title" content={siteTitle} />
     </Head>
     <main>{children}</main>
    </div>
  )
}
