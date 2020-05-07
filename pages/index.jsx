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
	const [list, setList] = useState([]);
	const [filterData, setFilterData] = useState([]);
	useEffect(() => {
		if(list.length===0){
			getList();
		}
	});
	const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setList(data);
		setFilterData(data);
	}
  // useEffect(() => {
	// 	setFilterData(list);
	// });
	const filter = (street,block) => {
		let houses = list;
		console.log(list);
		if(street!=='Any'){
			houses = houses.filter(item=>{
			 return item.address.indexOf(street)!==-1
		 })
	 }
		 if(block!=='Any'){
			 houses = houses.filter(item=>{
				return item.address.substr(0,2) === block
			})
		 }
 		setFilterData(houses);
	}

	// const filter2 = (value,name) => {
	// 	if(value=='Any'){
	// 		 setFilterData(list);
	// 	}else{
	// 		 setFilterData(list.filter(item=>{
	// 			return item.address.substr(0,2) === value;
	// 		}))
	// 	}
	// }
    return(
			<Layout index>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<Navbar></Navbar>
				<div className={utilStyles.container}>
					<h1 className={utilStyles.searchH1}>Search Listings</h1>
					<div className={utilStyles.indexDivs}>
						<Forms list = {list} filter={filter}/>
						<HouseTable list ={filterData}/>
					</div>
				<p className={utilStyles.parts}>Price per person is calculated by taking total price and dividing it by housing size. Therefore the actual price per person could change depending on individual room sizes. </p>
				<h2 className={utilStyles.notFindingText}>Not finding the right place? Narrowing down your filters often helps more preffered listings come to the top!</h2>
			</div>
		  <Footer/>
			</Layout>
   )
}
