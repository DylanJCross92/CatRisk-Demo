"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Overlay = require("react-overlays/lib/Overlay");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _Fade = require("../Fade");

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          animation = _props.animation,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["animation", "children"]);

      var transition = animation === true ? _Fade2.default : animation || null;

      var child = void 0;

      if (!transition) {
        child = (0, _react.cloneElement)(children, {
          className: (0, _classnames2.default)(children.props.className, "in")
        });
      } else {
        child = children;
      }

      return _react2.default.createElement(
        _Overlay2.default,
        _extends({}, props, { transition: transition }),
        child
      );
    }
  }]);

  return Overlay;
}(_react.PureComponent);

Overlay.propTypes = _extends({}, _Overlay2.default.propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes2.default.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _propTypes2.default.bool,
  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: _propTypes2.default.func,

  /**
   * Use animation
   */
  animation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _elementType2.default]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes2.default.func,

  /**
   * Sets the direction of the Overlay.
   */
  placement: _propTypes2.default.oneOf(["top", "right", "bottom", "left"])
});
Overlay.defaultProps = {
  animation: _Fade2.default,
  rootClose: false,
  show: false,
  placement: "right"
};
exports.default = Overlay;