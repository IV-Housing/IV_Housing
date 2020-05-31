//Next.JS imports
import Head from 'next/head'
//Style Imports
import Navbar from './navbar'

export const siteTitle = 'Isla Vista Housing Search'

export default function Layout({children}){
  return (
    <div>
     <Head>
      <meta name = "description" content = "Search for housing listings throughout Isla Vista!"/>
      <meta name = "og:title" content={siteTitle} />
     </Head>
     <Navbar></Navbar>
     <main>{children}</main>
    </div>
  )
}
