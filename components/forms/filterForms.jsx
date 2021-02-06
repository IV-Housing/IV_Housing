// filterForms.jsx

import utilStyles from '../../styles/utils.module.css'

class FilterForms extends React.Component {
	constructor(props) {
		super(props)
		this.state = {company: 'Any', block:'Any', street:'Any', size:'Any', price:'Any Price', priceType:'total', avail: 'available'}
		this.companyChange = this.companyChange.bind(this)
		this.streetChange = this.streetChange.bind(this)
		this.blockChange = this.blockChange.bind(this)
		this.sizeChange = this.sizeChange.bind(this)
		this.priceChange = this.priceChange.bind(this)
		this.selPriceCahnge = this.selPriceCahnge.bind(this)
		this.availChange = this.availChange.bind(this)
	}
	companyChange(event) {
		this.state.company = event.target.value
		this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
	}
	streetChange(event) {
		this.state.street = event.target.value
		this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
	}
	blockChange(event) {
		this.state.block = event.target.value
		this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
	}
	sizeChange(event) {
		this.state.size = event.target.value
		this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
	}
	priceChange(event) {
		this.state.price = event.target.value
		this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
	}
	selPriceCahnge(event) {
		this.setState({priceType: event.target.value,price:'Any Price'},()=>{
			this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
		})

	}
	availChange(event){
		this.state.avail = event.target.value
		this.props.filter(this.state.company,this.state.street,this.state.block,this.state.size,this.state.price,this.state.priceType,this.state.avail)
	}
	render() {
		let priceType=this.state.priceType
		let selTotalMap=['Any Price','0-2000','2000-4000','4000-6000','6000-8000','8000-10000','10000+']
		let selPerMap=['Any Price','0-700','700-800','800-900','900-1000','1000-1100','1100-1200','1200+']
		let listOpts
		if (priceType==='total') listOpts = selTotalMap
		else listOpts = selPerMap

		return (
			<div className={utilStyles.formSelects}>
				<h2>Filter Listings</h2>
				<select id="companySelect" defaultValue="default" onChange={this.companyChange}>
					<option value = "Any">Any Company</option>
                    <option value = "Subleaser">Subleaser</option>
                    <option value = "KAMAP">KAMAP</option>
					<option value = "The Koto Group">The Koto Group</option>
					<option value = "Meridian Group">Meridian Group</option>
                    <option value = "Playa Life IV">Playa Life IV</option>
                    <option value ="Wolfe and Associates">Wolfe and Associates</option>
				</select>

				<select id="streetSelect" defaultValue="default" onChange={this.streetChange}>
					<option value = "Any">Any Street</option>
					<option value = "Cervantes Rd.">Cervantes Rd.</option>
					<option value = "El Greco Rd.">El Greco Rd.</option>
					<option value = "Picasso Rd.">Picasso Rd.</option>
					<option value = "Segovia Rd.">Segovia Rd.</option>
					<option value = "Cordoba Rd.">Cordoba Rd.</option>
					<option value = "Pardall Rd.">Pardall Rd.</option>
					<option value = "Madrid Rd.">Madrid Rd.</option>
					<option value = "Seville Rd.">Seville Rd.</option>
					<option value = "Trigo Rd.">Trigo Rd.</option>
					<option value = "El Nido Ln.">El Nido Ln.</option>
					<option value = "Sabado Tarde Rd.">Sabado Tarde Rd.</option>
					<option value = "Del Playa Dr.">Del Playa Dr.</option>
					<option value = "El Colegio Rd.">El Colegio Rd.</option>
					<option value = "Abrego Rd.">Abrego Rd.</option>
					<option value = "Sueno Rd.">Sueno Rd.</option>
					<option value = "Pasado Rd.">Pasado Rd.</option>
					<option value = "Estero Rd.">Estero Rd.</option>
					<option value = "Fortuna Rd.">Fortuna Rd.</option>
					<option value = "Embarcadero Del Norte">Embarcadero Del Norte</option>
					<option value = "Embarcadero Del Mar">Embarcadero Del Mar</option>
					<option value = "Camino Del Pescadero">Camino Del Pescadero</option>
					<option value = "Camino Del Sur">Camino Del Sur</option>
					<option value = "Camino Corto">Camino Corto</option>
					<option value = "Camino Lindo">Camino Lindo</option>
				</select>

				<select id="blockSelect" defaultValue="default" onChange={this.blockChange}>
					<option value = "Any">Any Block</option>
					<option value = "65"> 65 Block </option>
					<option value = "66"> 66 Block </option>
					<option value = "67"> 67 Block </option>
					<option value = "68"> 68 Block </option>
				</select>

				<select id="sizeSelect" defaultValue="default" onChange={this.sizeChange}>
					<option value = "Any">Any Size</option>
					<option value = "1">for 1 person</option>
					<option value = "2">for 2 people</option>
					<option value = "3">for 3 people</option>
					<option value = "4">for 4 people</option>
					<option value = "5">for 5 people</option>
					<option value = "6">for 6 people</option>
					<option value = "7">for 7 people</option>
					<option value = "8">for 8 people</option>
					<option value = "9">for 9 people</option>
					<option value = "10+">for 10+ people</option>
				</select>
				
				<select id="priceSelect" defaultValue="default" onChange={this.priceChange}>
					{listOpts.map(item=>{
						let dollarSign='';
						if (item!='Any Price') dollarSign = '$';
						return <option value={item} key={item}>{dollarSign}{item}</option>
					})}
				</select>
				<div className={utilStyles.radioSelect}>
					<label><input type="radio" name="price" value="total" onChange={this.selPriceCahnge} checked={priceType==='total'} />Total Price</label>
					<label>	<input type="radio" name="price" value="per" onChange={this.selPriceCahnge} checked={priceType==='per'} />Price Per Person</label>
				</div>

				<select id="availSelect" defaultValue="default" onChange={this.availChange}>
					<option value = 'available'>Available</option>
                    <option value = 'not available'>Not Available</option>
                    <option value = 'any'>Any Availabality</option>
				</select>
			</div>
		);
	}
}

export default FilterForms
