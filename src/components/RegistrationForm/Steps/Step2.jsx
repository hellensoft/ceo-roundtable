import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
	companyName: yup.string().required("Please enter your company name"),
	companyRegistrationNumber: yup
		.string()
		.required("Please enter your company registration number"),
	TINnumber: yup.string().required("Please enter company's TIN number"),
	VRNnumber: yup.string().required("Please enter company's VRN number"),
	physicalAddress: yup
		.string()
		.required("Please enter company's physical address"),
	streetAddress: yup.string().required("Please enter company's street address"),
	city: yup.string().required("Please enter company's city"),
	country: yup.string().required("Please enter company's country"),
	poBox: yup.string().required("Please enter company's p.o.box"),
	numberOfEmployees: yup.string().required("Please enter the company's number of employees"),
	annualTurnover: yup.string().required("Please enter company's annual turnover"),
	companySize: yup.string().required("Please enter choose company's company size"),
	// sectors: yup.string().required("Please enter company's sectors"),
});

const Step2 = ({ step, setStep }) => {
	console.log(step);
	return (
		<Formik
			initialValues={{
                companyName: '',
                companyRegistrationNumber: '',
                TINnumber: '',
                VRNnumber: '',
                physicalAddress: '',
                streetAddress: '',
                city: '',
                country: '',
                poBox: '',
                numberOfEmployees: '',
                annualTurnover: '',
				companySize: '',
                sectors: ''
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values);
				setStep(3);
			}}
		>
			<Form className="registration-form-div">
				<h2
					className={`title`}
					dangerouslySetInnerHTML={{ __html: "Company Details" }}
				></h2>

				<div className="registration-form-element">
					<Field
						name="companyName"
						placeholder="Company's Name*"
						type="text"
					/>
					<ErrorMessage name="companyName">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>

				<div className="registration-form-element">
					<Field
						name="companyRegistrationNumber"
						placeholder="Company Registration Number"
						type="number"
					/>
					<ErrorMessage name="companyRegistrationNumber">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* TINnumber */}
				<div className="registration-form-element">
					{" "}
					<Field name="TINnumber" placeholder="TIN Number" type="number" />
					<ErrorMessage name="TINnumber">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* VRNnumber */}
				<div className="registration-form-element">
					{" "}
					<Field name="VRNnumber" placeholder="VRN Number" type="number" />
					<ErrorMessage name="VRNnumber">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* physicalAddress */}
				<div className="registration-form-element">
					{" "}
					<Field name="physicalAddress" placeholder="Physical Address" as='textarea' type="text" />
					<ErrorMessage name="physicalAddress">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* streetAddress */}
				<div className="registration-form-element">
					{" "}
					<Field name="streetAddress" placeholder="Street 1" type="text" />
					<ErrorMessage name="streetAddress">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* city */}
				<div className="registration-form-element">
					{" "}
					<Field name="city" placeholder="City" type="text" />
					<ErrorMessage name="city">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* country */}
				<div className="registration-form-element">
					{" "}
					<Field name="country" placeholder="Country" type="text" />
					<ErrorMessage name="country">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                            {/* poBox */}
				<div className="registration-form-element">
					{" "}
					<Field name="poBox" placeholder="P.O.Box" type="text" />
					<ErrorMessage name="poBox">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                           {/* numberOfEmployees */}
				<div className="registration-form-element">
					{" "}
					<Field name="numberOfEmployees" placeholder="Number of Employees" type="number" />
					<ErrorMessage name="numberOfEmployees">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>
                          
                           {/* annualTurnover */}
				<div className="registration-form-element">
					{" "}
					<Field name="annualTurnover" placeholder="Annual Turnover" type="number" />
					<ErrorMessage name="annualTurnover">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>

                <div className="registration-form-element">
					<Field as="select" name="companySize">
						<option value="">Choose your company size*</option>
						<option value="SMEs">SMEs</option>
						<option value="Large Corporation">Large Corporation</option>
					</Field>
					<ErrorMessage name="companySize">
						{(error) => (
							<p className="registration-form-error">{error}</p>
						)}
					</ErrorMessage>
				</div>

				<div className="registration-form-buttons">
					<button
						className="btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end"
						type="button"
						onClick={() => setStep(1)}
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
		</Formik>
	);
};

Step2.propTypes = {
	step: PropTypes.number,
	setStep: PropTypes.func,
};

export default Step2;
