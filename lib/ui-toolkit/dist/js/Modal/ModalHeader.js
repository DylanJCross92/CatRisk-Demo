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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var ModalHeader = function (_PureComponent) {
  _inherits(ModalHeader, _PureComponent);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, (ModalHeader.__proto__ || Object.getPrototypeOf(ModalHeader)).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props["aria-label"],
          closeButton = _props.closeButton,
          onHide = _props.onHide,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["aria-label", "closeButton", "onHide", "children", "className"]);

      var modal = this.context.$bs_modal;

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, { className: (0, _classnames2.default)(className, classes) }),
        closeButton && _react2.default.createElement(
          "button",
          {
            type: "button",
            className: "close",
            "aria-label": label,
            onClick: (0, _createChainedFunction2.default)(modal && modal.onHide, onHide)
          },
          _react2.default.createElement(
            "span",
            { "aria-hidden": "true" },
            "\xD7"
          )
        ),
        children
      );
    }
  }]);

  return ModalHeader;
}(_react.PureComponent);

ModalHeader.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * The 'aria-label' attribute provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  "aria-label": _propTypes2.default.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: _propTypes2.default.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: _propTypes2.default.func
};
ModalHeader.defaultProps = {
  "aria-label": "Close",
  closeButton: false
};
ModalHeader.contextTypes = {
  $bs_modal: _propTypes2.default.shape({
    onHide: _propTypes2.default.func
  })
};
exports.default = (0, _bootstrapUtils.bsClass)("modal-header", ModalHeader);