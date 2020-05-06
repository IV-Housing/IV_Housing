// index.jsx

import React from 'react'  // for Next.js
import Head from 'next/head'  // for Next.js
import utilStyles from '../styles/utils.module.css'  // css style
import data from '../data/houses.json'
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import HouseTable from '../components/table.jsx'
import Forms from '../components/forms/forms.jsx'

export default function Index() {
	constructor(props) {
	  super(props);
	  this.state = {
		data:data
	  };
	  this.filter = this.filter.bind(this);
	  this.filter2 = this.filter2.bind(this);
	}
	filter(value,name){
		if(value=='Any'){
			this.setState({
				data:data
			})
		}else{
			let filterData=data.filter(item=>{
				return item.address.indexOf(value)!==-1
			})
			this.setState({
				data:filterData
			})
		}
	}
	filter2(value,name){
		if(value=='Any'){
			this.setState({
				data:data
			})
		}else{
			let filterData=data.filter(item=>{
				return item.address.split(' ')[0].slice(0,2).indexOf(value)!==-1
			})
			this.setState({
				data:filterData
			})
		}
	}
	render() {
		return (
			<Layout index>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<Navbar></Navbar>
	
				<div className={utilStyles.container}>
					<h1 className={utilStyles.searchH1}>Search Listings</h1>
					<div className={utilStyles.indexDivs}>
						<Forms filter={this.filter} filter2={this.filter2}/>
						<HouseTable data={this.state.data}/>
					</div>
				<p classname={utilStyles.parts}>Price per person is calculated by taking total price and dividing it by housing size. Therefore the actual price per person could change depending on individual room sizes. </p> 
				<h2 className={utilStyles.notFindingText}>Not finding the right place? Narrowing down your filters often helps more preffered listings come to the top!</h2>
			</div>
			<Footer/>
		</Layout>
	)
}
