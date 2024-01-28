import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from "../components/About/HomeAbout.jsx";
import BrandContainer from "../container/Brand/BrandContainer";
import ServiceIconBox from "../container/service/ServiceIconBox";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { Link } from "react-router-dom";

const HomeOne = () => {
	return (
		<React.Fragment>
			<SEO title="Tanzanite roundtable - Ethical Leadeership for Growth" />
			<Header />
			<IntroSlider />
			<HomeAbout />

			{/* WHY JOIN US SECTION */}
			<div className="video-section section section-padding" data-aos="fade-up">
				<div className="container">
					<div className="row align-items-center">
						<div className="skill-with-video-content">
							<div className="section-title-two mb-8">
								<span className="sub-title">Why join us?</span>
								<h3 className="title">
									Members are assured of peer level
									interaction and benefit by:
								</h3>
							</div>

							<ul className="agency-list">
								<li className="item">
									<div className="icon">
										<i className="fas fa-check"></i>
									</div>
									<div className="text">
										Networking with others at your level
									</div>
								</li>
								<li className="item">
									<div className="icon">
										<i className="fas fa-check"></i>
									</div>
									<div className="text">
										Exchanging new and innovative management
										ideas, solutions and strategies in a
										confidential setting
									</div>
								</li>
								<li className="item">
									<div className="icon">
										<i className="fas fa-check"></i>
									</div>
									<div className="text">
										Gaining the collective wisdom and
										multiple perspectives on business and
										operational issues through open and
										unbiased discussions
									</div>
								</li>
								<li className="item">
									<div className="icon">
										<i className="fas fa-check"></i>
									</div>
									<div className="text">
										Learning how to avoid mistakes, pitfalls
										and roadblocks with their business
									</div>
								</li>
								<li className="item">
									<div className="icon">
										<i className="fas fa-check"></i>
									</div>
									<div className="text">
										Gaining valuable information, insight
										and knowledge from other experienced
										CEOs
									</div>
								</li>
								<li className="item">
									<div className="icon">
										<i className="fas fa-check"></i>
									</div>
									<div className="text">
										Sharing Best Practices by learning from
										others who have “been there, done that”
									</div>
								</li>
							</ul>
							<Link
								to={"/"}
								className="btn btn-primary btn-hover-secondary"
							>
								{" "}
								Join Us
							</Link>
						</div>
					</div>
				</div>
			</div>

			<BrandContainer classOption="section-padding-bottom" />
			<ServiceIconBox classOption="bg-color-1" />
			<ContactInformation />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default HomeOne;
