import React from 'react';
import {Link, NavLink} from 'react-router-dom';
/* import Logo from '../logo.svg'; */
import { RiMovie2Line } from "react-icons/ri";
const Navbar = () => {
    const activeStyle={
        color: 'red',
        textShadow: '2px 2px 5px #000'
    }
    return (
        <nav>
            <div className="logo"><Link to="/">{/* <img src={process.env.PUBLIC_URL+'/logo.svg'} alt="logo" /> */}<RiMovie2Line /></Link></div>
            <ul>
                <li><NavLink to="" style={({isActive})=>(isActive?activeStyle : undefined)}>Home</NavLink></li>
                <li><NavLink to="movies" style={({isActive})=>(isActive?activeStyle : undefined)}>Movies</NavLink></li>
                
                <li><NavLink to="events" style={({isActive})=>(isActive?activeStyle : undefined)}>Events</NavLink></li>
                <li><NavLink to="users" style={({isActive})=>(isActive?activeStyle : undefined)}>Users</NavLink></li>

                <li><NavLink to="about" style={({isActive})=>(isActive?activeStyle : undefined)}>About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;