// filterForms.jsx

import utilStyles from '../../styles/utils.module.css'

export default function FilterForms() {
	return (
		<div className={utilStyles.formSelects}>
			<label>Choose a Street:</label>
			<select id="street-values">
				<option value = "default" selected> Any </option>
				<option value = "cervantes">Cervantes Rd.</option>
				<option value = "elgreco">El Greco Rd.</option>
				<option value = "picasso">Picasso Rd.</option>
				<option value = "segovia">Segovia Rd.</option>
				<option value = "cordoba">Cordoba Rd.</option>
				<option value = "pardall">Pardall Rd.</option>
				<option value = "madrid">Madrid Rd.</option>
				<option value = "seville">Seville Rd.</option>
				<option value = "trigo">Trigo Rd.</option>
				<option value = "elnido">El Nido Ln.</option>
				<option value = "sabadotarde">Sabado Tarde Rd.</option>
				<option value = "delplaya">Del Playa Dr.</option>
				<option value = "elcolegio">El Cologio Rd.</option>
				<option value = "abrego">Abrego Rd.</option>
				<option value = "sueno">Sueno Rd.</option>
				<option value = "pasado">Pasado Rd.</option>
				<option value = "estero">Estero Rd.</option>
				<option value = "fortuna">Fortuna Rd.</option>
				<option value = "embarcaderodelnorte">Embarcadero Del Norte</option>
				<option value = "embarcaderodelmar">Embarcadero Del Mar</option>
				<option value = "caminodelpescadero">Camino Del Pescadero</option>
				<option value = "caminodelsur">Camino Del Sur</option>
				<option value = "caminocorto">Camino Corto</option>
				<option value = "caminolindo">Camino Lindo</option>
			</select>

			<label>Choose a Block:</label>
			<select id="block-values">
				<option value = "default" selected>Any</option>
				<option value = "five"> 65 Block </option>
				<option value = "six">  66 Block </option>
				<option value = "seven"> 67 Block </option>
				<option value = "eight"> 68 Block </option>
			</select>
		</div>
	);
}
