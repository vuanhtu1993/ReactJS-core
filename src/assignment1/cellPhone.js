import React, {Component} from 'react';
import axios from 'axios';


import Search from "./searchComponent";
import Suggestions from "./suggestion";

const API_URL = 'http://5ad855aedc1baa0014c60af3.mockapi.io/phones';

class CellPhone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phones: [
				{name: 'Iphone', price: '1000', img: './mobilePic/1.jpg'},
				{name: 'Samsung', price: '800', img: './mobilePic/1.jpg'},
				{name: 'HTC', price: '800', img: './mobilePic/1.jpg'},
				{name: 'Sony', price: '650', img: './mobilePic/1.jpg'},
			],
			query: '',
			results: [],
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
					results: res.data,
				});
			});
	};

	doSearch = (search) => {
		this.setState({
			query: search,
		})
	};
	filterList = (event) => {
		let updatedList = this.state.results;
		updatedList = updatedList.filter(function(item){
			return item.name.toLowerCase().search(
				event.toLowerCase()) !== -1;
		});
		this.setState({queryResult: updatedList});
	};


	render() {
		return (
			<div>
				<Search handleSearch={this.filterList}/>
				<ul>
					{this.state.queryResult.map((user) =>
						<li>{user.name}</li>
					)}
				</ul>
				<div className="container">
					<div className="row">
						{this.state.phones.map((phone, i) =>
							<div className="col-sm-3" key={i}>
								<div className="card">
									<img className="card-img-top" src={phone.img} alt='cell phone'/>
									<div className="card-body">
										<h5 className="card-title">{phone.name}</h5>
										<p className="card-text">Some quick example text to build on the card title and
											make-up the bulk of the card's content.</p>
										<a className="btn btn-primary">Go somewhere</a>
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