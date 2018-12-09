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

var _StyleConfig = require("../utils/StyleConfig");

var _ValidComponentChildren = require("../utils/ValidComponentChildren");

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var FormGroup = function (_PureComponent) {
  _inherits(FormGroup, _PureComponent);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
  }

  _createClass(FormGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _props = this.props,
          controlId = _props.controlId,
          validationState = _props.validationState;


      return {
        $bs_formGroup: {
          controlId: controlId,
          validationState: validationState
        }
      };
    }
  }, {
    key: "hasFeedback",
    value: function hasFeedback(children) {
      var _this2 = this;

      return _ValidComponentChildren2.default.some(children, function (child) {
        return child.props.bsRole === "feedback" || child.props.children && _this2.hasFeedback(child.props.children);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          validationState = _props2.validationState,
          className = _props2.className,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ["validationState", "className", "children"]);

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["controlId"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
        "has-feedback": this.hasFeedback(children)
      });
      if (validationState) {
        classes["has-" + validationState] = true;
      }

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, { className: (0, _classnames2.default)(className, classes) }),
        children
      );
    }
  }]);

  return FormGroup;
}(_react.PureComponent);

FormGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: _propTypes2.default.string,
  validationState: _propTypes2.default.oneOf(["success", "warning", "error", null])
};
FormGroup.childContextTypes = {
  $bs_formGroup: _propTypes2.default.object.isRequired
};
exports.default = (0, _bootstrapUtils.bsClass)("form-group", (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], FormGroup));