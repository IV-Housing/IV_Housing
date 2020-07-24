import React, { useState, useEffect } from 'react';
import Layout, {siteTitle} from '../components/layout.js'
import EditView from '../components/view/editView.jsx'
import utilStyles from '../styles/utils.module.css' 
import { createRequiredAuth } from "../utils/ssr";

export const getServerSideProps = createRequiredAuth;

export default function Edit(props){
  const user=props.user
  const [listings, setListings] = useState([]); 
  const KAMAP = "";
  const PLAYALIFEIV = "";
  const KOTOGROUP = "";
  const MERIDIAN = "";
  const WOLFEASS = "";

  useEffect(()=>{ if(listings.length===0) getList(); });
  const getList = async () => {
    const response = await fetch(`/api`, { method: "GET" });
    const data = await response.json();
    let comp = "Subleaser";
    if(user.email === KAMAP){ comp = "KAMAP"}
    else if(user.email === PLAYALIFEIV){comp = "Playa Life IV"}
    else if(user.email === KOTOGROUP){comp = "The Koto Group"}
    else if(user.email === MERIDIAN){comp = "Meridian Group"}
    else if(user.email === WOLFEASS){comp = "Wolfe and Associates"}
    let list = [];
    let i = 0;
    data.map(house=>{
        if(house.company === comp){
            list[i] = house;
            i++;
        }
    })
    if(comp === "Subleaser"){
        const response = await fetch(`/api/edit`,{method: "GET"});
        const data2 = await response.json();

        let houses = [];

        data2.map(profile=>{
            if(profile.email === user.email){
                houses = profile.houses;
            }
        })

        list = [];
        i=0;
        houses.map(id=>{
            data.map(house=>{
                if(house._id === id){
                    list[i] = house;
                    i++;
                }
            });
        })
    }
    setListings(list);
}

  return (
    <Layout edit user={user}>
        <div className={utilStyles.editViewBox}>
            <EditView data={listings}/>
        </div>
    </Layout>
  );
}