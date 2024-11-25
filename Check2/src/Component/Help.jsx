import React from "react";
import { Outlet,Link } from "react-router-dom";

function Help(){
    return(
        <>
        <p>Help</p>
        <Link to={"Mobile"}
        >Mobile</Link>
        <Outlet/>
        </>
    )
}

export default Help;