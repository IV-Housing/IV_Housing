import utilStyles from '../../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function EditCard(props) {
    const updateAvail = async (e)=>{
        console.log(e.target.name);
        await fetch("/api/edit", {
            method: "PUT",
            body: JSON.stringify({
                id: e.target.name,
                availability: e.target.id,
            }),
        });
    }
	return (
		<div className={utilStyles.card}>
			<div className={utilStyles.cardHeader}>
				<div id={utilStyles.cardHeaderTitle}>{props.h.address}</div>
                <div id={utilStyles.cardHeaderSubTitle}>
                    <input type="radio" id="true" name={props.h._id} defaultChecked={props.h.availability} onChange={updateAvail}></input>
                    <label>Available</label>
                    <input type="radio" id="false" name={props.h._id} defaultChecked={!props.h.availability} onChange={updateAvail}></input>
                    <label>Not Available</label>
                </div>
			</div>
			<div id={utilStyles.cardBody}>
				<div id={utilStyles.cardInfo}>
                    <div>${props.h.totalPrice} total</div>
					<div><FontAwesomeIcon icon={faBed} className={utilStyles.icon}/>{props.h.size}</div>
					<div><FontAwesomeIcon icon={faPhone} className={utilStyles.icon}/>{props.h.phone}</div>
                    <div>{props.h.website}</div>
				</div>
			    <a><button>Edit</button></a>
			</div>
		</div>
	);
}