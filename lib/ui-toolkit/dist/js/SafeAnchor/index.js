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

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isTrivialHref(href) {
  return !href || href.trim() === "#";
}

/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */

var SafeAnchor = function (_PureComponent) {
  _inherits(SafeAnchor, _PureComponent);

  function SafeAnchor(props, context) {
    _classCallCheck(this, SafeAnchor);

    var _this = _possibleConstructorReturn(this, (SafeAnchor.__proto__ || Object.getPrototypeOf(SafeAnchor)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SafeAnchor, [{
    key: "handleClick",
    value: function handleClick(event) {
      var _props = this.props,
          disabled = _props.disabled,
          href = _props.href,
          onClick = _props.onClick;


      if (disabled || isTrivialHref(href)) {
        event.preventDefault();
      }

      if (disabled) {
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          Component = _props2.componentClass,
          disabled = _props2.disabled,
          props = _objectWithoutProperties(_props2, ["componentClass", "disabled"]);

      if (isTrivialHref(props.href)) {
        props.role = props.role || "button";
        // we want to make sure there is a href attribute on the node
        // otherwise, the cursor incorrectly styled (except with role='button')
        props.href = props.href || "#";
      }

      if (disabled) {
        props.tabIndex = -1;
        props.style = _extends({ pointerEvents: "none" }, props.style);
      }

      return _react2.default.createElement(Component, _extends({}, props, { onClick: this.handleClick }));
    }
  }]);

  return SafeAnchor;
}(_react.PureComponent);

SafeAnchor.propTypes = {
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * this is sort of silly but needed for Button
   */
  componentClass: _elementType2.default
};
SafeAnchor.defaultProps = {
  componentClass: "a"
};
exports.default = SafeAnchor;