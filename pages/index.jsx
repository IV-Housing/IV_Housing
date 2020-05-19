// index.jsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head'  // for Next.js
import fetch from "isomorphic-unfetch";
import utilStyles from '../styles/utils.module.css'  // css style
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import IndexForms from '../components/forms/indexForms.jsx'
import DataView from '../components/view/dataView.jsx'
import Info from '../components/info.jsx'

export default function Index(){
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{block, street}, setStreetBlock] = useState({block:'Any',street:'Any'});
	const [direction, setDirection] = useState("ascending");
	const [view, setView] = useState('table');

	useEffect(() => { if(initList.length===0) getList(); });

	const filter = (street,block)=>{ setStreetBlock({block, street}); }
	const sortByPrice = (direction)=>{ setDirection(direction); }
	const toggleTable = ()=>{ setView('table'); }
	const toggleCard = ()=>{ setView('card'); }

	const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
		setRefinedData(data);
	}

	useEffect(() => {
		let houses = [...initList];
		let s = document.getElementById('streetSelect');
		let b = document.getElementById('blockSelect');

		if (street!=='Any') { 
			houses = houses.filter((item)=>{ return item.address.indexOf(street)!==-1; }) 
			if (!s.classList.contains(utilStyles['active'])) s.classList.toggle(utilStyles['active']);	
		} else { if (s.classList.contains(utilStyles['active'])) s.classList.toggle(utilStyles['active']); }

		if (block!=='Any') { 
			houses = houses.filter((item)=>{ return item.address.substr(0,2) === block}) 
			if (!b.classList.contains(utilStyles['active'])) b.classList.toggle(utilStyles['active']);	
		} else { if (b.classList.contains(utilStyles['active'])) b.classList.toggle(utilStyles['active']); }

		if (direction=="ascending")
			houses.sort((h1,h2)=>{ return (h1['totalPrice']/h1['size'])-(h2['totalPrice']/h2['size']); });
		else if (direction=="descending")
			houses.sort((h1,h2)=>{ return (h2['totalPrice']/h2['size'])-(h1['totalPrice']/h1['size']); });
		setRefinedData(houses);
	}, [initList, street, block, direction]);

	useEffect(() => {
		let t = document.getElementById('tableButton');
		let c = document.getElementById('cardButton');
		if (view=='table') {
			t.classList.toggle(utilStyles['clicked']);
			if (c.classList.contains(utilStyles['clicked'])) c.classList.toggle(utilStyles['clicked']);
		}
		if (view=='card') {
			c.classList.toggle(utilStyles['clicked']);
			if (t.classList.contains(utilStyles['clicked'])) t.classList.toggle(utilStyles['clicked']);
		}
	}, [view]);

	return (
		<Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>
			<div className={utilStyles.containerIndex}>
				<h1 className={utilStyles.searchH1}>Search Listings</h1>
				<div className={utilStyles.indexDivs}>
					<IndexForms filter={filter} sortByPrice={sortByPrice}/>
					<DataView chosenView={view} data={refinedData} toggleTable={toggleTable} toggleCard={toggleCard}/>
					<Info/>
				</div>
			</div>
		</Layout>
	);
}
