import React from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const SelectionProcess = () => {
	return (
		<div className="video-section section section-padding">
			<div className="container">
				<SectionTitle
					title="Member Selection Process"
					subTitle="Candidates are selected carefully from a variety of industries according to our key success factors."
				/>
				<div className="row align-items-center">
					<div
						className="skill-with-video-content"
						data-aos="fade-up"
					>
						<div className="section-title-two mb-4">
							<h3 className="title">Step 1: Introduction</h3>
							<span className="sub-title-new">
								Mutual Fit Assessment between Perspective Member
								and President
							</span>
						</div>

						<ul className="agency-list">
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Potential member is recommended{" "}
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Brief introductory phone call
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">Lunch meeting</div>
							</li>
						</ul>
					</div>

					<div
						className="skill-with-video-content"
						data-aos="fade-up"
					>
						<div className="section-title-two mb-4">
							<h3 className="title">Step 2: Application</h3>
							<span className="sub-title-new">
								Consideration for Membership
							</span>
						</div>

						<ul className="agency-list">
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Perspective member completes and forwards
									consideration form
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									President submits completed application to
									board with notes
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Board decision (unanimous approval is
									required)
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
								Step 3: Roundtable Acceptance
							</h3>
							<span className="sub-title-new">
								Group reviews member for mutual fit (unanimous
								approval is required)
							</span>
						</div>

						<ul className="agency-list">
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									President identifies most suitable group
									(culture, business fit and challenges, etc.)
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Group interviews perspective member
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Group decision and on boarding
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectionProcess;
