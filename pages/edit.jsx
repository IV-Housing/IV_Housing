import React, { useState, useEffect } from 'react';
import Layout, {siteTitle} from '../components/layout.js'
import Info from '../components/info.jsx'
import utilStyles from '../styles/utils.module.css'  // css style
import { createRequiredAuth } from "../utils/ssr";

export const getServerSideProps = createRequiredAuth;

export default function Edit(props){
  const user=props.user
  const KAMAP = "";
  const PLAYALIFEIV = "";
  const KOTOGROUP = "";
  const MERIDIAN = "";
  const WOLFEASS = "";

  if(user.email === KAMAP || user.email === PLAYALIFEIV || 
    user.email === KOTOGROUP || user.email === MERIDIAN 
    || user.email === WOLFEASS){

  }
  else{
    
  }

  return (
    <div>
      <Layout edit user={user}></Layout>
    </div>
  );
}