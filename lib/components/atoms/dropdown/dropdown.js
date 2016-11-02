import React from 'react';
import style from './dropdown.css';

export default function (props) {
	return (
		<select name={props.name} className={style.root}>
			{props.options.map((option) => {
				return <option value={option.value}>{}</option>;
			})}
		</select>

	);
}