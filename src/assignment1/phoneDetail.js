import React, {Component} from 'react';
import {connect} from 'react-redux';

class PhoneDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {phoneId} = this.props.match.params;
		const {phones} = this.props;
		console.log(phones);
		return (
			<div>
				Phone detail {phoneId}
			</div>
		);
	};
}

const mapToProps = (state) => ({
	phones: state
});
export default connect(mapToProps)(PhoneDetail);