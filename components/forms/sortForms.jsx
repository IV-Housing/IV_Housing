// sortForms.jsx
import utilStyles from '../../styles/utils.module.css'

class SortForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {chosenDirection:'anyTotal'}
		this.sortChange = this.sortChange.bind(this)
	}
	sortChange(event) {
		this.state.chosenDirection = event.target.value
		this.props.sortByPrice(this.state.chosenDirection);
	}

	render() {
		return (
			<div className={utilStyles.formSelects}>
				<select id="sortSelectTotal" defaultValue="anyTotal" onChange={this.sortChange}>
					<option value="anyTotal">By Total Price</option>
					<option value="ascendingTotal">Price Low to High</option>
					<option value="descendingTotal">Price High to Low</option>
				</select>
				<select id="sortSelectPer" defaultValue="anyPerPerson" onChange={this.sortChange}>
					<option value="anyPerPerson">By Price Per Person</option>
					<option value="ascendingPer">Price Low to High</option>
					<option value="descendingPer">Price High to Low</option>
				</select>
			</div>
		);
	}
}

export default SortForms;
