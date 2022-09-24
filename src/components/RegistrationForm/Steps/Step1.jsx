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

const Step1 = ({ step, setStep }) => {
	console.log(step);
	return (
		<Formik
			initialValues={{
				prefix: "",
				fullName: "",
				email: "",
				phoneNumber: "",
				position: "",
                personalBio: ''
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values);
				setStep(2);
			}}
		>
			<Form className="registration-form-div">
				<h2
					className={`title`}
					dangerouslySetInnerHTML={{ __html: "Personal Information" }}
				></h2>
				<div className="registration-form-element">
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
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
				<div className="registration-form-element">
					<Field
						name="fullName"
						placeholder="Full Name"
						type="text"
					/>
					<ErrorMessage name="fullName">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
				<div className="registration-form-element">
					<Field
						name="email"
						placeholder="Email Address"
						type="email"
					/>
					<ErrorMessage name="email">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
				<div className="registration-form-element">
					{" "}
					<Field name="position" placeholder="Position" type="text" />
					<ErrorMessage name="position">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
				<div className="registration-form-element">
					{" "}
					<Field
						name="phoneNumber"
						placeholder="Phone number"
						type="number"
					/>
					<ErrorMessage name="phoneNumber">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
				<div className="registration-form-element">
					{" "}
					<Field
						name="personalBio"
						placeholder="Physical Address"
						as="textarea"
						type="text"
					/>
					<ErrorMessage name="personalBio">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
				<div className="registration-form-buttons">
					<p></p>
					<button
						className="btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end"
						type="submit"
					>
						Next
					</button>
				</div>
			</Form>
		</Formik>
	);
};

Step1.propTypes = {
	step: PropTypes.number,
	setStep: PropTypes.func,
};

export default Step1;
