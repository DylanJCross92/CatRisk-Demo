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

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _Fade = require("../Fade");

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var TabPane = function (_PureComponent) {
  _inherits(TabPane, _PureComponent);

  // no ops for chained function
  function TabPane(props, context) {
    _classCallCheck(this, TabPane);

    var _this = _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props, context));

    _this.handleEnter = _this.handleEnter.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);

    _this.in = false;
    return _this;
  }

  /**
   * We override the `<TabContainer>` context so `<Nav>`s in `<TabPane>`s don't
   * conflict with the top level one.
   */


  _createClass(TabPane, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        $bs_tabContainer: null
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.shouldBeIn()) {
        // In lieu of the action event firing.
        this.handleEnter();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.in) {
        if (!this.shouldBeIn()) {
          // We shouldn't be active any more. Notify the parent.
          this.handleExited();
        }
      } else if (this.shouldBeIn()) {
        // We are the active child. Notify the parent.
        this.handleEnter();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.in) {
        // In lieu of the action event firing.
        this.handleExited();
      }
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      var tabContent = this.context.$bs_tabContent;
      if (!tabContent) {
        return;
      }

      this.in = tabContent.onPaneEnter(this, this.props.eventKey);
    }
  }, {
    key: "handleExited",
    value: function handleExited() {
      var tabContent = this.context.$bs_tabContent;
      if (!tabContent) {
        return;
      }

      tabContent.onPaneExited(this);
      this.in = false;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation() {
      if (this.props.animation !== null) {
        return this.props.animation;
      }

      var tabContent = this.context.$bs_tabContent;
      return tabContent && tabContent.animation;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      var tabContent = this.context.$bs_tabContent;
      var activeKey = tabContent && tabContent.activeKey;

      return this.props.eventKey === activeKey;
    }
  }, {
    key: "shouldBeIn",
    value: function shouldBeIn() {
      return this.getAnimation() && this.isActive();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          eventKey = _props.eventKey,
          className = _props.className,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          propsUnmountOnExit = _props.unmountOnExit,
          props = _objectWithoutProperties(_props, ["eventKey", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "unmountOnExit"]);

      var _context = this.context,
          tabContent = _context.$bs_tabContent,
          tabContainer = _context.$bs_tabContainer;

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["animation"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      var active = this.isActive();
      var animation = this.getAnimation();

      var unmountOnExit = propsUnmountOnExit !== null ? propsUnmountOnExit : tabContent && tabContent.unmountOnExit;

      if (!active && !animation && unmountOnExit) {
        return null;
      }

      var Transition = animation === true ? _Fade2.default : animation || null;

      if (tabContent) {
        bsProps.bsClass = (0, _bootstrapUtils.prefix)(tabContent, "pane");
      }

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
        active: active
      });

      if (tabContainer) {
        (0, _warning2.default)(!elementProps.id && !elementProps["aria-labelledby"], "In the context of a `<TabContainer>`, `<TabPanes>` are given " + "generated `id` and `aria-labelledby` attributes for the sake of " + "proper component accessibility. Any provided ones will be ignored. " + "To control these attributes directly provide a `generateChildId` " + "prop to the parent `<TabContainer>`.");

        elementProps.id = tabContainer.getPaneId(eventKey);
        elementProps["aria-labelledby"] = tabContainer.getTabId(eventKey);
      }

      var pane = _react2.default.createElement("div", _extends({}, elementProps, {
        role: "tabpanel",
        "aria-hidden": !active,
        className: (0, _classnames2.default)(className, classes)
      }));

      if (Transition) {
        var exiting = tabContent && tabContent.exiting;

        return _react2.default.createElement(
          Transition,
          {
            "in": active && !exiting,
            onEnter: (0, _createChainedFunction2.default)(this.handleEnter, onEnter),
            onEntering: onEntering,
            onEntered: onEntered,
            onExit: onExit,
            onExiting: onExiting,
            onExited: (0, _createChainedFunction2.default)(this.handleExited, onExited),
            unmountOnExit: unmountOnExit
          },
          pane
        );
      }

      return pane;
    }
  }]);

  return TabPane;
}(_react.PureComponent);

TabPane.propTypes = {
  className: _propTypes2.default.string,
  /**
   * Uniquely identify the `<TabPane>` among its siblings.
   */
  eventKey: _propTypes2.default.any,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or any `<Transition>`
   * component.
   */
  animation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _elementType2.default]),

  /** @private **/
  id: _propTypes2.default.string,

  /** @private **/
  "aria-labelledby": _propTypes2.default.string,

  /**
   * If not explicitly specified and rendered in the context of a
   * `<TabContent>`, the `bsClass` of the `<TabContent>` suffixed by `-pane`.
   * If otherwise not explicitly specified, `tab-pane`.
   */
  bsClass: _propTypes2.default.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: _propTypes2.default.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: _propTypes2.default.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: _propTypes2.default.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: _propTypes2.default.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: _propTypes2.default.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: _propTypes2.default.func,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: _propTypes2.default.bool
};
TabPane.contextTypes = {
  $bs_tabContainer: _propTypes2.default.shape({
    getId: _propTypes2.default.func,
    unmountOnExit: _propTypes2.default.bool
  }),
  $bs_tabContent: _propTypes2.default.shape({
    bsClass: _propTypes2.default.string,
    animation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _elementType2.default]),
    activeKey: _propTypes2.default.any,
    unmountOnExit: _propTypes2.default.bool,
    onPaneEnter: _propTypes2.default.func.isRequired,
    onPaneExited: _propTypes2.default.func.isRequired,
    exiting: _propTypes2.default.bool.isRequired
  })
};
TabPane.defaultProps = {
  onEnter: function onEnter() {},
  onExited: function onExited() {}
};
TabPane.childContextTypes = {
  $bs_tabContainer: _propTypes2.default.oneOf([null])
};
exports.default = (0, _bootstrapUtils.bsClass)("tab-pane", TabPane);