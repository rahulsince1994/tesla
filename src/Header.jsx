import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function header() {
    let [value,setvalue]=useState("-300px")
    function show(e){
        e.preventDefault();
        // console.log("tushu")
        setvalue("0")
        
    }
    function hide(){
        setvalue("-300px")
    }
    // console.log(value)
    return (
        <div className="wrapper">
            <div className='header'>
                <div>
                    <img src="./logo.svg" alt="" />
                </div>
                <div>
                    <ul>
                        <li><a href="">Model S</a></li>
                        <li><a href="">Model 3</a></li>
                        <li><a href="">Model X</a></li>
                        <li><a href="">Model Y</a></li>
                        <li><a href="">Solar Roofs</a></li>
                        <li><a href="">Solar Panals</a></li>
                    </ul>

                </div>
                <div>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="" onClick={show} >Menu</a></li>
                    </ul>
                </div>
            </div>
            <div className="aside" style={{right:value}}>
                <li><CloseIcon onClick ={hide} /></li>
                <li><a href="">Model S</a></li>
                <li><a href="">Model 3</a></li>
                <li><a href="">Model X</a></li>
                <li><a href="">Model Y</a></li>
                <li><a href="">Solar Roof</a></li>
                <li><a href="">Solar Panal</a></li>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade In</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Powerwall</a></li>
                <li><a href="">Commercial Energy</a></li>
            </div>
        </div>


    )
}

export default header