import { useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import { Link } from "react-router-dom";
import Parallax from "parallax-js";

const CallToAction = () => {
	const sceneEl = useRef(null);
	useEffect(() => {
		const parallaxInstance = new Parallax(sceneEl.current, {
			relativeInput: true,
		});

		parallaxInstance.enable();

		return () => parallaxInstance.disable();
	}, []);
	return (
		<div
			className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two"
			style={{ backgroundImage: `url(/images/bg/newsletter.jpg)` }}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12 m-auto">
						<div className="cta-content text-center">
							<SectionTitle
								titleOption="color-light text-center mb-0"
								title="Become a Member"
								subTitle="Membership to the CEO Roundtable is open to CEOs and Chairpersons of organizations operating significant business in Tanzania and is by invitation only."
							/>
							<Link
								to={"/register-member"}
								className="btn btn-primary btn-hover-secondary mt-6"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								Join Us
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="shape shape-1" id="scene" ref={sceneEl}>
				<span data-depth="1">
					<img
						src={"/images/shape-animation/newsletter-shape.png"}
						alt=""
					/>
				</span>
			</div>
		</div>
	);
};

export default CallToAction;
