import fetch from "isomorphic-unfetch";
import React, { useState, useEffect } from 'react';

export default function HouseTable(){
	const [list, setList] = useState([]);
	useEffect(() => {
		if(list.length===0){
			getList();
		}
	});
	const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setList(data);
	}
	return(
		<table>
			<thead>
				<tr>
					<th>Housing Company</th>
					<th>Address</th>
					<th>Size</th>
					<th>Total Price</th>
					<th>Price Per Person</th>
					<th>Phone Number</th>
				</tr>
			</thead>
			<tbody>
				{
					list.map(row =>(
						<tr>
							<td>{row.company}</td>
							<td><a href={row.website}>{row.address}</a></td>
							<td>{row.size}</td>
							<td>{row.totalPrice}</td>
							<td>{row.totalPrice/row.size}</td>
							<td>{row.phone}</td>
						</tr>
					)) 
				}
				
			</tbody>
		</table>
	)
}
