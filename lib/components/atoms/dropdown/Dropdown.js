import React from 'react';
import style from './Dropdown.css';
import type from '../../globals/typography.css';

function Dropdown(props) {
	return (
		<div>
			<select name={props.name} className={style.root}>
				{props.options.map((option, index) => {
					return <option key={index} value={option.value || option.name}>{option.name}</option>;
				})}
			</select>
		</div>

	);
}

Dropdown.propTypes = {
	name: React.PropTypes.string.isRequired,
	value: React.PropTypes.string
};

export default Dropdown;
