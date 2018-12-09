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

var _reactDom = require("react-dom");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _activeElement = require("dom-helpers/activeElement");

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = require("dom-helpers/query/contains");

var _contains2 = _interopRequireDefault(_contains);

var _keycode = require("keycode");

var _keycode2 = _interopRequireDefault(_keycode);

var _all = require("react-prop-types/lib/all");

var _all2 = _interopRequireDefault(_all);

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _isRequiredForA11y = require("react-prop-types/lib/isRequiredForA11y");

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _uncontrollable = require("uncontrollable");

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _ButtonGroup = require("../ButtonGroup");

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownMenu = require("./DropdownMenu");

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = require("./DropdownToggle");

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _PropTypes = require("../utils/PropTypes");

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOGGLE_ROLE = _DropdownToggle2.default.defaultProps.bsRole;
var MENU_ROLE = _DropdownMenu2.default.defaultProps.bsRole;

var Dropdown = function (_PureComponent) {
  _inherits(Dropdown, _PureComponent);

  function Dropdown(props, context) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);

    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusNextOnOpen();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      if (!nextProps.open && this.props.open) {
        this._focusInDropdown = (0, _contains2.default)((0, _reactDom.findDOMNode)(this.menu), (0, _activeElement2.default)(document));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var open = this.props.open;

      var prevOpen = prevProps.open;

      if (open && !prevOpen) {
        this.focusNextOnOpen();
      }

      if (!open && prevOpen) {
        // if focus hasn't already moved from the menu lets return it
        // to the toggle
        if (this._focusInDropdown) {
          this._focusInDropdown = false;
          this.focus();
        }
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.props.disabled) {
        return;
      }

      this.toggleOpen(event, { source: "click" });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (this.props.disabled) {
        return;
      }

      switch (event.keyCode) {
        case _keycode2.default.codes.down:
          if (!this.props.open) {
            this.toggleOpen(event, { source: "keydown" });
          } else if (this.menu.focusNext) {
            this.menu.focusNext();
          }
          event.preventDefault();
          break;
        case _keycode2.default.codes.esc:
        case _keycode2.default.codes.tab:
          this.handleClose(event, { source: "keydown" });
          break;
        default:
      }
    }
  }, {
    key: "toggleOpen",
    value: function toggleOpen(event, eventDetails) {
      var open = !this.props.open;

      if (open) {
        this.lastOpenEventType = eventDetails.source;
      }

      if (this.props.onToggle) {
        this.props.onToggle(open, event, eventDetails);
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose(event, eventDetails) {
      if (!this.props.open) {
        return;
      }

      this.toggleOpen(event, eventDetails);
    }
  }, {
    key: "focusNextOnOpen",
    value: function focusNextOnOpen() {
      var menu = this.menu;

      if (!menu.focusNext) {
        return;
      }

      if (this.lastOpenEventType === "keydown" || this.props.role === "menuitem") {
        menu.focusNext();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var toggle = (0, _reactDom.findDOMNode)(this.toggle);

      if (toggle && toggle.focus) {
        toggle.focus();
      }
    }
  }, {
    key: "renderToggle",
    value: function renderToggle(child, props) {
      var _this2 = this;

      var ref = function ref(c) {
        _this2.toggle = c;
      };

      if (typeof child.ref === "string") {
        (0, _warning2.default)(false, "String refs are not supported on `<Dropdown.Toggle>` components. " + "To apply a ref to the component use the callback signature:\n\n " + "https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute");
      } else {
        ref = (0, _createChainedFunction2.default)(child.ref, ref);
      }

      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        bsClass: (0, _bootstrapUtils.prefix)(props, "toggle"),
        onClick: (0, _createChainedFunction2.default)(child.props.onClick, this.handleClick),
        onKeyDown: (0, _createChainedFunction2.default)(child.props.onKeyDown, this.handleKeyDown)
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(child, _ref) {
      var _this3 = this;

      var id = _ref.id,
          onClose = _ref.onClose,
          onSelect = _ref.onSelect,
          rootCloseEvent = _ref.rootCloseEvent,
          props = _objectWithoutProperties(_ref, ["id", "onClose", "onSelect", "rootCloseEvent"]);

      var ref = function ref(c) {
        _this3.menu = c;
      };

      if (typeof child.ref === "string") {
        (0, _warning2.default)(false, "String refs are not supported on `<Dropdown.Menu>` components. " + "To apply a ref to the component use the callback signature:\n\n " + "https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute");
      } else {
        ref = (0, _createChainedFunction2.default)(child.ref, ref);
      }

      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        labelledBy: id,
        bsClass: (0, _bootstrapUtils.prefix)(props, "menu"),
        onClose: (0, _createChainedFunction2.default)(child.props.onClose, onClose, this.handleClose),
        onSelect: (0, _createChainedFunction2.default)(child.props.onSelect, onSelect, function (key, event) {
          return _this3.handleClose(event, { source: "select" });
        }),
        rootCloseEvent: rootCloseEvent
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classes,
          _this4 = this;

      var _props = this.props,
          Component = _props.componentClass,
          id = _props.id,
          dropup = _props.dropup,
          disabled = _props.disabled,
          pullRight = _props.pullRight,
          open = _props.open,
          onClose = _props.onClose,
          onSelect = _props.onSelect,
          role = _props.role,
          bsClass = _props.bsClass,
          className = _props.className,
          rootCloseEvent = _props.rootCloseEvent,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["componentClass", "id", "dropup", "disabled", "pullRight", "open", "onClose", "onSelect", "role", "bsClass", "className", "rootCloseEvent", "children"]);

      delete props.onToggle;

      var classes = (_classes = {}, _defineProperty(_classes, bsClass, true), _defineProperty(_classes, "open", open), _defineProperty(_classes, "disabled", disabled), _classes);

      if (dropup) {
        classes[bsClass] = false;
        classes.dropup = true;
      }

      // This intentionally forwards bsSize and bsStyle (if set) to the
      // underlying component, to allow it to render size and style variants.

      return _react2.default.createElement(
        Component,
        _extends({}, props, { className: (0, _classnames2.default)(className, classes) }),
        _ValidComponentChildren2.default.map(children, function (child) {
          switch (child.props.bsRole) {
            case TOGGLE_ROLE:
              return _this4.renderToggle(child, {
                id: id,
                disabled: disabled,
                open: open,
                role: role,
                bsClass: bsClass
              });
            case MENU_ROLE:
              return _this4.renderMenu(child, {
                id: id,
                open: open,
                pullRight: pullRight,
                bsClass: bsClass,
                onClose: onClose,
                onSelect: onSelect,
                rootCloseEvent: rootCloseEvent
              });
            default:
              return child;
          }
        })
      );
    }
  }]);

  return Dropdown;
}(_react.PureComponent);

Dropdown.propTypes = {
  bsClass: _propTypes2.default.string,
  /**
   * Additional wildcard classes that can be appended to base class
   */
  className: _propTypes2.default.string,
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: _propTypes2.default.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),

  componentClass: _elementType2.default,

  /**
   * The children of a Dropdown may be a <code><Dropdown.Toggle></code> or a <code><Dropdown.Menu></code>.
   * @type {node}
   */
  children: (0, _all2.default)((0, _PropTypes.requiredRoles)(TOGGLE_ROLE, MENU_ROLE), (0, _PropTypes.exclusiveRoles)(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: _propTypes2.default.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: _propTypes2.default.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: _propTypes2.default.bool,

  /**
   * A callback fired when the Dropdown closes.
   */
  onClose: _propTypes2.default.func,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(Boolean isOpen, Object event, { String source }) {}
   * ```
   * @controllable open
   */
  onToggle: _propTypes2.default.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: _propTypes2.default.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: _propTypes2.default.string,

  /**
   * Which event when fired outside the component will cause it to be closed
   */
  rootCloseEvent: _propTypes2.default.oneOf(["click", "mousedown"]),

  /**
   * @private
   */
  onMouseEnter: _propTypes2.default.func,
  /**
   * @private
   */
  onMouseLeave: _propTypes2.default.func
};
Dropdown.defaultProps = {
  componentClass: _ButtonGroup2.default
};


(0, _bootstrapUtils.bsClass)("dropdown", Dropdown);

var UncontrolledDropdown = (0, _uncontrollable2.default)(Dropdown, { open: "onToggle" });

UncontrolledDropdown.Toggle = _DropdownToggle2.default;
UncontrolledDropdown.Menu = _DropdownMenu2.default;

exports.default = UncontrolledDropdown;