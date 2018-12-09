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

var _Collapse = require("../Collapse");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _bootstrapUtils = require("../utils/bootstrapUtils");

var _StyleConfig = require("../utils/StyleConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_PureComponent) {
  _inherits(Panel, _PureComponent);

  function Panel(props, context) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props, context));

    _this.handleClickTitle = function (e) {
      e.persist();
      e.selected = true;

      if (_this.props.onSelect) {
        _this.props.onSelect(_this.props.eventKey, e);
      } else {
        e.preventDefault();
      }

      if (e.selected) {
        _this.setState({ expanded: !_this.state.expanded });
      }
    };

    _this.state = {
      expanded: _this.props.defaultExpanded
    };
    return _this;
  }

  _createClass(Panel, [{
    key: "renderHeader",
    value: function renderHeader(collapsible, header, id, role, expanded, bsProps) {
      var titleClassName = (0, _bootstrapUtils.prefix)(bsProps, "title");

      if (!collapsible) {
        if (!_react2.default.isValidElement(header)) {
          return header;
        }

        return (0, _react.cloneElement)(header, {
          className: (0, _classnames2.default)(header.props.className, titleClassName)
        });
      }

      if (!_react2.default.isValidElement(header)) {
        return _react2.default.createElement(
          "h4",
          { role: "presentation", className: titleClassName },
          this.renderAnchor(header, id, role, expanded)
        );
      }

      return (0, _react.cloneElement)(header, {
        className: (0, _classnames2.default)(header.props.className, titleClassName),
        children: this.renderAnchor(header.props.children, id, role, expanded)
      });
    }
  }, {
    key: "renderAnchor",
    value: function renderAnchor(header, id, role, expanded) {
      return _react2.default.createElement(
        "a",
        {
          role: role,
          href: id && "#" + id,
          onClick: this.handleClickTitle,
          "aria-controls": id,
          "aria-expanded": expanded,
          "aria-selected": expanded,
          className: expanded ? null : "collapsed"
        },
        header
      );
    }
  }, {
    key: "renderCollapsibleBody",
    value: function renderCollapsibleBody(id, expanded, role, children, bsProps, animationHooks) {
      return _react2.default.createElement(
        _Collapse2.default,
        _extends({ "in": expanded }, animationHooks),
        _react2.default.createElement(
          "div",
          {
            id: id,
            role: role,
            className: (0, _bootstrapUtils.prefix)(bsProps, "collapse"),
            "aria-hidden": !expanded
          },
          this.renderBody(children, bsProps)
        )
      );
    }
  }, {
    key: "renderBody",
    value: function renderBody(rawChildren, bsProps) {
      var children = [];
      var bodyChildren = [];

      var bodyClassName = (0, _bootstrapUtils.prefix)(bsProps, "body");

      function maybeAddBody() {
        if (!bodyChildren.length) {
          return;
        }

        // Derive the key from the index here, since we need to make one up.
        children.push(_react2.default.createElement(
          "div",
          { key: children.length, className: bodyClassName },
          bodyChildren
        ));

        bodyChildren = [];
      }

      // Convert to array so we can re-use keys.
      _react2.default.Children.toArray(rawChildren).forEach(function (child) {
        if (_react2.default.isValidElement(child) && child.props.fill) {
          maybeAddBody();

          // Remove the child's unknown `fill` prop.
          children.push((0, _react.cloneElement)(child, { fill: undefined }));

          return;
        }

        bodyChildren.push(child);
      });

      maybeAddBody();

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          collapsible = _props.collapsible,
          header = _props.header,
          id = _props.id,
          footer = _props.footer,
          propsExpanded = _props.expanded,
          headerRole = _props.headerRole,
          panelRole = _props.panelRole,
          className = _props.className,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          props = _objectWithoutProperties(_props, ["collapsible", "header", "id", "footer", "expanded", "headerRole", "panelRole", "className", "children", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);

      var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ["defaultExpanded", "eventKey", "onSelect"]),
          _splitBsPropsAndOmit2 = _slicedToArray(_splitBsPropsAndOmit, 2),
          bsProps = _splitBsPropsAndOmit2[0],
          elementProps = _splitBsPropsAndOmit2[1];

      var expanded = propsExpanded !== null ? propsExpanded : this.state.expanded;

      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

      return _react2.default.createElement(
        "div",
        _extends({}, elementProps, {
          className: (0, _classnames2.default)(className, classes),
          id: collapsible ? null : id
        }),
        header && _react2.default.createElement(
          "div",
          { className: (0, _bootstrapUtils.prefix)(bsProps, "heading") },
          this.renderHeader(collapsible, header, id, headerRole, expanded, bsProps)
        ),
        collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, bsProps, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, bsProps),
        footer && _react2.default.createElement(
          "div",
          { className: (0, _bootstrapUtils.prefix)(bsProps, "footer") },
          footer
        )
      );
    }
  }]);

  return Panel;
}(_react.PureComponent);

Panel.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  collapsible: _propTypes2.default.bool,
  defaultExpanded: _propTypes2.default.bool,
  expanded: _propTypes2.default.bool,
  eventKey: _propTypes2.default.any,
  footer: _propTypes2.default.node,
  header: _propTypes2.default.node,
  headerRole: _propTypes2.default.string,
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onEnter: _propTypes2.default.func,
  onEntering: _propTypes2.default.func,
  onEntered: _propTypes2.default.func,
  onExit: _propTypes2.default.func,
  onExiting: _propTypes2.default.func,
  onExited: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  panelRole: _propTypes2.default.string
};
Panel.defaultProps = {
  defaultExpanded: false
};
exports.default = (0, _bootstrapUtils.bsClass)("panel", (0, _bootstrapUtils.bsStyles)([].concat(_toConsumableArray(Object.values(_StyleConfig.State)), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY]), _StyleConfig.Style.DEFAULT, Panel));