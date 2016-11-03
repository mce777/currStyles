import React from 'react';
import style from './dropdown.css';
import type from '../../globals/typography.css';

export default function (props) {
	return (
		<div className={style.root}>
			<select name={props.name}>
				{props.options.map((option, index) => {
					return <option key={index} value={option.value}>{}</option>;
				})}
			</select>
		</div>

	);
}