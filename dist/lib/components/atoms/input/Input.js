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