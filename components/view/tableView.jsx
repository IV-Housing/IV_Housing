// tableView.jsx

import React, { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

export default function TableView(props){
	return(
		<div className={utilStyles.tableView}>
			<hr id={utilStyles.line}/>
			<table className={utilStyles.table}>
				<thead>
					<tr>
						<th>Address</th>
						<th>Housing Company</th>
						<th>Size</th>
						<th>Total Price</th>
						<th>Price Per Person*</th>
					</tr>
				</thead>
				<tbody>
					{
						props.data.map(house =>(
							<tr>
								<td><a href={house.website}>{house.address}</a></td>
								<td>{house.company}</td>
								<td>{house.size}</td>
								<td>${house.totalPrice}</td>
								<td>${(house.totalPrice/house.size).toFixed(2)}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}
