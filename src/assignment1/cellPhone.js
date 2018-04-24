import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import Search from "./searchComponent";
import Suggestions from "./suggestion";
// connect to store
import {connect} from 'react-redux';
import {collectPhone} from "./redux/action";

const API_URL = 'https://sheltered-ravine-87997.herokuapp.com/phones';

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
				this.props.collectPhones(res.data);
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
										<Link className="btn btn-primary" to={`${this.props.match.url}/${phone._id}`}>Detail</Link>
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
const mapDispatchToProps = dispatch => ({
	collectPhones: phones => dispatch(collectPhone(phones))
});
export default connect(null, mapDispatchToProps)(CellPhone);