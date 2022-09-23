import React, { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
// import Step4 from "./Steps/Step4";

const RegistrationForm = () => {
	const [step, setStep] = useState(1);

	const steps = [
		{
			id: 1,
			component: <Step1 step={step} setStep={setStep} />,
		},
		{
			id: 2,
			component: <Step2 step={step} setStep={setStep} />,
		},
		{
			id: 3,
			component: <Step3 step={step} setStep={setStep} />,
		},
		// {
		// 	id: 4,
		// 	component: <Step4 step={step} setStep={setStep} />,
		// },
	];

	return (
		<div className="section section-padding-t90-b100">
			<div className="container pt-8 mb-8">
				{steps.find((el) => el.id === step).component}
			</div>
		</div>
	);
};

export default RegistrationForm;
