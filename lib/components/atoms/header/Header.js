import React from 'react';
import style from './Header.css';

function Header(props) {
	// more img stuff
	const Component = props.img ? 'img' : 'h1';

	return (
		<Component>
			{props.children}
		</Component>
	);
}

Header.propTypes = {
	children: React.PropTypes.node.isRequired,
	name: React.PropTypes.string
};

export default Header;