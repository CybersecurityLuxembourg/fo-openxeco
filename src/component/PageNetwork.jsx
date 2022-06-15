import React from "react";
import "./PageNetwork.css";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Graph from "react-graph-vis";
import { getForeignRequest } from "../utils/request.jsx";

export default class PageNetwork extends React.Component {
	constructor(props) {
		super(props);

		this.fetchNodes = this.fetchNodes.bind(this);
		this.fetchNode = this.fetchNode.bind(this);

		this.state = {
			nodes: [
				"https://api.cybersecurity.lu",
				"https://api.distributed.lu",
				"https://api.cyber4africa.org",
				"https://api.encryptioneurope.eu",
				"https://api.ensure-collaborative.eu",
			],
			nodeInformation: {},
			loadingProgress: 0,
		};
	}

	componentDidMount() {
		this.fetchNodes();
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

	getGraphData() {
		if (Object.keys(this.state.nodeInformation).length === 0) {
			return {};
		}

		const oxeNodes = Object.keys(this.state.nodeInformation)
			.map((v, i) => ({
				id: i,
				label: this.state.nodeInformation[v]
					? "<b>" + this.state.nodeInformation[v].project_name + "\nv" + this.state.nodeInformation[v].version
					: "<b>" + v,
				color: {
					border: "white",
					background: this.state.nodeInformation[v] ? "#03e3e3" : "lightgrey",
				},
				font: { color: "white", weight: "bold", size: 14 },
				shape: "box",
				chosen: false,
			}));

		return {
			nodes: [
				{
					id: -1,
					title: "dddd",
					label: "<b>openXeco",
					color: { border: "white", background: "#193c6d" },
					font: { color: "white", size: 14 },
					shape: "box",
					chosen: false,
				},
				...oxeNodes,
			],
			edges: [
				...oxeNodes.map((r) => ({
					from: -1,
					to: r.id,
					color: {
						color: "white",
					},
					chosen: false,
					width: 2,
					smooth: {
						enabled: true,
						type: "curvedCCW",
						roundness: 0.2,
					},
				})),
			],
		};
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		const options = {
			physics: { barnesHut: { springLength: 150, springConstant: 0.05 } },
			layout: {
			},
			nodes: {
				margin: {
					top: 15,
					bottom: 15,
					left: 20,
					right: 20,
				},
				font: {
					multi: "html",
				},
			},
			edges: {
				color: "#000000",
			},
			height: "500px",
		};

		const events = {
			/* select: function(event) {
				var { nodes, edges } = event;
			} */
		};

		return (
			<div id="PageNetwork">
				{Object.keys(this.state.nodeInformation).length > 0
					&& <Graph
						graph={this.getGraphData()}
						options={options}
						events={events}
					/>
				}

				<LoadingBar
					className="LoadingBar"
					color='#f11946'
					progress={(this.state.loadingProgress / this.state.nodes.length) * 100}
				/>

				<Link to="/">
					<div
						className={"Menu-element "
							+ (this.props.selectedMenu === null ? "Menu-element-selected" : "")}
						onClick={() => this.props.changeMenu(null)}>
						&lt;- Back to presentation
					</div>
				</Link>
			</div>
		);
	}
}
