import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
            <li>
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Home</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">About Us</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Our History</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Board of Directors</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Management</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Opportunities</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Membership</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Open Forum</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Open Forum + Peer Group</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Publications</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Audited Financial Statements</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Newsletters</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Press Releases</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Tanzania&apos;s Industriallization Journey Book</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Events</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
