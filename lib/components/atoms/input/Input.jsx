import React from 'react';
import style from './Input.css';

export default class Input extends React.Component {
	propTypes = {
		type: React.PropTypes.string.isRequired,
		handleChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		name: React.PropTypes.string,
		value: React.PropTypes.string,
		id: React.PropTypes.string,
		disabled: React.PropTypes.bool
	};

	render() {
		return (
			<input
				type={this.props.type}
				placeholder={this.props.placeholder}
				onChange={this.props.handleChange}
				className={style.root}
				value={this.props.value}
				name={this.props.name}
				id={this.props.id}
				disabled={this.props.disabled}
			/>
		);
	}
}



