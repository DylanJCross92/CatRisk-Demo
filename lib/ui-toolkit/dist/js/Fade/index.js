"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fadeStyles;

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = require("react-transition-group/Transition");

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fadeStyles = (_fadeStyles = {}, _defineProperty(_fadeStyles, _Transition.ENTERING, "in"), _defineProperty(_fadeStyles, _Transition.ENTERED, "in"), _fadeStyles);

var Fade = function (_PureComponent) {
  _inherits(Fade, _PureComponent);

  function Fade() {
    _classCallCheck(this, Fade);

    return _possibleConstructorReturn(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).apply(this, arguments));
  }

  _createClass(Fade, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["className", "children"]);

      return _react2.default.createElement(
        _Transition2.default,
        props,
        function (status, innerProps) {
          return _react2.default.cloneElement(children, _extends({}, innerProps, {
            className: (0, _classnames2.default)("fade", className, children.props.className, fadeStyles[status])
          }));
        }
      );
    }
  }]);

  return Fade;
}(_react.PureComponent);

Fade.propTypes = {
  children: _propTypes2.default.array,
  /**
   * Additional wildcard classes that can be appended to base class
   */
  className: _propTypes2.default.string,
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in: _propTypes2.default.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: _propTypes2.default.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: _propTypes2.default.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: _propTypes2.default.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: _propTypes2.default.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired before the component fades out
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: _propTypes2.default.func
};
Fade.defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
exports.default = Fade;