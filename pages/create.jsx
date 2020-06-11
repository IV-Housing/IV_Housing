import React, { useState, useEffect } from 'react';
import ListingForm from '../components/forms/listingForm'
import Layout, {siteTitle} from '../components/layout.js'
import Info from '../components/info.jsx'
import utilStyles from '../styles/utils.module.css'  // css style
import { createRequiredAuth } from "../utils/ssr";

export const getServerSideProps = createRequiredAuth;

export default function Create(props){
  const user=props.user
  const [{company,address,size,totalPrice,pricePerPerson, website, phone}, setInfo] = useState(
		{ company: '', address: '', size: '', totalPrice: '', pricePerPerson: '', website: '', phone:'' }
	);
  const getFormInfo = (address, size,totalPrice,pricePerPerson, website, phone)=>{ setInfo(address, size,totalPrice,pricePerPerson, website, phone);}

  return (
    <div>
      <Layout create user={user}></Layout>
	  	<div className={utilStyles.createContent}>
			<ListingForm getFormInfo={getFormInfo}/>
			<div className={utilStyles.createInfo}><Info/></div>
	  	</div>
    </div>
  );
}
