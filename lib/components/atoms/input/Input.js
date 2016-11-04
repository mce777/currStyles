import React from 'react';
import style from './Input.css';

function Input(props) {
	return (
		<input type="text" className={style.root} value={props.value} />
	);
}

Input.propTypes = {
	value: React.PropTypes.string
};

export default Input;
