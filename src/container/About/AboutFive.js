import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutFive = () => {
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
		<div className="section section-padding-top section-padding-bottom-180">
			<div className="container">
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
											width: "370px",
											height: "400px",
											objectFit: "cover",
											objectposition: "center",
										}}
										src={"/images/holding.jpg"}
										alt=""
									/>
								</Tilt>
							</div>
							<div className="about-image">
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
                                    style={{
											width: "370px",
											height: "400px",
											objectFit: "cover",
											objectposition: "center",
										}}
										src={"/images/kufunga-vifungo.jpg"}
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
											"/images/shape-animation/about-shape-1.png"
										}
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
								subTitle="The Tanzanite CEO RoundTable"
								title="The roundtable will include CEOs from small businesses to large companies."
							/>

							<p style={{ textAlign: "justify" }}>
								Based in Tanzania the Tanzanite CEO Roundtable
								focuses on spreading its wings across Africa and
								then go global starting with the China Chapter,
								Europe, America and Asia Chapters the main aim
								being to increase African intra- trade which is
								now less than 12%.
							</p>

							<Link
								className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
								to={"/register-member"}
							>
								Join Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutFive;
