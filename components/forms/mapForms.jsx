// forms.jsx

import utilStyles from '../../styles/utils.module.css'
import FilterForms from './filterForms.jsx'

export default function MapForms(props) {
	return (
		<div className={utilStyles.mapForms}>
			<h2 className={utilStyles.compHead}>Filter Results</h2>
   			 <p className={utilStyles.compContent}>Here you can refine the details to find the perfect listing!</p>
			<div><FilterForms filter={props.filter}/></div>
		</div>
	);
}