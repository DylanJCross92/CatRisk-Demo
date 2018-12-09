"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require("react-prop-types/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _PaginationButton = require("./PaginationButton");

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _bootstrapUtils = require("../utils/bootstrapUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "renderPageButtons",
    value: function renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps) {
      var pageButtons = [];

      var startPage = void 0;
      var endPage = void 0;

      if (maxButtons && maxButtons < items) {
        startPage = Math.max(Math.min(activePage - Math.floor(maxButtons / 2, 10), items - maxButtons + 1), 1);
        endPage = startPage + maxButtons - 1;
      } else {
        startPage = 1;
        endPage = items;
      }

      for (var page = startPage; page <= endPage; ++page) {
        pageButtons.push(_react2.default.createElement(
          _PaginationButton2.default,
          _extends({}, buttonProps, {
            key: page,
            eventKey: page,
            active: page === activePage
          }),
          page
        ));
      }

      if (ellipsis && boundaryLinks && startPage > 1) {
        if (startPage > 2) {
          pageButtons.unshift(_react2.default.createElement(
            _PaginationButton2.default,
            {
              key: "ellipsisFirst",
              disabled: true,
              componentClass: buttonProps.componentClass
            },
            _react2.default.createElement(
              "span",
              { "aria-label": "More" },
              ellipsis === true ? "\u2026" : ellipsis
            )
          ));
        }

        pageButtons.unshift(_react2.default.createElement(
          _PaginationButton2.default,
          _extends({}, buttonProps, { key: 1, eventKey: 1, active: false }),
          "1"
        ));
      }

      if (ellipsis && endPage < items) {
        if (!boundaryLinks || endPage < items - 1) {
          pageButtons.push(_react2.default.createElement(
            _PaginationButton2.default,
            {
              key: "ellipsis",
              disabled: true,
              componentClass: buttonProps.componentClass
            },
            _react2.default.createElement(
              "span",
              { "aria-label": "More" },
              ellipsis === true ? "\u2026" : ellipsis
            )
          ));
        }

        if (boundaryLinks) {
          pageButtons.push(_react2.default.createElement(
            _PaginationButton2.default,
            _extends({}, buttonProps, {
              key: items,
              eventKey: items,
              active: false
            }),
            items
          ));
        }
      }

      return pageButtons;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          activePage = _props.activePage,
          items = _props.items,
          maxButtons = _props.maxButtons,
          boundaryLinks = _props.boundaryLinks,
          ellipsis = _props.ellipsis,
          first = _props.first,
          last = _props.last,
          prev = _props.prev,
          next = _props.next,
          onSelect = _props.onSelect,
          buttonComponentClass = _props.buttonComponentClass,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["activePage", "items", "maxButtons", "boundaryLinks", "ellipsis", "first", "last", "prev", "next", "onSelect", "buttonComponentClass", "className"]);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

      var buttonProps = {
        onSelect: onSelect,
        componentClass: buttonComponentClass
      };

      return _react2.default.createElement(
        "ul",
        _extends({}, elementProps, { className: (0, _classnames2.default)(className, classes) }),
        first && _react2.default.createElement(
          _PaginationButton2.default,
          _extends({}, buttonProps, {
            eventKey: 1,
            disabled: activePage === 1
          }),
          _react2.default.createElement(
            "span",
            { "aria-label": "First" },
            first === true ? "\xAB" : first
          )
        ),
        prev && _react2.default.createElement(
          _PaginationButton2.default,
          _extends({}, buttonProps, {
            eventKey: activePage - 1,
            disabled: activePage === 1
          }),
          _react2.default.createElement(
            "span",
            { "aria-label": "Previous" },
            prev === true ? "\u2039" : prev
          )
        ),
        this.renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps),
        next && _react2.default.createElement(
          _PaginationButton2.default,
          _extends({}, buttonProps, {
            eventKey: activePage + 1,
            disabled: activePage >= items
          }),
          _react2.default.createElement(
            "span",
            { "aria-label": "Next" },
            next === true ? "\u203A" : next
          )
        ),
        last && _react2.default.createElement(
          _PaginationButton2.default,
          _extends({}, buttonProps, {
            eventKey: items,
            disabled: activePage >= items
          }),
          _react2.default.createElement(
            "span",
            { "aria-label": "Last" },
            last === true ? "\xBB" : last
          )
        )
      );
    }
  }]);

  return Pagination;
}(_react.PureComponent);

Pagination.propTypes = {
  activePage: _propTypes2.default.number,
  className: _propTypes2.default.string,
  items: _propTypes2.default.number,
  maxButtons: _propTypes2.default.number,

  /**
   * When `true`, will display the first and the last button page when
   * displaying ellipsis.
   */
  boundaryLinks: _propTypes2.default.bool,

  /**
   * When `true`, will display the default node value ('&hellip;').
   * Otherwise, will display provided node (when specified).
   */
  ellipsis: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),

  /**
   * When `true`, will display the default node value ('&laquo;').
   * Otherwise, will display provided node (when specified).
   */
  first: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),

  /**
   * When `true`, will display the default node value ('&raquo;').
   * Otherwise, will display provided node (when specified).
   */
  last: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),

  /**
   * When `true`, will display the default node value ('&lsaquo;').
   * Otherwise, will display provided node (when specified).
   */
  prev: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),

  /**
   * When `true`, will display the default node value ('&rsaquo;').
   * Otherwise, will display provided node (when specified).
   */
  next: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),

  onSelect: _propTypes2.default.func,

  /**
   * You can use a custom element for the buttons
   */
  buttonComponentClass: _elementType2.default
};
Pagination.defaultProps = {
  activePage: 1,
  items: 1,
  maxButtons: 0,
  first: false,
  last: false,
  prev: false,
  next: false,
  ellipsis: true,
  boundaryLinks: false
};
exports.default = (0, _bootstrapUtils.bsClass)("pagination", Pagination);