'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputLabel = require('../input_label/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Dropdown = require('../../atoms/dropdown/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

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
				_react2.default.createElement(_Dropdown2.default, {
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