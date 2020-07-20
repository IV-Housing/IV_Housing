//Style Imports
import utilStyles from '../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons'
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';

export default function Navbar(props){
  const user = props.user;
  
 return(
   <>
    <div className={utilStyles.navbar}>
     <h1><FontAwesomeIcon icon={faLaptopHouse}/> Isla Vista Housing Search </h1>
      <div className={utilStyles.navlinks}>
        <a href="/">Listings</a>
        <a href="/map">Map</a>
        {user && <a href="/create" >Add Listing</a>}
        {user && <a href="/edit" >Edit Listings</a>}
        <Nav>
          {user ? (
            <NavDropdown
              title={
                <div className={utilStyles.navUser}>
                  <Image
                    className="ml-2"
                    src={user.picture}
                    width={24}
                    height={24}
                  />
                  <div>
                    Hi, {user.name} 
                  </div>
                </div>
              }
            >
              <NavDropdown.Item href="/api/logout" className={utilStyles.navLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button data-cy="login" href="/api/login" className={utilStyles.navLogin}>
              Login
            </Button>
          )}
        </Nav>
      </div> 
    </div>
   </>
 )
}
