import React from 'react';
import InputLabel from '../input_label/InputLabel'; // eslint-disable-line no-unused-vars
import style from './InputDropdown.css';

export default class InputDropdown extends React.Component {
	propTypes = {
		id: React.PropTypes.string.isRequired,
		labelName: React.PropTypes.string.isRequired,
		inputName: React.PropTypes.string.isRequired,
		type: React.PropTypes.string.isRequired,
		handleInputChange: React.PropTypes.func.isRequired,
		handleDropdownChange: React.PropTypes.func.isRequired,
		name: React.PropTypes.string,
		value: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		placeholder: React.PropTypes.string,
		inputLabelValue: React.PropTypes.string,
		selectName: React.PropTypes.string,
		options: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			value: React.PropTypes.string
		}))
	};

	render() {
		return (
			<div className={style.root}>
				<InputLabel
					labelName={this.props.labelName}
					id={this.props.id}
					type={this.props.type}
					disabled={this.props.disabled}
					placeholder={this.props.placeholder}
					handleChange={this.props.handleInputChange}
					value={this.props.inputLabelValue}
					inputName={this.props.inputName}
				/>
				<Dropdown
					name={this.props.name}
					value={this.props.value}
					options={this.props.options}
					handleChange={this.props.handleDropdownChange}
					selectName={this.props.selectName}
				/>
			</div>
		);
	}
}
