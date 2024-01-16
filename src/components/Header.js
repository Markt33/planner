import React from 'react'
import logo from '../images/tyler.jpg'
import logo1 from '../images/Keller.png'
import "../App.css";

export default function Header() {

    return(
        <header className='header'>
            <img className='header--img' src={logo}/>
            <div>
                <h1 className='header--h1'>Green River Dev's Planner!</h1>
                <p className='header--p'>"You will be rich in no time!" - Tyler, SDEV instructor</p>
            </div>
            <img className='header--keller' src={logo1}/>
        </header>
    )
}