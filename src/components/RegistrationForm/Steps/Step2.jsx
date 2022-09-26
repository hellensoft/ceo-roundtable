import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
	prefix: yup.string().required("Please enter your prefered prefix"),
	fullName: yup.string().required("Please enter your full names"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	phoneNumber: yup.string().required("Please enter your phone number"),
	position: yup.string().required("Please enter your position"),
	personalBio: yup.string().required("Please enter your personal bio"),
});

const Step2 = ({ step, setStep, data, setData }) => {
	console.log(step);
	return (
		<Formik
			data-aos="fade-up"
			initialValues={{
				prefix: data.prefix,
				fullName: data.fullName,
				email: data.email,
				phoneNumber: data.phoneNumber,
				position: data.position,
				personalBio: data.personalBio,
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				setData({ ...data, ...values });
				setStep(3);
			}}
		>
			{({ values }) => (
				<Form className="registration-form-div">
					<h2
						className={`title`}
						dangerouslySetInnerHTML={{
							__html: "Personal Information",
						}}
					></h2>
					<div className="registration-form-element">
						<label htmlFor="prefix">Prefix</label>
						<Field as="select" name="prefix">
							<option value="">Choose a Prefix</option>
							<option value="Mr">Mr</option>
							<option value="Mrs">Mrs</option>
							<option value="Ms">Ms</option>
							<option value="Dr">Dr</option>
							<option value="Prof">Prof</option>
						</Field>
						<ErrorMessage name="prefix">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					<div className="registration-form-element">
						<label htmlFor="fullName">Full Names</label>
						<Field name="fullName" type="text" />
						<ErrorMessage name="fullName">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					<div className="registration-form-element">
						<label htmlFor="email">Email Address</label>
						<Field name="email" type="email" />
						<ErrorMessage name="email">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					<div className="registration-form-element">
						<label htmlFor="phoneNumber">Position</label>
						<Field name="position" type="text" />
						<ErrorMessage name="position">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					<div className="registration-form-element">
						<label htmlFor="position">Phone number</label>
						<Field name="phoneNumber" type="number" />
						<ErrorMessage name="phoneNumber">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					<div className="registration-form-element">
						<label htmlFor="personalBio">Personal Bio</label>
						<Field name="personalBio" as="textarea" type="text" />
						<ErrorMessage name="personalBio">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					<div className="registration-form-buttons">
						<button
							className="btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end"
							type="button"
							onClick={() => {
								setData({ ...data, ...values });
								setStep(1);
							}}
						>
							Previous
						</button>
						<button
							className="btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end"
							type="submit"
						>
							Next
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

Step2.propTypes = {
	step: PropTypes.number,
	setStep: PropTypes.func,
	data: PropTypes.object,
	setData: PropTypes.func,
};

export default Step2;
