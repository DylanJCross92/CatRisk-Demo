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

var _reactDom = require("react-dom");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require("keycode");

var _keycode2 = _interopRequireDefault(_keycode);

var _RootCloseWrapper = require("react-overlays/lib/RootCloseWrapper");

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = function (_PureComponent) {
  _inherits(DropdownMenu, _PureComponent);

  function DropdownMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.handleRootClose = function (event) {
      _this.props.onClose(event, { source: "rootClose" });
    }, _this.handleKeyDown = function (event) {
      switch (event.keyCode) {
        case _keycode2.default.codes.down:
          _this.focusNext();
          event.preventDefault();
          break;
        case _keycode2.default.codes.up:
          _this.focusPrevious();
          event.preventDefault();
          break;
        case _keycode2.default.codes.esc:
        case _keycode2.default.codes.tab:
          _this.props.onClose(event, { source: "keydown" });
          break;
        default:
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownMenu, [{
    key: "getItemsAndActiveIndex",
    value: function getItemsAndActiveIndex() {
      var items = this.getFocusableMenuItems();
      var activeIndex = items.indexOf(document.activeElement);
      return { items: items, activeIndex: activeIndex };
    }
  }, {
    key: "getFocusableMenuItems",
    value: function getFocusableMenuItems() {
      var node = (0, _reactDom.findDOMNode)(this);
      if (!node) {
        return [];
      }
      return Array.from(node.querySelectorAll('[tabIndex="-1"]'));
    }
  }, {
    key: "focusNext",
    value: function focusNext() {
      var _getItemsAndActiveInd = this.getItemsAndActiveIndex(),
          items = _getItemsAndActiveInd.items,
          activeIndex = _getItemsAndActiveInd.activeIndex;

      if (items.length === 0) {
        return;
      }
      var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      items[nextIndex].focus();
    }
  }, {
    key: "focusPrevious",
    value: function focusPrevious() {
      var _getItemsAndActiveInd2 = this.getItemsAndActiveIndex(),
          items = _getItemsAndActiveInd2.items,
          activeIndex = _getItemsAndActiveInd2.activeIndex;

      if (items.length === 0) {
        return;
      }
      var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      items[prevIndex].focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          pullRight = _props.pullRight,
          labelledBy = _props.labelledBy,
          onSelect = _props.onSelect,
          className = _props.className,
          rootCloseEvent = _props.rootCloseEvent,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["open", "pullRight", "labelledBy", "onSelect", "className", "rootCloseEvent", "children"]);

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["onClose"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), _defineProperty({}, (0, _bootstrapUtils.prefix)(bsProps, "right"), pullRight));

      return _react2.default.createElement(
        _RootCloseWrapper2.default,
        {
          disabled: !open,
          onRootClose: this.handleRootClose,
          event: rootCloseEvent
        },
        _react2.default.createElement(
          "ul",
          _extends({}, elementProps, {
            role: "menu",
            className: (0, _classnames2.default)(className, classes),
            "aria-labelledby": labelledBy
          }),
          _ValidComponentChildren2.default.map(children, function (child) {
            return _react2.default.cloneElement(child, {
              onKeyDown: (0, _createChainedFunction2.default)(child.props.onKeyDown, _this2.handleKeyDown),
              onSelect: (0, _createChainedFunction2.default)(child.props.onSelect, onSelect)
            });
          })
        )
      );
    }
  }]);

  return DropdownMenu;
}(_react.PureComponent);

DropdownMenu.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  labelledBy: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onClose: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  pullRight: _propTypes2.default.bool,
  rootCloseEvent: _propTypes2.default.oneOf(["click", "mousedown"])
};
DropdownMenu.defaultProps = {
  bsRole: "menu",
  pullRight: false
};
exports.default = (0, _bootstrapUtils.bsClass)("dropdown-menu", DropdownMenu);