"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _StyleConfig = require("../utils/StyleConfig");

var _SafeAnchor = require("../SafeAnchor");

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "renderAnchor",
    value: function renderAnchor(elementProps, className) {
      return _react2.default.createElement(_SafeAnchor2.default, _extends({}, elementProps, {
        className: (0, _classnames2.default)(className, elementProps.disabled && "disabled")
      }));
    }
  }, {
    key: "renderButton",
    value: function renderButton(_ref, className) {
      var componentClass = _ref.componentClass,
          elementProps = _objectWithoutProperties(_ref, ["componentClass"]);

      var Component = componentClass || "button";

      return _react2.default.createElement(Component, _extends({}, elementProps, {
        type: elementProps.type || "button",
        className: className
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          active = _props.active,
          block = _props.block,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["active", "block", "className"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), _defineProperty({
        active: active
      }, (0, _bootstrapUtils.prefix)(bsProps, "block"), block));
      var fullClassName = (0, _classnames2.default)(className, classes);

      if (elementProps.href) {
        return this.renderAnchor(elementProps, fullClassName);
      }

      return this.renderButton(elementProps, fullClassName);
    }
  }]);

  return Button;
}(_react.PureComponent);

Button.propTypes = {
  /**
   * Active state
   */
  active: _propTypes2.default.bool,
  /**
   * Button stretches to fill space of parent
   */
  block: _propTypes2.default.bool,
  /**
   * Button "flavors"
   */
  bsStyle: _propTypes2.default.oneOf(["default", "primary", "success", "info", "warning", "danger"]),
  /**
   * Additional wildcard classes that can be appended to base class
   */
  className: _propTypes2.default.string,
  /**
   * A custom prop that can change the button
   * into another component (i.e. <code>input</code>)
   */
  componentClass: _elementType2.default,
  /**
   * Button is not clickable
   */
  disabled: _propTypes2.default.bool,
  /**
   * Used only if button is a link
   */
  href: _propTypes2.default.string,
  /**
   * Click handler for button
   */
  onClick: _propTypes2.default.func,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: _propTypes2.default.oneOf(["button", "reset", "submit"])
};
Button.defaultProps = {
  active: false,
  block: false,
  disabled: false
};
exports.default = (0, _bootstrapUtils.bsClass)("btn", (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL, _StyleConfig.Size.XSMALL], (0, _bootstrapUtils.bsStyles)([].concat(_toConsumableArray(Object.values(_StyleConfig.State)), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY, _StyleConfig.Style.LINK]), _StyleConfig.Style.DEFAULT, Button)));