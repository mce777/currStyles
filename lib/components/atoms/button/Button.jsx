import React from 'react';
import style from './Button.css';

const STYLES = {
	primary: style.btnPrimary,
	secondary: style.btnSecondary
};

export default class Button extends React.Component {
	propTypes = {
		handleClick: React.PropTypes.func.isRequired,
		type: React.PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
		value: React.PropTypes.string,
		opStyle: React.PropTypes.string,
	};

	render() {
		let optionalStyle = STYLES[this.props.opStyle] ? STYLES[this.props.opStyle] : "";

		return (
			<input
				type={this.props.type}
				className={style.btnBase + ' ' + optionalStyle }
				onClick={this.props.handleClick}
				value={this.props.value}
			/>
		);
	}
}
