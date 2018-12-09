"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Callout = function (_PureComponent) {
  _inherits(Callout, _PureComponent);

  function Callout() {
    _classCallCheck(this, Callout);

    return _possibleConstructorReturn(this, (Callout.__proto__ || Object.getPrototypeOf(Callout)).apply(this, arguments));
  }

  _createClass(Callout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          bsStyle = _props.bsStyle,
          children = _props.children,
          title = _props.title;

      var classes = (0, _classnames3.default)(_defineProperty({
        callout: true
      }, "callout-" + bsStyle, bsStyle));

      return _react2.default.createElement(
        "div",
        { className: classes },
        _react2.default.createElement(
          "h4",
          null,
          title
        ),
        children
      );
    }
  }]);

  return Callout;
}(_react.PureComponent);

Callout.propTypes = {
  /**
   * Callout "flavors"
   */
  bsStyle: _propTypes2.default.oneOf(["info", "warning", "danger"]),
  /**
   * HTML elements
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Heading text that gets displayed at the top
   */
  title: _propTypes2.default.string.isRequired
};
exports.default = Callout;