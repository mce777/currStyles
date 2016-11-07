import React from 'react';
import style from './Message.css';

function Message(props) {
	return (
		<p className={style.root}>{props.msgText}</p>
	);
}

Message.propTypes = {
	msgText: React.PropTypes.string.isRequired
};

export default Message;