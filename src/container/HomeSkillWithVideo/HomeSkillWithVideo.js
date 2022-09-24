import React from "react";
import { Link } from "react-router-dom";
// import ModalVideo from "react-modal-video";

const HomeSkillWithVideo = () => {
	// const [isOpen, setOpen] = useState(false)

	return (
		<div className="video-section section section-padding">
			<div className="container">
				<div className="row align-items-center">
					<div className="skill-with-video-content">
						<div className="section-title-two mb-8">
							<span className="sub-title">Why join us?</span>
							<h3 className="title">
								Members are assured of peer level interaction
								and benefit by:
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
									Gaining the collective wisdom and multiple
									perspectives on business and operational
									issues through open and unbiased discussions
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Learning how to avoid mistakes, pitfalls and
									roadblocks with their business
								</div>
							</li>
							<li className="item">
								<div className="icon">
									<i className="fas fa-check"></i>
								</div>
								<div className="text">
									Gaining valuable information, insight and
									knowledge from other experienced CEOs
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
	);
};

export default HomeSkillWithVideo;
