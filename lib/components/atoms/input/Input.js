import React from 'react';
import style from './Input.css';

function Input(props) {
	return (
		<input type="text" className={style.root} value={props.inputValue} id={props.inputID} disabled={props.isDisabled}/>
	);
}

Input.propTypes = {
	inputValue: React.PropTypes.string,
	inputID: React.PropTypes.string,
	isDisabled: React.PropTypes.string
};

export default Input;
