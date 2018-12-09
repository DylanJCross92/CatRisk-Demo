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

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelGroup = function (_PureComponent) {
  _inherits(PanelGroup, _PureComponent);

  function PanelGroup(props, context) {
    _classCallCheck(this, PanelGroup);

    var _this = _possibleConstructorReturn(this, (PanelGroup.__proto__ || Object.getPrototypeOf(PanelGroup)).call(this, props, context));

    _this.handleSelect = function (key, e) {
      e.preventDefault();
      if (_this.props.onSelect) {
        _this.props.onSelect(key, e);
      }
      if (_this.state.activeKey === key) {
        key = null;
      }
      _this.setState({ activeKey: key });
    };

    _this.state = {
      activeKey: props.defaultActiveKey
    };
    return _this;
  }

  _createClass(PanelGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          accordion = _props.accordion,
          propsActiveKey = _props.activeKey,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["accordion", "activeKey", "className", "children"]);

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["defaultActiveKey", "onSelect"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      var activeKey = void 0;
      if (accordion) {
        activeKey = propsActiveKey !== null ? propsActiveKey : this.state.activeKey;
        elementProps.role = elementProps.role || "tablist";
      }

      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, { className: (0, _classnames2.default)(className, classes) }),
        _ValidComponentChildren2.default.map(children, function (child) {
          var childProps = {
            bsStyle: child.props.bsStyle || bsProps.bsStyle
          };

          if (accordion) {
            Object.assign(childProps, {
              headerRole: "tab",
              panelRole: "tabpanel",
              collapsible: true,
              expanded: child.props.eventKey === activeKey,
              onSelect: (0, _createChainedFunction2.default)(_this2.handleSelect, child.props.onSelect)
            });
          }
          return (0, _react.cloneElement)(child, childProps);
        })
      );
    }
  }]);

  return PanelGroup;
}(_react.PureComponent);

PanelGroup.propTypes = {
  accordion: _propTypes2.default.bool,
  activeKey: _propTypes2.default.any,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  defaultActiveKey: _propTypes2.default.any,
  onSelect: _propTypes2.default.func,
  role: _propTypes2.default.string
};
PanelGroup.defaultProps = {
  accordion: false
};
exports.default = (0, _bootstrapUtils.bsClass)("panel-group", PanelGroup);