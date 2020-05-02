// index.jsx

import React from 'react'  // for Next.js
import Head from 'next/head'  // for Next.js
import utilStyles from '../styles/utils.module.css'  // css style
import data from '../data/houses.json'
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import HouseTable from '../components/table.jsx'
import Forms from '../components/forms/forms.jsx'

export default function Index() {
	return (
		<Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>

			<div className={utilStyles.container}>
				<h1 className={utilStyles.searchH1}>Search Listings</h1>
				<div className={utilStyles.indexDivs}>
					<Forms/>
					<HouseTable data={data}/>
				</div>
				<div className={utilStyles.notfindingTextDiv}>
					<h2>Not finding the right place? Narrowing down your filters often helps more preffered listings come to the top!</h2>
				</div>
			</div>

			<Footer/>
		</Layout>
	)
}
