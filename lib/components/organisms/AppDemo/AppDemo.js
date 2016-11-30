'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppDemo = require('./AppDemo.css');

var _AppDemo2 = _interopRequireDefault(_AppDemo);

var _Header = require('../../atoms/header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _InputDropdown = require('../../molecules/input_dropdown/InputDropdown');

var _InputDropdown2 = _interopRequireDefault(_InputDropdown);

var _Message = require('../../atoms/message/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Button = require('../../atoms/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _AppDate = require('../../atoms/date/AppDate');

var _AppDate2 = _interopRequireDefault(_AppDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppDemo = function (_React$Component) {
	_inherits(AppDemo, _React$Component);

	function AppDemo() {
		_classCallCheck(this, AppDemo);

		return _possibleConstructorReturn(this, (AppDemo.__proto__ || Object.getPrototypeOf(AppDemo)).apply(this, arguments));
	}

	_createClass(AppDemo, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Header2.default,
					null,
					'Currency Converter'
				),
				_react2.default.createElement(
					'div',
					{ className: _AppDemo2.default.input1 },
					_react2.default.createElement(_InputDropdown2.default, {
						id: 'id1',
						labelName: 'Base Currency',
						inputName: 'Base Currency',
						name: 'whatever',
						type: 'text',
						placeholder: 'e.g. 123',
						options: [{ name: 'item1', value: 'value1' }, { name: 'item2', value: 'value2' }],
						handleInputChange: function handleInputChange() {
							console.log('onInputChange/appDemo being logged here');
						},
						handleDropdownChange: function handleDropdownChange() {
							alert('why you change once?');
						}
					})
				),
				_react2.default.createElement(
					'div',
					{ className: _AppDemo2.default.input1 },
					_react2.default.createElement(_InputDropdown2.default, {
						id: 'id2',
						labelName: 'Target Currency',
						inputName: 'Target Currency',
						name: 'whatever2',
						type: 'text',
						options: [{ name: 'item1', value: 'value1' }, { name: 'item2', value: 'value2' }],
						disabled: true,
						handleInputChange: function handleInputChange() {
							console.log('onInputChange/appDemo being logged here again');
						},
						handleDropdownChange: function handleDropdownChange() {
							alert('why you change twice?');
						}
					})
				),
				_react2.default.createElement(
					_Message2.default,
					null,
					'1 base currency = 2 in other currency'
				),
				_react2.default.createElement(
					'div',
					{ className: _AppDemo2.default.btnStyle },
					_react2.default.createElement(_Button2.default, { title: 'submit btn', handleClick: function handleClick() {
							alert('handle click event');
						}, value: 'Convert' })
				),
				_react2.default.createElement(_AppDate2.default, { text: 'Data from ', time: '31.12.2016' })
			);
		}
	}]);

	return AppDemo;
}(_react2.default.Component);

exports.default = AppDemo;