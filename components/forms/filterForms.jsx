// filterForms.jsx

import utilStyles from '../../styles/utils.module.css'
import data from '../../data/houses.json'
import HouseTable from '../table.jsx'

class FilterForms extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleChange2 = this.handleChange2.bind(this)
	}
	handleChange(event) {
		const target = event.target
		const value = target.value
		const name = target.name
		this.props.filter(value,name)
	}
	handleChange2(event) {
		const target = event.target
		const value = target.value
		const name = target.name
		this.props.filter2(value,name)
	}
	render(){
		return (
			<div className={utilStyles.formSelects}>
				<label>Choose a Street:</label>
				<select id="street-values" defaultValue="default" onChange={this.handleChange}>
					<option value = "Any"> Any </option>
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
					<option value = "Del Playa Rd.">Del Playa Rd.</option>
					<option value = "El Cologio Rd.">El Cologio Rd.</option>
					<option value = "Abrego Rd.">Abrego Rd.</option>
					<option value = "Sueno Rd.">Sueno Rd.</option>
					<option value = "Pasado Rd.">Pasado Rd.</option>
					<option value = "Estero Rd.">Estero Rd.</option>
					<option value = "Estero Rd.">Fortuna Rd.</option>
					<option value = "Embarcadero Del Norte">Embarcadero Del Norte</option>
					<option value = "Embarcadero Del Mar">Embarcadero Del Mar</option>
					<option value = "Camino Del Pescadero">Camino Del Pescadero</option>
					<option value = "Camino Del Sur">Camino Del Sur</option>
					<option value = "caminocoCamino Cortorto">Camino Corto</option>
					<option value = "Camino Lindo">Camino Lindo</option>
				</select>
	
				<label>Choose a Block:</label>
				<select id="block-values" defaultValue="default" onChange={this.handleChange2}>
					<option value = "Any">Any</option>
					<option value = "65"> 65 Block </option>
					<option value = "66">  66 Block </option>
					<option value = "67"> 67 Block </option>
					<option value = "68"> 68 Block </option>
				</select>
			</div>
		)
	}
}
export default FilterForms

// export default function FilterForms(props) {
// 	return (
// 		<div className={utilStyles.formSelects}>
// 			<label>Choose a Street:</label>
// 			<select id="street-values" defaultValue="default" onChange={props.filter}>
// 				<option value = "default"> Any </option>
// 				<option value = "cervantes">Cervantes Rd.</option>
// 				<option value = "elgreco">El Greco Rd.</option>
// 				<option value = "picasso">Picasso Rd.</option>
// 				<option value = "segovia">Segovia Rd.</option>
// 				<option value = "cordoba">Cordoba Rd.</option>
// 				<option value = "pardall">Pardall Rd.</option>
// 				<option value = "madrid">Madrid Rd.</option>
// 				<option value = "seville">Seville Rd.</option>
// 				<option value = "trigo">Trigo Rd.</option>
// 				<option value = "elnido">El Nido Ln.</option>
// 				<option value = "sabadotarde">Sabado Tarde Rd.</option>
// 				<option value = "delplaya">Del Playa Dr.</option>
// 				<option value = "elcolegio">El Cologio Rd.</option>
// 				<option value = "abrego">Abrego Rd.</option>
// 				<option value = "sueno">Sueno Rd.</option>
// 				<option value = "pasado">Pasado Rd.</option>
// 				<option value = "estero">Estero Rd.</option>
// 				<option value = "fortuna">Fortuna Rd.</option>
// 				<option value = "embarcaderodelnorte">Embarcadero Del Norte</option>
// 				<option value = "embarcaderodelmar">Embarcadero Del Mar</option>
// 				<option value = "caminodelpescadero">Camino Del Pescadero</option>
// 				<option value = "caminodelsur">Camino Del Sur</option>
// 				<option value = "caminocorto">Camino Corto</option>
// 				<option value = "caminolindo">Camino Lindo</option>
// 			</select>

// 			<label>Choose a Block:</label>
// 			<select id="block-values" defaultValue="default">
// 				<option value = "default">Any</option>
// 				<option value = "five"> 65 Block </option>
// 				<option value = "six">  66 Block </option>
// 				<option value = "seven"> 67 Block </option>
// 				<option value = "eight"> 68 Block </option>
// 			</select>
// 		</div>
// 	);
// }


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "default") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

