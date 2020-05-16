// dataView.jsx

import utilStyles from '../../styles/utils.module.css'
import CardView from './cardView.jsx'
import TableView from './tableView.jsx'

export default function DataView(props) {
	return (
		<div className={utilStyles.view}>
			<button onClick={props.toggleTable} id='tableButton'>Table View</button>
			<button onClick={props.toggleCard} id='cardButton'>Card View</button>
			{props.chosenView=='table' && <TableView data={props.data}/>}
			{props.chosenView=='card' && <CardView data={props.data}/>}
		</div>
	);
}
