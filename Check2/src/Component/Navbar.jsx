import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(

        <>
        <ul>
            <li>
                <NavLink to={"/Contact"}  className={({isActive}) => isActive?"Active":""}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={"/Help"}   className={({isActive}) => isActive?"Active":""}>Help</NavLink>
            </li>
            <li>
                <NavLink to={"/"}   className={({isActive}) => isActive?"Active":""}>Home</NavLink>
            </li>
        </ul>
        </>
    )
}

export default Navbar;