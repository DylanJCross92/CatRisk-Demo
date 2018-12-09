"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TabContainer = require("./TabContainer");

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _TabContent = require("./TabContent");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = require("./TabPane");

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_PureComponent) {
  _inherits(Tab, _PureComponent);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var props = _extends({}, this.props);

      // These props are for the parent `<Tabs>` rather than the `<TabPane>`.
      delete props.title;
      delete props.disabled;
      delete props.tabClassName;

      return _react2.default.createElement(_TabPane2.default, props);
    }
  }]);

  return Tab;
}(_react.PureComponent);

Tab.propTypes = _extends({}, _TabPane2.default.propTypes, {

  disabled: _propTypes2.default.bool,

  title: _propTypes2.default.node,

  /**
   * tabClassName is used as className for the associated NavItem
   */
  tabClassName: _propTypes2.default.string
});


Tab.Container = _TabContainer2.default;
Tab.Content = _TabContent2.default;
Tab.Pane = _TabPane2.default;

exports.default = Tab;