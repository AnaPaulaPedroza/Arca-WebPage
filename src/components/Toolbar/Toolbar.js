import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt } from "react-icons/fa";
import arcaLogo from './arcaLogo.png';

const toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar-nav">
            <div>
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className = "toolbar__logo">
                <Link to = '/'><img className = "logo" src = {arcaLogo} /></Link>
            </div>
            <div className ="spacer" />
            <div className = "toolbar-nav-items">
                <ul>
                    <li>
                        <Link className ="text-link1" to ='/' ><FaHome /></Link>
                    </li>
                    <li>
                      <Link className ="text-link" to = '/profile'><FaUserAlt /></Link> 
                   </li>
                   
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;