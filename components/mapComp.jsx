//import configMapToken from "../utils/configMapToken"
import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, geocoder} from "react-map-gl"
import utilStyles from '../styles/utils.module.css'
import Geocode from 'react-geocode'

export default function MapView(props){
    const [viewport, setViewport] = useState({latitude: 34.412, longitude: -119.8573, width: "100vw", height: "93.8vh", zoom: 15
});
    const[lat, setLat] = useState();
    const[lng, setLng] = useState();
    //var lat, lng;

    const addrToLatLng = (addr) => {
        var geocoder = new MapboxGeocoder({ accessToken: "pk.eyJ1Ijoic2V0aHZhbmIiLCJhIjoiY2thNjhtOGh4MDVtODJzbW5jbHV1cmc3aiJ9.uXYwbhfNVaCx8_plHRewUg"});
        var result;
        geocoder.geocode(addr, result);
        setLng(result.center.lng);
        setLat(result.center.lat);

        // Geocode.fromAddress(addr).then(
        //     response => {
        //         setLat(response.results[0].geometry.location);
        //         setLng(response.result[10].geometry.location);
        //         console.log(lat, lng);
        //     }
        // );
    }

    return(
        <div className = {utilStyles.mapCompContainer}>
            <div className = {utilStyles.compContainer}>
                <div className = {utilStyles.comparisonView}>
                    <p>{lat}</p>
                </div>
                <div className = {utilStyles.comparisonView}>
                    <p>{lng}</p>
                </div>
            </div>
            <div className = {utilStyles.mapView}>
                <ReactMapGL 
                    {...viewport} 
                    mapboxApiAccessToken={"pk.eyJ1Ijoic2V0aHZhbmIiLCJhIjoiY2thNjhtOGh4MDVtODJzbW5jbHV1cmc3aiJ9.uXYwbhfNVaCx8_plHRewUg"}
                    mapStyle="mapbox://styles/sethvanb/cka744x8c16b31ilhulkr0d26"
                    onViewportChange = {viewport => {setViewport({latitude: 34.412, longitude: -119.8573, width: "100vw", height: "93.8vh", zoom: 15})}}
                >
                {props.list.map(house => (
                    <div>
                        {addrToLatLng(house.address)}
                        <Marker key={house.address} latitude={house.size} longitude={house.totalPrice} >
                            <div>HOUSE</div>
                        </Marker>
                    </div>
                ))}
                </ReactMapGL>
            </div>
        </div>
    )
}