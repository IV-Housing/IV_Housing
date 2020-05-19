// card.jsx

import utilStyles from '../../styles/utils.module.css'

export default function Card(props) {
	return (
		<div className={utilStyles.card}>
			<div className={utilStyles.cardHeader}>
				<div id={utilStyles.cardHeaderTitle}>{props.h.address} &nbsp;▶&nbsp; {props.h.company}</div>
				<div id={utilStyles.cardHeaderSubTitle}>${props.h.totalPrice} total</div>
			</div>
			<div id={utilStyles.cardBody}>
				<div id={utilStyles.cardInfo}>
					<div id={utilStyles.cardPrice}><span className={utilStyles.icon}>${(props.h.totalPrice/props.h.size).toFixed(2)} </span>&nbsp;approximately per person</div>
					<div><span className={utilStyles.icon}>🛏️ </span>&nbsp;Suitable for {props.h.size} people</div>
					<div><span className={utilStyles.icon}>☎️ &nbsp;</span>&nbsp;Contact at {props.h.phone}</div>
				</div>
				<a href={props.h.website}><button>More Info.</button></a>
			</div>
		</div>
	);
}
