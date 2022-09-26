import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
// import HomeThree from "./pages/HomeThree";
import About from "./pages/About";
import RegisterMember from "./pages/RegisterMember";
import OpenForum from "./pages/OpenForum";
import OpenForumPeerGroup from "./pages/OpenForumPeerGroup";
// import WorkDetails from "./pages/WorkDetails";
import Publication from "./pages/Publication";
// import BlogClassic from "./pages/BlogClassic";
// import BlogDetails from "./pages/BlogDetails";
// import BlogCategories from "./pages/BlogCategories";
// import BlogTag from "./pages/BlogTag";
import Contact from "./pages/Contact";

// CSS File Here
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "./assets/scss/style.scss";
import Events from "./pages/Events";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 80,
			duration: 1000,
			once: true,
			easing: "ease",
		});
		AOS.refresh();
	}, []);
	return (
		<Router>
			<NavScrollTop>
				<Switch>
					<Route path="/" exact component={HomeOne} />
					{/* <Route path="/home-one" exact component={HomeOne}/> */}
					<Route path="/home-two" component={HomeTwo} />
					{/* <Route path="/home-three" component={HomeThree}/> */}
					<Route path="/about" component={About} />
					<Route path="/register-member" component={RegisterMember} />
					<Route path="/open-forum" component={OpenForum} />
					<Route
						path="/open-forum+peer-group"
						component={OpenForumPeerGroup}
					/>
					{/* <Route path="/work-details/:id" component ={WorkDetails} /> */}
					<Route path="/publication" component={Publication} />
					<Route path="/event" component={Events} />
					{/* <Route path="/blog-classic" component ={BlogClassic} /> */}
					{/* <Route path="/tag/:slug" component ={BlogTag} /> */}
					{/* <Route path="/category/:slug"component ={BlogCategories} /> */}
					{/* <Route path="/blog-details/:id"component ={BlogDetails} /> */}
					<Route path="/contact" component={Contact} />
					{/* <Route component ={NotFound} /> */}
				</Switch>
			</NavScrollTop>
		</Router>
	);
}

export default App;
