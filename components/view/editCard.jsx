import utilStyles from '../../styles/utils.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faEnvelope, faPhone, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default function EditCard(props) {
    const [editing, setEditing] = useState(false); 
    const [trash, setTrash] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [required, setRequired] = useState("");
    const [listing, setListing] = useState({
        availability: props.h.availability,
        addrNum: props.h.addrNum, 
        addrStreet: props.h.addrStreet, 
        aptNum: props.h.aptNum, 
        size: props.h.size, 
        totalPrice: props.h.totalPrice,
        website: props.h.website, 
        phone: props.h.phone,
        email: props.h.email
    });
    const [state, setState] = useState({
        availability: props.h.availability,
        addrNum: props.h.addrNum, 
        addrStreet: props.h.addrStreet, 
        aptNum: props.h.aptNum, 
        size: props.h.size, 
        totalPrice: props.h.totalPrice,
        website: props.h.website, 
        phone: props.h.phone,
        email: props.h.email
    });

    const updateAvail = async (e)=>{
        let avail = false;
        if(e.target.id === "true"){
            avail = true;
        }
        setListing({
            availability: avail, 
            addrNum: listing.addrNum, 
            addrStreet: listing.addrStreet, 
            aptNum: listing.aptNum, 
            size: listing.size, 
            totalPrice: listing.totalPrice, 
            website: listing.website, 
            phone: listing.phone,
            email: listing.email
        });
        await fetch("/api/edit", {
            method: "PUT",
            body: JSON.stringify({
                id: e.target.name,
                availability: e.target.id,
            }),
        });
    }

    const switchView = ()=>{
        setEditing(!editing);
        setTrash(false);
    }

    const toggleTrash = ()=>{
        setTrash(!trash);
    }

    const setInfo = ()=>{
        setState({
            availability: listing.availability, 
            addrNum: listing.addrNum, 
            addrStreet: listing.addrStreet, 
            aptNum: listing.aptNum, 
            size: listing.size, 
            totalPrice: listing.totalPrice, 
            website: listing.website, 
            phone: listing.phone,
            email: listing.email
        });
        switchView();
    }

    const submit = ()=>{
        if(state.addrNum === "" || state.size === "" || state.totalPrice === "" || state.phone === ""){
            setRequired("Make sure all required fields are filled in")
        }
        else{
            updateListing();
            let email = state.email;
            if(state.email === ""){
                email = props.user.email;
            }
            setListing({
                availability: state.availability, 
                addrNum: state.addrNum, 
                addrStreet: state.addrStreet, 
                aptNum: state.aptNum, 
                size: state.size, 
                totalPrice: state.totalPrice, 
                website: state.website, 
                phone: state.phone,
                email: email, 
            });
            switchView();
        }
    }

    const updateListing = async ()=>{
        let addr = state.addrNum + " " + state.addrStreet + " " + state.aptNum;
        let addChg = true;
        if(state.addrNum === listing.addrNum && state.addrStreet === listing.addrStreet && state.aptNum === listing.aptNum){
            addChg = false;
        }
        let email = state.email;
        if(state.email === ""){
            email = props.user.email
        }
	    await fetch("/api/edit", {
            method: "POST",
            body: JSON.stringify({
              addrChange: addChg,
              address: addr,
              addrNum: state.addrNum,
              addrStreet: state.addrStreet,
              aptNum: state.aptNum,
              size: state.size,
              totalPrice: state.totalPrice,
              website: state.website,
              phone: state.phone,
              email: email,
              id: props.h._id,
            }),
        });
    }

    const del = ()=>{
        switchView();
        setDeleted(true);
        deleteListing();
    }

    const deleteListing = async ()=>{
        await fetch("/api/edit", {
            method: "DELETE",
            body: JSON.stringify({
                id: props.h._id,
            })
        })
    }

    const handleChange = e => {
        const { id, value} = e.target;
        if(id === "addrNum"){
            setState({ availability: state.availability, addrNum: value, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone, email: state.email });
        }
        else if(id === "addrStreet"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: value, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone, email: state.email });
        }
        else if(id === "aptNum"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: value, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone, email: state.email });
        }
        else if(id === "size"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: value, totalPrice: state.totalPrice, website: state.website, phone: state.phone, email: state.email });
        }
        else if(id === "totalPrice"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: value, website: state.website, phone: state.phone, email: state.email });
        }        
        else if(id === "website"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: value, phone: state.phone, email: state.email });
        }
        else if(id === "phone"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: value, email: state.email });
        }
        else if(id === "email"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone, email: value});
        }
    };

	return (
		<div className={utilStyles.card}>
            {!deleted ? 
                <div>
                {editing ? 
                    <div>
                        <div className={utilStyles.cardHeader}>
                            <div id={utilStyles.cardHeaderSubTitle}>
                                <input type="radio" id="true" name={props.h._id} defaultChecked={listing.availability} onChange={updateAvail}></input>
                                <label>Available</label>
                                <input type="radio" id="false" name={props.h._id} defaultChecked={!listing.availability} onChange={updateAvail}></input>
                                <label>Not Available</label>
                            </div>
                            {trash ? 
                                <div>
                                    <a>Are You Sure?</a>
                                    <a><button onClick={del}>YES</button></a> 
                                    <a><button onClick={toggleTrash}>NO</button></a> 
                                </div>
                                : <a><button onClick={toggleTrash}><FontAwesomeIcon icon={faTrashAlt} className={utilStyles.icon}/></button></a>}
                        </div>
                        <div id={utilStyles.cardBody}>
                            <div id={utilStyles.cardInfo}>
                                <label htmlfor="addressNumber" className={utilStyles.cardHeaderTitle}>Address Number: (Required)</label>
                                <input type="text" id="addrNum" name="addrNum" value={state.addrNum} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                                <label htmlfor="addressStreet" className={utilStyles.cardHeaderTitle}>Address Street:</label>
                                <select id="addrStreet" defaultValue={state.addrStreet} onChange={handleChange} className={utilStyles.listingFormInput}>
                                    <option value = "Cervantes Rd.">Cervantes Rd.</option>
                                    <option value = "El Greco Rd.">El Greco Rd.</option>
                                    <option value = "Picasso Rd.">Picasso Rd.</option>
                                    <option value = "Segovia Rd.">Segovia Rd.</option>
                                    <option value = "Cordoba Rd.">Cordoba Rd.</option>
                                    <option value = "Pardall Rd.">Pardall Rd.</option>
                                    <option value = "Madrid Rd.">Madrid Rd.</option>
                                    <option value = "Seville Rd.">Seville Rd.</option>
                                    <option value = "Trigo Rd.">Trigo Rd.</option>
                                    <option value = "El Nido Ln.">El Nido Ln.</option>
                                    <option value = "Sabado Tarde Rd.">Sabado Tarde Rd.</option>
                                    <option value = "Del Playa Dr.">Del Playa Dr.</option>
                                    <option value = "El Colegio Rd.">El Colegio Rd.</option>
                                    <option value = "Abrego Rd.">Abrego Rd.</option>
                                    <option value = "Sueno Rd.">Sueno Rd.</option>
                                    <option value = "Pasado Rd.">Pasado Rd.</option>
                                    <option value = "Estero Rd.">Estero Rd.</option>
                                    <option value = "Fortuna Rd.">Fortuna Rd.</option>
                                    <option value = "Embarcadero Del Norte">Embarcadero Del Norte</option>
                                    <option value = "Embarcadero Del Mar">Embarcadero Del Mar</option>
                                    <option value = "Camino Del Pescadero">Camino Del Pescadero</option>
                                    <option value = "Camino Del Sur">Camino Del Sur</option>
                                    <option value = "Camino Corto">Camino Corto</option>
                                    <option value = "Camino Lindo">Camino Lindo</option>
                                </select><br></br>
                                <label htmlfor="apartmentNumber" className={utilStyles.cardHeaderTitle}>Apartment Number: (Optional)</label>
                                <input type="text" id="aptNum" name="aptNum" value={state.aptNum} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                                <label htmlfor="size" className={utilStyles.cardHeaderTitle}>Avalible Size: (Required)</label>
                                <input type="number" id="size" name="size" value={state.size} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                                <label htmlfor="totalPrice" className={utilStyles.cardHeaderTitle}>Total Price of Avalible Spots: (Required)</label>
                                <input type="number" id="totalPrice" name="totalPrice" value={state.totalPrice} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                                <label htmlfor="website" className={utilStyles.cardHeaderTitle}>Original House Listing/Facebook Listing Webpage: (Optional)</label>
                                <input type="text" id="website" name="website" value={state.website} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                                <label htmlfor="phone" className={utilStyles.cardHeaderTitle}>Contact Phone Number: (Required)</label>
                                <input type="tel" id="phone" name="phone" value={state.phone} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                                <label htmlfor="email" className={utilStyles.cardHeaderTitle}>Contact Email: (Set to login gmail if empty)</label>
                                <input type="text" id="email" name="email" value={state.email} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                            </div>
                            <a><button onClick={switchView}>Cancel</button></a>
                            <a><button onClick={submit}>Submit</button></a>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={utilStyles.cardHeader}>
                            <div id={utilStyles.cardHeaderTitle}>{listing.addrNum + " " + listing.addrStreet + " " + listing.aptNum}</div>
                            <div id={utilStyles.cardHeaderSubTitle}>
                                <input type="radio" id="true" name={props.h._id} defaultChecked={listing.availability} onChange={updateAvail}></input>
                                <label>Available</label>
                                <input type="radio" id="false" name={props.h._id} defaultChecked={!listing.availability} onChange={updateAvail}></input>
                                <label>Not Available</label>
                            </div>
                        </div>
                        <div id={utilStyles.cardBody}>
                            <div id={utilStyles.cardInfo}>
                                <div>${listing.totalPrice} total</div>
                                <div><FontAwesomeIcon icon={faBed} className={utilStyles.icon}/>{listing.size}</div>
                                <div><FontAwesomeIcon icon={faPhone} className={utilStyles.icon}/>Contact at {listing.phone}</div>
                                <div><FontAwesomeIcon icon={faEnvelope} className={utilStyles.icon}/>{listing.email}</div>
                                <div>{listing.website}</div>
                            </div>
                            <a><button onClick={setInfo}>Edit</button></a>
                        </div>
                    </div>
                }</div>
            : <p>This Houses has been Deleted</p>}
		</div>
	);
}