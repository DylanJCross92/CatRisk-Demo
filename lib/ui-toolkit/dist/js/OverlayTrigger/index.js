"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contains = require("dom-helpers/query/contains");

var _contains2 = _interopRequireDefault(_contains);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _Overlay = require("./Overlay");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var triggerType = _propTypes2.default.oneOf(["click", "hover", "focus"]);

var OverlayTrigger = function (_Component) {
  _inherits(OverlayTrigger, _Component);

  function OverlayTrigger(props, context) {
    _classCallCheck(this, OverlayTrigger);

    var _this = _possibleConstructorReturn(this, (OverlayTrigger.__proto__ || Object.getPrototypeOf(OverlayTrigger)).call(this, props, context));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleDelayedShow = _this.handleDelayedShow.bind(_this);
    _this.handleDelayedHide = _this.handleDelayedHide.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);

    _this.handleMouseOver = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedShow, e);
    };
    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e);
    };

    _this._mountNode = null;

    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  _createClass(OverlayTrigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mountNode = document.createElement("div");
      this.renderOverlay();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderOverlay();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this._mountNode);
      this._mountNode = null;

      clearTimeout(this._hoverShowDelay);
      clearTimeout(this._hoverHideDelay);
    }
  }, {
    key: "handleDelayedHide",
    value: function handleDelayedHide() {
      var _this2 = this;

      if (this._hoverShowDelay != null) {
        clearTimeout(this._hoverShowDelay);
        this._hoverShowDelay = null;
        return;
      }

      if (!this.state.show || this._hoverHideDelay != null) {
        return;
      }

      var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

      if (!delay) {
        this.hide();
        return;
      }

      this._hoverHideDelay = setTimeout(function () {
        _this2._hoverHideDelay = null;
        _this2.hide();
      }, delay);
    }
  }, {
    key: "handleDelayedShow",
    value: function handleDelayedShow() {
      var _this3 = this;

      if (this._hoverHideDelay != null) {
        clearTimeout(this._hoverHideDelay);
        this._hoverHideDelay = null;
        return;
      }

      if (this.state.show || this._hoverShowDelay != null) {
        return;
      }

      var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

      if (!delay) {
        this.show();
        return;
      }

      this._hoverShowDelay = setTimeout(function () {
        _this3._hoverShowDelay = null;
        _this3.show();
      }, delay);
    }
  }, {
    key: "handleHide",
    value: function handleHide() {
      this.hide();
    }

    // Simple implementation of mouseEnter and mouseLeave.
    // React's built version is broken: https://github.com/facebook/react/issues/4251
    // for cases when the trigger is disabled and mouseOut/Over can cause flicker
    // moving from one child element to another.

  }, {
    key: "handleMouseOverOut",
    value: function handleMouseOverOut(handler, e) {
      var target = e.currentTarget;
      var related = e.relatedTarget || e.nativeEvent.toElement;

      if ((!related || related !== target) && !(0, _contains2.default)(target, related)) {
        handler(e);
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      if (this.state.show) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({ show: false });
    }
  }, {
    key: "makeOverlay",
    value: function makeOverlay(overlay, props) {
      return _react2.default.createElement(
        _Overlay2.default,
        _extends({}, props, {
          show: this.state.show,
          onHide: this.handleHide,
          target: this
        }),
        overlay
      );
    }
  }, {
    key: "show",
    value: function show() {
      this.setState({ show: true });
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          trigger = _props.trigger,
          overlay = _props.overlay,
          children = _props.children,
          onBlur = _props.onBlur,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver,
          props = _objectWithoutProperties(_props, ["trigger", "overlay", "children", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver"]);

      delete props.delay;
      delete props.delayShow;
      delete props.delayHide;
      delete props.defaultOverlayShown;

      var child = _react2.default.Children.only(children);
      var childProps = child.props;
      var triggerProps = {};

      if (this.state.show) {
        triggerProps["aria-describedby"] = overlay.props.id;
      }

      // FIXME: The logic here for passing through handlers on this component is
      // inconsistent. We shouldn't be passing any of these props through.

      triggerProps.onClick = (0, _createChainedFunction2.default)(childProps.onClick, onClick);

      if (isOneOf("click", trigger)) {
        triggerProps.onClick = (0, _createChainedFunction2.default)(triggerProps.onClick, this.handleToggle);
      }

      if (isOneOf("hover", trigger)) {
        (0, _warning2.default)(!(trigger === "hover"), '[react-bootstrap] Specifying only the "hover" trigger limits the ' + "visibility of the overlay to just mouse users. Consider also " + 'including the "focus" trigger so that touch and keyboard only ' + "users can see the overlay as well.");

        triggerProps.onMouseOver = (0, _createChainedFunction2.default)(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
        triggerProps.onMouseOut = (0, _createChainedFunction2.default)(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
      }

      if (isOneOf("focus", trigger)) {
        triggerProps.onFocus = (0, _createChainedFunction2.default)(childProps.onFocus, onFocus, this.handleDelayedShow);
        triggerProps.onBlur = (0, _createChainedFunction2.default)(childProps.onBlur, onBlur, this.handleDelayedHide);
      }

      this._overlay = this.makeOverlay(overlay, props);

      return (0, _react.cloneElement)(child, triggerProps);
    }
  }]);

  return OverlayTrigger;
}(_react.Component);

OverlayTrigger.propTypes = _extends({}, _Overlay2.default.propTypes, {

  /**
   * Specify which action or actions trigger Overlay visibility
   */
  trigger: _propTypes2.default.oneOfType([triggerType, _propTypes2.default.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: _propTypes2.default.number,
  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: _propTypes2.default.number,
  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: _propTypes2.default.number,

  // FIXME: This should be "defaultShow".
  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: _propTypes2.default.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: _propTypes2.default.node.isRequired,

  /**
   * @private
   */
  onBlur: _propTypes2.default.func,
  /**
   * @private
   */
  onClick: _propTypes2.default.func,
  /**
   * @private
   */
  onFocus: _propTypes2.default.func,
  /**
   * @private
   */
  onMouseOut: _propTypes2.default.func,
  /**
   * @private
   */
  onMouseOver: _propTypes2.default.func,

  // Overridden props from <Overlay>.
  /**
   * @private
   */
  target: _propTypes2.default.oneOf([null]),
  /**
   * @private
   */
  onHide: _propTypes2.default.oneOf([null]),
  /**
   * @private
   */
  show: _propTypes2.default.oneOf([null])
});
OverlayTrigger.defaultProps = {
  defaultOverlayShown: false,
  trigger: ["hover", "focus"]
};
exports.default = OverlayTrigger;