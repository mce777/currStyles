import React from 'react';
import style from './Header.css';

function Header(props) {
	return (
		<h1 className={style.root}>{props.headerName}</h1>
	);
}

Header.propTypes = {
	headerName: React.PropTypes.string.isRequired
};

export default Header;