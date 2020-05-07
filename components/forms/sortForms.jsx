// sortForms.jsx

import utilStyles from '../../styles/utils.module.css'
import HouseTable from '../table.jsx'

export default function SortForms(props) {
	let data = props.list;

	const sortByPrice = () => {
		const direction = document.getElementById("sort-directions");
		const chosenDirection = direction.options[direction.selectedIndex].value;
		sortByAttributePricePerPerson(chosenDirection);
	}

	const sortByAttributePricePerPerson = (direction) => {
		const tableData = document.getElementById("house-table-data");  // get the json object from table body
		let sortedData;
		let dataHtml = '';

		if (direction=="ascending") sortedData=data.sort((h1,h2)=>{ return (h1['totalPrice']/h1['size'])-(h2['totalPrice']/h2['size']); });
		else if (direction=="descending") sortedData=data.sort((h1,h2)=>{ return (h2['totalPrice']/h2['size'])-(h1['totalPrice']/h1['size']) });
		else { alert("Choose a Sort direction"); return; }

		for (let h of sortedData) {
			dataHtml += `<tr><td>${h.company}</td><td><a href=${h.website}>${h.address}</a></td>\
				<td>${h.size}</td><td>$${h.totalPrice}</td><td>$${(h.totalPrice/h.size).toFixed(2)}</td><td>${h.phone}</td>`;
		}
		tableData.innerHTML = dataHtml;
	}


	const sortByAttribute = (attribute,direction) => {
		// general function to sort by attribute in given direction (ascending/descending)
		// NOTE: this function will not work for sorting by price per person since price per person
			// is a calculated value (totalPrice/size) rather than an attribute

		const tableData = document.getElementById("house-table-data");  // get the json object from table body
		let sortedData;  // variable to hold sorted json object
		let dataHtml = '';  // turns sortedData into html table

		if (direction=="ascending") sortedData=data.sort((h1,h2)=>{ return h1[attribute]-h2[attribute]; });
		else if (direction=="descending") sortedData=data.sort((h1,h2)=>{ return h2[attribute]-h1[attribute]; });
		else { alert("Choose a Sort direction"); return; }
			// NOTE: h1[attribute]-h2[attribute] returns 1 if h1>h2 (for attribute), -1 if h1<h2, and 0 if equal

		for (let h of sortedData) {
			dataHtml += `<tr><td>${h.company}</td><td><a href=${h.website}>${h.address}</a></td>\
				<td>${h.size}</td><td>$${h.totalPrice}</td><td>$${(h.totalPrice/h.size).toFixed(2)}</td><td>${h.phone}</td>`;
		}
		tableData.innerHTML = dataHtml;
	}

	return (
		<div className={utilStyles.formSelects}>
			<label>Sort Price From:</label>
			<select id="sort-directions" onChange={sortByPrice} defaultValue="default">
				<option value="default">Unsorted</option>
				<option value="ascending">Lowest to Highest</option>
				<option value="descending">Highest to Lowest</option>
			</select>
		</div>
	);
}
