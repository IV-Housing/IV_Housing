import React, { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css';
import Card from './view/card.jsx';

export default function CompView(props){
    if(props.comp.address === ""){
        return(
            <div className={utilStyles.comparisonView}>
                <p><b> No house is selected yet.</b><br></br> Select a house marker from the map and use the buttons add it to a comparison box.</p>
            </div>
        )
    }
    return(
        <div className = {utilStyles.comparisonView}>
			<Card h={props.comp}/>
        </div>
    )
}
