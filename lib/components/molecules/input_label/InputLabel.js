import React from 'react';
import type from '../../globals/typography.css';
import style from './InputLabel.css';
import Input from '../../atoms/input/Input';

function InputLabel(props) {
	return (
		<div>
			<label className={type.label} htmlFor={props.id}>{props.inputName}</label>
			<div><Input inputID={props.id} isDisabled={props.isDisabled}/></div>
		</div>
	);
}

InputLabel.propTypes = {
	id: React.PropTypes.string.isRequired,
	inputName: React.PropTypes.string.isRequired
};

export default InputLabel;
