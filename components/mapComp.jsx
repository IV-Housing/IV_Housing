import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import utilStyles from '../styles/utils.module.css'

export default function MapView(props){
    const [viewport, setViewport] = useState({latitude: 34.4124, longitude: -119.8573, width: "100vw", height: "93.8vh", zoom: 15.5});
    const[selectedPark, setSelectedPark] = useState(null);
    const[comp1, setComp1] = useState({address:"", company:"", size:0, totalPrice:0, phone:"", website:""});
    const[comp2, setComp2] = useState({address:"", company:"", size:0, totalPrice:0, phone:"", website:""});
    const[comp, setComp] = useState(0);
    // const[lat, setLat] = useState();
    // const[lng, setLng] = useState();   
    // var lattitude, longitude;
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
            <div className = {utilStyles.compContainer}>
                <div className = {utilStyles.comparisonView}>
                    <h2 className={utilStyles.compHead}>{comp1.address}</h2>
                    <p className={utilStyles.compContent}>Size: {comp1.size}</p>
                    <p className={utilStyles.compContent}>Total Price: {comp1.totalPrice}</p>
                    <p className={utilStyles.compContent}>Price Per Person: {(comp1.totalPrice/comp1.size).toFixed(2)}</p>
                    <p className={utilStyles.compContent}>Company: {comp1.company}</p>
                    <p className={utilStyles.compContent}>Phone: {comp1.phone}</p>
                    <p className={utilStyles.compContent}><a href={comp1.website}>More Info Here</a></p>
                </div>
                <div className = {utilStyles.comparisonView}>
                <h2 className={utilStyles.compHead}>{comp2.address}</h2>
                    <p className={utilStyles.compContent}>Size: {comp2.size}</p>
                    <p className={utilStyles.compContent}>Total Price: {comp2.totalPrice}</p>
                    <p className={utilStyles.compContent}>Price Per Person: {(comp2.totalPrice/comp2.size).toFixed(2)}</p>
                    <p className={utilStyles.compContent}>Company: {comp2.company}</p>
                    <p className={utilStyles.compContent}>Phone: {comp2.phone}</p>
                    <p className={utilStyles.compContent}><a href={comp2.website}>More Info Here</a></p>
                </div>
            </div>
            <div className = {utilStyles.mapView}>
                <ReactMapGL 
                    {...viewport} 
                    mapboxApiAccessToken={process.env.MAP_TOKEN}
                    mapStyle="mapbox://styles/sethvanb/cka744x8c16b31ilhulkr0d26"
                    onViewportChange = {
                        viewport => {                      
                            viewport.width = "100vw";
                            viewport.height = "93.8vh";
                            setViewport(viewport)
                        }}
                >
                    {props.list.map(house => (
                        <Marker key={house.address} latitude={house.lat ? house.lat:0} longitude={house.lng ? house.lng:0}>
                            <button className={utilStyles.marker} onClick={(e) => {
                                e.preventDefault();
                                setSelectedPark(house);
                            }}>
                                <img src="/houseLogo3.png" alt="House Icon" className = {utilStyles.imgView}/>
                            </button>
                        </Marker>
                    ))}

                    {selectedPark ? (
                        <Popup 
                            latitude={selectedPark.lat} 
                            longitude={selectedPark.lng}
                            onClose={() => {
                                setSelectedPark(null);
                                setComp(0);
                            }}
                        >
                            <div className={utilStyles.popup}>
                                <h3 className={utilStyles.popHead}>{selectedPark.address}</h3>
                                <p className={utilStyles.popContent}>Size: {selectedPark.size}</p>
                                <p className={utilStyles.popContent}>Total Price: {selectedPark.totalPrice}</p>
                                <p className={utilStyles.popContent}><a href={selectedPark.website}>More Info Here</a></p>
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
        </div>
    )
}