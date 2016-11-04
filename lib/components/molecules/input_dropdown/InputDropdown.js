import React from 'react';
import type from '../../globals/typography.css';
import InputLabel from '../input_label/InputLabel';
import style from './InputDropdown.css';

function InputDropdown(props) {
	return (
		<div className={style.root}>
			<InputLabel className={style.left} inputName={props.inputName} />
			<Dropdown name={props.name} value={props.value} options={props.options} />
		</div>
	);
}

InputDropdown.propTypes = {
	inputName: React.PropTypes.string.isRequired,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	options: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		value: React.PropTypes.string
	}))
};

export default InputDropdown;

