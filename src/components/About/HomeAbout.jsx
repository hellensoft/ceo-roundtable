import { useState, useEffect, useRef } from "react";
import SectionTitle from "../SectionTitles/SectionTitle";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

const HomeAbout = () => {
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
		<div className="section section-padding-t90 section-padding-bottom-200">
			<div className="container">
				<SectionTitle
					title="The Tanzanite C.E.O Roundtable"
					subTitle="The Roundtable consists of individual that contain 200+ members"
				/>

				<div className="row">
					<div
						className="col-xl-7 col-lg-6 col-12"
						data-aos="fade-up"
					>
						<div className="about-image-area">
							<div className="about-image">
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
										style={{
											width: "360px",
											height: "450px",
											objectFit: "cover",
											objectposition: "center",
										}}
										src="/images/briefcase.jpg"
										alt=""
									/>
								</Tilt>
							</div>

							<div className="about-image">
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
										style={{
											width: "360px",
											height: "450px",
											objectFit: "cover",
											objectposition: "center",
										}}
										src="/images/kufunga-vifungo.jpg"
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
										src="/images/shape-animation/about-shape-1.png"
										alt=""
									/>
								</span>
							</div>
						</div>
					</div>

					<div
						className="col-xl-5 col-lg-6 col-12"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="about-content-area">
							<SectionTitleTwo
								subTitle="Every day brings new challenges"
								title="CEOs and top decision-makers demand a high return for their time."
							/>

							<p>
								The Tanzanite CEO Roundtable member companies
								provide products and services for a wide variety
								of industries including: Agriculture / Mining /
								Construction / Building Ser- vices / Education /
								Finance / Insurance / Real Estate / IT Services
								/ Manufactur- ing / Nonprofit / Professional
								Services / Publishing / Retail/Wholesale / Soft-
								ware as well as government para- statals.
							</p>

							<Link
								className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4"
								to="/about"
							>
								About Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
