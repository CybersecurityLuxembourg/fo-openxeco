import React from "react";
import "./PageAPIUsage.css";
import { NotificationManager as nm } from "react-notifications";
import LoadingBar from "react-top-loading-bar";
import Message from "./box/Message.jsx";

export default class PageAPIUsage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidMount() {
		this.props.fetchNodes();
	}

	static copyToClipboard(text) {
		const dummy = document.createElement("input");
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		dummy.setSelectionRange(0, 99999);
		document.execCommand("copy");
		document.body.removeChild(dummy);
		nm.info("Copied to clipboard!");
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id="PageAPIUsage" className="page max-sized-page">
				<LoadingBar
					className="LoadingBar"
					color='#f11946'
					progress={(this.props.loadingProgress / this.props.nodes.length) * 100}
				/>

				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>API documentation</h1>
					</div>

					{Object.keys(this.props.nodeInformation)
						.filter((n) => this.props.nodeInformation[n]).length > 0
						? Object.keys(this.props.nodeInformation)
							.filter((n) => this.props.nodeInformation[n])
							.map((n, i) => (
								<div className="col-md-6" key={i}>
									<a
										href="#"
										onClick={() => window.open(n + "/doc")}
									>
										<div className="box">
											<div className="box-wrap">
												<div className="box-logo">
													<i className="fas fa-file-alt"/>
												</div>
												<div className="box-text">
													{this.props.nodeInformation[n]
														? this.props.nodeInformation[n].project_name
														: n
													}
												</div>
												<div className="box-subtext">
													{this.props.nodeInformation[n]
														&& this.props.nodeInformation[n].version
													}
												</div>
											</div>
										</div>
									</a>
								</div>
							))
						: <Message
							text="No documentation found"
						/>
					}

					<div className="col-md-12">
						<h1>API usage examples</h1>
					</div>

					<div className="col-md-6">
						<a
							href="https://www.cybersecurity.lu/map"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-map-marked-alt"/>
									</div>
									<div className="box-text">
										Ecosystem map
									</div>
									<div className="box-subtext">
										cybersecurity.lu
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://www.cybersecurity.lu/dashboard"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-chart-bar"/>
									</div>
									<div className="box-text">
										Ecosystem dashboard
									</div>
									<div className="box-subtext">
										cybersecurity.lu
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://distributed.lu/network"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-project-diagram"/>
									</div>
									<div className="box-text">
										Ecosystem network
									</div>
									<div className="box-subtext">
										distributed.lu
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://www.cybersecurity.lu/company/322"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-building"/>
									</div>
									<div className="box-text">
										Company page
									</div>
									<div className="box-subtext">
										cybersecurity.lu
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://www.cybersecurity.lu/search?r=security"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-search"/>
									</div>
									<div className="box-text">
										Search page
									</div>
									<div className="box-subtext">
										cybersecurity.lu
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
