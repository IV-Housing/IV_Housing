// sortForms.jsx

import utilStyles from '../../styles/utils.module.css'
import data from '../../data/houses.json'
import HouseTable from '../table.jsx'

export default function SortForms() {
	return (
		<div className={utilStyles.formSelects}>
			<label>Sort Price From:</label>
			<select id="price-values" onChange={sortByPrice} defaultValue="default">
				<option value="default">Unsorted</option>
				<option value="ascending">Lowest to Highest</option>
				<option value="descending">Highest to Lowest</option>
			</select>
		</div>
	);
}

function sortByPrice() {
	const direction = document.getElementById("price-values");
	const chosenDirection = direction.options[direction.selectedIndex].value;
	sortByAttribute('pricePerPerson',chosenDirection);
}

function sortByAttribute(attribute,direction) {
	// general function to sort by attribute in given direction (ascending/descending)
	
	const tableData = document.getElementById("house-table-data");  // get the json object from table body
	let sortedData;  // variable to hold sorted json object
	let dataHtml = '';  // turns sortedData into html table

	if (direction=="ascending") { sortedData = data.sort((h1,h2) => {
			if (h1[attribute]>h2[attribute]) return 1;
			else if (h1[attribute]<h2[attribute]) return -1;
			else return 0;
		});
	} else if (direction=="descending") { sortedData = data.sort((h1,h2) => {
			if (h1[attribute]<h2[attribute]) return 1;
			else if (h1[attribute]>h2[attribute]) return -1;
			else return 0;
		});
	} else { alert("Choose a Sort direction"); return; }

	for (let h of sortedData) {
		dataHtml += `<tr><td>${h.address}</td><td>${h.size}</td><td>${h.totalPrice}</td><td>${h.pricePerPerson}</td>
			<td><a href={h.website}>${h.website}></a></td><td>${h.phone}</td>`;
	}
	tableData.innerHTML = dataHtml;
}
