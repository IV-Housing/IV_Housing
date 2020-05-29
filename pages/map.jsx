// map.jsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import fetch from "isomorphic-unfetch";
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import utilStyles from '../styles/utils.module.css'  // css style
import MapView from "../components/mapComp.jsx"
import MapForms from '../components/forms/mapForms.jsx'
import Info from '../components/info.jsx'
import sortAndFilter from '../utils/sortAndFilterFunctions.js'

export default function Map(){
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{street,block,size,price,priceType}, setStreetBlock] = useState(
		{ street:'Any', block:'Any', size:'Any', price:'Any Price', priceType:'total' }
	);

	const filter = (street,block,size,price,priceType) => { 
		setStreetBlock({street,block,size,price,priceType}); 
	}
    const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
		setRefinedData(data);
	}

	useEffect(()=>{ if(initList.length===0) getList();});
	useEffect(() => {
		let houses = [...initList];
		let refinedHouses = sortAndFilter(houses,street,block,size,price,priceType,'none');
		setRefinedData(refinedHouses);
	}, [initList, street, block, size, price, priceType]);

    return (
       <Layout map>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>
			<div className={utilStyles.containerMap}>
				<h1 className={utilStyles.mapH1}>Listings Map</h1>
				<div className={utilStyles.mapInfo}>
					<Info/>
				</div>
				<div>
					<MapForms filter={filter}/>
					<MapView list={refinedData}/>
				</div>
			</div>
		</Layout>
	);
}
