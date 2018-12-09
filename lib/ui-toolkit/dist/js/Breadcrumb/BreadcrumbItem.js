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

var _SafeAnchor = require("../SafeAnchor");

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbItem = function (_PureComponent) {
  _inherits(BreadcrumbItem, _PureComponent);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
  }

  _createClass(BreadcrumbItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          active = _props.active,
          href = _props.href,
          title = _props.title,
          target = _props.target,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["active", "href", "title", "target", "className"]);

      // Don't try to render these props on non-active <span>.


      var linkProps = { href: href, title: title, target: target };

      return _react2.default.createElement(
        "li",
        { className: (0, _classnames2.default)(className, { active: active }) },
        active ? _react2.default.createElement("span", props) : _react2.default.createElement(_SafeAnchor2.default, _extends({}, props, linkProps))
      );
    }
  }]);

  return BreadcrumbItem;
}(_react.PureComponent);

BreadcrumbItem.propTypes = {
  /**
   * Shows current page
   */
  active: _propTypes2.default.bool,
  /**
   * Additional wildcard classes that can be appended to base class
   */
  className: _propTypes2.default.string,
  /**
   * Link to page
   */
  href: _propTypes2.default.string,
  /**
   * Name on link
   */
  title: _propTypes2.default.node,
  /**
   * Determines link action
   */
  target: _propTypes2.default.oneOf(["_blank", "_self", "_parent", "_top"])
};
BreadcrumbItem.defaultProps = {
  active: false,
  target: "_self"
};
exports.default = BreadcrumbItem;