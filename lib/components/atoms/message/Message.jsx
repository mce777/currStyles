import React from 'react';
import style from './Message.css';

export default class Message extends React.Component {
	propTypes = {
		children: React.PropTypes.node.isRequired
	};

	render() {
		return (
			<p className={style.root}>{this.props.children}</p>
		);
	}
}



