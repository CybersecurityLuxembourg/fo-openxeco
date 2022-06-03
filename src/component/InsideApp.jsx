import React from "react";
import "./InsideApp.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu.jsx";
import PageHome from "./PageHome.jsx";
import PageContact from "./PageContact.jsx";
import PageNetwork from "./PageNetwork.jsx";

export default class InsideApp extends React.Component {
	constructor(props) {
		super(props);

		this.changeState = this.changeState.bind(this);
		this.changeMenu = this.changeMenu.bind(this);

		this.state = {
			selectedMenu: window.location.pathname.replace(/\//, ""),
		};
	}

	changeMenu(menu) {
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
