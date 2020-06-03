import React, { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

export default function ListingForm(props){
   const submit = ()=>{
        // var company = getElementById("Company").value;
        // var address = document.getElementById("address").value;
        // var size = document.getElementById("size").value;
        // var totalPrice = document.getElementById("totalPrice").value;
        // var pricePerPerson = document.getElementById("pricePerPerson").value;
        // var website = document.getElementById("website").value;
        // var phone = document.getElementById("phone").value;
        // this.props.getFormInfo(company, address, size, totalPrice, pricePerPerson, website, phone);
        //reset form
    }

    return (
        <div className={utilStyles.formSelects}>
            <form>
                <select id="Company" defaultValue="Subleaser" onChange={this}>
                    <option value="Subleaser">Subleaser</option>
                    <option value="Kamap">Kamap</option>
                    <option value="Playa Life IV">Playa Life IV</option>
                    <option value="The Koto Group">The Koto Group</option>
                    <option value="Wolfe and Associates">Wolfe and Associates</option>
                    <option value="Meridian Group">Meridian Group</option>
                </select><br></br>
                <label for="address">Address:</label>
                <input type="text" id="address" name="address"></input><br></br>
                <label for="size">Avalible Size:</label>
                <input type="number" id="size" name="size"></input><br></br>
                <label for="totalPrice">Total Price of Avalible Spots:</label>
                <input type="number" id="totalPrice" name="totalPrice"></input><br></br>
                <label for="pricePerPerson">Estimated Price for a Single Person:</label>
                <input type="number" id="pricePerPerson" name="pricePerPerson"></input><br></br>
                <label for="website">Original House Listing/Facebook Listing:</label>
                <input type="text" id="website" name="website"></input><br></br>
                <label for="phone">Contact Phone Number:</label>
                <input type="tel" id="phone" name="phone"></input><br></br>
                <input type="submit" value="Submit" onClick={submit()}></input>
                <input type="reset"></input>
            </form>
        </div>
    );
}