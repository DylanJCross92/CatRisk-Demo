"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CaretRight;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("../SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CaretRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }),
    _react2.default.createElement("path", { d: "M0-.25h24v24H0z", fill: "none" })
  );
}