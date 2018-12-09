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

var _keycode = require("keycode");

var _keycode2 = _interopRequireDefault(_keycode);

var _all = require("react-prop-types/lib/all");

var _all2 = _interopRequireDefault(_all);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _NavItem = require("./NavItem");

var _NavItem2 = _interopRequireDefault(_NavItem);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var Nav = function (_PureComponent) {
  _inherits(Nav, _PureComponent);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (!this._needsRefocus) {
        return;
      }

      this._needsRefocus = false;

      var children = this.props.children;

      var _getActiveProps = this.getActiveProps(),
          activeKey = _getActiveProps.activeKey,
          activeHref = _getActiveProps.activeHref;

      var activeChild = _ValidComponentChildren2.default.find(children, function (child) {
        return _this2.isActive(child, activeKey, activeHref);
      });

      var childrenArray = _ValidComponentChildren2.default.toArray(children);
      var activeChildIndex = childrenArray.indexOf(activeChild);

      var childNodes = this.navigation.children;
      var activeNode = childNodes && childNodes[activeChildIndex];

      if (!activeNode || !activeNode.firstChild) {
        return;
      }

      activeNode.firstChild.focus();
    }
  }, {
    key: "handleTabKeyDown",
    value: function handleTabKeyDown(onSelect, event) {
      var nextActiveChild = void 0;

      switch (event.keyCode) {
        case _keycode2.default.codes.left:
        case _keycode2.default.codes.up:
          nextActiveChild = this.getNextActiveChild(-1);
          break;
        case _keycode2.default.codes.right:
        case _keycode2.default.codes.down:
          nextActiveChild = this.getNextActiveChild(1);
          break;
        default:
          // It was a different key; don't handle this keypress.
          return;
      }

      event.preventDefault();

      if (onSelect && nextActiveChild && nextActiveChild.props.eventKey) {
        onSelect(nextActiveChild.props.eventKey);
      }

      this._needsRefocus = true;
    }
  }, {
    key: "getNextActiveChild",
    value: function getNextActiveChild(offset) {
      var _this3 = this;

      var children = this.props.children;

      var validChildren = children.filter(function (child) {
        return child.props.eventKey && !child.props.disabled;
      });

      var _getActiveProps2 = this.getActiveProps(),
          activeKey = _getActiveProps2.activeKey,
          activeHref = _getActiveProps2.activeHref;

      var activeChild = _ValidComponentChildren2.default.find(children, function (child) {
        return _this3.isActive(child, activeKey, activeHref);
      });

      // This assumes the active child is not disabled.
      var activeChildIndex = validChildren.indexOf(activeChild);
      if (activeChildIndex === -1) {
        // Something has gone wrong. Select the first valid child we can find.
        return validChildren[0];
      }

      var nextIndex = activeChildIndex + offset;
      var numValidChildren = validChildren.length;

      if (nextIndex >= numValidChildren) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = numValidChildren - 1;
      }

      return validChildren[nextIndex];
    }
  }, {
    key: "getActiveProps",
    value: function getActiveProps() {
      var tabContainer = this.context.$bs_tabContainer;

      if (tabContainer) {
        (0, _warning2.default)(this.props.activeKey === null && !this.props.activeHref, "Specifying a `<Nav>` `activeKey` or `activeHref` in the context of " + "a `<TabContainer>` is not supported. Instead use `<TabContainer " + ("activeKey={" + this.props.activeKey + "} />`."));

        return tabContainer;
      }

      return this.props;
    }
  }, {
    key: "isActive",
    value: function isActive(_ref, activeKey, activeHref) {
      var props = _ref.props;

      if (props.active || activeKey !== null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
        return true;
      }

      return props.active;
    }
  }, {
    key: "getTabProps",
    value: function getTabProps(child, tabContainer, navRole, active, onSelect) {
      var _this4 = this;

      if (!tabContainer && navRole !== "tablist") {
        // No tab props here.
        return null;
      }

      var _child$props = child.props,
          id = _child$props.id,
          controls = _child$props["aria-controls"],
          eventKey = _child$props.eventKey,
          role = _child$props.role,
          onKeyDown = _child$props.onKeyDown,
          tabIndex = _child$props.tabIndex;


      if (tabContainer) {
        (0, _warning2.default)(!id && !controls, "In the context of a `<TabContainer>`, `<NavItem>`s are given " + "generated `id` and `aria-controls` attributes for the sake of " + "proper component accessibility. Any provided ones will be ignored. " + "To control these attributes directly, provide a `generateChildId` " + "prop to the parent `<TabContainer>`.");

        id = tabContainer.getTabId(eventKey);
        controls = tabContainer.getPaneId(eventKey);
      }

      var onKeyDownFunc = typeof onKeyDown === "function" ? onKeyDown : function () {};

      if (navRole === "tablist") {
        role = role || "tab";
        onKeyDown = (0, _createChainedFunction2.default)(function (event) {
          return _this4.handleTabKeyDown(onSelect, event);
        }, onKeyDownFunc);
        tabIndex = active ? tabIndex : -1;
      }

      return {
        id: id,
        role: role,
        onKeyDown: onKeyDown,
        "aria-controls": controls,
        tabIndex: tabIndex
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _extends2,
          _this5 = this;

      var _props = this.props,
          stacked = _props.stacked,
          justified = _props.justified,
          onSelect = _props.onSelect,
          propsRole = _props.role,
          propsNavbar = _props.navbar,
          pullRight = _props.pullRight,
          pullLeft = _props.pullLeft,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["stacked", "justified", "onSelect", "role", "navbar", "pullRight", "pullLeft", "className", "children"]);

      var tabContainer = this.context.$bs_tabContainer;
      var role = propsRole || (tabContainer ? "tablist" : null);

      var _getActiveProps3 = this.getActiveProps(),
          activeKey = _getActiveProps3.activeKey,
          activeHref = _getActiveProps3.activeHref;

      delete props.activeKey; // Accessed via this.getActiveProps().
      delete props.activeHref; // Accessed via this.getActiveProps().

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _defineProperty(_extends2, (0, _bootstrapUtils.prefix)(bsProps, "stacked"), stacked), _defineProperty(_extends2, (0, _bootstrapUtils.prefix)(bsProps, "justified"), justified), _extends2));

      var navbar = propsNavbar !== null ? propsNavbar : this.context.$bs_navbar;
      var pullLeftClassName = void 0;
      var pullRightClassName = void 0;

      if (navbar) {
        var navbarProps = this.context.$bs_navbar || { bsClass: "navbar" };

        classes[(0, _bootstrapUtils.prefix)(navbarProps, "nav")] = true;

        pullRightClassName = (0, _bootstrapUtils.prefix)(navbarProps, "right");
        pullLeftClassName = (0, _bootstrapUtils.prefix)(navbarProps, "left");
      } else {
        pullRightClassName = "pull-right";
        pullLeftClassName = "pull-left";
      }

      classes[pullRightClassName] = pullRight;
      classes[pullLeftClassName] = pullLeft;

      return _react2.default.createElement(
        "ul",
        _extends({}, elementProps, {
          role: role,
          className: (0, _classnames2.default)(className, classes),
          ref: function ref(navigation) {
            return _this5.navigation = navigation;
          }
        }),
        _ValidComponentChildren2.default.map(children, function (child) {
          var active = _this5.isActive(child, activeKey, activeHref);
          // no ops for horrible chained function
          var childOnSelectFunc = !!child.props.onSelect ? child.props.onSelect : function () {};
          var navbarOnSelectFunc = navbar && navbar.onSelect ? navbar.onSelect : function () {};
          var tabContainerOnSelectFunc = tabContainer && tabContainer.onSelect ? tabContainer.onSelect : function () {};

          var childOnSelect = (0, _createChainedFunction2.default)(childOnSelectFunc, onSelect, navbarOnSelectFunc, tabContainerOnSelectFunc);

          return (0, _react.cloneElement)(child, _extends({}, _this5.getTabProps(child, tabContainer, role, active, childOnSelect), {
            active: active,
            activeKey: activeKey,
            activeHref: activeHref,
            onSelect: childOnSelect
          }));
        })
      );
    }
  }]);

  return Nav;
}(_react.PureComponent);

Nav.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: _propTypes2.default.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: _propTypes2.default.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: _propTypes2.default.bool,

  justified: (0, _all2.default)(_propTypes2.default.bool, function (_ref2) {
    var justified = _ref2.justified,
        navbar = _ref2.navbar;
    return justified && navbar ? Error("justified navbar `Nav`s are not supported") : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: _propTypes2.default.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is set to "tablist" NavItem focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: _propTypes2.default.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: _propTypes2.default.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: _propTypes2.default.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: _propTypes2.default.bool
};
Nav.defaultProps = {
  justified: false,
  onSelect: function onSelect() {}, // noop for chain function
  pullRight: false,
  pullLeft: false,
  stacked: false
};
Nav.contextTypes = {
  $bs_navbar: _propTypes2.default.shape({
    bsClass: _propTypes2.default.string,
    onSelect: _propTypes2.default.func
  }),

  $bs_tabContainer: _propTypes2.default.shape({
    activeKey: _propTypes2.default.any,
    onSelect: _propTypes2.default.func.isRequired,
    getTabId: _propTypes2.default.func.isRequired,
    getPaneId: _propTypes2.default.func.isRequired
  })
};


Nav.Item = _NavItem2.default;

exports.default = (0, _bootstrapUtils.bsClass)("nav", (0, _bootstrapUtils.bsStyles)(["tabs", "pills"], Nav));