import React from 'react';
import style from './Button.css';

function Button(props) {
	return (
		<input type="button" className={style.primary} value={props.value} />
	);
}

Button.propTypes = {
	value: React.PropTypes.string.isRequired
};

export default Button;