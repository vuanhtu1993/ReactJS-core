import React, {Component} from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		}
	}
	handleSearch = () => {
		this.props.handleSearch(this.search.value);
	};
	render() {
		return (
			<div>
				<div className="searching text-center">
					<form>
						<input
							placeholder="Search for..."
							ref={input => this.search = input}
							onChange={this.handleSearch}
						/>
					</form>
				</div>
			</div>
		)
	}
}

export default Search;