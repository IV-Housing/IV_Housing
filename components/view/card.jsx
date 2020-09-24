// card.jsx

import utilStyles from '../../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPhone, faEnvelope, faStickyNote  } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
	return (
		<div className={utilStyles.card}>
			<div className={utilStyles.cardHeader}>
				<div id={utilStyles.cardHeaderTitle}>{props.h.address} &nbsp;▶&nbsp; {props.h.company}</div>
				<div id={utilStyles.cardHeaderSubTitle}>${props.h.totalPrice} total</div>
			</div>
			<div id={utilStyles.cardBody}>
				<div id={utilStyles.cardInfo}>
					<div id={utilStyles.cardPrice}><span className={utilStyles.icon}>${(props.h.totalPrice/props.h.size).toFixed(2)}</span>approximately per person</div>
					<div><FontAwesomeIcon icon={faBed} className={utilStyles.icon}/>Suitable for {props.h.size} people</div>
					<div><FontAwesomeIcon icon={faPhone} className={utilStyles.icon}/>Contact at {props.h.phone}</div>
					<div><FontAwesomeIcon icon={faEnvelope} className={utilStyles.icon}/>{props.h.email}</div>
					<div className={utilStyles.cardNotesBox}><FontAwesomeIcon icon={faStickyNote} className={utilStyles.icon}/><pre className={utilStyles.cardNotes}>{props.h.notes}</pre></div>
				</div>
				<a href={props.h.website}><button>More Info.</button></a>
			</div>
		</div>
	);
}
