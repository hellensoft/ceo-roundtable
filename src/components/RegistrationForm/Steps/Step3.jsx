import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import { FileInput } from "formik-file-and-image-input/lib";

// const CustomFileInputWrapper = (data) => {
//     console.log(data)
// 	return (
//         <p>testing</p>
// 		// <div>
// 		// 	<p>{fileName}</p>
// 		// 	<button className="btn btn-secondary" onClick={onClick}>
// 		// 		Choose File
// 		// 	</button>
// 		// </div>
// 	);
// };

// CustomFileInputWrapper.propTypes = {
// 	onClick: PropTypes.func,
// 	fileName: PropTypes.string,
// };

const validationSchema = yup.object().shape({
	cv: yup.mixed().required("Please upload your CV"),
	companyProfile: yup.mixed().required("Please upload your company profile"),
	companyLogo: yup.mixed().required("Please upload your company logo"),
	profilePhoto: yup.mixed().required("Please upload your profile photo"),
	// signedBrela: yup
	// 	.mixed()
	// 	.required("Please upload your signed brela document"),
});

const Step3 = ({ step, setStep }) => {
	// const fileFormats = ["application/pdf"];
	console.log(step);
	return (
		<Formik
			initialValues={{
				cv: null,
				companyProfile: null,
				companyLogo: null,
				profilePhoto: null,
				// signedBrela: null,
				acknowledge: false,
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values);
				setStep(4);
			}}
		>
			{({ setFieldValue, values }) => (
				<Form className="registration-form-div">
					<div className="registration-form-buttons">
						<h2
							className={`title`}
							dangerouslySetInnerHTML={{ __html: "Attachments" }}
						/>
						<p className="mr-20">Final</p>
					</div>

					{/* CV */}
					<div className="registration-form-element">
						<p
							className={`title`}
							dangerouslySetInnerHTML={{ __html: "CV" }}
						/>
						<div className="registration-file">
							<label
								htmlFor="cv"
								className="btn btn-outline-primary"
							>
								Upload CV
							</label>
						</div>
						{values.cv && <p>{values.cv.name}</p>}
						<input
							id="cv"
							name="cv"
							type="file"
							onChange={(event) => {
								setFieldValue(
									"cv",
									event.currentTarget.files[0]
								);
							}}
						/>
						<ErrorMessage name="cv">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* companyProfile */}
					<div className="registration-form-element">
						<p
							className={`title`}
							dangerouslySetInnerHTML={{
								__html: "Company Profile",
							}}
						/>
						<div className="registration-file">
							<label
								htmlFor="companyProfile"
								className="btn btn-outline-primary"
							>
								Upload company profile
							</label>
						</div>
						{values.companyProfile && (
							<p>{values.companyProfile.name}</p>
						)}
						<input
							id="companyProfile"
							name="companyProfile"
							type="file"
							onChange={(event) => {
								setFieldValue(
									"companyProfile",
									event.currentTarget.files[0]
								);
							}}
						/>
						<ErrorMessage name="companyProfile">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* companyLogo */}
					<div className="registration-form-element">
						<p
							className={`title`}
							dangerouslySetInnerHTML={{ __html: "Company Logo" }}
						/>
						<div className="registration-file">
							<label
								htmlFor="companyLogo"
								className="btn btn-outline-primary"
							>
								Upload company logo
							</label>
						</div>
						{values.companyLogo && <p>{values.companyLogo.name}</p>}
						<input
							id="companyLogo"
							name="companyLogo"
							type="file"
							onChange={(event) => {
								setFieldValue(
									"companyLogo",
									event.currentTarget.files[0]
								);
							}}
						/>
						<ErrorMessage name="companyLogo">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* profilePhoto */}
					<div className="registration-form-element">
						<p
							className={`title`}
							dangerouslySetInnerHTML={{
								__html: "Profile photo",
							}}
						/>
						<div className="registration-file">
							<label
								htmlFor="profilePhoto"
								className="btn btn-outline-primary"
							>
								Upload profile photo
							</label>
						</div>
						{values.profilePhoto && (
							<p>{values.profilePhoto.name}</p>
						)}
						<input
							id="profilePhoto"
							name="profilePhoto"
							type="file"
							onChange={(event) => {
								setFieldValue(
									"profilePhoto",
									event.currentTarget.files[0]
								);
							}}
						/>
						<ErrorMessage name="profilePhoto">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* acknowldge */}
					<div className="registration-form-element">
						<label>
							<p>
								<Field type="checkbox" name="acknowledge" /> &nbsp;I
								acknowledge that the information provided is
								accurate and all the documents attached are
								authentic.
							</p>
						</label>
						<ErrorMessage name="profilePhoto">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div>
					{/* signedBrela */}
					{/* <div className="registration-form-element">
						<p
							className={`title`}
							dangerouslySetInnerHTML={{ __html: "CV" }}
						/>
						<div className="registration-file">
							<label
								htmlFor="cv"
								className="btn btn-outline-primary"
							>
								Upload CV
							</label>
						</div>
						{values.cv && <p>{values.cv.name}</p>}
						<input
							id="cv"
							name="cv"
							type="file"
							onChange={(event) => {
								setFieldValue(
									"cv",
									event.currentTarget.files[0]
								);
							}}
						/>
						<ErrorMessage name="cv">
							{(error) => (
								<p className="registration-form-error">
									{error}
								</p>
							)}
						</ErrorMessage>
					</div> */}

					<div className="registration-form-buttons">
						<button
							className="btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end"
							type="button"
							onClick={() => setStep(2)}
						>
							Previous
						</button>
						<button
							className={`btn btn-primary btn-hover-secondary mt-6 registration-form-buttons__end ${
								!values.acknowledge ? "disabled" : ""
							}`}
							type="submit"
							disabled={!values.acknowledge}
						>
							Submit
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
};

export default Step3;
