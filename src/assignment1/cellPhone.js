import React, {Component} from 'react';
import iphone from './mobilePic/1.jpg';
import Search from "./searchComponent";

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
		}
	}

	handleInputChange = (search) => {
		this.setState({
			query: search,
		})
	};

	render() {

		return (
			<div>
				<Search handleSearch={this.handleInputChange}/>
				<div>{this.state.query}</div>
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