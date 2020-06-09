import React, { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

export default function ListingForm(props){
   const [submitted, setSubmitted] = useState("");
   const [state, setState] = React.useState({ company: "Subleaser", addrNum: "", addrStreet: "Del Playa Dr.", aptNum: "", size: "", totalPrice: "", website: "", phone: "" });

    const handleSubmit = e => {
        e.preventDefault();
        if(state.addrNum === "" || state.size === "" || state.totalPrice === "" || state.phone === ""){
            setSubmitted("Please fill in all required fields");
        }
        else{
            postListing();
            setState({ company: "Subleaser", addrNum: "", addrStreet: "Del Playa Dr.", aptNum: "", size: "", totalPrice: "", website: "", phone: "" });
            setSubmitted("Submission Successful");
        }
    };

    const postListing = async () => {
        let addr = state.addrNum + " " + state.addrStreet + " " + state.aptNum;
	    await fetch("/api", {
            method: "POST",
            body: JSON.stringify({
              company: state.company,
              address: addr,
              size: state.size,
              totalPrice: state.totalPrice,
              website: state.website,
              phone: state.phone,
            }),
        });
	}

    const handleChange = e => {
        setSubmitted("");
        const { id, value} = e.target;
        if(id === "company"){
            setState({ company: e.target.value, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "addrNum"){
            setState({ company: state.company, addrNum: e.target.value, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "addrStreet"){
            setState({ company: state.company, addrNum: state.addrNum, addrStreet: e.target.value, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "aptNum"){
            setState({ company: state.company, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: e.target.value, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "size"){
            setState({ company: state.company, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: e.target.value, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "totalPrice"){
            setState({ company: state.company, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: e.target.value, website: state.website, phone: state.phone });
        }        
        else if(id === "website"){
            setState({ company: state.company, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: e.target.value, phone: state.phone });
        }
        else if(id === "phone"){
            setState({ company: state.company, addrNum: state.addrNum, addrStreet: state.addrStreet, aptNum: state.aptNum, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: e.target.value });
        }
    };

    return (
        <div className={utilStyles.listingForm}> 
            <form onSubmit={handleSubmit}>
                <label htmlfor="company" className={utilStyles.listingFormLabel}>Company:</label>
                <select id="company" defaultValue={state.company} onChange={handleChange} className={utilStyles.listingFormInput}>
                    <option value="Subleaser">Subleaser</option>
                    <option value="Kamap">Kamap</option>
                    <option value="Playa Life IV">Playa Life IV</option>
                    <option value="The Koto Group">The Koto Group</option>
                    <option value="Wolfe and Associates">Wolfe and Associates</option>
                    <option value="Meridian Group">Meridian Group</option>
                </select><br></br>
                <label htmlfor="addressNumber" className={utilStyles.listingFormLabel}>Address Number: (Required)</label>
                <input type="text" id="addrNum" name="addrNum" value={state.addrNum} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label htmlfor="addressStreet" className={utilStyles.listingFormLabel}>Address Street:</label>
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
                <label htmlfor="apartmentNumber" className={utilStyles.listingFormLabel}>Apartment Number: (Optional)</label>
                <input type="text" id="aptNum" name="aptNum" value={state.aptNum} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label htmlfor="size" className={utilStyles.listingFormLabel}>Avalible Size: (Required)</label>
                <input type="number" id="size" name="size" value={state.size} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label htmlfor="totalPrice" className={utilStyles.listingFormLabel}>Total Price of Avalible Spots: (Required)</label>
                <input type="number" id="totalPrice" name="totalPrice" value={state.totalPrice} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label htmlfor="website" className={utilStyles.listingFormLabel}>Original House Listing/Facebook Listing Webpage: (Optional)</label>
                <input type="text" id="website" name="website" value={state.website} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label htmlfor="phone" className={utilStyles.listingFormLabel}>Contact Phone Number: (Required)</label>
                <input type="tel" id="phone" name="phone" value={state.phone} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <input type="submit" value="Submit" className={utilStyles.listingFormButton}></input>
                <input type="reset" className={utilStyles.listingFormButton}></input>
            </form>
            {submitted !== "" && <p className={utilStyles.listingFormLabel2}>{submitted}</p>}
        </div>
    );
}