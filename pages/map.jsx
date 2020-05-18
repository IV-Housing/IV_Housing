import React, { useState, useEffect } from 'react';
import Head from 'next/head'  
import fetch from "isomorphic-unfetch";
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import utilStyles from '../styles/utils.module.css'  // css style
import MapView from "../components/mapComp.jsx"

export default function Map(){
    const [initList, setInitList] = useState([]);  // houses data

    useEffect(() => { if(initList.length===0) getList();});

    const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
	}

	const addLatLng = async () => {
		// initlist.map(house => (
		//   if(!house.lat){
		// 	newAddr = house.address.substr(0,house.address.indexOf("#"));
		// 	console.log(newAddr);
		// 	opencage.geocode({q: newAddr}).then(data => {
		// 		if (data.status.code == 200) {
		// 		  if (data.results.length > 0) {
		// 			  var place = data.results[0];
		// 			  console.log(place.geometry.lat);
		// 			  console.log(place.geometry.lng);
		// 		  }
		// 		} else if (data.status.code == 402) {
		// 		  console.log('hit free-trial daily limit');
		// 		} else {
		// 		  console.log('error', data.status.message);
		// 		}
		// 	}).catch(error => {
		// 	  console.log('error', error.message);
		// 	}); 
		//   }
		// ));
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
					<MapView list={initList}/>
				</div>
			</div>
			<Footer/>
		</Layout>
	);
}