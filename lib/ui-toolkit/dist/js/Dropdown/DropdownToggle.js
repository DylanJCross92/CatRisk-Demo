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

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _SafeAnchor = require("../SafeAnchor");

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = require("../utils/bootstrapUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownToggle = function (_PureComponent) {
  _inherits(DropdownToggle, _PureComponent);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).apply(this, arguments));
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          noCaret = _props.noCaret,
          open = _props.open,
          useAnchor = _props.useAnchor,
          bsClass = _props.bsClass,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["noCaret", "open", "useAnchor", "bsClass", "className", "children"]);

      delete props.bsRole;

      var Component = useAnchor ? _SafeAnchor2.default : _Button2.default;
      var useCaret = !noCaret;

      // This intentionally forwards bsSize and bsStyle (if set) to the
      // underlying component, to allow it to render size and style variants.
      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          role: "button",
          className: (0, _classnames2.default)(className, bsClass),
          "aria-haspopup": true,
          "aria-expanded": open
        }),
        children || props.title,
        useCaret && " ",
        useCaret && _react2.default.createElement("span", { className: "caret" })
      );
    }
  }]);

  return DropdownToggle;
}(_react.PureComponent);

DropdownToggle.propTypes = {
  bsClass: _propTypes2.default.func,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  noCaret: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  useAnchor: _propTypes2.default.bool
};
DropdownToggle.defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: "toggle"
};
exports.default = (0, _bootstrapUtils.bsClass)("dropdown-toggle", DropdownToggle);