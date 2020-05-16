// tableView.jsx

import React, { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

export default function TableView(props){
	return(
		<div className={utilStyles.pageContainer}>
			<table id="house-table">
			<thead>
				<tr>
					<th>Housing Company</th>
					<th>Address</th>
					<th>Size</th>
					<th>Total Price</th>
					<th>Price Per Person*</th>
					<th>Phone Number</th>
				</tr>
			</thead>
			<tbody id="house-table-data">
				{
					props.data.map(house =>(
						<tr>
							<td>{house.company}</td>
							<td><a href={house.website}>{house.address}</a></td>
							<td>{house.size}</td>
							<td>${house.totalPrice}</td>
							<td>${(house.totalPrice/house.size).toFixed(2)}</td>
							<td>{house.phone}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	)
}
