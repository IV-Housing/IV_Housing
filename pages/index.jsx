// index.jsx
import React, { useState, useEffect } from 'react';
import fetch from "isomorphic-unfetch";
import utilStyles from '../styles/utils.module.css'  // css style
import Layout, {siteTitle} from '../components/layout.js'
import IndexForms from '../components/forms/indexForms.jsx'
import DataView from '../components/view/dataView.jsx'
import Info from '../components/info.jsx'
import { optionalAuth } from "../utils/ssr";
import sortAndFilter from '../utils/sortAndFilterFunctions.js'
import Head from 'next/head'
import Navbar from '../components/navbar'

export const getServerSideProps = optionalAuth;

export default function Index(props){
	const user=props.user
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [direction, setDirection] = useState("ascending");
	const [view, setView] = useState('table');
	const [{street,block,size,price,priceType}, setStreetBlock] = useState(
		{ street:'Any', block:'Any', size:'Any', price:'Any Price', priceType:'total' }
	);

	const sortByPrice = (direction)=>{ setDirection(direction); }
	const toggleTable = ()=>{ setView('table'); }
	const toggleCard = ()=>{ setView('card'); }
	const filter = (street,block,size,price,priceType) => { 
		setStreetBlock({street,block,size,price,priceType}); 
	}

	useEffect(()=>{ if(initList.length===0) getList(); });
	const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
		setRefinedData(data);
	}


	useEffect(() => {
		let houses = [...initList];
		setRefinedData( sortAndFilter(houses,street,block,size,price,priceType,direction) );
	}, [initList, street, block, size, price, priceType, direction]);
	
	useEffect(() => {
		let t = document.getElementById('tableButton');
		let c = document.getElementById('cardButton');
		if (view=='table') {
			t.classList.toggle(utilStyles['clicked']);
			if (c.classList.contains(utilStyles['clicked'])) c.classList.toggle(utilStyles['clicked']);
		} if (view=='card') {
			c.classList.toggle(utilStyles['clicked']);
			if (t.classList.contains(utilStyles['clicked'])) t.classList.toggle(utilStyles['clicked']);
		}
	}, [view]);

	return (
		<Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar user={user}></Navbar>
			<div className={utilStyles.containerIndex}>
				<div className={utilStyles.indexDivs}>
					<IndexForms filter={filter} sortByPrice={sortByPrice}/>
					<DataView chosenView={view} data={refinedData} toggleTable={toggleTable} toggleCard={toggleCard}/>
					<Info/>
				</div>
			</div>
		</Layout>
	);
}
