// index.jsx
import React, { useState, useEffect } from 'react';
import fetch from "isomorphic-unfetch";
import utilStyles from '../styles/utils.module.css'  // css style
import Layout, {siteTitle} from '../components/layout.js'
import IndexForms from '../components/forms/indexForms.jsx'
import DataView from '../components/view/dataView.jsx'
import Info from '../components/info.jsx'

export default function Index(){
	const [initList, setInitList] = useState([]);  // houses data
	const [refinedData, setRefinedData] = useState([]);
	const [{street, block,  size, price, priceType}, setStreetBlock] = useState({street:'Any', block:'Any', size:'Any', price:'Any Price', priceType:'total'});
	const [direction, setDirection] = useState("ascending");
	const [view, setView] = useState('table');

	const filter = (street,block,size,price,priceType)=>{ setStreetBlock({street,block,size,price,priceType}); }
	const sortByPrice = (direction)=>{ setDirection(direction); }
	const toggleTable = ()=>{ setView('table'); }
	const toggleCard = ()=>{ setView('card'); }

	useEffect(() => { if(initList.length===0) getList(); });
	const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
		setRefinedData(data);
	}
	useEffect(() => {
		let houses = [...initList];
		let s = document.getElementById('streetSelect');  // all of this is for showing if filter is active
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

		if (priceType==='total') {
			if (direction=="ascending") houses.sort((h1,h2)=>{ return (h1['totalPrice'])-(h2['totalPrice']); });
			else if (direction=="descending") houses.sort((h1,h2)=>{ return (h2['totalPrice'])-(h1['totalPrice']); });
		} else {
			if (direction=="ascending") houses.sort((h1,h2)=>{ return (h1['totalPrice']/h1['size'])-(h2['totalPrice']/h2['size']); });
			else if (direction=="descending") houses.sort((h1,h2)=>{ return (h2['totalPrice']/h2['size'])-(h1['totalPrice']/h1['size']); });
		}

		setRefinedData(houses);
	}, [initList, street, block,  size, price, priceType, direction]);
	
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
