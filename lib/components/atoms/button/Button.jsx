import React from 'react';
import style from './Button.css';

export default class Button extends React.Component {
	propTypes = {
		handleClick: React.PropTypes.func.isRequired,
		type: React.PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
		value: React.PropTypes.string
	};

	render() {
		return (
			<input
				type={this.props.type}
				className={style.primary}
				onClick={this.props.handleClick}
				value={this.props.value}
			/>
		);
	}
}
