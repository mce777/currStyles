import React from 'react';
import style from './AppDemo.css';
import Header from '../../atoms/header/Header';
import InputDropDown from '../../molecules/input_dropdown/InputDropdown';
import Message from '../../atoms/message/Message';
import Button from '../../atoms/button/Button';
import AppDate from '../../atoms/date/AppDate';

function AppDemo() {
	return (
		<div>
			<Header>Currency Converter</Header>
			<div className={style.input1}>
				<InputDropDown
					id="id1"
					inputName="Base Currency"
					name="whatever"
					type="text"
					placeholder="e.g. 123"
					options={ [{name: 'item1', value: 'value1'}, {name: 'item2', value: 'value2'}] }
					handleInputChange={() => {console.log('onInputChange/appDemo being logged here');}}
					handleDropdownChange={() => {alert('why you change once?');}}
				/>
			</div>
			<div className={style.input1}>
				<InputDropDown
					id="id2"
					inputName="Target Currency"
					name="whatever2"
					type="text"
					options={ [{name: 'item1', value: 'value1'}, {name: 'item2', value: 'value2'}]}
					disabled
					handleInputChange={() => {console.log('onInputChange/appDemo being logged here again');}}
					handleDropdownChange={() => {alert('why you change twice?');}}
				/>
			</div>
			<Message>1 base currency = 2 in other currency</Message>
			<div className={style.btnStyle}>
				<Button title="submit btn" handleClick= {() => {alert('handle click event');}} value="Convert" />
			</div>
			<AppDate text="Data from " time="31.12.2016"/>
		</div>
	);
}

export default AppDemo;
