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

var _Icons = require("../Icons");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _StyleConfig = require("../utils/StyleConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var timerSeconds = 5;

var Alert = function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.globalTick = function () {
      _this.setState({ secondsRemaining: _this.state.secondsRemaining - 1 }, function () {
        if (_this.state.secondsRemaining <= 0) {
          clearInterval(_this.interval);
          _this.props.onDismiss();
        }
      });
    };

    _this.renderDismissButton = function (onDismiss) {
      return _react2.default.createElement(
        "button",
        {
          type: "button",
          className: "close",
          onClick: onDismiss,
          "aria-hidden": "true",
          tabIndex: "-1"
        },
        _react2.default.createElement(
          "span",
          null,
          "\xD7"
        )
      );
    };

    _this.renderSrOnlyDismissButton = function (onDismiss, closeLabel) {
      return _react2.default.createElement(
        "button",
        { type: "button", className: "close sr-only", onClick: onDismiss },
        closeLabel
      );
    };

    _this.renderAutoDismissTimer = function () {
      return _react2.default.createElement("div", {
        className: "alert-timer",
        style: { animationDuration: timerSeconds + "s" }
      });
    };

    _this.renderIcon = function () {
      var bsStyle = _this.props.bsStyle;

      switch (bsStyle) {
        case "warning":
          return _react2.default.createElement(_Icons.IconWarning, null);
        case "success":
          return _react2.default.createElement(_Icons.IconCheckCircle, null);
        case "danger":
          return _react2.default.createElement(_Icons.IconError, null);
        case "info":
          return _react2.default.createElement(_Icons.IconInfo, null);
        default:
          return null;
      }
    };

    _this.state = { secondsRemaining: timerSeconds };
    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoDismiss) {
        this.interval = setInterval(this.globalTick, 1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _extends2;

      var _props = this.props,
          onDismiss = _props.onDismiss,
          className = _props.className,
          children = _props.children,
          hasIcon = _props.hasIcon,
          isGlobal = _props.isGlobal,
          autoDismiss = _props.autoDismiss,
          closeLabel = _props.closeLabel,
          props = _objectWithoutProperties(_props, ["onDismiss", "className", "children", "hasIcon", "isGlobal", "autoDismiss", "closeLabel"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var dismissible = !!onDismiss;
      var renderIcon = isGlobal || hasIcon;
      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _defineProperty(_extends2, (0, _bootstrapUtils.prefix)(bsProps, "dismissible"), dismissible), _defineProperty(_extends2, (0, _bootstrapUtils.prefix)(bsProps, "has-icon"), renderIcon), _defineProperty(_extends2, (0, _bootstrapUtils.prefix)(bsProps, "global"), isGlobal), _defineProperty(_extends2, (0, _bootstrapUtils.prefix)(bsProps, "auto-dismiss"), autoDismiss), _extends2));

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, {
          role: "alert",
          className: (0, _classnames2.default)(className, classes)
        }),
        renderIcon && this.renderIcon(),
        dismissible && this.renderDismissButton(onDismiss),
        children,
        dismissible && this.renderSrOnlyDismissButton(onDismiss, closeLabel),
        autoDismiss && this.renderAutoDismissTimer()
      );
    }
  }]);

  return Alert;
}(_react.PureComponent);

Alert.defaultProps = {
  closeLabel: "Close alert"
};
Alert.propTypes = {
  /**
   * Alert "flavors"
   */
  bsStyle: _propTypes2.default.oneOf(["default", "primary", "success", "info", "warning", "danger"]),

  children: _propTypes2.default.node,
  /**
   * Additional wildcard classes that can be appended to base class
   */
  className: _propTypes2.default.string,
  /**
   * Customizable message for close action
   */
  closeLabel: _propTypes2.default.string,
  /**
   * Automatically display an icon based on the bsStyle
   */
  hasIcon: _propTypes2.default.bool,
  /**
   * Make the alert a global alert notification
   */
  isGlobal: _propTypes2.default.bool,
  /**
   * Callback once alert is closed
   */
  onDismiss: _propTypes2.default.func,
  /**
   * Show a timer on the alert and automatically trigged `onDismiss` after 5 seconds
   */
  autoDismiss: _propTypes2.default.bool
};
exports.default = (0, _bootstrapUtils.bsStyles)(Object.values(_StyleConfig.State), _StyleConfig.State.INFO, (0, _bootstrapUtils.bsClass)("alert", Alert));