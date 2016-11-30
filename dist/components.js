'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button.css');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
	_inherits(Button, _React$Component);

	function Button() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Button);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			handleClick: _react2.default.PropTypes.func.isRequired,
			type: _react2.default.PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
			value: _react2.default.PropTypes.string
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Button, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', {
				type: this.props.type,
				className: _Button2.default.primary,
				onClick: this.props.handleClick,
				value: this.props.value
			});
		}
	}]);

	return Button;
}(_react2.default.Component);

exports.default = Button;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppDate = require('./AppDate.css');

var _AppDate2 = _interopRequireDefault(_AppDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppDate = function (_React$Component) {
	_inherits(AppDate, _React$Component);

	function AppDate() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AppDate);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppDate.__proto__ || Object.getPrototypeOf(AppDate)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			time: _react2.default.PropTypes.string.isRequired,
			text: _react2.default.PropTypes.string,
			component: _react2.default.PropTypes.string
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AppDate, [{
		key: 'render',
		value: function render() {
			var Component = this.props.component ? this.props.component : 'div';

			return _react2.default.createElement(
				Component,
				null,
				_react2.default.createElement(
					'span',
					{ className: _AppDate2.default.root },
					this.props.text
				),
				_react2.default.createElement(
					'time',
					{ className: _AppDate2.default.date },
					this.props.time
				)
			);
		}
	}]);

	return AppDate;
}(_react2.default.Component);

exports.default = AppDate;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('./Dropdown.css');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
	_inherits(Dropdown, _React$Component);

	function Dropdown() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Dropdown);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			name: _react2.default.PropTypes.string.isRequired,
			handleChange: _react2.default.PropTypes.func.isRequired,
			options: _react2.default.PropTypes.array,
			value: _react2.default.PropTypes.string,
			selectName: _react2.default.PropTypes.string
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Dropdown, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'select',
				{ name: this.props.selectName, className: _Dropdown2.default.root, onChange: this.props.handleChange },
				this.props.options.map(function (option, index) {
					return _react2.default.createElement(
						'option',
						{ key: index, value: option.value || option.name },
						option.name
					);
				})
			);
		}
	}]);

	return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header.css');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Header);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			children: _react2.default.PropTypes.node.isRequired,
			src: _react2.default.PropTypes.string,
			alt: _react2.default.PropTypes.string
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			if (this.props.src) {
				return _react2.default.createElement('img', { src: this.props.src, className: _Header2.default.image, alt: this.props.alt });
			}

			return _react2.default.createElement(
				'h1',
				null,
				this.props.children
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input.css');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Input);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			type: _react2.default.PropTypes.string.isRequired,
			handleChange: _react2.default.PropTypes.func.isRequired,
			placeholder: _react2.default.PropTypes.string,
			name: _react2.default.PropTypes.string,
			value: _react2.default.PropTypes.string,
			id: _react2.default.PropTypes.string,
			disabled: _react2.default.PropTypes.bool
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Input, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', {
				type: this.props.type,
				placeholder: this.props.placeholder,
				onChange: this.props.handleChange,
				className: _Input2.default.root,
				value: this.props.value,
				name: this.props.name,
				id: this.props.id,
				disabled: this.props.disabled
			});
		}
	}]);

	return Input;
}(_react2.default.Component);

exports.default = Input;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Message = require('./Message.css');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
	_inherits(Message, _React$Component);

	function Message() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Message);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			children: _react2.default.PropTypes.node.isRequired
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Message, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'p',
				{ className: _Message2.default.root },
				this.props.children
			);
		}
	}]);

	return Message;
}(_react2.default.Component);

exports.default = Message;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputLabel = require('../input_label/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputDropdown = require('./InputDropdown.css');

var _InputDropdown2 = _interopRequireDefault(_InputDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


var InputDropdown = function (_React$Component) {
	_inherits(InputDropdown, _React$Component);

	function InputDropdown() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputDropdown);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputDropdown.__proto__ || Object.getPrototypeOf(InputDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			id: _react2.default.PropTypes.string.isRequired,
			labelName: _react2.default.PropTypes.string.isRequired,
			inputName: _react2.default.PropTypes.string.isRequired,
			type: _react2.default.PropTypes.string.isRequired,
			handleInputChange: _react2.default.PropTypes.func.isRequired,
			handleDropdownChange: _react2.default.PropTypes.func.isRequired,
			name: _react2.default.PropTypes.string,
			value: _react2.default.PropTypes.string,
			disabled: _react2.default.PropTypes.bool,
			placeholder: _react2.default.PropTypes.string,
			inputLabelValue: _react2.default.PropTypes.string,
			selectName: _react2.default.PropTypes.string,
			options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
				name: _react2.default.PropTypes.string.isRequired,
				value: _react2.default.PropTypes.string
			}))
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InputDropdown, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _InputDropdown2.default.root },
				_react2.default.createElement(_InputLabel2.default, {
					labelName: this.props.labelName,
					id: this.props.id,
					type: this.props.type,
					disabled: this.props.disabled,
					placeholder: this.props.placeholder,
					handleChange: this.props.handleInputChange,
					value: this.props.inputLabelValue,
					inputName: this.props.inputName
				}),
				_react2.default.createElement(Dropdown, {
					name: this.props.name,
					value: this.props.value,
					options: this.props.options,
					handleChange: this.props.handleDropdownChange,
					selectName: this.props.selectName
				})
			);
		}
	}]);

	return InputDropdown;
}(_react2.default.Component);

exports.default = InputDropdown;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _typography = require('../../globals/typography.css');

var _typography2 = _interopRequireDefault(_typography);

var _InputLabel = require('./InputLabel.css');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Input = require('../../atoms/input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputLabel = function (_React$Component) {
	_inherits(InputLabel, _React$Component);

	function InputLabel() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputLabel);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputLabel.__proto__ || Object.getPrototypeOf(InputLabel)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
			id: _react2.default.PropTypes.string.isRequired,
			labelName: _react2.default.PropTypes.string.isRequired,
			type: _react2.default.PropTypes.string.isRequired,
			handleChange: _react2.default.PropTypes.func.isRequired,
			placeholder: _react2.default.PropTypes.string,
			disabled: _react2.default.PropTypes.bool,
			inputName: _react2.default.PropTypes.string,
			value: _react2.default.PropTypes.string
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InputLabel, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'label',
					{
						className: _typography2.default.label,
						htmlFor: this.props.id
					},
					this.props.labelName
				),
				_react2.default.createElement(
					'div',
					{ className: _InputLabel2.default.inputDiv },
					_react2.default.createElement(_Input2.default, {
						type: this.props.type,
						handleChange: this.props.handleChange,
						placeholder: this.props.placeholder,
						name: this.props.inputName,
						value: this.props.value,
						id: this.props.id,
						disabled: this.props.disabled
					})
				)
			);
		}
	}]);

	return InputLabel;
}(_react2.default.Component);

exports.default = InputLabel;
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
