//Next.JS imports
import Head from 'next/head'
import Link from 'next/link'
//Style Imports
import utilStyles from '../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
 return(
   <>
    <div className={utilStyles.navbar}>
     <h1><FontAwesomeIcon icon={faLaptopHouse}/> Isla Vista Housing Search </h1>
     <div className={utilStyles.navlinks}>
       <a href="/">Listings</a>
       <a href="/map">Map</a>
     </div>
    </div>
   </>
 )
}
