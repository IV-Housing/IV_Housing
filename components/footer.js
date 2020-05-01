//Next.JS imports
import Head from 'next/head'
import Link from 'next/link'
//Style Imports
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Footer(){
 return(
   <>
   <div className={utilStyles.footer}>
    <p> Made by:<a href = "https://github.com/orgs/ucsb-cs48-s20/teams/s0-t3-iv-housing/members"> UCSB-CS48-S0-T3</a> &copy; 2020</p> 
   </div>
   </>
 )
}
