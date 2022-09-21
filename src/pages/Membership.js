import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
// import WorkContainer from "../container/Work/WorkContainer";
import CallToAction from "../container/CallToAction/CallToAction";
// import AboutFive from "../container/About/AboutFive";
// import Faq from "../container/Faq/Faq";
import Footer from "../container/Footer/Footer";
import ServiceIconBox from "../container/service/ServiceIconBox";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SelectionProcess from "../components/SelectionProcess/SelectionProcess";

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
			<ServiceIconBox classOption="bg-color-1" />
			<SelectionProcess />
			{/* <WorkContainer /> */}
			<CallToAction />
			{/* <AboutFive /> */}
			{/* <Faq /> */}
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default Membership;
