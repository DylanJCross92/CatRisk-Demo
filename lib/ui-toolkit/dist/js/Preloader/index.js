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

var _Spinner = require("./Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_PureComponent) {
  _inherits(Preloader, _PureComponent);

  function Preloader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Preloader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Preloader.__proto__ || Object.getPrototypeOf(Preloader)).call.apply(_ref, [this].concat(args))), _this), _this.isValidHex = function (str) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(str)
      );
    }, _this.isValidSize = function (str) {
      if (typeof str === "string") {
        return str.indexOf("px") !== -1 ? str.replace("px", "").trim() : str.trim();
      } else if (typeof str === "number") {
        return str.toString();
      }
      return "48";
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Preloader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          size = _props.size,
          props = _objectWithoutProperties(_props, ["className", "color", "size"]);
      /* eslint-disable no-unused-vars */


      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];
      /* eslint-enable no-unused-vars */


      var classes = _defineProperty({
        preloader: true
      }, className, !!className);

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, { className: (0, _classnames2.default)(classes) }),
        _react2.default.createElement(_Spinner2.default, {
          color: this.isValidHex(color) ? color : "#000000",
          size: this.isValidSize(size)
        })
      );
    }
  }]);

  return Preloader;
}(_react.PureComponent);

Preloader.propTypes = {
  /**
   * Additional wildcard classes that can be appended to base class
   */
  className: _propTypes2.default.string,
  /**
   * Hex value for color of spinner
   */
  color: _propTypes2.default.string,
  /**
   * Size of preloader in pixels
   */
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
Preloader.defaultProps = {
  color: "#000000",
  size: "32"
};
exports.default = Preloader;