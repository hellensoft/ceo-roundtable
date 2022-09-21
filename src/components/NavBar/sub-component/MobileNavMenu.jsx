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
							<NavLink
								to={"/membership#open-forum"}
							>
								<span className="menu-text">Open Forum</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/membership#peer-group`}
							>
								<span className="menu-text">
									Open forum + peer group
								</span>
							</NavLink>
						</li>
					</ul>
				</li>
				<li className="has-children">
					<NavLink to={"/work"}>
						<span className="menu-text">Publications</span>
					</NavLink>
					<span className="menu-toggle" onClick={onClickHandler}>
						<i className="far fa-angle-down"></i>
					</span>
					<ul className="sub-menu">
						<li>
							<NavLink to={"/blog-grid"}>
								<span className="menu-text">Blog Grid</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/blog-classic"}
							>
								<span className="menu-text">Blog Classic</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/blog-details/1`}
							>
								<span className="menu-text">Blog Details</span>
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

export default MobileNavMenu;
