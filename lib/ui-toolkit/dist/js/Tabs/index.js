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

var _isRequiredForA11y = require("react-prop-types/lib/isRequiredForA11y");

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _uncontrollable = require("uncontrollable");

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Nav = require("../Nav");

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require("../Nav/NavItem");

var _NavItem2 = _interopRequireDefault(_NavItem);

var _TabContainer = require("../Tab/TabContainer");

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _TabContent = require("../Tab/TabContent");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabContainer = _TabContainer2.default.ControlledComponent;

function getDefaultActiveKey(children) {
  var defaultActiveKey = void 0;
  _ValidComponentChildren2.default.forEach(children, function (child) {
    if (defaultActiveKey === null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var Tabs = function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "renderTab",
    value: function renderTab(child) {
      var _child$props = child.props,
          title = _child$props.title,
          eventKey = _child$props.eventKey,
          disabled = _child$props.disabled,
          tabClassName = _child$props.tabClassName;

      if (title === null) {
        return null;
      }

      return _react2.default.createElement(
        _NavItem2.default,
        { eventKey: eventKey, disabled: disabled, className: tabClassName },
        title
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          onSelect = _props.onSelect,
          animation = _props.animation,
          unmountOnExit = _props.unmountOnExit,
          bsClass = _props.bsClass,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          _props$activeKey = _props.activeKey,
          activeKey = _props$activeKey === undefined ? getDefaultActiveKey(children) : _props$activeKey,
          props = _objectWithoutProperties(_props, ["id", "onSelect", "animation", "unmountOnExit", "bsClass", "className", "style", "children", "activeKey"]);

      return _react2.default.createElement(
        TabContainer,
        {
          id: id,
          activeKey: activeKey,
          onSelect: onSelect,
          className: className,
          style: style
        },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _Nav2.default,
            _extends({}, props, { role: "tablist" }),
            _ValidComponentChildren2.default.map(children, this.renderTab)
          ),
          _react2.default.createElement(
            _TabContent2.default,
            {
              bsClass: bsClass,
              animation: animation,
              unmountOnExit: unmountOnExit
            },
            children
          )
        )
      );
    }
  }]);

  return Tabs;
}(_react.PureComponent);

Tabs.propTypes = {
  bsClass: _propTypes2.default.any,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: _propTypes2.default.any,

  /**
   * Navigation style
   */
  bsStyle: _propTypes2.default.oneOf(["tabs", "pills"]),

  animation: _propTypes2.default.bool,

  id: (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: _propTypes2.default.func,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: _propTypes2.default.bool
};
Tabs.defaultProps = {
  bsStyle: "tabs",
  animation: true,
  unmountOnExit: false
};


(0, _bootstrapUtils.bsClass)("tab", Tabs);

exports.default = (0, _uncontrollable2.default)(Tabs, { activeKey: "onSelect" });