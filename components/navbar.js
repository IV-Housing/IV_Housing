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
     <h1> Isla Vista Housing Search </h1>
     <div className={utilStyles.navlinks}>
       <a href="/">Search Listings</a>
       <a href="/map">Listings Map</a>
     </div>
    </div>
   </>
 )
}
