import React from 'react';
import type from '../../globals/typography.css';
import style from './InputLabel.css';
import Input from '../../atoms/input/Input';

function InputLabel(props) {
	return (
		<div>
			<label className={type.label} htmlFor={props.id}>{props.name}</label>
			<div className={style.inputDiv}>
				<Input id={props.id}
					disabled={props.disabled}
					placeholder={props.placeholder}
					type={props.type}
					handleChange={props.handleChange}
				/>
			</div>
		</div>
	);
}

InputLabel.propTypes = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	disabled: React.PropTypes.bool
};

export default InputLabel;
