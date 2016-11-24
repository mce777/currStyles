import React from 'react';
import style from './Button.css';

function Button(props) {
	return (
		<input
			type={props.type}
			className={style.primary}
			onClick={props.handleClick}
			value={props.value}
		/>
	);
}

Button.propTypes = {
	handleClick: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
	value: React.PropTypes.string
};

export default Button;
