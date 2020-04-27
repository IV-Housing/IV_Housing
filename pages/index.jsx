// index.js
import React from 'react'
import data from './data/houses.json'

export default function Index() {
	return(
	//<h1>House List</h1>
	<table>
		<thead>
			<tr>
				<th>Address</th>
				<th>Size</th>
				<th>Total Price</th>
				<th>Price Per Person</th>
				<th>Website</th>
				<th>Phone Number</th>
			</tr>
		</thead>
		<tbody>
			props.data.map(row =>(
				<tr>
					<td>{row.address}</td>
					<td>{row.size}</td>
					<td>{row.totalPrice}</td>
					<td>{row.pricePerPerson}</td>
					<td>{row.website}</td>
					<td>{row.phone}</td>
				</tr>
			))
		</tbody>
	</table>
	)
}
