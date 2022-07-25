import React from "react";
import "./PageHome.css";

export default class PageHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id={"PageHome"}>
				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						<p>
							<b>openXeco</b>, open exchange for ecosystems, is an open source
							project to manage and interconnect
							ecosystems.
						</p>

						<p>
							The software solution offers multiple applications with simple UX to enhance
							the management of a community. This includes
							a repertory of the ecosystem, a content management system, communication tools
							and collaboration processes between the organisation and the community.
						</p>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-globe-europe"/>
								</div>
								<div className="box-text">
									Ecosystem promotion
								</div>
								<div className="box-subtext">
									Maintain a directory and enhance your organisation decision
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-bullhorn"/>
								</div>
								<div className="box-text">
									Communication management
								</div>
								<div className="box-subtext">
									Keep your audience posted by maintaining an information feed
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-plug"/>
								</div>
								<div className="box-text">
									Ecosystem inclusion
								</div>
								<div className="box-subtext">
									Make your audience participating into the dynamic of your
									organisation
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<p>
							Each organisation has access to the source code of the project to
							run its own node. A node is an independant instance with its own database.
							The administrator of the organisation has a complete control on the
							data. A member of the ecosystem can take part to the data feed with restricted
							access.
						</p>

						<p>
							Each node can connect to the <b>openXeco</b> network. A node can collect
							the data that are accessible to complete his database. On another hand,
							an administrator can open his data to the network to promote himself and
							his ecosystem.
						</p>
					</div>
				</div>

				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>What is the mission of the project?</h1>
					</div>

					<div className="col-md-12">
						<p>
							The aim is to build a complete network of organisations with a compatible
							sharing system.
						</p>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-magic"/>
								</div>
								<div className="box-text">
									Effort reduction
								</div>
								<div className="box-subtext">
									Fetch data already existing in the network
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-exchange-alt"/>
								</div>
								<div className="box-text">
									Mutual promotion
								</div>
								<div className="box-subtext">
									Share data to another organisation to promote
									yours and vice versa
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-draw-polygon"/>
								</div>
								<div className="box-text">
									Standardised formats
								</div>
								<div className="box-subtext">
									Use a common data structure and the most popular taxonomies
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<p>
							The data collection is a key for the ecosystem management. By sharing the
							data amongst the organisations, we build a powerful interconnection
							system with a considerable added value.
						</p>

						<p>
							An organisation publishes its content. Any organisation can
							reach and fetch it to its own system. The publisher passively increases its
							visibility while the others feed their community with interesting and accessible
							content.
						</p>

						<p>
							A standardised classification allows an effective synchonisation and researches
							amongst the organisations. A standardised format allow a fast and simple exchange of
							data.
						</p>
					</div>
				</div>

				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>What are the component of a node?</h1>
					</div>

					<div className="col-md-12">
						<p>
							A node is composed of a database and its connected API. Thanks to the API,
							our generic web applications can create, read, update and delete data.
						</p>

						<p>
							Here is a short description of the generic web applications that are accessible:
						</p>

						<ul>
							<li>
								<b>Administration portal</b>: the organisation can manage the accounts and
								all other objects of the system
							</li>
							<li>
								<b>Ecosystem portal</b>: any physical person can create an account to edit
								personal information, information of the entities the user is assigned to
								or articles.
							</li>
						</ul>
					</div>

					<div className="col-md-2"/>

					<div className="col-md-8">
						<div className="center">
							<img
								src="/img/openxeco-node.png"
							/>
						</div>
					</div>

					<div className="col-md-12">
						<p>
							Also, <b>additional portals</b> can access the services through the API. An
							organisation can build customized report, dashboard or any kind of
							application to complete its toolset.
						</p>

						<p>
						</p>
					</div>
				</div>

				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>What objects are manageable?</h1>
					</div>

					<div className="col-md-12">
						<p>
							We have 3 main objects that is the base of the data structure:
						</p>

						<ul>
							<li>
								An <b>entity</b> represents any kind of registered organisation such
								as a private company, a governmental institution or a
								non-governmental association.
							</li>
							<li>
								An <b>article</b> represents information that are categorized as follow:
								news, event, job offer, service, tool.
							</li>
							<li>
								A <b>taxonomy</b> is a tool to classify an entity or an article. This
								can be configurated into a multi-level tree design.
							</li>
						</ul>
					</div>

					<div className="col-md-12">
						<div className="center">
							<img
								src="/img/openxeco-objects.png"
							/>
						</div>
					</div>
				</div>

				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>How do we interconnect the nodes?</h1>
					</div>

					<div className="col-md-12">
						A node can connect to another one thanks to an handshaking system. The combinason
						of handshakes creates a network of nodes.
					</div>

					<div className="col-md-2"/>

					<div className="col-md-8">
						<div className="center">
							<img
								src="/img/openxeco-network.png"
							/>
						</div>
					</div>

					<div className="col-md-12">
						<p>
							By acknowledging, a node administrator can consult
							the public object of its peers. A synchronization system is available to
							import a taxonomy, an article or an entity into the local system.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
