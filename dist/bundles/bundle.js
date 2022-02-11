'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Toast$1 = Toast = function Toast(props) {
  return /*#__PURE__*/React__default['default'].createElement("input", null, props.children);
};

var _Toast = /*#__PURE__*/function () {
  function _Toast() {
    _classCallCheck(this, _Toast);
  }

  _createClass(_Toast, [{
    key: "create",
    value: function create() {
      return /*#__PURE__*/React__default['default'].createElement(Toast$1, null);
    }
  }]);

  return _Toast;
}();

var toast = new _Toast();

exports.toast = toast;
