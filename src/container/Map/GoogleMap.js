import React from "react";

const GoogleMap = () => {
	return (
		<div className="google-map-area section text-center section-padding-bottom">
			<div className="container">
				<div className="contact-map-area" data-aos="fade-up">
					<iframe
						className="contact-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2077430227!2d39.27750605051347!3d-6.744497295100548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d098b11cfd1%3A0xa38b89e66226abc4!2sBains%20Ave%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1664014340535!5m2!1sen!2stz"
						aria-hidden="false"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default GoogleMap;
