"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collapseStyles;

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require("dom-helpers/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = require("react-transition-group/Transition");

var _Transition2 = _interopRequireDefault(_Transition);

var _capitalize = require("../utils/capitalize");

var _capitalize2 = _interopRequireDefault(_capitalize);

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem["offset" + (0, _capitalize2.default)(dimension)];
  var margins = MARGINS[dimension];

  return value + parseInt((0, _style2.default)(elem, margins[0]), 10) + parseInt((0, _style2.default)(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _defineProperty(_collapseStyles, _Transition.EXITED, "collapse"), _defineProperty(_collapseStyles, _Transition.EXITING, "collapsing"), _defineProperty(_collapseStyles, _Transition.ENTERING, "collapsing"), _defineProperty(_collapseStyles, _Transition.ENTERED, "collapse in"), _collapseStyles);

var Collapse = function (_PureComponent) {
  _inherits(Collapse, _PureComponent);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = "0";
    }, _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();
      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    }, _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    }, _this.handleExit = function (elem) {
      var dimension = _this.getDimension();
      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      triggerBrowserReflow(elem);
    }, _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = "0";
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collapse, [{
    key: "getDimension",
    value: function getDimension() {
      return typeof this.props.dimension === "function" ? this.props.dimension() : this.props.dimension;
    }

    // for testing

  }, {
    key: "_getScrollDimensionValue",
    value: function _getScrollDimensionValue(elem, dimension) {
      return elem["scroll" + (0, _capitalize2.default)(dimension)] + "px";
    }

    /* -- Expanding -- */


    /* -- Collapsing -- */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

      delete props.dimension;
      delete props.getDimensionValue;

      var handleEnter = (0, _createChainedFunction2.default)(this.handleEnter, onEnter);
      var handleEntering = (0, _createChainedFunction2.default)(this.handleEntering, onEntering);
      var handleEntered = (0, _createChainedFunction2.default)(this.handleEntered, onEntered);
      var handleExit = (0, _createChainedFunction2.default)(this.handleExit, onExit);
      var handleExiting = (0, _createChainedFunction2.default)(this.handleExiting, onExiting);

      return _react2.default.createElement(
        _Transition2.default,
        _extends({}, props, {
          "aria-expanded": props.role ? props.in : null,
          onEnter: handleEnter,
          onEntering: handleEntering,
          onEntered: handleEntered,
          onExit: handleExit,
          onExiting: handleExiting
        }),
        function (state, innerProps) {
          return _react2.default.cloneElement(children, _extends({}, innerProps, {
            className: (0, _classnames2.default)(className, children.props.className, collapseStyles[state], _this2.getDimension() === "width" && "width")
          }));
        }
      );
    }
  }]);

  return Collapse;
}(_react.PureComponent);

Collapse.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.array,
  /**
   * Show the component; triggers the expand or collapse animation
   */
  in: _propTypes2.default.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: _propTypes2.default.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: _propTypes2.default.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear: _propTypes2.default.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: _propTypes2.default.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired after the component starts to expand
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired after the component has expanded
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired before the component collapses
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired after the component has collapsed
   */
  onExited: _propTypes2.default.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the '.width' CSS class._
   */
  dimension: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(["height", "width"]), _propTypes2.default.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: _propTypes2.default.func,

  /**
   * ARIA role of collapsible element
   */
  role: _propTypes2.default.string
};
Collapse.defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,

  dimension: "height",
  getDimensionValue: getDimensionValue
};
exports.default = Collapse;