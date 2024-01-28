import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import SectionTitleTwo from "../components/SectionTitles/SectionTitleTwo";
import AboutFour from "../container/About/AboutFour";
// import AboutFive from "../container/About/AboutFive";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutUs = () => {
	const [scale] = useState(1.04);
	const sceneEl = useRef(null);
	useEffect(() => {
		const parallaxInstance = new Parallax(sceneEl.current, {
			relativeInput: true,
		});

		parallaxInstance.enable();

		return () => parallaxInstance.disable();
	}, []);

	return (
		<React.Fragment>
			<SEO title="Tanzanite roundtable || About" />
			<Header />
			<Breadcrumb
				image="images/dar.jpeg"
				title="About Us"
				content="Home"
				contentTwo="About Us"
			/>
			<AboutFour />
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
											__html: "To expand its wings across Africa and then go global, beginning with the China Chapter, Europe, America, and Asia Chapters, with the primary goal of increasing African intra-trade, which is now less than 12%.",
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
											__html: "By fostering ethical leaders, effective governance practic- es, and environmental stewardship, We strive to be acknowledged as Africa's most right-minded and excel- lent platform. Better businesses. Better Lives.",
										}}
									/>
								</div>
							</div>
							<div
								className="col-xl-6 col-lg-6 col-12"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<div className="about-image-area about-shape-animation right-0 mr-0">
									<div className="about-image js-tilt">
										<Tilt
											scale={scale}
											transitionSpeed={4000}
										>
											<img
												style={{
													width: "370px",
													height: "400px",
													objectFit: "cover",
													objectposition: "center",
												}}
												src={"/images/explaining.jpeg"}
												alt=""
											/>
										</Tilt>
									</div>
									<div className="about-image js-tilt">
										<Tilt
											scale={scale}
											transitionSpeed={4000}
										>
											<img
												src={
													"/images/about/about-2.jpg"
												}
												alt=""
											/>
										</Tilt>
									</div>
									<div
										className="shape shape-1"
										id="scene"
										ref={sceneEl}
									>
										<span data-depth="1">
											<img
												src={
													"/images/shape-animation/video-shape-1.png"
												}
												alt=""
											/>
										</span>
									</div>
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
								<div className="about-content-area ml-6 mt-0 mb-md-10 mb-10">
									<SectionTitleTwo
										subTitle="Values"
										title="Our Values"
									/>
									<ul className="agency-list">
										<li className="item">
											<div className="icon">
												<i className="fas fa-check"></i>
											</div>
											<div className="text">
												Accountability
											</div>
										</li>
										<li className="item">
											<div className="icon">
												<i className="fas fa-check"></i>
											</div>
											<div className="text">
												Adaptability
											</div>
										</li>
										<li className="item">
											<div className="icon">
												<i className="fas fa-check"></i>
											</div>
											<div className="text">
												Integrity
											</div>
										</li>
										<li className="item">
											<div className="icon">
												<i className="fas fa-check"></i>
											</div>
											<div className="text">
												Inclusion & Diversity
											</div>
										</li>
										<li className="item">
											<div className="icon">
												<i className="fas fa-check"></i>
											</div>
											<div className="text">
												Motivation
											</div>
										</li>
										<li className="item">
											<div className="icon">
												<i className="fas fa-check"></i>
											</div>
											<div className="text">
												Speed and Swiftness
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <AboutFive /> */}
			<TestimonialContainer classOption="bg-primary-blue" />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default AboutUs;
