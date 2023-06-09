
import { Link } from 'react-router-dom';
import "./NavBar.scss";
import React from 'react';
import Logo from "../../assets/icons/logoSportSee.svg"

/** 
* NavBar Component
*
* This component is responsible for rendering the navigation bar with links to the various routes.
*
* @component
* @returns {ReactElement} JSX element
*/

const NavBar = () => {
    return (
        <div className='navContainer'>
            <Link to="/" >
                <img  src={Logo} alt="Logo SportSee" />
            </Link>
            <Link to="/" >Accueil</Link>
            <Link to="/Profil" >Profil</Link>
            <Link to="/Reglage" >Réglage</Link>
            <Link to="/Communauté" >Communauté</Link>
        </div>
    );
};

export default NavBar;