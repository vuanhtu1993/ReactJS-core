import React from 'react';

import { Link, Switch, Route } from 'react-router-dom'
export const Home = () => (
	<div>
		<h2>Welcome home pages</h2>
	</div>
);

export const Schedule = () => (
	<div>
		<h2>Schedule Component</h2>
	</div>
);

export const Roster = () => (
	<Switch>
		<Route exact path="/roster" component={FullRoster} />
		<Route exact path="/roster/:number" component={Player} />
	</Switch>
);

const PlayerAPI = {
	players: [
		{ number: 1, name: "Ben Blocker", position: "G" },
		{ number: 2, name: "Dave Defender", position: "D" },
		{ number: 3, name: "Sam Sweeper", position: "D" },
		{ number: 4, name: "Matt Midfielder", position: "M" },
		{ number: 5, name: "William Winger", position: "M" },
		{ number: 6, name: "Fillipe Forward", position: "F" }
	],
	all: function() { return this.players},
	get: function(id) {
		const isPlayer = p => p.number === id;
		return this.players.find(isPlayer)
	}
};

const FullRoster = () => (
	<div>
		<ul>
			{
				PlayerAPI.all().map(p => (
					<li key={p.number}>
						<Link to={"/roster/" + p.number} >{p.name}</Link>
					</li>
				))
			}
		</ul>
	</div>
);

const Player = (props) => {
	const player = PlayerAPI.get(
		parseInt(props.match.params.number, 10)
	);
	console.log(props.history);
	if (!player) {
		return <div>Sorry, but the player was not found</div>
	}
	return (
		<div>
			<h1>{player.name} (#{player.number})</h1>
			<h2>Position: {player.position}</h2>
			<Link to='/roster'>Back</Link>
		</div>
	)
};
