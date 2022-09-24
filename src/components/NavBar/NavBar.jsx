import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="site-main-menu">
			<ul>
				<li>
					<NavLink to={"/"}>
						<span className="menu-text">Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={"/about"}>
						<span className="menu-text">About Us</span>
					</NavLink>
				</li>
				<li className="has-children">
					<NavLink to={"/membership"}>
						<span className="menu-text">Membership</span>
					</NavLink>
					<span className="menu-toggle">
						<i className="far fa-angle-down"></i>
					</span>
					<ul className="sub-menu">
						<li>
							<NavLink to={"/membership"}>
								<span className="menu-text">Membership</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={"/register-member"}>
								<span className="menu-text">
									Membership registration
								</span>
							</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink to={"/publication"}>
						<span className="menu-text">Publications</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={"/contact"}>
						<span className="menu-text">Contact Us</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
