import PropTypes from "prop-types";
import contactData from "../../data/contactInfo/contactInfo.json";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItem.jsx";

const ContactInformation = ({ classOption }) => {
	return (
		<div className={`section section-padding-t90-b100 ${classOption}`}>
			<div className="container shape-animate">
				<SectionTitle
					titleOption="section-title text-center mb-lg-12 mb-sm-8 mb-xs-8"
					title="Contact us"
					subTitle="Let's talk about what you want to accomplish and how can make it happen"
				/>

				<div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
					{contactData &&
						contactData.map((single, key) => {
							return (
								<div
									key={key}
									className="col mb-6"
									data-aos="fade-up"
								>
									<ContactInfoItem data={single} key={key} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

ContactInformation.propTypes = {
	classOption: PropTypes.string,
};
ContactInformation.defaultProps = {
	classOption: "section section-padding-t90-b100",
};

export default ContactInformation;
