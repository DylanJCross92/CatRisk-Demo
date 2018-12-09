import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Components/Nav';
import crGraphic from '../Assets/catrisk-graphic.svg';
import crLogoType from '../Assets/catrisk-logotype.svg';

const Header = () => (
    <header style={{backgroundColor: "#0080b2", borderBottom: "solid 1px #005b7f", display: "flex", alignItems: "center", padding: "0px 25px"}}>
        <NavLink exact to='/analyses'>
            <img alt='CatRisk Score' src={crGraphic}/> <img alt='CatRisk Score' src={crLogoType}/>
        </NavLink>

        <NavLink exact to='/analyses' style={{color: "#FFF", marginLeft: "25px", marginTop: "5px", textDecoration: "none"}}>
            Analyses
        </NavLink>

        <Nav />
    </header>
);

export default Header;
