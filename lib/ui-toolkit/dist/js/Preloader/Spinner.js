"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        {
          width: this.props.size + "px",
          height: this.props.size + "px",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: "insight-spinner"
        },
        _react2.default.createElement("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none", className: "bk" }),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line first-line",
            transform: "rotate(0 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(30 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.08333333333333333s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(60 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.16666666666666666s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(90 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.25s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(120 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.3333333333333333s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(150 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.4166666666666667s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(180 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.5s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(210 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.5833333333333334s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(240 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.6666666666666666s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(270 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.75s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(300 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.8333333333333334s",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          {
            x: "46.5",
            y: "40",
            width: "7",
            height: "20",
            rx: "5",
            ry: "5",
            fill: this.props.color,
            className: "spinner-line",
            transform: "rotate(330 50 50) translate(0 -30)"
          },
          _react2.default.createElement("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.9166666666666666s",
            repeatCount: "indefinite"
          })
        )
      );
    }
  }]);

  return Spinner;
}(_react.PureComponent);

Spinner.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.string
};
Spinner.defaultProps = {
  color: "#000000",
  size: "32"
};
exports.default = Spinner;