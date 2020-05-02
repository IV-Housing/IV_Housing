// sortForms.jsx

import utilStyles from '../../styles/utils.module.css'

export default function SortForms() {
	return (
		<div className={utilStyles.formSelects}>
			<label>Sort Price From:</label>
			<select id="price-values">
				<option value="ascending" selected>Lowest to Highest</option>
				<option value="descending">Highest to Lowest</option>
			</select>
			<button onClick={sortByPrice}>Sort</button>
		</div>
	);
}

function sortByPrice() {
	const direction = document.getElementById("price-values");
	const chosenDirection = direction.options[direction.selectedIndex].value;
	sortByPriceDirection(chosenDirection);
}

function sortByPriceDirection(direction) {
	const table = document.getElementById("house-table");
	if (direction=="ascending") alert("Sort Price by Lowest to Highest");
	else alert("Sort Price by Highest to Lowest");
}
