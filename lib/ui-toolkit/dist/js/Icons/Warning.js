"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Warning;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("../SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Warning(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    _react2.default.createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" })
  );
}