"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _uncontrollable = require("uncontrollable");

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var TAB = "tab";
var PANE = "pane";

var idPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

var TabContainer = function (_PureComponent) {
  _inherits(TabContainer, _PureComponent);

  function TabContainer() {
    _classCallCheck(this, TabContainer);

    return _possibleConstructorReturn(this, (TabContainer.__proto__ || Object.getPrototypeOf(TabContainer)).apply(this, arguments));
  }

  _createClass(TabContainer, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _props = this.props,
          activeKey = _props.activeKey,
          onSelect = _props.onSelect,
          generateChildId = _props.generateChildId,
          id = _props.id;


      var getId = generateChildId || function (key, type) {
        return id ? id + "-" + type + "-" + key : null;
      };

      return {
        $bs_tabContainer: {
          activeKey: activeKey,
          onSelect: onSelect,
          getTabId: function getTabId(key) {
            return getId(key, TAB);
          },
          getPaneId: function getPaneId(key) {
            return getId(key, PANE);
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ["children"]);

      delete props.generateChildId;
      delete props.onSelect;
      delete props.activeKey;

      return _react2.default.cloneElement(_react2.default.Children.only(children), props);
    }
  }]);

  return TabContainer;
}(_react.PureComponent);

TabContainer.propTypes = {
  children: _propTypes2.default.node,
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(undefined, [props].concat(args));

      if (!error && !props.id) {
        error = new Error("In order to properly initialize Tabs in a way that is accessible " + "to assistive technologies (such as screen readers) an `id` or a " + "`generateChildId` prop to TabContainer is required");
      }
    }

    return error;
  },


  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: _propTypes2.default.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: _propTypes2.default.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: _propTypes2.default.any
};
TabContainer.childContextTypes = {
  $bs_tabContainer: _propTypes2.default.shape({
    activeKey: _propTypes2.default.any,
    onSelect: _propTypes2.default.func.isRequired,
    getTabId: _propTypes2.default.func.isRequired,
    getPaneId: _propTypes2.default.func.isRequired
  })
};
exports.default = (0, _uncontrollable2.default)(TabContainer, { activeKey: "onSelect" });