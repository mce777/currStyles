import React from 'react';
import style from './button.css';

export default function Button(props) {
	return (
		<input type="button" className={style.primary} value={props.value} />
	);
}
