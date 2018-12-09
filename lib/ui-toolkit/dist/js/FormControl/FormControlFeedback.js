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

var _ = require("../");

var _bootstrapUtils = require("../utils/bootstrapUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var FormControlFeedback = function (_PureComponent) {
  _inherits(FormControlFeedback, _PureComponent);

  function FormControlFeedback() {
    _classCallCheck(this, FormControlFeedback);

    return _possibleConstructorReturn(this, (FormControlFeedback.__proto__ || Object.getPrototypeOf(FormControlFeedback)).apply(this, arguments));
  }

  _createClass(FormControlFeedback, [{
    key: "getGlyph",
    value: function getGlyph(validationState) {
      switch (validationState) {
        case "success":
          return "ok";
        case "warning":
          return "warning-sign";
        case "error":
          return "remove";
        default:
          return null;
      }
    }
  }, {
    key: "renderDefaultFeedback",
    value: function renderDefaultFeedback(formGroup) {
      if (!formGroup) {
        return null;
      }

      switch (formGroup.validationState) {
        case "success":
          return _react2.default.createElement(_.IconCheckCircle, null);
        case "warning":
          return _react2.default.createElement(_.IconWarning, null);
        case "error":
          return _react2.default.createElement(_.IconError, null);
        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["className", "children"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

      return _react2.default.createElement(
        "span",
        _extends({}, elementProps, { className: (0, _classnames2.default)(className, classes) }),
        children ? _react2.default.Children.only(children) : this.renderDefaultFeedback(this.context.$bs_formGroup)
      );
    }
  }]);

  return FormControlFeedback;
}(_react.PureComponent);

FormControlFeedback.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
FormControlFeedback.defaultProps = {
  bsRole: "feedback"
};
FormControlFeedback.contextTypes = {
  $bs_formGroup: _propTypes2.default.object
};
exports.default = (0, _bootstrapUtils.bsClass)("form-control-feedback", FormControlFeedback);