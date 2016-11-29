import React from 'react';
import style from './AppDate.css';

export default class AppDate extends React.Component {
	propTypes = {
		time: React.PropTypes.string.isRequired,
		text: React.PropTypes.string,
		component: React.PropTypes.string
	};

	render() {
		const Component = this.props.component ? this.props.component : 'div';

		return (
			<Component>
				<span className={style.root}>{this.props.text}</span>
				<time className={style.date}>{this.props.time}</time>
			</Component>
		);
	}
}

