import React from 'react';
import style from './Header.css';

function Header(props) {
	if (props.src) {
		return <img src={props.src} className={style.image} alt={props.alt} />;
	}

	return <h1>{props.children}</h1>;
}

Header.propTypes = {
	children: React.PropTypes.node.isRequired,
	src: React.PropTypes.string,
	alt: React.PropTypes.string
};

export default Header;
