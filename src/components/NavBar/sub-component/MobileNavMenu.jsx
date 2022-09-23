import React from "react";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileNavMenu = () => {
	const onClickHandler = (e) => {
		const target = e.currentTarget;
		const parentEl = target.parentElement;
		if (
			parentEl?.classList.contains("menu-toggle") ||
			target.classList.contains("menu-toggle")
		) {
			const element = target.classList.contains("icon")
				? parentEl
				: target;
			const parent = getClosest(element, "li");
			const childNodes = parent.childNodes;
			const parentSiblings = getSiblings(parent);
			parentSiblings.forEach((sibling) => {
				const sibChildNodes = sibling.childNodes;
				sibChildNodes.forEach((child) => {
					if (child.nodeName === "UL") {
						slideUp(child, 1000);
					}
				});
			});
			childNodes.forEach((child) => {
				if (child.nodeName === "UL") {
					slideToggle(child, 1000);
				}
			});
		}
	};
	return (
		<nav className="site-mobile-menu">
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
					<span className="menu-toggle" onClick={onClickHandler}>
						<i className="far fa-angle-down"></i>
					</span>
					<ul className="sub-menu">
						<li>
							<NavLink to={"/membership"}>
								<span className="menu-text">Membership</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={`/register-member`}>
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

export default MobileNavMenu;
