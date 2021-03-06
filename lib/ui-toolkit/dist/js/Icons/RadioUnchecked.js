"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioUnchecked;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("../SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RadioUnchecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
}