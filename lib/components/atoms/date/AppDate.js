import React from 'react';
import style from './AppDate.css';

function AppDate(props) {
	const Component = props.component ? props.component : 'div';

	return (
		<Component>
			<span className={style.root}>{props.text}</span>
			<time className={style.date}>{props.time}</time>
		</Component>
	);
}

AppDate.propTypes = {
	time: React.PropTypes.string.isRequired,
	text: React.PropTypes.string,
	component: React.PropTypes.string
};

export default AppDate;
