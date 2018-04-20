import React from 'react'

const Suggestions = (props) => {
	const options = props.results.map(r => (
		<li key={r.id}>
			{r.name}
		</li>
	));
	return <ul>Test {options}</ul>
};

export default Suggestions;