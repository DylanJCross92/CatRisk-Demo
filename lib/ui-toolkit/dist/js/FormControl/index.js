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

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _FormControlFeedback = require("./FormControlFeedback");

var _FormControlFeedback2 = _interopRequireDefault(_FormControlFeedback);

var _FormControlStatic = require("./FormControlStatic");

var _FormControlStatic2 = _interopRequireDefault(_FormControlStatic);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _StyleConfig = require("../utils/StyleConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var FormControl = function (_PureComponent) {
  _inherits(FormControl, _PureComponent);

  function FormControl() {
    _classCallCheck(this, FormControl);

    return _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).apply(this, arguments));
  }

  _createClass(FormControl, [{
    key: "render",
    value: function render() {
      var formGroup = this.context.$bs_formGroup;
      var controlId = formGroup && formGroup.controlId;

      var _props = this.props,
          Component = _props.componentClass,
          type = _props.type,
          _props$id = _props.id,
          id = _props$id === undefined ? controlId : _props$id,
          inputRef = _props.inputRef,
          className = _props.className,
          bsSize = _props.bsSize,
          props = _objectWithoutProperties(_props, ["componentClass", "type", "id", "inputRef", "className", "bsSize"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      (0, _warning2.default)(controlId === null || id === controlId, "'controlId' is ignored on '<FormControl>' when 'id' is specified.");

      // input[type="file"] should not have .form-control.
      var classes = void 0;
      if (type !== "file") {
        classes = (0, _bootstrapUtils.getClassSet)(bsProps);
      }

      // If user provides a size, make sure to append it to classes as input-
      // e.g. if bsSize is small, it will append input-sm
      if (bsSize) {
        var size = _StyleConfig.SIZE_MAP[bsSize] || bsSize;
        classes[(0, _bootstrapUtils.prefix)({ bsClass: "input" }, size)] = true;
      }

      return _react2.default.createElement(Component, _extends({}, elementProps, {
        type: type,
        id: id,
        ref: inputRef,
        className: (0, _classnames2.default)(className, classes)
      }));
    }
  }]);

  return FormControl;
}(_react.PureComponent);

FormControl.propTypes = {
  bsSize: _propTypes2.default.string,
  className: _propTypes2.default.string,
  componentClass: _elementType2.default,
  id: _propTypes2.default.string,
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _propTypes2.default.func,
  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: _propTypes2.default.string
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
};
FormControl.defaultProps = {
  componentClass: "input"
};
FormControl.contextTypes = {
  $bs_formGroup: _propTypes2.default.object
};


FormControl.Feedback = _FormControlFeedback2.default;
FormControl.Static = _FormControlStatic2.default;

exports.default = (0, _bootstrapUtils.bsClass)("form-control", (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.SMALL, _StyleConfig.Size.LARGE], FormControl));