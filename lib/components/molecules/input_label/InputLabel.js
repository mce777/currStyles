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