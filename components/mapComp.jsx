import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import utilStyles from '../styles/utils.module.css'
import CompView from './compTileComp.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

export default function MapView(props){
    const[viewport, setViewport] = useState({latitude: 34.413, longitude: -119.861, width: "77vw", height: "103vh", zoom: 15});
    const[selectedPark, setSelectedPark] = useState(null);
    const[comp1, setComp1] = useState({address:"", company:"", size:0, totalPrice:0, phone:"", website:""});
    const[comp2, setComp2] = useState({address:"", company:"", size:0, totalPrice:0, phone:"", website:""});
    const[comp, setComp] = useState(0);

    useEffect(() => {
        if(comp === 1){
            setComp1(selectedPark);
        }
        else if(comp === 2){
            setComp2(selectedPark);
        }
    }, [comp]);

    return(
        <div className = {utilStyles.mapCompContainer}>
            <div className = {utilStyles.mapView}>
				<h1 className={utilStyles.mapH1}><FontAwesomeIcon icon={faMapMarkedAlt}/> &nbsp;Listings Map</h1>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.MAP_TOKEN}
                    mapStyle="mapbox://styles/sethvanb/cka744x8c16b31ilhulkr0d26"
                    onViewportChange = {
                        viewport => {
                            viewport.width = "50vw";
                            viewport.height = "75vh";
                            setViewport(viewport)
                        }}
                >
                    {props.list.map(house => (
                        <Marker key={house._id} latitude={house.lat ? house.lat:0} longitude={house.lng ? house.lng:0}>
                            <button className={utilStyles.marker} onClick={(e) => {
                                e.preventDefault();
                                setSelectedPark(house);
                                setComp(0);
                            }}>
                                 <img src="/houseLogo4.png" alt="House Icon" className = {utilStyles.imgView}/>
                            </button>
                        </Marker>
                    ))}

                    {selectedPark ? (
                        <Popup
                            latitude={selectedPark.lat}
                            longitude={selectedPark.lng}
                            closeOnClick = {false}
                            onClose={() => {
                                setSelectedPark(null);
                                setComp(0);
                            }}
                        >
                            <div className={utilStyles.popup}>
                                <h3 className={utilStyles.popHead}>{selectedPark.address}</h3>
                                <p className={utilStyles.popContent}>Size: {selectedPark.size}</p>
                                <p className={utilStyles.popContent}>Total Price: ${selectedPark.totalPrice}</p>
                                <p className={utilStyles.popContent}><a href={selectedPark.website}>More Info</a></p>
                                    <button className={utilStyles.compButtons} onClick={(e) => {
                                        e.preventDefault();
                                        setComp(1);
                                    }}>
                                        Add to first comparison
                                    </button>
                                    <button className={utilStyles.compButtons} onClick={(e) => {
                                        e.preventDefault();
                                        setComp(2);
                                    }}>
                                        Add to second comparison
                                    </button>
                            </div>
                        </Popup>
                    ): null}
                </ReactMapGL>
            </div>
            <div className = {utilStyles.compContainer}>
                <CompView comp={comp1}/>
                <CompView comp={comp2}/>
            </div>
        </div>
    )
}
