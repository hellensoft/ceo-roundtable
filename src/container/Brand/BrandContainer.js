import PropTypes from "prop-types";
import React from "react";
import BrandData from "../../data/brand/brand.json";
import Brand from "../../components/Brand/Brand.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitles/SectionTitle.jsx";
import "swiper/swiper.scss";

const BrandContainer = ({ classOption }) => {
	return (
		<div className={`brand-section section ${classOption}`}>
			<div className="container">
				<SectionTitle
					subTitle=""
					title="Partners"
				/>
				<div className="row">
					<div className="col-lg-12" data-aos="fade-up">
						<div className="brand-wrapper">
							<div className="brand-list">
								<Swiper
									className="brand-carousel"
									spaceBetween={30}
									slidesPerView={4}
									loop
									breakpoints={{
										576: {
											slidesPerView: 4,
										},

										320: {
											slidesPerView: 2,
										},
									}}
								>
									{BrandData &&
										BrandData.map((single, key) => {
											return (
												<SwiperSlide key={key}>
													<Brand
														data={single}
														key={key}
													/>
												</SwiperSlide>
											);
										})}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

BrandContainer.propTypes = {
	classOption: PropTypes.string,
};
BrandContainer.defaultProps = {
	classOption: "brand-section section section-padding-bottom",
};

export default BrandContainer;
