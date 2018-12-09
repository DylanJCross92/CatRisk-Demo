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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _SafeAnchor = require("../SafeAnchor");

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _createChainedFunction = require("../utils/createChainedFunction");

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagerItem = function (_PureComponent) {
  _inherits(PagerItem, _PureComponent);

  function PagerItem(props, context) {
    _classCallCheck(this, PagerItem);

    var _this = _possibleConstructorReturn(this, (PagerItem.__proto__ || Object.getPrototypeOf(PagerItem)).call(this, props, context));

    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  _createClass(PagerItem, [{
    key: "handleSelect",
    value: function handleSelect(e) {
      var _props = this.props,
          disabled = _props.disabled,
          onSelect = _props.onSelect,
          eventKey = _props.eventKey;


      if (onSelect || disabled) {
        e.preventDefault();
      }

      if (disabled) {
        return;
      }

      if (onSelect) {
        onSelect(eventKey, e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          previous = _props2.previous,
          next = _props2.next,
          onClick = _props2.onClick,
          className = _props2.className,
          style = _props2.style,
          props = _objectWithoutProperties(_props2, ["disabled", "previous", "next", "onClick", "className", "style"]);

      delete props.onSelect;
      delete props.eventKey;

      return _react2.default.createElement(
        "li",
        {
          className: (0, _classnames2.default)(className, { disabled: disabled, previous: previous, next: next }),
          style: style
        },
        _react2.default.createElement(_SafeAnchor2.default, _extends({}, props, {
          disabled: disabled,
          onClick: (0, _createChainedFunction2.default)(onClick, this.handleSelect)
        }))
      );
    }
  }]);

  return PagerItem;
}(_react.PureComponent);

PagerItem.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  eventKey: _propTypes2.default.any,
  next: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  previous: _propTypes2.default.bool,
  style: _propTypes2.default.object
};
PagerItem.defaultProps = {
  disabled: false,
  previous: false,
  next: false
};
exports.default = PagerItem;