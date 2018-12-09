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

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require("../Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _SplitToggle = require("../SplitToggle");

var _SplitToggle2 = _interopRequireDefault(_SplitToggle);

var _splitComponentProps3 = require("../utils/splitComponentProps");

var _splitComponentProps4 = _interopRequireDefault(_splitComponentProps3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SplitButton = function (_PureComponent) {
  _inherits(SplitButton, _PureComponent);

  function SplitButton() {
    _classCallCheck(this, SplitButton);

    return _possibleConstructorReturn(this, (SplitButton.__proto__ || Object.getPrototypeOf(SplitButton)).apply(this, arguments));
  }

  _createClass(SplitButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          bsSize = _props.bsSize,
          bsStyle = _props.bsStyle,
          title = _props.title,
          toggleLabel = _props.toggleLabel,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["bsSize", "bsStyle", "title", "toggleLabel", "children"]);

      var _splitComponentProps = (0, _splitComponentProps4.default)(props, _Dropdown2.default.ControlledComponent),
          _splitComponentProps2 = _slicedToArray(_splitComponentProps, 2),
          dropdownProps = _splitComponentProps2[0],
          buttonProps = _splitComponentProps2[1];

      return _react2.default.createElement(
        _Dropdown2.default,
        _extends({}, dropdownProps, { bsSize: bsSize, bsStyle: bsStyle }),
        _react2.default.createElement(
          _Button2.default,
          _extends({}, buttonProps, {
            disabled: props.disabled,
            bsSize: bsSize,
            bsStyle: bsStyle
          }),
          title
        ),
        _react2.default.createElement(_SplitToggle2.default, {
          "aria-label": toggleLabel || title,
          bsSize: bsSize,
          bsStyle: bsStyle,
          bsRole: "toggle"
        }),
        _react2.default.createElement(
          _Dropdown2.default.Menu,
          null,
          children
        )
      );
    }
  }]);

  return SplitButton;
}(_react.PureComponent);

SplitButton.propTypes = _extends({}, _Dropdown2.default.propTypes, {

  // Toggle props.
  bsStyle: _propTypes2.default.string,
  bsSize: _propTypes2.default.string,
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  /**
   * The content of the split button.
   */
  title: _propTypes2.default.node.isRequired,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: _propTypes2.default.string,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: _propTypes2.default.node
});


SplitButton.Toggle = _SplitToggle2.default;

exports.default = SplitButton;