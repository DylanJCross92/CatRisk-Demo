"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _SafeAnchor = require("../SafeAnchor");

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationButton = function (_PureComponent) {
  _inherits(PaginationButton, _PureComponent);

  function PaginationButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PaginationButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginationButton.__proto__ || Object.getPrototypeOf(PaginationButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          eventKey = _this$props.eventKey;


      if (disabled) {
        return;
      }

      if (onSelect) {
        onSelect(eventKey, e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PaginationButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.componentClass,
          active = _props.active,
          disabled = _props.disabled,
          onClick = _props.onClick,
          className = _props.className,
          style = _props.style,
          props = _objectWithoutProperties(_props, ["componentClass", "active", "disabled", "onClick", "className", "style"]);

      if (Component === _SafeAnchor2.default) {
        // Assume that custom components want `eventKey`.
        delete props.eventKey;
      }

      delete props.onSelect;

      return _react2.default.createElement(
        "li",
        { className: (0, _classnames2.default)(className, { active: active, disabled: disabled }), style: style },
        _react2.default.createElement(Component, _extends({}, props, {
          disabled: disabled,
          onClick: (0, _createChainedFunction2.default)(onClick, this.handleClick)
        }))
      );
    }
  }]);

  return PaginationButton;
}(_react.PureComponent);

PaginationButton.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  componentClass: _elementType2.default,
  disabled: _propTypes2.default.bool,
  eventKey: _propTypes2.default.any,
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  style: _propTypes2.default.object
};
PaginationButton.defaultProps = {
  active: false,
  componentClass: _SafeAnchor2.default,
  disabled: false
};
exports.default = PaginationButton;