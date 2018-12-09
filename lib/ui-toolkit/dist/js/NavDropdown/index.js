"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require("../Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _splitComponentProps3 = require("../utils/splitComponentProps");

var _splitComponentProps4 = _interopRequireDefault(_splitComponentProps3);

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavDropdown = function (_PureComponent) {
  _inherits(NavDropdown, _PureComponent);

  function NavDropdown() {
    _classCallCheck(this, NavDropdown);

    return _possibleConstructorReturn(this, (NavDropdown.__proto__ || Object.getPrototypeOf(NavDropdown)).apply(this, arguments));
  }

  _createClass(NavDropdown, [{
    key: "isActive",
    value: function isActive(_ref, activeKey, activeHref) {
      var props = _ref.props;

      var _this2 = this;

      if (props.active || activeKey !== null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
        return true;
      }

      if (_ValidComponentChildren2.default.some(props.children, function (child) {
        return _this2.isActive(child, activeKey, activeHref);
      })) {
        return true;
      }

      return props.active;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          title = _props.title,
          activeKey = _props.activeKey,
          activeHref = _props.activeHref,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["title", "activeKey", "activeHref", "className", "style", "children"]);

      var active = this.isActive(this, activeKey, activeHref);
      delete props.active; // Accessed via this.isActive().
      delete props.eventKey; // Accessed via this.isActive().

      var _splitComponentProps = (0, _splitComponentProps4.default)(props, _Dropdown2.default.ControlledComponent),
          _splitComponentProps2 = _slicedToArray(_splitComponentProps, 2),
          dropdownProps = _splitComponentProps2[0],
          toggleProps = _splitComponentProps2[1];

      // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
      // rather than the `<Dropdown.Toggle>`.

      return _react2.default.createElement(
        _Dropdown2.default,
        _extends({}, dropdownProps, {
          componentClass: "li",
          className: (0, _classnames2.default)(className, { active: active }),
          style: style
        }),
        _react2.default.createElement(
          _Dropdown2.default.Toggle,
          _extends({}, toggleProps, { useAnchor: true }),
          title
        ),
        _react2.default.createElement(
          _Dropdown2.default.Menu,
          null,
          _ValidComponentChildren2.default.map(children, function (child) {
            return _react2.default.cloneElement(child, {
              active: _this3.isActive(child, activeKey, activeHref)
            });
          })
        )
      );
    }
  }]);

  return NavDropdown;
}(_react.PureComponent);

NavDropdown.propTypes = _extends({}, _Dropdown2.default.propTypes, {

  // Toggle props.
  title: _propTypes2.default.node.isRequired,
  noCaret: _propTypes2.default.bool,
  active: _propTypes2.default.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: _propTypes2.default.node
});
exports.default = NavDropdown;