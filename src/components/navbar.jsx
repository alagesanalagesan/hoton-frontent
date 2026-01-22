import { useState } from "react";
import Logo from '../assets/hoton.jpg'


function navBar(){


    return(
        <>
        <div className="navBar">
            <img src={Logo}/>
            <hi>HOTON-TECH</hi>
            
        </div>
        </>
    )

}

export default navBar;