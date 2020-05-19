import React, { useState, useEffect } from 'react';
import Head from 'next/head'  
import fetch from "isomorphic-unfetch";
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import utilStyles from '../styles/utils.module.css'  // css style
import MapView from "../components/mapComp.jsx"
import MapForms from '../components/forms/mapForms.jsx'
import Info from '../components/info.jsx'

export default function Map(){
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{street, block,  size, price, priceType}, setStreetBlock] = useState({street:'Any', block:'Any', size:'Any', price:'Any Price', priceType:'total'});
	
	useEffect(() => { if(initList.length===0) getList();});

    const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
		setRefinedData(data);
	}

	const filter = (street, block,  size, price, priceType) => {  // filter function to pass down to filterForms.jsx using props
		setStreetBlock({street, block,  size, price, priceType});
	}

	useEffect(() => {
		let houses = [...initList];
		let s = document.getElementById('streetSelect');
		let b = document.getElementById('blockSelect');
		let p = document.getElementById('priceSelect');
		let si = document.getElementById('sizeSelect');

		if (street!=='Any') { 
			houses = houses.filter((item)=>{ return item.address.indexOf(street)!==-1; }) 
			if (!s.classList.contains(utilStyles['active'])) s.classList.toggle(utilStyles['active']);	
		} else { if (s.classList.contains(utilStyles['active'])) s.classList.toggle(utilStyles['active']); }

		if (block!=='Any') { 
			houses = houses.filter((item)=>{ return item.address.substr(0,2) === block}) 
			if (!b.classList.contains(utilStyles['active'])) b.classList.toggle(utilStyles['active']);	
		} else { if (b.classList.contains(utilStyles['active'])) b.classList.toggle(utilStyles['active']); }

		if(size!=='Any') {
			houses = houses.filter(item=>{
				let tIndex=size.indexOf('+')
				if (tIndex!==-1) return item.size > Number(size.substring(0,tIndex))
				else return item.size === Number(size)
			})
			if (!si.classList.contains(utilStyles['active'])) si.classList.toggle(utilStyles['active']);	
		} else { if (si.classList.contains(utilStyles['active'])) si.classList.toggle(utilStyles['active']); }

		if (price!=='Any Price') {
			 if (priceType==='total'){
				houses = houses.filter(item=>{
					let tIndex=price.indexOf('+')
					if (tIndex!==-1) return item.totalPrice >= Number(price.substring(0,tIndex))
					else {
						let tarr=price.split('-')
						return item.totalPrice >= Number(tarr[0])&&item.totalPrice < Number(tarr[1])
					}
				})
			 } else {
				houses = houses.filter(item=>{
					let tIndex=price.indexOf('+')
					if (tIndex!==-1) {
						return Number((item.totalPrice/item.size).toFixed(2)) >= Number(price.substring(0,tIndex))
					} else {
						let tarr=price.split('-')
						return Number((item.totalPrice/item.size).toFixed(2)) >= Number(tarr[0])&&Number((item.totalPrice/item.size).toFixed(2)) < Number(tarr[1])
					}
				})
			 }
			if (!p.classList.contains(utilStyles['active'])) p.classList.toggle(utilStyles['active']);	
		} else { if (p.classList.contains(utilStyles['active'])) p.classList.toggle(utilStyles['active']); }

		setRefinedData(houses);
	}, [initList, street, block,  size, price, priceType]);
    
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
