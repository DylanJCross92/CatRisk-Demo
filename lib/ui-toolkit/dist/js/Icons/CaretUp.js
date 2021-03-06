"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CaretUp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("../SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CaretUp(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement("path", { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
}