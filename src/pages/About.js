import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import SectionTitleTwo from "../components/SectionTitles/SectionTitleTwo";
import AboutFour from "../container/About/AboutFour";
// import Video from '../container/Video/Video';
import AboutFive from "../container/About/AboutFive";
// import TestimonialContainer from "../container/Testimonial/TestimonialContainer";
// import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AboutUs = () => {
	return (
		<React.Fragment>
			<SEO title="CEO Roundtable || About" />
			<Header />
			<Breadcrumb
				image="images/dar.jpeg"
				title="About Us"
				content="Home"
				contentTwo="About Us"
			/>
			<AboutFour />
			{/* <Video /> */}
			<div className="section section-padding bg-primary-blue">
				<div className="container">
					<div className="work-left work-details mt-6">
						<div className="work-main-info">
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-12">
									<SectionTitleTwo
										subTitle="The Tanzanite C.E.O Roundtable"
										title="Helping top executives improve their business performance"
									/>
								</div>

								<div className="col-xl-6 col-lg-6 col-12">
									<div
										className="content mb-5"
										data-aos="fade-up"
										dangerouslySetInnerHTML={{
											__html: "Founded in 2017 by Deogratius Kilawe, the Tanzan   ite CEO Roundtable has been helping top executives improve their business performance and sort out their challenges with government stake holders and policy makers. As a moderator and coach, Deogratius draws from a lot of business experience from 10 years of senior level operating experience with Mikono Speakers International and Excel Management and Outsourcing Limited together with working with several corporate start-ups.",
										}}
									/>
									<div
										className="content mb-5"
										data-aos="fade-up"
										dangerouslySetInnerHTML={{
											__html: "The Tanzanite CEO Roundtable member companies provide products and services for a wide variety of industries including: Agriculture/Mining / Construction, Building Services / Education / Finance, Insurance, Real Estate / IT Services / Manufacturing / Nonprofit / Professional Services / Publishing / Retail/Wholesale / Software",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section section-padding">
				<div className="container">
					<div className="row mt-lg-20 mt-12">
						<div className="row">
							<div
								className="col-xl-5 col-lg-5 col-12 ml-auto"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<img
									style={{ width: "70%" }}
									src={"/images/about/about-2.jpg"}
									alt=""
								/>
							</div>
							<div
								className="col-xl-6 col-lg-6 col-12"
								data-aos="fade-up"
							>
								<div className="about-content-area mt-0 mb-md-10 mb-10">
									<SectionTitleTwo
										subTitle="Mission"
										title="Our Mission"
									/>
									<div
										className="content mt-3"
										data-aos="fade-up"
										dangerouslySetInnerHTML={{
											__html: "The Tanzanite CEO Roundtable will value your accomplishments, challenge your perspectives and support your business to flourish through engaging with the right stake holders, capacity building, updating the business and economics trends and meeting with the right business partners.",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section section-padding bg-primary-blue">
				<div className="container">
					<div className="row mt-lg-20 mt-12">
						<div className="row">
							<div
								className="col-xl-6 col-lg-6 col-12"
								data-aos="fade-up"
							>
								<div className="about-content-area mt-0 mb-md-10 mb-10">
									<SectionTitleTwo
										subTitle="Vission"
										title="Our Vission"
									/>
									<div
										className="content mt-3"
										data-aos="fade-up"
										dangerouslySetInnerHTML={{
											__html: "Ethical leaders. Good governance Policy and Environment. Better businesses. Better Lives.",
										}}
									/>
								</div>
							</div>
							<div
								className="col-xl-5 col-lg-5 col-12 mr-auto"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<img
									style={{
										width: "70%",
										height: "360px",
										objectFit: "cover",
										objectposition: "center",
									}}
									src={"/images/walking.jpeg"}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutFive />
			{/* <TestimonialContainer classOption="bg-primary-blue" /> */}
			{/* <CallToActionTwo /> */}
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default AboutUs;
