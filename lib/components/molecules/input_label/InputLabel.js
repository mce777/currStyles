import React from 'react';
import type from '../../globals/typography.css';
import Input from '../../atoms/input/Input';

function InputLabel(props) {
	return (
		<div>
			<label for="" className={type.formlabel}>{props.inputName}</label>
			<Input />
		</div>
	);
}

InputLabel.propTypes = {
	inputName: React.PropTypes.string.isRequired
};

export default InputLabel;
