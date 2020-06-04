import React, { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

//const NodeGeocoder = require('node-geocoder');

export default function ListingForm(props){
   const [submitted, setSubmitted] = useState(false);
   const [state, setState] = React.useState({ company: "Subleaser", address: "", size: "", totalPrice: "", website: "", phone: "" });

    const handleSubmit = e => {
        e.preventDefault();
        postListing();
        setState({ company: "Subleaser", address: "", size: "", totalPrice: "", website: "", phone: "" });
        setSubmitted(true);
    };

    const postListing = async () => {
        // const options = {
        //     provider: 'opencage',
        //     fetch: customFetchImplementation,
        //     apiKey: 'ce9151e4db0e4c9c87af37b712013576',
        //     formatter: null
        // };

        // const res = await geocoder.geocode({
        //     address: state.address,
        //     countryCode: 'us',
        //     limit: 1
        // });

        console.log(state.comapny);
        console.log(state.address);
        console.log(state.size);
        console.log(state.totalPrice);
        console.log(state.website);
        console.log(state.phone);

		const response = await fetch("/api", {
            method: "POST",
            // headers: {
            //   "Content-Type": "application/json",
            // },
            body: JSON.stringify({
              company: state.company,
              address: state.address,
              size: state.size,
              totalPrice: state.totalPrice,
              pricePerPerson: 1,
              website: state.website,
              phone: state.phone,
              lat: 0,
              lng: 0,
            }),
        });
	}

    const handleChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        setState({company: e.target.vaule})
      };

    return (
        <div className={utilStyles.listingForm}> 
            <form onSubmit={handleSubmit}>
                <label for="comany" className={utilStyles.listingFormLabel}>Company:</label>
                <select id="Company" defaultValue={state.company} onChange={handleChange} className={utilStyles.listingFormInput}>
                    <option value="Subleaser">Subleaser</option>
                    <option value="Kamap">Kamap</option>
                    <option value="Playa Life IV">Playa Life IV</option>
                    <option value="The Koto Group">The Koto Group</option>
                    <option value="Wolfe and Associates">Wolfe and Associates</option>
                    <option value="Meridian Group">Meridian Group</option>
                </select><br></br>
                <label for="address" className={utilStyles.listingFormLabel}>Address:</label>
                <input type="text" id="address" name="address" value={state.address} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label for="size" className={utilStyles.listingFormLabel}>Avalible Size:</label>
                <input type="number" id="size" name="size" value={state.size} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label for="totalPrice" className={utilStyles.listingFormLabel}>Total Price of Avalible Spots:</label>
                <input type="number" id="totalPrice" name="totalPrice" value={state.totalPrice} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label for="website" className={utilStyles.listingFormLabel}>Original House Listing/Facebook Listing Webpage:</label>
                <input type="text" id="website" name="website" value={state.website} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <label for="phone" className={utilStyles.listingFormLabel}>Contact Phone Number:</label>
                <input type="tel" id="phone" name="phone" value={state.phone} onChange={handleChange} className={utilStyles.listingFormInput}></input><br></br>
                <input type="submit" value="Submit" className={utilStyles.listingFormButton}></input>
                <input type="reset" className={utilStyles.listingFormButton}></input>
            </form>
            {submitted && <p className={utilStyles.listingFormLabel2}>Submission Successful.</p>}
        </div>
    );
}