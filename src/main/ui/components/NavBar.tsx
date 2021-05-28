import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return <nav>
        <div><NavLink to="/login" activeClassName={''}>Login</NavLink></div>
        <div><NavLink to="/registration" activeClassName={''}>Registration</NavLink></div>
        <div><NavLink to="/profile" activeClassName={''}>Profile</NavLink></div>
        <div><NavLink to="/recovery" activeClassName={''}>Password Recovery</NavLink></div>
        <div><NavLink to="/newPassword" activeClassName={''}>Enter new password</NavLink></div>
        {/*<div><NavLink to="/404" activeClassName={''}>Page not found</NavLink></div>*/}
    </nav>
}