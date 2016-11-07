import React from 'react';
import Header from '../../atoms/header/Header';
import InputDropDown from '../../molecules/input_dropdown/InputDropdown';
import Message from '../../atoms/message/Message';
import Button from '../../atoms/button/Button';
import AppDate from '../../atoms/date/AppDate';

function App(props) {
	return (
		<div>
			<Header headerName={props.headerName} />
			<InputDropDown inputName={props.inputName} name={props.name} options={props.options} />

			<Message msgText={props.msgText} />
			<Button btnText={props.btnText} />
			<AppDate dateText={props.dateText} />
		</div>
	);
}

// App.propTypes = {
// 	name: React.PropTypes.string
// };

export default App;