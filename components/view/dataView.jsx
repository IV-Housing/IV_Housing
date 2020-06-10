// dataView.jsx

import utilStyles from '../../styles/utils.module.css'
import CardView from './cardView.jsx'
import TableView from './tableView.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

export default function DataView(props) {
	console.log(props.data.length);
	return (
		<div className={utilStyles.view}>
			<div className={utilStyles.viewButtons}>
				<button onClick={props.toggleTable} id='tableButton' className={utilStyles.tableButton}>Table View</button>
				<button onClick={props.toggleCard} id='cardButton' className={utilStyles.cardButton}>Card View</button>
			</div>
			<div className={utilStyles.viewContent}>
				{props.data.length==0 &&
					<div className={utilStyles.viewContentEmpty}>
						<p>No houses available with selected filters</p>
						<FontAwesomeIcon className={utilStyles.viewContentIcon} icon={faSadTear}/>
					</div>
				}
				{props.chosenView=='table' && props.data.length>0 && <TableView data={props.data}/>}
				{props.chosenView=='card' && props.data.length>0 && <CardView data={props.data}/>}
			</div>
		</div>
	);
}
