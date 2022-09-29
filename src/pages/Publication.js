import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import SectionTitle from "../components/SectionTitles/SectionTitle";
import CallToAction from "../container/CallToAction/CallToAction";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Publication = () => {
	const [submitted, setSubmitted] = useState(false);
	console.log(submitted);

	return (
		<React.Fragment>
			<SEO title="Tanzanite roundtable || Publication" />
			<Header />
			<Breadcrumb
				image="images/dar.jpeg"
				title="Publications"
				content="Home"
				contentTwo="Publication"
			/>
			<div className="contact-form-section section section-padding-t90-b100 bg-primary-blue">
				<div className="container">
					<div className="row">
						<div className="offset-lg-2 col-lg-8">
							<SectionTitle
								headingOption="fz-32"
								title="Be the first to here from us"
								subTitle="Currently we don't have any publications yet, but subscribe to get notified for our publication"
							/>
							<div
								className="contact-form"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<Formik
									initialValues={{
										email: "",
									}}
									validationSchema={yup.object().shape({
										email: yup
											.string()
											.email("Please fill a valid email")
											.required("Please fill this field"),
									})}
									onSubmit={(values) => {
										console.log(values);
										setSubmitted(true);
									}}
								>
									<Form>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Field
												name="email"
												type="email"
												placeholder="Email Address"
											/>
											<button
												type="submit"
												className="btn btn-primary ml-2"
											>
												Submit
											</button>
										</div>
										<ErrorMessage name="email">
											{(error) => (
												<p className="registration-form-error">
													{error}
												</p>
											)}
										</ErrorMessage>
									</Form>
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CallToAction />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default Publication;
