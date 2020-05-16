// cardView.jsx

import utilStyles from '../../styles/utils.module.css'

export default function CardView(props) {
	return (
		<div className={utilStyles.cardView}>
			{
				props.data.map(h => (
					<div className={utilStyles.card}>
						<div className={utilStyles.cardHeader}>
							<div id={utilStyles.cardHeaderTitle}>{h.address} &nbsp;▶&nbsp; {h.company}</div>
							<div id={utilStyles.cardHeaderSubTitle}>${h.totalPrice} total</div>
						</div>
						<div id={utilStyles.cardBody}>
							<div id={utilStyles.cardInfo}>
								<div id={utilStyles.cardPrice}><span className={utilStyles.icon}>${(h.totalPrice/h.size).toFixed(2)} </span>&nbsp;approximately per person</div>
								<div><span className={utilStyles.icon}>🛏️ </span>&nbsp;Suitable for {h.size} people</div>
								<div><span className={utilStyles.icon}>☎️ &nbsp;</span>&nbsp;Contact at {h.phone}</div>
							</div>
							<a href={h.website}><button>More Info.</button></a>
						</div>
					</div>
				))
			}
		</div>
	);
}
