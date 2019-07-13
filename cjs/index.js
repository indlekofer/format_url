"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _format_query = _interopRequireDefault(require("@indlekofer/format_query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(url, query, hash) {
  if (typeof query == 'undefined' || query === null || query === false) query = '';
  if (typeof query != 'string') query = (0, _format_query["default"])(query);else query = query.trim();
  if (typeof hash == 'undefined' || hash === null || hash === false) hash = '';else hash = '#' + encodeURIComponent(hash);
  if (query.length == 0) return url + hash;

  if (url.indexOf('?') != -1) {
    return [url, query].join('&') + hash;
  } else {
    return [url, query].join('?') + hash;
  }
};

exports["default"] = _default;