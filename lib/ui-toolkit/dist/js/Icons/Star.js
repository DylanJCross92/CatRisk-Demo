"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Star;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("../SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Star(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement("polygon", { points: "12 16.529 17.914 20.833 15.651 13.883 21.565 9.674 14.312 9.674 12 2.5 9.688 9.674 2.435 9.674 8.349 13.883 6.086 20.833" })
  );
}