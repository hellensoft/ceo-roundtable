// import { useState, useEffect, useRef } from "react";
// import SectionTitle from "../SectionTitles/SectionTitle";
// import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
// import Tilt from "react-parallax-tilt";
// import Parallax from "parallax-js";

const MembershipType = () => {
	// const [scale] = useState(1.04);
	// const sceneEl = useRef(null);

	// useEffect(() => {
	// 	const parallaxInstance = new Parallax(sceneEl.current, {
	// 		relativeInput: true,
	// 	});

	// 	parallaxInstance.enable();

	// 	return () => parallaxInstance.disable();
	// }, []);
	return (
		<div className="section section-padding-t90 section-padding-bottom-200">
			<div className="container">
				{/* <SectionTitle
					title="The Tanzanite CEO Round Table Structure"
					subTitle="The Tanzanite CEO Round Table’s events are divided into two groups. The first kind is organized within the “Open Forum” model and consists of meetings of different sizes and mixed participation. The second kind is called “Peer Groups” and consists of recurring workshops of smaller, familiar sizes."
					subMaxWidth="sub-title-new"
				/> */}

				{/* <div className="row">
					<div
						className="col-xl-7 col-lg-6 col-12"
						data-aos="fade-up"
					>
						<div className="about-image-area">
							<div className="about-image">
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
										src="/images/about/home-one-about/home_agency_about_1.jpg"
										alt=""
									/>
								</Tilt>
							</div>

							<div className="about-image">
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
										src="/images/about/home-one-about/home_agency_about_2.jpg"
										alt=""
									/>
								</Tilt>
							</div>
							<div
								className="shape shape-1"
								id="scene"
								ref={sceneEl}
							>
								<span data-depth="1">
									<img
										src="/images/shape-animation/about-shape-1.png"
										alt=""
									/>
								</span>
							</div>
						</div>
					</div>

					<div
						className="col-xl-5 col-lg-6 col-12"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="about-content-area">
							<SectionTitleTwo
								subTitle="OPEN FORUM"
								title="Basic Membership"
							/>

							<p>
								With “Open Forum” you get access to a variety of
								events moderated by professional coaches on
								diverse topics. Open Forum is designed for CEOs,
								board members, and senior management. Each event
								is an excellent opportunity for mutual
								inspiration, to share best practices, and
								develop a valuable network of business contacts.
							</p>
							<p>
								Open Forum is based on three principles. The
								first one is confidentiality; what happens in
								Open Forum stays in Open Forum. Two: the more
								you give, the more you receive. Participants are
								encouraged to engage in sincere, open exchanges
								of experience. And three: the value of the event
								is to respect the opinions, expectations, and
								emotions of others. We believe that the basis
								for development within Open Forum is not the
								promotion of one’s own personality and
								accomplishments, but an open exchange of
								experience.
							</p>
						</div>
					</div>
				</div> */}

				<div className="mt-8" data-aos="fade-up">
					<div className="section-title-two mb-4">
						<h3 className="title">Open Forum</h3>
						<span className="sub-title-new">Basic Membership</span>
					</div>

					<p>
						With “Open Forum” you get access to a variety of events
						moderated by professional coaches on diverse topics.
						Open Forum is designed for CEOs, board members, and
						senior management. Each event is an excellent
						opportunity for mutual inspiration, to share best
						practices, and develop a valuable network of business
						contacts.
					</p>
					<p>
						Open Forum is based on three principles. The first one
						is confidentiality; what happens in Open Forum stays in
						Open Forum. Two: the more you give, the more you
						receive. Participants are encouraged to engage in
						sincere, open exchanges of experience. And three: the
						value of the event is to respect the opinions,
						expectations, and emotions of others. We believe that
						the basis for development within Open Forum is not the
						promotion of one’s own personality and accomplishments,
						but an open exchange of experience.
					</p>
				</div>

				<div className="mt-8" data-aos="fade-up">
					<div className="section-title-two mb-4">
						<h3 className="title">Open Forum + Peer group</h3>
						<span className="sub-title-new">
							Expanded Membership
						</span>
					</div>

					<p>
						Peer Group is a new and dynamic formula for the
						development of leaders from different business sectors.
						Peer Group consists of workshops focused on personal and
						professional development. Each group is based on the
						idea of sharing a strong common denominator, like
						similar needs, profiles, challenges, etc. (e.g.: CEO for
						CEE, CEO of Retail Companies, Women Leaders, etc). The
						main objectives of Peer Group are mutual inspiration,
						responding to individual needs of participants, and
						learning to tackle problems together.
					</p>
					<p>
						In This Packages Member will have dedicated press
						release pages in our website so that they can share
						their news.
					</p>
				</div>

				<div className="mt-8" data-aos="fade-up">
					<div className="section-title-two mb-4">
						<h3 className="title">VIP Membership</h3>
						<span className="sub-title-new">
							Open Forum + Peer group
						</span>
					</div>

					<p>
						This is kind of membership where in this category
						members will benefit from other platform open forum and
						Open forum+Peer Group Plus Meeting with policy makers,
						Top Government stake holders includes ministers and
						presidents, global development partners and attending
						World Investment ,Business and economics forums each
						year to represent our organization and come back and
						share with other members. These members will be given
						space to place their business logos on our website and a
						dedicated press release page for their companies.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MembershipType;
