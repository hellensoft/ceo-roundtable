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
							<NavLink
								to={"/membership#open-forum"}
							>
								<span className="menu-text">Open Forum</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/membership#peer-group"}
							>
								<span className="menu-text">
									Open Forum + Peer Group
								</span>
							</NavLink>
						</li>
					</ul>
				</li>
				<li className="has-children">
					<NavLink to={"/work"}>
						<span className="menu-text">Publications</span>
					</NavLink>
					<span className="menu-toggle">
						<i className="far fa-angle-down"></i>
					</span>
					<ul className="sub-menu">
						<li>
							<NavLink
								to={`/work-details/1`}
							>
								<span className="menu-text">
									Press Releases
								</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/work-details/1`}
							>
								<span className="menu-text">
									Tanzania&apos;s Industriallization Journey
									Book
								</span>
							</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink to={"/event"}>
						<span className="menu-text">Events</span>
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
