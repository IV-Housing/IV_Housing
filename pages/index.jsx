// index.jsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head'  // for Next.js
import fetch from "isomorphic-unfetch";
import utilStyles from '../styles/utils.module.css'  // css style
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import HouseTable from '../components/table.jsx'
import Forms from '../components/forms/forms.jsx'

export default function Index(){
	const [list, setList] = useState([]);  // houses data
	const [filterData, setFilterData] = useState([]);  // houses data after it has been filtered
	const [sortData, setSortData] = useState([]);  // houses data after it has been sorted
	const [recentData, setRecentData] = useState([]);

	useEffect(() => { if(list.length===0) getList(); });

	const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setList(data);
		setFilterData(data);
		setRecentData(data);
	}

	const filter = (street,block) => {  // filter function to pass down to filterForms.jsx using props
		let houses = list;
		console.log(list);
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
 		setFilterData(houses);
		setRecentData(houses);
	}

	const sortByPrice = (direction) => {
		let houses = filterData;
		if (direction=="ascending") houses=houses.sort((h1,h2)=>{ return (h1['totalPrice']/h1['size'])-(h2['totalPrice']/h2['size']); });
		else if (direction=="descending") houses=houses.sort((h1,h2)=>{ return (h2['totalPrice']/h2['size'])-(h1['totalPrice']/h1['size']); });
		else alert("Choose a Sorting Direction");
		// alert(houses[0].totalPrice);
		setSortData(houses);
		setRecentData(houses);
		// alert(recentData[0].totalPrice);
	}

	return (
		<Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>
			<div className={utilStyles.container}>
				<h1 className={utilStyles.searchH1}>Search Listings</h1>
				<div className={utilStyles.indexDivs}>
					<Forms filter={filter} sortByPrice={sortByPrice}/>
					<HouseTable list={recentData}/>
				</div>
				<p className={utilStyles.parts}>Price per person is calculated by taking total price and dividing it by housing size. Therefore the actual price per person could change depending on individual room sizes. </p>
				<h2 className={utilStyles.notFindingText}>Not finding the right place? Narrowing down your filters often helps more preffered listings come to the top!</h2>
			</div>
			<Footer/>
		</Layout>
	);
}
