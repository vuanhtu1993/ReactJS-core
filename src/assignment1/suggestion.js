import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Suggestions = (props) => {
	const options = props.queryResult.map(r => (
		<li key={r._id}>
			<Link to="google.com">{r.phoneName}</Link>
		</li>
	));
	return (
		<div className="text-center">
			<ul className="suggestion list-unstyled">{options}</ul>
		</div>
	)
};

export default Suggestions;