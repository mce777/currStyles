import React from 'react';
import style from './Dropdown.css';

export default class Dropdown extends React.Component {
	propTypes = {
		name: React.PropTypes.string.isRequired,
		handleChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array,
		value: React.PropTypes.string,
		selectName: React.PropTypes.string
	};

	render() {
		return (
			<select name={this.props.selectName} className={style.root} onChange={this.props.handleChange}>
				{this.props.options.map((option, index) => {
					return <option key={index} value={option.value || option.name}>{option.name}</option>;
				})}
			</select>
		);
	}
}

