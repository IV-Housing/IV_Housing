// cardView.jsx

import utilStyles from '../../styles/utils.module.css'
import Card from './card.jsx'

export default function CardView(props) {
	return (
		<div className={utilStyles.cardView}>
			{ props.data.map((house)=>(<Card key={house._id} h={house}/>)) }
		</div>
	);
}
