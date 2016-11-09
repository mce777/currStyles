import React from 'react';
import style from './App.css';
import Header from '../../atoms/header/Header';
import InputDropDown from '../../molecules/input_dropdown/InputDropdown';
import Message from '../../atoms/message/Message';
import Button from '../../atoms/button/Button';
import AppDate from '../../atoms/date/AppDate';

function App(props) {
	return (
		<div>
			<Header headerName={props.headerName} />
			<div className={style.input1}>
				<InputDropDown id="id1" inputName="Base Currency"  name="whatever" options={ [{name:"item1", value:"value1"},
					{name:"item2", value:"value2"}] } />
			</div>
			<div className={style.input1}>
				<InputDropDown id="id2" inputName="Target Currency" name="whatever2" options={ [{name:"item1", value:"value1"},
					{name:"item2", value:"value2"}]} isDisabled="disabled"/>
			</div>
			<Message msgText="1 base currency = 2 in other currency" />
			<div className={style.btnStyle}>
				<Button btnText="Convert" />
			</div>
			<AppDate dateText="Data from 31.12.2016" />
		</div>
	);
}

// App.propTypes = {
// 	name: React.PropTypes.string
// };

export default App;