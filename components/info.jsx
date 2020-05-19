// info.jsx

import utilStyles from '../styles/utils.module.css'

export default function Info() {
	return (
		<div className={utilStyles.info}>
			<p>*Price per person is calculated using total price and housing size so may vary depending on room arrangements</p>
			<a href="https://github.com/orgs/ucsb-cs48-s20/teams/s0-t3-iv-housing/members">Developers</a>
			<div id={utilStyles.copywright}>UCSB-cs48-s0-t3 &copy; 2020</div>
		</div>
	);
}
