import React from "react";
import PropTypes from "prop-types";

const Intro = ({ data }) => {
	return (
		<div
			className="intro-section overlay section"
			style={{
				backgroundImage: `url(${data.backgroundImage})`,
			}}
		>
			<div className="container">
				<div className="row row-cols-lg-1 row-cols-1">
					<div className="col align-self-center">
						<div className="intro-content">
							<h2 className="title">{data.desc}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Intro.propTypes = {
	data: PropTypes.object,
};

export default Intro;
