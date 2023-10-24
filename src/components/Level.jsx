import React, { Component } from "react";
import LevelComponent from "./levelcomponent";
import "../styles/gamepageelements.css";

class Level extends Component {
	state = {
		level: [
			{
				stage: 12,
			money: "1 Million Dollars",
			},
			{
				stage: 11,
			money: "$500000",
			},
			{
				stage: 10,
			money: "$250000",
			},
			{
				stage: 9,
			money: "$125000",
			},
			{
				stage: 8,
			money: "$100000",
			},
			{
				stage: 7,
			money: "$50000",
			},
			{
				stage: 6,
			money: "$20000",
			},
			{
				stage: 5,
			money: "$10000",
			},
			{
				stage: 4,
			money: "$5000",
			},
			{
				stage: 3,
			money: "$2500",
			},
			{
				stage: 2,
			money: "$1000",
			},
			{
				stage: 1,
			money: "$500",
			},
		],
	};
	render() {
		const { level } = this.state;
		return (
			<div className="level">
				{level.map((lvl) => {
					return (
						<LevelComponent
							key={lvl.stage}
							stage={lvl.stage}
							money={lvl.money}
							qlevel={this.props.qlevel}
						/>
					);
				})}
			</div>
		);
	}
}

export default Level;
