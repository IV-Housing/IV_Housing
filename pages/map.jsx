// map.jsx
import React, { useState, useEffect } from 'react';
import fetch from "isomorphic-unfetch";
import Layout, {siteTitle} from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'  // css style
import MapView from "../components/mapComp.jsx"
import MapForms from '../components/forms/mapForms.jsx'
import Info from '../components/info.jsx'
import sortAndFilter from '../utils/sortAndFilterFunctions.js'
import { optionalAuth } from "../utils/ssr";

export const getServerSideProps = optionalAuth;

export default function Map(props){
	const user=props.user
	debugger
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{company,street,block,size,price,priceType}, setStreetBlock] = useState(
		{ company:'Any',street:'Any', block:'Any', size:'Any', price:'Any Price', priceType:'total' }
	);

	const filter = (company,street,block,size,price,priceType) => { 
		setStreetBlock({company,street,block,size,price,priceType}); 
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
		setRefinedData( sortAndFilter(houses,company,street,block,size,price,priceType,'none') );
	}, [initList, company, street, block, size, price, priceType]);

    return (
       <Layout map user={user}>
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
