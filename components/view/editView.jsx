import utilStyles from '../../styles/utils.module.css'
import EditCard from './editCard.jsx'

export default function EditView(props) {
	return (
		<div className={utilStyles.editView}>
			{ props.data.map((house)=>(<EditCard user={props.user} key={house._id} h={house}/>)) }
		</div>
	);
}