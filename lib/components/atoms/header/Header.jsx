import React from 'react';
import style from './Header.css';

export default class Header extends React.Component {
	propTypes = {
		children: React.PropTypes.node.isRequired,
		src: React.PropTypes.string,
		alt: React.PropTypes.string
	};

	render() {
		if (this.props.src) {
			return <img src={this.props.src} className={style.image} alt={this.props.alt}/>;
		}

		return <h1>{this.props.children}</h1>;
	}
}



