import React from "react";
import PropTypes from "prop-types";

const Step4 = ({ step, setStep }) => {
	return (
		<div>
			<p>The application has been submitted successfully</p>
			{step}
			<button onClick={() => setStep(3)}>Previus</button>
		</div>
	);
};

Step4.propTypes = {
	step: PropTypes.number,
	setStep: PropTypes.func,
};

export default Step4;
