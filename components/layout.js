//Next.JS imports
import Head from 'next/head'
//Style Imports
import Navbar from './navbar'

export const siteTitle = 'Isla Vista Housing Search'

export default function Layout(props){
  const children=props.children
  const user=props.user
  return (
    <div>
     <Head>
      <meta name = "description" content = "Search for housing listings throughout Isla Vista!"/>
      <meta name = "og:title" content={siteTitle} />
	  <script src='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js'></script>
	  <link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
      <title>{siteTitle}</title>
     </Head>
     <Navbar user={user}></Navbar>
     <main>{children}</main>
    </div>
  )
}
