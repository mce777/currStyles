import React from 'react';
import style from './input.css';

export default function Poop(props) {
	return (
		<input type="text" className={style.root} value={props.value} />
	);
}