// sortForms.jsx

import utilStyles from '../../styles/utils.module.css'
import HouseTable from '../table.jsx'

class SortForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {chosenDirection:'default'}
		this.sortChange = this.sortChange.bind(this)
	}
	sortChange(event) {
		this.state.chosenDirection = event.target.value
		this.props.sortByPrice(this.state.chosenDirection);
	}

	render() {
		return (
			<div className={utilStyles.formSelects}>
				<label>Sort Price From:</label>
				<select id="sort-directions" defaultValue="default" onChange={this.sortChange}>
					<option value="default">Unsorted</option>
					<option value="ascending">Lowest to Highest</option>
					<option value="descending">Highest to Lowest</option>
				</select>
			</div>
		);
	}
}

export default SortForms;
