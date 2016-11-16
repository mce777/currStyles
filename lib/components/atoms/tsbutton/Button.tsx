import React from 'react';
import style from './Button.css';

interface IButton {
	btnText: string
}
class Button extends React.Component<IButton>(props: string) {
	return (
		<input type="button" className={style.primary} value={props.btnText} />
	);
}

// Button.propTypes = {
// 	btnText: React.PropTypes.string.isRequired
// };

export default Button;
