import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SelectionProcess from "../components/SelectionProcess/SelectionProcess";
import CallToAction from "../container/CallToAction/CallToAction";

const OpenForum = () => {
	return (
		<React.Fragment>
			<SEO title="Tanzanite roundtable || Basic Membership" />
			<Header />
			<Breadcrumb
				image="images/bg/breadcrumb-bg-two.jpg"
				title="Basic Membership"
				content="Home"
				contentTwo="Basic Membership"
			/>
			<div className="section section-padding-t90">
				<div className="container">
					<div className="mt-8" data-aos="fade-up">
						<div className="section-title-two mb-4">
							<h3 className="title">Basic Membership</h3>
						</div>

						<p>
							With “Open Forum” you get access to a variety of
							events moderated by profes- sional coaches on
							diverse topics. Open Forum is designed for CEOs,
							board mem- bers, and senior management. Each event
							is an excellent opportunity for mutual inspiration,
							to share best practices, and develop a valuable
							network of business contacts
						</p>
						<p>
							Open Forum is based on three principles. The first
							one is confidentiality; what happens in Open Forum
							stays in Open Forum. Two: the more you give, the
							more you receive. Participants are encouraged to
							engage in sincere, open exchanges of experience. And
							three: the value of the event is to respect the
							opinions, expectations, and emotions of others. We
							believe that the basis for development within Open
							Forum is not the promotion of one’s own personality
							and accomplishments, but an open exchange of
							experience.
						</p>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="mt-8" data-aos="fade-up">
						<div className="section-title-two mb-4">
							<h3 className="title">
								Types of Open Forum Events
							</h3>
						</div>

						<div data-aos="fade-up" className="ml-4 mb-8">
							<h4 className="sub-title-new">
								i. Executive Breakfast Meeting Event
							</h4>
							<p className="ml-4">
								Breakfast meetings (up to 150 participant) with
								a presentation by one keynote speaker followed
								by a panel discussion with individuals who are
								well informed and articulate on the topic
								selected for each event.
							</p>
						</div>

						<div data-aos="fade-up" className="ml-4 mb-8">
							<h4 className="sub-title-new">
								ii. Evening-Debate
							</h4>
							<p className="ml-4">
								Dinner meetings (up to 12 participant), where
								the issues of leadership and human capital
								management are discussed.
							</p>
						</div>

						<div data-aos="fade-up" className="ml-4 mb-8">
							<h4 className="sub-title-new">
								iii. Visits at Members’ Company
							</h4>
							<p className="ml-4">
								Meetings at the company’s headquarters (office,
								factory, innovation center, etc.) of one of the
								Forum’s CEOs.
							</p>
						</div>

						<div data-aos="fade-up" className="ml-4 mb-8">
							<h4 className="sub-title-new">
								iv. Annual Tanzanite Gala Dinner
							</h4>
							<p className="ml-4">
								The Annual Gala dedicated to CEOs, where leaders
								will share their journeys, with a different
								theme every year.
							</p>
						</div>

						<div data-aos="fade-up" className="ml-4 mb-8">
							<h4 className="sub-title-new">
								v. Tanzanite Conference
							</h4>
							<p className="ml-4">
								A one-day conference, addressed to senior
								managers.
							</p>
						</div>

						<div data-aos="fade-up" className="ml-4 mb-8">
							<h4 className="sub-title-new">
								vi. Annual Tanzanite Retreat
							</h4>
							<p className="ml-4">
								The CEO Annual Retreat is designed to help
								executives discover ways to balance life as a
								CEO and human being. Grounded in the arts,
								humanities and sciences, these enriching
								all-member events offer dynamic experiences that
								elevate mind, body and soul.
							</p>
							<p className="ml-4">
								If you are the CEO of your company and are
								looking to gain a higher level of
								self-awareness, critical insights into the
								issues facing today’s executives, and meet new
								friends and advisors who understand your
								challenges, then CEO Roundtable is for you!
								Explore membership today.
							</p>
						</div>
					</div>
				</div>
			</div>
			<SelectionProcess />
			<CallToAction />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default OpenForum;
