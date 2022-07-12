import React from "react";
import "./PageNetwork.css";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Graph from "react-graph-vis";

export default class PageNetwork extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidMount() {
		this.props.fetchNodes();
	}

	getGraphData() {
		if (Object.keys(this.props.nodeInformation).length === 0) {
			return {};
		}

		const oxeNodes = Object.keys(this.props.nodeInformation)
			.map((v, i) => ({
				id: i,
				label: this.props.nodeInformation[v]
					? "<b>" + this.props.nodeInformation[v].project_name + "\n" + this.props.nodeInformation[v].version
					: "<b>" + v,
				color: {
					border: "white",
					background: this.props.nodeInformation[v] ? "#03e3e3" : "lightgrey",
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
				{Object.keys(this.props.nodeInformation).length > 0
					&& <Graph
						graph={this.getGraphData()}
						options={options}
						events={events}
					/>
				}

				<LoadingBar
					className="LoadingBar"
					color='#f11946'
					progress={(this.props.loadingProgress / this.props.nodes.length) * 100}
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
