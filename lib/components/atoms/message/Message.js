import React from 'react';
import style from './Message.css';

function Message(props) {
	return (
		<p className={style.root}>{props.text}</p>
	);
}

Message.propTypes = {
	text: React.PropTypes.string.isRequired
};

export default Message;
