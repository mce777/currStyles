import React from 'react';
import style from './Button.css';

function Button(props) {
	return (
		<input type="button" className={style.primary} value={props.btnText} />
	);
}

Button.propTypes = {
	btnText: React.PropTypes.string.isRequired
};

export default Button;