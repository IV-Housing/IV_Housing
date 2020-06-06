// forms.jsx

import utilStyles from '../../styles/utils.module.css'
import FilterForms from './filterForms.jsx'

export default function MapForms(props) {
	return (
		<div className={utilStyles.mapForms}>
			<div className={utilStyles.forms}>
				<h2 className={utilStyles.compHead}>Filter Results</h2>
				<div><FilterForms filter={props.filter}/></div>
			</div>
		</div>
	);
}
