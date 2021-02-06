// card.jsx

import utilStyles from '../../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPhone, faEnvelope, faStickyNote, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
	return (
		<div className={utilStyles.card}>
			<div className={utilStyles.cardHeader}>
				<div id={utilStyles.cardHeaderTitle}>{props.h.addrNum + " " + props.h.addrStreet + " " + props.h.aptNum} &nbsp;▶&nbsp; {props.h.company}</div>
			</div>
			<div id={utilStyles.cardBody}>
				<div id={utilStyles.cardInfo}>
					<div id={utilStyles.cardPrice}>${props.h.totalPrice} total</div>
					<div id={utilStyles.cardPrice}>${(props.h.totalPrice/props.h.size).toFixed(2)} approximate per person</div>
					<div><FontAwesomeIcon icon={faBed} className={utilStyles.icon}/>Suitable for {props.h.size} people</div>
					<div><FontAwesomeIcon icon={faPhone} className={utilStyles.icon}/>Contact at {props.h.phone}</div>
					<div><FontAwesomeIcon icon={faEnvelope} className={utilStyles.icon}/>{props.h.email}</div>
					{props.h.website !== "" && <div><FontAwesomeIcon icon={faGlobe} className={utilStyles.icon}/><a href={props.h.website}>Listing Webpage</a></div>}
					{props.h.notes !=="" && <div className={utilStyles.cardNotesBox}><FontAwesomeIcon icon={faStickyNote} className={utilStyles.icon}/><pre className={utilStyles.cardNotes}>{props.h.notes}</pre></div>}
				</div>
			</div>
		</div>
	);
}
