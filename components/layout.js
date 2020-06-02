//Next.JS imports
import Head from 'next/head'
//Style Imports
import Navbar from './navbar'

export const siteTitle = 'Isla Vista Housing Search'

export default function Layout(props){
  const children=props.children
  const user=props.user
  console.log(props)
  debugger
  return (
    <div>
     <Head>
      <meta name = "description" content = "Search for housing listings throughout Isla Vista!"/>
      <meta name = "og:title" content={siteTitle} />
      <title>{siteTitle}</title>
     </Head>
     <Navbar user={user}></Navbar>
     <main>{children}</main>
    </div>
  )
}
