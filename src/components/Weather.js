import React from "react";


class Weather extends React.Component {
	render() {
		return (
			<div>
				{ this.props.city && this.props.country && <p className="weather__value">Location: {this.props.city}, {this.props.country}</p> }
				{ this.props.temperature && <p className="weather__value">Temperature: {this.props.temperature}</p> }
				{ this.props.humidity && <p className="weather__value">Humidity: {this.props.humidity}</p> }
				{ this.props.description && <p className="weather__value">Conditions: {this.props.description}</p> }
				{ this.props.error &&  <p className="weather__value">{ this.props. error }</p> }
			</div>
		);
	}
};

export default Weather;