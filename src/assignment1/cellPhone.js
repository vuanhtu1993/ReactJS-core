import React, {Component} from 'react';
import axios from 'axios';


import Search from "./searchComponent";
import Suggestions from "./suggestion";

const API_URL = 'http://localhost:8888/phones';

class CellPhone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phones: [],
			queryResult: [],
		}
	}

	componentWillMount() {
		this.getInfo();
	}

	getInfo = () => {
		axios.get(API_URL)
			.then((res) => {
				this.setState({
					phones: res.data,
				});
			});
	};

	filterList = (event) => {
		let updatedList = this.state.phones;
		updatedList = updatedList.filter(function (item) {
			return item.phoneName.toLowerCase().search(
				event.toLowerCase()) !== -1;
		});
		this.setState({queryResult: updatedList});
		if (!event) {
			this.setState({queryResult: []});
		}
	};

	render() {
		return (
			<div>
				<Search handleSearch={this.filterList}/>
				<Suggestions queryResult={this.state.queryResult}/>
				<div className="container">
					<div className="row">
						{this.state.phones.map((phone, i) =>
							<div className="col-sm-3" key={i}>
								<div className="card">
									<img className="img-fluid" src={phone.imgUrl} alt='cell phone'/>
									<div className="card-body">
										<h5 className="card-title">{phone.phoneName}</h5>
										<p className="card-text">Price: {phone.price}</p>
										<a className="btn btn-primary">Detail</a>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default CellPhone;