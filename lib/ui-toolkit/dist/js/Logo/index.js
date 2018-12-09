"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _ipcmSagesure = require("../../assets/logos/ipcm-sagesure.svg");

var _ipcmSagesure2 = _interopRequireDefault(_ipcmSagesure);

var _ipcmFednat = require("../../assets/logos/ipcm-fednat.svg");

var _ipcmFednat2 = _interopRequireDefault(_ipcmFednat);

var _apSagesure = require("../../assets/logos/ap-sagesure.svg");

var _apSagesure2 = _interopRequireDefault(_apSagesure);

var _apFednat = require("../../assets/logos/ap-fednat.svg");

var _apFednat2 = _interopRequireDefault(_apFednat);

var _crsInsight = require("../../assets/logos/crs-insight.svg");

var _crsInsight2 = _interopRequireDefault(_crsInsight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_PureComponent) {
  _inherits(Logo, _PureComponent);

  function Logo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Logo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Logo.__proto__ || Object.getPrototypeOf(Logo)).call.apply(_ref, [this].concat(args))), _this), _this.outputLogo = function () {
      var logo = void 0;
      switch (_this.props.logoType) {
        case "IPCMsagesure":
          logo = _ipcmSagesure2.default;
          break;
        case "IPCMfednat":
          logo = _ipcmFednat2.default;
          break;
        case "APsagesure":
          logo = _apSagesure2.default;
          break;
        case "APfednat":
          logo = _apFednat2.default;
          break;
        case "CRSinsight":
          logo = _crsInsight2.default;
          break;
        default:
          logo = _apSagesure2.default;
          break;
      }
      return logo;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)(this.props.className, "logo") },
        _react2.default.createElement("img", { alt: "Logo" + this.props.logoType, src: this.outputLogo() })
      );
    }
  }]);

  return Logo;
}(_react.PureComponent);

Logo.propTypes = {
  className: _propTypes2.default.string,
  logoType: _propTypes2.default.oneOf(["IPCMsagesure", "IPCMfednat", "APsagesure", "APfednat", "CRSinsight"])
};
Logo.defaultProps = {
  logoType: "APsagesure"
};
exports.default = Logo;