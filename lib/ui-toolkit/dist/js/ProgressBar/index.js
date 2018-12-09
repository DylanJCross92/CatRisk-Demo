"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _StyleConfig = require("../utils/StyleConfig");

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ROUND_PRECISION = 1000;

/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */
function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];
  if (!children) {
    return null;
  }

  var error = null;

  _react2.default.Children.forEach(children, function (child) {
    if (error) {
      return;
    }

    if (child.type === ProgressBar) {
      // eslint-disable-line no-use-before-define
      return;
    }

    var childIdentifier = _react2.default.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar components. Found " + childIdentifier + ".");
  });

  return error;
}

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar = function (_PureComponent) {
  _inherits(ProgressBar, _PureComponent);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: "renderProgressBar",
    value: function renderProgressBar(_ref) {
      var min = _ref.min,
          now = _ref.now,
          max = _ref.max,
          label = _ref.label,
          srOnly = _ref.srOnly,
          striped = _ref.striped,
          active = _ref.active,
          className = _ref.className,
          style = _ref.style,
          props = _objectWithoutProperties(_ref, ["min", "now", "max", "label", "srOnly", "striped", "active", "className", "style"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), _defineProperty({
        active: active
      }, (0, _bootstrapUtils.prefix)(bsProps, "striped"), active || striped));

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, {
          role: "progressbar",
          className: (0, _classnames2.default)(className, classes),
          style: _extends({ width: getPercentage(now, min, max) + "%" }, style),
          "aria-valuenow": now,
          "aria-valuemin": min,
          "aria-valuemax": max
        }),
        srOnly ? _react2.default.createElement(
          "span",
          { className: "sr-only" },
          label
        ) : label
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          isChild = _props.isChild,
          props = _objectWithoutProperties(_props, ["isChild"]);

      if (isChild) {
        return this.renderProgressBar(props);
      }

      var min = props.min,
          now = props.now,
          max = props.max,
          label = props.label,
          srOnly = props.srOnly,
          striped = props.striped,
          active = props.active,
          bsClass = props.bsClass,
          bsStyle = props.bsStyle,
          className = props.className,
          children = props.children,
          wrapperProps = _objectWithoutProperties(props, ["min", "now", "max", "label", "srOnly", "striped", "active", "bsClass", "bsStyle", "className", "children"]);

      return _react2.default.createElement(
        "div",
        _extends({}, wrapperProps, { className: (0, _classnames2.default)(className, "progress") }),
        children ? _ValidComponentChildren2.default.map(children, function (child) {
          return (0, _react.cloneElement)(child, { isChild: true });
        }) : this.renderProgressBar({
          min: min,
          now: now,
          max: max,
          label: label,
          srOnly: srOnly,
          striped: striped,
          active: active,
          bsClass: bsClass,
          bsStyle: bsStyle
        })
      );
    }
  }]);

  return ProgressBar;
}(_react.PureComponent);

ProgressBar.propTypes = {
  min: _propTypes2.default.number,
  now: _propTypes2.default.number,
  max: _propTypes2.default.number,
  label: _propTypes2.default.node,
  srOnly: _propTypes2.default.bool,
  striped: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: _propTypes2.default.bool
};
ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false
};
exports.default = (0, _bootstrapUtils.bsClass)("progress-bar", (0, _bootstrapUtils.bsStyles)(Object.values(_StyleConfig.State), ProgressBar));