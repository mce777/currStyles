import React from 'react';
import style from '../../globals/typography.css';
import Dropdown from '../../atoms/dropdown/dropdown';
import Input from '../../atoms/input/input';

export default function(props) {
	return (
		<div>
			<label className={style.h3}>{props.name}</label>
			<Input />
			<Dropdown />
		</div>
	);
}