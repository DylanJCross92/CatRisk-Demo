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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var ControlLabel = function (_PureComponent) {
  _inherits(ControlLabel, _PureComponent);

  function ControlLabel() {
    _classCallCheck(this, ControlLabel);

    return _possibleConstructorReturn(this, (ControlLabel.__proto__ || Object.getPrototypeOf(ControlLabel)).apply(this, arguments));
  }

  _createClass(ControlLabel, [{
    key: "render",
    value: function render() {
      var formGroup = this.context.$bs_formGroup;
      var controlId = formGroup && formGroup.controlId;

      var _props = this.props,
          _props$htmlFor = _props.htmlFor,
          htmlFor = _props$htmlFor === undefined ? controlId : _props$htmlFor,
          srOnly = _props.srOnly,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["htmlFor", "srOnly", "className"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
        "sr-only": srOnly
      });

      return _react2.default.createElement("label", _extends({}, elementProps, {
        htmlFor: htmlFor,
        className: (0, _classnames2.default)(className, classes)
      }));
    }
  }]);

  return ControlLabel;
}(_react.PureComponent);

ControlLabel.propTypes = {
  /**
   * Hook for adding custom classes.
   */
  className: _propTypes2.default.string,
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: _propTypes2.default.string,
  /**
   * For screenreaders only.
   */
  srOnly: _propTypes2.default.bool
};
ControlLabel.defaultProps = {
  srOnly: false
};
ControlLabel.contextTypes = {
  $bs_formGroup: _propTypes2.default.object
};
exports.default = (0, _bootstrapUtils.bsClass)("control-label", ControlLabel);