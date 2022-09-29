import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SelectionProcess from "../components/SelectionProcess/SelectionProcess";
import CallToAction from "../container/CallToAction/CallToAction";
import MembershipType from "../components/MembershipTypes/MembershipTypes";

const OpenForumPeerGroup = () => {
	return (
		<React.Fragment>
			<SEO title="Tanzanite roundtable || Open Forum + Peer Group" />
			<Header />
			<Breadcrumb
				image="images/bg/breadcrumb-bg-two.jpg"
				title="Open Forum + Peer Group"
				content="Home"
				contentTwo="Open Forum + Peer Group"
			/>
			<MembershipType />
			<SelectionProcess />
			<CallToAction />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default OpenForumPeerGroup;
