//Next.JS imports
import Head from 'next/head'
import Link from 'next/link'
//Style Imports
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Navbar(){
 return(
   <>
    <div className={utilStyles.navbar}>
     <h1>🏠 Isla Vista Housing Search </h1>
     <div className={utilStyles.navlinks}>
       <a href="index.jsx">Search Listings</a>
       <a href="#post-a-listing">Post a Listing</a>
     </div>
    </div>
   </>
 )
}
