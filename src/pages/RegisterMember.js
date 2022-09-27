import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
// import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
// import ServiceSkill from '../container/service/ServiceSkill';
// import AboutSix from '../container/About/AboutSix';
// import FunfactTwo from '../container/Funfact/FunfactTwo';
// import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import RegistrationForm from "../components/RegistrationForm";

const RegisterMember = () => {
	return (
		<React.Fragment>
			<SEO title="Tanzanite roundtable || Service" />
			<Header />
			<Breadcrumb
				image="images/bg/breadcrumb-bg-three.jpg"
				title="Member Registration"
				content="Home"
				contentTwo="Registration"
			/>
			<RegistrationForm />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default RegisterMember;
