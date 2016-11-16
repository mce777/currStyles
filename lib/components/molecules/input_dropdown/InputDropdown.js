import React from 'react';
import type from '../../globals/typography.css';
import InputLabel from '../input_label/InputLabel';
import style from './InputDropdown.css';

function InputDropdown(props) {
	return (
		<div className={style.root}>
			<InputLabel name={props.inputName} id={props.id} isDisabled={props.isDisabled}/>
			<Dropdown name={props.name} value={props.value} options={props.options} handleChange={props.handleChange} />
		</div>
	);
}

InputDropdown.propTypes = {
	id: React.PropTypes.string.isRequired,
	inputName: React.PropTypes.string.isRequired,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	isDisabled: React.PropTypes.string,
	handleChange: React.PropTypes.func,
	options: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		value: React.PropTypes.string
	}))
};

export default InputDropdown;

