import React from "react";
import "./PageContact.css";
import { NotificationManager as nm } from "react-notifications";

export default class PageContact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
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
			<div id="PageContact" className="page max-sized-page">
				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>Contact</h1>
					</div>

					<div className="col-md-6">
						<a
							href="#"
							onClick={() => PageContact.copyToClipboard("team@cybersecurity-luxembourg.com")}
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-at"/>
									</div>
									<div className="box-text">
										Email address
									</div>
									<div className="box-subtext">
										team@cybersecurity-luxembourg.com
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://cybersecurity.lu"
							target="_blank"
							rel="noreferrer">
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="far fa-paper-plane"/>
									</div>
									<div className="box-text">
										CYBERLUX portal
									</div>
									<div className="box-subtext">
										https://cybersecurity.lu
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-12">
						<h1>Documentation</h1>
					</div>

					<div className="col-md-6">
						<a
							href="/pdf/openXeco presentation.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-file-pdf"/>
									</div>
									<div className="box-text">
										openXeco presentation
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="/pdf/openXeco presentation for NCC.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-file-pdf"/>
									</div>
									<div className="box-text">
										openXeco presentation for NCCs
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://github.com/CybersecurityLuxembourg/openxeco-core/blob/main/doc/INSTALL_SERVER.md"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-file-alt"/>
									</div>
									<div className="box-text">
										Installation documentation
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-12">
						<h1>Repositories</h1>
					</div>

					<div className="col-md-6">
						<a
							href="https://github.com/CybersecurityLuxembourg/openxeco-core"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fab fa-github"/>
									</div>
									<div className="box-text">
										openxeco-core
									</div>
									<div className="box-subtext">
										API, admin webapp and community webapp
										<br/>
										https://github.com/CybersecurityLuxembourg/openxeco-core
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://github.com/CybersecurityLuxembourg/openxeco-web-portal"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fab fa-github"/>
									</div>
									<div className="box-text">
										openxeco-web-portal
									</div>
									<div className="box-subtext">
										ReactJS template for presentation portal
										<br/>
										https://github.com/CybersecurityLuxembourg/openxeco-web-portal
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://github.com/CybersecurityLuxembourg/openxeco-web"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fab fa-github"/>
									</div>
									<div className="box-text">
										openxeco.org
									</div>
									<div className="box-subtext">
										Source code of the webapp you are currently reading ;)
										<br/>
										https://github.com/CybersecurityLuxembourg/openxeco.org
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a
							href="https://github.com/CybersecurityLuxembourg/openxeco-book"
							target="_blank"
							rel="noreferrer"
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fab fa-github"/>
									</div>
									<div className="box-text">
										openxeco-book
									</div>
									<div className="box-subtext">
										User guide of openXeco
										<br/>
										https://github.com/CybersecurityLuxembourg/openxeco-book
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
