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