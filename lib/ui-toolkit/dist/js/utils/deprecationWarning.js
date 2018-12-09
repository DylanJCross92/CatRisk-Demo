"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports._resetWarned = _resetWarned;

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message = void 0;

  if ((typeof oldname === "undefined" ? "undefined" : _typeof(oldname)) === "object") {
    message = oldname.message;
  } else {
    message = oldname + " is deprecated. Use " + newname + " instead.";

    if (link) {
      message += "\nYou can read more about it at " + link;
    }
  }

  if (warned[message]) {
    return;
  }

  (0, _warning2.default)(false, message);
  warned[message] = true;
}

deprecationWarning.wrapper = function (Component) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (_Component) {
    _inherits(DeprecatedComponent, _Component);

    function DeprecatedComponent() {
      _classCallCheck(this, DeprecatedComponent);

      return _possibleConstructorReturn(this, (DeprecatedComponent.__proto__ || Object.getPrototypeOf(DeprecatedComponent)).apply(this, arguments));
    }

    _createClass(DeprecatedComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        deprecationWarning.apply(undefined, args);

        if (_get(DeprecatedComponent.prototype.__proto__ || Object.getPrototypeOf(DeprecatedComponent.prototype), "componentWillMount", this)) {
          var _get2;

          for (var _len2 = arguments.length, methodArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            methodArgs[_key2] = arguments[_key2];
          }

          (_get2 = _get(DeprecatedComponent.prototype.__proto__ || Object.getPrototypeOf(DeprecatedComponent.prototype), "componentWillMount", this)).call.apply(_get2, [this].concat(methodArgs));
        }
      }
    }]);

    return DeprecatedComponent;
  }(Component);
};

exports.default = deprecationWarning;
function _resetWarned() {
  warned = {};
}