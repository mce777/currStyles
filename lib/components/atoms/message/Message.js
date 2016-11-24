import React from 'react';
import style from './Message.css';

function Message(props) {
	return (
		<p className={style.root}>{props.children}</p>
	);
}

Message.propTypes = {
	children: React.PropTypes.node.isRequired
};

export default Message;
