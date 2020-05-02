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
		</div>
	);
}
