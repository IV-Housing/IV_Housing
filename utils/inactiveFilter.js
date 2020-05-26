// inactiveFilter.js

import utilStyles from '../styles/utils.module.css'

export function markInactiveFilter(element) {
	if (element.classList.contains(utilStyles['active'])) element.classList.toggle(utilStyles['active']);
}
