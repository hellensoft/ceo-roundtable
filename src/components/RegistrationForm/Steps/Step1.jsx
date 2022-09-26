import React from "react";
import SectionTitle from "../../../components/SectionTitles/SectionTitle";
import PropTypes from "prop-types";

const Step1 = ({ step, setStep }) => {
	console.log(step);
	return (
		<div className="video-section section section-padding">
			<div className="container">
				<SectionTitle title="Please got through the checklist below before you start filling the application form" />
				<div className="row align-items-center">
					<div
						className="skill-with-video-content"
						data-aos="fade-up"
					>
						<div className="section-title-two mb-4">
							<h3 className="title">
								What to look for before form submission
							</h3>
						</div>

						<ul className="agency-list">
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Ensure that the email address and phone
									numbers are correct before form submission
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Review your information for spelling/typing
									errors
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Short Personal Bio (Not more than 200 words)
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									After submitting the form you will be
									directed to a page confirming a success
									submission, if not please resend your
									application
								</div>
							</li>
						</ul>
					</div>

					<div
						className="skill-with-video-content"
						data-aos="fade-up"
					>
						<div className="section-title-two mb-4">
							<h3 className="title">
								Documents you will need to attach
							</h3>
						</div>

						<ul className="agency-list">
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									An updated CV / Resume (PDF/DOC/DOCX)
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									A signed national integrity Pledge
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">Company Pofile (PDF)</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Company Logo (JPEG/PDF)
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									CEO&apos;s photo (JPEG not less than 500 X
									500px)
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="registration-form-buttons-center mt-4">
				<button
					className="btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end"
					type="button"
					onClick={() => setStep(2)}
				>
					Start your application here
				</button>
			</div>
		</div>
	);
};

Step1.propTypes = {
	step: PropTypes.number,
	setStep: PropTypes.func,
};

export default Step1;
