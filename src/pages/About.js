import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import AboutFour from "../container/About/AboutFour";
// import Video from '../container/Video/Video';
import AboutFive from "../container/About/AboutFive";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer";
// import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AboutUs = () => {
	return (
		<React.Fragment>
			<SEO title="CEO Roundtable || About" />
			<Header />
			<Breadcrumb
				image="images/bg/breadcrumb-bg.jpg"
				title="About Us"
				content="Home"
				contentTwo="About Us"
			/>
			<AboutFour />
			{/* <Video /> */}
			<div className="section section-padding">
				<div className="container">
					<div className="work-left work-details mt-6">
						<div className="work-main-info">
							<div className="work-content">
								<h6 className="title" data-aos="fade-up">
									ABOUT THE CCOMPANY
								</h6>

								<div className="desc mt-8">
									<div
										className="content mb-5"
										data-aos="fade-up"
										dangerouslySetInnerHTML={{
											__html: "Founded in 2017 by Deogratius Kilawe, the Tanzanite CEO Roundtable has been helping top executives improve their business performance and sort out their challenges with government stake holders and policy makers. As a moderator and coach, Deogratius draws from a lot of business experience from 10 years of senior level operating experience with Mikono Speakers International and Excel Management and Outsourcing Limited together with working with several corporate start-ups.",
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
					<div className="row mt-lg-20 mt-12">
						<div className="col-lg-4 col-md-12 col-12">
							<div
								className="digital-marketing"
								data-aos="fade-up"
							>
								<h3 className="heading heading-h3">Mission:</h3>
							</div>
						</div>
						<div className="col-lg-7 col-md-12 col-12 offset-lg-1">
							<div
								className="digital-marketing mt-lg-0 mt-6"
								data-aos="fade-up"
							>
								<div className="inner">
									<p>
										The Tanzanite CEO Roundtable will value
										your accomplishments, challenge your
										perspectives and support your business
										to flourish through engaging with the
										right stake holders, capacity building,
										updating the business and economics
										trends and meeting with the right
										business partners.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row mt-lg-20 mt-12">
						<div className="col-lg-4 col-md-12 col-12">
							<div
								className="digital-marketing"
								data-aos="fade-up"
							>
								<h3 className="heading heading-h3">Vision:</h3>
							</div>
						</div>
						<div className="col-lg-7 col-md-12 col-12 offset-lg-1">
							<div
								className="digital-marketing mt-lg-0 mt-6"
								data-aos="fade-up"
							>
								<div className="inner">
									<p>
										Ethical leaders. Good governance Policy
										and Environment. Better businesses.
										Better Lives.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<AboutFive />
			<TestimonialContainer classOption="bg-primary-blue" />
			{/* <CallToActionTwo /> */}
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default AboutUs;
