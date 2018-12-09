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

var _bootstrapUtils = require("../utils/bootstrapUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var TabContent = function (_Component) {
  _inherits(TabContent, _Component);

  function TabContent(props, context) {
    _classCallCheck(this, TabContent);

    var _this = _possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props, context));

    _this.handlePaneEnter = _this.handlePaneEnter.bind(_this);
    _this.handlePaneExited = _this.handlePaneExited.bind(_this);

    // Active entries in state will be `null` unless `animation` is set. Need
    // to track active child in case keys swap and the active child changes
    // but the active key does not.
    _this.state = {
      activeKey: null,
      activeChild: null
    };
    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _props = this.props,
          bsClass = _props.bsClass,
          animation = _props.animation,
          unmountOnExit = _props.unmountOnExit;


      var stateActiveKey = this.state.activeKey;
      var containerActiveKey = this.getContainerActiveKey();

      var activeKey = stateActiveKey !== null ? stateActiveKey : containerActiveKey;
      var exiting = stateActiveKey !== null && stateActiveKey !== containerActiveKey;

      return {
        $bs_tabContent: {
          bsClass: bsClass,
          animation: animation,
          activeKey: activeKey,
          unmountOnExit: unmountOnExit,
          onPaneEnter: this.handlePaneEnter,
          onPaneExited: this.handlePaneExited,
          exiting: exiting
        }
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.animation && this.state.activeChild) {
        this.setState({ activeKey: null, activeChild: null });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounted = true;
    }
  }, {
    key: "handlePaneEnter",
    value: function handlePaneEnter(child, childKey) {
      if (!this.props.animation) {
        return false;
      }

      // It's possible that this child should be transitioning out.
      if (childKey !== this.getContainerActiveKey()) {
        return false;
      }

      this.setState({
        activeKey: childKey,
        activeChild: child
      });

      return true;
    }
  }, {
    key: "handlePaneExited",
    value: function handlePaneExited(child) {
      // This might happen as everything is unmounting.
      if (this.isUnmounted) {
        return;
      }

      this.setState(function (_ref) {
        var activeChild = _ref.activeChild;

        if (activeChild !== child) {
          return null;
        }

        return {
          activeKey: null,
          activeChild: null
        };
      });
    }
  }, {
    key: "getContainerActiveKey",
    value: function getContainerActiveKey() {
      var tabContainer = this.context.$bs_tabContainer;
      return tabContainer && tabContainer.activeKey;
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          Component = _props2.componentClass,
          className = _props2.className,
          props = _objectWithoutProperties(_props2, ["componentClass", "className"]);

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["animation", "unmountOnExit"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      return _react2.default.createElement(Component, _extends({}, elementProps, {
        className: (0, _classnames2.default)(className, (0, _bootstrapUtils.prefix)(bsProps, "content"))
      }));
    }
  }]);

  return TabContent;
}(_react.Component);

TabContent.propTypes = {
  bsClass: _propTypes2.default.any,
  className: _propTypes2.default.string,
  componentClass: _elementType2.default,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or any
   * `<Transition>` component.
   */
  animation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _elementType2.default]),

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: _propTypes2.default.bool
};
TabContent.defaultProps = {
  componentClass: "div",
  animation: true,
  unmountOnExit: false
};
TabContent.contextTypes = {
  $bs_tabContainer: _propTypes2.default.shape({
    activeKey: _propTypes2.default.any
  })
};
TabContent.childContextTypes = {
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
exports.default = (0, _bootstrapUtils.bsClass)("tab", TabContent);