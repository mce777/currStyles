import React from 'react';
import InputLabel from '../input_label/InputLabel'; // eslint-disable-line no-unused-vars
import style from './InputDropdown.css';

function InputDropdown(props) {
	return (
		<div className={style.root}>
			<InputLabel
				labelName={props.labelName}
				id={props.id}
				type={props.type}
				disabled={props.disabled}
				placeholder={props.placeholder}
				handleChange={props.handleInputChange}
				value={props.inputLabelValue}
				inputName={props.inputName}
			/>
			<Dropdown
				name={props.name}
				value={props.value}
				options={props.options}
				handleChange={props.handleDropdownChange}
				selectName={props.selectName}
			/>
		</div>
	);
}

InputDropdown.propTypes = {
	id: React.PropTypes.string.isRequired,
	labelName: React.PropTypes.string.isRequired,
	inputName: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	handleInputChange: React.PropTypes.func.isRequired,
	handleDropdownChange: React.PropTypes.func.isRequired,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	inputLabelValue: React.PropTypes.string,
	selectName: React.PropTypes.string,
	options: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		value: React.PropTypes.string
	}))
};

export default InputDropdown;
