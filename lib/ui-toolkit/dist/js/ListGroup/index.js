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

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _ListGroupItem = require("./ListGroupItem");

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDefaultComponent(children) {
  if (!children) {
    return "div";
  }

  if (_ValidComponentChildren2.default.some(children, function (child) {
    return child.type !== _ListGroupItem2.default || child.props.href || child.props.onClick;
  })) {
    return "div";
  }

  return "ul";
}

var ListGroup = function (_PureComponent) {
  _inherits(ListGroup, _PureComponent);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(this, (ListGroup.__proto__ || Object.getPrototypeOf(ListGroup)).apply(this, arguments));
  }

  _createClass(ListGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$componentClass = _props.componentClass,
          Component = _props$componentClass === undefined ? getDefaultComponent(children) : _props$componentClass,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["children", "componentClass", "className"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

      var useListItem = Component === "ul" && _ValidComponentChildren2.default.every(children, function (child) {
        return child.type === _ListGroupItem2.default;
      });

      return _react2.default.createElement(
        Component,
        _extends({}, elementProps, { className: (0, _classnames2.default)(className, classes) }),
        useListItem ? _ValidComponentChildren2.default.map(children, function (child) {
          return (0, _react.cloneElement)(child, { listItem: true });
        }) : children
      );
    }
  }]);

  return ListGroup;
}(_react.PureComponent);

ListGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: _elementType2.default
};


ListGroup.Item = _ListGroupItem2.default;

exports.default = (0, _bootstrapUtils.bsClass)("list-group", ListGroup);