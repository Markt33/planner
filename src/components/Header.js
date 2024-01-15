import React from 'react'
import logo from '../images/tyler.jpg'

export default function Header() {

    return(
        <header className='header'>
            <div>
                <h1 className='header--h1'>Green River Dev's Planner!</h1>
                <p className='header--p'>"You will be rich in no time!" - Tyler, SDEV instructor</p>
            </div>
            <img className='header--img' src={logo}/>
        </header>
    )
}