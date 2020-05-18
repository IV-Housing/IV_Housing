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
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{street, block,  size, price, priceType}, setStreetBlock] = useState({street:'Any', block:'Any', size:'Any', price:'Any',priceType:'total'});
	const [direction, setDirection] = useState("ascending");

	useEffect(() => { if(initList.length===0) getList(); });

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
		 if(size!=='Any') {
			houses = houses.filter(item=>{
				let tIndex=size.indexOf('+')
				if(tIndex!==-1){
					return item.size > Number(size.substring(0,tIndex))
				}else{
					return item.size === Number(size)
				}
		   })
		}
		 if(price!=='Any') {
			 if(priceType=='total'){
				houses = houses.filter(item=>{
					let tIndex=price.indexOf('+')
					if(tIndex!==-1){
						return item.totalPrice >= Number(price.substring(0,tIndex))
					}else{
						let tarr=price.split('-')
						return item.totalPrice >= Number(tarr[0])&&item.totalPrice < Number(tarr[1])
					}
				})
			 }else{
				houses = houses.filter(item=>{
					let tIndex=price.indexOf('+')
					if(tIndex!==-1){
						return Number((item.totalPrice/item.size).toFixed(2)) >= Number(price.substring(0,tIndex))
					}else{
						let tarr=price.split('-')
						return Number((item.totalPrice/item.size).toFixed(2)) >= Number(tarr[0])&&Number((item.totalPrice/item.size).toFixed(2)) < Number(tarr[1])
					}
				})
			 }
		}

		if (direction=="ascending") houses.sort((h1,h2)=>{ return (h1['totalPrice']/h1['size'])-(h2['totalPrice']/h2['size']); });
		else if (direction=="descending") houses.sort((h1,h2)=>{ return (h2['totalPrice']/h2['size'])-(h1['totalPrice']/h1['size']); });

		setRefinedData(houses);
	}, [initList, street, block,  size, price, priceType, direction]);

	const filter = (street, block,  size, price, priceType) => {  // filter function to pass down to filterForms.jsx using props
		setStreetBlock({street, block,  size, price, priceType});
	}

	const sortByPrice = (direction) => {
		setDirection(direction);
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
					<HouseTable list={refinedData}/>
				</div>
				<p className={utilStyles.parts}>*Price per person is calculated by taking total price and dividing it by housing size. Therefore the actual price per person could change depending on individual room sizes. </p>
				<h2 className={utilStyles.notFindingText}>Not finding the right place? Narrowing down your filters often helps more preffered listings come to the top!</h2>
			</div>
			<Footer/>
		</Layout>
	);
}
