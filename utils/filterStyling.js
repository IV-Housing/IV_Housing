// filterStyling.js

import utilStyles from '../styles/utils.module.css'

export function markActiveFilter(element) {
	if (!element.classList.contains(utilStyles['active'])) 
		element.classList.toggle(utilStyles['active']);
}

export function markInactiveFilter(element) {
	if (element.classList.contains(utilStyles['active'])) 
		element.classList.toggle(utilStyles['active']);
}

