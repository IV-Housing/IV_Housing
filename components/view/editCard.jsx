import utilStyles from '../../styles/utils.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function EditCard(props) {
    const [editing, setEditing] = useState(false); 
    const [listing, setListing] = useState({
        availability: props.h.availability,
        addrNum: props.h.address, 
        addrStreet: props.h.address, 
        aptNum: props.h.address, 
        size: props.h.size, 
        totalPrice: props.h.totalPrice,
        website: props.h.website, 
        phone: props.h.phone
    });
    const [state, setState] = useState({
        availability: props.h.availability,
        addrNum: props.h.address, 
        addrStreet: props.h.address, 
        aptNum: props.h.address, 
        size: props.h.size, 
        totalPrice: props.h.totalPrice,
        website: props.h.website, 
        phone: props.h.phone
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
            phone: listing.phone 
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
            phone: listing.phone 
        });
        switchView();
    }

    const submit = ()=>{
        updateListing();
        setListing({
            availability: state.availability, 
            addrNum: state.addrNum, 
            addrStreet: state.addrStreet, 
            aptNum: state.aptNum, 
            size: state.size, 
            totalPrice: state.totalPrice, 
            website: state.website, 
            phone: state.phone 
        });
        switchView();
    }

    const updateListing = async ()=>{
        let addr = state.addrNum + " " + state.addrStreet + " " + state.aptNum;
        let addChg = true;
        if(state.addrNum === listing.addrNum && state.addrStreet === listing.addrStreet && state.aptNum === listing.aptNum){
            addChg = false;
        }
	    await fetch("/api/edit", {
            method: "POST",
            body: JSON.stringify({
              addrChange: addChg,
              address: addr,
              size: state.size,
              totalPrice: state.totalPrice,
              website: state.website,
			  phone: state.phone,
              id: props.h._id,
            }),
        });
    }

    const handleChange = e => {
        const { id, value} = e.target;
        if(id === "addrNum"){
            setState({ availability: state.availability, addrNum: value, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "addrStreet"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: value, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "aptNum"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: value, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "size"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: value, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "totalPrice"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: value, website: state.website, phone: state.phone });
        }        
        else if(id === "website"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: value, phone: state.phone });
        }
        else if(id === "phone"){
            setState({ availability: state.availability, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: value });
        }
    };

	return (
		<div className={utilStyles.card}>
            {editing ? 
                <div>
                    <div className={utilStyles.cardHeader}>
                        <div id={utilStyles.cardHeaderSubTitle}>
                            <input type="radio" id="true" name={props.h._id} defaultChecked={listing.availability} onChange={updateAvail}></input>
                            <label>Available</label>
                            <input type="radio" id="false" name={props.h._id} defaultChecked={!listing.availability} onChange={updateAvail}></input>
                            <label>Not Available</label>
                        </div>
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
                        </div>
                        <a><button onClick={switchView}>Cancel</button></a>
                        <a><button onClick={submit}>Submit</button></a>
                    </div>
                </div>
                :
                <div>
                    <div className={utilStyles.cardHeader}>
                        <div id={utilStyles.cardHeaderTitle}>{listing.addrStreet}</div>
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
                            <div><FontAwesomeIcon icon={faPhone} className={utilStyles.icon}/>{listing.phone}</div>
                            <div>{listing.website}</div>
                        </div>
                        <a><button onClick={setInfo}>Edit</button></a>
                    </div>
                </div>
            }
		</div>
	);
}