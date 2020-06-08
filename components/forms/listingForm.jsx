import React, { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

export default function ListingForm(props){
   const [submitted, setSubmitted] = useState("");
   const [state, setState] = React.useState({ company: "Subleaser", address: "", size: "", totalPrice: "", website: "", phone: "" });

    const handleSubmit = e => {
        e.preventDefault();
        if(state.address === "" || state.size === "" || state.totalPrice === "" || state.phone === ""){
            setSubmitted("Please fill in all required fields");
        }
        else{
            postListing();
            setState({ company: "Subleaser", address: "", size: "", totalPrice: "", website: "", phone: "" });
            setSubmitted("Submission Successful");
        }
    };

    const postListing = async () => {
	    await fetch("/api", {
            method: "POST",
            body: JSON.stringify({
              company: state.company,
              address: state.address,
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
            setState({ company: e.target.value, address: state.address, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "address"){
            setState({ company: state.company, address: e.target.value, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "size"){
            setState({ company: state.company, address: state.address, size: e.target.value, totalPrice: state.totalPrice, website: state.website, phone: state.phone });
        }
        else if(id === "totalPrice"){
            setState({ company: state.company, address: state.address, size: state.size, totalPrice: e.target.value, website: state.website, phone: state.phone });
        }        
        else if(id === "website"){
            setState({ company: state.company, address: state.address, size: state.size, totalPrice: state.totalPrice, website: e.target.value, phone: state.phone });
        }
        else if(id === "phone"){
            setState({ company: state.company, address: state.address, size: state.size, totalPrice: state.totalPrice, website: state.website, phone: e.target.value });
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
                <label htmlfor="address" className={utilStyles.listingFormLabel}>Address: (Required)</label>
                <input type="text" id="address" name="address" value={state.address} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
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