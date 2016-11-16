import React from 'react';
import style from './Dropdown.css';

function Dropdown(props) {
	return (
		<select name={props.name} className={style.root} onChange={props.handleChange}>
			{props.options.map((option, index) => {
				return <option key={index} value={option.value || option.name}>{option.name}</option>;
			})}
		</select>
	);
}

Dropdown.propTypes = {
	name: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	value: React.PropTypes.string
};

export default Dropdown;
