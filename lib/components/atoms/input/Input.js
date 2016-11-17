import React from 'react';
import style from './Input.css';

function Input(props) {
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			onChange={props.handleChange}
			className={style.root}
			value={props.value}
			name={props.name}
			id={props.id}
			disabled={props.disabled}
		/>
	);
}

Input.propTypes = {
	type: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	id: React.PropTypes.string,
	disabled: React.PropTypes.bool
};

export default Input;
