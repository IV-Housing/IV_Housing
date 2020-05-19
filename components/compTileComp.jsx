import React, { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css'

export default function CompView(props){
    if(props.comp.address === ""){
        return(
            <div className = {utilStyles.comparisonView}>
                <p>No house is selected yet. Select a house marker from the map and use the buttons add it to a comparison box</p>
            </div>
        )
    }
    return(
        <div className = {utilStyles.comparisonView}>
                    <h2 className={utilStyles.compHead}>{props.comp.address}</h2>
                    <p className={utilStyles.compContent}>Size: {props.comp.size}</p>
                    <p className={utilStyles.compContent}>Total Price: {props.comp.totalPrice}</p>
                    <p className={utilStyles.compContent}>Price Per Person: {(props.comp.totalPrice/props.comp.size).toFixed(2)}</p>
                    <p className={utilStyles.compContent}>Company: {props.comp.company}</p>
                    <p className={utilStyles.compContent}>Phone: {props.comp.phone}</p>
                    <p className={utilStyles.compContent}><a href={props.comp.website}>More Info Here</a></p>
        </div>
    )
}