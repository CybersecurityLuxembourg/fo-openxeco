import React from "react";
import "./InsideApp.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu.jsx";
import PageHome from "./PageHome.jsx";
import PageAPIUsage from "./PageAPIUsage.jsx";
import PageContact from "./PageContact.jsx";
import PageNetwork from "./PageNetwork.jsx";
import { getForeignRequest } from "../utils/request.jsx";

export default class InsideApp extends React.Component {
	constructor(props) {
		super(props);

		this.changeMenu = this.changeMenu.bind(this);

		this.state = {
			selectedMenu: window.location.pathname.replace(/\//, ""),
			nodeInformation: {},
			loadingProgress: 0,
			nodes: [
				"https://api.cybersecurity.lu",
				"https://api.distributed.lu",
				"https://api.cyber4africa.org",
				"https://api.encryptioneurope.eu",
				"https://api.ensure-collaborative.eu",
			],
		};
	}

	fetchNodes() {
		this.setState({ nodeInformation: {} }, () => {
			Promise.all(this.state.nodes.map(this.fetchNode)).then((data) => {
				const nodeInformation = {};

				data.forEach((d, i) => {
					nodeInformation[this.state.nodes[i]] = d;
				});

				this.setState({ nodeInformation });
			});
		});
	}

	fetchNode(baseUrl) {
		const url = baseUrl + "/public/get_public_node_information";

		return new Promise((resolve) => getForeignRequest(url, (data) => {
			resolve(data);
			this.setState({ loadingProgress: this.state.loadingProgress + 1 });
		}, () => {
			resolve(null);
			this.setState({ loadingProgress: this.state.loadingProgress + 1 });
		}, () => {
			resolve(null);
			this.setState({ loadingProgress: this.state.loadingProgress + 1 });
		}));
	}

	changeMenu(menu) {
		console.log(menu);
		this.setState({ selectedMenu: menu });
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id="InsideApp">
				<a
					href="https://github.com/CybersecurityLuxembourg/openxeco-core"
					id="InsideApp-ForkMe"
				>
					<img
						loading="lazy"
						width="149"
						height="149"
						src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
						className="attachment-full size-full"
						alt="Fork me on GitHub"
						data-recalc-dims="1"/>
				</a>

				<div id="InsideApp-wrapped">
					<div className="row">
						<div className="col-md-3">
							<Menu
								selectedMenu={this.state.selectedMenu}
								changeMenu={this.changeMenu}
							/>
						</div>

						<div id="InsideApp-content" className="col-md-9">
							<Switch>
								<Route path="/network" render={(props) => <PageNetwork
									changeMenu={this.changeMenu}
									nodes={this.state.nodes}
									nodeInformation={this.state.nodeInformation}
									fetchNodes={() => this.fetchNodes()}
									loadingProgress={this.state.loadingProgress}
									{...props}
								/>}/>
								<Route path="/api" render={(props) => <PageAPIUsage
									nodes={this.state.nodes}
									nodeInformation={this.state.nodeInformation}
									fetchNodes={() => this.fetchNodes()}
									loadingProgress={this.state.loadingProgress}
									{...props}
								/>}/>
								<Route path="/contact" render={(props) => <PageContact
									{...props}
								/>}/>
								<Route path="/" render={(props) => <PageHome
									changeMenu={this.changeMenu}
									{...props}
								/>}/>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
