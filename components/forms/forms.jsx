// forms.jsx

import utilStyles from '../../styles/utils.module.css'
import FilterForms from './filterForms.jsx'
import SortForms from './sortForms.jsx'

export default function Forms() {
	return (
		<div className={utilStyles.forms}>
			<h2>Filter Results</h2>
			<p>Here you can refine the details to find the perfect listing!</p>
			<div><FilterForms/></div>
			<div><SortForms/></div>
		</div>
	);
}
