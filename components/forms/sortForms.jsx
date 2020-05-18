// sortForms.jsx
import utilStyles from '../../styles/utils.module.css'

class SortForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {chosenDirection:'ascending'}
		this.sortChange = this.sortChange.bind(this)
	}
	sortChange(event) {
		this.state.chosenDirection = event.target.value
		this.props.sortByPrice(this.state.chosenDirection);
	}

	render() {
		return (
			<div className={utilStyles.formSelects}>
				<select id="sort-directions" defaultValue="ascending" onChange={this.sortChange}>
					<option value="ascending">Price: Low to High</option>
					<option value="descending">Price: High to Low</option>
				</select>
			</div>
		);
	}
}

export default SortForms;
