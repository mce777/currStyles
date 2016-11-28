import React from 'react';
import type from '../../globals/typography.css';
import style from './InputLabel.css';
import Input from '../../atoms/input/Input'; // eslint-disable-line no-unused-vars

export default class InputLabel extends React.Component {
	propTypes = {
		id: React.PropTypes.string.isRequired,
		labelName: React.PropTypes.string.isRequired,
		type: React.PropTypes.string.isRequired,
		handleChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		inputName: React.PropTypes.string,
		value: React.PropTypes.string
	};

	render() {
		return (
			<div>
				<label
					className={type.label}
					htmlFor={this.props.id}>
					{this.props.labelName}
				</label>
				<div className={style.inputDiv}>
					<Input
						type={this.props.type}
						handleChange={this.props.handleChange}
						placeholder={this.props.placeholder}
						name={this.props.inputName}
						value={this.props.value}
						id={this.props.id}
						disabled={this.props.disabled}
					/>
				</div>
			</div>
		);
	}
}
