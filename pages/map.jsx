import React, { useState, useEffect } from 'react';
import Head from 'next/head'  
import fetch from "isomorphic-unfetch";
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import utilStyles from '../styles/utils.module.css'  // css style
import MapView from "../components/mapComp.jsx"
import MapForms from '../components/forms/mapForms.jsx'

export default function Map(){
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{block, street}, setStreetBlock] = useState({block:'Any',street:'Any'});

	useEffect(() => { if(initList.length===0) getList();});

    const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
		setRefinedData(data);
	}

	useEffect(() => {
		let houses = [...initList];

		if(street!=='Any') {
			houses = houses.filter(item=>{
				return item.address.indexOf(street)!==-1
			 })
		 }
		 if(block!=='Any') {
			 houses = houses.filter(item=>{
				return item.address.substr(0,2) === block
			})
		 }

		setRefinedData(houses);
	}, [initList, street, block]);

	const filter = (street,block) => {  // filter function to pass down to filterForms.jsx using props
		setStreetBlock({block, street});
	}
    
    return (
       <Layout map>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>
			<div className={utilStyles.containerMap}>
				<h1 className={utilStyles.mapH1}>Listings Map</h1>
				<div>
					<MapForms filter={filter}/>
					<MapView list={refinedData}/>
				</div>
			</div>
			<Footer/>
		</Layout>
	);
}