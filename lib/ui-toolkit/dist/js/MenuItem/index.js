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

var _all = require("react-prop-types/lib/all");

var _all2 = _interopRequireDefault(_all);

var _SafeAnchor = require("../SafeAnchor");

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_PureComponent) {
  _inherits(MenuItem, _PureComponent);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          href = _this$props.href,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          eventKey = _this$props.eventKey;


      if (!href || disabled) {
        event.preventDefault();
      }

      if (disabled) {
        return;
      }

      if (onSelect) {
        onSelect(eventKey, event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          active = _props.active,
          disabled = _props.disabled,
          divider = _props.divider,
          header = _props.header,
          onClick = _props.onClick,
          className = _props.className,
          style = _props.style,
          props = _objectWithoutProperties(_props, ["active", "disabled", "divider", "header", "onClick", "className", "style"]);

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["eventKey", "onSelect"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      if (divider) {
        // Forcibly blank out the children; separators shouldn't render any.
        elementProps.children = undefined;

        return _react2.default.createElement("li", _extends({}, elementProps, {
          role: "separator",
          className: (0, _classnames2.default)(className, "divider"),
          style: style
        }));
      }

      if (header) {
        return _react2.default.createElement("li", _extends({}, elementProps, {
          role: "heading",
          className: (0, _classnames2.default)(className, (0, _bootstrapUtils.prefix)(bsProps, "header")),
          style: style
        }));
      }

      return _react2.default.createElement(
        "li",
        {
          role: "presentation",
          className: (0, _classnames2.default)(className, { active: active, disabled: disabled }),
          style: style
        },
        _react2.default.createElement(_SafeAnchor2.default, _extends({}, elementProps, {
          role: "menuitem",
          tabIndex: "-1",
          onClick: (0, _createChainedFunction2.default)(onClick, this.handleClick)
        }))
      );
    }
  }]);

  return MenuItem;
}(_react.PureComponent);

MenuItem.propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: _propTypes2.default.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: (0, _all2.default)(_propTypes2.default.bool, function (_ref2) {
    var divider = _ref2.divider,
        children = _ref2.children;
    return divider && children ? new Error("Children will not be rendered for dividers") : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: _propTypes2.default.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: _propTypes2.default.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: _propTypes2.default.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: _propTypes2.default.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: _propTypes2.default.func,
  style: _propTypes2.default.object
};
MenuItem.defaultProps = {
  divider: false,
  disabled: false,
  header: false
};
exports.default = (0, _bootstrapUtils.bsClass)("dropdown", MenuItem);