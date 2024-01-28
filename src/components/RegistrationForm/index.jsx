import React, { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const RegistrationForm = () => {
	const [step, setStep] = useState(1);
	const [data, setData] = useState({
		prefix: "",
		fullName: "",
		email: "",
		phoneNumber: "",
		position: "",
		personalBio: "",
		companyName: "",
		companyRegistrationNumber: "",
		TINnumber: "",
		VRNnumber: "",
		physicalAddress: "",
		streetAddress: "",
		city: "",
		country: "",
		poBox: "",
		numberOfEmployees: "",
		annualTurnover: "",
		companySize: "",
		sectors: "",
		cv: null,
		companyProfile: null,
		companyLogo: null,
		profilePhoto: null,
		acknowledge: false,
	});

	const steps = [
		{
			id: 1,
			component: <Step1 step={step} setStep={setStep} />,
		},
		{
			id: 2,
			component: (
				<Step2
					data={data}
					setData={setData}
					step={step}
					setStep={setStep}
				/>
			),
		},
		{
			id: 3,
			component: (
				<Step3
					data={data}
					setData={setData}
					step={step}
					setStep={setStep}
				/>
			),
		},
		{
			id: 4,
			component: (
				<Step4
					data={data}
					setData={setData}
					step={step}
					setStep={setStep}
				/>
			),
		}
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
