"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Add;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("../SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Add(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
  );
}