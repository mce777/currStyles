import React from 'react';
import style from './Input.css';

function Input(props) {
	return (
		// type, email, placeholder, name and id
		<input type="text" className={style.root} value={props.value} id={props.id} disabled={props.isDisabled}/>
	);
}

Input.propTypes = {
	value: React.PropTypes.string,
	id: React.PropTypes.string,
	isDisabled: React.PropTypes.string
};

export default Input;
