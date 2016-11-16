import React from 'react';
import style from './Button.css';

function Button(props) {
	//fix this btn
	const Component = props.href ? 'a' : 'button';

	return (
		<Component className={style.primary} href={props.href} onClick={props.handleClick} title={props.title}>
			{props.children}
		</Component>
	);
}

Button.propTypes = {
	// 'node' means all available
	children: React.PropTypes.node.isRequired,
	handleClick: React.PropTypes.func.isRequired,
	title: React.PropTypes.string,
	href: React.PropTypes.string
};

export default Button;
