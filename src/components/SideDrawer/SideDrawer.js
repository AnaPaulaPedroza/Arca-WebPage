import React from 'react';
import './SideDrawer.css';

import { Link } from "react-router-dom";
import { FaBookmark, FaCrown, FaBell, FaInfoCircle } from "react-icons/fa";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className = {drawerClasses}>
            <ul>
                <li>
                    <a id= "entrega" className = "menu-item1" href= '/entregas'>
                        <FaBookmark />
                    </a>
                    <Link className ="link-txt" to = '/entregas'>Entregas</Link>
                </li>
                <li>
                <a id= "ranking" className = "menu-item" href= '/ranking'>
                        <FaCrown />
                    </a>
                    <Link className ="link-txt" to = '/ranking'>Ranking</Link>
                </li>
                <li>
                <a id= "chat" className = "menu-item" href= '/notifications'>
                        <FaBell />
                    </a>
                    <Link className ="link-txt" to = '/notifications'>Notificaciones</Link>
                </li>
                <li>
                <a id= "about" className = "menu-item" href= '/about-us'>
                        <FaInfoCircle />
                    </a>
                    <Link className ="link-txt" to = '/about-us'>Sobre TWI</Link>
                </li>
            </ul>
        </nav>
    );
};


export default sideDrawer;