import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";
import HomeOne from "./pages/HomeOne";
import About from "./pages/About";
import RegisterMember from "./pages/RegisterMember";
import OpenForum from "./pages/OpenForum";
import OpenForumPeerGroup from "./pages/OpenForumPeerGroup";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

// CSS File Here
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "./assets/scss/style.scss";

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
					<Route path="/about" component={About} />
					<Route path="/register-member" component={RegisterMember} />
					<Route path="/basic-membership" component={OpenForum} />
					<Route
						path="/extended-membership"
						component={OpenForumPeerGroup}
					/>
					<Route path="/publication" component={Publication} />
					<Route path="/event" component={Events} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</NavScrollTop>
		</Router>
	);
}

export default App;
