import React, { useState, useEffect } from 'react';
import ListingForm from '../components/forms/listingForm'

export default function Create(){
  const [{company,address,size,totalPrice,pricePerPerson, website, phone}, setInfo] = useState(
		{ company: '', address: '', size: '', totalPrice: '', pricePerPerson: '', website: '', phone:'' }
	);
  const getFormInfo = (address, size,totalPrice,pricePerPerson, website, phone)=>{ setInfo(address, size,totalPrice,pricePerPerson, website, phone);}

  return (
  <div>
    <ListingForm getFormInfo={getFormInfo}/>
  </div>
  );
}