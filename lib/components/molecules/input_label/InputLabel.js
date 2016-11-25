import React from 'react';
import type from '../../globals/typography.css';
import style from './InputLabel.css';
import Input from '../../atoms/input/Input'; // eslint-disable-line no-unused-vars

function InputLabel(props) {
	return (
		<div>
			<label
				className={type.label}
				htmlFor={props.id}>
				{props.labelName}
			</label>
			<div className={style.inputDiv}>
				<Input
					type={props.type}
					handleChange={props.handleChange}
					placeholder={props.placeholder}
					name={props.inputName}
					value={props.value}
					id={props.id}
					disabled={props.disabled}
				/>
			</div>
		</div>
	);
}

InputLabel.propTypes = {
	id: React.PropTypes.string.isRequired,
	labelName: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	inputName: React.PropTypes.string,
	value: React.PropTypes.string
};

export default InputLabel;
