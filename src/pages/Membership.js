import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
// import WorkContainer from "../container/Work/WorkContainer";
// import AboutFive from "../container/About/AboutFive";
// import Faq from "../container/Faq/Faq";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SelectionProcess from "../components/SelectionProcess/SelectionProcess";
import CallToAction from "../container/CallToAction/CallToAction";
import MembershipType from "../components/MembershipTypes/MembershipTypes";

const Membership = () => {
	return (
		<React.Fragment>
			<SEO title="CEO - Roundtable || Membership" />
			<Header />
			<Breadcrumb
				image="images/bg/breadcrumb-bg-two.jpg"
				title="Membership"
				content="Home"
				contentTwo="Membership"
			/>
			<MembershipType />
			<SelectionProcess />
			{/* <WorkContainer /> */}
			{/* <AboutFive /> */}
			{/* <Faq /> */}
			<CallToAction />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default Membership;
