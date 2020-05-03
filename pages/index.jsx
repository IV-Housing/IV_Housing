import React from 'react'
import HouseTable from '../components/table.jsx'

export default function Index() {
	let data = {}
	return (
		<div className="page-container">
			<h1>House List</h1>
			<HouseTable data = {data}/>
		</div>
	)
}
