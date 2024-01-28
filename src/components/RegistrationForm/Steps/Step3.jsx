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
	streetAddress: yup
		.string()
		.required("Please enter company's street address"),
	city: yup.string().required("Please enter company's city"),
	country: yup.string().required("Please enter company's country"),
	poBox: yup.string().required("Please enter company's p.o.box"),
	numberOfEmployees: yup
		.string()
		.required("Please enter the company's number of employees"),
	annualTurnover: yup
		.string()
		.required("Please enter company's annual turnover"),
	companySize: yup
		.string()
		.required("Please enter choose company's company size"),
});

const Step3 = ({ step, setStep, data, setData }) => {
	console.log(step);
	return (
		<Formik
			data-aos="fade-up"
			initialValues={{
				companyName: data.companyName,
				companyRegistrationNumber: data.companyRegistrationNumber,
				TINnumber: data.TINnumber,
				VRNnumber: data.VRNnumber,
				physicalAddress: data.physicalAddress,
				streetAddress: data.streetAddress,
				city: data.city,
				country: data.country,
				poBox: data.poBox,
				numberOfEmployees: data.numberOfEmployees,
				annualTurnover: data.annualTurnover,
				companySize: data.companySize,
				sectors: data.sectors,
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				setData({ ...data, ...values });
				setStep(4);
			}}
		>
			{({ values }) => (
				<Form className="registration-form-div">
					<h2
						className={`title`}
						dangerouslySetInnerHTML={{ __html: "Company Details" }}
					></h2>

					<div className="registration-form-element">
						<label htmlFor="companyName">Company Name</label>
						<Field name="companyName" type="text" />
						<ErrorMessage name="companyName">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>

					<div className="registration-form-element">
						<label htmlFor="companyRegistrationNumber">
							Company Registration Number
						</label>
						<Field name="companyRegistrationNumber" type="number" />
						<ErrorMessage name="companyRegistrationNumber">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* TINnumber */}
					<div className="registration-form-element">
						<label htmlFor="TINnumber">TIN Number</label>
						<Field name="TINnumber" type="number" />
						<ErrorMessage name="TINnumber">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* VRNnumber */}
					<div className="registration-form-element">
						<label htmlFor="VRNnumber">VRN Number</label>
						<Field name="VRNnumber" type="number" />
						<ErrorMessage name="VRNnumber">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* physicalAddress */}
					<div className="registration-form-element">
						<label htmlFor="physicalAddress">
							Physical Address
						</label>
						<Field
							name="physicalAddress"
							as="textarea"
							type="text"
						/>
						<ErrorMessage name="physicalAddress">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* streetAddress */}
					<div className="registration-form-element">
						<label htmlFor="streetAddress">Street 1</label>
						<Field name="streetAddress" type="text" />
						<ErrorMessage name="streetAddress">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* city */}
					<div className="registration-form-element">
						<label htmlFor="city">City</label>
						<Field name="city" type="text" />
						<ErrorMessage name="city">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* country */}
					<div className="registration-form-element">
						<label htmlFor="country">Country</label>
						<Field name="country" type="text" />
						<ErrorMessage name="country">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* poBox */}
					<div className="registration-form-element">
						<label htmlFor="poBox">P.O.Box</label>
						<Field name="poBox" type="text" />
						<ErrorMessage name="poBox">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* numberOfEmployees */}
					<div className="registration-form-element">
						<label htmlFor="numberOfEmployees">
							Number of Employees
						</label>
						<Field name="numberOfEmployees" type="number" />
						<ErrorMessage name="numberOfEmployees">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>

					{/* annualTurnover */}
					<div className="registration-form-element">
						<label htmlFor="annualTurnover">Annual Turnover</label>
						<Field name="annualTurnover" type="number" />
						<ErrorMessage name="annualTurnover">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>

					<div className="registration-form-element">
						<label htmlFor="companySize">Company size</label>
						<Field as="select" name="companySize">
							<option value="">Choose your company size*</option>
							<option value="SMEs">SMEs</option>
							<option value="Large Corporation">
								Large Corporation
							</option>
						</Field>
						<ErrorMessage name="companySize">
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
								setStep(2);
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

Step3.propTypes = {
	step: PropTypes.number,
	setStep: PropTypes.func,
	data: PropTypes.object,
	setData: PropTypes.func,
};

export default Step3;
