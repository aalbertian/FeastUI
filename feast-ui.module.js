
  /**
   * @license
   * author: tony@tecton.ai
   * feast-ui.js v0.20.4
   * Released under the Apache-2.0 license.
   */

import { __assign as __assign$2, __extends, __spreadArray } from 'tslib';
import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { useNavigate, useLocation, useParams, useMatch, useResolvedPath, Outlet, useHref, Route, resolvePath, Routes, BrowserRouter } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { StringParam, useQueryParam, QueryParamProvider } from 'use-query-params';
import { EuiSpacer, EuiHorizontalRule, EuiTitle, EuiFlexGroup, EuiFlexItem, EuiStat, EuiPanel, EuiLoadingContent, EuiBadge, EuiPageContent, EuiPageContentBody, EuiEmptyPrompt, EuiText, useGeneratedHtmlId, EuiSelect, htmlIdGenerator, EuiIcon, EuiSideNav, EuiPage, EuiPageSideBar, EuiPageBody, EuiErrorBoundary, EuiLink, EuiBasicTable, EuiButton, EuiPageHeader, EuiLoadingSpinner, EuiDescriptionList, EuiDescriptionListTitle, EuiDescriptionListDescription, EuiSelectable, EuiInputPopover, EuiFieldSearch, useEuiTheme, EuiCodeBlock, EuiTextAlign, EuiCard, EuiFlexGrid, EuiProvider } from '@elastic/eui';
import { z } from 'zod';
import { useKeycloak } from '@react-keycloak/ssr';
import { stringify } from 'query-string';
import { scaleLinear } from 'd3';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f = React,
    g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var reactJsxRuntime_development = {};

(function (exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      var React$1 = React;
      var _assign = objectAssign; // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var REACT_ELEMENT_TYPE = 0xeac7;
      var REACT_PORTAL_TYPE = 0xeaca;
      exports.Fragment = 0xeacb;
      var REACT_STRICT_MODE_TYPE = 0xeacc;
      var REACT_PROFILER_TYPE = 0xead2;
      var REACT_PROVIDER_TYPE = 0xeacd;
      var REACT_CONTEXT_TYPE = 0xeace;
      var REACT_FORWARD_REF_TYPE = 0xead0;
      var REACT_SUSPENSE_TYPE = 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = 0xead8;
      var REACT_MEMO_TYPE = 0xead3;
      var REACT_LAZY_TYPE = 0xead4;
      var REACT_BLOCK_TYPE = 0xead9;
      var REACT_SERVER_BLOCK_TYPE = 0xeada;
      var REACT_FUNDAMENTAL_TYPE = 0xead5;
      var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
      var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

      if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        symbolFor('react.scope');
        symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
      }

      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
          return null;
        }

        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }

      var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();

          if (stack !== '') {
            format += '%s';
            args = args.concat([stack]);
          }

          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


      var enableScopeAPI = false; // Experimental Create Event Handle API.

      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


        if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }

        if (_typeof(type) === 'object' && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }

        return false;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
      }

      function getContextName(type) {
        return type.displayName || 'Context';
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case exports.Fragment:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case REACT_PROFILER_TYPE:
            return 'Profiler';

          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';

          case REACT_SUSPENSE_TYPE:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (_typeof(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + '.Consumer';

            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + '.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);

            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
          }
        }

        return null;
      } // Helpers to patch console.logs to avoid logging during side-effect free
      // replaying on render function. This currently only patches the object
      // lazily which won't cover if the log function was extracted eagerly.
      // We could also eagerly patch the method.


      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;

      function disabledLog() {}

      disabledLog.__reactDisabledLog = true;

      function disableLogs() {
        {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          disabledDepth++;
        }
      }

      function reenableLogs() {
        {
          disabledDepth--;

          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          if (disabledDepth < 0) {
            error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
          }
        }
      }

      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;

      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || '';
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.


          return '\n' + prefix + name;
        }
      }

      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }

      function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) {
          return '';
        }

        {
          var frame = componentFrameCache.get(fn);

          if (frame !== undefined) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher.current = null;
          disableLogs();
        }

        try {
          // This should throw.
          if (construct) {
            // Something should be setting the props in the constructor.
            var Fake = function Fake() {
              throw Error();
            }; // $FlowFixMe


            Object.defineProperty(Fake.prototype, 'props', {
              set: function set() {
                // We use a throwing setter instead of frozen or non-writable props
                // because that won't throw in a non-strict mode function.
                throw Error();
              }
            });

            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
              // We construct a different control for this case to include any extra
              // frames added by the construct call.
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }

              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }

              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }

            fn();
          }
        } catch (sample) {
          // This is inlined manually because closure doesn't do it for us.
          if (sample && control && typeof sample.stack === 'string') {
            // This extracts the first frame from the sample that isn't also in the control.
            // Skipping one frame that we assume is the frame that calls the two.
            var sampleLines = sample.stack.split('\n');
            var controlLines = control.stack.split('\n');
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;

            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              // We expect at least one stack frame to be shared.
              // Typically this will be the root most one. However, stack frames may be
              // cut off due to maximum stack limits. In this case, one maybe cut off
              // earlier than the other. We assume that the sample is longer or the same
              // and there for cut off earlier. So we should find the root most frame in
              // the sample somewhere in the control.
              c--;
            }

            for (; s >= 1 && c >= 0; s--, c--) {
              // Next we find the first one that isn't the same which should be the
              // frame that called our sample function and the control.
              if (sampleLines[s] !== controlLines[c]) {
                // In V8, the first line is describing the message but other VMs don't.
                // If we're about to return the first line, and the control is also on the same
                // line, that's a pretty good indicator that our sample threw at same line as
                // the control. I.e. before we entered the sample frame. So we ignore this result.
                // This can happen if you passed a class to function component, or non-function.
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--; // We may still have similar intermediate frames from the construct call.
                    // The next one that isn't the same should be our match though.

                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                      var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                      {
                        if (typeof fn === 'function') {
                          componentFrameCache.set(fn, _frame);
                        }
                      } // Return the line we found.

                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }

                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.


        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        {
          if (typeof fn === 'function') {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }

      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }

      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }

      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return '';
        }

        if (typeof type === 'function') {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }

        if (typeof type === 'string') {
          return describeBuiltInComponentFrame(type);
        }

        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame('Suspense');

          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList');
        }

        if (_typeof(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);

            case REACT_MEMO_TYPE:
              // Memo may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);

            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  // Lazy may contain any component type so we recursively resolve it.
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
              }
          }
        }

        return '';
      }

      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }

      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          // $FlowFixMe This is okay but Flow doesn't know it.
          var has = Function.call.bind(Object.prototype.hasOwnProperty);

          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.

              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                  var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                  err.name = 'Invariant Violation';
                  throw err;
                }

                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
              } catch (ex) {
                error$1 = ex;
              }

              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
                setCurrentlyValidatingElement(null);
              }

              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }

      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }

      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function warnAboutAccessingKey() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };

          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }

      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function warnAboutAccessingRef() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };

          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */


      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });

          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      /**
       * https://github.com/reactjs/rfcs/pull/107
       * @param {*} type
       * @param {object} props
       * @param {string} key
       */


      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null; // Currently, key can be spread in as a prop. This causes a potential
          // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
          // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
          // but as an intermediary step, we will use jsxDEV for everything except
          // <div {...props} key="Hi" />, because we aren't currently able to tell if
          // key is explicitly declared to be undefined or not.

          if (maybeKey !== undefined) {
            key = '' + maybeKey;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          } // Remaining properties are added to a new props object


          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          } // Resolve default props


          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;

            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }

          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }

          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }

      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }

      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }

      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);

            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }

          return '';
        }
      }

      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }

          return '';
        }
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */


      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();

          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }

          return info;
        }
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */


      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }

          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }

          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';

          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }

          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */


      function validateChildKeys(node, parentType) {
        {
          if (_typeof(node) !== 'object') {
            return;
          }

          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];

              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);

            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;

                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */


      function validatePropTypes(element) {
        {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

            var _name = getComponentName(type);

            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */


      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }

          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
          }
        }
      }

      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';

            if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }

            var sourceInfo = getSourceInfoErrorAddendum(source);

            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }

            var typeString;

            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = _typeof(type);
            }

            error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }

          var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)


          if (validType) {
            var children = props.children;

            if (children !== undefined) {
              if (isStaticChildren) {
                if (Array.isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }

                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }

          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }

          return element;
        }
      } // These two functions exist to still get child warnings in dev
      // even with the prod transform. This means that jsxDEV is purely
      // opt-in behavior for better messages but that we won't stop
      // giving you warnings if you use production apis.


      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }

      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }

      var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
      // for now we can ship identical prod functions

      var jsxs = jsxWithValidationStatic;
      exports.jsx = jsx;
      exports.jsxs = jsxs;
    })();
  }
})(reactJsxRuntime_development);

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = reactJsxRuntime_production_min;
} else {
  jsxRuntime.exports = reactJsxRuntime_development;
}

// Via: https://github.com/pbeshai/use-query-params/blob/cd44e7fb3394620f757bfb09ff57b7f296d9a5e6/examples/react-router-6/src/index.js#L36
var RouteAdapter = function (_a) {
    var children = _a.children;
    var navigate = useNavigate();
    var location = useLocation();
    var adaptedHistory = React.useMemo(function () { return ({
        replace: function (location) {
            navigate(location, { replace: true, state: location.state });
        },
        push: function (location) {
            navigate(location, { replace: false, state: location.state });
        },
    }); }, [navigate]);
    return children && children({ history: adaptedHistory, location: location });
};

var useDocumentTitle = function (title) {
    var _a = useState(title), document_title = _a[0], set = _a[1];
    useEffect(function () {
        document.title = document_title;
    }, [document_title]);
    var setDoucmentTitle = function (newTitle) {
        if (document_title !== newTitle) {
            set(newTitle);
        }
    };
    return setDoucmentTitle;
};

var FEAST_FCO_TYPES;
(function (FEAST_FCO_TYPES) {
    FEAST_FCO_TYPES["dataSource"] = "dataSource";
    FEAST_FCO_TYPES["entity"] = "entity";
    FEAST_FCO_TYPES["featureView"] = "featureView";
    FEAST_FCO_TYPES["featureService"] = "featureService";
})(FEAST_FCO_TYPES || (FEAST_FCO_TYPES = {}));
var FEAST_FEATURE_VALUE_TYPES;
(function (FEAST_FEATURE_VALUE_TYPES) {
    FEAST_FEATURE_VALUE_TYPES["FLOAT"] = "FLOAT";
    FEAST_FEATURE_VALUE_TYPES["INT64"] = "INT64";
    FEAST_FEATURE_VALUE_TYPES["STRING"] = "STRING";
    FEAST_FEATURE_VALUE_TYPES["BOOL"] = "BOOL";
    FEAST_FEATURE_VALUE_TYPES["BYTES"] = "BYTES";
    FEAST_FEATURE_VALUE_TYPES["INT32"] = "INT32";
    FEAST_FEATURE_VALUE_TYPES["DOUBLE"] = "DOUBLE";
    FEAST_FEATURE_VALUE_TYPES["UNIX_TIMESTAMP"] = "UNIX_TIMESTAMP";
    FEAST_FEATURE_VALUE_TYPES["INVALID"] = "INVALID";
    FEAST_FEATURE_VALUE_TYPES["BYTES_LIST"] = "BYTES_LIST";
    FEAST_FEATURE_VALUE_TYPES["STRING_LIST"] = "STRING_LIST";
    FEAST_FEATURE_VALUE_TYPES["INT32_LIST"] = "INT32_LIST";
    FEAST_FEATURE_VALUE_TYPES["INT64_LIST"] = "INT64_LIST";
    FEAST_FEATURE_VALUE_TYPES["DOUBLE_LIST"] = "DOUBLE_LIST";
    FEAST_FEATURE_VALUE_TYPES["FLOAT_LIST"] = "FLOAT_LIST";
    FEAST_FEATURE_VALUE_TYPES["BOOL_LIST"] = "BOOL_LIST";
    FEAST_FEATURE_VALUE_TYPES["UNIX_TIMESTAMP_LIST"] = "UNIX_TIMESTAMP_LIST";
    FEAST_FEATURE_VALUE_TYPES["NULL"] = "NULL";
})(FEAST_FEATURE_VALUE_TYPES || (FEAST_FEATURE_VALUE_TYPES = {}));

var FeastFeatureColumnSchema = z.object({
    name: z.string(),
    valueType: z.nativeEnum(FEAST_FEATURE_VALUE_TYPES),
    tags: z.record(z.string()).optional(),
});
var FeastBatchSourceSchema = z.object({
    type: z.string(),
    eventTimestampColumn: z.string().optional(),
    createdTimestampColumn: z.string().optional(),
    fileOptions: z.object({
        uri: z.string().optional(),
    }).optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    owner: z.string().optional(),
    meta: z.object({
        earliestEventTimestamp: z.string().transform(function (val) { return new Date(val); }),
        latestEventTimestamp: z.string().transform(function (val) { return new Date(val); }),
    }).optional(),
    requestDataOptions: z.object({
        schema: z.record(z.nativeEnum(FEAST_FEATURE_VALUE_TYPES)),
    }).optional(),
    bigqueryOptions: z.object({
        tableRef: z.string().optional(),
        dbtModelSerialized: z.string().optional()
    }).optional(),
    dataSourceClassType: z.string(),
});
var FeastFeatureViewSchema = z.object({
    spec: z.object({
        description: z.string().optional(),
        name: z.string(),
        entities: z.array(z.string()),
        features: z.array(FeastFeatureColumnSchema),
        ttl: z.string().transform(function (val) { return parseInt(val); }),
        batchSource: FeastBatchSourceSchema,
        online: z.boolean(),
        owner: z.string().optional(),
        tags: z.record(z.string()).optional(),
    }),
    meta: z.object({
        createdTimestamp: z.string().transform(function (val) { return new Date(val); }).optional(),
        lastUpdatedTimestamp: z.string().transform(function (val) { return new Date(val); }).optional(),
        materializationIntervals: z
            .array(z.object({
            startTime: z.string().transform(function (val) { return new Date(val); }),
            endTime: z.string().transform(function (val) { return new Date(val); }),
        }))
            .optional(),
    }),
});

var FeastDatasourceSchema = z.object({
    type: z.string(),
    eventTimestampColumn: z.string().optional(),
    createdTimestampColumn: z.string().optional(),
    fileOptions: z.object({
        uri: z.string().optional(),
    }).optional(),
    name: z.string(),
    description: z.string().optional(),
    owner: z.string().optional(),
    meta: z.object({
        latestEventTimestamp: z.string().transform(function (val) { return new Date(val); }),
        earliestEventTimestamp: z.string().transform(function (val) { return new Date(val); }),
    }).optional(),
    requestDataOptions: z.object({
        schema: z.array(FeastFeatureColumnSchema),
    }).optional(),
    bigqueryOptions: z.object({
        tableRef: z.string().optional(),
        dbtModelSerialized: z.string().optional()
    }).optional(),
});

var FeastEntitySchema = z.object({
    spec: z.object({
        name: z.string(),
        valueType: z.nativeEnum(FEAST_FEATURE_VALUE_TYPES),
        joinKey: z.string(),
        description: z.string().optional(),
        labels: z.record(z.string()).optional(),
    }),
    meta: z.object({
        createdTimestamp: z.string().transform(function (val) { return new Date(val); }).optional(),
        lastUpdatedTimestamp: z.string().transform(function (val) { return new Date(val); }).optional(),
    }),
});

var FeatureColumnInService = z.object({
    name: z.string(),
    valueType: z.nativeEnum(FEAST_FEATURE_VALUE_TYPES),
});
var FeatureInServiceSchema = z.object({
    featureViewName: z.string(),
    featureColumns: z.array(FeatureColumnInService),
});
var FeastFeatureServiceSchema = z.object({
    spec: z.object({
        name: z.string(),
        features: z.array(FeatureInServiceSchema),
        tags: z.record(z.string()).optional(),
        description: z.string().optional(),
    }),
    meta: z.object({
        createdTimestamp: z.string().transform(function (val) { return new Date(val); }),
    }),
});

var FeastSavedDatasetSchema = z.object({
    spec: z.object({
        name: z.string(),
        features: z.array(z.string()),
        joinKeys: z.array(z.string()),
        storage: z.object({
            fileStorage: z.object({
                fileFormat: z.object({
                    parquestFormat: z.object({}).optional(),
                }),
                fileUrl: z.string(),
            }),
        }),
        featureService: z
            .object({
            spec: z.object({
                name: z.string(),
            }),
        })
            .transform(function (obj) {
            return obj.spec.name;
        }),
        profile: z.string().optional(),
    }),
    meta: z.object({
        createdTimestamp: z.string().transform(function (val) { return new Date(val); }),
        minEventTimestamp: z.string().transform(function (val) { return new Date(val); }),
        maxEventTimestamp: z.string().transform(function (val) { return new Date(val); }),
    }),
});

var FeatureViewProjectionSchema = z.object({
    featureViewProjection: z.object({
        featureViewName: z.string(),
        featureColumns: z.array(FeastFeatureColumnSchema),
    }),
});
var RequestDataSourceSchema = z.object({
    requestDataSource: z.object({
        type: z.string(),
        name: z.string(),
        requestDataOptions: z.object({
            schema: z.array(FeastFeatureColumnSchema),
        }),
    }),
});
var ODFVInputsSchema = z.union([
    FeatureViewProjectionSchema,
    RequestDataSourceSchema,
]);
var FeastODFVSchema = z.object({
    spec: z.object({
        name: z.string(),
        features: z.array(FeastFeatureColumnSchema),
        sources: z.record(ODFVInputsSchema),
        userDefinedFunction: z.object({
            name: z.string(),
            body: z.string(),
        }),
    }),
    meta: z.object({
        createdTimestamp: z.string().transform(function (val) { return new Date(val); }),
        lastUpdatedTimestamp: z.string().transform(function (val) { return new Date(val); }),
    }),
});

var FeastRegistrySchema = z.object({
    project: z.string(),
    dataSources: z.array(FeastDatasourceSchema).optional(),
    entities: z.array(FeastEntitySchema).optional(),
    featureViews: z.array(FeastFeatureViewSchema).optional(),
    onDemandFeatureViews: z.array(FeastODFVSchema).optional(),
    featureServices: z.array(FeastFeatureServiceSchema).optional(),
    savedDatasets: z.array(FeastSavedDatasetSchema).optional(),
});

var FEAST_FV_TYPES;
(function (FEAST_FV_TYPES) {
    FEAST_FV_TYPES["regular"] = "regular";
    FEAST_FV_TYPES["ondemand"] = "ondemand";
})(FEAST_FV_TYPES || (FEAST_FV_TYPES = {}));
var mergedFVTypes = function (objects) {
    var _a, _b;
    var mergedFVMap = {};
    var mergedFVList = [];
    (_a = objects.featureViews) === null || _a === void 0 ? void 0 : _a.forEach(function (fv) {
        var obj = {
            name: fv.spec.name,
            type: FEAST_FV_TYPES.regular,
            features: fv.spec.features,
            object: fv,
        };
        mergedFVMap[fv.spec.name] = obj;
        mergedFVList.push(obj);
    });
    (_b = objects.onDemandFeatureViews) === null || _b === void 0 ? void 0 : _b.forEach(function (odfv) {
        var obj = {
            name: odfv.spec.name,
            type: FEAST_FV_TYPES.ondemand,
            features: odfv.spec.features,
            object: odfv,
        };
        mergedFVMap[odfv.spec.name] = obj;
        mergedFVList.push(obj);
    });
    return { mergedFVMap: mergedFVMap, mergedFVList: mergedFVList };
};

var parseEntityRelationships = function (objects) {
    var _a, _b, _c;
    var links = [];
    (_a = objects.featureServices) === null || _a === void 0 ? void 0 : _a.forEach(function (fs) {
        fs.spec.features.forEach(function (feature) {
            links.push({
                source: {
                    type: FEAST_FCO_TYPES["featureView"],
                    name: feature.featureViewName,
                },
                target: {
                    type: FEAST_FCO_TYPES["featureService"],
                    name: fs.spec.name,
                },
            });
        });
    });
    (_b = objects.featureViews) === null || _b === void 0 ? void 0 : _b.forEach(function (fv) {
        fv.spec.entities.forEach(function (ent) {
            links.push({
                source: {
                    type: FEAST_FCO_TYPES["entity"],
                    name: ent,
                },
                target: {
                    type: FEAST_FCO_TYPES["featureView"],
                    name: fv.spec.name,
                },
            });
        });
        if (fv.spec.batchSource) {
            links.push({
                source: {
                    type: FEAST_FCO_TYPES["dataSource"],
                    name: fv.spec.batchSource.name || ''
                },
                target: {
                    type: FEAST_FCO_TYPES["featureView"],
                    name: fv.spec.name,
                }
            });
        }
    });
    (_c = objects.onDemandFeatureViews) === null || _c === void 0 ? void 0 : _c.forEach(function (fv) {
        Object.values(fv.spec.sources).forEach(function (input) {
            var _a, _b;
            if (input.requestDataSource) {
                links.push({
                    source: {
                        type: FEAST_FCO_TYPES["dataSource"],
                        name: input.requestDataSource.name,
                    },
                    target: {
                        type: FEAST_FCO_TYPES["featureView"],
                        name: fv.spec.name,
                    },
                });
            }
            else if ((_a = input.featureViewProjection) === null || _a === void 0 ? void 0 : _a.featureViewName) {
                var source_fv = (_b = objects.featureViews) === null || _b === void 0 ? void 0 : _b.find(function (el) { return el.spec.name === input.featureViewProjection.featureViewName; });
                if (!source_fv) {
                    return;
                }
                links.push({
                    source: {
                        type: FEAST_FCO_TYPES["dataSource"],
                        name: (source_fv === null || source_fv === void 0 ? void 0 : source_fv.spec.batchSource.name) || '',
                    },
                    target: {
                        type: FEAST_FCO_TYPES["featureView"],
                        name: fv.spec.name,
                    },
                });
            }
        });
    });
    return links;
};

var parseIndirectRelationships = function (relationships, objects) {
    var _a;
    var indirectLinks = [];
    // Only contains Entity -> FS or DS -> FS relationships
    (_a = objects.featureServices) === null || _a === void 0 ? void 0 : _a.forEach(function (featureService) {
        featureService.spec.features.forEach(function (featureView) {
            relationships
                .filter(function (relationship) {
                return relationship.target.name === featureView.featureViewName;
            })
                .forEach(function (relationship) {
                indirectLinks.push({
                    source: relationship.source,
                    target: {
                        type: FEAST_FCO_TYPES["featureService"],
                        name: featureService.spec.name,
                    },
                });
            });
        });
    });
    return indirectLinks;
};

var useLoadRegistry = function (url) {
    var keycloak = useKeycloak().keycloak;
    return useQuery("registry:".concat(url), function () {
        return fetch(url, {
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + (keycloak === null || keycloak === void 0 ? void 0 : keycloak.token),
            },
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (json) {
            var objects = FeastRegistrySchema.parse(json);
            var _a = mergedFVTypes(objects), mergedFVMap = _a.mergedFVMap, mergedFVList = _a.mergedFVList;
            var relationships = parseEntityRelationships(objects);
            // Only contains Entity -> FS or DS -> FS relationships
            var indirectRelationships = parseIndirectRelationships(relationships, objects);
            // console.log({
            //   objects,
            //   mergedFVMap,
            //   mergedFVList,
            //   relationships,
            //   indirectRelationships,
            // });
            return {
                project: objects.project,
                objects: objects,
                mergedFVMap: mergedFVMap,
                mergedFVList: mergedFVList,
                relationships: relationships,
                indirectRelationships: indirectRelationships,
            };
        });
    }, {
        staleTime: Infinity, // Given that we are reading from a registry dump, this seems reasonable for now.
    });
};

var RegistryPathContext = React.createContext("/registry.json");

var useLoadObjectStats = function () {
    var _a, _b, _c;
    var registryUrl = useContext(RegistryPathContext);
    var query = useLoadRegistry(registryUrl);
    var data = query.isSuccess && query.data
        ? {
            featureServices: ((_a = query.data.objects.featureServices) === null || _a === void 0 ? void 0 : _a.length) || 0,
            featureViews: query.data.mergedFVList.length,
            entities: ((_b = query.data.objects.entities) === null || _b === void 0 ? void 0 : _b.length) || 0,
            dataSources: ((_c = query.data.objects.dataSources) === null || _c === void 0 ? void 0 : _c.length) || 0,
        }
        : undefined;
    return __assign$2(__assign$2({}, query), { data: data });
};
var statStyle = { cursor: "pointer" };
var ObjectsCountStats = function () {
    var _a = useLoadObjectStats(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    var projectName = useParams().projectName;
    var navigate = useNavigate();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiSpacer, { size: "l" }, void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), isLoading && jsxRuntime.exports.jsx("p", { children: "Loading" }, void 0), isError && jsxRuntime.exports.jsx("p", { children: "There was an error in loading registry information." }, void 0), isSuccess && data && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Registered in this Feast project are \u2026" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "s" }, void 0), jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { style: statStyle, onClick: function () { return navigate("/p/".concat(projectName, "/feature-service")); }, description: "Feature Services\u2192", title: data.featureServices, reverse: true }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { style: statStyle, description: "Feature Views\u2192", onClick: function () { return navigate("/p/".concat(projectName, "/feature-view")); }, title: data.featureViews, reverse: true }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { style: statStyle, description: "Entities\u2192", onClick: function () { return navigate("/p/".concat(projectName, "/entity")); }, title: data.entities, reverse: true }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { style: statStyle, description: "Data Sources\u2192", onClick: function () { return navigate("/p/".concat(projectName, "/data-source")); }, title: data.dataSources, reverse: true }, void 0) }, void 0)] }, void 0)] }, void 0))] }, void 0));
};

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
/**
 * An example of a transformSearchString function that undoes encoding of
 * common JSON characters that are technically allowed in URLs.
 */

"{}[],\":".split('').map(function (d) {
  return [d, encodeURIComponent(d)];
});

/**
 * Convert the values in query to strings via the encode functions configured
 * in paramConfigMap
 *
 * @param paramConfigMap Map from query name to { encode, decode } config
 * @param query Query updates mapping param name to decoded value
 */
function encodeQueryParams(paramConfigMap, query) {
  var encodedQuery = {};
  var paramNames = Object.keys(query);

  for (var _i = 0, paramNames_1 = paramNames; _i < paramNames_1.length; _i++) {
    var paramName = paramNames_1[_i];
    var decodedValue = query[paramName];

    if (!paramConfigMap[paramName]) {
      if (process.env.NODE_ENV === 'development') {
        console.warn("Encoding parameter " + paramName + " as string since it was not configured.");
      } // NOTE: we could just not encode it, but it is probably convenient to have
      // it be included by default as a string type.


      encodedQuery[paramName] = decodedValue == null ? decodedValue : String(decodedValue);
    } else {
      encodedQuery[paramName] = paramConfigMap[paramName].encode(query[paramName]);
    }
  }

  return encodedQuery;
}

var encodeSearchQueryString = function (query) {
    return stringify(encodeQueryParams({
        tags: StringParam,
    }, {
        tags: query,
    }));
};

// Usage of generic type parameter T
// https://stackoverflow.com/questions/53203409/how-to-tell-typescript-that-im-returning-an-array-of-arrays-of-the-input-type
var buildTagCollection = function (array, recordExtractor // Assumes that tags are always a Record<string, string>
) {
    var tagCollection = array.reduce(function (memo, fco) {
        var tags = recordExtractor(fco);
        if (tags) {
            Object.entries(tags).forEach(function (_a) {
                var _b;
                var tagKey = _a[0], tagValue = _a[1];
                if (!memo[tagKey]) {
                    memo[tagKey] = (_b = {},
                        _b[tagValue] = [fco],
                        _b);
                }
                else {
                    if (!memo[tagKey][tagValue]) {
                        memo[tagKey][tagValue] = [fco];
                    }
                    else {
                        memo[tagKey][tagValue].push(fco);
                    }
                }
            });
        }
        return memo;
    }, {});
    return tagCollection;
};
var useFeatureViewTagsAggregation = function () {
    var registryUrl = useContext(RegistryPathContext);
    var query = useLoadRegistry(registryUrl);
    var data = useMemo(function () {
        return query.data && query.data.objects && query.data.objects.featureViews
            ? buildTagCollection(query.data.objects.featureViews, function (fv) {
                return fv.spec.tags;
            })
            : undefined;
    }, [query.data]);
    return __assign$2(__assign$2({}, query), { data: data });
};
var useFeatureServiceTagsAggregation = function () {
    var registryUrl = useContext(RegistryPathContext);
    var query = useLoadRegistry(registryUrl);
    var data = useMemo(function () {
        return query.data &&
            query.data.objects &&
            query.data.objects.featureServices
            ? buildTagCollection(query.data.objects.featureServices, function (fs) {
                return fs.spec.tags;
            })
            : undefined;
    }, [query.data]);
    return __assign$2(__assign$2({}, query), { data: data });
};

var FCO_TO_URL_NAME_MAP = {
    dataSource: "/data-source",
    entity: "/entity",
    featureView: "/feature-view",
    featureService: "/feature-service",
};
var createSearchLink = function (FCOType, key, value) {
    var URL = FCO_TO_URL_NAME_MAP[FCOType];
    return URL + "?" + encodeSearchQueryString("".concat(key, ":").concat(value));
};
var NUMBER_OF_SUGGESTION_GROUPS = 2;
var NUMBER_OF_VALUES_PER_GROUP = 4;
var sortTagByUniqueValues = function (tagAggregation) {
    return Object.entries(tagAggregation).sort(function (_a, _b) {
        _a[0]; var valuesOfA = _a[1];
        _b[0]; var valuesOfB = _b[1];
        return Object.keys(valuesOfB).length - Object.keys(valuesOfA).length;
    });
};
var sortTagsByTotalUsage = function (tagAggregation) {
    return Object.entries(tagAggregation).sort(function (_a, _b) {
        _a[0]; var valuesOfA = _a[1];
        _b[0]; var valuesOfB = _b[1];
        var countOfA = Object.values(valuesOfA).reduce(function (memo, current) {
            return memo + current.length;
        }, 0);
        var countOfB = Object.values(valuesOfB).reduce(function (memo, current) {
            return memo + current.length;
        }, 0);
        return countOfB - countOfA;
    });
};
var generateExplorationSuggestions = function (tagAggregation, projectName) {
    var suggestions = [];
    if (tagAggregation) {
        var SortedCandidates = sortTagByUniqueValues(tagAggregation);
        SortedCandidates.slice(0, NUMBER_OF_SUGGESTION_GROUPS).forEach(function (_a) {
            var selectedTag = _a[0], selectedTagValuesMap = _a[1];
            suggestions.push({
                title: "Feature Views by \"".concat(selectedTag, "\""),
                items: Object.entries(selectedTagValuesMap)
                    .sort(function (_a, _b) {
                    _a[0]; var entriesOfA = _a[1];
                    _b[0]; var entriesOfB = _b[1];
                    return entriesOfB.length - entriesOfA.length;
                })
                    .slice(0, NUMBER_OF_VALUES_PER_GROUP)
                    .map(function (_a) {
                    var tagValue = _a[0], fvEntries = _a[1];
                    return {
                        name: tagValue,
                        link: "/p/".concat(projectName) +
                            createSearchLink(FEAST_FCO_TYPES["featureView"], selectedTag, tagValue),
                        label: "Feature Services where ".concat(selectedTag, " is '").concat(tagValue, "'"),
                        count: fvEntries.length,
                    };
                }),
            });
        });
    }
    return suggestions;
};
var useFCOExploreSuggestions = function () {
    var query = useFeatureViewTagsAggregation();
    var tagAggregation = query.data;
    var projectName = useParams().projectName;
    var data = undefined;
    if (query.isSuccess && tagAggregation && projectName) {
        data = generateExplorationSuggestions(tagAggregation, projectName);
    }
    return __assign$2(__assign$2({}, query), { data: data });
};

var ExplorePanel = function () {
    var _a = useFCOExploreSuggestions(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, data = _a.data;
    var navigate = useNavigate();
    return (jsxRuntime.exports.jsxs(EuiPanel, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Explore this Project" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), isLoading && jsxRuntime.exports.jsx(EuiLoadingContent, { lines: 3 }, void 0), isSuccess &&
                data &&
                data.map(function (suggestionGroup, i) {
                    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xxs" }, { children: jsxRuntime.exports.jsx("h4", { children: suggestionGroup.title }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiFlexGroup, __assign$2({ wrap: true, responsive: false, gutterSize: "xs" }, { children: suggestionGroup.items.map(function (item, j) {
                                    return (jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: false }, { children: jsxRuntime.exports.jsxs(EuiBadge, __assign$2({ color: "primary", onClick: function () {
                                                navigate(item.link);
                                            }, onClickAriaLabel: item.label }, { children: [item.name, " (", item.count, ")"] }), void 0) }), j));
                                }) }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "s" }, void 0)] }, i));
                })] }, void 0));
};

var ProjectOverviewPage = function () {
    useDocumentTitle("Feast Home");
    var registryUrl = useContext(RegistryPathContext);
    var _a = useLoadRegistry(registryUrl), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    return (jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "l" }, { children: jsxRuntime.exports.jsxs("h1", { children: [isLoading && jsxRuntime.exports.jsx(EuiLoadingContent, { lines: 1 }, void 0), isSuccess && (data === null || data === void 0 ? void 0 : data.project) && "Project: ".concat(data.project)] }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiSpacer, {}, void 0), jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsxs(EuiFlexItem, __assign$2({ grow: 2 }, { children: [isLoading && jsxRuntime.exports.jsx(EuiLoadingContent, { lines: 4 }, void 0), isError && (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: "alert", color: "danger", title: jsxRuntime.exports.jsx("h2", { children: "Error Loading Project Configs" }, void 0), body: jsxRuntime.exports.jsxs("p", { children: ["There was an error loading the Project Configurations. Please check that ", jsxRuntime.exports.jsx("code", { children: "feature_store.yaml" }, void 0), " file is available and well-formed."] }, void 0) }, void 0)), isSuccess &&
                                    ((data === null || data === void 0 ? void 0 : data.description) ? (jsxRuntime.exports.jsx(EuiText, { children: jsxRuntime.exports.jsx("pre", { children: data.description }, void 0) }, void 0)) : (jsxRuntime.exports.jsxs(EuiText, { children: [jsxRuntime.exports.jsx("p", { children: "Welcome to your new Feast project. In this UI, you can see Data Sources, Entities, Feature Views and Feature Services registered in Feast." }, void 0), jsxRuntime.exports.jsx("p", { children: "It looks like this project already has some objects registered. If you are new to this project, we suggest starting by exploring the Feature Services, as they represent the collection of Feature Views serving a particular model." }, void 0), jsxRuntime.exports.jsxs("p", { children: [jsxRuntime.exports.jsx("strong", { children: "Note" }, void 0), ": We encourage you to replace this welcome message with more suitable content for your team. You can do so by specifying a", " ", jsxRuntime.exports.jsx("code", { children: "project_description" }, void 0), " in your", " ", jsxRuntime.exports.jsx("code", { children: "feature_store.yaml" }, void 0), " file."] }, void 0)] }, void 0))), jsxRuntime.exports.jsx(ObjectsCountStats, {}, void 0)] }), void 0), jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: 1 }, { children: jsxRuntime.exports.jsx(ExplorePanel, {}, void 0) }), void 0)] }, void 0)] }, void 0) }), void 0));
};

var ProjectEntrySchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    registryPath: z.string(),
});
var ProjectsListSchema = z.object({
    default: z.string().optional(),
    projects: z.array(ProjectEntrySchema),
});
var ProjectListContext = React.createContext(undefined);
var ProjectListError = /** @class */ (function (_super) {
    __extends(ProjectListError, _super);
    function ProjectListError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "FeastProjectListError";
        return _this;
    }
    return ProjectListError;
}(Error));
var projectListExampleString = "\n\n```json\n{\n  \"projects\": [\n    {\n      \"name\": \"Credit Score Project\",\n      \"description\": \"Project for credit scoring team and associated models.\",\n      \"id\": \"credit_score_project\",\n      \"registryPath\": \"/registry.json\"\n    }\n  ]\n}\n```\n";
var anticipatedProjectListErrors = function (err, isCustomProjectList) {
    var _a;
    var isSyntaxError = ((_a = err.stack) === null || _a === void 0 ? void 0 : _a.indexOf("SyntaxError")) === 0;
    // Straight up not a JSON
    if (isSyntaxError) {
        var message = "Unable to properly parse Project List JSON. Check that your project list is formatted properly.";
        return new ProjectListError(message);
    }
    // Some sort of 404
    var isFailedToFetch = err.message.indexOf("Failed to fetch") > -1;
    if (isFailedToFetch) {
        var followUpMessage = isCustomProjectList
            ? "Check that the promise in your Feast UI configuration is set up properly."
            : "Did you create a `project-list.json` file in the `/public/` directory? e.g." +
                projectListExampleString;
        var message = "Failed to fetch Project List JSON. " + followUpMessage;
        return new ProjectListError(message);
    }
    return null;
};
var useLoadProjectsList = function () {
    var projectListPromise = useContext(ProjectListContext);
    // Use setState to surface errors in Error Boundaries
    // https://github.com/facebook/react/issues/14981#issuecomment-468460187
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _a = useState(undefined); _a[0]; var setQueryError = _a[1];
    return useQuery("feast-projects-list", function () {
        return projectListPromise === null || projectListPromise === void 0 ? void 0 : projectListPromise.projectsListPromise.catch(function (e) {
            var anticipatedError = anticipatedProjectListErrors(e, projectListPromise.isCustom);
            setQueryError(function () {
                if (anticipatedError) {
                    throw anticipatedError;
                }
                else {
                    throw new Error(e);
                }
            });
        }).then(function (json) {
            try {
                var configs = ProjectsListSchema.parse(json);
                return configs;
            }
            catch (e) {
                // If a json object is returned, but
                // does not adhere to our anticipated
                // format.
                setQueryError(function () {
                    throw new ProjectListError("Error parsing project list JSON. JSON Object does not match expected type for a Feast project list. A project list JSON file should look like\n                ".concat(projectListExampleString, "\n                Zod (our parser) returned the following: \n\n").concat(e));
                });
                throw new Error("Zod Error");
            }
        });
    }, {
        enabled: !!(projectListPromise === null || projectListPromise === void 0 ? void 0 : projectListPromise.projectsListPromise),
    });
};

var ProjectSelector = function () {
    var projectName = useParams().projectName;
    var navigate = useNavigate();
    var _a = useLoadProjectsList(), isLoading = _a.isLoading, data = _a.data;
    var currentProject = data === null || data === void 0 ? void 0 : data.projects.find(function (project) {
        return project.id === projectName;
    });
    var options = data === null || data === void 0 ? void 0 : data.projects.map(function (p) {
        return {
            value: p.id,
            text: p.name,
        };
    });
    var basicSelectId = useGeneratedHtmlId({ prefix: "basicSelect" });
    var onChange = function (e) {
        navigate("/p/".concat(e.target.value));
    };
    return (jsxRuntime.exports.jsx(EuiSelect, { isLoading: isLoading, hasNoInitialSelection: currentProject === undefined, fullWidth: true, id: basicSelectId, options: options, value: (currentProject === null || currentProject === void 0 ? void 0 : currentProject.id) || "", onChange: function (e) { return onChange(e); }, "aria-label": "Select a Feast Project" }, void 0));
};

var useMatchSubpath = function (to) {
    var resolved = useResolvedPath(to);
    return useMatch({ path: resolved.pathname, end: false }) !== null;
};
var useMatchExact = function (to) {
    var resolved = useResolvedPath(to);
    return useMatch({ path: resolved.pathname, end: true }) !== null;
};

var DataSourceIcon = function (_a) {
    var size = _a.size, className = _a.className;
    return (jsxRuntime.exports.jsxs("svg", __assign$2({ className: className, width: size, height: size, viewBox: "0 0 32 32", fill: "none" }, { children: [jsxRuntime.exports.jsx("path", { d: "M5.57713 6.79872C5.13727 7.20222 5.09743 7.45581 5.09743 7.54373C5.09743 7.63166 5.13727 7.88525 5.57713 8.28874C6.01812 8.69329 6.74193 9.12877 7.76705 9.52651C9.80734 10.3181 12.7312 10.841 16.0383 10.841C19.3455 10.841 22.2693 10.3181 24.3096 9.52651C24.4745 9.46252 24.6317 9.39756 24.7811 9.3319V12.6503C22.3846 13.4678 19.3244 13.9384 16.0383 13.9384C12.4477 13.9384 9.12669 13.3765 6.64663 12.4142C5.41157 11.935 4.30631 11.3263 3.48329 10.5713C2.65913 9.81523 2 8.79399 2 7.54373C2 6.29348 2.65913 5.27224 3.48329 4.5162C4.30631 3.76121 5.41157 3.15248 6.64663 2.67327C9.12669 1.71101 12.4477 1.14905 16.0383 1.14905C19.629 1.14905 22.95 1.71101 25.43 2.67327C26.6651 3.15248 27.7704 3.76121 28.5934 4.5162C29.4175 5.27224 30.0767 6.29348 30.0767 7.54373C30.0767 7.56043 30.0765 23.5338 30.0763 23.5504C30.059 24.7779 29.4065 25.782 28.5934 26.528C28.1343 26.9491 27.5875 27.3247 26.9792 27.6577V7.54373C26.9792 7.45581 26.9394 7.20222 26.4995 6.79872C26.0585 6.39418 25.3347 5.9587 24.3096 5.56095C22.2693 4.76932 19.3455 4.24647 16.0383 4.24647C12.7312 4.24647 9.80734 4.76932 7.76705 5.56095C6.74193 5.9587 6.01812 6.39418 5.57713 6.79872Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M5.09743 23.4305C5.09743 23.5185 5.13727 23.7721 5.57713 24.1756C6.01812 24.5801 6.74193 25.0156 7.76705 25.4133C9.80734 26.205 12.7312 26.7278 16.0383 26.7278C19.3455 26.7278 22.2693 26.205 24.3096 25.4133C24.4745 25.3493 24.6317 25.2844 24.7811 25.2187V28.5371C22.3846 29.3545 19.3244 29.8252 16.0383 29.8252C12.4477 29.8252 9.12669 29.2633 6.64663 28.301C5.41157 27.8218 4.30631 27.2131 3.48329 26.4581C2.65913 25.702 2 24.6808 2 23.4305L2.00141 11.0908C2.39967 12.4396 3.99834 13.5387 5.09743 13.9884V23.4305Z", fill: "#0569EA" }, void 0)] }), void 0));
};
var DataSourceIcon16 = function () {
    return jsxRuntime.exports.jsx(DataSourceIcon, { size: 16, className: "euiSideNavItemButton__icon" }, void 0);
};
var DataSourceIcon32 = function () {
    return (jsxRuntime.exports.jsx(DataSourceIcon, { size: 32, className: "euiIcon euiIcon--xLarge euiPageHeaderContent__titleIcon" }, void 0));
};

var EntityIcon = function (_a) {
    var size = _a.size, className = _a.className;
    return (jsxRuntime.exports.jsxs("svg", __assign$2({ className: className, width: size, height: size, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.exports.jsx("path", { d: "M16.0383 5.04579C9.99584 5.04579 5.09743 9.9442 5.09743 15.9867C5.09743 21.5208 9.20619 26.0952 14.5396 26.8258V21.5321H17.5371C17.5469 22.3595 17.5371 29.946 17.5371 29.946C17.0447 29.9982 16.5446 30.025 16.0383 30.025C8.28518 30.025 2 23.7399 2 15.9867C2 8.23354 8.28518 1.94836 16.0383 1.94836C23.7915 1.94836 30.0767 8.23354 30.0767 15.9867C30.0767 22.0929 26.1782 27.2885 20.7344 29.2203C20.6845 29.0259 20.6967 26.2271 20.7344 25.8713C24.427 24.1139 26.9792 20.3484 26.9792 15.9867C26.9792 9.9442 22.0808 5.04579 16.0383 5.04579Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0383 11.4405C13.5275 11.4405 11.4921 13.4759 11.4921 15.9867C11.4921 18.4975 13.5275 20.5329 16.0383 20.5329C18.5491 20.5329 20.5846 18.4975 20.5846 15.9867C20.5846 13.4759 18.5491 11.4405 16.0383 11.4405ZM8.39468 15.9867C8.39468 11.7653 11.8169 8.34308 16.0383 8.34308C20.2598 8.34308 23.682 11.7653 23.682 15.9867C23.682 20.2082 20.2598 23.6304 16.0383 23.6304C11.8169 23.6304 8.39468 20.2082 8.39468 15.9867Z", fill: "#0569EA" }, void 0)] }), void 0));
};
var EntityIcon16 = function () {
    return jsxRuntime.exports.jsx(EntityIcon, { size: 16, className: "euiSideNavItemButton__icon" }, void 0);
};
var EntityIcon32 = function () {
    return (jsxRuntime.exports.jsx(EntityIcon, { size: 32, className: "euiIcon euiIcon--xLarge euiPageHeaderContent__titleIcon" }, void 0));
};

var FeatureViewIcon = function (_a) {
    var size = _a.size, className = _a.className;
    return (jsxRuntime.exports.jsxs("svg", __assign$2({ className: className, width: size, height: size, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.exports.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.68657 14.2132L15.8385 21.2324L27.9904 14.2132L29.677 15.1874V17.0359L15.8385 25.0292L2 17.0359V15.1874L3.68657 14.2132Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.68657 21.1824L15.8385 28.2015L27.9904 21.1824L29.677 22.1566V24.005L15.8385 31.9984L2 24.005V22.1566L3.68657 21.1824Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8385 0L29.677 7.99336V9.84182L15.8385 17.8352L2 9.84182V7.99336L15.8385 0ZM6.49626 8.61227L15.8275 3.29726L25.2807 8.61227L15.8275 13.9884L6.49626 8.61227Z", fill: "#0569EA" }, void 0)] }), void 0));
};
var FeatureViewIcon16 = function () {
    return jsxRuntime.exports.jsx(FeatureViewIcon, { size: 16, className: "euiSideNavItemButton__icon" }, void 0);
};
var FeatureViewIcon32 = function () {
    return (jsxRuntime.exports.jsx(FeatureViewIcon, { size: 32, className: "euiIcon euiIcon--xLarge euiPageHeaderContent__titleIcon" }, void 0));
};

var FeatureServiceIcon = function (_a) {
    var size = _a.size, className = _a.className;
    return (jsxRuntime.exports.jsx("svg", __assign$2({ className: className, width: size, height: size, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.exports.jsx("path", { d: "M18 1.15L15.9 0L13.9 1.15L4.55 19L15.9 25L21.65 21.7L20.25 18.95L15.9 21.45L8.8 17.7L15.9 3.95L25.6 22.85L15.9 28.4L3.4 21.25L2 23.95L15.9 32L29.75 24L18 1.15Z", fill: "#0569EA" }, void 0) }), void 0));
};
var FeatureServiceIcon16 = function () {
    return (jsxRuntime.exports.jsx(FeatureServiceIcon, { size: 16, className: "euiSideNavItemButton__icon" }, void 0));
};
var FeatureServiceIcon32 = function () {
    return (jsxRuntime.exports.jsx(FeatureServiceIcon, { size: 32, className: "euiIcon euiIcon--xLarge euiPageHeaderContent__titleIcon" }, void 0));
};

var DatasetIcon = function (_a) {
    var size = _a.size, className = _a.className;
    return (jsxRuntime.exports.jsxs("svg", __assign$2({ className: className, width: size, height: size, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.exports.jsx("path", { d: "M4 8.59285V5.39551H28.4797V8.59285H4Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M4 14.5878V11.2906H7.29726V14.5878H4Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M10.0949 14.5878V11.2906H28.4797V14.5878H10.0949Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M4 20.5829V17.2856H7.29726V20.5829H4Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M10.0949 20.5829V17.2856H28.4797V20.5829H10.0949Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M4 26.5779V23.2806H7.29726V26.5779H4Z", fill: "#0569EA" }, void 0), jsxRuntime.exports.jsx("path", { d: "M10.0949 26.5779V23.2806H28.4797V26.5779H10.0949Z", fill: "#0569EA" }, void 0)] }), void 0));
};
var DatasetIcon16 = function () {
    return jsxRuntime.exports.jsx(DatasetIcon, { size: 16, className: "euiSideNavItemButton__icon" }, void 0);
};
var DatasetIcon32 = function () {
    return (jsxRuntime.exports.jsx(DatasetIcon, { size: 32, className: "euiIcon euiIcon--xLarge euiPageHeaderContent__titleIcon" }, void 0));
};

var SideNav = function () {
    var _a, _b, _c, _d;
    var registryUrl = useContext(RegistryPathContext);
    var _e = useLoadRegistry(registryUrl), isSuccess = _e.isSuccess, data = _e.data;
    var projectName = useParams().projectName;
    var _f = useState(false), isSideNavOpenOnMobile = _f[0], setisSideNavOpenOnMobile = _f[1];
    var navigate = useNavigate();
    var toggleOpenOnMobile = function () {
        setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
    };
    var dataSourcesLabel = "Data Sources ".concat(isSuccess && (data === null || data === void 0 ? void 0 : data.objects.dataSources)
        ? "(".concat((_a = data === null || data === void 0 ? void 0 : data.objects.dataSources) === null || _a === void 0 ? void 0 : _a.length, ")")
        : "");
    var entitiesLabel = "Entities ".concat(isSuccess && (data === null || data === void 0 ? void 0 : data.objects.entities)
        ? "(".concat((_b = data === null || data === void 0 ? void 0 : data.objects.entities) === null || _b === void 0 ? void 0 : _b.length, ")")
        : "");
    var featureViewsLabel = "Feature Views ".concat(isSuccess && (data === null || data === void 0 ? void 0 : data.mergedFVList) && (data === null || data === void 0 ? void 0 : data.mergedFVList.length) > 0
        ? "(".concat(data === null || data === void 0 ? void 0 : data.mergedFVList.length, ")")
        : "");
    var featureServicesLabel = "Feature Services ".concat(isSuccess && (data === null || data === void 0 ? void 0 : data.objects.featureServices)
        ? "(".concat((_c = data === null || data === void 0 ? void 0 : data.objects.featureServices) === null || _c === void 0 ? void 0 : _c.length, ")")
        : "");
    var savedDatasetsLabel = "Datasets ".concat(isSuccess && (data === null || data === void 0 ? void 0 : data.objects.savedDatasets)
        ? "(".concat((_d = data === null || data === void 0 ? void 0 : data.objects.savedDatasets) === null || _d === void 0 ? void 0 : _d.length, ")")
        : "");
    var sideNav = [
        {
            name: "Home",
            id: htmlIdGenerator("basicExample")(),
            onClick: function () {
                navigate("/p/".concat(projectName, "/"));
            },
            items: [
                {
                    name: dataSourcesLabel,
                    id: htmlIdGenerator("dataSources")(),
                    icon: jsxRuntime.exports.jsx(EuiIcon, { type: DataSourceIcon16 }, void 0),
                    onClick: function () {
                        navigate("/p/".concat(projectName, "/data-source"));
                    },
                    isSelected: useMatchSubpath("data-source"),
                },
                {
                    name: entitiesLabel,
                    id: htmlIdGenerator("entities")(),
                    icon: jsxRuntime.exports.jsx(EuiIcon, { type: EntityIcon16 }, void 0),
                    onClick: function () {
                        navigate("/p/".concat(projectName, "/entity"));
                    },
                    isSelected: useMatchSubpath("entity"),
                },
                {
                    name: featureViewsLabel,
                    id: htmlIdGenerator("featureView")(),
                    icon: jsxRuntime.exports.jsx(EuiIcon, { type: FeatureViewIcon16 }, void 0),
                    onClick: function () {
                        navigate("/p/".concat(projectName, "/feature-view"));
                    },
                    isSelected: useMatchSubpath("feature-view"),
                },
                {
                    name: featureServicesLabel,
                    id: htmlIdGenerator("featureService")(),
                    icon: jsxRuntime.exports.jsx(EuiIcon, { type: FeatureServiceIcon16 }, void 0),
                    onClick: function () {
                        navigate("/p/".concat(projectName, "/feature-service"));
                    },
                    isSelected: useMatchSubpath("feature-service"),
                },
                {
                    name: savedDatasetsLabel,
                    id: htmlIdGenerator("savedDatasets")(),
                    icon: jsxRuntime.exports.jsx(EuiIcon, { type: DatasetIcon16 }, void 0),
                    onClick: function () {
                        navigate("/p/".concat(projectName, "/data-set"));
                    },
                    isSelected: useMatchSubpath("data-set"),
                },
            ],
        },
    ];
    return (jsxRuntime.exports.jsx(EuiSideNav, { "aria-label": "Project Level", mobileTitle: "Feast", toggleOpenOnMobile: function () { return toggleOpenOnMobile(); }, isOpenOnMobile: isSideNavOpenOnMobile, style: { width: 192 }, items: sideNav }, void 0));
};

var FeastWordMark = function () {
    return (jsxRuntime.exports.jsxs("svg", __assign$2({ viewBox: "0 0 867.35999 247.36" }, { children: [jsxRuntime.exports.jsx("path", { fill: "#036aea", d: "M110.16183,17.00937c.234.64911.89285.75636,1.38878,1.04463q8.65416,5.03016,17.32827,10.02611a4.902,4.902,0,0,1,1.39222.939,6.25329,6.25329,0,0,1-2.00979,1.34288Q84.06746,55.88562,39.83977,81.35049a3.5002,3.5002,0,0,0-2.0716,3.5423q.10251,39.40016.016,78.80068a3.00409,3.00409,0,0,0,1.724,3.08369c5.73342,3.19444,11.38854,6.52925,17.078,9.80283a3.87237,3.87237,0,0,0,1.65567.74254,4.76982,4.76982,0,0,0,.16835-1.97075q.00955-39.0721.00546-78.14418a10.84851,10.84851,0,0,0-.00873-1.31225,1.868,1.868,0,0,1,1.15285-2.078c2.35661-1.275,4.65619-2.65541,6.97762-3.99533q41.571-23.99492,83.12628-48.01711a2.65165,2.65165,0,0,1,3.07973.008q24.1989,14.044,48.46065,27.97945a2.25269,2.25269,0,0,1,1.37048,2.28946c-.08568,3.11684-.11285,6.2409.0103,9.35522a2.46169,2.46169,0,0,1-1.52132,2.53528q-23.40626,13.44752-46.77323,26.96342c-10.65984,6.15167-21.30613,12.32707-31.99592,18.42625a2.88237,2.88237,0,0,0-1.714,2.91539q.07714,45.31035.03865,90.6209a10.01334,10.01334,0,0,0,.00764,1.14828,1.33291,1.33291,0,0,1-.80487,1.44373q-4.63958,2.6299-9.23928,5.32968a1.43945,1.43945,0,0,1-1.65763-.04425c-2.734-1.60919-5.478-3.2023-8.24537-4.75317a1.4411,1.4411,0,0,1-.887-1.56446,8.60452,8.60452,0,0,0,.00566-.98425V120.376c0-.38307.018-.76708-.00318-1.14895a1.11659,1.11659,0,0,1,.66771-1.19286c.39321-.18914.75949-.43409,1.1385-.65293q34.24956-19.774,68.499-39.54835c.47206-.27256.93908-.55384,1.39332-.82209.007-.54509-.44507-.61675-.74218-.78888-6.20049-3.592-12.42608-7.14118-18.59627-10.78425-.93444-.55172-1.49672-.20794-2.2145.20668Q127.06326,78.8595,104.17915,92.06274c-7.81675,4.512-15.61837,9.05069-23.46491,13.51033a2.65214,2.65214,0,0,0-1.547,2.67872q.05772,51.54884.03049,103.09774v1.90088a1.98245,1.98245,0,0,1-1.48181-.51057q-29.71047-17.13391-59.426-34.2589a2.32331,2.32331,0,0,1-1.325-2.3298q.0438-51.95926-.009-103.91855a2.55549,2.55549,0,0,1,1.56854-2.52281q44.2934-25.51623,88.5487-51.0985a7.5738,7.5738,0,0,0,2.4319-1.60191Z" }, void 0), jsxRuntime.exports.jsx("path", { fill: "#2c2c2c", d: "M419.84534,124.31907q.00006-21.75045.00342-43.50088c.00089-1.99986-.23346-1.77545,1.7161-1.7759q32.51074-.00748,65.02142-.00316c.05472,0,.1095-.00024.16422.00005,1.59945.00851,1.53387-.17085,1.53418,1.47169q.001,5.335.00024,10.67c0,1.25852-.03537,2.51836.01254,3.775.02793.73161-.25342.98561-.95123.9186-.37958-.03646-.76563-.006-1.14874-.006h-43.3476c-.38312,0-.76944.032-1.14868-.00619-.77979-.07865-1.07776.23169-1.051,1.02469.046,1.36638.01208,2.73547.01208,4.10341-.00012,4.15858-.00839,8.31718.00323,12.47574.00651,2.31839-.25863,2.0417,1.96949,2.043q18.88248.011,37.765.00354c.27365,0,.54733-.003.821.00052,1.37426.01751,1.56585-.33007,1.556,1.47974-.01255,2.29807-.003,4.59626-.003,6.8944,0,2.24344.01123,4.487-.00458,6.7303-.0087,1.23577-.02915,1.25527-1.27826,1.25691q-8.70237.01143-17.40473.00341-10.75484,0-21.50961.00036c-.4378,0-.87588-.00268-1.31338.01a.54327.54327,0,0,0-.59467.61007c.00128.27353-.00613.54706-.00616.82061q-.0006,8.9464.00128,17.89281c.001,1.55574.01007,1.56339,1.65768,1.5636q22.82319.003,45.64636.00435c2.26792.00091,2.02424-.2668,2.0289,1.99322.00919,4.43215-.00445,8.86434.006,13.29648.00457,1.95037-.1742,1.56473-1.63434,1.56507q-33.41377.00787-66.82758.00352c-.3284,0-.6571-.01149-.98507-.00072-.4683.0154-.71314-.18356-.70667-.66848.0058-.43763-.00348-.87543-.00348-1.31316q-.0005-21.66825-.00033-43.33661Zm106.64533,45.31925c1.1358-2.56891,2.14282-4.86276,3.16278-7.15086q18.2211-40.87458,36.44543-81.74775a6.42959,6.42959,0,0,0,.32654-.75122,1.274,1.274,0,0,1,1.45484-.966c6.23907.02993,12.47863.049,18.71722-.0147,1.04981-.01071,1.26355.58652,1.57739,1.28905q6.88779,15.41556,13.7862,30.82638,12.68508,28.35664,25.36151,56.71717a3.36251,3.36251,0,0,1,.57324,1.67325,2.47764,2.47764,0,0,1-1.28332.1188q-9.52305.01257-19.046.00241c-1.6986-.00224-1.391.24-2.094-1.4456-2.31341-5.54684-4.6272-11.094-6.86493-16.67151a1.71468,1.71468,0,0,0-1.90173-1.27479c-13.08032.03439-26.16083.01936-39.24121.02676-1.67591.00095-1.35938-.17374-1.98517,1.33729q-3.449,8.32877-6.89716,16.6579c-.6427,1.54393-.39471,1.3707-1.98272,1.37171q-9.3588.006-18.71759.00166ZM562.847,134.137h28.52936c-4.754-11.47235-9.44275-22.78746-14.26794-34.4317ZM727.16,101.30848c-1.637-.806-3.27289-1.66366-4.95093-2.42854a47.75778,47.75778,0,0,0-19.33752-4.522,32.35857,32.35857,0,0,0-9.904,1.11834,13.05763,13.05763,0,0,0-5.13507,2.80669,8.32037,8.32037,0,0,0-2.82459,6.07891,7.00252,7.00252,0,0,0,3.77277,6.62115,31.90639,31.90639,0,0,0,6.37158,2.56944c5.00043,1.60757,10.17578,2.53423,15.23578,3.91174,3.9024,1.0624,7.78778,2.17437,11.57025,3.61655a28.95665,28.95665,0,0,1,8.27264,4.92864,19.50422,19.50422,0,0,1,7.12732,12.52991,25.568,25.568,0,0,1-4.42138,19.3113,27.22736,27.22736,0,0,1-8.68921,7.62631,41.34739,41.34739,0,0,1-15.96424,5.14524,73.9551,73.9551,0,0,1-33.62811-3.55857,45.30347,45.30347,0,0,1-11.27533-5.58955c-1.05841-.745-1.062-.76283-.52814-1.95271q3.05265-6.80409,6.12513-13.59925c.12982-.287.18652-.63759.49981-.813.4021-.115.60938.21091.86139.38036a52.27032,52.27032,0,0,0,23.35156,8.4826,43.17451,43.17451,0,0,0,13.71857-.38467,13.85459,13.85459,0,0,0,6.75879-3.13964,7.52605,7.52605,0,0,0,2.61432-5.29554,6.74312,6.74312,0,0,0-2.46246-5.80928,18.70374,18.70374,0,0,0-6.467-3.455c-4.10468-1.35353-8.32258-2.27839-12.51478-3.30206a144.53173,144.53173,0,0,1-14.62078-4.27867,28.78544,28.78544,0,0,1-8.01361-4.40112,20.46479,20.46479,0,0,1-8.334-14.33c-1.05249-9.6633,1.77722-17.81665,9.50928-24.00039a33.38808,33.38808,0,0,1,9.61786-5.2143,53.77267,53.77267,0,0,1,18.21588-2.88366A65.80218,65.80218,0,0,1,727.649,82.324a47.21321,47.21321,0,0,1,5.416,2.72406c.48321.27872.72479.55629.47027,1.17158-2.04541,4.94518-4.06164,9.90239-6.094,14.853-.03577.08724-.16052.13791-.28107.23586Z" }, void 0), jsxRuntime.exports.jsx("path", { fill: "#036aea", d: "M202.36405,107.08141a5.75059,5.75059,0,0,1,.177,2.03461q.00735,33.40441.03057,66.8088a2.65323,2.65323,0,0,1-1.51465,2.69453q-28.95561,16.6287-57.85668,33.35236a4.34318,4.34318,0,0,1-1.7149.81538,2.35109,2.35109,0,0,1-.20956-1.49481c-.00983-6.89427.02276-13.78882-.03574-20.68258a2.28138,2.28138,0,0,1,1.3717-2.28679c12.5244-7.18526,25.00977-14.43863,37.54958-21.5967a2.86671,2.86671,0,0,0,1.658-2.95331c-.07751-6.29144-.03352-12.58438-.03352-18.87678v-1.93291c-1.864.8833-3.43649,1.91268-5.06557,2.82509-1.71779.96208-3.41214,1.966-5.11685,2.95142q-2.48582,1.437-4.97186,2.87368-2.55732,1.47767-5.115,2.95468-2.48616,1.43653-4.97218,2.87323-2.48767,1.43409-4.97823,2.86315-2.5593,1.474-5.11669,2.95138-2.46255,1.4203-4.92745,2.84133a2.42475,2.42475,0,0,1-.246-1.57167c-.01009-6.89427.02652-13.78887-.03824-20.68254a2.39472,2.39472,0,0,1,1.44386-2.40647q28.94586-16.64544,57.85091-33.36175c.55565-.32067,1.12781-.61267,1.83151-.99335Z" }, void 0), jsxRuntime.exports.jsx("path", { fill: "#2c2c2c", d: "M305.22236,124.31643q0-21.75031.00345-43.50063c.00085-1.99891-.23365-1.773,1.71844-1.77349q32.51056-.00756,65.021-.00319c.10943,0,.21893-.00115.3284.00022,1.3551.0168,1.364.01689,1.36642,1.4735q.00843,5.1708.00189,10.34165c0,1.368-.03439,2.73707.01282,4.10337.02533.73425-.25748.98339-.95343.91667-.37958-.03639-.76559-.006-1.14871-.006q-21.75573,0-43.51157.00328c-2.03088.00085-1.81283-.25159-1.81515,1.85809q-.01084,10.09543-.0025,20.19087c0,.383.01193.76624.00152,1.14891-.01251.45929.15769.72306.65769.71.4375-.01146.87561.00145,1.31344.00147q19.04659.00033,38.09314.00485c1.947.0014,1.8385-.33249,1.84052,1.84352q.00609,6.64821.00116,13.29642c-.0001,1.82985.12857,1.702-1.66376,1.70206q-19.1287,0-38.25733.004c-2.26547.00146-1.9801-.28376-1.98245,2.02537q-.01446,14.28132-.00406,28.56268,0,.41039-.00009.82077c-.00213,1.72192.1167,1.59765-1.59524,1.59759q-8.86647-.00027-17.733-.00207c-1.79386-.00162-1.69236.21539-1.69242-1.65509q-.00059-21.83242-.00015-43.66481ZM811.86445,79.03912h37.26306a9.24874,9.24874,0,0,0,.98425-.00559c.7381-.07944,1.0716.12822,1.06562.971q-.05292,7.54884.0025,15.09814c.00769.92817-.37848,1.05668-1.164,1.05349-5.85468-.0237-11.70966-.0128-17.56452-.01274-3.00952,0-6.019-.00775-9.0285.004-1.18433.00463-1.1872.02446-1.21741,1.13835-.01044.38266-.002.76582-.002,1.14875q-.00009,34.62795-.00311,69.25589c-.00049,2.20708.2387,1.94065-1.89508,1.9444q-8.61814.01523-17.23621.00015c-2.1261-.00358-1.88153.25408-1.882-1.95759q-.00741-34.71-.00836-69.42c-.001-2.4471.32916-2.10418-2.048-2.10837q-12.39367-.02183-24.78735-.00561c-.21887,0-.43774.00055-.65661-.0001-1.47-.00448-1.46662.1802-1.46088-1.38175.00384-1.03937.00073-2.07876.00073-3.11815q0-5.4978.00183-10.9956c.003-1.79542-.153-1.60515,1.552-1.60656q9.52094-.00789,19.04194-.0021Z" }, void 0)] }), void 0));
};

var Layout = function () {
    // Registry Path Context has to be inside Layout
    // because it has to be under routes
    // in order to use useParams
    var projectName = useParams().projectName;
    var data = useLoadProjectsList().data;
    var currentProject = data === null || data === void 0 ? void 0 : data.projects.find(function (project) {
        return project.id === projectName;
    });
    var registryPath = (currentProject === null || currentProject === void 0 ? void 0 : currentProject.registryPath) || "";
    return (jsxRuntime.exports.jsx(RegistryPathContext.Provider, __assign$2({ value: registryPath }, { children: jsxRuntime.exports.jsxs(EuiPage, __assign$2({ paddingSize: "none", style: { background: "transparent" } }, { children: [jsxRuntime.exports.jsxs(EuiPageSideBar, __assign$2({ paddingSize: "l", sticky: true, role: "navigation", "aria-label": "Top Level" }, { children: [jsxRuntime.exports.jsx(FeastWordMark, {}, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "s" }, void 0), jsxRuntime.exports.jsx(ProjectSelector, {}, void 0), registryPath && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "s" }, void 0), jsxRuntime.exports.jsx(SideNav, {}, void 0)] }, void 0))] }), void 0), jsxRuntime.exports.jsx(EuiPageBody, __assign$2({ panelled: true }, { children: jsxRuntime.exports.jsx(EuiErrorBoundary, { children: jsxRuntime.exports.jsx(Outlet, {}, void 0) }, void 0) }), void 0)] }), void 0) }), void 0));
};

var NoMatch = function () {
    return jsxRuntime.exports.jsx("div", { children: "404" }, void 0);
};

var _excluded = ["to"];

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var isLeftClickEvent = function isLeftClickEvent(event) {
  return event.button === 0;
};

var isTargetBlank = function isTargetBlank(event) {
  var target = event.target.getAttribute("target");
  return target && target !== "_self";
};

function EuiCustomLink(_ref) {
  var to = _ref.to,
      rest = _objectWithoutProperties(_ref, _excluded);

  // This is the key!
  var navigate = useNavigate();

  function onClick(event) {
    if (event.defaultPrevented) {
      return;
    } // Let the browser handle links that open new tabs/windows


    if (isModifiedEvent(event) || !isLeftClickEvent(event) || isTargetBlank(event)) {
      return;
    } // Prevent regular link behavior, which causes a browser refresh.


    event.preventDefault(); // Push the route to the history.

    navigate(to);
  } // Generate the correct link href (with basename accounted for)


  var href = useHref({
    pathname: to
  });

  var props = _objectSpread2(_objectSpread2({}, rest), {}, {
    href: href,
    onClick: onClick
  });

  return /*#__PURE__*/React.createElement(EuiLink, props);
}

var DatasourcesListingTable = function (_a) {
    var dataSources = _a.dataSources;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Name",
            field: "name",
            sortable: true,
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/data-source/").concat(name), to: "/p/".concat(projectName, "/data-source/").concat(name) }, { children: name }), void 0));
            },
        },
        {
            name: "Type",
            field: "type",
            sortable: true,
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: dataSources, rowProps: getRowProps }, void 0));
};

var FeastIconBlue = function () {
    return (jsxRuntime.exports.jsxs("svg", __assign$2({ viewBox: "0 0 500 500", width: "32px", height: "32px" }, { children: [jsxRuntime.exports.jsx("path", { fill: "rgb(3, 106, 234)", d: "M251.22554,6c.53377,1.48066,2.03666,1.72531,3.1679,2.38287q19.74076,11.47414,39.527,22.87025a11.18161,11.18161,0,0,1,3.17574,2.142,14.26393,14.26393,0,0,1-4.58446,3.0632Q191.70248,94.67941,90.81609,152.76654a7.98418,7.98418,0,0,0-4.72547,8.08022q.23383,89.87447.0365,179.74977a6.85256,6.85256,0,0,0,3.93257,7.03412c13.07833,7.28674,25.978,14.89367,38.95609,22.36092a8.83283,8.83283,0,0,0,3.7767,1.69378,10.88,10.88,0,0,0,.384-4.49541q.02179-89.12614.01246-178.25226a24.74732,24.74732,0,0,0-.01992-2.99333,4.261,4.261,0,0,1,2.62973-4.74007c5.37559-2.90836,10.62109-6.05717,15.91643-9.11364Q246.5415,117.3566,341.332,62.56033a6.04856,6.04856,0,0,1,7.02507.01825Q403.5564,94.6138,458.89911,126.40163a5.1385,5.1385,0,0,1,3.12617,5.22239c-.19544,7.10973-.25743,14.23593.02349,21.33992a5.6153,5.6153,0,0,1-3.47022,5.78313q-53.39129,30.67474-106.693,61.50543c-24.31582,14.03239-48.60073,28.1189-72.98489,42.03155a6.57492,6.57492,0,0,0-3.90975,6.65021q.176,103.356.08817,206.7125a22.84307,22.84307,0,0,0,.01742,2.61932,3.04045,3.04045,0,0,1-1.836,3.29323q-10.5832,5.999-21.07544,12.15737a3.28353,3.28353,0,0,1-3.78117-.10093c-6.23644-3.67068-12.49568-7.30467-18.80825-10.84232a3.28721,3.28721,0,0,1-2.02331-3.56863,19.63135,19.63135,0,0,0,.01291-2.24514V241.78649c0-.87381.04106-1.74977-.00726-2.62083a2.547,2.547,0,0,1,1.5231-2.721c.89694-.43143,1.73245-.99019,2.597-1.48937q78.12563-45.10587,156.251-90.21252c1.0768-.62173,2.14212-1.26333,3.17827-1.87524.016-1.24339-1.01523-1.40685-1.693-1.79947-14.14374-8.1936-28.34473-16.28955-42.41937-24.59964-2.1315-1.25851-3.41412-.47433-5.05141.47145q-52.18471,30.14454-104.38495,60.26205c-17.83056,10.29218-35.62658,20.64525-53.52508,30.818a6.04968,6.04968,0,0,0-3.52881,6.11034q.13165,117.58644.06954,235.17306v4.336a4.52219,4.52219,0,0,1-3.38011-1.16465Q109.44257,413.391,41.65937,374.32778a5.29965,5.29965,0,0,1-3.02241-5.31444q.0999-118.52267-.02065-237.04537a5.82927,5.82927,0,0,1,3.578-5.75471Q143.23055,68.009,244.17993,9.65407A17.27627,17.27627,0,0,0,249.72727,6Z" }, void 0), jsxRuntime.exports.jsx("path", { fill: "rgb(3, 106, 234)", d: "M461.54516,211.46054a13.11766,13.11766,0,0,1,.40375,4.64108q.01677,76.19775.06972,152.39547a6.05219,6.05219,0,0,1-3.455,6.14642q-66.04974,37.9312-131.975,76.079a9.90742,9.90742,0,0,1-3.91182,1.85994,5.363,5.363,0,0,1-.478-3.40977c-.02241-15.72631.05193-31.45324-.08151-47.1784a5.204,5.204,0,0,1,3.12895-5.21632c28.569-16.39007,57.049-32.93551,85.65316-49.26355a6.53914,6.53914,0,0,0,3.782-6.7367c-.17682-14.35121-.07647-28.70584-.07647-43.05925v-4.40909c-4.25191,2.01487-7.83888,4.36294-11.55491,6.44422-3.91839,2.19458-7.78333,4.48459-11.67189,6.73238q-5.67031,3.27787-11.34116,6.55508-5.83342,3.37065-11.66768,6.73983-5.67111,3.27684-11.34189,6.554-5.67456,3.27124-11.35568,6.531-5.838,3.3624-11.67154,6.73231-5.61723,3.2398-11.23984,6.48126a5.531,5.531,0,0,1-.56115-3.58509c-.023-15.72631.06049-31.45335-.08723-47.1783a5.46248,5.46248,0,0,1,3.29356-5.48931q66.02749-37.96939,131.9619-76.10046c1.26747-.73146,2.5726-1.39753,4.1778-2.26589Z" }, void 0)] }), void 0));
};

var DataSourceIndexEmptyState = function () {
    return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: FeastIconBlue, title: jsxRuntime.exports.jsx("h2", { children: "There are no data sources" }, void 0), body: jsxRuntime.exports.jsx("p", { children: "This project does not have any Data Sources. Learn more about creating Data Sources in Feast Docs." }, void 0), actions: jsxRuntime.exports.jsx(EuiButton, __assign$2({ onClick: function () {
                window.open("https://docs.feast.dev/getting-started/concepts/data-source", "_blank");
            } }, { children: "Open Data Sources Docs" }), void 0), footer: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xxs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Want to learn more?" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiLink, __assign$2({ href: "https://docs.feast.dev/", target: "_blank" }, { children: "Read Feast documentation" }), void 0)] }, void 0) }, void 0));
};

var useLoadDatasources = function () {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.objects.dataSources;
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};
var Index$4 = function () {
    var _a = useLoadDatasources(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    useDocumentTitle("Data Sources | Feast");
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: DataSourceIcon32, pageTitle: "Data Sources" }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [isLoading && (jsxRuntime.exports.jsxs("p", { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isError && jsxRuntime.exports.jsx("p", { children: "We encountered an error while loading." }, void 0), isSuccess && !data && jsxRuntime.exports.jsx(DataSourceIndexEmptyState, {}, void 0), isSuccess && data && jsxRuntime.exports.jsx(DatasourcesListingTable, { dataSources: data }, void 0)] }, void 0) }), void 0)] }, void 0));
};

var DatasetsListingTable = function (_a) {
    var datasets = _a.datasets;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Name",
            field: "spec.name",
            sortable: true,
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/data-set/").concat(name), to: "/p/".concat(projectName, "/data-set/").concat(name) }, { children: name }), void 0));
            },
        },
        {
            name: "Source Feature Service",
            field: "spec.featureService",
        },
        {
            name: "Created",
            render: function (item) {
                return item.meta.createdTimestamp.toLocaleDateString("en-CA");
            },
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.spec.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: datasets, rowProps: getRowProps }, void 0));
};

var DatasetsIndexEmptyState = function () {
    return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: FeastIconBlue, title: jsxRuntime.exports.jsx("h2", { children: "There are no saved datasets" }, void 0), body: jsxRuntime.exports.jsx("p", { children: "You currently do not have any saved datasets. Learn more about creating saved datasets in Feast Docs." }, void 0), actions: jsxRuntime.exports.jsx(EuiButton, __assign$2({ onClick: function () {
                window.open("https://docs.feast.dev/getting-started/concepts/dataset#creating-saved-dataset-from-historical-retrieval", "_blank");
            } }, { children: "Open Dataset Docs" }), void 0), footer: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xxs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Want to learn more?" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiLink, __assign$2({ href: "https://docs.feast.dev/", target: "_blank" }, { children: "Read Feast documentation" }), void 0)] }, void 0) }, void 0));
};

var useLoadSavedDataSets = function () {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.objects.savedDatasets;
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};
var Index$3 = function () {
    var _a = useLoadSavedDataSets(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    useDocumentTitle("Saved Datasets | Feast");
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: DatasetIcon32, pageTitle: "Datasets" }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [isLoading && (jsxRuntime.exports.jsxs("p", { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isError && jsxRuntime.exports.jsx("p", { children: "We encountered an error while loading." }, void 0), isSuccess && data && jsxRuntime.exports.jsx(DatasetsListingTable, { datasets: data }, void 0), isSuccess && !data && jsxRuntime.exports.jsx(DatasetsIndexEmptyState, {}, void 0)] }, void 0) }), void 0)] }, void 0));
};

var useLoadRelationshipData = function () {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.relationships;
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};

var entityGroupByName = function (data) {
    return data
        .filter(function (edge) {
        return edge.source.type === "entity";
    })
        .reduce(function (memo, current) {
        if (memo[current.source.name]) {
            memo[current.source.name].push(current);
        }
        else {
            memo[current.source.name] = [current];
        }
        return memo;
    }, {});
};
var useFeatureViewEdgesByEntity = function () {
    var query = useLoadRelationshipData();
    return __assign$2(__assign$2({}, query), { data: query.isSuccess && query.data ? entityGroupByName(query.data) : undefined });
};

var EntitiesListingTable = function (_a) {
    var entities = _a.entities;
    var _b = useFeatureViewEdgesByEntity(), isSuccess = _b.isSuccess, data = _b.data;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Name",
            field: "spec.name",
            sortable: true,
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/entity/").concat(name), to: "/p/".concat(projectName, "/entity/").concat(name) }, { children: name }), void 0));
            },
        },
        {
            name: "Type",
            field: "spec.valueType",
            sortable: true,
            render: function (valueType) {
                return valueType;
            },
        },
        {
            name: "# of FVs",
            render: function (item) {
                if (isSuccess && data) {
                    return data[item.spec.name] ? data[item.spec.name].length : "0";
                }
                else {
                    return ".";
                }
            },
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.spec.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: entities, rowProps: getRowProps }, void 0));
};

var EntityIndexEmptyState = function () {
    return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: FeastIconBlue, title: jsxRuntime.exports.jsx("h2", { children: "There are no entities" }, void 0), body: jsxRuntime.exports.jsx("p", { children: "This project does not have any Entities. Learn more about creating Entities in Feast Docs." }, void 0), actions: jsxRuntime.exports.jsx(EuiButton, __assign$2({ onClick: function () {
                window.open("https://docs.feast.dev/getting-started/concepts/entity", "_blank");
            } }, { children: "Open Entities Docs" }), void 0), footer: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xxs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Want to learn more?" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiLink, __assign$2({ href: "https://docs.feast.dev/", target: "_blank" }, { children: "Read Feast documentation" }), void 0)] }, void 0) }, void 0));
};

var useLoadEntities = function () {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.objects.entities;
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};
var Index$2 = function () {
    var _a = useLoadEntities(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    useDocumentTitle("Entities | Feast");
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: EntityIcon32, pageTitle: "Entities" }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [isLoading && (jsxRuntime.exports.jsxs("p", { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isError && jsxRuntime.exports.jsx("p", { children: "We encountered an error while loading." }, void 0), isSuccess && !data && jsxRuntime.exports.jsx(EntityIndexEmptyState, {}, void 0), isSuccess && data && jsxRuntime.exports.jsx(EntitiesListingTable, { entities: data }, void 0)] }, void 0) }), void 0)] }, void 0));
};

var TagsDisplay = function (_a) {
    var tags = _a.tags, createLink = _a.createLink, owner = _a.owner, description = _a.description;
    return (jsxRuntime.exports.jsxs(EuiDescriptionList, __assign$2({ textStyle: "reverse" }, { children: [owner ? (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "owner" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: owner }, void 0)] }, "owner")) : (""), description ? (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "description" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: description }, void 0)] }, "description")) : (""), Object.entries(tags).map(function (_a) {
                var key = _a[0], value = _a[1];
                return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: key }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: createLink ? (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ to: createLink(key, value) }, { children: value }), void 0)) : (value) }, void 0)] }, key));
            })] }), void 0));
};

var whereFSconsumesThisFv$2 = function (fvName) {
    return function (r) {
        return (r.source.name === fvName &&
            r.target.type === FEAST_FCO_TYPES.featureService);
    };
};
var useGetFSConsumersOfFV = function (fvList) {
    var relationshipQuery = useLoadRelationshipData();
    var data = relationshipQuery.data
        ? fvList.reduce(function (memo, fvName) {
            if (relationshipQuery.data) {
                memo[fvName] = relationshipQuery.data
                    .filter(whereFSconsumesThisFv$2(fvName))
                    .map(function (fs) {
                    return fs.target.name;
                });
            }
            return memo;
        }, {})
        : undefined;
    return __assign$2(__assign$2({}, relationshipQuery), { data: data });
};
var FeatureViewEdgesList = function (_a) {
    var fvNames = _a.fvNames;
    var projectName = useParams().projectName;
    var _b = useGetFSConsumersOfFV(fvNames), isLoading = _b.isLoading, data = _b.data;
    var columns = [
        {
            name: "Name",
            field: "",
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/feature-view/").concat(name), to: "/p/".concat(projectName, "/feature-view/").concat(name) }, { children: name }), void 0));
            },
        },
        {
            name: "FS Consumers",
            render: function (name) {
                return (jsxRuntime.exports.jsxs(React.Fragment, { children: [isLoading && jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "s" }, void 0), data && data[name].length] }, void 0));
            },
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: fvNames, rowProps: getRowProps }, void 0));
};

var useLoadEntity$1 = function (entityName) {
    var _a;
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : (_a = registryQuery.data.objects.entities) === null || _a === void 0 ? void 0 : _a.find(function (fv) { return fv.spec.name === entityName; });
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};

var EntityOverviewTab$1 = function () {
    var entityName = useParams().entityName;
    var eName = entityName === undefined ? "" : entityName;
    var _a = useLoadEntity$1(eName), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    var isEmpty = data === undefined;
    var fvEdges = useFeatureViewEdgesByEntity();
    var fvEdgesSuccess = fvEdges.isSuccess;
    var fvEdgesData = fvEdges.data;
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [isLoading && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isEmpty && jsxRuntime.exports.jsxs("p", { children: ["No entity with name: ", entityName] }, void 0), isError && jsxRuntime.exports.jsxs("p", { children: ["Error loading entity: ", entityName] }, void 0), isSuccess && data && (jsxRuntime.exports.jsx(React.Fragment, { children: jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsxs(EuiFlexItem, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Properties" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsxs(EuiDescriptionList, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Join Key" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.spec.joinKey }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Description" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.spec.description }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Value Type" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.spec.valueType }, void 0)] }, void 0)] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true }, { children: jsxRuntime.exports.jsxs(EuiDescriptionList, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Created" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.meta.createdTimestamp ? (data.meta.createdTimestamp.toLocaleDateString("en-CA")) : (jsxRuntime.exports.jsx(EuiText, { children: "No createdTimestamp specified on this entity." }, void 0)) }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Updated" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.meta.lastUpdatedTimestamp ? (data.meta.lastUpdatedTimestamp.toLocaleDateString("en-CA")) : (jsxRuntime.exports.jsx(EuiText, { children: "No lastUpdatedTimestamp specified on this entity." }, void 0)) }, void 0)] }, void 0) }), void 0)] }, void 0), jsxRuntime.exports.jsxs(EuiFlexItem, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Feature Views" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), fvEdgesSuccess && fvEdgesData ? (fvEdgesData[eName] ? (jsxRuntime.exports.jsx(FeatureViewEdgesList, { fvNames: fvEdgesData[eName].map(function (r) {
                                                return r.target.name;
                                            }) }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No feature views have this entity" }, void 0))) : (jsxRuntime.exports.jsx(EuiText, { children: "Error loading feature views that have this entity." }, void 0))] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, grow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Labels" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.labels ? (jsxRuntime.exports.jsx(TagsDisplay, { tags: data.spec.labels }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No labels specified on this entity." }, void 0))] }), void 0)] }, void 0)] }, void 0) }, void 0))] }, void 0));
};

var useLoadFeatureView = function (featureViewName) {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.mergedFVMap[featureViewName];
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};

var RegularFeatureViewCustomTabLoadingWrapper = function (_a) {
    var Component = _a.Component;
    var featureViewName = useParams().featureViewName;
    if (!featureViewName) {
        throw new Error("This route has no 'featureViewName' part. This route is likely not supposed to render this component.");
    }
    var feastObjectQuery = useLoadFeatureView(featureViewName);
    if (feastObjectQuery.isSuccess &&
        feastObjectQuery.data &&
        feastObjectQuery.data.type !== FEAST_FV_TYPES.regular) {
        throw new Error("This should not happen. Somehow a custom tab on a Regular FV page received data that does not have the shape?");
    }
    return (jsxRuntime.exports.jsx(Component, { id: featureViewName, feastObjectQuery: feastObjectQuery }, void 0));
};

var OnDemandFeatureViewCustomTabLoadingWrapper = function (_a) {
    var Component = _a.Component;
    var featureViewName = useParams().featureViewName;
    if (!featureViewName) {
        throw new Error("This route has no 'featureViewName' part. This route is likely not supposed to render this component.");
    }
    var feastObjectQuery = useLoadFeatureView(featureViewName);
    if (feastObjectQuery.isSuccess &&
        feastObjectQuery.data &&
        feastObjectQuery.data.type !== FEAST_FV_TYPES.ondemand) {
        throw new Error("This should not happen. Somehow a custom tab on a ODFV page received data that does not have the shape?");
    }
    return (jsxRuntime.exports.jsx(Component, { id: featureViewName, feastObjectQuery: feastObjectQuery }, void 0));
};

var useLoadFeatureService = function (featureServiceName) {
    var _a, _b;
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : (_a = registryQuery.data.objects.featureServices) === null || _a === void 0 ? void 0 : _a.find(function (fs) { return fs.spec.name === featureServiceName; });
    var entities = data === undefined
        ? undefined
        : (_b = registryQuery.data) === null || _b === void 0 ? void 0 : _b.indirectRelationships.filter(function (relationship) {
            return (relationship.target.type === FEAST_FCO_TYPES.featureService &&
                relationship.target.name === data.spec.name &&
                relationship.source.type === FEAST_FCO_TYPES.entity);
        }).map(function (relationship) {
            return relationship.source;
        });
    // Deduplicate on name of entity
    if (entities) {
        var entityToName = {};
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            entityToName[entity.name] = entity;
        }
        entities = Object.values(entityToName);
    }
    return __assign$2(__assign$2({}, registryQuery), { data: data, entities: entities });
};

var FeatureServiceCustomTabLoadingWrapper = function (_a) {
    var Component = _a.Component;
    var featureServiceName = useParams().featureServiceName;
    if (!featureServiceName) {
        throw new Error("This route has no 'featureServiceName' part. This route is likely not supposed to render this component.");
    }
    var feastObjectQuery = useLoadFeatureService(featureServiceName);
    return (jsxRuntime.exports.jsx(Component, { id: featureServiceName, feastObjectQuery: feastObjectQuery }, void 0));
};

var useLoadDataSource = function (dataSourceName) {
    var _a;
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : (_a = registryQuery.data.objects.dataSources) === null || _a === void 0 ? void 0 : _a.find(function (ds) { return ds.name === dataSourceName; });
    var consumingFeatureViews = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.relationships.filter(function (relationship) {
            return (relationship.source.type === FEAST_FCO_TYPES.dataSource &&
                relationship.source.name === (data === null || data === void 0 ? void 0 : data.name) &&
                relationship.target.type === FEAST_FCO_TYPES.featureView);
        });
    return __assign$2(__assign$2({}, registryQuery), { data: data, consumingFeatureViews: consumingFeatureViews });
};

var DataSourceCustomTabLoadingWrapper = function (_a) {
    var Component = _a.Component;
    var dataSourceName = useParams().dataSourceName;
    if (!dataSourceName) {
        throw new Error("This route has no 'dataSourceName' part. This route is likely not supposed to render this component.");
    }
    var feastObjectQuery = useLoadDataSource(dataSourceName);
    return jsxRuntime.exports.jsx(Component, { id: dataSourceName, feastObjectQuery: feastObjectQuery }, void 0);
};

var EntityCustomTabLoadingWrapper = function (_a) {
    var Component = _a.Component;
    var entityName = useParams().entityName;
    if (!entityName) {
        throw new Error("This route has no 'entityName' part. This route is likely not supposed to render this component.");
    }
    var feastObjectQuery = useLoadEntity$1(entityName);
    return jsxRuntime.exports.jsx(Component, { id: entityName, feastObjectQuery: feastObjectQuery }, void 0);
};

var useLoadEntity = function (entityName) {
    var _a;
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : (_a = registryQuery.data.objects.savedDatasets) === null || _a === void 0 ? void 0 : _a.find(function (fv) { return fv.spec.name === entityName; });
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};

var TabsRegistryContext = React.createContext({});
var useGenericCustomTabsNavigation = function (entries, navigate) {
    // Check for Duplicates
    var arrayOfPaths = entries.map(function (tab) { return tab.path; });
    var duplicatedPaths = arrayOfPaths.filter(function (item, index) { return arrayOfPaths.indexOf(item) !== index; });
    // Throw error if multiple custom tabs being registered to the same path
    if (duplicatedPaths.length) {
        throw new Error("More than one tabs registered for path url: ".concat(duplicatedPaths.join(", ")));
    }
    var _a = useState([]), customNavigationTabs = _a[0], setTabs = _a[1];
    var featureViewRoot = useResolvedPath(""); // Root of Feature View Section
    var pathname = useLocation().pathname; // Current Location
    useEffect(function () {
        if (entries.length === 0) {
            return;
        }
        setTabs(entries.map(function (_a) {
            var label = _a.label, path = _a.path;
            var resolvedTabPath = resolvePath(path, featureViewRoot.pathname);
            return {
                label: label,
                // Can't use the match hooks here b/c we're in a loop due
                // to React hooks needing a predictable number of
                // hooks to be run. See: https://reactjs.org/docs/hooks-rules.html
                isSelected: pathname === resolvedTabPath.pathname,
                onClick: function () {
                    navigate(path);
                },
            };
        }));
    }, [pathname, navigate, featureViewRoot.pathname, entries]);
    return {
        customNavigationTabs: customNavigationTabs,
    };
};
var genericCustomTabRoutes = function (tabs, WrapperComponent) {
    return tabs.map(function (_a) {
        var path = _a.path, Component = _a.Component;
        var WrappedComponent = function () {
            return jsxRuntime.exports.jsx(WrapperComponent, { Component: Component }, void 0);
        };
        return (jsxRuntime.exports.jsx(Route, { path: "/".concat(path, "/*"), element: jsxRuntime.exports.jsx(WrappedComponent, {}, void 0) }, path));
    });
};
// Navigation Hooks for Each Custom Tab Type
var useRegularFeatureViewCustomTabs = function (navigate) {
    var RegularFeatureViewCustomTabs = React.useContext(TabsRegistryContext).RegularFeatureViewCustomTabs;
    return useGenericCustomTabsNavigation(RegularFeatureViewCustomTabs || [], navigate);
};
var useOnDemandFeatureViewCustomTabs = function (navigate) {
    var OnDemandFeatureViewCustomTabs = React.useContext(TabsRegistryContext).OnDemandFeatureViewCustomTabs;
    return useGenericCustomTabsNavigation(OnDemandFeatureViewCustomTabs || [], navigate);
};
var useFeatureServiceCustomTabs = function (navigate) {
    var FeatureServiceCustomTabs = React.useContext(TabsRegistryContext).FeatureServiceCustomTabs;
    return useGenericCustomTabsNavigation(FeatureServiceCustomTabs || [], navigate);
};
var useDataSourceCustomTabs = function (navigate) {
    var DataSourceCustomTabs = React.useContext(TabsRegistryContext).DataSourceCustomTabs;
    return useGenericCustomTabsNavigation(DataSourceCustomTabs || [], navigate);
};
var useEntityCustomTabs = function (navigate) {
    var EntityCustomTabs = React.useContext(TabsRegistryContext).EntityCustomTabs;
    return useGenericCustomTabsNavigation(EntityCustomTabs || [], navigate);
};
var useDatasetCustomTabs = function (navigate) {
    var DatasetCustomTabs = React.useContext(TabsRegistryContext).DatasetCustomTabs;
    return useGenericCustomTabsNavigation(DatasetCustomTabs || [], navigate);
};
// Routes for Each Custom Tab Type
var useRegularFeatureViewCustomTabRoutes = function () {
    var RegularFeatureViewCustomTabs = React.useContext(TabsRegistryContext).RegularFeatureViewCustomTabs;
    return genericCustomTabRoutes(RegularFeatureViewCustomTabs || [], RegularFeatureViewCustomTabLoadingWrapper);
};
var useOnDemandFeatureViewCustomTabRoutes = function () {
    var OnDemandFeatureViewCustomTabs = React.useContext(TabsRegistryContext).OnDemandFeatureViewCustomTabs;
    return genericCustomTabRoutes(OnDemandFeatureViewCustomTabs || [], OnDemandFeatureViewCustomTabLoadingWrapper);
};
var useFeatureServiceCustomTabRoutes = function () {
    var FeatureServiceCustomTabs = React.useContext(TabsRegistryContext).FeatureServiceCustomTabs;
    return genericCustomTabRoutes(FeatureServiceCustomTabs || [], FeatureServiceCustomTabLoadingWrapper);
};
var useDataSourceCustomTabRoutes = function () {
    var DataSourceCustomTabs = React.useContext(TabsRegistryContext).DataSourceCustomTabs;
    return genericCustomTabRoutes(DataSourceCustomTabs || [], DataSourceCustomTabLoadingWrapper);
};
var useEntityCustomTabRoutes = function () {
    var EntityCustomTabs = React.useContext(TabsRegistryContext).EntityCustomTabs;
    return genericCustomTabRoutes(EntityCustomTabs || [], EntityCustomTabLoadingWrapper);
};

var EntityInstance = function () {
    var navigate = useNavigate();
    var entityName = useParams().entityName;
    var customNavigationTabs = useEntityCustomTabs(navigate).customNavigationTabs;
    var CustomTabRoutes = useEntityCustomTabRoutes();
    useDocumentTitle("".concat(entityName, " | Entity | Feast"));
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: EntityIcon32, pageTitle: "Entity: ".concat(entityName), tabs: __spreadArray([
                    {
                        label: "Overview",
                        isSelected: useMatchExact(""),
                        onClick: function () {
                            navigate("");
                        },
                    }
                ], customNavigationTabs, true) }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsx(EuiPageContentBody, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsx(Route, { path: "/", element: jsxRuntime.exports.jsx(EntityOverviewTab$1, {}, void 0) }, void 0), CustomTabRoutes] }, void 0) }, void 0) }), void 0)] }, void 0));
};

var FeatureServiceListingTable = function (_a) {
    var tagKeysSet = _a.tagKeysSet, featureServices = _a.featureServices;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Name",
            field: "spec.name",
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/feature-service/").concat(name), to: "/p/".concat(projectName, "/feature-service/").concat(name) }, { children: name }), void 0));
            },
        },
        {
            name: "# of Features",
            field: "spec.features",
            render: function (featureViews) {
                var numFeatures = 0;
                featureViews.forEach(function (featureView) {
                    numFeatures += featureView.featureColumns.length;
                });
                return numFeatures;
            },
        },
        {
            name: "Created at",
            field: "meta.createdTimestamp",
            render: function (date) {
                return date.toLocaleDateString("en-CA");
            },
        },
    ];
    tagKeysSet.forEach(function (key) {
        columns.push({
            name: key,
            render: function (item) {
                var tag = jsxRuntime.exports.jsx("span", { children: "n/a" }, void 0);
                var value = item.spec.tags ? item.spec.tags[key] : undefined;
                if (value) {
                    tag = jsxRuntime.exports.jsx("span", { children: value }, void 0);
                }
                return tag;
            },
        });
    });
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.spec.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: featureServices, rowProps: getRowProps }, void 0));
};

var generateEmptyStateSuggestions = function (tagsAggregationData) {
    if (tagsAggregationData) {
        return sortTagsByTotalUsage(tagsAggregationData).map(function (_a) {
            var tagKey = _a[0], recordOfTagValues = _a[1];
            var uniqueValues = Object.keys(recordOfTagValues).length;
            var totalEntries = Object.values(recordOfTagValues).reduce(function (memo, current) {
                return memo + current.length;
            }, 0);
            return {
                suggestion: tagKey,
                description: "".concat(uniqueValues, " unique tag values. ").concat(totalEntries, " total entries."),
            };
        });
    }
    else {
        return [];
    }
};
var generateTagKeySuggestions = function (input, tagsAggregationData) {
    if (tagsAggregationData) {
        return Object.entries(tagsAggregationData)
            .filter(function (_a) {
            var potentialTagKey = _a[0]; _a[1];
            return potentialTagKey.indexOf(input) >= 0;
        })
            .map(function (_a) {
            var potentialTagKey = _a[0], summary = _a[1];
            var tagValueVariants = Object.entries(summary);
            return {
                suggestion: potentialTagKey,
                description: "".concat(tagValueVariants.length, " different tag values"),
            };
        });
    }
    else {
        return [];
    }
};
var generateTagValueSuggestions = function (input, tagsAggregationData) {
    if (tagsAggregationData) {
        var _a = input.split(":"), currentTagKey = _a[0], currentTagValue_1 = _a[1];
        var entriesWithTagKey = tagsAggregationData[currentTagKey];
        var summarizeCallback = function (entry) {
            var potentialTagKey = entry[0];
            var summary = entry[1];
            return {
                suggestion: potentialTagKey,
                description: "".concat(summary.length, " entries"),
            };
        };
        if (entriesWithTagKey) {
            if (currentTagValue_1 && currentTagValue_1.length > 0) {
                return Object.entries(entriesWithTagKey)
                    .filter(function (_a) {
                    var potentialTagValue = _a[0]; _a[1];
                    return (potentialTagValue.indexOf(currentTagValue_1) >= 0 // &&
                    // potentialTagValue !== currentTagValue // Don't show exact matches, b/c that means we probably already selected it
                    );
                })
                    .map(summarizeCallback);
            }
            else {
                return Object.entries(entriesWithTagKey).map(summarizeCallback);
            }
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
};
function getAllSpacePositions(s) {
    var indices = [];
    while (s.indexOf(" ", indices.length ? indices[indices.length - 1] + 1 : 0) !==
        -1 &&
        indices.length < 100) {
        var position = indices[indices.length - 1] || 0;
        var index = s.indexOf(" ", position + 1);
        indices.push(index);
    }
    return indices;
}
var parseTokenInput = function (cursorPosition, tagsString) {
    // Get where the spaces in the tagString, plus a start and end value
    // e.g. "A:a B:b" would return
    // [0, 3, 7]
    var chunks = tagsString.split(" ");
    var allSpacePositions = [0]
        .concat(getAllSpacePositions(tagsString))
        .concat(tagsString.length + 1);
    var tokenInFocusIndex = 0;
    if (cursorPosition) {
        tokenInFocusIndex = allSpacePositions.findIndex(function (value, index) {
            return (cursorPosition >= value &&
                cursorPosition <= allSpacePositions[index + 1]);
        });
    }
    var currentTag = chunks[tokenInFocusIndex] || "";
    return {
        currentTag: currentTag,
        chunks: chunks,
        tokenInFocusIndex: tokenInFocusIndex,
    };
};
var useSearchQuery = function () {
    var _a = useQueryParam("q", StringParam), query = _a[0], setQuery = _a[1];
    var searchString = query || "";
    var searchTokens = searchString.split(" ").filter(function (t) { return t.length >= 3; });
    var setSearchString = function (d) {
        setQuery(d);
    };
    return {
        searchString: searchString,
        searchTokens: searchTokens,
        setSearchString: setSearchString,
    };
};
var useTagsWithSuggestions = function (tagsAggregationData) {
    var _a = useQueryParam("tags", StringParam), rawtagsString = _a[0], setTagsStringParam = _a[1];
    var tagsString = rawtagsString || "";
    // Spaces in the beginning of the string
    // really messes with parseTokenInput(). Just prevent it.
    var setTagsString = function (s) {
        setTagsStringParam(s.trimStart());
    };
    var _b = useState(undefined), cursorPosition = _b[0], setCursor = _b[1];
    var setCursorPosition = function (position) {
        setCursor(position);
    };
    // Parse input into tokens, and detect which token
    // we are focused on given the current cursor position
    var _c = parseTokenInput(cursorPosition, tagsString), chunks = _c.chunks, tokenInFocusIndex = _c.tokenInFocusIndex, currentTag = _c.currentTag;
    var suggestionMode = currentTag.indexOf(":") < 0 ? "KEY" : "VALUE";
    var tagSuggestions = [];
    if (tagsAggregationData) {
        if (currentTag.length > 0) {
            if (suggestionMode === "KEY") {
                tagSuggestions = generateTagKeySuggestions(currentTag, tagsAggregationData);
            }
            else {
                tagSuggestions = generateTagValueSuggestions(currentTag, tagsAggregationData);
            }
        }
        else {
            // Current Tag is empty
            tagSuggestions = generateEmptyStateSuggestions(tagsAggregationData);
        }
    }
    // Helper method for accepting suggestions
    var setSuggestionAtPositionInTagsString = function (suggestion, position) {
        var nextTagsTokens = chunks.slice(0);
        nextTagsTokens[position] = suggestion;
        setTagsString(nextTagsTokens.join(" "));
    };
    var acceptSuggestion = function (suggestion) {
        if (suggestionMode === "KEY") {
            var newKeyText = suggestion.suggestion + ":";
            setSuggestionAtPositionInTagsString(newKeyText, tokenInFocusIndex);
        }
        else {
            var currentTagKey = currentTag.split(":")[0];
            var newTagText = "".concat(currentTagKey, ":") + suggestion.suggestion;
            setSuggestionAtPositionInTagsString(newTagText, tokenInFocusIndex);
        }
    };
    var tagKeysSet = new Set();
    var tagTokens = chunks
        .filter(function (chunk) {
        return chunk.indexOf(":") > 0;
    })
        .map(function (chunk) {
        var parts = chunk.split(":");
        tagKeysSet.add(parts[0]);
        return {
            key: parts[0],
            value: parts[1],
        };
    });
    var tagTokenGroups = tagTokens.reduce(function (memo, current) {
        if (memo[current.key]) {
            memo[current.key].push(current.value);
        }
        else {
            memo[current.key] = [current.value];
        }
        return memo;
    }, {});
    return {
        setCursorPosition: setCursorPosition,
        currentTag: currentTag,
        tagsString: tagsString,
        setTagsString: setTagsString,
        tagTokens: tagTokens,
        tagTokenGroups: tagTokenGroups,
        tagKeysSet: tagKeysSet,
        suggestionMode: suggestionMode,
        tagSuggestions: tagSuggestions,
        acceptSuggestion: acceptSuggestion,
    };
};

var FeatureServiceIndexEmptyState = function () {
    return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: FeastIconBlue, title: jsxRuntime.exports.jsx("h2", { children: "There are no feature services" }, void 0), body: jsxRuntime.exports.jsx("p", { children: "This project does not have any Feature Services. Learn more about creating Feature Services in Feast Docs." }, void 0), actions: jsxRuntime.exports.jsx(EuiButton, __assign$2({ onClick: function () {
                window.open("https://docs.feast.dev/getting-started/concepts/feature-service", "_blank");
            } }, { children: "Open Feature Services Docs" }), void 0), footer: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xxs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Want to learn more?" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiLink, __assign$2({ href: "https://docs.feast.dev/", target: "_blank" }, { children: "Read Feast documentation" }), void 0)] }, void 0) }, void 0));
};

// Helper Functions
var suggestionFormatter = function (item) {
    return {
        label: item.suggestion,
        suggestion: item,
        showIcons: false,
        append: jsxRuntime.exports.jsx("span", { children: item.description }, void 0),
    };
};
var getCursorPosition = function (inputNode) {
    var _a;
    return ((_a = inputNode.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || undefined;
};
var computePlaceholderText = function (tagSuggestions) {
    return !tagSuggestions
        ? ""
        : "e.g. " +
            tagSuggestions
                .slice(0, 2)
                .map(function (s) { return "\"".concat(s.suggestion, "\""); })
                .join(" or ");
};
var generateResultsCount = function (currentTag, suggestionMode, tagSuggestions) {
    var resultsCount = undefined;
    var currentTagIsEmpty = currentTag.length <= 0;
    var currentTagHasNoValue = currentTag.split(":")[1] === "";
    var operatingWord = currentTagIsEmpty || currentTagHasNoValue ? "possible" : "matching";
    var counterWord = suggestionMode === "KEY" ? "key" : "value";
    if (tagSuggestions.length > 0) {
        var isPlural = tagSuggestions.length > 1 ? "s" : "";
        resultsCount = (jsxRuntime.exports.jsx("span", { children: "".concat(tagSuggestions.length, " ").concat(operatingWord, " ").concat(counterWord).concat(isPlural) }, void 0));
    }
    return resultsCount;
};
// Hooks
var useInputHack = function (setTagsString, setCursorPosition) {
    // HACK --- route around the lack of onChange
    // See: https://github.com/elastic/eui/issues/5651
    var inputNode = useRef(null);
    useEffect(function () {
        var cb = function () {
            var _a;
            var s = ((_a = inputNode.current) === null || _a === void 0 ? void 0 : _a.value) || "";
            setTagsString(s);
            setCursorPosition(getCursorPosition(inputNode));
        };
        var copiedNode = inputNode.current;
        if (copiedNode) {
            copiedNode.addEventListener("input", cb);
        }
        return function () {
            if (copiedNode) {
                copiedNode.removeEventListener("input", cb);
            }
        };
    }, [inputNode, setTagsString, setCursorPosition]);
    return inputNode;
};
var useSelectableOptions = function (tagSuggestions, acceptSuggestion) {
    var _a = useState(tagSuggestions ? tagSuggestions.map(suggestionFormatter) : []), options = _a[0], setOptions = _a[1];
    var onSelectableChange = function (options) {
        // Get the thing that just got "checked"
        var clickedItem = options.find(function (option) { return option.checked === "on"; });
        if (clickedItem) {
            acceptSuggestion(clickedItem.suggestion);
        }
        setOptions(options);
    };
    useEffect(function () {
        // Update options when new set of suggestions are passed down
        setOptions(tagSuggestions.map(suggestionFormatter));
    }, [tagSuggestions, setOptions]);
    return {
        options: options,
        onSelectableChange: onSelectableChange,
    };
};
var TagSearch = function (_a) {
    var currentTag = _a.currentTag, tagsString = _a.tagsString, setTagsString = _a.setTagsString, acceptSuggestion = _a.acceptSuggestion, tagSuggestions = _a.tagSuggestions, suggestionMode = _a.suggestionMode, setCursorPosition = _a.setCursorPosition;
    // HACK --- route around the lack of onChange
    var inputNode = useInputHack(setTagsString, setCursorPosition);
    // Handling Suggestion Options
    var _b = useSelectableOptions(tagSuggestions, // Gets turned into options
    acceptSuggestion // Get triggered when an option is selected
    ), options = _b.options, onSelectableChange = _b.onSelectableChange;
    // Using EuiInputPopover: https://elastic.github.io/eui/#/layout/popover
    var _c = useState(false), hasFocus = _c[0], setHasFocus = _c[1];
    // Props for EuiFieldSearch
    var searchProps = {
        value: tagsString,
        inputRef: function (node) {
            // HTMLInputElement is hooked into useInputHack
            inputNode.current = node;
        },
        onfocus: function () {
            setHasFocus(true);
        },
        fullWidth: true,
        placeholder: computePlaceholderText(tagSuggestions),
    };
    var resultsCount = generateResultsCount(currentTag, suggestionMode, tagSuggestions);
    return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Filter by Tags" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiSelectable, __assign$2({ onFocus: function () {
                    setHasFocus(true);
                }, onBlur: function () {
                    setHasFocus(false);
                }, searchable: true, isPreFiltered: true, searchProps: searchProps, "aria-label": "Filter by ", onChange: onSelectableChange, options: options, singleSelection: true, listProps: { bordered: true } }, { children: function (list, search) {
                    return (jsxRuntime.exports.jsxs(EuiInputPopover, __assign$2({ fullWidth: true, disableFocusTrap: true, input: jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: search }, void 0), isOpen: hasFocus, closePopover: function () {
                            setHasFocus(false);
                        } }, { children: [resultsCount, list] }), void 0));
                } }), void 0)] }, void 0));
};

var useLoadFeatureServices = function () {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.objects.featureServices;
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};
var shouldIncludeFSsGivenTokenGroups = function (entry, tagTokenGroups) {
    return Object.entries(tagTokenGroups).every(function (_a) {
        var key = _a[0], values = _a[1];
        var entryTagValue = entry.spec.tags ? entry.spec.tags[key] : undefined;
        if (entryTagValue) {
            return values.every(function (value) {
                return value.length > 0 ? entryTagValue.indexOf(value) >= 0 : true; // Don't filter if the string is empty
            });
        }
        else {
            return false;
        }
    });
};
var filterFn$1 = function (data, filterInput) {
    var filteredByTags = data;
    if (Object.keys(filterInput.tagTokenGroups).length) {
        filteredByTags = data.filter(function (entry) {
            return shouldIncludeFSsGivenTokenGroups(entry, filterInput.tagTokenGroups);
        });
    }
    if (filterInput.searchTokens.length) {
        return filteredByTags.filter(function (entry) {
            return filterInput.searchTokens.find(function (token) {
                return token.length >= 3 && entry.spec.name.indexOf(token) >= 0;
            });
        });
    }
    return filteredByTags;
};
var Index$1 = function () {
    var _a = useLoadFeatureServices(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    var tagAggregationQuery = useFeatureServiceTagsAggregation();
    useDocumentTitle("Feature Services | Feast");
    var _b = useSearchQuery(), searchString = _b.searchString, searchTokens = _b.searchTokens, setSearchString = _b.setSearchString;
    var _c = useTagsWithSuggestions(tagAggregationQuery.data), currentTag = _c.currentTag, tagsString = _c.tagsString, tagTokenGroups = _c.tagTokenGroups, tagKeysSet = _c.tagKeysSet, tagSuggestions = _c.tagSuggestions, suggestionMode = _c.suggestionMode, setTagsString = _c.setTagsString, acceptSuggestion = _c.acceptSuggestion, setCursorPosition = _c.setCursorPosition;
    var filterResult = data
        ? filterFn$1(data, { tagTokenGroups: tagTokenGroups, searchTokens: searchTokens })
        : data;
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: FeatureServiceIcon32, pageTitle: "Feature Services" }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [isLoading && (jsxRuntime.exports.jsxs("p", { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isError && jsxRuntime.exports.jsx("p", { children: "We encountered an error while loading." }, void 0), isSuccess && !data && jsxRuntime.exports.jsx(FeatureServiceIndexEmptyState, {}, void 0), isSuccess && filterResult && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsxs(EuiFlexItem, __assign$2({ grow: 2 }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Search" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiFieldSearch, { value: searchString, fullWidth: true, onChange: function (e) {
                                                        setSearchString(e.target.value);
                                                    } }, void 0)] }), void 0), jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: 3 }, { children: jsxRuntime.exports.jsx(TagSearch, { currentTag: currentTag, tagsString: tagsString, setTagsString: setTagsString, acceptSuggestion: acceptSuggestion, tagSuggestions: tagSuggestions, suggestionMode: suggestionMode, setCursorPosition: setCursorPosition }, void 0) }), void 0)] }, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsx(FeatureServiceListingTable, { featureServices: filterResult, tagKeysSet: tagKeysSet }, void 0)] }, void 0))] }, void 0) }), void 0)] }, void 0));
};

var FeatureViewListingTable = function (_a) {
    var tagKeysSet = _a.tagKeysSet, featureViews = _a.featureViews;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Name",
            field: "name",
            sortable: true,
            render: function (name, item) {
                return (jsxRuntime.exports.jsxs(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/feature-view/").concat(name), to: "/p/".concat(projectName, "/feature-view/").concat(name) }, { children: [name, " ", item.type === "ondemand" && jsxRuntime.exports.jsx(EuiBadge, { children: "ondemand" }, void 0)] }), void 0));
            },
        },
        {
            name: "# of Features",
            field: "features",
            sortable: true,
            render: function (features) {
                return features.length;
            },
        },
    ];
    // Add columns if they come up in search
    tagKeysSet.forEach(function (key) {
        columns.push({
            name: key,
            render: function (item) {
                var tag = jsxRuntime.exports.jsx("span", { children: "n/a" }, void 0);
                if (item.type === "regular") {
                    var value = item.object.spec.tags
                        ? item.object.spec.tags[key]
                        : undefined;
                    if (value) {
                        tag = jsxRuntime.exports.jsx("span", { children: value }, void 0);
                    }
                }
                return tag;
            },
        });
    });
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: featureViews, rowProps: getRowProps }, void 0));
};

var FeatureViewIndexEmptyState = function () {
    return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: FeastIconBlue, title: jsxRuntime.exports.jsx("h2", { children: "There are no feature views" }, void 0), body: jsxRuntime.exports.jsx("p", { children: "This project does not have any Feature Views. Learn more about creating Feature Views in Feast Docs." }, void 0), actions: jsxRuntime.exports.jsx(EuiButton, __assign$2({ onClick: function () {
                window.open("https://docs.feast.dev/getting-started/concepts/feature-view", "_blank");
            } }, { children: "Open Feature View Docs" }), void 0), footer: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xxs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Want to learn more?" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiLink, __assign$2({ href: "https://docs.feast.dev/", target: "_blank" }, { children: "Read Feast documentation" }), void 0)] }, void 0) }, void 0));
};

var useLoadFeatureViews = function () {
    var registryUrl = useContext(RegistryPathContext);
    var registryQuery = useLoadRegistry(registryUrl);
    var data = registryQuery.data === undefined
        ? undefined
        : registryQuery.data.mergedFVList;
    return __assign$2(__assign$2({}, registryQuery), { data: data });
};
var shouldIncludeFVsGivenTokenGroups = function (entry, tagTokenGroups) {
    return Object.entries(tagTokenGroups).every(function (_a) {
        var key = _a[0], values = _a[1];
        var entryTagValue = entry.object.spec.tags
            ? entry.object.spec.tags[key]
            : undefined;
        if (entryTagValue) {
            return values.every(function (value) {
                return value.length > 0 ? entryTagValue.indexOf(value) >= 0 : true; // Don't filter if the string is empty
            });
        }
        else {
            return false;
        }
    });
};
var filterFn = function (data, filterInput) {
    var filteredByTags = data;
    if (Object.keys(filterInput.tagTokenGroups).length) {
        filteredByTags = data.filter(function (entry) {
            if (entry.type === "regular") {
                return shouldIncludeFVsGivenTokenGroups(entry, filterInput.tagTokenGroups);
            }
            else {
                return false; // ODFVs don't have tags yet
            }
        });
    }
    if (filterInput.searchTokens.length) {
        return filteredByTags.filter(function (entry) {
            return filterInput.searchTokens.find(function (token) {
                return token.length >= 3 && entry.name.indexOf(token) >= 0;
            });
        });
    }
    return filteredByTags;
};
var Index = function () {
    var _a = useLoadFeatureViews(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    var tagAggregationQuery = useFeatureViewTagsAggregation();
    useDocumentTitle("Feature Views | Feast");
    var _b = useSearchQuery(), searchString = _b.searchString, searchTokens = _b.searchTokens, setSearchString = _b.setSearchString;
    var _c = useTagsWithSuggestions(tagAggregationQuery.data), currentTag = _c.currentTag, tagsString = _c.tagsString, tagTokenGroups = _c.tagTokenGroups, tagKeysSet = _c.tagKeysSet, tagSuggestions = _c.tagSuggestions, suggestionMode = _c.suggestionMode, setTagsString = _c.setTagsString, acceptSuggestion = _c.acceptSuggestion, setCursorPosition = _c.setCursorPosition;
    var filterResult = data
        ? filterFn(data, { tagTokenGroups: tagTokenGroups, searchTokens: searchTokens })
        : data;
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: FeatureViewIcon32, pageTitle: "Feature Views" }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [isLoading && (jsxRuntime.exports.jsxs("p", { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isError && jsxRuntime.exports.jsx("p", { children: "We encountered an error while loading." }, void 0), isSuccess && (data === null || data === void 0 ? void 0 : data.length) === 0 && jsxRuntime.exports.jsx(FeatureViewIndexEmptyState, {}, void 0), isSuccess && data && data.length > 0 && filterResult && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsxs(EuiFlexItem, __assign$2({ grow: 2 }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Search" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiFieldSearch, { value: searchString, fullWidth: true, onChange: function (e) {
                                                        setSearchString(e.target.value);
                                                    } }, void 0)] }), void 0), jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: 3 }, { children: jsxRuntime.exports.jsx(TagSearch, { currentTag: currentTag, tagsString: tagsString, setTagsString: setTagsString, acceptSuggestion: acceptSuggestion, tagSuggestions: tagSuggestions, suggestionMode: suggestionMode, setCursorPosition: setCursorPosition }, void 0) }), void 0)] }, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsx(FeatureViewListingTable, { tagKeysSet: tagKeysSet, featureViews: filterResult }, void 0)] }, void 0))] }, void 0) }), void 0)] }, void 0));
};

var histogramSchema = z.array(z.object({
    x0: z.number(),
    x1: z.number(),
    count: z.number(),
}));
var numericColumnSummaryStaticsSchema = z.object({
    name: z.string(),
    valueType: z.literal("INT64"),
    sampleValues: z.array(z.number()),
    histogram: histogramSchema.optional(),
    proportionOfZeros: z.number().optional(),
    proportionMissing: z.number().optional(),
    min: z.number().optional(),
    max: z.number().optional(),
});
var stringColumnSummaryStaticsSchema = z.object({
    name: z.string(),
    valueType: z.literal("STRING"),
    sampleValues: z.array(z.string()),
});
var columnsSummaryStatisticsSchema = z.union([
    numericColumnSummaryStaticsSchema,
    stringColumnSummaryStaticsSchema,
]);
var featureViewSummaryStatisticsSchema = z.object({
    columnsSummaryStatistics: z.record(columnsSummaryStatisticsSchema),
});

var useLoadFeatureViewSummaryStatistics = function (featureViewName) {
    var projectName = useParams().projectName;
    var queryKey = "featureViewSummaryStatistics:".concat(featureViewName);
    var url = "/metadata/".concat(projectName, "/featureView/").concat(featureViewName, ".json");
    return useQuery(queryKey, function () {
        return fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (json) {
            var summary = featureViewSummaryStatisticsSchema.parse(json);
            return summary;
        });
    }, {
        staleTime: 15 * 60 * 1000, // Given that we are reading from a registry dump, this seems reasonable for now.
    });
};

function extent(values, valueof) {
  var min;
  var max;

  if (valueof === undefined) {
    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null) {
          if (min === undefined) {
            if (_value >= _value) min = max = _value;
          } else {
            if (min > _value) min = _value;
            if (max < _value) max = _value;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return [min, max];
}

var SparklineHistogram = function (_a) {
    var data = _a.data;
    var width = 100;
    var height = 24;
    var yMax = height - 2;
    var euiTheme = useEuiTheme().euiTheme;
    if (data.length > 0) {
        var x0Extent = extent(data, function (d) { return d.x0; });
        var xScale_1 = scaleLinear()
            .domain(x0Extent)
            .range([0, width - width / data.length]);
        var yExtent = extent(data, function (d) { return d.count; });
        var yScale_1 = scaleLinear().domain(yExtent).range([0, yMax]);
        return (jsxRuntime.exports.jsxs("svg", __assign$2({ width: width, height: height }, { children: [jsxRuntime.exports.jsx("rect", { x: 0, y: height - 1, width: width, height: 1, fill: euiTheme.colors.mediumShade }, void 0), data.map(function (d) {
                    var barHeight = yScale_1(d.count);
                    return (jsxRuntime.exports.jsx("rect", { width: width / data.length, height: barHeight, y: yMax - barHeight, x: xScale_1(d.x0), fill: euiTheme.colors.primary }, d.x0));
                })] }), void 0));
    }
    else {
        return jsxRuntime.exports.jsx(EuiBadge, __assign$2({ color: "warning" }, { children: "histogram n/a" }), void 0);
    }
};

var FeatureFlagsContext = React.createContext({});

var FeaturesList = function (_a) {
    var featureViewName = _a.featureViewName, features = _a.features;
    var enabledFeatureStatistics = useContext(FeatureFlagsContext).enabledFeatureStatistics;
    var _b = useLoadFeatureViewSummaryStatistics(featureViewName), isLoading = _b.isLoading, isError = _b.isError, isSuccess = _b.isSuccess, data = _b.data;
    var columns = [
        { name: "Name", field: "name" },
        {
            name: "Value Type",
            field: "valueType",
        },
    ];
    if (enabledFeatureStatistics) {
        columns.push.apply(columns, [
            {
                name: "Sample",
                field: "",
                render: function (item) {
                    var statistics = isSuccess && data && data.columnsSummaryStatistics[item.name];
                    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [isLoading && jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "s" }, void 0), isError && (jsxRuntime.exports.jsx(EuiBadge, __assign$2({ color: "warning" }, { children: "error loading samples" }), void 0)), statistics && statistics.sampleValues.join(",")] }, void 0));
                },
            },
            {
                name: "Sparklines",
                field: "",
                render: function (item) {
                    var statistics = isSuccess && data && data.columnsSummaryStatistics[item.name];
                    if (statistics &&
                        statistics.valueType === "INT64" &&
                        statistics.histogram) {
                        return jsxRuntime.exports.jsx(SparklineHistogram, { data: statistics.histogram }, void 0);
                    }
                    else {
                        return "";
                    }
                },
            },
        ]);
    }
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: features, rowProps: getRowProps }, void 0));
};

var BatchSourcePropertiesView = function (props) {
    var _a, _b, _c, _d;
    var batchSource = props.batchSource;
    return (jsxRuntime.exports.jsx(React.Fragment, { children: jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: false }, { children: jsxRuntime.exports.jsxs(EuiDescriptionList, { children: [(batchSource.dataSourceClassType || batchSource.type) && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Source Type" }, void 0), batchSource.dataSourceClassType ? (jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.dataSourceClassType.split(".").at(-1) }, void 0)) : batchSource.type ? (jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.type }, void 0)) : ("")] }, void 0)), batchSource.owner && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Owner" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.owner }, void 0)] }, void 0)), batchSource.description && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Description" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.description }, void 0)] }, void 0)), batchSource.fileOptions && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "File URL" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.fileOptions ? batchSource.fileOptions.uri : "" }, void 0)] }, void 0)), ((_a = batchSource.meta) === null || _a === void 0 ? void 0 : _a.latestEventTimestamp) && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Latest Event" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.meta.latestEventTimestamp.toLocaleDateString("en-CA") }, void 0)] }, void 0)), ((_b = batchSource.meta) === null || _b === void 0 ? void 0 : _b.earliestEventTimestamp) && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Earliest Event" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: batchSource.meta.earliestEventTimestamp.toLocaleDateString("en-CA") }, void 0)] }, void 0))] }, void 0) }), void 0), ((_c = batchSource.bigqueryOptions) === null || _c === void 0 ? void 0 : _c.dbtModelSerialized) && (jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: false }, { children: jsxRuntime.exports.jsx(EuiSpacer, { size: "l" }, void 0) }), void 0)), ((_d = batchSource.bigqueryOptions) === null || _d === void 0 ? void 0 : _d.dbtModelSerialized) && (jsxRuntime.exports.jsxs(EuiFlexItem, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Dbt Transformation" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiCodeBlock, __assign$2({ language: "sql", fontSize: "m", paddingSize: "m", isCopyable: true }, { children: batchSource.bigqueryOptions.dbtModelSerialized }), void 0)] }, void 0))] }, void 0) }, void 0));
};

var ConsumingFeatureServicesList = function (_a) {
    var fsNames = _a.fsNames;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Name",
            field: "",
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/feature-service/").concat(name), to: "/p/".concat(projectName, "/feature-service/").concat(name) }, { children: name }), void 0));
            },
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: fsNames, rowProps: getRowProps }, void 0));
};

var whereFSconsumesThisFv$1 = function (fvName) {
    return function (r) {
        return (r.source.name === fvName &&
            r.target.type === FEAST_FCO_TYPES.featureService);
    };
};
var RegularFeatureViewOverviewTab = function (_a) {
    var _b;
    var data = _a.data;
    var navigate = useNavigate();
    var projectName = useParams().projectName;
    var featureViewName = useParams().featureViewName;
    var fvName = featureViewName === undefined ? "" : featureViewName;
    var relationshipQuery = useLoadRelationshipData();
    var fsNames = relationshipQuery.data
        ? relationshipQuery.data.filter(whereFSconsumesThisFv$1(fvName)).map(function (fs) {
            return fs.target.name;
        })
        : [];
    var numOfFs = fsNames.length;
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiFlexGroup, { children: jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { title: "".concat(numOfFs), description: "Consuming Services" }, void 0) }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "l" }, void 0), jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsxs("h3", { children: ["Features (", data.spec.features.length, ")"] }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.features ? (jsxRuntime.exports.jsx(FeaturesList, { featureViewName: data.spec.name, features: data.spec.features }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No features specified on this feature view." }, void 0))] }), void 0) }, void 0), jsxRuntime.exports.jsxs(EuiFlexItem, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, grow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Entities" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.entities ? (jsxRuntime.exports.jsx(EuiFlexGroup, __assign$2({ wrap: true, responsive: false, gutterSize: "xs" }, { children: data.spec.entities.map(function (entity) {
                                            return (jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: false }, { children: jsxRuntime.exports.jsx(EuiBadge, __assign$2({ color: "primary", onClick: function () {
                                                        navigate("/p/".concat(projectName, "/entity/").concat(entity));
                                                    }, onClickAriaLabel: entity, "data-test-sub": "testExample1" }, { children: entity }), void 0) }), entity));
                                        }) }), void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No Entities." }, void 0))] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Consuming Feature Services" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), fsNames.length > 0 ? (jsxRuntime.exports.jsx(ConsumingFeatureServicesList, { fsNames: fsNames }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No services consume this feature view" }, void 0))] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, grow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Tags" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.tags ? (jsxRuntime.exports.jsx(TagsDisplay, { tags: data.spec.tags, createLink: function (key, value) {
                                            return ("/p/".concat(projectName, "/feature-view?") +
                                                encodeSearchQueryString("".concat(key, ":").concat(value)));
                                        }, owner: data.spec.owner, description: data.spec.description }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No Tags specified on this feature view." }, void 0))] }), void 0)] }, void 0)] }, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "l" }, void 0), jsxRuntime.exports.jsx(EuiFlexGroup, { children: jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Batch Source" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(BatchSourcePropertiesView, { batchSource: data.spec.batchSource }, void 0)] }), void 0) }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "l" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Materialization Intervals" }, void 0) }), void 0), jsxRuntime.exports.jsx(React.Fragment, { children: (_b = data.meta.materializationIntervals) === null || _b === void 0 ? void 0 : _b.map(function (interval, i) {
                            return (jsxRuntime.exports.jsxs("p", { children: [interval.startTime.toLocaleDateString("en-CA"), " to", " ", interval.endTime.toLocaleDateString("en-CA")] }, i));
                        }) }, void 0)] }, void 0)] }, void 0));
};

var NumericFeaturesTable = function (_a) {
    var data = _a.data;
    var columns = [
        { name: "Name", field: "name" },
        {
            name: "Value Type",
            field: "valueType",
        },
        {
            name: "Sample",
            render: function (statistics) {
                return (jsxRuntime.exports.jsx(React.Fragment, { children: statistics && statistics.sampleValues.join(",") }, void 0));
            },
        },
        {
            name: "Min/Max",
            render: function (statistics) {
                return statistics.min !== undefined && statistics.max !== undefined
                    ? "".concat(statistics.min, "/").concat(statistics.max)
                    : undefined;
            },
        },
        { name: "zeros", field: "proportionOfZeros" },
        { name: "missing", field: "proportionMissing" },
        {
            name: "Sparklines",
            render: function (statistics) {
                if (statistics && statistics.histogram) {
                    return jsxRuntime.exports.jsx(SparklineHistogram, { data: statistics.histogram }, void 0);
                }
                else {
                    return "";
                }
            },
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.name),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: data, rowProps: getRowProps }, void 0));
};

var FeatureViewSummaryStatisticsTab = function () {
    var featureViewName = useParams().featureViewName;
    if (!featureViewName) {
        throw new Error("Unable to get Feature View Name");
    }
    var _a = useLoadFeatureViewSummaryStatistics(featureViewName), isError = _a.isError, data = _a.data;
    if (isError) {
        return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: "alert", color: "danger", title: jsxRuntime.exports.jsx("h2", { children: "Error loading Statistics" }, void 0), body: jsxRuntime.exports.jsxs("p", { children: ["There was an error loading statistics for", " ", jsxRuntime.exports.jsx("strong", { children: featureViewName }, void 0), ". Please check that statistics have been generated."] }, void 0) }, void 0));
    }
    if (data) {
        var columnsByGroup = Object.entries(data.columnsSummaryStatistics).reduce(function (memo, _a) {
            _a[0]; var columnStatistics = _a[1];
            if (columnStatistics.valueType === "INT64") {
                if (!memo["INT64"]) {
                    memo[columnStatistics.valueType] = [columnStatistics];
                }
                else {
                    memo["INT64"].push(columnStatistics);
                }
            }
            if (columnStatistics.valueType === "STRING") {
                if (!memo["STRING"]) {
                    memo[columnStatistics.valueType] = [columnStatistics];
                }
                else {
                    memo["STRING"].push(columnStatistics);
                }
            }
            return memo;
        }, {});
        return (jsxRuntime.exports.jsx(React.Fragment, { children: columnsByGroup["INT64"] && (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Numeric Columns" }, void 0) }), void 0), jsxRuntime.exports.jsx(NumericFeaturesTable, { data: columnsByGroup["INT64"] }, void 0)] }, void 0)) }, void 0));
    }
    return jsxRuntime.exports.jsx(EuiLoadingContent, { lines: 4 }, void 0);
};

var RegularFeatureInstance = function (_a) {
    var data = _a.data;
    var enabledFeatureStatistics = useContext(FeatureFlagsContext).enabledFeatureStatistics;
    var navigate = useNavigate();
    var customNavigationTabs = useRegularFeatureViewCustomTabs(navigate).customNavigationTabs;
    var tabs = [
        {
            label: "Overview",
            isSelected: useMatchExact(""),
            onClick: function () {
                navigate("");
            },
        },
    ];
    var statisticsIsSelected = useMatchSubpath("statistics");
    if (enabledFeatureStatistics) {
        tabs.push({
            label: "Statistics",
            isSelected: statisticsIsSelected,
            onClick: function () {
                navigate("statistics");
            },
        });
    }
    tabs.push.apply(tabs, customNavigationTabs);
    var TabRoutes = useRegularFeatureViewCustomTabRoutes();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: FeatureViewIcon32, pageTitle: "".concat(data.spec.name), tabs: tabs }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsx(EuiPageContentBody, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsx(Route, { path: "/", element: jsxRuntime.exports.jsx(RegularFeatureViewOverviewTab, { data: data }, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "/statistics", element: jsxRuntime.exports.jsx(FeatureViewSummaryStatisticsTab, {}, void 0) }, void 0), TabRoutes] }, void 0) }, void 0) }), void 0)] }, void 0));
};

var FeatureViewProjectionDisplayPanel = function (_a) {
    var featureViewProjection = _a.featureViewProjection;
    var projectName = useParams().projectName;
    var columns = [
        {
            name: "Column Name",
            field: "name",
        },
        {
            name: "Type",
            field: "valueType",
        },
    ];
    return (jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiText, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("span", { children: "Feature View" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "s" }, { children: jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/feature-view/").concat(featureViewProjection.featureViewName), to: "/p/".concat(projectName, "/feature-view/").concat(featureViewProjection.featureViewName) }, { children: featureViewProjection.featureViewName }), void 0) }), void 0), jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: featureViewProjection.featureColumns }, void 0)] }), void 0));
};

var RequestDataDisplayPanel = function (_a) {
    var requestDataSource = _a.requestDataSource;
    var projectName = useParams().projectName;
    var items = Object.entries(requestDataSource.requestDataOptions.schema).map(function (_a) {
        var key = _a[0], type = _a[1];
        return {
            key: key,
            type: type,
        };
    });
    var columns = [
        {
            name: "Key",
            field: "key",
        },
        {
            name: "Type",
            field: "type",
        },
    ];
    return (jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiText, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("span", { children: "Request Data" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "s" }, { children: jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/data-source/").concat(requestDataSource.name), to: "/p/".concat(projectName, "/data-source/").concat(requestDataSource.name) }, { children: requestDataSource.name }), void 0) }), void 0), jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: items }, void 0)] }), void 0));
};

var whereFSconsumesThisFv = function (fvName) {
    return function (r) {
        return (r.source.name === fvName &&
            r.target.type === FEAST_FCO_TYPES.featureService);
    };
};
var OnDemandFeatureViewOverviewTab = function (_a) {
    var data = _a.data;
    var inputs = Object.entries(data.spec.sources);
    var relationshipQuery = useLoadRelationshipData();
    var fsNames = relationshipQuery.data
        ? relationshipQuery.data
            .filter(whereFSconsumesThisFv(data.spec.name))
            .map(function (fs) {
            return fs.target.name;
        })
        : [];
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiFlexGroup, { children: jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "s" }, { children: jsxRuntime.exports.jsx("h3", { children: "Transformation" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(EuiCodeBlock, __assign$2({ language: "py", fontSize: "m", paddingSize: "m" }, { children: data.spec.userDefinedFunction.body }), void 0)] }), void 0) }, void 0) }, void 0), jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsxs("h3", { children: ["Features (", data.spec.features.length, ")"] }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.features ? (jsxRuntime.exports.jsx(FeaturesList, { featureViewName: data.spec.name, features: data.spec.features }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No Tags sepcified on this feature view." }, void 0))] }), void 0) }, void 0), jsxRuntime.exports.jsxs(EuiFlexItem, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsxs("h3", { children: ["Inputs (", inputs.length, ")"] }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(EuiFlexGroup, __assign$2({ direction: "column" }, { children: inputs.map(function (_a) {
                                            var key = _a[0], inputGroup = _a[1];
                                            if (inputGroup.requestDataSource) {
                                                return (jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(RequestDataDisplayPanel, __assign$2({}, inputGroup), void 0) }, key));
                                            }
                                            if (inputGroup) {
                                                return (jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(FeatureViewProjectionDisplayPanel, __assign$2({}, inputGroup), void 0) }, key));
                                            }
                                            return (jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiCodeBlock, __assign$2({ language: "json", fontSize: "m", paddingSize: "m" }, { children: JSON.stringify(inputGroup, null, 2) }), void 0) }, key));
                                        }) }), void 0)] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Consuming Feature Services" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), fsNames.length > 0 ? (jsxRuntime.exports.jsx(ConsumingFeatureServicesList, { fsNames: fsNames }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No services consume this feature view" }, void 0))] }), void 0)] }, void 0)] }, void 0)] }, void 0));
};

var OnDemandFeatureInstance = function (_a) {
    var data = _a.data;
    var navigate = useNavigate();
    var featureViewName = useParams().featureViewName;
    var customNavigationTabs = useOnDemandFeatureViewCustomTabs(navigate).customNavigationTabs;
    var CustomTabRoutes = useOnDemandFeatureViewCustomTabRoutes();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: FeatureViewIcon32, pageTitle: "".concat(featureViewName), tabs: __spreadArray([
                    {
                        label: "Overview",
                        isSelected: useMatchExact(""),
                        onClick: function () {
                            navigate("");
                        },
                    }
                ], customNavigationTabs, true) }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsx(EuiPageContentBody, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsx(Route, { path: "/", element: jsxRuntime.exports.jsx(OnDemandFeatureViewOverviewTab, { data: data }, void 0) }, void 0), CustomTabRoutes] }, void 0) }, void 0) }), void 0)] }, void 0));
};

var FeatureViewInstance = function () {
    var featureViewName = useParams().featureViewName;
    var fvName = featureViewName === undefined ? "" : featureViewName;
    var _a = useLoadFeatureView(fvName), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    var isEmpty = data === undefined;
    if (isLoading) {
        return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0));
    }
    if (isEmpty) {
        return jsxRuntime.exports.jsxs("p", { children: ["No feature view with name: ", featureViewName] }, void 0);
    }
    if (isError) {
        isError && jsxRuntime.exports.jsxs("p", { children: ["Error loading feature view: ", featureViewName] }, void 0);
    }
    if (isSuccess && !isEmpty) {
        if (data.type === FEAST_FV_TYPES.regular) {
            var fv = data.object;
            return jsxRuntime.exports.jsx(RegularFeatureInstance, { data: fv }, void 0);
        }
        if (data.type === FEAST_FV_TYPES.ondemand) {
            var odfv = data.object;
            return jsxRuntime.exports.jsx(OnDemandFeatureInstance, { data: odfv }, void 0);
        }
    }
    return jsxRuntime.exports.jsx("p", { children: "No Data So Sad" }, void 0);
};

var FeaturesInServiceList = function (_a) {
    var featureViews = _a.featureViews;
    var projectName = useParams().projectName;
    z.object({
        featureViewName: z.string(),
        featureColumnName: z.string(),
        valueType: z.nativeEnum(FEAST_FEATURE_VALUE_TYPES),
    });
    var items = [];
    featureViews.forEach(function (featureView) {
        featureView.featureColumns.forEach(function (featureColumn) {
            var row = {
                featureViewName: featureView.featureViewName,
                featureColumnName: featureColumn.name,
                valueType: featureColumn.valueType,
            };
            items.push(row);
        });
    });
    var columns = [
        {
            name: "Feature View",
            field: "featureViewName",
            render: function (name) {
                return (jsxRuntime.exports.jsx(EuiCustomLink, __assign$2({ href: "/p/".concat(projectName, "/feature-view/").concat(name), to: "/p/".concat(projectName, "/feature-view/").concat(name) }, { children: name }), void 0));
            },
        },
        {
            name: "Feature Column",
            field: "featureColumnName",
        },
        {
            name: "Value Type",
            field: "valueType",
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.featureViewName),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: items, rowProps: getRowProps }, void 0));
};

var FeatureServiceOverviewTab = function () {
    var _a = useParams(), featureServiceName = _a.featureServiceName, projectName = _a.projectName;
    var fsName = featureServiceName === undefined ? "" : featureServiceName;
    var _b = useLoadFeatureService(fsName), isLoading = _b.isLoading, isSuccess = _b.isSuccess, isError = _b.isError, data = _b.data, entities = _b.entities;
    var isEmpty = data === undefined;
    var numFeatures = 0;
    var numFeatureViews = 0;
    if (data) {
        data.spec.features.forEach(function (featureView) {
            numFeatureViews += 1;
            numFeatures += featureView.featureColumns.length;
        });
    }
    var navigate = useNavigate();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [isLoading && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isEmpty && jsxRuntime.exports.jsxs("p", { children: ["No feature service with name: ", featureServiceName] }, void 0), isError && jsxRuntime.exports.jsxs("p", { children: ["Error loading feature service: ", featureServiceName] }, void 0), isSuccess && data && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsxs(EuiFlexGroup, __assign$2({ alignItems: "center" }, { children: [jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: false }, { children: jsxRuntime.exports.jsx(EuiStat, { title: "".concat(numFeatures), description: "Total Features" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiTextAlign, __assign$2({ textAlign: "center" }, { children: jsxRuntime.exports.jsx("p", { children: "from" }, void 0) }), void 0) }, void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { title: "".concat(numFeatureViews), description: "Feature Views" }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiStat, { title: "".concat(data.meta.createdTimestamp.toLocaleDateString("en-CA")), description: "Created" }, void 0) }, void 0)] }), void 0), jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: 2 }, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Features" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.features ? (jsxRuntime.exports.jsx(FeaturesInServiceList, { featureViews: data.spec.features }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No features specified for this feature service." }, void 0))] }), void 0) }), void 0), jsxRuntime.exports.jsxs(EuiFlexItem, __assign$2({ grow: 1 }, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, grow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Tags" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.tags ? (jsxRuntime.exports.jsx(TagsDisplay, { tags: data.spec.tags, createLink: function (key, value) {
                                                    return ("/p/".concat(projectName, "/feature-service?") +
                                                        encodeSearchQueryString("".concat(key, ":").concat(value)));
                                                } }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No Tags specified on this feature service." }, void 0))] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Entities" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), entities ? (jsxRuntime.exports.jsx(EuiFlexGroup, __assign$2({ wrap: true, responsive: false, gutterSize: "xs" }, { children: entities.map(function (entity) {
                                                    return (jsxRuntime.exports.jsx(EuiFlexItem, __assign$2({ grow: false }, { children: jsxRuntime.exports.jsx(EuiBadge, __assign$2({ color: "primary", onClick: function () {
                                                                navigate("/p/".concat(projectName, "/entity/").concat(entity.name));
                                                            }, onClickAriaLabel: entity.name, "data-test-sub": "testExample1" }, { children: entity.name }), void 0) }), entity.name));
                                                }) }), void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No Entities." }, void 0))] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "All Feature Views" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.spec.features.length > 0 ? (jsxRuntime.exports.jsx(FeatureViewEdgesList, { fvNames: data.spec.features.map(function (f) {
                                                    return f.featureViewName;
                                                }) }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No feature views in this feature service" }, void 0))] }), void 0)] }), void 0)] }, void 0)] }, void 0))] }, void 0));
};

var FeatureServiceInstance = function () {
    var navigate = useNavigate();
    var featureServiceName = useParams().featureServiceName;
    useDocumentTitle("".concat(featureServiceName, " | Feature Service | Feast"));
    var customNavigationTabs = useFeatureServiceCustomTabs(navigate).customNavigationTabs;
    var CustomTabRoutes = useFeatureServiceCustomTabRoutes();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: FeatureServiceIcon32, pageTitle: "Feature Service: ".concat(featureServiceName), tabs: __spreadArray([
                    {
                        label: "Overview",
                        isSelected: useMatchExact(""),
                        onClick: function () {
                            navigate("");
                        },
                    }
                ], customNavigationTabs, true) }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsx(EuiPageContentBody, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsx(Route, { path: "/", element: jsxRuntime.exports.jsx(FeatureServiceOverviewTab, {}, void 0) }, void 0), CustomTabRoutes] }, void 0) }, void 0) }), void 0)] }, void 0));
};

var DataSourceRawData = function () {
    var dataSourceName = useParams().dataSourceName;
    var dsName = dataSourceName === undefined ? "" : dataSourceName;
    var _a = useLoadDataSource(dsName), isSuccess = _a.isSuccess, data = _a.data;
    return isSuccess && data ? (jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: jsxRuntime.exports.jsx("pre", { children: JSON.stringify(data, null, 2) }, void 0) }), void 0)) : (jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: "No data so sad" }), void 0));
};

var RequestDataSourceSchemaTable = function (_a) {
    var fields = _a.fields;
    console.log(fields);
    var columns = [
        {
            name: "Field",
            field: "fieldName",
        },
        {
            name: "Value Type",
            field: "valueType",
        },
    ];
    var getRowProps = function (item) {
        return {
            "data-test-subj": "row-".concat(item.fieldName),
        };
    };
    return (jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: fields, rowProps: getRowProps }, void 0));
};

var DataSourceOverviewTab = function () {
    var dataSourceName = useParams().dataSourceName;
    var dsName = dataSourceName === undefined ? "" : dataSourceName;
    var _a = useLoadDataSource(dsName), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data, consumingFeatureViews = _a.consumingFeatureViews;
    var isEmpty = data === undefined;
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [isLoading && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isEmpty && jsxRuntime.exports.jsxs("p", { children: ["No data source with name: ", dataSourceName] }, void 0), isError && jsxRuntime.exports.jsxs("p", { children: ["Error loading data source: ", dataSourceName] }, void 0), isSuccess && data && (jsxRuntime.exports.jsx(React.Fragment, { children: jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsxs(EuiFlexItem, { children: [jsxRuntime.exports.jsx(EuiFlexGroup, { children: jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Properties" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), data.fileOptions || data.bigqueryOptions ? (jsxRuntime.exports.jsx(BatchSourcePropertiesView, { batchSource: data }, void 0)) : data.type ? (jsxRuntime.exports.jsx(React.Fragment, { children: jsxRuntime.exports.jsxs(EuiDescriptionList, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Source Type" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.type }, void 0)] }, void 0) }, void 0)) : ("")] }), void 0) }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsx(EuiFlexGroup, { children: jsxRuntime.exports.jsx(EuiFlexItem, { children: data.requestDataOptions ? (jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Request Source Schema" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(RequestDataSourceSchemaTable, { fields: data.requestDataOptions.schema.map(function (obj) {
                                                        return {
                                                            fieldName: obj.name,
                                                            valueType: obj.valueType,
                                                        };
                                                    }) }, void 0)] }), void 0)) : ("") }, void 0) }, void 0)] }, void 0), jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Consuming Feature Views" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), consumingFeatureViews && consumingFeatureViews.length > 0 ? (jsxRuntime.exports.jsx(FeatureViewEdgesList, { fvNames: consumingFeatureViews.map(function (f) {
                                            return f.target.name;
                                        }) }, void 0)) : (jsxRuntime.exports.jsx(EuiText, { children: "No consuming feature views" }, void 0))] }), void 0) }, void 0)] }, void 0) }, void 0))] }, void 0));
};

var DataSourceDbt = function () {
    var dataSourceName = useParams().dataSourceName;
    var dsName = dataSourceName === undefined ? "" : dataSourceName;
    var _a = useLoadDataSource(dsName), isSuccess = _a.isSuccess, data = _a.data;
    return isSuccess && data && data.bigqueryOptions ? (jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "s" }, { children: jsxRuntime.exports.jsx("h3", { children: "Dbt Transformation" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(EuiCodeBlock, __assign$2({ language: "sql", fontSize: "m", paddingSize: "m", isCopyable: true }, { children: data.bigqueryOptions.dbtModelSerialized }), void 0)] }), void 0)) : (jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: "No data so sad" }), void 0));
};

var DataSourceInstance = function () {
    var _a;
    var navigate = useNavigate();
    var dataSourceName = useParams().dataSourceName;
    useDocumentTitle("".concat(dataSourceName, " | Data Source | Feast"));
    var dsName = dataSourceName === undefined ? "" : dataSourceName;
    var _b = useLoadDataSource(dsName), isSuccess = _b.isSuccess, data = _b.data;
    var tabs = [
        {
            label: "Overview",
            isSelected: useMatchExact(""),
            onClick: function () {
                navigate("");
            },
        },
    ];
    var dbtTab = {
        label: "Dbt Definition",
        isSelected: useMatchSubpath("dbt"),
        onClick: function () {
            navigate("dbt");
        },
    };
    if (isSuccess && ((_a = data === null || data === void 0 ? void 0 : data.bigqueryOptions) === null || _a === void 0 ? void 0 : _a.dbtModelSerialized)) {
        tabs.push(dbtTab);
    }
    var customNavigationTabs = useDataSourceCustomTabs(navigate).customNavigationTabs;
    tabs = tabs.concat(customNavigationTabs);
    var CustomTabRoutes = useDataSourceCustomTabRoutes();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: DataSourceIcon32, pageTitle: "Data Source: ".concat(dataSourceName), tabs: tabs }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsx(EuiPageContentBody, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsx(Route, { path: "/", element: jsxRuntime.exports.jsx(DataSourceOverviewTab, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "/raw-data", element: jsxRuntime.exports.jsx(DataSourceRawData, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "/dbt", element: jsxRuntime.exports.jsx(DataSourceDbt, {}, void 0) }, void 0), CustomTabRoutes] }, void 0) }, void 0) }), void 0)] }, void 0));
};

var RootProjectSelectionPage = function () {
    var _a = useLoadProjectsList(), isLoading = _a.isLoading, isSuccess = _a.isSuccess, data = _a.data;
    var navigate = useNavigate();
    useEffect(function () {
        if (data && data.default) {
            // If a default is set, redirect there.
            navigate("/p/".concat(data.default));
        }
        if (data && data.projects.length === 1) {
            // If there is only one project, redirect there.
            navigate("/p/".concat(data.projects[0].id));
        }
    }, [data, navigate]);
    var projectCards = data === null || data === void 0 ? void 0 : data.projects.map(function (item, index) {
        return (jsxRuntime.exports.jsx(EuiFlexItem, { children: jsxRuntime.exports.jsx(EuiCard, { icon: jsxRuntime.exports.jsx(EuiIcon, { size: "xxl", type: FeastIconBlue }, void 0), title: "".concat(item.name), description: (item === null || item === void 0 ? void 0 : item.description) || "", onClick: function () {
                    navigate("/p/".concat(item.id));
                } }, void 0) }, index));
    });
    return (jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsxs(EuiPageContentBody, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "s" }, { children: jsxRuntime.exports.jsx("h1", { children: "Welcome to Feast" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiText, { children: jsxRuntime.exports.jsx("p", { children: "Select one of the projects." }, void 0) }, void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "m" }, void 0), isLoading && jsxRuntime.exports.jsx(EuiLoadingContent, { lines: 1 }, void 0), isSuccess && (data === null || data === void 0 ? void 0 : data.projects) && (jsxRuntime.exports.jsx(EuiFlexGrid, __assign$2({ columns: 3, gutterSize: "l" }, { children: projectCards }), void 0))] }, void 0) }), void 0));
};

var DatasetFeaturesTable = function (_a) {
    var features = _a.features;
    var columns = [
        {
            name: "Feature",
            field: "featureName",
        },
        {
            name: "Sourc Feature View",
            field: "featureViewName",
        },
    ];
    return jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: features }, void 0);
};

var DatasetJoinKeysTable = function (_a) {
    var joinKeys = _a.joinKeys;
    var columns = [
        {
            name: "Name",
            field: "name",
        },
    ];
    return jsxRuntime.exports.jsx(EuiBasicTable, { columns: columns, items: joinKeys }, void 0);
};

var EntityOverviewTab = function () {
    var datasetName = useParams().datasetName;
    if (!datasetName) {
        throw new Error("Route doesn't have a 'datasetName' part. This route is likely rendering the wrong component.");
    }
    var _a = useLoadEntity(datasetName), isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError, data = _a.data;
    var isEmpty = data === undefined;
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [isLoading && (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiLoadingSpinner, { size: "m" }, void 0), " Loading"] }, void 0)), isEmpty && jsxRuntime.exports.jsxs("p", { children: ["No dataset with name: ", datasetName] }, void 0), isError && jsxRuntime.exports.jsxs("p", { children: ["Error loading dataset: ", datasetName] }, void 0), isSuccess && data && (jsxRuntime.exports.jsx(React.Fragment, { children: jsxRuntime.exports.jsxs(EuiFlexGroup, { children: [jsxRuntime.exports.jsxs(EuiFlexItem, __assign$2({ grow: 2 }, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Features" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(DatasetFeaturesTable, { features: data.spec.features.map(function (joinedName) {
                                                var _a = joinedName.split(":"), featureViewName = _a[0], featureName = _a[1];
                                                return {
                                                    featureViewName: featureViewName,
                                                    featureName: featureName,
                                                };
                                            }) }, void 0)] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h2", { children: "Join Keys" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsx(DatasetJoinKeysTable, { joinKeys: data.spec.joinKeys.map(function (joinKey) {
                                                return { name: joinKey };
                                            }) }, void 0)] }), void 0)] }), void 0), jsxRuntime.exports.jsxs(EuiFlexItem, __assign$2({ grow: 1 }, { children: [jsxRuntime.exports.jsxs(EuiPanel, __assign$2({ hasBorder: true, grow: false }, { children: [jsxRuntime.exports.jsx(EuiTitle, __assign$2({ size: "xs" }, { children: jsxRuntime.exports.jsx("h3", { children: "Properties" }, void 0) }), void 0), jsxRuntime.exports.jsx(EuiHorizontalRule, { margin: "xs" }, void 0), jsxRuntime.exports.jsxs(EuiDescriptionList, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Source Feature Service" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.spec.featureService }, void 0)] }, void 0)] }), void 0), jsxRuntime.exports.jsx(EuiSpacer, { size: "m" }, void 0), jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, grow: false }, { children: jsxRuntime.exports.jsxs(EuiDescriptionList, { children: [jsxRuntime.exports.jsx(EuiDescriptionListTitle, { children: "Created" }, void 0), jsxRuntime.exports.jsx(EuiDescriptionListDescription, { children: data.meta.createdTimestamp.toLocaleDateString("en-CA") }, void 0)] }, void 0) }), void 0)] }), void 0)] }, void 0) }, void 0))] }, void 0));
};

var DatasetExpectationsTab = function () {
    var datasetName = useParams().datasetName;
    if (!datasetName) {
        throw new Error("Unable to get dataset name.");
    }
    var _a = useLoadEntity(datasetName), isSuccess = _a.isSuccess, data = _a.data;
    if (!data || !data.spec.profile) {
        return (jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: "No data so sad" }), void 0));
    }
    var expectationsData;
    try {
        expectationsData = JSON.parse(data.spec.profile);
    }
    catch (e) {
        throw new Error("Unable to parse Expectations Profile: ".concat(e));
    }
    return isSuccess && expectationsData ? (jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: jsxRuntime.exports.jsx("pre", { children: JSON.stringify(expectationsData, null, 2) }, void 0) }), void 0)) : (jsxRuntime.exports.jsx(EuiPanel, __assign$2({ hasBorder: true, hasShadow: false }, { children: "No data so sad" }), void 0));
};

var DatasetInstance = function () {
    var navigate = useNavigate();
    var datasetName = useParams().datasetName;
    useDocumentTitle("".concat(datasetName, " | Saved Datasets | Feast"));
    var customNavigationTabs = useDatasetCustomTabs(navigate).customNavigationTabs;
    var CustomTabRoutes = useDataSourceCustomTabRoutes();
    return (jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsx(EuiPageHeader, { restrictWidth: true, iconType: DatasetIcon32, pageTitle: "Entity: ".concat(datasetName), tabs: __spreadArray([
                    {
                        label: "Overview",
                        isSelected: useMatchExact(""),
                        onClick: function () {
                            navigate("");
                        },
                    },
                    {
                        label: "Expectations",
                        isSelected: useMatchSubpath("expectations"),
                        onClick: function () {
                            navigate("expectations");
                        },
                    }
                ], customNavigationTabs, true) }, void 0), jsxRuntime.exports.jsx(EuiPageContent, __assign$2({ hasBorder: false, hasShadow: false, paddingSize: "none", color: "transparent", borderRadius: "none" }, { children: jsxRuntime.exports.jsx(EuiPageContentBody, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsx(Route, { path: "/", element: jsxRuntime.exports.jsx(EntityOverviewTab, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "/expectations", element: jsxRuntime.exports.jsx(DatasetExpectationsTab, {}, void 0) }, void 0), CustomTabRoutes] }, void 0) }, void 0) }), void 0)] }, void 0));
};

var NoProjectGuard = function () {
    var projectName = useParams().projectName;
    var _a = useLoadProjectsList(), isLoading = _a.isLoading, isError = _a.isError, data = _a.data;
    var projectListContext = useContext(ProjectListContext);
    if (isLoading && !data) {
        return jsxRuntime.exports.jsx(EuiLoadingContent, { lines: 3 }, void 0);
    }
    if (isError) {
        return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: "alert", color: "danger", title: jsxRuntime.exports.jsx("h2", { children: "Error Loading Project List" }, void 0), body: (projectListContext === null || projectListContext === void 0 ? void 0 : projectListContext.isCustom) ? (jsxRuntime.exports.jsxs("p", { children: ["Unable to fetch project list. Check the promise provided to Feast UI in ", jsxRuntime.exports.jsx("code", { children: "projectListPromise" }, void 0), "."] }, void 0)) : (jsxRuntime.exports.jsxs("p", { children: ["Unable to find", jsxRuntime.exports.jsx("code", { children: "projects-list.json" }, void 0), ". Check that you have a project list file defined."] }, void 0)) }, void 0));
    }
    var currentProject = data === null || data === void 0 ? void 0 : data.projects.find(function (project) {
        return project.id === projectName;
    });
    if (currentProject === undefined) {
        return (jsxRuntime.exports.jsx(EuiEmptyPrompt, { iconType: "alert", color: "danger", title: jsxRuntime.exports.jsx("h2", { children: "Error Loading Project" }, void 0), body: jsxRuntime.exports.jsxs(React.Fragment, { children: [jsxRuntime.exports.jsxs("p", { children: ["There is no project with id ", jsxRuntime.exports.jsx("strong", { children: projectName }, void 0), " in", " ", jsxRuntime.exports.jsx("code", { children: "projects-list.json" }, void 0), ". Check that you have the correct project id."] }, void 0), jsxRuntime.exports.jsx("p", { children: "You can also select one of the project in the following list:" }, void 0), jsxRuntime.exports.jsx(ProjectSelector, {}, void 0)] }, void 0) }, void 0));
    }
    return jsxRuntime.exports.jsx(Outlet, {}, void 0);
};

var defaultProjectListPromise = function () {
    return fetch("/projects-list.json", {
        headers: {
            "Content-Type": "application/json",
        },
    }).then(function (res) {
        return res.json();
    });
};
var FeastUISansProviders = function (_a) {
    var feastUIConfigs = _a.feastUIConfigs;
    var projectListContext = (feastUIConfigs === null || feastUIConfigs === void 0 ? void 0 : feastUIConfigs.projectListPromise)
        ? {
            projectsListPromise: feastUIConfigs === null || feastUIConfigs === void 0 ? void 0 : feastUIConfigs.projectListPromise,
            isCustom: true,
        }
        : { projectsListPromise: defaultProjectListPromise(), isCustom: false };
    return (jsxRuntime.exports.jsx(EuiProvider, __assign$2({ colorMode: "light" }, { children: jsxRuntime.exports.jsx(EuiErrorBoundary, { children: jsxRuntime.exports.jsx(TabsRegistryContext.Provider, __assign$2({ value: (feastUIConfigs === null || feastUIConfigs === void 0 ? void 0 : feastUIConfigs.tabsRegistry) || {} }, { children: jsxRuntime.exports.jsx(FeatureFlagsContext.Provider, __assign$2({ value: (feastUIConfigs === null || feastUIConfigs === void 0 ? void 0 : feastUIConfigs.featureFlags) || {} }, { children: jsxRuntime.exports.jsx(ProjectListContext.Provider, __assign$2({ value: projectListContext }, { children: jsxRuntime.exports.jsxs(Routes, { children: [jsxRuntime.exports.jsxs(Route, __assign$2({ path: "/", element: jsxRuntime.exports.jsx(Layout, {}, void 0) }, { children: [jsxRuntime.exports.jsx(Route, { index: true, element: jsxRuntime.exports.jsx(RootProjectSelectionPage, {}, void 0) }, void 0), jsxRuntime.exports.jsxs(Route, __assign$2({ path: "/p/:projectName/*", element: jsxRuntime.exports.jsx(NoProjectGuard, {}, void 0) }, { children: [jsxRuntime.exports.jsx(Route, { index: true, element: jsxRuntime.exports.jsx(ProjectOverviewPage, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "data-source/", element: jsxRuntime.exports.jsx(Index$4, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "data-source/:dataSourceName/*", element: jsxRuntime.exports.jsx(DataSourceInstance, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "feature-view/", element: jsxRuntime.exports.jsx(Index, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "feature-view/:featureViewName/*", element: jsxRuntime.exports.jsx(FeatureViewInstance, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "feature-service/", element: jsxRuntime.exports.jsx(Index$1, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "feature-service/:featureServiceName/*", element: jsxRuntime.exports.jsx(FeatureServiceInstance, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "entity/", element: jsxRuntime.exports.jsx(Index$2, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "entity/:entityName/*", element: jsxRuntime.exports.jsx(EntityInstance, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "data-set/", element: jsxRuntime.exports.jsx(Index$3, {}, void 0) }, void 0), jsxRuntime.exports.jsx(Route, { path: "data-set/:datasetName/*", element: jsxRuntime.exports.jsx(DatasetInstance, {}, void 0) }, void 0)] }), void 0)] }), void 0), jsxRuntime.exports.jsx(Route, { path: "*", element: jsxRuntime.exports.jsx(NoMatch, {}, void 0) }, void 0)] }, void 0) }), void 0) }), void 0) }), void 0) }, void 0) }), void 0));
};

var defaultQueryClient = new QueryClient();
var FeastUI = function (_a) {
    var reactQueryClient = _a.reactQueryClient, feastUIConfigs = _a.feastUIConfigs;
    var queryClient = reactQueryClient || defaultQueryClient;
    var getBasePath = function () {
        var path = window.location.pathname.split("/").filter(function (p) { return p !== ""; });
        var basename = '';
        if (path.length >= 5 && path[0] === "ru")
            basename = "".concat(path[0], "/projects/").concat(path[2], "/development/feature_store");
        if (path.length >= 4 && path[0] !== "ru")
            basename = "/projects/".concat(path[1], "/development/feature_store");
        if (path[0] === 'feast')
            basename = path[1] ? "/".concat(path[0], "/").concat(path[1]) : "/".concat(path[0]);
        return basename;
    };
    return (jsxRuntime.exports.jsx(BrowserRouter, __assign$2({ basename: getBasePath() }, { children: jsxRuntime.exports.jsx(QueryClientProvider, __assign$2({ client: queryClient }, { children: jsxRuntime.exports.jsx(QueryParamProvider, __assign$2({ ReactRouterRoute: RouteAdapter }, { children: jsxRuntime.exports.jsx(FeastUISansProviders, { feastUIConfigs: feastUIConfigs }, void 0) }), void 0) }), void 0) }), void 0));
};

export { FeastUI as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhc3QtdWkubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwiLi4vc3JjL2hhY2tzL1JvdXRlQWRhcHRlci50cyIsIi4uL3NyYy9ob29rcy91c2VEb2N1bWVudFRpdGxlLnRzIiwiLi4vc3JjL3BhcnNlcnMvdHlwZXMudHMiLCIuLi9zcmMvcGFyc2Vycy9mZWFzdEZlYXR1cmVWaWV3cy50cyIsIi4uL3NyYy9wYXJzZXJzL2ZlYXN0RGF0YXNvdXJjZXMudHMiLCIuLi9zcmMvcGFyc2Vycy9mZWFzdEVudGl0aWVzLnRzIiwiLi4vc3JjL3BhcnNlcnMvZmVhc3RGZWF0dXJlU2VydmljZXMudHMiLCIuLi9zcmMvcGFyc2Vycy9mZWFzdFNhdmVkRGF0YXNldC50cyIsIi4uL3NyYy9wYXJzZXJzL2ZlYXN0T0RGVlMudHMiLCIuLi9zcmMvcGFyc2Vycy9mZWFzdFJlZ2lzdHJ5LnRzIiwiLi4vc3JjL3BhcnNlcnMvbWVyZ2VkRlZUeXBlcy50cyIsIi4uL3NyYy9wYXJzZXJzL3BhcnNlRW50aXR5UmVsYXRpb25zaGlwcy50cyIsIi4uL3NyYy9wYXJzZXJzL3BhcnNlSW5kaXJlY3RSZWxhdGlvbnNoaXBzLnRzIiwiLi4vc3JjL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5LnRzIiwiLi4vc3JjL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHQudHMiLCIuLi9zcmMvY29tcG9uZW50cy9PYmplY3RzQ291bnRTdGF0cy50c3giLCIuLi9ub2RlX21vZHVsZXMvc2VyaWFsaXplLXF1ZXJ5LXBhcmFtcy9lc20vd2l0aERlZmF1bHQuanMiLCIuLi9ub2RlX21vZHVsZXMvc2VyaWFsaXplLXF1ZXJ5LXBhcmFtcy9lc20vc2VyaWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NlcmlhbGl6ZS1xdWVyeS1wYXJhbXMvZXNtL3VwZGF0ZUxvY2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NlcmlhbGl6ZS1xdWVyeS1wYXJhbXMvZXNtL2VuY29kZVF1ZXJ5UGFyYW1zLmpzIiwiLi4vc3JjL2hvb2tzL2VuY29kZVNlYXJjaFF1ZXJ5U3RyaW5nLnRzIiwiLi4vc3JjL2hvb2tzL3VzZVRhZ3NBZ2dyZWdhdGlvbi50cyIsIi4uL3NyYy9ob29rcy91c2VGQ09FeHBsb3JlU3VnZ2VzdGlvbnMudHMiLCIuLi9zcmMvY29tcG9uZW50cy9FeHBsb3JlUGFuZWwudHN4IiwiLi4vc3JjL3BhZ2VzL1Byb2plY3RPdmVydmlld1BhZ2UudHN4IiwiLi4vc3JjL2NvbnRleHRzL1Byb2plY3RMaXN0Q29udGV4dC50cyIsIi4uL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWxlY3Rvci50c3giLCIuLi9zcmMvaG9va3MvdXNlTWF0Y2hTdWJwYXRoLnRzIiwiLi4vc3JjL2dyYXBoaWNzL0RhdGFTb3VyY2VJY29uLnRzeCIsIi4uL3NyYy9ncmFwaGljcy9FbnRpdHlJY29uLnRzeCIsIi4uL3NyYy9ncmFwaGljcy9GZWF0dXJlVmlld0ljb24udHN4IiwiLi4vc3JjL2dyYXBoaWNzL0ZlYXR1cmVTZXJ2aWNlSWNvbi50c3giLCIuLi9zcmMvZ3JhcGhpY3MvRGF0YXNldEljb24udHN4IiwiLi4vc3JjL3BhZ2VzL1NpZGViYXIudHN4IiwiLi4vc3JjL2dyYXBoaWNzL0ZlYXN0V29yZE1hcmsudHN4IiwiLi4vc3JjL3BhZ2VzL0xheW91dC50c3giLCIuLi9zcmMvcGFnZXMvTm9NYXRjaC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9FdWlDdXN0b21MaW5rLmpzeCIsIi4uL3NyYy9wYWdlcy9kYXRhLXNvdXJjZXMvRGF0YVNvdXJjZXNMaXN0aW5nVGFibGUudHN4IiwiLi4vc3JjL2dyYXBoaWNzL0ZlYXN0SWNvbkJsdWUudHN4IiwiLi4vc3JjL3BhZ2VzL2RhdGEtc291cmNlcy9EYXRhU291cmNlSW5kZXhFbXB0eVN0YXRlLnRzeCIsIi4uL3NyYy9wYWdlcy9kYXRhLXNvdXJjZXMvSW5kZXgudHN4IiwiLi4vc3JjL3BhZ2VzL3NhdmVkLWRhdGEtc2V0cy9EYXRhc2V0c0xpc3RpbmdUYWJsZS50c3giLCIuLi9zcmMvcGFnZXMvc2F2ZWQtZGF0YS1zZXRzL0RhdGFzZXRzSW5kZXhFbXB0eVN0YXRlLnRzeCIsIi4uL3NyYy9wYWdlcy9zYXZlZC1kYXRhLXNldHMvSW5kZXgudHN4IiwiLi4vc3JjL3F1ZXJpZXMvdXNlTG9hZFJlbGF0aW9uc2hpcHNEYXRhLnRzIiwiLi4vc3JjL3BhZ2VzL2VudGl0aWVzL3VzZUZlYXR1cmVWaWV3RWRnZXNCeUVudGl0eS50cyIsIi4uL3NyYy9wYWdlcy9lbnRpdGllcy9FbnRpdGllc0xpc3RpbmdUYWJsZS50c3giLCIuLi9zcmMvcGFnZXMvZW50aXRpZXMvRW50aXR5SW5kZXhFbXB0eVN0YXRlLnRzeCIsIi4uL3NyYy9wYWdlcy9lbnRpdGllcy9JbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWdzRGlzcGxheS50c3giLCIuLi9zcmMvcGFnZXMvZW50aXRpZXMvRmVhdHVyZVZpZXdFZGdlc0xpc3QudHN4IiwiLi4vc3JjL3BhZ2VzL2VudGl0aWVzL3VzZUxvYWRFbnRpdHkudHMiLCIuLi9zcmMvcGFnZXMvZW50aXRpZXMvRW50aXR5T3ZlcnZpZXdUYWIudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvdXNlTG9hZEZlYXR1cmVWaWV3LnRzIiwiLi4vc3JjL3V0aWxzL2N1c3RvbS10YWJzL1JlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYkxvYWRpbmdXcmFwcGVyLnRzeCIsIi4uL3NyYy91dGlscy9jdXN0b20tdGFicy9PbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXIudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtc2VydmljZXMvdXNlTG9hZEZlYXR1cmVTZXJ2aWNlLnRzIiwiLi4vc3JjL3V0aWxzL2N1c3RvbS10YWJzL0ZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXIudHN4IiwiLi4vc3JjL3BhZ2VzL2RhdGEtc291cmNlcy91c2VMb2FkRGF0YVNvdXJjZS50cyIsIi4uL3NyYy91dGlscy9jdXN0b20tdGFicy9EYXRhU291cmNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXIudHN4IiwiLi4vc3JjL3V0aWxzL2N1c3RvbS10YWJzL0VudGl0eUN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyLnRzeCIsIi4uL3NyYy9wYWdlcy9zYXZlZC1kYXRhLXNldHMvdXNlTG9hZERhdGFzZXQudHMiLCIuLi9zcmMvY3VzdG9tLXRhYnMvVGFic1JlZ2lzdHJ5Q29udGV4dC50c3giLCIuLi9zcmMvcGFnZXMvZW50aXRpZXMvRW50aXR5SW5zdGFuY2UudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtc2VydmljZXMvRmVhdHVyZVNlcnZpY2VMaXN0aW5nVGFibGUudHN4IiwiLi4vc3JjL2hvb2tzL3VzZVNlYXJjaElucHV0V2l0aFRhZ3MudHMiLCIuLi9zcmMvcGFnZXMvZmVhdHVyZS1zZXJ2aWNlcy9GZWF0dXJlU2VydmljZUluZGV4RW1wdHlTdGF0ZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWdTZWFyY2gudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtc2VydmljZXMvSW5kZXgudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvRmVhdHVyZVZpZXdMaXN0aW5nVGFibGUudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvRmVhdHVyZVZpZXdJbmRleEVtcHR5U3RhdGUudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvSW5kZXgudHN4IiwiLi4vc3JjL3BhcnNlcnMvZmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljcy50cyIsIi4uL3NyYy9xdWVyaWVzL3VzZUxvYWRGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9leHRlbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9TcGFya2xpbmVIaXN0b2dyYW0udHN4IiwiLi4vc3JjL2NvbnRleHRzL0ZlYXR1cmVGbGFnc0NvbnRleHQudHMiLCIuLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlc0xpc3REaXNwbGF5LnRzeCIsIi4uL3NyYy9wYWdlcy9kYXRhLXNvdXJjZXMvQmF0Y2hTb3VyY2VQcm9wZXJ0aWVzVmlldy50c3giLCIuLi9zcmMvcGFnZXMvZmVhdHVyZS12aWV3cy9Db25zdW1pbmdGZWF0dXJlU2VydmljZXNMaXN0LnRzeCIsIi4uL3NyYy9wYWdlcy9mZWF0dXJlLXZpZXdzL1JlZ3VsYXJGZWF0dXJlVmlld092ZXJ2aWV3VGFiLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL051bWVyaWNGZWF0dXJlc1RhYmxlLnRzeCIsIi4uL3NyYy9wYWdlcy9mZWF0dXJlLXZpZXdzL0ZlYXR1cmVWaWV3U3VtbWFyeVN0YXRpc3RpY3NUYWIudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvUmVndWxhckZlYXR1cmVWaWV3SW5zdGFuY2UudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvY29tcG9uZW50cy9GZWF0dXJlVmlld1Byb2plY3Rpb25EaXNwbGF5UGFuZWwudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvY29tcG9uZW50cy9SZXF1ZXN0RGF0YURpc3BsYXlQYW5lbC50c3giLCIuLi9zcmMvcGFnZXMvZmVhdHVyZS12aWV3cy9PbkRlbWFuZEZlYXR1cmVWaWV3T3ZlcnZpZXdUYWIudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtdmlld3MvT25EZW1hbmRGZWF0dXJlVmlld0luc3RhbmNlLnRzeCIsIi4uL3NyYy9wYWdlcy9mZWF0dXJlLXZpZXdzL0ZlYXR1cmVWaWV3SW5zdGFuY2UudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRmVhdHVyZXNJblNlcnZpY2VEaXNwbGF5LnRzeCIsIi4uL3NyYy9wYWdlcy9mZWF0dXJlLXNlcnZpY2VzL0ZlYXR1cmVTZXJ2aWNlT3ZlcnZpZXdUYWIudHN4IiwiLi4vc3JjL3BhZ2VzL2ZlYXR1cmUtc2VydmljZXMvRmVhdHVyZVNlcnZpY2VJbnN0YW5jZS50c3giLCIuLi9zcmMvcGFnZXMvZGF0YS1zb3VyY2VzL0RhdGFTb3VyY2VSYXdEYXRhLnRzeCIsIi4uL3NyYy9wYWdlcy9kYXRhLXNvdXJjZXMvUmVxdWVzdERhdGFTb3VyY2VTY2hlbWFUYWJsZS50c3giLCIuLi9zcmMvcGFnZXMvZGF0YS1zb3VyY2VzL0RhdGFTb3VyY2VPdmVydmlld1RhYi50c3giLCIuLi9zcmMvcGFnZXMvZGF0YS1zb3VyY2VzL0RhdGFTb3VyY2VEYnQudHN4IiwiLi4vc3JjL3BhZ2VzL2RhdGEtc291cmNlcy9EYXRhU291cmNlSW5zdGFuY2UudHN4IiwiLi4vc3JjL3BhZ2VzL1Jvb3RQcm9qZWN0U2VsZWN0aW9uUGFnZS50c3giLCIuLi9zcmMvcGFnZXMvc2F2ZWQtZGF0YS1zZXRzL0RhdGFzZXRGZWF0dXJlc1RhYmxlLnRzeCIsIi4uL3NyYy9wYWdlcy9zYXZlZC1kYXRhLXNldHMvRGF0YXNldEpvaW5LZXlzVGFibGUudHN4IiwiLi4vc3JjL3BhZ2VzL3NhdmVkLWRhdGEtc2V0cy9EYXRhc2V0T3ZlcnZpZXdUYWIudHN4IiwiLi4vc3JjL3BhZ2VzL3NhdmVkLWRhdGEtc2V0cy9EYXRhc2V0RXhwZWN0YXRpb25zVGFiLnRzeCIsIi4uL3NyYy9wYWdlcy9zYXZlZC1kYXRhLXNldHMvRGF0YXNldEluc3RhbmNlLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL05vUHJvamVjdEd1YXJkLnRzeCIsIi4uL3NyYy9GZWFzdFVJU2Fuc1Byb3ZpZGVycy50c3giLCIuLi9zcmMvRmVhc3RVSS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7dmFyIGY9cmVxdWlyZShcInJlYWN0XCIpLGc9NjAxMDM7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgaD1TeW1ib2wuZm9yO2c9aChcInJlYWN0LmVsZW1lbnRcIik7ZXhwb3J0cy5GcmFnbWVudD1oKFwicmVhY3QuZnJhZ21lbnRcIil9dmFyIG09Zi5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRC5SZWFjdEN1cnJlbnRPd25lcixuPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gcShjLGEsayl7dmFyIGIsZD17fSxlPW51bGwsbD1udWxsO3ZvaWQgMCE9PWsmJihlPVwiXCIrayk7dm9pZCAwIT09YS5rZXkmJihlPVwiXCIrYS5rZXkpO3ZvaWQgMCE9PWEucmVmJiYobD1hLnJlZik7Zm9yKGIgaW4gYSluLmNhbGwoYSxiKSYmIXAuaGFzT3duUHJvcGVydHkoYikmJihkW2JdPWFbYl0pO2lmKGMmJmMuZGVmYXVsdFByb3BzKWZvcihiIGluIGE9Yy5kZWZhdWx0UHJvcHMsYSl2b2lkIDA9PT1kW2JdJiYoZFtiXT1hW2JdKTtyZXR1cm57JCR0eXBlb2Y6Zyx0eXBlOmMsa2V5OmUscmVmOmwscHJvcHM6ZCxfb3duZXI6bS5jdXJyZW50fX1leHBvcnRzLmpzeD1xO2V4cG9ydHMuanN4cz1xO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCB7XG4gIHVzZUxvY2F0aW9uLFxuICB1c2VOYXZpZ2F0ZSxcbiAgTG9jYXRpb24gYXMgUm91dGVyTG9jYXRpb24sXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8vIHZpYTogaHR0cHM6Ly9naXRodWIuY29tL3BiZXNoYWkvdXNlLXF1ZXJ5LXBhcmFtcy9pc3N1ZXMvMTk2I2lzc3VlY29tbWVudC05OTY4OTM3NTBcbmludGVyZmFjZSBSb3V0ZUFkYXB0ZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7XG4gICAgaGlzdG9yeToge1xuICAgICAgcmVwbGFjZShsb2NhdGlvbjogTG9jYXRpb24pOiB2b2lkO1xuICAgICAgcHVzaChsb2NhdGlvbjogTG9jYXRpb24pOiB2b2lkO1xuICAgIH07XG4gICAgbG9jYXRpb246IFJvdXRlckxvY2F0aW9uO1xuICB9Pjtcbn1cblxuLy8gVmlhOiBodHRwczovL2dpdGh1Yi5jb20vcGJlc2hhaS91c2UtcXVlcnktcGFyYW1zL2Jsb2IvY2Q0NGU3ZmIzMzk0NjIwZjc1N2JmYjA5ZmY1N2I3ZjI5NmQ5YTVlNi9leGFtcGxlcy9yZWFjdC1yb3V0ZXItNi9zcmMvaW5kZXguanMjTDM2XG5jb25zdCBSb3V0ZUFkYXB0ZXIgPSAoeyBjaGlsZHJlbiB9OiBSb3V0ZUFkYXB0ZXJQcm9wcykgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBjb25zdCBhZGFwdGVkSGlzdG9yeSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHJlcGxhY2UobG9jYXRpb246IExvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRlKGxvY2F0aW9uLCB7IHJlcGxhY2U6IHRydWUsIHN0YXRlOiBsb2NhdGlvbi5zdGF0ZSB9KTtcbiAgICAgIH0sXG4gICAgICBwdXNoKGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgICAgICBuYXZpZ2F0ZShsb2NhdGlvbiwgeyByZXBsYWNlOiBmYWxzZSwgc3RhdGU6IGxvY2F0aW9uLnN0YXRlIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBbbmF2aWdhdGVdXG4gICk7XG4gIHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlbih7IGhpc3Rvcnk6IGFkYXB0ZWRIaXN0b3J5LCBsb2NhdGlvbiB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlQWRhcHRlcjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlRG9jdW1lbnRUaXRsZSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtkb2N1bWVudF90aXRsZSwgc2V0XSA9IHVzZVN0YXRlKHRpdGxlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IGRvY3VtZW50X3RpdGxlO1xuICB9LCBbZG9jdW1lbnRfdGl0bGVdKTtcblxuICBjb25zdCBzZXREb3VjbWVudFRpdGxlID0gKG5ld1RpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoZG9jdW1lbnRfdGl0bGUgIT09IG5ld1RpdGxlKSB7XG4gICAgICBzZXQobmV3VGl0bGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc2V0RG91Y21lbnRUaXRsZTtcbn07XG5cbmV4cG9ydCB7IHVzZURvY3VtZW50VGl0bGUgfTtcbiIsImVudW0gRkVBU1RfRkNPX1RZUEVTIHtcbiAgZGF0YVNvdXJjZSA9IFwiZGF0YVNvdXJjZVwiLFxuICBlbnRpdHkgPSBcImVudGl0eVwiLFxuICBmZWF0dXJlVmlldyA9IFwiZmVhdHVyZVZpZXdcIixcbiAgZmVhdHVyZVNlcnZpY2UgPSBcImZlYXR1cmVTZXJ2aWNlXCIsXG59XG5cbmVudW0gRkVBU1RfRkVBVFVSRV9WQUxVRV9UWVBFUyB7XG4gIEZMT0FUID0gXCJGTE9BVFwiLFxuICBJTlQ2NCA9IFwiSU5UNjRcIixcbiAgU1RSSU5HID0gXCJTVFJJTkdcIixcbiAgQk9PTCA9IFwiQk9PTFwiLFxuICBCWVRFUyA9IFwiQllURVNcIixcbiAgSU5UMzIgPSBcIklOVDMyXCIsXG4gIERPVUJMRSA9IFwiRE9VQkxFXCIsXG4gIFVOSVhfVElNRVNUQU1QID0gXCJVTklYX1RJTUVTVEFNUFwiLFxuICBJTlZBTElEID0gXCJJTlZBTElEXCIsXG4gIEJZVEVTX0xJU1QgPSBcIkJZVEVTX0xJU1RcIixcbiAgU1RSSU5HX0xJU1QgPSBcIlNUUklOR19MSVNUXCIsXG4gIElOVDMyX0xJU1QgPSBcIklOVDMyX0xJU1RcIixcbiAgSU5UNjRfTElTVCA9IFwiSU5UNjRfTElTVFwiLFxuICBET1VCTEVfTElTVCA9IFwiRE9VQkxFX0xJU1RcIixcbiAgRkxPQVRfTElTVCA9IFwiRkxPQVRfTElTVFwiLFxuICBCT09MX0xJU1QgPSBcIkJPT0xfTElTVFwiLFxuICBVTklYX1RJTUVTVEFNUF9MSVNUID0gXCJVTklYX1RJTUVTVEFNUF9MSVNUXCIsXG4gIE5VTEwgPSBcIk5VTExcIlxufVxuXG5leHBvcnQgeyBGRUFTVF9GQ09fVFlQRVMsIEZFQVNUX0ZFQVRVUkVfVkFMVUVfVFlQRVMgfTtcbiIsImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBGRUFTVF9GRUFUVVJFX1ZBTFVFX1RZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICB2YWx1ZVR5cGU6IHoubmF0aXZlRW51bShGRUFTVF9GRUFUVVJFX1ZBTFVFX1RZUEVTKSxcbiAgdGFnczogei5yZWNvcmQoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBGZWFzdEJhdGNoU291cmNlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LnN0cmluZygpLFxuICBldmVudFRpbWVzdGFtcENvbHVtbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkVGltZXN0YW1wQ29sdW1uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGZpbGVPcHRpb25zOiB6Lm9iamVjdCh7XG4gICAgdXJpOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIH0pLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbWV0YTogei5vYmplY3Qoe1xuICAgIGVhcmxpZXN0RXZlbnRUaW1lc3RhbXA6IHouc3RyaW5nKCkudHJhbnNmb3JtKCh2YWwpID0+IG5ldyBEYXRlKHZhbCkpLFxuICAgIGxhdGVzdEV2ZW50VGltZXN0YW1wOiB6LnN0cmluZygpLnRyYW5zZm9ybSgodmFsKSA9PiBuZXcgRGF0ZSh2YWwpKSxcbiAgfSkub3B0aW9uYWwoKSxcbiAgcmVxdWVzdERhdGFPcHRpb25zOiB6Lm9iamVjdCh7XG4gICAgc2NoZW1hOiB6LnJlY29yZCh6Lm5hdGl2ZUVudW0oRkVBU1RfRkVBVFVSRV9WQUxVRV9UWVBFUykpLFxuICB9KS5vcHRpb25hbCgpLFxuICBiaWdxdWVyeU9wdGlvbnM6IHoub2JqZWN0KHtcbiAgICB0YWJsZVJlZjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIGRidE1vZGVsU2VyaWFsaXplZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG4gIH0pLm9wdGlvbmFsKCksXG4gIGRhdGFTb3VyY2VDbGFzc1R5cGU6IHouc3RyaW5nKCksXG59KTtcblxuY29uc3QgRmVhc3RGZWF0dXJlVmlld1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3BlYzogei5vYmplY3Qoe1xuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICBlbnRpdGllczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICBmZWF0dXJlczogei5hcnJheShGZWFzdEZlYXR1cmVDb2x1bW5TY2hlbWEpLFxuICAgIHR0bDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gcGFyc2VJbnQodmFsKSksXG4gICAgYmF0Y2hTb3VyY2U6IEZlYXN0QmF0Y2hTb3VyY2VTY2hlbWEsXG4gICAgb25saW5lOiB6LmJvb2xlYW4oKSxcbiAgICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIHRhZ3M6IHoucmVjb3JkKHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gIH0pLFxuICBtZXRhOiB6Lm9iamVjdCh7XG4gICAgY3JlYXRlZFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSkub3B0aW9uYWwoKSxcbiAgICBsYXN0VXBkYXRlZFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSkub3B0aW9uYWwoKSxcbiAgICBtYXRlcmlhbGl6YXRpb25JbnRlcnZhbHM6IHpcbiAgICAgIC5hcnJheShcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIHN0YXJ0VGltZTogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSksXG4gICAgICAgICAgZW5kVGltZTogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAub3B0aW9uYWwoKSxcbiAgfSksXG59KTtcblxudHlwZSBGZWFzdEZlYXR1cmVWaWV3VHlwZSA9IHouaW5mZXI8dHlwZW9mIEZlYXN0RmVhdHVyZVZpZXdTY2hlbWE+O1xudHlwZSBGZWFzdEZlYXR1cmVDb2x1bW5UeXBlID0gei5pbmZlcjx0eXBlb2YgRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hPjtcblxuZXhwb3J0IHsgRmVhc3RGZWF0dXJlVmlld1NjaGVtYSwgRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hIH07XG5leHBvcnQgdHlwZSB7IEZlYXN0RmVhdHVyZVZpZXdUeXBlLCBGZWFzdEZlYXR1cmVDb2x1bW5UeXBlIH07XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hIH0gZnJvbSBcIi4vZmVhc3RGZWF0dXJlVmlld3NcIjtcblxuY29uc3QgRmVhc3REYXRhc291cmNlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LnN0cmluZygpLFxuICBldmVudFRpbWVzdGFtcENvbHVtbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkVGltZXN0YW1wQ29sdW1uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGZpbGVPcHRpb25zOiB6Lm9iamVjdCh7XG4gICAgdXJpOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIH0pLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1ldGE6IHoub2JqZWN0KHtcbiAgICBsYXRlc3RFdmVudFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSksXG4gICAgZWFybGllc3RFdmVudFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSksXG4gIH0pLm9wdGlvbmFsKCksXG4gIHJlcXVlc3REYXRhT3B0aW9uczogei5vYmplY3Qoe1xuICAgIHNjaGVtYTogei5hcnJheShGZWFzdEZlYXR1cmVDb2x1bW5TY2hlbWEpLFxuICB9KS5vcHRpb25hbCgpLFxuICBiaWdxdWVyeU9wdGlvbnM6IHoub2JqZWN0KHtcbiAgICB0YWJsZVJlZjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIGRidE1vZGVsU2VyaWFsaXplZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG4gIH0pLm9wdGlvbmFsKCksXG59KTtcblxudHlwZSBGZWFzdERhdGFzb3VyY2VUeXBlID0gei5pbmZlcjx0eXBlb2YgRmVhc3REYXRhc291cmNlU2NoZW1hPjtcblxuZXhwb3J0IHsgRmVhc3REYXRhc291cmNlU2NoZW1hIH07XG5leHBvcnQgdHlwZSB7IEZlYXN0RGF0YXNvdXJjZVR5cGUgfTtcbiIsImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBGRUFTVF9GRUFUVVJFX1ZBTFVFX1RZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgRmVhc3RFbnRpdHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNwZWM6IHoub2JqZWN0KHtcbiAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgIHZhbHVlVHlwZTogei5uYXRpdmVFbnVtKEZFQVNUX0ZFQVRVUkVfVkFMVUVfVFlQRVMpLFxuICAgIGpvaW5LZXk6IHouc3RyaW5nKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBsYWJlbHM6IHoucmVjb3JkKHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gIH0pLFxuICBtZXRhOiB6Lm9iamVjdCh7XG4gICAgY3JlYXRlZFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSkub3B0aW9uYWwoKSxcbiAgICBsYXN0VXBkYXRlZFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSkub3B0aW9uYWwoKSxcbiAgfSksXG59KTtcblxudHlwZSBGZWFzdEVudGl0eVR5cGUgPSB6LmluZmVyPHR5cGVvZiBGZWFzdEVudGl0eVNjaGVtYT47XG5cbmV4cG9ydCB7IEZlYXN0RW50aXR5U2NoZW1hIH07XG5leHBvcnQgdHlwZSB7IEZlYXN0RW50aXR5VHlwZSB9O1xuIiwiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IEZFQVNUX0ZFQVRVUkVfVkFMVUVfVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBGZWF0dXJlQ29sdW1uSW5TZXJ2aWNlID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICB2YWx1ZVR5cGU6IHoubmF0aXZlRW51bShGRUFTVF9GRUFUVVJFX1ZBTFVFX1RZUEVTKSxcbn0pO1xuXG5jb25zdCBGZWF0dXJlSW5TZXJ2aWNlU2NoZW1hID0gei5vYmplY3Qoe1xuICBmZWF0dXJlVmlld05hbWU6IHouc3RyaW5nKCksXG4gIGZlYXR1cmVDb2x1bW5zOiB6LmFycmF5KEZlYXR1cmVDb2x1bW5JblNlcnZpY2UpLFxufSk7XG5cbmNvbnN0IEZlYXN0RmVhdHVyZVNlcnZpY2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNwZWM6IHoub2JqZWN0KHtcbiAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgIGZlYXR1cmVzOiB6LmFycmF5KEZlYXR1cmVJblNlcnZpY2VTY2hlbWEpLFxuICAgIHRhZ3M6IHoucmVjb3JkKHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgfSksXG4gIG1ldGE6IHoub2JqZWN0KHtcbiAgICBjcmVhdGVkVGltZXN0YW1wOiB6LnN0cmluZygpLnRyYW5zZm9ybSgodmFsKSA9PiBuZXcgRGF0ZSh2YWwpKSxcbiAgfSksXG59KTtcblxudHlwZSBGZWFzdEZlYXR1cmVTZXJ2aWNlVHlwZSA9IHouaW5mZXI8dHlwZW9mIEZlYXN0RmVhdHVyZVNlcnZpY2VTY2hlbWE+O1xudHlwZSBGZWFzdEZlYXR1cmVJblNlcnZpY2VUeXBlID0gei5pbmZlcjx0eXBlb2YgRmVhdHVyZUluU2VydmljZVNjaGVtYT47XG5cbmV4cG9ydCB7IEZlYXN0RmVhdHVyZVNlcnZpY2VTY2hlbWEgfTtcbmV4cG9ydCB0eXBlIHsgRmVhc3RGZWF0dXJlU2VydmljZVR5cGUsIEZlYXN0RmVhdHVyZUluU2VydmljZVR5cGUgfTtcbiIsImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IEZlYXN0U2F2ZWREYXRhc2V0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzcGVjOiB6Lm9iamVjdCh7XG4gICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICBmZWF0dXJlczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICBqb2luS2V5czogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICBzdG9yYWdlOiB6Lm9iamVjdCh7XG4gICAgICBmaWxlU3RvcmFnZTogei5vYmplY3Qoe1xuICAgICAgICBmaWxlRm9ybWF0OiB6Lm9iamVjdCh7XG4gICAgICAgICAgcGFycXVlc3RGb3JtYXQ6IHoub2JqZWN0KHt9KS5vcHRpb25hbCgpLFxuICAgICAgICB9KSxcbiAgICAgICAgZmlsZVVybDogei5zdHJpbmcoKSxcbiAgICAgIH0pLFxuICAgIH0pLFxuICAgIGZlYXR1cmVTZXJ2aWNlOiB6XG4gICAgICAub2JqZWN0KHtcbiAgICAgICAgc3BlYzogei5vYmplY3Qoe1xuICAgICAgICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIC50cmFuc2Zvcm0oKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLnNwZWMubmFtZTtcbiAgICAgIH0pLFxuICAgIHByb2ZpbGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgfSksXG4gIG1ldGE6IHoub2JqZWN0KHtcbiAgICBjcmVhdGVkVGltZXN0YW1wOiB6LnN0cmluZygpLnRyYW5zZm9ybSgodmFsKSA9PiBuZXcgRGF0ZSh2YWwpKSxcbiAgICBtaW5FdmVudFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSksXG4gICAgbWF4RXZlbnRUaW1lc3RhbXA6IHouc3RyaW5nKCkudHJhbnNmb3JtKCh2YWwpID0+IG5ldyBEYXRlKHZhbCkpLFxuICB9KSxcbn0pO1xuXG50eXBlIEZlYXN0U2F2ZWREYXRhc2V0VHlwZSA9IHouaW5mZXI8dHlwZW9mIEZlYXN0U2F2ZWREYXRhc2V0U2NoZW1hPjtcblxuZXhwb3J0IHsgRmVhc3RTYXZlZERhdGFzZXRTY2hlbWEgfTtcbmV4cG9ydCB0eXBlIHsgRmVhc3RTYXZlZERhdGFzZXRUeXBlIH07XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hIH0gZnJvbSBcIi4vZmVhc3RGZWF0dXJlVmlld3NcIjtcbmltcG9ydCB7IEZFQVNUX0ZFQVRVUkVfVkFMVUVfVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBGZWF0dXJlVmlld1Byb2plY3Rpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZlYXR1cmVWaWV3UHJvamVjdGlvbjogei5vYmplY3Qoe1xuICAgIGZlYXR1cmVWaWV3TmFtZTogei5zdHJpbmcoKSxcbiAgICBmZWF0dXJlQ29sdW1uczogei5hcnJheShGZWFzdEZlYXR1cmVDb2x1bW5TY2hlbWEpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBSZXF1ZXN0RGF0YVNvdXJjZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcmVxdWVzdERhdGFTb3VyY2U6IHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LnN0cmluZygpLFxuICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgcmVxdWVzdERhdGFPcHRpb25zOiB6Lm9iamVjdCh7XG4gICAgICBzY2hlbWE6IHouYXJyYXkoRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hKSxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuY29uc3QgT0RGVklucHV0c1NjaGVtYSA9IHoudW5pb24oW1xuICBGZWF0dXJlVmlld1Byb2plY3Rpb25TY2hlbWEsXG4gIFJlcXVlc3REYXRhU291cmNlU2NoZW1hLFxuXSk7XG5cbmNvbnN0IEZlYXN0T0RGVlNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3BlYzogei5vYmplY3Qoe1xuICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgZmVhdHVyZXM6IHouYXJyYXkoRmVhc3RGZWF0dXJlQ29sdW1uU2NoZW1hKSxcbiAgICBzb3VyY2VzOiB6LnJlY29yZChPREZWSW5wdXRzU2NoZW1hKSxcbiAgICB1c2VyRGVmaW5lZEZ1bmN0aW9uOiB6Lm9iamVjdCh7XG4gICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgYm9keTogei5zdHJpbmcoKSxcbiAgICB9KSxcbiAgfSksXG4gIG1ldGE6IHoub2JqZWN0KHtcbiAgICBjcmVhdGVkVGltZXN0YW1wOiB6LnN0cmluZygpLnRyYW5zZm9ybSgodmFsKSA9PiBuZXcgRGF0ZSh2YWwpKSxcbiAgICBsYXN0VXBkYXRlZFRpbWVzdGFtcDogei5zdHJpbmcoKS50cmFuc2Zvcm0oKHZhbCkgPT4gbmV3IERhdGUodmFsKSksXG4gIH0pLFxufSk7XG5cbnR5cGUgRmVhc3RPREZWVHlwZSA9IHouaW5mZXI8dHlwZW9mIEZlYXN0T0RGVlNjaGVtYT47XG50eXBlIFJlcXVlc3REYXRhU291cmNlVHlwZSA9IHouaW5mZXI8dHlwZW9mIFJlcXVlc3REYXRhU291cmNlU2NoZW1hPjtcbnR5cGUgRmVhdHVyZVZpZXdQcm9qZWN0aW9uVHlwZSA9IHouaW5mZXI8dHlwZW9mIEZlYXR1cmVWaWV3UHJvamVjdGlvblNjaGVtYT47XG5cbmV4cG9ydCB7IEZlYXN0T0RGVlNjaGVtYSB9O1xuZXhwb3J0IHR5cGUgeyBGZWFzdE9ERlZUeXBlLCBSZXF1ZXN0RGF0YVNvdXJjZVR5cGUsIEZlYXR1cmVWaWV3UHJvamVjdGlvblR5cGUgfTtcbiIsImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBGZWFzdERhdGFzb3VyY2VTY2hlbWEgfSBmcm9tIFwiLi9mZWFzdERhdGFzb3VyY2VzXCI7XG5pbXBvcnQgeyBGZWFzdEVudGl0eVNjaGVtYSB9IGZyb20gXCIuL2ZlYXN0RW50aXRpZXNcIjtcbmltcG9ydCB7IEZlYXN0RmVhdHVyZVNlcnZpY2VTY2hlbWEgfSBmcm9tIFwiLi9mZWFzdEZlYXR1cmVTZXJ2aWNlc1wiO1xuaW1wb3J0IHsgRmVhc3RGZWF0dXJlVmlld1NjaGVtYSB9IGZyb20gXCIuL2ZlYXN0RmVhdHVyZVZpZXdzXCI7XG5pbXBvcnQgeyBGZWFzdFNhdmVkRGF0YXNldFNjaGVtYSB9IGZyb20gXCIuL2ZlYXN0U2F2ZWREYXRhc2V0XCI7XG5pbXBvcnQgeyBGZWFzdE9ERlZTY2hlbWEgfSBmcm9tIFwiLi9mZWFzdE9ERlZTXCI7XG5cbmNvbnN0IEZlYXN0UmVnaXN0cnlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHByb2plY3Q6IHouc3RyaW5nKCksXG4gIGRhdGFTb3VyY2VzOiB6LmFycmF5KEZlYXN0RGF0YXNvdXJjZVNjaGVtYSkub3B0aW9uYWwoKSxcbiAgZW50aXRpZXM6IHouYXJyYXkoRmVhc3RFbnRpdHlTY2hlbWEpLm9wdGlvbmFsKCksXG4gIGZlYXR1cmVWaWV3czogei5hcnJheShGZWFzdEZlYXR1cmVWaWV3U2NoZW1hKS5vcHRpb25hbCgpLFxuICBvbkRlbWFuZEZlYXR1cmVWaWV3czogei5hcnJheShGZWFzdE9ERlZTY2hlbWEpLm9wdGlvbmFsKCksXG4gIGZlYXR1cmVTZXJ2aWNlczogei5hcnJheShGZWFzdEZlYXR1cmVTZXJ2aWNlU2NoZW1hKS5vcHRpb25hbCgpLFxuICBzYXZlZERhdGFzZXRzOiB6LmFycmF5KEZlYXN0U2F2ZWREYXRhc2V0U2NoZW1hKS5vcHRpb25hbCgpLFxufSk7XG5cbnR5cGUgRmVhc3RSZWdpc3RyeVR5cGUgPSB6LmluZmVyPHR5cGVvZiBGZWFzdFJlZ2lzdHJ5U2NoZW1hPjtcblxuZXhwb3J0IHsgRmVhc3RSZWdpc3RyeVNjaGVtYSB9O1xuZXhwb3J0IHR5cGUgeyBGZWFzdFJlZ2lzdHJ5VHlwZSB9O1xuIiwiaW1wb3J0IHtcbiAgRmVhc3RGZWF0dXJlQ29sdW1uVHlwZSxcbiAgRmVhc3RGZWF0dXJlVmlld1R5cGUsXG59IGZyb20gXCIuL2ZlYXN0RmVhdHVyZVZpZXdzXCI7XG5pbXBvcnQgeyBGZWFzdE9ERlZUeXBlIH0gZnJvbSBcIi4vZmVhc3RPREZWU1wiO1xuaW1wb3J0IHsgRmVhc3RSZWdpc3RyeVR5cGUgfSBmcm9tIFwiLi9mZWFzdFJlZ2lzdHJ5XCI7XG5cbmVudW0gRkVBU1RfRlZfVFlQRVMge1xuICByZWd1bGFyID0gXCJyZWd1bGFyXCIsXG4gIG9uZGVtYW5kID0gXCJvbmRlbWFuZFwiLFxufVxuXG5pbnRlcmZhY2UgcmVndWxhckZWSW50ZXJmYWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBGRUFTVF9GVl9UWVBFUy5yZWd1bGFyO1xuICBmZWF0dXJlczogRmVhc3RGZWF0dXJlQ29sdW1uVHlwZVtdO1xuICBvYmplY3Q6IEZlYXN0RmVhdHVyZVZpZXdUeXBlO1xufVxuXG5pbnRlcmZhY2UgT0RGVkludGVyZmFjZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogRkVBU1RfRlZfVFlQRVMub25kZW1hbmQ7XG4gIGZlYXR1cmVzOiBGZWFzdEZlYXR1cmVDb2x1bW5UeXBlW107XG4gIG9iamVjdDogRmVhc3RPREZWVHlwZTtcbn1cblxudHlwZSBnZW5lcmljRlZUeXBlID0gcmVndWxhckZWSW50ZXJmYWNlIHwgT0RGVkludGVyZmFjZTtcblxuY29uc3QgbWVyZ2VkRlZUeXBlcyA9IChvYmplY3RzOiBGZWFzdFJlZ2lzdHJ5VHlwZSkgPT4ge1xuICBjb25zdCBtZXJnZWRGVk1hcDogUmVjb3JkPHN0cmluZywgZ2VuZXJpY0ZWVHlwZT4gPSB7fTtcblxuICBjb25zdCBtZXJnZWRGVkxpc3Q6IGdlbmVyaWNGVlR5cGVbXSA9IFtdO1xuXG4gIG9iamVjdHMuZmVhdHVyZVZpZXdzPy5mb3JFYWNoKChmdikgPT4ge1xuICAgIGNvbnN0IG9iajogZ2VuZXJpY0ZWVHlwZSA9IHtcbiAgICAgIG5hbWU6IGZ2LnNwZWMubmFtZSxcbiAgICAgIHR5cGU6IEZFQVNUX0ZWX1RZUEVTLnJlZ3VsYXIsXG4gICAgICBmZWF0dXJlczogZnYuc3BlYy5mZWF0dXJlcyxcbiAgICAgIG9iamVjdDogZnYsXG4gICAgfTtcblxuICAgIG1lcmdlZEZWTWFwW2Z2LnNwZWMubmFtZV0gPSBvYmo7XG4gICAgbWVyZ2VkRlZMaXN0LnB1c2gob2JqKTtcbiAgfSk7XG5cbiAgb2JqZWN0cy5vbkRlbWFuZEZlYXR1cmVWaWV3cz8uZm9yRWFjaCgob2RmdikgPT4ge1xuICAgIGNvbnN0IG9iajogZ2VuZXJpY0ZWVHlwZSA9IHtcbiAgICAgIG5hbWU6IG9kZnYuc3BlYy5uYW1lLFxuICAgICAgdHlwZTogRkVBU1RfRlZfVFlQRVMub25kZW1hbmQsXG4gICAgICBmZWF0dXJlczogb2Rmdi5zcGVjLmZlYXR1cmVzLFxuICAgICAgb2JqZWN0OiBvZGZ2LFxuICAgIH07XG5cbiAgICBtZXJnZWRGVk1hcFtvZGZ2LnNwZWMubmFtZV0gPSBvYmo7XG4gICAgbWVyZ2VkRlZMaXN0LnB1c2gob2JqKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgbWVyZ2VkRlZNYXAsIG1lcmdlZEZWTGlzdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VkRlZUeXBlcztcbmV4cG9ydCB7IEZFQVNUX0ZWX1RZUEVTIH07XG5leHBvcnQgdHlwZSB7IGdlbmVyaWNGVlR5cGUsIHJlZ3VsYXJGVkludGVyZmFjZSwgT0RGVkludGVyZmFjZSB9O1xuIiwiaW1wb3J0IHsgRmVhc3RSZWdpc3RyeVR5cGUgfSBmcm9tIFwiLi9mZWFzdFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBGRUFTVF9GQ09fVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgRW50aXR5UmVmZXJlbmNlIHtcbiAgdHlwZTogRkVBU1RfRkNPX1RZUEVTO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBFbnRpdHlSZWxhdGlvbiB7XG4gIHNvdXJjZTogRW50aXR5UmVmZXJlbmNlO1xuICB0YXJnZXQ6IEVudGl0eVJlZmVyZW5jZTtcbn1cblxuY29uc3QgcGFyc2VFbnRpdHlSZWxhdGlvbnNoaXBzID0gKG9iamVjdHM6IEZlYXN0UmVnaXN0cnlUeXBlKSA9PiB7XG4gIGNvbnN0IGxpbmtzOiBFbnRpdHlSZWxhdGlvbltdID0gW107XG5cbiAgb2JqZWN0cy5mZWF0dXJlU2VydmljZXM/LmZvckVhY2goKGZzKSA9PiB7XG4gICAgZnMuc3BlYy5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB7XG4gICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgdHlwZTogRkVBU1RfRkNPX1RZUEVTW1wiZmVhdHVyZVZpZXdcIl0sXG4gICAgICAgICAgbmFtZTogZmVhdHVyZS5mZWF0dXJlVmlld05hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIHR5cGU6IEZFQVNUX0ZDT19UWVBFU1tcImZlYXR1cmVTZXJ2aWNlXCJdLFxuICAgICAgICAgIG5hbWU6IGZzLnNwZWMubmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBvYmplY3RzLmZlYXR1cmVWaWV3cz8uZm9yRWFjaCgoZnYpID0+IHtcbiAgICBmdi5zcGVjLmVudGl0aWVzLmZvckVhY2goKGVudCkgPT4ge1xuICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIHR5cGU6IEZFQVNUX0ZDT19UWVBFU1tcImVudGl0eVwiXSxcbiAgICAgICAgICBuYW1lOiBlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIHR5cGU6IEZFQVNUX0ZDT19UWVBFU1tcImZlYXR1cmVWaWV3XCJdLFxuICAgICAgICAgIG5hbWU6IGZ2LnNwZWMubmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChmdi5zcGVjLmJhdGNoU291cmNlKSB7XG4gICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgdHlwZTogRkVBU1RfRkNPX1RZUEVTW1wiZGF0YVNvdXJjZVwiXSxcbiAgICAgICAgICBuYW1lOiBmdi5zcGVjLmJhdGNoU291cmNlLm5hbWUgfHwgJydcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgdHlwZTogRkVBU1RfRkNPX1RZUEVTW1wiZmVhdHVyZVZpZXdcIl0sXG4gICAgICAgICAgbmFtZTogZnYuc3BlYy5uYW1lLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSk7XG5cbiAgb2JqZWN0cy5vbkRlbWFuZEZlYXR1cmVWaWV3cz8uZm9yRWFjaCgoZnYpID0+IHtcbiAgIE9iamVjdC52YWx1ZXMoZnYuc3BlYy5zb3VyY2VzKS5mb3JFYWNoKChpbnB1dDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4ge1xuICAgICBpZiAoaW5wdXQucmVxdWVzdERhdGFTb3VyY2UpIHtcbiAgICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgICB0eXBlOiBGRUFTVF9GQ09fVFlQRVNbXCJkYXRhU291cmNlXCJdLFxuICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5yZXF1ZXN0RGF0YVNvdXJjZS5uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICB0eXBlOiBGRUFTVF9GQ09fVFlQRVNbXCJmZWF0dXJlVmlld1wiXSxcbiAgICAgICAgICAgICAgbmFtZTogZnYuc3BlYy5uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgfSBlbHNlIGlmIChpbnB1dC5mZWF0dXJlVmlld1Byb2plY3Rpb24/LmZlYXR1cmVWaWV3TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHNvdXJjZV9mdiA9IG9iamVjdHMuZmVhdHVyZVZpZXdzPy5maW5kKGVsID0+IGVsLnNwZWMubmFtZSA9PT0gaW5wdXQuZmVhdHVyZVZpZXdQcm9qZWN0aW9uLmZlYXR1cmVWaWV3TmFtZSk7XG4gICAgICAgICAgaWYgKCFzb3VyY2VfZnYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICB0eXBlOiBGRUFTVF9GQ09fVFlQRVNbXCJkYXRhU291cmNlXCJdLFxuICAgICAgICAgICAgICAgbmFtZTogc291cmNlX2Z2Py5zcGVjLmJhdGNoU291cmNlLm5hbWUgfHwgJycsXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgIHR5cGU6IEZFQVNUX0ZDT19UWVBFU1tcImZlYXR1cmVWaWV3XCJdLFxuICAgICAgICAgICAgICAgbmFtZTogZnYuc3BlYy5uYW1lLFxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgIH0pO1xuICAgICB9XG4gICB9KTtcbiB9KTtcblxuICByZXR1cm4gbGlua3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZUVudGl0eVJlbGF0aW9uc2hpcHM7XG5leHBvcnQgdHlwZSB7IEVudGl0eVJlbGF0aW9uLCBFbnRpdHlSZWZlcmVuY2UgfTtcbiIsImltcG9ydCB7IEZlYXN0UmVnaXN0cnlUeXBlIH0gZnJvbSBcIi4vZmVhc3RSZWdpc3RyeVwiO1xuaW1wb3J0IHsgRW50aXR5UmVsYXRpb24gfSBmcm9tIFwiLi9wYXJzZUVudGl0eVJlbGF0aW9uc2hpcHNcIjtcbmltcG9ydCB7IEZFQVNUX0ZDT19UWVBFUyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHBhcnNlSW5kaXJlY3RSZWxhdGlvbnNoaXBzID0gKFxuICByZWxhdGlvbnNoaXBzOiBFbnRpdHlSZWxhdGlvbltdLFxuICBvYmplY3RzOiBGZWFzdFJlZ2lzdHJ5VHlwZVxuKSA9PiB7XG4gIGNvbnN0IGluZGlyZWN0TGlua3M6IEVudGl0eVJlbGF0aW9uW10gPSBbXTtcblxuICAvLyBPbmx5IGNvbnRhaW5zIEVudGl0eSAtPiBGUyBvciBEUyAtPiBGUyByZWxhdGlvbnNoaXBzXG4gIG9iamVjdHMuZmVhdHVyZVNlcnZpY2VzPy5mb3JFYWNoKChmZWF0dXJlU2VydmljZSkgPT4ge1xuICAgIGZlYXR1cmVTZXJ2aWNlLnNwZWMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZVZpZXcpID0+IHtcbiAgICAgIHJlbGF0aW9uc2hpcHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAocmVsYXRpb25zaGlwKSA9PlxuICAgICAgICAgICAgcmVsYXRpb25zaGlwLnRhcmdldC5uYW1lID09PSBmZWF0dXJlVmlldy5mZWF0dXJlVmlld05hbWVcbiAgICAgICAgKVxuICAgICAgICAuZm9yRWFjaCgocmVsYXRpb25zaGlwKSA9PiB7XG4gICAgICAgICAgaW5kaXJlY3RMaW5rcy5wdXNoKHtcbiAgICAgICAgICAgIHNvdXJjZTogcmVsYXRpb25zaGlwLnNvdXJjZSxcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICB0eXBlOiBGRUFTVF9GQ09fVFlQRVNbXCJmZWF0dXJlU2VydmljZVwiXSxcbiAgICAgICAgICAgICAgbmFtZTogZmVhdHVyZVNlcnZpY2Uuc3BlYy5uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gaW5kaXJlY3RMaW5rcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlSW5kaXJlY3RSZWxhdGlvbnNoaXBzO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7XG4gIEZlYXN0UmVnaXN0cnlTY2hlbWEsXG4gIEZlYXN0UmVnaXN0cnlUeXBlLFxufSBmcm9tIFwiLi4vcGFyc2Vycy9mZWFzdFJlZ2lzdHJ5XCI7XG5pbXBvcnQgbWVyZ2VkRlZUeXBlcywgeyBnZW5lcmljRlZUeXBlIH0gZnJvbSBcIi4uL3BhcnNlcnMvbWVyZ2VkRlZUeXBlc1wiO1xuaW1wb3J0IHBhcnNlRW50aXR5UmVsYXRpb25zaGlwcywge1xuICBFbnRpdHlSZWxhdGlvbixcbn0gZnJvbSBcIi4uL3BhcnNlcnMvcGFyc2VFbnRpdHlSZWxhdGlvbnNoaXBzXCI7XG5pbXBvcnQgcGFyc2VJbmRpcmVjdFJlbGF0aW9uc2hpcHMgZnJvbSBcIi4uL3BhcnNlcnMvcGFyc2VJbmRpcmVjdFJlbGF0aW9uc2hpcHNcIjtcbmltcG9ydCB7dXNlS2V5Y2xvYWt9IGZyb20gXCJAcmVhY3Qta2V5Y2xvYWsvc3NyXCI7XG5pbXBvcnQge0tleWNsb2FrSW5zdGFuY2V9IGZyb20gXCJrZXljbG9hay1qc1wiO1xuXG5pbnRlcmZhY2UgRmVhdHVyZVN0b3JlQWxsRGF0YSB7XG4gIHByb2plY3Q6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIG9iamVjdHM6IEZlYXN0UmVnaXN0cnlUeXBlO1xuICByZWxhdGlvbnNoaXBzOiBFbnRpdHlSZWxhdGlvbltdO1xuICBtZXJnZWRGVk1hcDogUmVjb3JkPHN0cmluZywgZ2VuZXJpY0ZWVHlwZT47XG4gIG1lcmdlZEZWTGlzdDogZ2VuZXJpY0ZWVHlwZVtdO1xuICBpbmRpcmVjdFJlbGF0aW9uc2hpcHM6IEVudGl0eVJlbGF0aW9uW107XG59XG5cbmNvbnN0IHVzZUxvYWRSZWdpc3RyeSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICBjb25zdCB7a2V5Y2xvYWt9ID0gdXNlS2V5Y2xvYWs8S2V5Y2xvYWtJbnN0YW5jZT4oKVxuICByZXR1cm4gdXNlUXVlcnkoXG4gICAgYHJlZ2lzdHJ5OiR7dXJsfWAsXG4gICAgKCkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICBjcmVkZW50aWFsczogXCJvbWl0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGtleWNsb2FrPy50b2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW48RmVhdHVyZVN0b3JlQWxsRGF0YT4oKGpzb24pID0+IHtcbiAgICAgICAgICBjb25zdCBvYmplY3RzID0gRmVhc3RSZWdpc3RyeVNjaGVtYS5wYXJzZShqc29uKTtcblxuICAgICAgICAgIGNvbnN0IHsgbWVyZ2VkRlZNYXAsIG1lcmdlZEZWTGlzdCB9ID0gbWVyZ2VkRlZUeXBlcyhvYmplY3RzKTtcblxuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcHMgPSBwYXJzZUVudGl0eVJlbGF0aW9uc2hpcHMob2JqZWN0cyk7XG5cbiAgICAgICAgICAvLyBPbmx5IGNvbnRhaW5zIEVudGl0eSAtPiBGUyBvciBEUyAtPiBGUyByZWxhdGlvbnNoaXBzXG4gICAgICAgICAgY29uc3QgaW5kaXJlY3RSZWxhdGlvbnNoaXBzID0gcGFyc2VJbmRpcmVjdFJlbGF0aW9uc2hpcHMoXG4gICAgICAgICAgICByZWxhdGlvbnNoaXBzLFxuICAgICAgICAgICAgb2JqZWN0c1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgLy8gICBvYmplY3RzLFxuICAgICAgICAgIC8vICAgbWVyZ2VkRlZNYXAsXG4gICAgICAgICAgLy8gICBtZXJnZWRGVkxpc3QsXG4gICAgICAgICAgLy8gICByZWxhdGlvbnNoaXBzLFxuICAgICAgICAgIC8vICAgaW5kaXJlY3RSZWxhdGlvbnNoaXBzLFxuICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3Q6IG9iamVjdHMucHJvamVjdCxcbiAgICAgICAgICAgIG9iamVjdHMsXG4gICAgICAgICAgICBtZXJnZWRGVk1hcCxcbiAgICAgICAgICAgIG1lcmdlZEZWTGlzdCxcbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcHMsXG4gICAgICAgICAgICBpbmRpcmVjdFJlbGF0aW9uc2hpcHMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFsZVRpbWU6IEluZmluaXR5LCAvLyBHaXZlbiB0aGF0IHdlIGFyZSByZWFkaW5nIGZyb20gYSByZWdpc3RyeSBkdW1wLCB0aGlzIHNlZW1zIHJlYXNvbmFibGUgZm9yIG5vdy5cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2FkUmVnaXN0cnk7XG5leHBvcnQgdHlwZSB7IEZlYXR1cmVTdG9yZUFsbERhdGEgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVnaXN0cnlQYXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXCIvcmVnaXN0cnkuanNvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cnlQYXRoQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFdWlGbGV4R3JvdXAsXG4gIEV1aUZsZXhJdGVtLFxuICBFdWlTdGF0LFxuICBFdWlIb3Jpem9udGFsUnVsZSxcbiAgRXVpVGl0bGUsXG4gIEV1aVNwYWNlcixcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IHVzZUxvYWRSZWdpc3RyeSBmcm9tIFwiLi4vcXVlcmllcy91c2VMb2FkUmVnaXN0cnlcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcblxuY29uc3QgdXNlTG9hZE9iamVjdFN0YXRzID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICBxdWVyeS5pc1N1Y2Nlc3MgJiYgcXVlcnkuZGF0YVxuICAgICAgPyB7XG4gICAgICAgICAgZmVhdHVyZVNlcnZpY2VzOiBxdWVyeS5kYXRhLm9iamVjdHMuZmVhdHVyZVNlcnZpY2VzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICBmZWF0dXJlVmlld3M6IHF1ZXJ5LmRhdGEubWVyZ2VkRlZMaXN0Lmxlbmd0aCxcbiAgICAgICAgICBlbnRpdGllczogcXVlcnkuZGF0YS5vYmplY3RzLmVudGl0aWVzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICBkYXRhU291cmNlczogcXVlcnkuZGF0YS5vYmplY3RzLmRhdGFTb3VyY2VzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3Qgc3RhdFN0eWxlID0geyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cbmNvbnN0IE9iamVjdHNDb3VudFN0YXRzID0gKCkgPT4ge1xuICBjb25zdCB7IGlzTG9hZGluZywgaXNTdWNjZXNzLCBpc0Vycm9yLCBkYXRhIH0gPSB1c2VMb2FkT2JqZWN0U3RhdHMoKTtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aVNwYWNlciBzaXplPVwibFwiIC8+XG4gICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nPC9wPn1cbiAgICAgIHtpc0Vycm9yICYmIDxwPlRoZXJlIHdhcyBhbiBlcnJvciBpbiBsb2FkaW5nIHJlZ2lzdHJ5IGluZm9ybWF0aW9uLjwvcD59XG4gICAgICB7aXNTdWNjZXNzICYmIGRhdGEgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgPGgzPlJlZ2lzdGVyZWQgaW4gdGhpcyBGZWFzdCBwcm9qZWN0IGFyZSAmaGVsbGlwOzwvaDM+XG4gICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJzXCIgLz5cbiAgICAgICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICA8RXVpU3RhdFxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdGF0U3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC9wLyR7cHJvamVjdE5hbWV9L2ZlYXR1cmUtc2VydmljZWApfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRmVhdHVyZSBTZXJ2aWNlc+KGklwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEuZmVhdHVyZVNlcnZpY2VzfVxuICAgICAgICAgICAgICAgIHJldmVyc2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgICA8RXVpRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDxFdWlTdGF0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0YXRTdHlsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZlYXR1cmUgVmlld3PihpJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvcC8ke3Byb2plY3ROYW1lfS9mZWF0dXJlLXZpZXdgKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5mZWF0dXJlVmlld3N9XG4gICAgICAgICAgICAgICAgcmV2ZXJzZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEV1aVN0YXRcbiAgICAgICAgICAgICAgICBzdHlsZT17c3RhdFN0eWxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRW50aXRpZXPihpJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvcC8ke3Byb2plY3ROYW1lfS9lbnRpdHlgKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5lbnRpdGllc31cbiAgICAgICAgICAgICAgICByZXZlcnNlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICA8RXVpU3RhdFxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdGF0U3R5bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRhIFNvdXJjZXPihpJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvcC8ke3Byb2plY3ROYW1lfS9kYXRhLXNvdXJjZWApfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtkYXRhLmRhdGFTb3VyY2VzfVxuICAgICAgICAgICAgICAgIHJldmVyc2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RzQ291bnRTdGF0cztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gd2l0aERlZmF1bHQocGFyYW0sIGRlZmF1bHRWYWx1ZSwgaW5jbHVkZU51bGwpIHtcbiAgICBpZiAoaW5jbHVkZU51bGwgPT09IHZvaWQgMCkgeyBpbmNsdWRlTnVsbCA9IHRydWU7IH1cbiAgICB2YXIgZGVjb2RlV2l0aERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlY29kZWRWYWx1ZSA9IHBhcmFtLmRlY29kZS5hcHBseShwYXJhbSwgYXJncyk7XG4gICAgICAgIGlmIChkZWNvZGVkVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5jbHVkZU51bGwpIHtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVjb2RlZFZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwYXJhbSksIHsgZGVjb2RlOiBkZWNvZGVXaXRoRGVmYXVsdCB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhEZWZhdWx0O1xuIiwidmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxuICAgICAgICB0b1tqXSA9IGZyb21baV07XG4gICAgcmV0dXJuIHRvO1xufTtcbi8qKlxuICogSW50ZXJwcmV0cyBhbiBlbmNvZGVkIHN0cmluZyBhbmQgcmV0dXJucyBlaXRoZXIgdGhlIHN0cmluZyBvciBudWxsL3VuZGVmaW5lZCBpZiBub3QgYXZhaWxhYmxlLlxuICogSWdub3JlcyBhcnJheSBpbnB1dHMgKHRha2VzIGp1c3QgZmlyc3QgZWxlbWVudCBpbiBhcnJheSlcbiAqIEBwYXJhbSBpbnB1dCBlbmNvZGVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXRFbmNvZGVkVmFsdWUoaW5wdXQsIGFsbG93RW1wdHlTdHJpbmcpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIC8vICcnIG9yIFtdXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAoIWFsbG93RW1wdHlTdHJpbmcgfHwgKGFsbG93RW1wdHlTdHJpbmcgJiYgaW5wdXQgIT09ICcnKSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzdHIgPSBpbnB1dCBpbnN0YW5jZW9mIEFycmF5ID8gaW5wdXRbMF0gOiBpbnB1dDtcbiAgICBpZiAoc3RyID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgaWYgKCFhbGxvd0VtcHR5U3RyaW5nICYmIHN0ciA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG4vKipcbiAqIEludGVycHJldHMgYW4gZW5jb2RlZCBzdHJpbmcgYW5kIHJldHVybiBudWxsL3VuZGVmaW5lZCBvciBhbiBhcnJheSB3aXRoXG4gKiB0aGUgZW5jb2RlZCBzdHJpbmcgY29udGVudHNcbiAqIEBwYXJhbSBpbnB1dCBlbmNvZGVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXRFbmNvZGVkVmFsdWVBcnJheShpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgPyBpbnB1dCA6IGlucHV0ID09PSAnJyA/IFtdIDogW2lucHV0XTtcbn1cbi8qKlxuICogRW5jb2RlcyBhIGRhdGUgYXMgYSBzdHJpbmcgaW4gWVlZWS1NTS1ERCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBlbmNvZGVkIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZURhdGUoZGF0ZSkge1xuICAgIGlmIChkYXRlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiB5ZWFyICsgXCItXCIgKyAobW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aCkgKyBcIi1cIiArIChkYXkgPCAxMCA/IFwiMFwiICsgZGF5IDogZGF5KTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBkYXRlIGluIHRoZSBmb3JtYXQgJ1lZWVktbW0tZGQuLi4nIGludG8gYSBwcm9wZXIgZGF0ZSwgYmVjYXVzZVxuICogbmV3IERhdGUoKSBkb2VzIG5vdCBkbyB0aGF0IGNvcnJlY3RseS4gVGhlIGRhdGUgY2FuIGJlIGFzIGNvbXBsZXRlIG9yIGluY29tcGxldGVcbiAqIGFzIG5lY2Vzc2FyeSAoYWthLCAnMjAxNScsICcyMDE1LTEwJywgJzIwMTUtMTAtMDEnKS5cbiAqIEl0IHdpbGwgbm90IHdvcmsgZm9yIGRhdGVzIHRoYXQgaGF2ZSB0aW1lcyBpbmNsdWRlZCBpbiB0aGVtLlxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gaW5wdXQgU3RyaW5nIGRhdGUgZm9ybSBsaWtlICcyMDE1LTEwLTAxJ1xuICogQHJldHVybiB7RGF0ZX0gcGFyc2VkIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZURhdGUoaW5wdXQpIHtcbiAgICB2YXIgZGF0ZVN0cmluZyA9IGdldEVuY29kZWRWYWx1ZShpbnB1dCk7XG4gICAgaWYgKGRhdGVTdHJpbmcgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGRhdGVTdHJpbmc7XG4gICAgdmFyIHBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdCgnLScpO1xuICAgIC8vIG1heSBvbmx5IGJlIGEgeWVhciBzbyB3b24ndCBldmVuIGhhdmUgYSBtb250aFxuICAgIGlmIChwYXJ0c1sxXSAhPSBudWxsKSB7XG4gICAgICAgIHBhcnRzWzFdIC09IDE7IC8vIE5vdGU6IG1vbnRocyBhcmUgMC1iYXNlZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8ganVzdCBhIHllYXIsIHNldCB0aGUgbW9udGggYW5kIGRheSB0byB0aGUgZmlyc3RcbiAgICAgICAgcGFydHNbMV0gPSAwO1xuICAgICAgICBwYXJ0c1syXSA9IDE7XG4gICAgfVxuICAgIHZhciBkZWNvZGVkID0gbmV3IChEYXRlLmJpbmQuYXBwbHkoRGF0ZSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgcGFydHMpKSkoKTtcbiAgICBpZiAoaXNOYU4oZGVjb2RlZC5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZDtcbn1cbi8qKlxuICogRW5jb2RlcyBhIGRhdGUgYXMgYSBzdHJpbmcgaW4gSVNPIDg2MDEgKFwiMjAxOS0wNS0yOFQxMDo1ODo0MFpcIikgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZW5jb2RlZCBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVEYXRlVGltZShkYXRlKSB7XG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBkYXRlIGluIHRoZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSBmb3JtYXQuXG4gKiBGb3IgYWxsb3dlZCBpbnB1dHMgc2VlIHNwZWNzOlxuICogIC0gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjcGFnZS0xNFxuICogIC0gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjkuMS4xNVxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gaW5wdXQgU3RyaW5nIGRhdGUgZm9ybSBsaWtlICcxOTk1LTEyLTE3VDAzOjI0OjAwJ1xuICogQHJldHVybiB7RGF0ZX0gcGFyc2VkIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZURhdGVUaW1lKGlucHV0KSB7XG4gICAgdmFyIGRhdGVTdHJpbmcgPSBnZXRFbmNvZGVkVmFsdWUoaW5wdXQpO1xuICAgIGlmIChkYXRlU3RyaW5nID09IG51bGwpXG4gICAgICAgIHJldHVybiBkYXRlU3RyaW5nO1xuICAgIHZhciBkZWNvZGVkID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgaWYgKGlzTmFOKGRlY29kZWQuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWQ7XG59XG4vKipcbiAqIEVuY29kZXMgYSBib29sZWFuIGFzIGEgc3RyaW5nLiB0cnVlIC0+IFwiMVwiLCBmYWxzZSAtPiBcIjBcIi5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGJvb2xcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGVuY29kZWQgYm9vbGVhblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQm9vbGVhbihib29sKSB7XG4gICAgaWYgKGJvb2wgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYm9vbDtcbiAgICB9XG4gICAgcmV0dXJuIGJvb2wgPyAnMScgOiAnMCc7XG59XG4vKipcbiAqIERlY29kZXMgYSBib29sZWFuIGZyb20gYSBzdHJpbmcuIFwiMVwiIC0+IHRydWUsIFwiMFwiIC0+IGZhbHNlLlxuICogRXZlcnl0aGluZyBlbHNlIG1hcHMgdG8gdW5kZWZpbmVkLlxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCB0aGUgZW5jb2RlZCBib29sZWFuIHN0cmluZ1xuICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGJvb2xlYW4gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUJvb2xlYW4oaW5wdXQpIHtcbiAgICB2YXIgYm9vbFN0ciA9IGdldEVuY29kZWRWYWx1ZShpbnB1dCk7XG4gICAgaWYgKGJvb2xTdHIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGJvb2xTdHI7XG4gICAgaWYgKGJvb2xTdHIgPT09ICcxJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9vbFN0ciA9PT0gJzAnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEVuY29kZXMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG51bVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZW5jb2RlZCBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZU51bWJlcihudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhudW0pO1xufVxuLyoqXG4gKiBEZWNvZGVzIGEgbnVtYmVyIGZyb20gYSBzdHJpbmcuIElmIHRoZSBudW1iZXIgaXMgaW52YWxpZCxcbiAqIGl0IHJldHVybnMgdW5kZWZpbmVkLlxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCB0aGUgZW5jb2RlZCBudW1iZXIgc3RyaW5nXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBudW1iZXIgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU51bWJlcihpbnB1dCkge1xuICAgIHZhciBudW1TdHIgPSBnZXRFbmNvZGVkVmFsdWUoaW5wdXQpO1xuICAgIGlmIChudW1TdHIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG51bVN0cjtcbiAgICBpZiAobnVtU3RyID09PSAnJylcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgdmFyIHJlc3VsdCA9ICtudW1TdHI7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRW5jb2RlcyBhIHN0cmluZyB3aGlsZSBzYWZlbHkgaGFuZGxpbmcgbnVsbCBhbmQgdW5kZWZpbmVkIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIGEgc3RyaW5nIHRvIGVuY29kZVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZW5jb2RlZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVN0cmluZyhzdHIpIHtcbiAgICBpZiAoc3RyID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhzdHIpO1xufVxuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdoaWxlIHNhZmVseSBoYW5kbGluZyBudWxsIGFuZCB1bmRlZmluZWQgdmFsdWVzLlxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCB0aGUgZW5jb2RlZCBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHN0cmluZyB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nKGlucHV0KSB7XG4gICAgdmFyIHN0ciA9IGdldEVuY29kZWRWYWx1ZShpbnB1dCwgdHJ1ZSk7XG4gICAgaWYgKHN0ciA9PSBudWxsKVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIHJldHVybiBTdHJpbmcoc3RyKTtcbn1cbi8qKlxuICogRGVjb2RlcyBhbiBlbnVtIHZhbHVlIHdoaWxlIHNhZmVseSBoYW5kbGluZyBudWxsIGFuZCB1bmRlZmluZWQgdmFsdWVzLlxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCB0aGUgZW5jb2RlZCBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nW119IGVudW1WYWx1ZXMgYWxsb3dlZCBlbnVtIHZhbHVlc1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgc3RyaW5nIHZhbHVlIGZyb20gZW51bVZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRW51bShpbnB1dCwgZW51bVZhbHVlcykge1xuICAgIHZhciBzdHIgPSBkZWNvZGVTdHJpbmcoaW5wdXQpO1xuICAgIGlmIChzdHIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICByZXR1cm4gZW51bVZhbHVlcy5pbmNsdWRlcyhzdHIpID8gc3RyIDogdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBFbmNvZGVzIGFueXRoaW5nIGFzIGEgSlNPTiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtBbnl9IGFueSBUaGUgdGhpbmcgdG8gYmUgZW5jb2RlZFxuICogQHJldHVybiB7U3RyaW5nfSBUaGUgSlNPTiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW55XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVKc29uKGFueSkge1xuICAgIGlmIChhbnkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYW55O1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYW55KTtcbn1cbi8qKlxuICogRGVjb2RlcyBhIEpTT04gc3RyaW5nIGludG8gamF2YXNjcmlwdFxuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgSlNPTiBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAqIEByZXR1cm4ge0FueX0gVGhlIGphdmFzY3JpcHQgcmVwcmVzZW50YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUpzb24oaW5wdXQpIHtcbiAgICB2YXIganNvblN0ciA9IGdldEVuY29kZWRWYWx1ZShpbnB1dCk7XG4gICAgaWYgKGpzb25TdHIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGpzb25TdHI7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShqc29uU3RyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogaWdub3JlIGVycm9ycywgcmV0dXJuaW5nIHVuZGVmaW5lZCAqL1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBFbmNvZGVzIGFuIGFycmF5IGFzIGEgSlNPTiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGJlIGVuY29kZWRcbiAqIEByZXR1cm4ge1N0cmluZ1tdfSBUaGUgYXJyYXkgb2Ygc3RyaW5ncyB0byBiZSBwdXQgaW4gdGhlIFVSTFxuICogYXMgcmVwZWF0ZWQgcXVlcnkgcGFyYW1ldGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQXJyYXkoYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbi8qKlxuICogRGVjb2RlcyBhbiBhcnJheSBvciBzaW5ndWxhciB2YWx1ZSBhbmQgcmV0dXJucyBpdCBhcyBhbiBhcnJheVxuICogb3IgdW5kZWZpbmVkIGlmIGZhbHN5LiBGaWx0ZXJzIG91dCB1bmRlZmluZWQgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGlucHV0IFRoZSBpbnB1dCB2YWx1ZVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBqYXZhc2NyaXB0IHJlcHJlc2VudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVBcnJheShpbnB1dCkge1xuICAgIHZhciBhcnIgPSBnZXRFbmNvZGVkVmFsdWVBcnJheShpbnB1dCk7XG4gICAgaWYgKGFyciA9PSBudWxsKVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIHJldHVybiBhcnI7XG59XG4vKipcbiAqIEVuY29kZXMgYSBudW1lcmljIGFycmF5IGFzIGEgSlNPTiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGJlIGVuY29kZWRcbiAqIEByZXR1cm4ge1N0cmluZ1tdfSBUaGUgYXJyYXkgb2Ygc3RyaW5ncyB0byBiZSBwdXQgaW4gdGhlIFVSTFxuICogYXMgcmVwZWF0ZWQgcXVlcnkgcGFyYW1ldGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlTnVtZXJpY0FycmF5KGFycmF5KSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkubWFwKFN0cmluZyk7XG59XG4vKipcbiAqIERlY29kZXMgYW4gYXJyYXkgb3Igc2luZ3VsYXIgdmFsdWUgYW5kIHJldHVybnMgaXQgYXMgYW4gYXJyYXlcbiAqIG9yIHVuZGVmaW5lZCBpZiBmYWxzeS4gRmlsdGVycyBvdXQgdW5kZWZpbmVkIGFuZCBOYU4gdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGlucHV0IFRoZSBpbnB1dCB2YWx1ZVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBqYXZhc2NyaXB0IHJlcHJlc2VudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVOdW1lcmljQXJyYXkoaW5wdXQpIHtcbiAgICB2YXIgYXJyID0gZGVjb2RlQXJyYXkoaW5wdXQpO1xuICAgIGlmIChhcnIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gKGQgPT09ICcnIHx8IGQgPT0gbnVsbCA/IG51bGwgOiArZCk7IH0pO1xufVxuLyoqXG4gKiBFbmNvZGVzIGFuIGFycmF5IGFzIGEgZGVsaW1pdGVkIHN0cmluZy4gRm9yIGV4YW1wbGUsXG4gKiBbJ2EnLCAnYiddIC0+ICdhX2InIHdpdGggZW50cnlTZXBhcmF0b3I9J18nXG4gKlxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBiZSBlbmNvZGVkXG4gKiBAcGFyYW0gZW50cnlTZXBhcmF0b3IgVGhlIHN0cmluZyB1c2VkIHRvIGRlbGltaXQgZW50cmllc1xuICogQHJldHVybiBUaGUgYXJyYXkgYXMgYSBzdHJpbmcgd2l0aCBlbGVtZW50cyBqb2luZWQgYnkgdGhlXG4gKiBlbnRyeSBzZXBhcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZEFycmF5KGFycmF5LCBlbnRyeVNlcGFyYXRvcikge1xuICAgIGlmIChlbnRyeVNlcGFyYXRvciA9PT0gdm9pZCAwKSB7IGVudHJ5U2VwYXJhdG9yID0gJ18nOyB9XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkuam9pbihlbnRyeVNlcGFyYXRvcik7XG59XG4vKipcbiAqIERlY29kZXMgYSBkZWxpbWl0ZWQgc3RyaW5nIGludG8gamF2YXNjcmlwdCBhcnJheS4gRm9yIGV4YW1wbGUsXG4gKiAnYV9iJyAtPiBbJ2EnLCAnYiddIHdpdGggZW50cnlTZXBhcmF0b3I9J18nXG4gKlxuICogSWYgYW4gYXJyYXkgaXMgcHJvdmlkZWQgYXMgaW5wdXQsIG9ubHkgdGhlIGZpcnN0IGVudHJ5IGlzIHVzZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBKU09OIHN0cmluZyByZXByZXNlbnRhdGlvblxuICogQHBhcmFtIGVudHJ5U2VwYXJhdG9yIFRoZSBhcnJheSBhcyBhIHN0cmluZyB3aXRoIGVsZW1lbnRzIGpvaW5lZCBieSB0aGVcbiAqIGVudHJ5IHNlcGFyYXRvclxuICogQHJldHVybiB7QXJyYXl9IFRoZSBqYXZhc2NyaXB0IHJlcHJlc2VudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRBcnJheShpbnB1dCwgZW50cnlTZXBhcmF0b3IpIHtcbiAgICBpZiAoZW50cnlTZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBlbnRyeVNlcGFyYXRvciA9ICdfJzsgfVxuICAgIHZhciBhcnJheVN0ciA9IGdldEVuY29kZWRWYWx1ZShpbnB1dCwgdHJ1ZSk7XG4gICAgaWYgKGFycmF5U3RyID09IG51bGwpXG4gICAgICAgIHJldHVybiBhcnJheVN0cjtcbiAgICBpZiAoYXJyYXlTdHIgPT09ICcnKVxuICAgICAgICByZXR1cm4gW107XG4gICAgcmV0dXJuIGFycmF5U3RyLnNwbGl0KGVudHJ5U2VwYXJhdG9yKTtcbn1cbi8qKlxuICogRW5jb2RlcyBhIG51bWVyaWMgYXJyYXkgYXMgYSBkZWxpbWl0ZWQgc3RyaW5nLiAoYWxpYXMgb2YgZW5jb2RlRGVsaW1pdGVkQXJyYXkpXG4gKiBGb3IgZXhhbXBsZSwgWzEsIDJdIC0+ICcxXzInIHdpdGggZW50cnlTZXBhcmF0b3I9J18nXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGJlIGVuY29kZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIEpTT04gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFycmF5XG4gKi9cbmV4cG9ydCB2YXIgZW5jb2RlRGVsaW1pdGVkTnVtZXJpY0FycmF5ID0gZW5jb2RlRGVsaW1pdGVkQXJyYXk7XG4vKipcbiAqIERlY29kZXMgYSBkZWxpbWl0ZWQgc3RyaW5nIGludG8gamF2YXNjcmlwdCBhcnJheSB3aGVyZSBhbGwgZW50cmllcyBhcmUgbnVtYmVyc1xuICogRm9yIGV4YW1wbGUsICcxXzInIC0+IFsxLCAyXSB3aXRoIGVudHJ5U2VwYXJhdG9yPSdfJ1xuICpcbiAqIElmIGFuIGFycmF5IGlzIHByb3ZpZGVkIGFzIGlucHV0LCBvbmx5IHRoZSBmaXJzdCBlbnRyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBqc29uU3RyIFRoZSBKU09OIHN0cmluZyByZXByZXNlbnRhdGlvblxuICogQHJldHVybiB7QXJyYXl9IFRoZSBqYXZhc2NyaXB0IHJlcHJlc2VudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWROdW1lcmljQXJyYXkoYXJyYXlTdHIsIGVudHJ5U2VwYXJhdG9yKSB7XG4gICAgaWYgKGVudHJ5U2VwYXJhdG9yID09PSB2b2lkIDApIHsgZW50cnlTZXBhcmF0b3IgPSAnXyc7IH1cbiAgICB2YXIgZGVjb2RlZCA9IGRlY29kZURlbGltaXRlZEFycmF5KGFycmF5U3RyLCBlbnRyeVNlcGFyYXRvcik7XG4gICAgaWYgKGRlY29kZWQgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGRlY29kZWQ7XG4gICAgcmV0dXJuIGRlY29kZWQubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiAoZCA9PT0gJycgfHwgZCA9PSBudWxsID8gbnVsbCA6ICtkKTsgfSk7XG59XG4vKipcbiAqIEVuY29kZSBzaW1wbGUgb2JqZWN0cyBhcyByZWFkYWJsZSBzdHJpbmdzLiBXb3JrcyBvbmx5IGZvciBzaW1wbGUsXG4gKiBmbGF0IG9iamVjdHMgd2hlcmUgdmFsdWVzIGFyZSBudW1iZXJzLCBzdHJpbmdzLlxuICpcbiAqIEZvciBleGFtcGxlIHsgZm9vOiBiYXIsIGJvbzogYmF6IH0gLT4gXCJmb28tYmFyX2Jvby1iYXpcIlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBlbmNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlWYWxTZXBhcmF0b3I9XCItXCIgVGhlIHNlcGFyYXRvciBiZXR3ZWVuIGtleXMgYW5kIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5U2VwYXJhdG9yPVwiX1wiIFRoZSBzZXBhcmF0b3IgYmV0d2VlbiBlbnRyaWVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBlbmNvZGVkIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlT2JqZWN0KG9iaiwga2V5VmFsU2VwYXJhdG9yLCBlbnRyeVNlcGFyYXRvcikge1xuICAgIGlmIChrZXlWYWxTZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBrZXlWYWxTZXBhcmF0b3IgPSAnLSc7IH1cbiAgICBpZiAoZW50cnlTZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBlbnRyeVNlcGFyYXRvciA9ICdfJzsgfVxuICAgIGlmIChvYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG9iajsgLy8gbnVsbCBvciB1bmRlZmluZWRcbiAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoKVxuICAgICAgICByZXR1cm4gJyc7IC8vIHt9IGNhc2VcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFwiXCIgKyBrZXkgKyBrZXlWYWxTZXBhcmF0b3IgKyBvYmpba2V5XTsgfSlcbiAgICAgICAgLmpvaW4oZW50cnlTZXBhcmF0b3IpO1xufVxuLyoqXG4gKiBEZWNvZGVzIGEgc2ltcGxlIG9iamVjdCB0byBqYXZhc2NyaXB0LiBDdXJyZW50bHkgd29ya3Mgb25seSBmb3Igc2ltcGxlLFxuICogZmxhdCBvYmplY3RzIHdoZXJlIHZhbHVlcyBhcmUgc3RyaW5ncy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBcImZvby1iYXJfYm9vLWJhelwiIC0+IHsgZm9vOiBiYXIsIGJvbzogYmF6IH1cbiAqXG4gKiBJZiBhbiBhcnJheSBpcyBwcm92aWRlZCBhcyBpbnB1dCwgb25seSB0aGUgZmlyc3QgZW50cnkgaXMgdXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIG9iamVjdCBzdHJpbmcgdG8gZGVjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5VmFsU2VwYXJhdG9yPVwiLVwiIFRoZSBzZXBhcmF0b3IgYmV0d2VlbiBrZXlzIGFuZCB2YWx1ZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVNlcGFyYXRvcj1cIl9cIiBUaGUgc2VwYXJhdG9yIGJldHdlZW4gZW50cmllc1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgamF2YXNjcmlwdCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU9iamVjdChpbnB1dCwga2V5VmFsU2VwYXJhdG9yLCBlbnRyeVNlcGFyYXRvcikge1xuICAgIGlmIChrZXlWYWxTZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBrZXlWYWxTZXBhcmF0b3IgPSAnLSc7IH1cbiAgICBpZiAoZW50cnlTZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBlbnRyeVNlcGFyYXRvciA9ICdfJzsgfVxuICAgIHZhciBvYmpTdHIgPSBnZXRFbmNvZGVkVmFsdWUoaW5wdXQsIHRydWUpO1xuICAgIGlmIChvYmpTdHIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG9ialN0cjtcbiAgICBpZiAob2JqU3RyID09PSAnJylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIga2V5VmFsU2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChrZXlWYWxTZXBhcmF0b3IgKyBcIiguKilcIik7XG4gICAgb2JqU3RyLnNwbGl0KGVudHJ5U2VwYXJhdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeVN0cikge1xuICAgICAgICB2YXIgX2EgPSBlbnRyeVN0ci5zcGxpdChrZXlWYWxTZXBhcmF0b3JSZWdFeHApLCBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xufVxuLyoqXG4gKiBFbmNvZGUgc2ltcGxlIG9iamVjdHMgYXMgcmVhZGFibGUgc3RyaW5ncy4gQWxpYXMgb2YgZW5jb2RlT2JqZWN0LlxuICpcbiAqIEZvciBleGFtcGxlIHsgZm9vOiAxMjMsIGJvbzogNTIxIH0gLT4gXCJmb28tMTIzX2Jvby01MjFcIlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBlbmNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlWYWxTZXBhcmF0b3I9XCItXCIgVGhlIHNlcGFyYXRvciBiZXR3ZWVuIGtleXMgYW5kIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5U2VwYXJhdG9yPVwiX1wiIFRoZSBzZXBhcmF0b3IgYmV0d2VlbiBlbnRyaWVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBlbmNvZGVkIG9iamVjdFxuICovXG5leHBvcnQgdmFyIGVuY29kZU51bWVyaWNPYmplY3QgPSBlbmNvZGVPYmplY3Q7XG4vKipcbiAqIERlY29kZXMgYSBzaW1wbGUgb2JqZWN0IHRvIGphdmFzY3JpcHQgd2hlcmUgYWxsIHZhbHVlcyBhcmUgbnVtYmVycy5cbiAqIEN1cnJlbnRseSB3b3JrcyBvbmx5IGZvciBzaW1wbGUsIGZsYXQgb2JqZWN0cy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBcImZvby0xMjNfYm9vLTUyMVwiIC0+IHsgZm9vOiAxMjMsIGJvbzogNTIxIH1cbiAqXG4gKiBJZiBhbiBhcnJheSBpcyBwcm92aWRlZCBhcyBpbnB1dCwgb25seSB0aGUgZmlyc3QgZW50cnkgaXMgdXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIG9iamVjdCBzdHJpbmcgdG8gZGVjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5VmFsU2VwYXJhdG9yPVwiLVwiIFRoZSBzZXBhcmF0b3IgYmV0d2VlbiBrZXlzIGFuZCB2YWx1ZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVNlcGFyYXRvcj1cIl9cIiBUaGUgc2VwYXJhdG9yIGJldHdlZW4gZW50cmllc1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgamF2YXNjcmlwdCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU51bWVyaWNPYmplY3QoaW5wdXQsIGtleVZhbFNlcGFyYXRvciwgZW50cnlTZXBhcmF0b3IpIHtcbiAgICBpZiAoa2V5VmFsU2VwYXJhdG9yID09PSB2b2lkIDApIHsga2V5VmFsU2VwYXJhdG9yID0gJy0nOyB9XG4gICAgaWYgKGVudHJ5U2VwYXJhdG9yID09PSB2b2lkIDApIHsgZW50cnlTZXBhcmF0b3IgPSAnXyc7IH1cbiAgICB2YXIgZGVjb2RlZCA9IGRlY29kZU9iamVjdChpbnB1dCwga2V5VmFsU2VwYXJhdG9yLCBlbnRyeVNlcGFyYXRvcik7XG4gICAgaWYgKGRlY29kZWQgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGRlY29kZWQ7XG4gICAgLy8gY29udmVydCB0byBudW1iZXJzXG4gICAgdmFyIGRlY29kZWROdW1iZXJPYmogPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMoZGVjb2RlZCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XG4gICAgICAgIGRlY29kZWROdW1iZXJPYmpba2V5XSA9IGRlY29kZU51bWJlcihkZWNvZGVkW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZE51bWJlck9iajtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBzdHJpbmdpZnksIHBhcnNlIGFzIHBhcnNlUXVlcnlTdHJpbmcsIHBhcnNlVXJsLCB9IGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG4vKipcbiAqIEFuIGV4YW1wbGUgb2YgYSB0cmFuc2Zvcm1TZWFyY2hTdHJpbmcgZnVuY3Rpb24gdGhhdCB1bmRvZXMgZW5jb2Rpbmcgb2ZcbiAqIGNvbW1vbiBKU09OIGNoYXJhY3RlcnMgdGhhdCBhcmUgdGVjaG5pY2FsbHkgYWxsb3dlZCBpbiBVUkxzLlxuICovXG52YXIgSlNPTl9TQUZFX0NIQVJTID0gXCJ7fVtdLFxcXCI6XCJcbiAgICAuc3BsaXQoJycpXG4gICAgLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gW2QsIGVuY29kZVVSSUNvbXBvbmVudChkKV07IH0pO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVNlYXJjaFN0cmluZ0pzb25TYWZlKHNlYXJjaFN0cmluZykge1xuICAgIHZhciBzdHIgPSBzZWFyY2hTdHJpbmc7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBKU09OX1NBRkVfQ0hBUlNfMSA9IEpTT05fU0FGRV9DSEFSUzsgX2kgPCBKU09OX1NBRkVfQ0hBUlNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF9hID0gSlNPTl9TQUZFX0NIQVJTXzFbX2ldLCBjaGFyID0gX2FbMF0sIGNvZGUgPSBfYVsxXTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxcXCcgKyBjb2RlLCAnZycpLCBjaGFyKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbi8qKlxuICogVXBkYXRlIGEgbG9jYXRpb24sIHdpcGluZyBvdXQgcGFyYW1ldGVycyBub3QgaW5jbHVkZWQgaW4gZW5jb2RlZFF1ZXJ5XG4gKiBJZiBhIHBhcmFtIGlzIHNldCB0byB1bmRlZmluZWQgaXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIFVSTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKGVuY29kZWRRdWVyeSwgbG9jYXRpb24sIHN0cmluZ2lmeU9wdGlvbnMpIHtcbiAgICB2YXIgZW5jb2RlZFNlYXJjaFN0cmluZyA9IHN0cmluZ2lmeShlbmNvZGVkUXVlcnksIHN0cmluZ2lmeU9wdGlvbnMpO1xuICAgIGlmIChzdHJpbmdpZnlPcHRpb25zICYmIHN0cmluZ2lmeU9wdGlvbnMudHJhbnNmb3JtU2VhcmNoU3RyaW5nKSB7XG4gICAgICAgIGVuY29kZWRTZWFyY2hTdHJpbmcgPSBzdHJpbmdpZnlPcHRpb25zLnRyYW5zZm9ybVNlYXJjaFN0cmluZyhlbmNvZGVkU2VhcmNoU3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIHNlYXJjaCA9IGVuY29kZWRTZWFyY2hTdHJpbmcubGVuZ3RoID8gXCI/XCIgKyBlbmNvZGVkU2VhcmNoU3RyaW5nIDogJyc7XG4gICAgdmFyIGhyZWYgPSBwYXJzZVVybChsb2NhdGlvbi5ocmVmIHx8ICcnKS51cmwgKyBzZWFyY2g7XG4gICAgdmFyIG5ld0xvY2F0aW9uID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGxvY2F0aW9uKSwgeyBrZXk6IFwiXCIgKyBEYXRlLm5vdygpLCAvLyBuZWVkZWQgZm9yIHNvbWUgcm91dGVycyAoZS5nLiByZWFjdC1yb3V0ZXIpXG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIHNlYXJjaDogc2VhcmNoLCBxdWVyeTogZW5jb2RlZFF1ZXJ5IH0pO1xuICAgIHJldHVybiBuZXdMb2NhdGlvbjtcbn1cbi8qKlxuICogVXBkYXRlIGEgbG9jYXRpb24gd2hpbGUgcmV0YWluaW5nIGV4aXN0aW5nIHBhcmFtZXRlcnMuXG4gKiBJZiBhIHBhcmFtIGlzIHNldCB0byB1bmRlZmluZWQgaXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIFVSTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUluTG9jYXRpb24oZW5jb2RlZFF1ZXJ5UmVwbGFjZW1lbnRzLCBsb2NhdGlvbiwgc3RyaW5naWZ5T3B0aW9ucykge1xuICAgIC8vIGV4cGxpY2l0bHkgYXZvaWQgcGFyc2luZyBudW1iZXJzIHRvIGVuc3VyZSB0aGVcbiAgICAvLyByZXR1cm4gdHlwZSBoYXMgdGhlIHNhbWUgc2hhcGUgYXMgRW5jb2RlUXVlcnlcbiAgICB2YXIgY3VyclF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhsb2NhdGlvbi5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiBmYWxzZSB9KTtcbiAgICB2YXIgbmV3UXVlcnkgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3VyclF1ZXJ5KSwgZW5jb2RlZFF1ZXJ5UmVwbGFjZW1lbnRzKTtcbiAgICByZXR1cm4gdXBkYXRlTG9jYXRpb24obmV3UXVlcnksIGxvY2F0aW9uLCBzdHJpbmdpZnlPcHRpb25zKTtcbn1cbiIsIi8qKlxuICogQ29udmVydCB0aGUgdmFsdWVzIGluIHF1ZXJ5IHRvIHN0cmluZ3MgdmlhIHRoZSBlbmNvZGUgZnVuY3Rpb25zIGNvbmZpZ3VyZWRcbiAqIGluIHBhcmFtQ29uZmlnTWFwXG4gKlxuICogQHBhcmFtIHBhcmFtQ29uZmlnTWFwIE1hcCBmcm9tIHF1ZXJ5IG5hbWUgdG8geyBlbmNvZGUsIGRlY29kZSB9IGNvbmZpZ1xuICogQHBhcmFtIHF1ZXJ5IFF1ZXJ5IHVwZGF0ZXMgbWFwcGluZyBwYXJhbSBuYW1lIHRvIGRlY29kZWQgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5UGFyYW1zKHBhcmFtQ29uZmlnTWFwLCBxdWVyeSkge1xuICAgIHZhciBlbmNvZGVkUXVlcnkgPSB7fTtcbiAgICB2YXIgcGFyYW1OYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIHBhcmFtTmFtZXNfMSA9IHBhcmFtTmFtZXM7IF9pIDwgcGFyYW1OYW1lc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcGFyYW1OYW1lID0gcGFyYW1OYW1lc18xW19pXTtcbiAgICAgICAgdmFyIGRlY29kZWRWYWx1ZSA9IHF1ZXJ5W3BhcmFtTmFtZV07XG4gICAgICAgIGlmICghcGFyYW1Db25maWdNYXBbcGFyYW1OYW1lXSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRW5jb2RpbmcgcGFyYW1ldGVyIFwiICsgcGFyYW1OYW1lICsgXCIgYXMgc3RyaW5nIHNpbmNlIGl0IHdhcyBub3QgY29uZmlndXJlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOT1RFOiB3ZSBjb3VsZCBqdXN0IG5vdCBlbmNvZGUgaXQsIGJ1dCBpdCBpcyBwcm9iYWJseSBjb252ZW5pZW50IHRvIGhhdmVcbiAgICAgICAgICAgIC8vIGl0IGJlIGluY2x1ZGVkIGJ5IGRlZmF1bHQgYXMgYSBzdHJpbmcgdHlwZS5cbiAgICAgICAgICAgIGVuY29kZWRRdWVyeVtwYXJhbU5hbWVdID1cbiAgICAgICAgICAgICAgICBkZWNvZGVkVmFsdWUgPT0gbnVsbCA/IGRlY29kZWRWYWx1ZSA6IFN0cmluZyhkZWNvZGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5jb2RlZFF1ZXJ5W3BhcmFtTmFtZV0gPSBwYXJhbUNvbmZpZ01hcFtwYXJhbU5hbWVdLmVuY29kZShxdWVyeVtwYXJhbU5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZFF1ZXJ5O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5jb2RlUXVlcnlQYXJhbXM7XG4iLCJpbXBvcnQgeyBTdHJpbmdQYXJhbSB9IGZyb20gXCJ1c2UtcXVlcnktcGFyYW1zXCI7XG5pbXBvcnQgeyBlbmNvZGVRdWVyeVBhcmFtcyB9IGZyb20gXCJzZXJpYWxpemUtcXVlcnktcGFyYW1zXCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXVlcnktc3RyaW5nXCI7XG5cbmNvbnN0IGVuY29kZVNlYXJjaFF1ZXJ5U3RyaW5nID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHN0cmluZ2lmeShcbiAgICBlbmNvZGVRdWVyeVBhcmFtcyhcbiAgICAgIHtcbiAgICAgICAgdGFnczogU3RyaW5nUGFyYW0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0YWdzOiBxdWVyeSxcbiAgICAgIH1cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgeyBlbmNvZGVTZWFyY2hRdWVyeVN0cmluZyB9O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcbmltcG9ydCB7IEZlYXN0RmVhdHVyZVNlcnZpY2VUeXBlIH0gZnJvbSBcIi4uL3BhcnNlcnMvZmVhc3RGZWF0dXJlU2VydmljZXNcIjtcbmltcG9ydCB7IEZlYXN0RmVhdHVyZVZpZXdUeXBlIH0gZnJvbSBcIi4uL3BhcnNlcnMvZmVhc3RGZWF0dXJlVmlld3NcIjtcbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4uL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5XCI7XG5cbi8vIFVzYWdlIG9mIGdlbmVyaWMgdHlwZSBwYXJhbWV0ZXIgVFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTMyMDM0MDkvaG93LXRvLXRlbGwtdHlwZXNjcmlwdC10aGF0LWltLXJldHVybmluZy1hbi1hcnJheS1vZi1hcnJheXMtb2YtdGhlLWlucHV0LXR5cGVcbmNvbnN0IGJ1aWxkVGFnQ29sbGVjdGlvbiA9IDxUPihcbiAgYXJyYXk6IFRbXSxcbiAgcmVjb3JkRXh0cmFjdG9yOiAodW5rbm93bkZDTzogVCkgPT4gUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCAvLyBBc3N1bWVzIHRoYXQgdGFncyBhcmUgYWx3YXlzIGEgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuKTogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgVFtdPj4gPT4ge1xuICBjb25zdCB0YWdDb2xsZWN0aW9uID0gYXJyYXkucmVkdWNlKFxuICAgIChtZW1vOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBUW10+PiwgZmNvOiBUKSA9PiB7XG4gICAgICBjb25zdCB0YWdzID0gcmVjb3JkRXh0cmFjdG9yKGZjbyk7XG5cbiAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRhZ3MpLmZvckVhY2goKFt0YWdLZXksIHRhZ1ZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICghbWVtb1t0YWdLZXldKSB7XG4gICAgICAgICAgICBtZW1vW3RhZ0tleV0gPSB7XG4gICAgICAgICAgICAgIFt0YWdWYWx1ZV06IFtmY29dLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZW1vW3RhZ0tleV1bdGFnVmFsdWVdKSB7XG4gICAgICAgICAgICAgIG1lbW9bdGFnS2V5XVt0YWdWYWx1ZV0gPSBbZmNvXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lbW9bdGFnS2V5XVt0YWdWYWx1ZV0ucHVzaChmY28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH0sXG4gICAge31cbiAgKTtcblxuICByZXR1cm4gdGFnQ29sbGVjdGlvbjtcbn07XG5cbmNvbnN0IHVzZUZlYXR1cmVWaWV3VGFnc0FnZ3JlZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXJ5LmRhdGEgJiYgcXVlcnkuZGF0YS5vYmplY3RzICYmIHF1ZXJ5LmRhdGEub2JqZWN0cy5mZWF0dXJlVmlld3NcbiAgICAgID8gYnVpbGRUYWdDb2xsZWN0aW9uPEZlYXN0RmVhdHVyZVZpZXdUeXBlPihcbiAgICAgICAgICBxdWVyeS5kYXRhLm9iamVjdHMuZmVhdHVyZVZpZXdzLFxuICAgICAgICAgIChmdikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZ2LnNwZWMudGFncztcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9LCBbcXVlcnkuZGF0YV0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IHVzZUZlYXR1cmVTZXJ2aWNlVGFnc0FnZ3JlZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXJ5LmRhdGEgJiZcbiAgICAgIHF1ZXJ5LmRhdGEub2JqZWN0cyAmJlxuICAgICAgcXVlcnkuZGF0YS5vYmplY3RzLmZlYXR1cmVTZXJ2aWNlc1xuICAgICAgPyBidWlsZFRhZ0NvbGxlY3Rpb248RmVhc3RGZWF0dXJlU2VydmljZVR5cGU+KFxuICAgICAgICAgIHF1ZXJ5LmRhdGEub2JqZWN0cy5mZWF0dXJlU2VydmljZXMsXG4gICAgICAgICAgKGZzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZnMuc3BlYy50YWdzO1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH0sIFtxdWVyeS5kYXRhXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IHsgdXNlRmVhdHVyZVZpZXdUYWdzQWdncmVnYXRpb24sIHVzZUZlYXR1cmVTZXJ2aWNlVGFnc0FnZ3JlZ2F0aW9uIH07XG4iLCJpbXBvcnQgeyBlbmNvZGVTZWFyY2hRdWVyeVN0cmluZyB9IGZyb20gXCIuL2VuY29kZVNlYXJjaFF1ZXJ5U3RyaW5nXCI7XG5pbXBvcnQgeyBGRUFTVF9GQ09fVFlQRVMgfSBmcm9tIFwiLi4vcGFyc2Vycy90eXBlc1wiO1xuXG5pbXBvcnQgeyBGZWFzdEZlYXR1cmVWaWV3VHlwZSB9IGZyb20gXCIuLi9wYXJzZXJzL2ZlYXN0RmVhdHVyZVZpZXdzXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlRmVhdHVyZVZpZXdUYWdzQWdncmVnYXRpb24gfSBmcm9tIFwiLi91c2VUYWdzQWdncmVnYXRpb25cIjtcblxuaW50ZXJmYWNlIEV4cGxvcmF0aW9uU3VnZ2VzdGlvbkl0ZW0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEV4cGxvcmF0aW9uU3VnZ2VzdGlvbiB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGl0ZW1zOiBFeHBsb3JhdGlvblN1Z2dlc3Rpb25JdGVtW107XG59XG5cbmNvbnN0IEZDT19UT19VUkxfTkFNRV9NQVA6IFJlY29yZDxGRUFTVF9GQ09fVFlQRVMsIHN0cmluZz4gPSB7XG4gIGRhdGFTb3VyY2U6IFwiL2RhdGEtc291cmNlXCIsXG4gIGVudGl0eTogXCIvZW50aXR5XCIsXG4gIGZlYXR1cmVWaWV3OiBcIi9mZWF0dXJlLXZpZXdcIixcbiAgZmVhdHVyZVNlcnZpY2U6IFwiL2ZlYXR1cmUtc2VydmljZVwiLFxufTtcblxuY29uc3QgY3JlYXRlU2VhcmNoTGluayA9IChcbiAgRkNPVHlwZTogRkVBU1RfRkNPX1RZUEVTLFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IFVSTCA9IEZDT19UT19VUkxfTkFNRV9NQVBbRkNPVHlwZV07XG5cbiAgcmV0dXJuIFVSTCArIFwiP1wiICsgZW5jb2RlU2VhcmNoUXVlcnlTdHJpbmcoYCR7a2V5fToke3ZhbHVlfWApO1xufTtcblxuY29uc3QgTlVNQkVSX09GX1NVR0dFU1RJT05fR1JPVVBTID0gMjtcbmNvbnN0IE5VTUJFUl9PRl9WQUxVRVNfUEVSX0dST1VQID0gNDtcblxuY29uc3Qgc29ydFRhZ0J5VW5pcXVlVmFsdWVzID0gPFQ+KFxuICB0YWdBZ2dyZWdhdGlvbjogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgVFtdPj5cbikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModGFnQWdncmVnYXRpb24pLnNvcnQoXG4gICAgKFthLCB2YWx1ZXNPZkFdLCBbYiwgdmFsdWVzT2ZCXSkgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlc09mQikubGVuZ3RoIC0gT2JqZWN0LmtleXModmFsdWVzT2ZBKS5sZW5ndGg7XG4gICAgfVxuICApO1xufTtcblxuY29uc3Qgc29ydFRhZ3NCeVRvdGFsVXNhZ2UgPSA8VD4oXG4gIHRhZ0FnZ3JlZ2F0aW9uOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBUW10+PlxuKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh0YWdBZ2dyZWdhdGlvbikuc29ydChcbiAgICAoW2EsIHZhbHVlc09mQV0sIFtiLCB2YWx1ZXNPZkJdKSA9PiB7XG4gICAgICBjb25zdCBjb3VudE9mQSA9IE9iamVjdC52YWx1ZXModmFsdWVzT2ZBKS5yZWR1Y2UoKG1lbW8sIGN1cnJlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIG1lbW8gKyBjdXJyZW50Lmxlbmd0aDtcbiAgICAgIH0sIDApO1xuXG4gICAgICBjb25zdCBjb3VudE9mQiA9IE9iamVjdC52YWx1ZXModmFsdWVzT2ZCKS5yZWR1Y2UoKG1lbW8sIGN1cnJlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIG1lbW8gKyBjdXJyZW50Lmxlbmd0aDtcbiAgICAgIH0sIDApO1xuXG4gICAgICByZXR1cm4gY291bnRPZkIgLSBjb3VudE9mQTtcbiAgICB9XG4gICk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUV4cGxvcmF0aW9uU3VnZ2VzdGlvbnMgPSAoXG4gIHRhZ0FnZ3JlZ2F0aW9uOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBGZWFzdEZlYXR1cmVWaWV3VHlwZVtdPj4sXG4gIHByb2plY3ROYW1lOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBzdWdnZXN0aW9uczogRXhwbG9yYXRpb25TdWdnZXN0aW9uW10gPSBbXTtcblxuICBpZiAodGFnQWdncmVnYXRpb24pIHtcbiAgICBjb25zdCBTb3J0ZWRDYW5kaWRhdGVzID1cbiAgICAgIHNvcnRUYWdCeVVuaXF1ZVZhbHVlczxGZWFzdEZlYXR1cmVWaWV3VHlwZT4odGFnQWdncmVnYXRpb24pO1xuXG4gICAgU29ydGVkQ2FuZGlkYXRlcy5zbGljZSgwLCBOVU1CRVJfT0ZfU1VHR0VTVElPTl9HUk9VUFMpLmZvckVhY2goXG4gICAgICAoW3NlbGVjdGVkVGFnLCBzZWxlY3RlZFRhZ1ZhbHVlc01hcF0pID0+IHtcbiAgICAgICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IGBGZWF0dXJlIFZpZXdzIGJ5IFwiJHtzZWxlY3RlZFRhZ31cImAsXG4gICAgICAgICAgaXRlbXM6IE9iamVjdC5lbnRyaWVzKHNlbGVjdGVkVGFnVmFsdWVzTWFwKVxuICAgICAgICAgICAgLnNvcnQoKFthLCBlbnRyaWVzT2ZBXSwgW2IsIGVudHJpZXNPZkJdKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzT2ZCLmxlbmd0aCAtIGVudHJpZXNPZkEubGVuZ3RoO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zbGljZSgwLCBOVU1CRVJfT0ZfVkFMVUVTX1BFUl9HUk9VUClcbiAgICAgICAgICAgIC5tYXAoKFt0YWdWYWx1ZSwgZnZFbnRyaWVzXSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRhZ1ZhbHVlLFxuICAgICAgICAgICAgICAgIGxpbms6XG4gICAgICAgICAgICAgICAgICBgL3AvJHtwcm9qZWN0TmFtZX1gICtcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlYXJjaExpbmsoXG4gICAgICAgICAgICAgICAgICAgIEZFQVNUX0ZDT19UWVBFU1tcImZlYXR1cmVWaWV3XCJdLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZyxcbiAgICAgICAgICAgICAgICAgICAgdGFnVmFsdWVcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbGFiZWw6IGBGZWF0dXJlIFNlcnZpY2VzIHdoZXJlICR7c2VsZWN0ZWRUYWd9IGlzICcke3RhZ1ZhbHVlfSdgLFxuICAgICAgICAgICAgICAgIGNvdW50OiBmdkVudHJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gc3VnZ2VzdGlvbnM7XG59O1xuXG5jb25zdCB1c2VGQ09FeHBsb3JlU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gdXNlRmVhdHVyZVZpZXdUYWdzQWdncmVnYXRpb24oKTtcbiAgY29uc3QgdGFnQWdncmVnYXRpb24gPSBxdWVyeS5kYXRhO1xuXG4gIGNvbnN0IHsgcHJvamVjdE5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGxldCBkYXRhOiBFeHBsb3JhdGlvblN1Z2dlc3Rpb25bXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBpZiAocXVlcnkuaXNTdWNjZXNzICYmIHRhZ0FnZ3JlZ2F0aW9uICYmIHByb2plY3ROYW1lKSB7XG4gICAgZGF0YSA9IGdlbmVyYXRlRXhwbG9yYXRpb25TdWdnZXN0aW9ucyh0YWdBZ2dyZWdhdGlvbiwgcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRkNPRXhwbG9yZVN1Z2dlc3Rpb25zO1xuZXhwb3J0IHtcbiAgZ2VuZXJhdGVFeHBsb3JhdGlvblN1Z2dlc3Rpb25zLFxuICBzb3J0VGFnQnlVbmlxdWVWYWx1ZXMsXG4gIHNvcnRUYWdzQnlUb3RhbFVzYWdlLFxufTtcbmV4cG9ydCB0eXBlIHsgRXhwbG9yYXRpb25TdWdnZXN0aW9uIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEV1aUhvcml6b250YWxSdWxlLFxuICBFdWlQYW5lbCxcbiAgRXVpVGl0bGUsXG4gIEV1aUJhZGdlLFxuICBFdWlMb2FkaW5nQ29udGVudCxcbiAgRXVpRmxleEdyb3VwLFxuICBFdWlGbGV4SXRlbSxcbiAgRXVpU3BhY2VyLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB1c2VGQ09FeHBsb3JlU3VnZ2VzdGlvbnMgZnJvbSBcIi4uL2hvb2tzL3VzZUZDT0V4cGxvcmVTdWdnZXN0aW9uc1wiO1xuXG5jb25zdCBFeHBsb3JlUGFuZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGRhdGEgfSA9IHVzZUZDT0V4cGxvcmVTdWdnZXN0aW9ucygpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlQYW5lbD5cbiAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgPGgzPkV4cGxvcmUgdGhpcyBQcm9qZWN0PC9oMz5cbiAgICAgIDwvRXVpVGl0bGU+XG4gICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAge2lzTG9hZGluZyAmJiA8RXVpTG9hZGluZ0NvbnRlbnQgbGluZXM9ezN9IC8+fVxuICAgICAge2lzU3VjY2VzcyAmJlxuICAgICAgICBkYXRhICYmXG4gICAgICAgIGRhdGEubWFwKChzdWdnZXN0aW9uR3JvdXAsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHhzXCI+XG4gICAgICAgICAgICAgICAgPGg0PntzdWdnZXN0aW9uR3JvdXAudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICAgICAgPEV1aUZsZXhHcm91cCB3cmFwIHJlc3BvbnNpdmU9e2ZhbHNlfSBndXR0ZXJTaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbkdyb3VwLml0ZW1zLm1hcCgoaXRlbSwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEV1aUZsZXhJdGVtIGdyb3c9e2ZhbHNlfSBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgICAgIDxFdWlCYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoaXRlbS5saW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrQXJpYUxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9ICh7aXRlbS5jb3VudH0pXG4gICAgICAgICAgICAgICAgICAgICAgPC9FdWlCYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJzXCIgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9FdWlQYW5lbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVQYW5lbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEV1aVBhZ2VDb250ZW50LFxuICBFdWlQYWdlQ29udGVudEJvZHksXG4gIEV1aVRleHQsXG4gIEV1aUZsZXhHcm91cCxcbiAgRXVpRmxleEl0ZW0sXG4gIEV1aVRpdGxlLFxuICBFdWlTcGFjZXIsXG4gIEV1aUxvYWRpbmdDb250ZW50LFxuICBFdWlFbXB0eVByb21wdCxcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgeyB1c2VEb2N1bWVudFRpdGxlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZURvY3VtZW50VGl0bGVcIjtcbmltcG9ydCBPYmplY3RzQ291bnRTdGF0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9PYmplY3RzQ291bnRTdGF0c1wiO1xuaW1wb3J0IEV4cGxvcmVQYW5lbCBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBsb3JlUGFuZWxcIjtcbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4uL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5XCI7XG5pbXBvcnQgUmVnaXN0cnlQYXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dHMvUmVnaXN0cnlQYXRoQ29udGV4dFwiO1xuXG5jb25zdCBQcm9qZWN0T3ZlcnZpZXdQYWdlID0gKCkgPT4ge1xuICB1c2VEb2N1bWVudFRpdGxlKFwiRmVhc3QgSG9tZVwiKTtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCB7IGlzTG9hZGluZywgaXNTdWNjZXNzLCBpc0Vycm9yLCBkYXRhIH0gPSB1c2VMb2FkUmVnaXN0cnkocmVnaXN0cnlVcmwpO1xuXG4gIHJldHVybiAoXG4gICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICBoYXNCb3JkZXI9e2ZhbHNlfVxuICAgICAgaGFzU2hhZG93PXtmYWxzZX1cbiAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIm5vbmVcIlxuICAgID5cbiAgICAgIDxFdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICAgIDxFdWlUaXRsZSBzaXplPVwibFwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPEV1aUxvYWRpbmdDb250ZW50IGxpbmVzPXsxfSAvPn1cbiAgICAgICAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YT8ucHJvamVjdCAmJiBgUHJvamVjdDogJHtkYXRhLnByb2plY3R9YH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICA8RXVpU3BhY2VyIC8+XG5cbiAgICAgICAgPEV1aUZsZXhHcm91cD5cbiAgICAgICAgICA8RXVpRmxleEl0ZW0gZ3Jvdz17Mn0+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxFdWlMb2FkaW5nQ29udGVudCBsaW5lcz17NH0gLz59XG4gICAgICAgICAgICB7aXNFcnJvciAmJiAoXG4gICAgICAgICAgICAgIDxFdWlFbXB0eVByb21wdFxuICAgICAgICAgICAgICAgIGljb25UeXBlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17PGgyPkVycm9yIExvYWRpbmcgUHJvamVjdCBDb25maWdzPC9oMj59XG4gICAgICAgICAgICAgICAgYm9keT17XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIFByb2plY3QgQ29uZmlndXJhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBjaGVjayB0aGF0IDxjb2RlPmZlYXR1cmVfc3RvcmUueWFtbDwvY29kZT4gZmlsZSBpc1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgYW5kIHdlbGwtZm9ybWVkLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXNTdWNjZXNzICYmXG4gICAgICAgICAgICAgIChkYXRhPy5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICA8RXVpVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxwcmU+e2RhdGEuZGVzY3JpcHRpb259PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9FdWlUZXh0PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxFdWlUZXh0PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8geW91ciBuZXcgRmVhc3QgcHJvamVjdC4gSW4gdGhpcyBVSSwgeW91IGNhbiBzZWVcbiAgICAgICAgICAgICAgICAgICAgRGF0YSBTb3VyY2VzLCBFbnRpdGllcywgRmVhdHVyZSBWaWV3cyBhbmQgRmVhdHVyZSBTZXJ2aWNlc1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkIGluIEZlYXN0LlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEl0IGxvb2tzIGxpa2UgdGhpcyBwcm9qZWN0IGFscmVhZHkgaGFzIHNvbWUgb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkLiBJZiB5b3UgYXJlIG5ldyB0byB0aGlzIHByb2plY3QsIHdlIHN1Z2dlc3RcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmcgYnkgZXhwbG9yaW5nIHRoZSBGZWF0dXJlIFNlcnZpY2VzLCBhcyB0aGV5XG4gICAgICAgICAgICAgICAgICAgIHJlcHJlc2VudCB0aGUgY29sbGVjdGlvbiBvZiBGZWF0dXJlIFZpZXdzIHNlcnZpbmcgYVxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWN1bGFyIG1vZGVsLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm90ZTwvc3Ryb25nPjogV2UgZW5jb3VyYWdlIHlvdSB0byByZXBsYWNlIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgd2VsY29tZSBtZXNzYWdlIHdpdGggbW9yZSBzdWl0YWJsZSBjb250ZW50IGZvciB5b3VyIHRlYW0uXG4gICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZG8gc28gYnkgc3BlY2lmeWluZyBhe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8Y29kZT5wcm9qZWN0X2Rlc2NyaXB0aW9uPC9jb2RlPiBpbiB5b3Vye1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8Y29kZT5mZWF0dXJlX3N0b3JlLnlhbWw8L2NvZGU+IGZpbGUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9FdWlUZXh0PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxPYmplY3RzQ291bnRTdGF0cyAvPlxuICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgPEV1aUZsZXhJdGVtIGdyb3c9ezF9PlxuICAgICAgICAgICAgPEV4cGxvcmVQYW5lbCAvPlxuICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgIDwvRXVpRmxleEdyb3VwPlxuICAgICAgPC9FdWlQYWdlQ29udGVudEJvZHk+XG4gICAgPC9FdWlQYWdlQ29udGVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RPdmVydmlld1BhZ2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IFByb2plY3RFbnRyeVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHJlZ2lzdHJ5UGF0aDogei5zdHJpbmcoKSxcbn0pO1xuXG5jb25zdCBQcm9qZWN0c0xpc3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGRlZmF1bHQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJvamVjdHM6IHouYXJyYXkoUHJvamVjdEVudHJ5U2NoZW1hKSxcbn0pO1xuXG50eXBlIFByb2plY3RzTGlzdFR5cGUgPSB6LmluZmVyPHR5cGVvZiBQcm9qZWN0c0xpc3RTY2hlbWE+O1xuaW50ZXJmYWNlIFByb2plY3RzTGlzdENvbnRleHRJbnRlcmZhY2Uge1xuICBwcm9qZWN0c0xpc3RQcm9taXNlOiBQcm9taXNlPGFueT47XG4gIGlzQ3VzdG9tOiBib29sZWFuO1xufVxuXG5jb25zdCBQcm9qZWN0TGlzdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxuICBQcm9qZWN0c0xpc3RDb250ZXh0SW50ZXJmYWNlIHwgdW5kZWZpbmVkXG4+KHVuZGVmaW5lZCk7XG5cbmNsYXNzIFByb2plY3RMaXN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkZlYXN0UHJvamVjdExpc3RFcnJvclwiO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RMaXN0RXhhbXBsZVN0cmluZyA9IGBcblxuXFxgXFxgXFxganNvblxue1xuICBcInByb2plY3RzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDcmVkaXQgU2NvcmUgUHJvamVjdFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2plY3QgZm9yIGNyZWRpdCBzY29yaW5nIHRlYW0gYW5kIGFzc29jaWF0ZWQgbW9kZWxzLlwiLFxuICAgICAgXCJpZFwiOiBcImNyZWRpdF9zY29yZV9wcm9qZWN0XCIsXG4gICAgICBcInJlZ2lzdHJ5UGF0aFwiOiBcIi9yZWdpc3RyeS5qc29uXCJcbiAgICB9XG4gIF1cbn1cblxcYFxcYFxcYFxuYDtcblxuY29uc3QgYW50aWNpcGF0ZWRQcm9qZWN0TGlzdEVycm9ycyA9IChcbiAgZXJyOiBFcnJvcixcbiAgaXNDdXN0b21Qcm9qZWN0TGlzdDogYm9vbGVhblxuKSA9PiB7XG4gIGNvbnN0IGlzU3ludGF4RXJyb3IgPSBlcnIuc3RhY2s/LmluZGV4T2YoXCJTeW50YXhFcnJvclwiKSA9PT0gMDtcblxuICAvLyBTdHJhaWdodCB1cCBub3QgYSBKU09OXG4gIGlmIChpc1N5bnRheEVycm9yKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBVbmFibGUgdG8gcHJvcGVybHkgcGFyc2UgUHJvamVjdCBMaXN0IEpTT04uIENoZWNrIHRoYXQgeW91ciBwcm9qZWN0IGxpc3QgaXMgZm9ybWF0dGVkIHByb3Blcmx5LmA7XG5cbiAgICByZXR1cm4gbmV3IFByb2plY3RMaXN0RXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICAvLyBTb21lIHNvcnQgb2YgNDA0XG4gIGNvbnN0IGlzRmFpbGVkVG9GZXRjaCA9IGVyci5tZXNzYWdlLmluZGV4T2YoXCJGYWlsZWQgdG8gZmV0Y2hcIikgPiAtMTtcbiAgaWYgKGlzRmFpbGVkVG9GZXRjaCkge1xuICAgIGNvbnN0IGZvbGxvd1VwTWVzc2FnZSA9IGlzQ3VzdG9tUHJvamVjdExpc3RcbiAgICAgID8gXCJDaGVjayB0aGF0IHRoZSBwcm9taXNlIGluIHlvdXIgRmVhc3QgVUkgY29uZmlndXJhdGlvbiBpcyBzZXQgdXAgcHJvcGVybHkuXCJcbiAgICAgIDogXCJEaWQgeW91IGNyZWF0ZSBhIGBwcm9qZWN0LWxpc3QuanNvbmAgZmlsZSBpbiB0aGUgYC9wdWJsaWMvYCBkaXJlY3Rvcnk/IGUuZy5cIiArXG4gICAgICAgIHByb2plY3RMaXN0RXhhbXBsZVN0cmluZztcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBmZXRjaCBQcm9qZWN0IExpc3QgSlNPTi4gXCIgKyBmb2xsb3dVcE1lc3NhZ2U7XG5cbiAgICByZXR1cm4gbmV3IFByb2plY3RMaXN0RXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHVzZUxvYWRQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0UHJvbWlzZSA9IHVzZUNvbnRleHQoUHJvamVjdExpc3RDb250ZXh0KTtcbiAgLy8gVXNlIHNldFN0YXRlIHRvIHN1cmZhY2UgZXJyb3JzIGluIEVycm9yIEJvdW5kYXJpZXNcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDk4MSNpc3N1ZWNvbW1lbnQtNDY4NDYwMTg3XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgW18sIHNldFF1ZXJ5RXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICByZXR1cm4gdXNlUXVlcnkoXG4gICAgXCJmZWFzdC1wcm9qZWN0cy1saXN0XCIsXG4gICAgKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb2plY3RMaXN0UHJvbWlzZT8ucHJvamVjdHNMaXN0UHJvbWlzZVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhbnRpY2lwYXRlZEVycm9yID0gYW50aWNpcGF0ZWRQcm9qZWN0TGlzdEVycm9ycyhcbiAgICAgICAgICAgIGUsXG4gICAgICAgICAgICBwcm9qZWN0TGlzdFByb21pc2UuaXNDdXN0b21cbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFF1ZXJ5RXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFudGljaXBhdGVkRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYW50aWNpcGF0ZWRFcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW48UHJvamVjdHNMaXN0VHlwZT4oKGpzb24pID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlncyA9IFByb2plY3RzTGlzdFNjaGVtYS5wYXJzZShqc29uKTtcbiAgICAgICAgICAgIHJldHVybiBjb25maWdzO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElmIGEganNvbiBvYmplY3QgaXMgcmV0dXJuZWQsIGJ1dFxuICAgICAgICAgICAgLy8gZG9lcyBub3QgYWRoZXJlIHRvIG91ciBhbnRpY2lwYXRlZFxuICAgICAgICAgICAgLy8gZm9ybWF0LlxuICAgICAgICAgICAgc2V0UXVlcnlFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBQcm9qZWN0TGlzdEVycm9yKFxuICAgICAgICAgICAgICAgIGBFcnJvciBwYXJzaW5nIHByb2plY3QgbGlzdCBKU09OLiBKU09OIE9iamVjdCBkb2VzIG5vdCBtYXRjaCBleHBlY3RlZCB0eXBlIGZvciBhIEZlYXN0IHByb2plY3QgbGlzdC4gQSBwcm9qZWN0IGxpc3QgSlNPTiBmaWxlIHNob3VsZCBsb29rIGxpa2VcbiAgICAgICAgICAgICAgICAke3Byb2plY3RMaXN0RXhhbXBsZVN0cmluZ31cbiAgICAgICAgICAgICAgICBab2QgKG91ciBwYXJzZXIpIHJldHVybmVkIHRoZSBmb2xsb3dpbmc6IFxcblxcbiR7ZX1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWm9kIEVycm9yXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICBlbmFibGVkOiAhIXByb2plY3RMaXN0UHJvbWlzZT8ucHJvamVjdHNMaXN0UHJvbWlzZSxcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0TGlzdENvbnRleHQsIFByb2plY3RzTGlzdFNjaGVtYSwgdXNlTG9hZFByb2plY3RzTGlzdCB9O1xuZXhwb3J0IHR5cGUgeyBQcm9qZWN0c0xpc3RUeXBlLCBQcm9qZWN0c0xpc3RDb250ZXh0SW50ZXJmYWNlIH07XG4iLCJpbXBvcnQgeyBFdWlTZWxlY3QsIHVzZUdlbmVyYXRlZEh0bWxJZCB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlTG9hZFByb2plY3RzTGlzdCB9IGZyb20gXCIuLi9jb250ZXh0cy9Qcm9qZWN0TGlzdENvbnRleHRcIjtcblxuY29uc3QgUHJvamVjdFNlbGVjdG9yID0gKCkgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhIH0gPSB1c2VMb2FkUHJvamVjdHNMaXN0KCk7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkYXRhPy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3QuaWQgPT09IHByb2plY3ROYW1lO1xuICB9KTtcblxuICBjb25zdCBvcHRpb25zID0gZGF0YT8ucHJvamVjdHMubWFwKChwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwLmlkLFxuICAgICAgdGV4dDogcC5uYW1lLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGJhc2ljU2VsZWN0SWQgPSB1c2VHZW5lcmF0ZWRIdG1sSWQoeyBwcmVmaXg6IFwiYmFzaWNTZWxlY3RcIiB9KTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgbmF2aWdhdGUoYC9wLyR7ZS50YXJnZXQudmFsdWV9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RXVpU2VsZWN0XG4gICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgIGhhc05vSW5pdGlhbFNlbGVjdGlvbj17Y3VycmVudFByb2plY3QgPT09IHVuZGVmaW5lZH1cbiAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgIGlkPXtiYXNpY1NlbGVjdElkfVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIHZhbHVlPXtjdXJyZW50UHJvamVjdD8uaWQgfHwgXCJcIn1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IGEgRmVhc3QgUHJvamVjdFwiXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZWxlY3RvcjtcbiIsImltcG9ydCB7IHVzZVJlc29sdmVkUGF0aCwgdXNlTWF0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCB1c2VNYXRjaFN1YnBhdGggPSAodG86IHN0cmluZykgPT4ge1xuICBjb25zdCByZXNvbHZlZCA9IHVzZVJlc29sdmVkUGF0aCh0byk7XG5cbiAgcmV0dXJuIHVzZU1hdGNoKHsgcGF0aDogcmVzb2x2ZWQucGF0aG5hbWUsIGVuZDogZmFsc2UgfSkgIT09IG51bGw7XG59O1xuXG5jb25zdCB1c2VNYXRjaEV4YWN0ID0gKHRvOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzb2x2ZWQgPSB1c2VSZXNvbHZlZFBhdGgodG8pO1xuXG4gIHJldHVybiB1c2VNYXRjaCh7IHBhdGg6IHJlc29sdmVkLnBhdGhuYW1lLCBlbmQ6IHRydWUgfSkgIT09IG51bGw7XG59O1xuXG5leHBvcnQgeyB1c2VNYXRjaFN1YnBhdGgsIHVzZU1hdGNoRXhhY3QgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGF0YVNvdXJjZUljb24gPSAoe1xuICBzaXplLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIHNpemU6IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUuNTc3MTMgNi43OTg3MkM1LjEzNzI3IDcuMjAyMjIgNS4wOTc0MyA3LjQ1NTgxIDUuMDk3NDMgNy41NDM3M0M1LjA5NzQzIDcuNjMxNjYgNS4xMzcyNyA3Ljg4NTI1IDUuNTc3MTMgOC4yODg3NEM2LjAxODEyIDguNjkzMjkgNi43NDE5MyA5LjEyODc3IDcuNzY3MDUgOS41MjY1MUM5LjgwNzM0IDEwLjMxODEgMTIuNzMxMiAxMC44NDEgMTYuMDM4MyAxMC44NDFDMTkuMzQ1NSAxMC44NDEgMjIuMjY5MyAxMC4zMTgxIDI0LjMwOTYgOS41MjY1MUMyNC40NzQ1IDkuNDYyNTIgMjQuNjMxNyA5LjM5NzU2IDI0Ljc4MTEgOS4zMzE5VjEyLjY1MDNDMjIuMzg0NiAxMy40Njc4IDE5LjMyNDQgMTMuOTM4NCAxNi4wMzgzIDEzLjkzODRDMTIuNDQ3NyAxMy45Mzg0IDkuMTI2NjkgMTMuMzc2NSA2LjY0NjYzIDEyLjQxNDJDNS40MTE1NyAxMS45MzUgNC4zMDYzMSAxMS4zMjYzIDMuNDgzMjkgMTAuNTcxM0MyLjY1OTEzIDkuODE1MjMgMiA4Ljc5Mzk5IDIgNy41NDM3M0MyIDYuMjkzNDggMi42NTkxMyA1LjI3MjI0IDMuNDgzMjkgNC41MTYyQzQuMzA2MzEgMy43NjEyMSA1LjQxMTU3IDMuMTUyNDggNi42NDY2MyAyLjY3MzI3QzkuMTI2NjkgMS43MTEwMSAxMi40NDc3IDEuMTQ5MDUgMTYuMDM4MyAxLjE0OTA1QzE5LjYyOSAxLjE0OTA1IDIyLjk1IDEuNzExMDEgMjUuNDMgMi42NzMyN0MyNi42NjUxIDMuMTUyNDggMjcuNzcwNCAzLjc2MTIxIDI4LjU5MzQgNC41MTYyQzI5LjQxNzUgNS4yNzIyNCAzMC4wNzY3IDYuMjkzNDggMzAuMDc2NyA3LjU0MzczQzMwLjA3NjcgNy41NjA0MyAzMC4wNzY1IDIzLjUzMzggMzAuMDc2MyAyMy41NTA0QzMwLjA1OSAyNC43Nzc5IDI5LjQwNjUgMjUuNzgyIDI4LjU5MzQgMjYuNTI4QzI4LjEzNDMgMjYuOTQ5MSAyNy41ODc1IDI3LjMyNDcgMjYuOTc5MiAyNy42NTc3VjcuNTQzNzNDMjYuOTc5MiA3LjQ1NTgxIDI2LjkzOTQgNy4yMDIyMiAyNi40OTk1IDYuNzk4NzJDMjYuMDU4NSA2LjM5NDE4IDI1LjMzNDcgNS45NTg3IDI0LjMwOTYgNS41NjA5NUMyMi4yNjkzIDQuNzY5MzIgMTkuMzQ1NSA0LjI0NjQ3IDE2LjAzODMgNC4yNDY0N0MxMi43MzEyIDQuMjQ2NDcgOS44MDczNCA0Ljc2OTMyIDcuNzY3MDUgNS41NjA5NUM2Ljc0MTkzIDUuOTU4NyA2LjAxODEyIDYuMzk0MTggNS41NzcxMyA2Ljc5ODcyWlwiXG4gICAgICAgIGZpbGw9XCIjMDU2OUVBXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUuMDk3NDMgMjMuNDMwNUM1LjA5NzQzIDIzLjUxODUgNS4xMzcyNyAyMy43NzIxIDUuNTc3MTMgMjQuMTc1NkM2LjAxODEyIDI0LjU4MDEgNi43NDE5MyAyNS4wMTU2IDcuNzY3MDUgMjUuNDEzM0M5LjgwNzM0IDI2LjIwNSAxMi43MzEyIDI2LjcyNzggMTYuMDM4MyAyNi43Mjc4QzE5LjM0NTUgMjYuNzI3OCAyMi4yNjkzIDI2LjIwNSAyNC4zMDk2IDI1LjQxMzNDMjQuNDc0NSAyNS4zNDkzIDI0LjYzMTcgMjUuMjg0NCAyNC43ODExIDI1LjIxODdWMjguNTM3MUMyMi4zODQ2IDI5LjM1NDUgMTkuMzI0NCAyOS44MjUyIDE2LjAzODMgMjkuODI1MkMxMi40NDc3IDI5LjgyNTIgOS4xMjY2OSAyOS4yNjMzIDYuNjQ2NjMgMjguMzAxQzUuNDExNTcgMjcuODIxOCA0LjMwNjMxIDI3LjIxMzEgMy40ODMyOSAyNi40NTgxQzIuNjU5MTMgMjUuNzAyIDIgMjQuNjgwOCAyIDIzLjQzMDVMMi4wMDE0MSAxMS4wOTA4QzIuMzk5NjcgMTIuNDM5NiAzLjk5ODM0IDEzLjUzODcgNS4wOTc0MyAxMy45ODg0VjIzLjQzMDVaXCJcbiAgICAgICAgZmlsbD1cIiMwNTY5RUFcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IERhdGFTb3VyY2VJY29uMTYgPSAoKSA9PiB7XG4gIHJldHVybiA8RGF0YVNvdXJjZUljb24gc2l6ZT17MTZ9IGNsYXNzTmFtZT1cImV1aVNpZGVOYXZJdGVtQnV0dG9uX19pY29uXCIgLz47XG59O1xuXG5jb25zdCBEYXRhU291cmNlSWNvbjMyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEYXRhU291cmNlSWNvblxuICAgICAgc2l6ZT17MzJ9XG4gICAgICBjbGFzc05hbWU9XCJldWlJY29uIGV1aUljb24tLXhMYXJnZSBldWlQYWdlSGVhZGVyQ29udGVudF9fdGl0bGVJY29uXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IHsgRGF0YVNvdXJjZUljb24sIERhdGFTb3VyY2VJY29uMTYsIERhdGFTb3VyY2VJY29uMzIgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRW50aXR5SWNvbiA9ICh7XG4gIHNpemUsXG4gIGNsYXNzTmFtZSxcbn06IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNi4wMzgzIDUuMDQ1NzlDOS45OTU4NCA1LjA0NTc5IDUuMDk3NDMgOS45NDQyIDUuMDk3NDMgMTUuOTg2N0M1LjA5NzQzIDIxLjUyMDggOS4yMDYxOSAyNi4wOTUyIDE0LjUzOTYgMjYuODI1OFYyMS41MzIxSDE3LjUzNzFDMTcuNTQ2OSAyMi4zNTk1IDE3LjUzNzEgMjkuOTQ2IDE3LjUzNzEgMjkuOTQ2QzE3LjA0NDcgMjkuOTk4MiAxNi41NDQ2IDMwLjAyNSAxNi4wMzgzIDMwLjAyNUM4LjI4NTE4IDMwLjAyNSAyIDIzLjczOTkgMiAxNS45ODY3QzIgOC4yMzM1NCA4LjI4NTE4IDEuOTQ4MzYgMTYuMDM4MyAxLjk0ODM2QzIzLjc5MTUgMS45NDgzNiAzMC4wNzY3IDguMjMzNTQgMzAuMDc2NyAxNS45ODY3QzMwLjA3NjcgMjIuMDkyOSAyNi4xNzgyIDI3LjI4ODUgMjAuNzM0NCAyOS4yMjAzQzIwLjY4NDUgMjkuMDI1OSAyMC42OTY3IDI2LjIyNzEgMjAuNzM0NCAyNS44NzEzQzI0LjQyNyAyNC4xMTM5IDI2Ljk3OTIgMjAuMzQ4NCAyNi45NzkyIDE1Ljk4NjdDMjYuOTc5MiA5Ljk0NDIgMjIuMDgwOCA1LjA0NTc5IDE2LjAzODMgNS4wNDU3OVpcIlxuICAgICAgICBmaWxsPVwiIzA1NjlFQVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xNi4wMzgzIDExLjQ0MDVDMTMuNTI3NSAxMS40NDA1IDExLjQ5MjEgMTMuNDc1OSAxMS40OTIxIDE1Ljk4NjdDMTEuNDkyMSAxOC40OTc1IDEzLjUyNzUgMjAuNTMyOSAxNi4wMzgzIDIwLjUzMjlDMTguNTQ5MSAyMC41MzI5IDIwLjU4NDYgMTguNDk3NSAyMC41ODQ2IDE1Ljk4NjdDMjAuNTg0NiAxMy40NzU5IDE4LjU0OTEgMTEuNDQwNSAxNi4wMzgzIDExLjQ0MDVaTTguMzk0NjggMTUuOTg2N0M4LjM5NDY4IDExLjc2NTMgMTEuODE2OSA4LjM0MzA4IDE2LjAzODMgOC4zNDMwOEMyMC4yNTk4IDguMzQzMDggMjMuNjgyIDExLjc2NTMgMjMuNjgyIDE1Ljk4NjdDMjMuNjgyIDIwLjIwODIgMjAuMjU5OCAyMy42MzA0IDE2LjAzODMgMjMuNjMwNEMxMS44MTY5IDIzLjYzMDQgOC4zOTQ2OCAyMC4yMDgyIDguMzk0NjggMTUuOTg2N1pcIlxuICAgICAgICBmaWxsPVwiIzA1NjlFQVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3QgRW50aXR5SWNvbjE2ID0gKCkgPT4ge1xuICByZXR1cm4gPEVudGl0eUljb24gc2l6ZT17MTZ9IGNsYXNzTmFtZT1cImV1aVNpZGVOYXZJdGVtQnV0dG9uX19pY29uXCIgLz47XG59O1xuXG5jb25zdCBFbnRpdHlJY29uMzIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEVudGl0eUljb25cbiAgICAgIHNpemU9ezMyfVxuICAgICAgY2xhc3NOYW1lPVwiZXVpSWNvbiBldWlJY29uLS14TGFyZ2UgZXVpUGFnZUhlYWRlckNvbnRlbnRfX3RpdGxlSWNvblwiXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEVudGl0eUljb24sIEVudGl0eUljb24xNiwgRW50aXR5SWNvbjMyIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZlYXR1cmVWaWV3SWNvbiA9ICh7XG4gIHNpemUsXG4gIGNsYXNzTmFtZSxcbn06IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0zLjY4NjU3IDE0LjIxMzJMMTUuODM4NSAyMS4yMzI0TDI3Ljk5MDQgMTQuMjEzMkwyOS42NzcgMTUuMTg3NFYxNy4wMzU5TDE1LjgzODUgMjUuMDI5MkwyIDE3LjAzNTlWMTUuMTg3NEwzLjY4NjU3IDE0LjIxMzJaXCJcbiAgICAgICAgZmlsbD1cIiMwNTY5RUFcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMy42ODY1NyAyMS4xODI0TDE1LjgzODUgMjguMjAxNUwyNy45OTA0IDIxLjE4MjRMMjkuNjc3IDIyLjE1NjZWMjQuMDA1TDE1LjgzODUgMzEuOTk4NEwyIDI0LjAwNVYyMi4xNTY2TDMuNjg2NTcgMjEuMTgyNFpcIlxuICAgICAgICBmaWxsPVwiIzA1NjlFQVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xNS44Mzg1IDBMMjkuNjc3IDcuOTkzMzZWOS44NDE4MkwxNS44Mzg1IDE3LjgzNTJMMiA5Ljg0MTgyVjcuOTkzMzZMMTUuODM4NSAwWk02LjQ5NjI2IDguNjEyMjdMMTUuODI3NSAzLjI5NzI2TDI1LjI4MDcgOC42MTIyN0wxNS44Mjc1IDEzLjk4ODRMNi40OTYyNiA4LjYxMjI3WlwiXG4gICAgICAgIGZpbGw9XCIjMDU2OUVBXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBGZWF0dXJlVmlld0ljb24xNiA9ICgpID0+IHtcbiAgcmV0dXJuIDxGZWF0dXJlVmlld0ljb24gc2l6ZT17MTZ9IGNsYXNzTmFtZT1cImV1aVNpZGVOYXZJdGVtQnV0dG9uX19pY29uXCIgLz47XG59O1xuXG5jb25zdCBGZWF0dXJlVmlld0ljb24zMiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmVhdHVyZVZpZXdJY29uXG4gICAgICBzaXplPXszMn1cbiAgICAgIGNsYXNzTmFtZT1cImV1aUljb24gZXVpSWNvbi0teExhcmdlIGV1aVBhZ2VIZWFkZXJDb250ZW50X190aXRsZUljb25cIlxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBGZWF0dXJlVmlld0ljb24sIEZlYXR1cmVWaWV3SWNvbjE2LCBGZWF0dXJlVmlld0ljb24zMiB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGZWF0dXJlU2VydmljZUljb24gPSAoe1xuICBzaXplLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIHNpemU6IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTggMS4xNUwxNS45IDBMMTMuOSAxLjE1TDQuNTUgMTlMMTUuOSAyNUwyMS42NSAyMS43TDIwLjI1IDE4Ljk1TDE1LjkgMjEuNDVMOC44IDE3LjdMMTUuOSAzLjk1TDI1LjYgMjIuODVMMTUuOSAyOC40TDMuNCAyMS4yNUwyIDIzLjk1TDE1LjkgMzJMMjkuNzUgMjRMMTggMS4xNVpcIlxuICAgICAgICBmaWxsPVwiIzA1NjlFQVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3QgRmVhdHVyZVNlcnZpY2VJY29uMTYgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZlYXR1cmVTZXJ2aWNlSWNvbiBzaXplPXsxNn0gY2xhc3NOYW1lPVwiZXVpU2lkZU5hdkl0ZW1CdXR0b25fX2ljb25cIiAvPlxuICApO1xufTtcblxuY29uc3QgRmVhdHVyZVNlcnZpY2VJY29uMzIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZlYXR1cmVTZXJ2aWNlSWNvblxuICAgICAgc2l6ZT17MzJ9XG4gICAgICBjbGFzc05hbWU9XCJldWlJY29uIGV1aUljb24tLXhMYXJnZSBldWlQYWdlSGVhZGVyQ29udGVudF9fdGl0bGVJY29uXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IHsgRmVhdHVyZVNlcnZpY2VJY29uLCBGZWF0dXJlU2VydmljZUljb24xNiwgRmVhdHVyZVNlcnZpY2VJY29uMzIgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGF0YXNldEljb24gPSAoe1xuICBzaXplLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIHNpemU6IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNCA4LjU5Mjg1VjUuMzk1NTFIMjguNDc5N1Y4LjU5Mjg1SDRaXCIgZmlsbD1cIiMwNTY5RUFcIiAvPlxuICAgICAgPHBhdGggZD1cIk00IDE0LjU4NzhWMTEuMjkwNkg3LjI5NzI2VjE0LjU4NzhINFpcIiBmaWxsPVwiIzA1NjlFQVwiIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEwLjA5NDkgMTQuNTg3OFYxMS4yOTA2SDI4LjQ3OTdWMTQuNTg3OEgxMC4wOTQ5WlwiXG4gICAgICAgIGZpbGw9XCIjMDU2OUVBXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aCBkPVwiTTQgMjAuNTgyOVYxNy4yODU2SDcuMjk3MjZWMjAuNTgyOUg0WlwiIGZpbGw9XCIjMDU2OUVBXCIgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTAuMDk0OSAyMC41ODI5VjE3LjI4NTZIMjguNDc5N1YyMC41ODI5SDEwLjA5NDlaXCJcbiAgICAgICAgZmlsbD1cIiMwNTY5RUFcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNCAyNi41Nzc5VjIzLjI4MDZINy4yOTcyNlYyNi41Nzc5SDRaXCIgZmlsbD1cIiMwNTY5RUFcIiAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMC4wOTQ5IDI2LjU3NzlWMjMuMjgwNkgyOC40Nzk3VjI2LjU3NzlIMTAuMDk0OVpcIlxuICAgICAgICBmaWxsPVwiIzA1NjlFQVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3QgRGF0YXNldEljb24xNiA9ICgpID0+IHtcbiAgcmV0dXJuIDxEYXRhc2V0SWNvbiBzaXplPXsxNn0gY2xhc3NOYW1lPVwiZXVpU2lkZU5hdkl0ZW1CdXR0b25fX2ljb25cIiAvPjtcbn07XG5cbmNvbnN0IERhdGFzZXRJY29uMzIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERhdGFzZXRJY29uXG4gICAgICBzaXplPXszMn1cbiAgICAgIGNsYXNzTmFtZT1cImV1aUljb24gZXVpSWNvbi0teExhcmdlIGV1aVBhZ2VIZWFkZXJDb250ZW50X190aXRsZUljb25cIlxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBEYXRhc2V0SWNvbiwgRGF0YXNldEljb24xNiwgRGF0YXNldEljb24zMiB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEV1aUljb24sIEV1aVNpZGVOYXYsIGh0bWxJZEdlbmVyYXRvciB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlTWF0Y2hTdWJwYXRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZU1hdGNoU3VicGF0aFwiO1xuaW1wb3J0IHVzZUxvYWRSZWdpc3RyeSBmcm9tIFwiLi4vcXVlcmllcy91c2VMb2FkUmVnaXN0cnlcIjtcbmltcG9ydCBSZWdpc3RyeVBhdGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9SZWdpc3RyeVBhdGhDb250ZXh0XCI7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJY29uMTYgfSBmcm9tIFwiLi4vZ3JhcGhpY3MvRGF0YVNvdXJjZUljb25cIjtcbmltcG9ydCB7IEVudGl0eUljb24xNiB9IGZyb20gXCIuLi9ncmFwaGljcy9FbnRpdHlJY29uXCI7XG5pbXBvcnQgeyBGZWF0dXJlVmlld0ljb24xNiB9IGZyb20gXCIuLi9ncmFwaGljcy9GZWF0dXJlVmlld0ljb25cIjtcbmltcG9ydCB7IEZlYXR1cmVTZXJ2aWNlSWNvbjE2IH0gZnJvbSBcIi4uL2dyYXBoaWNzL0ZlYXR1cmVTZXJ2aWNlSWNvblwiO1xuaW1wb3J0IHsgRGF0YXNldEljb24xNiB9IGZyb20gXCIuLi9ncmFwaGljcy9EYXRhc2V0SWNvblwiO1xuXG5jb25zdCBTaWRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHsgaXNTdWNjZXNzLCBkYXRhIH0gPSB1c2VMb2FkUmVnaXN0cnkocmVnaXN0cnlVcmwpO1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBbaXNTaWRlTmF2T3Blbk9uTW9iaWxlLCBzZXRpc1NpZGVOYXZPcGVuT25Nb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCB0b2dnbGVPcGVuT25Nb2JpbGUgPSAoKSA9PiB7XG4gICAgc2V0aXNTaWRlTmF2T3Blbk9uTW9iaWxlKCFpc1NpZGVOYXZPcGVuT25Nb2JpbGUpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGFTb3VyY2VzTGFiZWwgPSBgRGF0YSBTb3VyY2VzICR7XG4gICAgaXNTdWNjZXNzICYmIGRhdGE/Lm9iamVjdHMuZGF0YVNvdXJjZXNcbiAgICAgID8gYCgke2RhdGE/Lm9iamVjdHMuZGF0YVNvdXJjZXM/Lmxlbmd0aH0pYFxuICAgICAgOiBcIlwiXG4gIH1gO1xuXG4gIGNvbnN0IGVudGl0aWVzTGFiZWwgPSBgRW50aXRpZXMgJHtcbiAgICBpc1N1Y2Nlc3MgJiYgZGF0YT8ub2JqZWN0cy5lbnRpdGllc1xuICAgICAgPyBgKCR7ZGF0YT8ub2JqZWN0cy5lbnRpdGllcz8ubGVuZ3RofSlgXG4gICAgICA6IFwiXCJcbiAgfWA7XG5cbiAgY29uc3QgZmVhdHVyZVZpZXdzTGFiZWwgPSBgRmVhdHVyZSBWaWV3cyAke1xuICAgIGlzU3VjY2VzcyAmJiBkYXRhPy5tZXJnZWRGVkxpc3QgJiYgZGF0YT8ubWVyZ2VkRlZMaXN0Lmxlbmd0aCA+IDBcbiAgICAgID8gYCgke2RhdGE/Lm1lcmdlZEZWTGlzdC5sZW5ndGh9KWBcbiAgICAgIDogXCJcIlxuICB9YDtcblxuICBjb25zdCBmZWF0dXJlU2VydmljZXNMYWJlbCA9IGBGZWF0dXJlIFNlcnZpY2VzICR7XG4gICAgaXNTdWNjZXNzICYmIGRhdGE/Lm9iamVjdHMuZmVhdHVyZVNlcnZpY2VzXG4gICAgICA/IGAoJHtkYXRhPy5vYmplY3RzLmZlYXR1cmVTZXJ2aWNlcz8ubGVuZ3RofSlgXG4gICAgICA6IFwiXCJcbiAgfWA7XG5cbiAgY29uc3Qgc2F2ZWREYXRhc2V0c0xhYmVsID0gYERhdGFzZXRzICR7XG4gICAgaXNTdWNjZXNzICYmIGRhdGE/Lm9iamVjdHMuc2F2ZWREYXRhc2V0c1xuICAgICAgPyBgKCR7ZGF0YT8ub2JqZWN0cy5zYXZlZERhdGFzZXRzPy5sZW5ndGh9KWBcbiAgICAgIDogXCJcIlxuICB9YDtcblxuICBjb25zdCBzaWRlTmF2ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgICAgaWQ6IGh0bWxJZEdlbmVyYXRvcihcImJhc2ljRXhhbXBsZVwiKSgpLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZShgL3AvJHtwcm9qZWN0TmFtZX0vYCk7XG4gICAgICB9LFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGRhdGFTb3VyY2VzTGFiZWwsXG4gICAgICAgICAgaWQ6IGh0bWxJZEdlbmVyYXRvcihcImRhdGFTb3VyY2VzXCIpKCksXG4gICAgICAgICAgaWNvbjogPEV1aUljb24gdHlwZT17RGF0YVNvdXJjZUljb24xNn0gLz4sXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUoYC9wLyR7cHJvamVjdE5hbWV9L2RhdGEtc291cmNlYCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1NlbGVjdGVkOiB1c2VNYXRjaFN1YnBhdGgoXCJkYXRhLXNvdXJjZVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGVudGl0aWVzTGFiZWwsXG4gICAgICAgICAgaWQ6IGh0bWxJZEdlbmVyYXRvcihcImVudGl0aWVzXCIpKCksXG4gICAgICAgICAgaWNvbjogPEV1aUljb24gdHlwZT17RW50aXR5SWNvbjE2fSAvPixcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtwcm9qZWN0TmFtZX0vZW50aXR5YCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1NlbGVjdGVkOiB1c2VNYXRjaFN1YnBhdGgoXCJlbnRpdHlcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBmZWF0dXJlVmlld3NMYWJlbCxcbiAgICAgICAgICBpZDogaHRtbElkR2VuZXJhdG9yKFwiZmVhdHVyZVZpZXdcIikoKSxcbiAgICAgICAgICBpY29uOiA8RXVpSWNvbiB0eXBlPXtGZWF0dXJlVmlld0ljb24xNn0gLz4sXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUoYC9wLyR7cHJvamVjdE5hbWV9L2ZlYXR1cmUtdmlld2ApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTZWxlY3RlZDogdXNlTWF0Y2hTdWJwYXRoKFwiZmVhdHVyZS12aWV3XCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogZmVhdHVyZVNlcnZpY2VzTGFiZWwsXG4gICAgICAgICAgaWQ6IGh0bWxJZEdlbmVyYXRvcihcImZlYXR1cmVTZXJ2aWNlXCIpKCksXG4gICAgICAgICAgaWNvbjogPEV1aUljb24gdHlwZT17RmVhdHVyZVNlcnZpY2VJY29uMTZ9IC8+LFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlKGAvcC8ke3Byb2plY3ROYW1lfS9mZWF0dXJlLXNlcnZpY2VgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IHVzZU1hdGNoU3VicGF0aChcImZlYXR1cmUtc2VydmljZVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IHNhdmVkRGF0YXNldHNMYWJlbCxcbiAgICAgICAgICBpZDogaHRtbElkR2VuZXJhdG9yKFwic2F2ZWREYXRhc2V0c1wiKSgpLFxuICAgICAgICAgIGljb246IDxFdWlJY29uIHR5cGU9e0RhdGFzZXRJY29uMTZ9IC8+LFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlKGAvcC8ke3Byb2plY3ROYW1lfS9kYXRhLXNldGApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTZWxlY3RlZDogdXNlTWF0Y2hTdWJwYXRoKFwiZGF0YS1zZXRcIiksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8RXVpU2lkZU5hdlxuICAgICAgYXJpYS1sYWJlbD1cIlByb2plY3QgTGV2ZWxcIlxuICAgICAgbW9iaWxlVGl0bGU9XCJGZWFzdFwiXG4gICAgICB0b2dnbGVPcGVuT25Nb2JpbGU9eygpID0+IHRvZ2dsZU9wZW5Pbk1vYmlsZSgpfVxuICAgICAgaXNPcGVuT25Nb2JpbGU9e2lzU2lkZU5hdk9wZW5Pbk1vYmlsZX1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAxOTIgfX1cbiAgICAgIGl0ZW1zPXtzaWRlTmF2fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGZWFzdFdvcmRNYXJrID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCA4NjcuMzU5OTkgMjQ3LjM2XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiIzAzNmFlYVwiXG4gICAgICAgIGQ9XCJNMTEwLjE2MTgzLDE3LjAwOTM3Yy4yMzQuNjQ5MTEuODkyODUuNzU2MzYsMS4zODg3OCwxLjA0NDYzcTguNjU0MTYsNS4wMzAxNiwxNy4zMjgyNywxMC4wMjYxMWE0LjkwMiw0LjkwMiwwLDAsMSwxLjM5MjIyLjkzOSw2LjI1MzI5LDYuMjUzMjksMCwwLDEtMi4wMDk3OSwxLjM0Mjg4UTg0LjA2NzQ2LDU1Ljg4NTYyLDM5LjgzOTc3LDgxLjM1MDQ5YTMuNTAwMiwzLjUwMDIsMCwwLDAtMi4wNzE2LDMuNTQyM3EuMTAyNTEsMzkuNDAwMTYuMDE2LDc4LjgwMDY4YTMuMDA0MDksMy4wMDQwOSwwLDAsMCwxLjcyNCwzLjA4MzY5YzUuNzMzNDIsMy4xOTQ0NCwxMS4zODg1NCw2LjUyOTI1LDE3LjA3OCw5LjgwMjgzYTMuODcyMzcsMy44NzIzNywwLDAsMCwxLjY1NTY3Ljc0MjU0LDQuNzY5ODIsNC43Njk4MiwwLDAsMCwuMTY4MzUtMS45NzA3NXEuMDA5NTUtMzkuMDcyMS4wMDU0Ni03OC4xNDQxOGExMC44NDg1MSwxMC44NDg1MSwwLDAsMC0uMDA4NzMtMS4zMTIyNSwxLjg2OCwxLjg2OCwwLDAsMSwxLjE1Mjg1LTIuMDc4YzIuMzU2NjEtMS4yNzUsNC42NTYxOS0yLjY1NTQxLDYuOTc3NjItMy45OTUzM3E0MS41NzEtMjMuOTk0OTIsODMuMTI2MjgtNDguMDE3MTFhMi42NTE2NSwyLjY1MTY1LDAsMCwxLDMuMDc5NzMuMDA4cTI0LjE5ODksMTQuMDQ0LDQ4LjQ2MDY1LDI3Ljk3OTQ1YTIuMjUyNjksMi4yNTI2OSwwLDAsMSwxLjM3MDQ4LDIuMjg5NDZjLS4wODU2OCwzLjExNjg0LS4xMTI4NSw2LjI0MDkuMDEwMyw5LjM1NTIyYTIuNDYxNjksMi40NjE2OSwwLDAsMS0xLjUyMTMyLDIuNTM1MjhxLTIzLjQwNjI2LDEzLjQ0NzUyLTQ2Ljc3MzIzLDI2Ljk2MzQyYy0xMC42NTk4NCw2LjE1MTY3LTIxLjMwNjEzLDEyLjMyNzA3LTMxLjk5NTkyLDE4LjQyNjI1YTIuODgyMzcsMi44ODIzNywwLDAsMC0xLjcxNCwyLjkxNTM5cS4wNzcxNCw0NS4zMTAzNS4wMzg2NSw5MC42MjA5YTEwLjAxMzM0LDEwLjAxMzM0LDAsMCwwLC4wMDc2NCwxLjE0ODI4LDEuMzMyOTEsMS4zMzI5MSwwLDAsMS0uODA0ODcsMS40NDM3M3EtNC42Mzk1OCwyLjYyOTktOS4yMzkyOCw1LjMyOTY4YTEuNDM5NDUsMS40Mzk0NSwwLDAsMS0xLjY1NzYzLS4wNDQyNWMtMi43MzQtMS42MDkxOS01LjQ3OC0zLjIwMjMtOC4yNDUzNy00Ljc1MzE3YTEuNDQxMSwxLjQ0MTEsMCwwLDEtLjg4Ny0xLjU2NDQ2LDguNjA0NTIsOC42MDQ1MiwwLDAsMCwuMDA1NjYtLjk4NDI1VjEyMC4zNzZjMC0uMzgzMDcuMDE4LS43NjcwOC0uMDAzMTgtMS4xNDg5NWExLjExNjU5LDEuMTE2NTksMCwwLDEsLjY2NzcxLTEuMTkyODZjLjM5MzIxLS4xODkxNC43NTk0OS0uNDM0MDksMS4xMzg1LS42NTI5M3EzNC4yNDk1Ni0xOS43NzQsNjguNDk5LTM5LjU0ODM1Yy40NzIwNi0uMjcyNTYuOTM5MDgtLjU1Mzg0LDEuMzkzMzItLjgyMjA5LjAwNy0uNTQ1MDktLjQ0NTA3LS42MTY3NS0uNzQyMTgtLjc4ODg4LTYuMjAwNDktMy41OTItMTIuNDI2MDgtNy4xNDExOC0xOC41OTYyNy0xMC43ODQyNS0uOTM0NDQtLjU1MTcyLTEuNDk2NzItLjIwNzk0LTIuMjE0NS4yMDY2OFExMjcuMDYzMjYsNzguODU5NSwxMDQuMTc5MTUsOTIuMDYyNzRjLTcuODE2NzUsNC41MTItMTUuNjE4MzcsOS4wNTA2OS0yMy40NjQ5MSwxMy41MTAzM2EyLjY1MjE0LDIuNjUyMTQsMCwwLDAtMS41NDcsMi42Nzg3MnEuMDU3NzIsNTEuNTQ4ODQuMDMwNDksMTAzLjA5Nzc0djEuOTAwODhhMS45ODI0NSwxLjk4MjQ1LDAsMCwxLTEuNDgxODEtLjUxMDU3cS0yOS43MTA0Ny0xNy4xMzM5MS01OS40MjYtMzQuMjU4OWEyLjMyMzMxLDIuMzIzMzEsMCwwLDEtMS4zMjUtMi4zMjk4cS4wNDM4LTUxLjk1OTI2LS4wMDktMTAzLjkxODU1YTIuNTU1NDksMi41NTU0OSwwLDAsMSwxLjU2ODU0LTIuNTIyODFxNDQuMjkzNC0yNS41MTYyMyw4OC41NDg3LTUxLjA5ODVhNy41NzM4LDcuNTczOCwwLDAsMCwyLjQzMTktMS42MDE5MVpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjMmMyYzJjXCJcbiAgICAgICAgZD1cIk00MTkuODQ1MzQsMTI0LjMxOTA3cS4wMDAwNi0yMS43NTA0NS4wMDM0Mi00My41MDA4OGMuMDAwODktMS45OTk4Ni0uMjMzNDYtMS43NzU0NSwxLjcxNjEtMS43NzU5cTMyLjUxMDc0LS4wMDc0OCw2NS4wMjE0Mi0uMDAzMTZjLjA1NDcyLDAsLjEwOTUtLjAwMDI0LjE2NDIyLjAwMDA1LDEuNTk5NDUuMDA4NTEsMS41MzM4Ny0uMTcwODUsMS41MzQxOCwxLjQ3MTY5cS4wMDEsNS4zMzUuMDAwMjQsMTAuNjdjMCwxLjI1ODUyLS4wMzUzNywyLjUxODM2LjAxMjU0LDMuNzc1LjAyNzkzLjczMTYxLS4yNTM0Mi45ODU2MS0uOTUxMjMuOTE4Ni0uMzc5NTgtLjAzNjQ2LS43NjU2My0uMDA2LTEuMTQ4NzQtLjAwNmgtNDMuMzQ3NmMtLjM4MzEyLDAtLjc2OTQ0LjAzMi0xLjE0ODY4LS4wMDYxOS0uNzc5NzktLjA3ODY1LTEuMDc3NzYuMjMxNjktMS4wNTEsMS4wMjQ2OS4wNDYsMS4zNjYzOC4wMTIwOCwyLjczNTQ3LjAxMjA4LDQuMTAzNDEtLjAwMDEyLDQuMTU4NTgtLjAwODM5LDguMzE3MTguMDAzMjMsMTIuNDc1NzQuMDA2NTEsMi4zMTgzOS0uMjU4NjMsMi4wNDE3LDEuOTY5NDksMi4wNDNxMTguODgyNDguMDExLDM3Ljc2NS4wMDM1NGMuMjczNjUsMCwuNTQ3MzMtLjAwMy44MjEuMDAwNTIsMS4zNzQyNi4wMTc1MSwxLjU2NTg1LS4zMzAwNywxLjU1NiwxLjQ3OTc0LS4wMTI1NSwyLjI5ODA3LS4wMDMsNC41OTYyNi0uMDAzLDYuODk0NCwwLDIuMjQzNDQuMDExMjMsNC40ODctLjAwNDU4LDYuNzMwMy0uMDA4NywxLjIzNTc3LS4wMjkxNSwxLjI1NTI3LTEuMjc4MjYsMS4yNTY5MXEtOC43MDIzNy4wMTE0My0xNy40MDQ3My4wMDM0MS0xMC43NTQ4NCwwLTIxLjUwOTYxLjAwMDM2Yy0uNDM3OCwwLS44NzU4OC0uMDAyNjgtMS4zMTMzOC4wMWEuNTQzMjcuNTQzMjcsMCwwLDAtLjU5NDY3LjYxMDA3Yy4wMDEyOC4yNzM1My0uMDA2MTMuNTQ3MDYtLjAwNjE2LjgyMDYxcS0uMDAwNiw4Ljk0NjQuMDAxMjgsMTcuODkyODFjLjAwMSwxLjU1NTc0LjAxMDA3LDEuNTYzMzksMS42NTc2OCwxLjU2MzZxMjIuODIzMTkuMDAzLDQ1LjY0NjM2LjAwNDM1YzIuMjY3OTIuMDAwOTEsMi4wMjQyNC0uMjY2OCwyLjAyODksMS45OTMyMi4wMDkxOSw0LjQzMjE1LS4wMDQ0NSw4Ljg2NDM0LjAwNiwxMy4yOTY0OC4wMDQ1NywxLjk1MDM3LS4xNzQyLDEuNTY0NzMtMS42MzQzNCwxLjU2NTA3cS0zMy40MTM3Ny4wMDc4Ny02Ni44Mjc1OC4wMDM1MmMtLjMyODQsMC0uNjU3MS0uMDExNDktLjk4NTA3LS4wMDA3Mi0uNDY4My4wMTU0LS43MTMxNC0uMTgzNTYtLjcwNjY3LS42Njg0OC4wMDU4LS40Mzc2My0uMDAzNDgtLjg3NTQzLS4wMDM0OC0xLjMxMzE2cS0uMDAwNS0yMS42NjgyNS0uMDAwMzMtNDMuMzM2NjFabTEwNi42NDUzMyw0NS4zMTkyNWMxLjEzNTgtMi41Njg5MSwyLjE0MjgyLTQuODYyNzYsMy4xNjI3OC03LjE1MDg2cTE4LjIyMTEtNDAuODc0NTgsMzYuNDQ1NDMtODEuNzQ3NzVhNi40Mjk1OSw2LjQyOTU5LDAsMCwwLC4zMjY1NC0uNzUxMjIsMS4yNzQsMS4yNzQsMCwwLDEsMS40NTQ4NC0uOTY2YzYuMjM5MDcuMDI5OTMsMTIuNDc4NjMuMDQ5LDE4LjcxNzIyLS4wMTQ3LDEuMDQ5ODEtLjAxMDcxLDEuMjYzNTUuNTg2NTIsMS41NzczOSwxLjI4OTA1cTYuODg3NzksMTUuNDE1NTYsMTMuNzg2MiwzMC44MjYzOCwxMi42ODUwOCwyOC4zNTY2NCwyNS4zNjE1MSw1Ni43MTcxN2EzLjM2MjUxLDMuMzYyNTEsMCwwLDEsLjU3MzI0LDEuNjczMjUsMi40Nzc2NCwyLjQ3NzY0LDAsMCwxLTEuMjgzMzIuMTE4OHEtOS41MjMwNS4wMTI1Ny0xOS4wNDYuMDAyNDFjLTEuNjk4Ni0uMDAyMjQtMS4zOTEuMjQtMi4wOTQtMS40NDU2LTIuMzEzNDEtNS41NDY4NC00LjYyNzItMTEuMDk0LTYuODY0OTMtMTYuNjcxNTFhMS43MTQ2OCwxLjcxNDY4LDAsMCwwLTEuOTAxNzMtMS4yNzQ3OWMtMTMuMDgwMzIuMDM0MzktMjYuMTYwODMuMDE5MzYtMzkuMjQxMjEuMDI2NzYtMS42NzU5MS4wMDA5NS0xLjM1OTM4LS4xNzM3NC0xLjk4NTE3LDEuMzM3MjlxLTMuNDQ5LDguMzI4NzctNi44OTcxNiwxNi42NTc5Yy0uNjQyNywxLjU0MzkzLS4zOTQ3MSwxLjM3MDctMS45ODI3MiwxLjM3MTcxcS05LjM1ODguMDA2LTE4LjcxNzU5LjAwMTY2Wk01NjIuODQ3LDEzNC4xMzdoMjguNTI5MzZjLTQuNzU0LTExLjQ3MjM1LTkuNDQyNzUtMjIuNzg3NDYtMTQuMjY3OTQtMzQuNDMxN1pNNzI3LjE2LDEwMS4zMDg0OGMtMS42MzctLjgwNi0zLjI3Mjg5LTEuNjYzNjYtNC45NTA5My0yLjQyODU0YTQ3Ljc1Nzc4LDQ3Ljc1Nzc4LDAsMCwwLTE5LjMzNzUyLTQuNTIyLDMyLjM1ODU3LDMyLjM1ODU3LDAsMCwwLTkuOTA0LDEuMTE4MzQsMTMuMDU3NjMsMTMuMDU3NjMsMCwwLDAtNS4xMzUwNywyLjgwNjY5LDguMzIwMzcsOC4zMjAzNywwLDAsMC0yLjgyNDU5LDYuMDc4OTEsNy4wMDI1Miw3LjAwMjUyLDAsMCwwLDMuNzcyNzcsNi42MjExNSwzMS45MDYzOSwzMS45MDYzOSwwLDAsMCw2LjM3MTU4LDIuNTY5NDRjNS4wMDA0MywxLjYwNzU3LDEwLjE3NTc4LDIuNTM0MjMsMTUuMjM1NzgsMy45MTE3NCwzLjkwMjQsMS4wNjI0LDcuNzg3NzgsMi4xNzQzNywxMS41NzAyNSwzLjYxNjU1YTI4Ljk1NjY1LDI4Ljk1NjY1LDAsMCwxLDguMjcyNjQsNC45Mjg2NCwxOS41MDQyMiwxOS41MDQyMiwwLDAsMSw3LjEyNzMyLDEyLjUyOTkxLDI1LjU2OCwyNS41NjgsMCwwLDEtNC40MjEzOCwxOS4zMTEzLDI3LjIyNzM2LDI3LjIyNzM2LDAsMCwxLTguNjg5MjEsNy42MjYzMSw0MS4zNDczOSw0MS4zNDczOSwwLDAsMS0xNS45NjQyNCw1LjE0NTI0LDczLjk1NTEsNzMuOTU1MSwwLDAsMS0zMy42MjgxMS0zLjU1ODU3LDQ1LjMwMzQ3LDQ1LjMwMzQ3LDAsMCwxLTExLjI3NTMzLTUuNTg5NTVjLTEuMDU4NDEtLjc0NS0xLjA2Mi0uNzYyODMtLjUyODE0LTEuOTUyNzFxMy4wNTI2NS02LjgwNDA5LDYuMTI1MTMtMTMuNTk5MjVjLjEyOTgyLS4yODcuMTg2NTItLjYzNzU5LjQ5OTgxLS44MTMuNDAyMS0uMTE1LjYwOTM4LjIxMDkxLjg2MTM5LjM4MDM2YTUyLjI3MDMyLDUyLjI3MDMyLDAsMCwwLDIzLjM1MTU2LDguNDgyNiw0My4xNzQ1MSw0My4xNzQ1MSwwLDAsMCwxMy43MTg1Ny0uMzg0NjcsMTMuODU0NTksMTMuODU0NTksMCwwLDAsNi43NTg3OS0zLjEzOTY0LDcuNTI2MDUsNy41MjYwNSwwLDAsMCwyLjYxNDMyLTUuMjk1NTQsNi43NDMxMiw2Ljc0MzEyLDAsMCwwLTIuNDYyNDYtNS44MDkyOCwxOC43MDM3NCwxOC43MDM3NCwwLDAsMC02LjQ2Ny0zLjQ1NWMtNC4xMDQ2OC0xLjM1MzUzLTguMzIyNTgtMi4yNzgzOS0xMi41MTQ3OC0zLjMwMjA2YTE0NC41MzE3MywxNDQuNTMxNzMsMCwwLDEtMTQuNjIwNzgtNC4yNzg2NywyOC43ODU0NCwyOC43ODU0NCwwLDAsMS04LjAxMzYxLTQuNDAxMTIsMjAuNDY0NzksMjAuNDY0NzksMCwwLDEtOC4zMzQtMTQuMzNjLTEuMDUyNDktOS42NjMzLDEuNzc3MjItMTcuODE2NjUsOS41MDkyOC0yNC4wMDAzOWEzMy4zODgwOCwzMy4zODgwOCwwLDAsMSw5LjYxNzg2LTUuMjE0Myw1My43NzI2Nyw1My43NzI2NywwLDAsMSwxOC4yMTU4OC0yLjg4MzY2QTY1LjgwMjE4LDY1LjgwMjE4LDAsMCwxLDcyNy42NDksODIuMzI0YTQ3LjIxMzIxLDQ3LjIxMzIxLDAsMCwxLDUuNDE2LDIuNzI0MDZjLjQ4MzIxLjI3ODcyLjcyNDc5LjU1NjI5LjQ3MDI3LDEuMTcxNTgtMi4wNDU0MSw0Ljk0NTE4LTQuMDYxNjQsOS45MDIzOS02LjA5NCwxNC44NTMtLjAzNTc3LjA4NzI0LS4xNjA1Mi4xMzc5MS0uMjgxMDcuMjM1ODZaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiIzAzNmFlYVwiXG4gICAgICAgIGQ9XCJNMjAyLjM2NDA1LDEwNy4wODE0MWE1Ljc1MDU5LDUuNzUwNTksMCwwLDEsLjE3NywyLjAzNDYxcS4wMDczNSwzMy40MDQ0MS4wMzA1Nyw2Ni44MDg4YTIuNjUzMjMsMi42NTMyMywwLDAsMS0xLjUxNDY1LDIuNjk0NTNxLTI4Ljk1NTYxLDE2LjYyODctNTcuODU2NjgsMzMuMzUyMzZhNC4zNDMxOCw0LjM0MzE4LDAsMCwxLTEuNzE0OS44MTUzOCwyLjM1MTA5LDIuMzUxMDksMCwwLDEtLjIwOTU2LTEuNDk0ODFjLS4wMDk4My02Ljg5NDI3LjAyMjc2LTEzLjc4ODgyLS4wMzU3NC0yMC42ODI1OGEyLjI4MTM4LDIuMjgxMzgsMCwwLDEsMS4zNzE3LTIuMjg2NzljMTIuNTI0NC03LjE4NTI2LDI1LjAwOTc3LTE0LjQzODYzLDM3LjU0OTU4LTIxLjU5NjdhMi44NjY3MSwyLjg2NjcxLDAsMCwwLDEuNjU4LTIuOTUzMzFjLS4wNzc1MS02LjI5MTQ0LS4wMzM1Mi0xMi41ODQzOC0uMDMzNTItMTguODc2Nzh2LTEuOTMyOTFjLTEuODY0Ljg4MzMtMy40MzY0OSwxLjkxMjY4LTUuMDY1NTcsMi44MjUwOS0xLjcxNzc5Ljk2MjA4LTMuNDEyMTQsMS45NjYtNS4xMTY4NSwyLjk1MTQycS0yLjQ4NTgyLDEuNDM3LTQuOTcxODYsMi44NzM2OC0yLjU1NzMyLDEuNDc3NjctNS4xMTUsMi45NTQ2OC0yLjQ4NjE2LDEuNDM2NTMtNC45NzIxOCwyLjg3MzIzLTIuNDg3NjcsMS40MzQwOS00Ljk3ODIzLDIuODYzMTUtMi41NTkzLDEuNDc0LTUuMTE2NjksMi45NTEzOC0yLjQ2MjU1LDEuNDIwMy00LjkyNzQ1LDIuODQxMzNhMi40MjQ3NSwyLjQyNDc1LDAsMCwxLS4yNDYtMS41NzE2N2MtLjAxMDA5LTYuODk0MjcuMDI2NTItMTMuNzg4ODctLjAzODI0LTIwLjY4MjU0YTIuMzk0NzIsMi4zOTQ3MiwwLDAsMSwxLjQ0Mzg2LTIuNDA2NDdxMjguOTQ1ODYtMTYuNjQ1NDQsNTcuODUwOTEtMzMuMzYxNzVjLjU1NTY1LS4zMjA2NywxLjEyNzgxLS42MTI2NywxLjgzMTUxLS45OTMzNVpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjMmMyYzJjXCJcbiAgICAgICAgZD1cIk0zMDUuMjIyMzYsMTI0LjMxNjQzcTAtMjEuNzUwMzEuMDAzNDUtNDMuNTAwNjNjLjAwMDg1LTEuOTk4OTEtLjIzMzY1LTEuNzczLDEuNzE4NDQtMS43NzM0OXEzMi41MTA1Ni0uMDA3NTYsNjUuMDIxLS4wMDMxOWMuMTA5NDMsMCwuMjE4OTMtLjAwMTE1LjMyODQuMDAwMjIsMS4zNTUxLjAxNjgsMS4zNjQuMDE2ODksMS4zNjY0MiwxLjQ3MzVxLjAwODQzLDUuMTcwOC4wMDE4OSwxMC4zNDE2NWMwLDEuMzY4LS4wMzQzOSwyLjczNzA3LjAxMjgyLDQuMTAzMzcuMDI1MzMuNzM0MjUtLjI1NzQ4Ljk4MzM5LS45NTM0My45MTY2Ny0uMzc5NTgtLjAzNjM5LS43NjU1OS0uMDA2LTEuMTQ4NzEtLjAwNnEtMjEuNzU1NzMsMC00My41MTE1Ny4wMDMyOGMtMi4wMzA4OC4wMDA4NS0xLjgxMjgzLS4yNTE1OS0xLjgxNTE1LDEuODU4MDlxLS4wMTA4NCwxMC4wOTU0My0uMDAyNSwyMC4xOTA4N2MwLC4zODMuMDExOTMuNzY2MjQuMDAxNTIsMS4xNDg5MS0uMDEyNTEuNDU5MjkuMTU3NjkuNzIzMDYuNjU3NjkuNzEuNDM3NS0uMDExNDYuODc1NjEuMDAxNDUsMS4zMTM0NC4wMDE0N3ExOS4wNDY1OS4wMDAzMywzOC4wOTMxNC4wMDQ4NWMxLjk0Ny4wMDE0LDEuODM4NS0uMzMyNDksMS44NDA1MiwxLjg0MzUycS4wMDYwOSw2LjY0ODIxLjAwMTE2LDEzLjI5NjQyYy0uMDAwMSwxLjgyOTg1LjEyODU3LDEuNzAyLTEuNjYzNzYsMS43MDIwNnEtMTkuMTI4NywwLTM4LjI1NzMzLjAwNGMtMi4yNjU0Ny4wMDE0Ni0xLjk4MDEtLjI4Mzc2LTEuOTgyNDUsMi4wMjUzN3EtLjAxNDQ2LDE0LjI4MTMyLS4wMDQwNiwyOC41NjI2OCwwLC40MTAzOS0uMDAwMDkuODIwNzdjLS4wMDIxMywxLjcyMTkyLjExNjcsMS41OTc2NS0xLjU5NTI0LDEuNTk3NTlxLTguODY2NDctLjAwMDI3LTE3LjczMy0uMDAyMDdjLTEuNzkzODYtLjAwMTYyLTEuNjkyMzYuMjE1MzktMS42OTI0Mi0xLjY1NTA5cS0uMDAwNTktMjEuODMyNDItLjAwMDE1LTQzLjY2NDgxWk04MTEuODY0NDUsNzkuMDM5MTJoMzcuMjYzMDZhOS4yNDg3NCw5LjI0ODc0LDAsMCwwLC45ODQyNS0uMDA1NTljLjczODEtLjA3OTQ0LDEuMDcxNi4xMjgyMiwxLjA2NTYyLjk3MXEtLjA1MjkyLDcuNTQ4ODQuMDAyNSwxNS4wOTgxNGMuMDA3NjkuOTI4MTctLjM3ODQ4LDEuMDU2NjgtMS4xNjQsMS4wNTM0OS01Ljg1NDY4LS4wMjM3LTExLjcwOTY2LS4wMTI4LTE3LjU2NDUyLS4wMTI3NC0zLjAwOTUyLDAtNi4wMTktLjAwNzc1LTkuMDI4NS4wMDQtMS4xODQzMy4wMDQ2My0xLjE4NzIuMDI0NDYtMS4yMTc0MSwxLjEzODM1LS4wMTA0NC4zODI2Ni0uMDAyLjc2NTgyLS4wMDIsMS4xNDg3NXEtLjAwMDA5LDM0LjYyNzk1LS4wMDMxMSw2OS4yNTU4OWMtLjAwMDQ5LDIuMjA3MDguMjM4NywxLjk0MDY1LTEuODk1MDgsMS45NDQ0cS04LjYxODE0LjAxNTIzLTE3LjIzNjIxLjAwMDE1Yy0yLjEyNjEtLjAwMzU4LTEuODgxNTMuMjU0MDgtMS44ODItMS45NTc1OXEtLjAwNzQxLTM0LjcxLS4wMDgzNi02OS40MmMtLjAwMS0yLjQ0NzEuMzI5MTYtMi4xMDQxOC0yLjA0OC0yLjEwODM3cS0xMi4zOTM2Ny0uMDIxODMtMjQuNzg3MzUtLjAwNTYxYy0uMjE4ODcsMC0uNDM3NzQuMDAwNTUtLjY1NjYxLS4wMDAxLTEuNDctLjAwNDQ4LTEuNDY2NjIuMTgwMi0xLjQ2MDg4LTEuMzgxNzUuMDAzODQtMS4wMzkzNy4wMDA3My0yLjA3ODc2LjAwMDczLTMuMTE4MTVxMC01LjQ5NzguMDAxODMtMTAuOTk1NmMuMDAzLTEuNzk1NDItLjE1My0xLjYwNTE1LDEuNTUyLTEuNjA2NTZxOS41MjA5NC0uMDA3ODksMTkuMDQxOTQtLjAwMjFaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWFzdFdvcmRNYXJrO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBFdWlQYWdlLFxuICBFdWlQYWdlU2lkZUJhcixcbiAgRXVpUGFnZUJvZHksXG4gIEV1aUVycm9yQm91bmRhcnksXG4gIEV1aUhvcml6b250YWxSdWxlLFxuICBFdWlTcGFjZXIsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBSZWdpc3RyeVBhdGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9SZWdpc3RyeVBhdGhDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlTG9hZFByb2plY3RzTGlzdCB9IGZyb20gXCIuLi9jb250ZXh0cy9Qcm9qZWN0TGlzdENvbnRleHRcIjtcblxuaW1wb3J0IFByb2plY3RTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0U2VsZWN0b3JcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcbmltcG9ydCBGZWFzdFdvcmRNYXJrIGZyb20gXCIuLi9ncmFwaGljcy9GZWFzdFdvcmRNYXJrXCI7XG5cbmNvbnN0IExheW91dCA9ICgpID0+IHtcbiAgLy8gUmVnaXN0cnkgUGF0aCBDb250ZXh0IGhhcyB0byBiZSBpbnNpZGUgTGF5b3V0XG4gIC8vIGJlY2F1c2UgaXQgaGFzIHRvIGJlIHVuZGVyIHJvdXRlc1xuICAvLyBpbiBvcmRlciB0byB1c2UgdXNlUGFyYW1zXG4gIGxldCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHVzZUxvYWRQcm9qZWN0c0xpc3QoKTtcblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRhdGE/LnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdC5pZCA9PT0gcHJvamVjdE5hbWU7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZ2lzdHJ5UGF0aCA9IGN1cnJlbnRQcm9qZWN0Py5yZWdpc3RyeVBhdGggfHwgXCJcIjtcblxuICByZXR1cm4gKFxuICAgIDxSZWdpc3RyeVBhdGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZWdpc3RyeVBhdGh9PlxuICAgICAgPEV1aVBhZ2UgcGFkZGluZ1NpemU9XCJub25lXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19PlxuICAgICAgICA8RXVpUGFnZVNpZGVCYXJcbiAgICAgICAgICBwYWRkaW5nU2l6ZT1cImxcIlxuICAgICAgICAgIHN0aWNreVxuICAgICAgICAgIHJvbGU9e1wibmF2aWdhdGlvblwifVxuICAgICAgICAgIGFyaWEtbGFiZWw9e1wiVG9wIExldmVsXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8RmVhc3RXb3JkTWFyayAvPlxuICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cInNcIiAvPlxuICAgICAgICAgIDxQcm9qZWN0U2VsZWN0b3IgLz5cbiAgICAgICAgICB7cmVnaXN0cnlQYXRoICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInNcIiAvPlxuICAgICAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0V1aVBhZ2VTaWRlQmFyPlxuXG4gICAgICAgIDxFdWlQYWdlQm9keSBwYW5lbGxlZD5cbiAgICAgICAgICA8RXVpRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L0V1aUVycm9yQm91bmRhcnk+XG4gICAgICAgIDwvRXVpUGFnZUJvZHk+XG4gICAgICA8L0V1aVBhZ2U+XG4gICAgPC9SZWdpc3RyeVBhdGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOb01hdGNoID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdj40MDQ8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb01hdGNoO1xuIiwiLy8gRmlsZSBuYW1lOiBcIkV1aUN1c3RvbUxpbmsuanNcIi5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV1aUxpbmsgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlSHJlZiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IGlzTW9kaWZpZWRFdmVudCA9IChldmVudCkgPT5cbiAgISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG5cbmNvbnN0IGlzTGVmdENsaWNrRXZlbnQgPSAoZXZlbnQpID0+IGV2ZW50LmJ1dHRvbiA9PT0gMDtcblxuY29uc3QgaXNUYXJnZXRCbGFuayA9IChldmVudCkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpO1xuICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gXCJfc2VsZlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXVpQ3VzdG9tTGluayh7IHRvLCAuLi5yZXN0IH0pIHtcbiAgLy8gVGhpcyBpcyB0aGUga2V5IVxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSBsaW5rcyB0aGF0IG9wZW4gbmV3IHRhYnMvd2luZG93c1xuICAgIGlmIChcbiAgICAgIGlzTW9kaWZpZWRFdmVudChldmVudCkgfHxcbiAgICAgICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSB8fFxuICAgICAgaXNUYXJnZXRCbGFuayhldmVudClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IHJlZ3VsYXIgbGluayBiZWhhdmlvciwgd2hpY2ggY2F1c2VzIGEgYnJvd3NlciByZWZyZXNoLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBQdXNoIHRoZSByb3V0ZSB0byB0aGUgaGlzdG9yeS5cbiAgICBuYXZpZ2F0ZSh0byk7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSB0aGUgY29ycmVjdCBsaW5rIGhyZWYgKHdpdGggYmFzZW5hbWUgYWNjb3VudGVkIGZvcilcbiAgY29uc3QgaHJlZiA9IHVzZUhyZWYoeyBwYXRobmFtZTogdG8gfSk7XG5cbiAgY29uc3QgcHJvcHMgPSB7IC4uLnJlc3QsIGhyZWYsIG9uQ2xpY2sgfTtcbiAgcmV0dXJuIDxFdWlMaW5rIHsuLi5wcm9wc30gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IEV1aUN1c3RvbUxpbmsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXVpQ3VzdG9tTGlua1wiO1xuaW1wb3J0IHsgRmVhc3REYXRhc291cmNlVHlwZSB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL2ZlYXN0RGF0YXNvdXJjZXNcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmludGVyZmFjZSBEYXRhc291cmNlc0xpc3RpbmdUYWJsZVByb3BzIHtcbiAgZGF0YVNvdXJjZXM6IEZlYXN0RGF0YXNvdXJjZVR5cGVbXTtcbn1cblxuY29uc3QgRGF0YXNvdXJjZXNMaXN0aW5nVGFibGUgPSAoe1xuICBkYXRhU291cmNlcyxcbn06IERhdGFzb3VyY2VzTGlzdGluZ1RhYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIk5hbWVcIixcbiAgICAgIGZpZWxkOiBcIm5hbWVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVuZGVyOiAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEV1aUN1c3RvbUxpbmtcbiAgICAgICAgICAgIGhyZWY9e2AvcC8ke3Byb2plY3ROYW1lfS9kYXRhLXNvdXJjZS8ke25hbWV9YH1cbiAgICAgICAgICAgIHRvPXtgL3AvJHtwcm9qZWN0TmFtZX0vZGF0YS1zb3VyY2UvJHtuYW1lfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9FdWlDdXN0b21MaW5rPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVHlwZVwiLFxuICAgICAgZmllbGQ6IFwidHlwZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBnZXRSb3dQcm9wcyA9IChpdGVtOiBGZWFzdERhdGFzb3VyY2VUeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGF0YS10ZXN0LXN1YmpcIjogYHJvdy0ke2l0ZW0ubmFtZX1gLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RXVpQmFzaWNUYWJsZVxuICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgIGl0ZW1zPXtkYXRhU291cmNlc31cbiAgICAgIHJvd1Byb3BzPXtnZXRSb3dQcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNvdXJjZXNMaXN0aW5nVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZlYXN0SWNvbkJsdWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwicmdiKDMsIDEwNiwgMjM0KVwiXG4gICAgICAgIGQ9XCJNMjUxLjIyNTU0LDZjLjUzMzc3LDEuNDgwNjYsMi4wMzY2NiwxLjcyNTMxLDMuMTY3OSwyLjM4Mjg3cTE5Ljc0MDc2LDExLjQ3NDE0LDM5LjUyNywyMi44NzAyNWExMS4xODE2MSwxMS4xODE2MSwwLDAsMSwzLjE3NTc0LDIuMTQyLDE0LjI2MzkzLDE0LjI2MzkzLDAsMCwxLTQuNTg0NDYsMy4wNjMyUTE5MS43MDI0OCw5NC42Nzk0MSw5MC44MTYwOSwxNTIuNzY2NTRhNy45ODQxOCw3Ljk4NDE4LDAsMCwwLTQuNzI1NDcsOC4wODAyMnEuMjMzODMsODkuODc0NDcuMDM2NSwxNzkuNzQ5NzdhNi44NTI1Niw2Ljg1MjU2LDAsMCwwLDMuOTMyNTcsNy4wMzQxMmMxMy4wNzgzMyw3LjI4Njc0LDI1Ljk3OCwxNC44OTM2NywzOC45NTYwOSwyMi4zNjA5MmE4LjgzMjgzLDguODMyODMsMCwwLDAsMy43NzY3LDEuNjkzNzgsMTAuODgsMTAuODgsMCwwLDAsLjM4NC00LjQ5NTQxcS4wMjE3OS04OS4xMjYxNC4wMTI0Ni0xNzguMjUyMjZhMjQuNzQ3MzIsMjQuNzQ3MzIsMCwwLDAtLjAxOTkyLTIuOTkzMzMsNC4yNjEsNC4yNjEsMCwwLDEsMi42Mjk3My00Ljc0MDA3YzUuMzc1NTktMi45MDgzNiwxMC42MjEwOS02LjA1NzE3LDE1LjkxNjQzLTkuMTEzNjRRMjQ2LjU0MTUsMTE3LjM1NjYsMzQxLjMzMiw2Mi41NjAzM2E2LjA0ODU2LDYuMDQ4NTYsMCwwLDEsNy4wMjUwNy4wMTgyNVE0MDMuNTU2NCw5NC42MTM4LDQ1OC44OTkxMSwxMjYuNDAxNjNhNS4xMzg1LDUuMTM4NSwwLDAsMSwzLjEyNjE3LDUuMjIyMzljLS4xOTU0NCw3LjEwOTczLS4yNTc0MywxNC4yMzU5My4wMjM0OSwyMS4zMzk5MmE1LjYxNTMsNS42MTUzLDAsMCwxLTMuNDcwMjIsNS43ODMxM3EtNTMuMzkxMjksMzAuNjc0NzQtMTA2LjY5Myw2MS41MDU0M2MtMjQuMzE1ODIsMTQuMDMyMzktNDguNjAwNzMsMjguMTE4OS03Mi45ODQ4OSw0Mi4wMzE1NWE2LjU3NDkyLDYuNTc0OTIsMCwwLDAtMy45MDk3NSw2LjY1MDIxcS4xNzYsMTAzLjM1Ni4wODgxNywyMDYuNzEyNWEyMi44NDMwNywyMi44NDMwNywwLDAsMCwuMDE3NDIsMi42MTkzMiwzLjA0MDQ1LDMuMDQwNDUsMCwwLDEtMS44MzYsMy4yOTMyM3EtMTAuNTgzMiw1Ljk5OS0yMS4wNzU0NCwxMi4xNTczN2EzLjI4MzUzLDMuMjgzNTMsMCwwLDEtMy43ODExNy0uMTAwOTNjLTYuMjM2NDQtMy42NzA2OC0xMi40OTU2OC03LjMwNDY3LTE4LjgwODI1LTEwLjg0MjMyYTMuMjg3MjEsMy4yODcyMSwwLDAsMS0yLjAyMzMxLTMuNTY4NjMsMTkuNjMxMzUsMTkuNjMxMzUsMCwwLDAsLjAxMjkxLTIuMjQ1MTRWMjQxLjc4NjQ5YzAtLjg3MzgxLjA0MTA2LTEuNzQ5NzctLjAwNzI2LTIuNjIwODNhMi41NDcsMi41NDcsMCwwLDEsMS41MjMxLTIuNzIxYy44OTY5NC0uNDMxNDMsMS43MzI0NS0uOTkwMTksMi41OTctMS40ODkzN3E3OC4xMjU2My00NS4xMDU4NywxNTYuMjUxLTkwLjIxMjUyYzEuMDc2OC0uNjIxNzMsMi4xNDIxMi0xLjI2MzMzLDMuMTc4MjctMS44NzUyNC4wMTYtMS4yNDMzOS0xLjAxNTIzLTEuNDA2ODUtMS42OTMtMS43OTk0Ny0xNC4xNDM3NC04LjE5MzYtMjguMzQ0NzMtMTYuMjg5NTUtNDIuNDE5MzctMjQuNTk5NjQtMi4xMzE1LTEuMjU4NTEtMy40MTQxMi0uNDc0MzMtNS4wNTE0MS40NzE0NXEtNTIuMTg0NzEsMzAuMTQ0NTQtMTA0LjM4NDk1LDYwLjI2MjA1Yy0xNy44MzA1NiwxMC4yOTIxOC0zNS42MjY1OCwyMC42NDUyNS01My41MjUwOCwzMC44MThhNi4wNDk2OCw2LjA0OTY4LDAsMCwwLTMuNTI4ODEsNi4xMTAzNHEuMTMxNjUsMTE3LjU4NjQ0LjA2OTU0LDIzNS4xNzMwNnY0LjMzNmE0LjUyMjE5LDQuNTIyMTksMCwwLDEtMy4zODAxMS0xLjE2NDY1UTEwOS40NDI1Nyw0MTMuMzkxLDQxLjY1OTM3LDM3NC4zMjc3OGE1LjI5OTY1LDUuMjk5NjUsMCwwLDEtMy4wMjI0MS01LjMxNDQ0cS4wOTk5LTExOC41MjI2Ny0uMDIwNjUtMjM3LjA0NTM3YTUuODI5MjcsNS44MjkyNywwLDAsMSwzLjU3OC01Ljc1NDcxUTE0My4yMzA1NSw2OC4wMDksMjQ0LjE3OTkzLDkuNjU0MDdBMTcuMjc2MjcsMTcuMjc2MjcsMCwwLDAsMjQ5LjcyNzI3LDZaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwicmdiKDMsIDEwNiwgMjM0KVwiXG4gICAgICAgIGQ9XCJNNDYxLjU0NTE2LDIxMS40NjA1NGExMy4xMTc2NiwxMy4xMTc2NiwwLDAsMSwuNDAzNzUsNC42NDEwOHEuMDE2NzcsNzYuMTk3NzUuMDY5NzIsMTUyLjM5NTQ3YTYuMDUyMTksNi4wNTIxOSwwLDAsMS0zLjQ1NSw2LjE0NjQycS02Ni4wNDk3NCwzNy45MzEyLTEzMS45NzUsNzYuMDc5YTkuOTA3NDIsOS45MDc0MiwwLDAsMS0zLjkxMTgyLDEuODU5OTQsNS4zNjMsNS4zNjMsMCwwLDEtLjQ3OC0zLjQwOTc3Yy0uMDIyNDEtMTUuNzI2MzEuMDUxOTMtMzEuNDUzMjQtLjA4MTUxLTQ3LjE3ODRhNS4yMDQsNS4yMDQsMCwwLDEsMy4xMjg5NS01LjIxNjMyYzI4LjU2OS0xNi4zOTAwNyw1Ny4wNDktMzIuOTM1NTEsODUuNjUzMTYtNDkuMjYzNTVhNi41MzkxNCw2LjUzOTE0LDAsMCwwLDMuNzgyLTYuNzM2N2MtLjE3NjgyLTE0LjM1MTIxLS4wNzY0Ny0yOC43MDU4NC0uMDc2NDctNDMuMDU5MjV2LTQuNDA5MDljLTQuMjUxOTEsMi4wMTQ4Ny03LjgzODg4LDQuMzYyOTQtMTEuNTU0OTEsNi40NDQyMi0zLjkxODM5LDIuMTk0NTgtNy43ODMzMyw0LjQ4NDU5LTExLjY3MTg5LDYuNzMyMzhxLTUuNjcwMzEsMy4yNzc4Ny0xMS4zNDExNiw2LjU1NTA4LTUuODMzNDIsMy4zNzA2NS0xMS42Njc2OCw2LjczOTgzLTUuNjcxMTEsMy4yNzY4NC0xMS4zNDE4OSw2LjU1NC01LjY3NDU2LDMuMjcxMjQtMTEuMzU1NjgsNi41MzEtNS44MzgsMy4zNjI0LTExLjY3MTU0LDYuNzMyMzEtNS42MTcyMywzLjIzOTgtMTEuMjM5ODQsNi40ODEyNmE1LjUzMSw1LjUzMSwwLDAsMS0uNTYxMTUtMy41ODUwOWMtLjAyMy0xNS43MjYzMS4wNjA0OS0zMS40NTMzNS0uMDg3MjMtNDcuMTc4M2E1LjQ2MjQ4LDUuNDYyNDgsMCwwLDEsMy4yOTM1Ni01LjQ4OTMxcTY2LjAyNzQ5LTM3Ljk2OTM5LDEzMS45NjE5LTc2LjEwMDQ2YzEuMjY3NDctLjczMTQ2LDIuNTcyNi0xLjM5NzUzLDQuMTc3OC0yLjI2NTg5WlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhc3RJY29uQmx1ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV1aUVtcHR5UHJvbXB0LCBFdWlUaXRsZSwgRXVpTGluaywgRXVpQnV0dG9uIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IEZlYXN0SWNvbkJsdWUgZnJvbSBcIi4uLy4uL2dyYXBoaWNzL0ZlYXN0SWNvbkJsdWVcIjtcblxuY29uc3QgRGF0YVNvdXJjZUluZGV4RW1wdHlTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RXVpRW1wdHlQcm9tcHRcbiAgICAgIGljb25UeXBlPXtGZWFzdEljb25CbHVlfVxuICAgICAgdGl0bGU9ezxoMj5UaGVyZSBhcmUgbm8gZGF0YSBzb3VyY2VzPC9oMj59XG4gICAgICBib2R5PXtcbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyBwcm9qZWN0IGRvZXMgbm90IGhhdmUgYW55IERhdGEgU291cmNlcy4gTGVhcm4gbW9yZSBhYm91dCBjcmVhdGluZ1xuICAgICAgICAgIERhdGEgU291cmNlcyBpbiBGZWFzdCBEb2NzLlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEV1aUJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5mZWFzdC5kZXYvZ2V0dGluZy1zdGFydGVkL2NvbmNlcHRzL2RhdGEtc291cmNlXCIsXG4gICAgICAgICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE9wZW4gRGF0YSBTb3VyY2VzIERvY3NcbiAgICAgICAgPC9FdWlCdXR0b24+XG4gICAgICB9XG4gICAgICBmb290ZXI9e1xuICAgICAgICA8PlxuICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHhzXCI+XG4gICAgICAgICAgICA8aDM+V2FudCB0byBsZWFybiBtb3JlPzwvaDM+XG4gICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICA8RXVpTGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLmZlYXN0LmRldi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIFJlYWQgRmVhc3QgZG9jdW1lbnRhdGlvblxuICAgICAgICAgIDwvRXVpTGluaz5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFTb3VyY2VJbmRleEVtcHR5U3RhdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBFdWlQYWdlSGVhZGVyLFxuICBFdWlQYWdlQ29udGVudCxcbiAgRXVpUGFnZUNvbnRlbnRCb2R5LFxuICBFdWlMb2FkaW5nU3Bpbm5lcixcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgdXNlTG9hZFJlZ2lzdHJ5IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZUxvYWRSZWdpc3RyeVwiO1xuaW1wb3J0IERhdGFzb3VyY2VzTGlzdGluZ1RhYmxlIGZyb20gXCIuL0RhdGFTb3VyY2VzTGlzdGluZ1RhYmxlXCI7XG5pbXBvcnQgeyB1c2VEb2N1bWVudFRpdGxlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZURvY3VtZW50VGl0bGVcIjtcbmltcG9ydCBSZWdpc3RyeVBhdGhDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9SZWdpc3RyeVBhdGhDb250ZXh0XCI7XG5pbXBvcnQgRGF0YVNvdXJjZUluZGV4RW1wdHlTdGF0ZSBmcm9tIFwiLi9EYXRhU291cmNlSW5kZXhFbXB0eVN0YXRlXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlSWNvbjMyIH0gZnJvbSBcIi4uLy4uL2dyYXBoaWNzL0RhdGFTb3VyY2VJY29uXCI7XG5cbmNvbnN0IHVzZUxvYWREYXRhc291cmNlcyA9ICgpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm9iamVjdHMuZGF0YVNvdXJjZXM7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWdpc3RyeVF1ZXJ5LFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzU3VjY2VzcywgaXNFcnJvciwgZGF0YSB9ID0gdXNlTG9hZERhdGFzb3VyY2VzKCk7XG5cbiAgdXNlRG9jdW1lbnRUaXRsZShgRGF0YSBTb3VyY2VzIHwgRmVhc3RgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFdWlQYWdlSGVhZGVyXG4gICAgICAgIHJlc3RyaWN0V2lkdGhcbiAgICAgICAgaWNvblR5cGU9e0RhdGFTb3VyY2VJY29uMzJ9XG4gICAgICAgIHBhZ2VUaXRsZT1cIkRhdGEgU291cmNlc1wiXG4gICAgICAvPlxuICAgICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICAgIGhhc0JvcmRlcj17ZmFsc2V9XG4gICAgICAgIGhhc1NoYWRvdz17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAgPEV1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cIm1cIiAvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNFcnJvciAmJiA8cD5XZSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLjwvcD59XG4gICAgICAgICAge2lzU3VjY2VzcyAmJiAhZGF0YSAmJiA8RGF0YVNvdXJjZUluZGV4RW1wdHlTdGF0ZSAvPn1cbiAgICAgICAgICB7aXNTdWNjZXNzICYmIGRhdGEgJiYgPERhdGFzb3VyY2VzTGlzdGluZ1RhYmxlIGRhdGFTb3VyY2VzPXtkYXRhfSAvPn1cbiAgICAgICAgPC9FdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICA8L0V1aVBhZ2VDb250ZW50PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV1aUJhc2ljVGFibGUgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgRXVpQ3VzdG9tTGluayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FdWlDdXN0b21MaW5rXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRmVhc3RTYXZlZERhdGFzZXRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvZmVhc3RTYXZlZERhdGFzZXRcIjtcblxuaW50ZXJmYWNlIERhdGFzZXRzTGlzdGluZ1RhYmxlUHJvcHMge1xuICBkYXRhc2V0czogRmVhc3RTYXZlZERhdGFzZXRUeXBlW107XG59XG5cbmNvbnN0IERhdGFzZXRzTGlzdGluZ1RhYmxlID0gKHsgZGF0YXNldHMgfTogRGF0YXNldHNMaXN0aW5nVGFibGVQcm9wcykgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgZmllbGQ6IFwic3BlYy5uYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlbmRlcjogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFdWlDdXN0b21MaW5rXG4gICAgICAgICAgICBocmVmPXtgL3AvJHtwcm9qZWN0TmFtZX0vZGF0YS1zZXQvJHtuYW1lfWB9XG4gICAgICAgICAgICB0bz17YC9wLyR7cHJvamVjdE5hbWV9L2RhdGEtc2V0LyR7bmFtZX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvRXVpQ3VzdG9tTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNvdXJjZSBGZWF0dXJlIFNlcnZpY2VcIixcbiAgICAgIGZpZWxkOiBcInNwZWMuZmVhdHVyZVNlcnZpY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ3JlYXRlZFwiLFxuICAgICAgcmVuZGVyOiAoaXRlbTogRmVhc3RTYXZlZERhdGFzZXRUeXBlKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLm1ldGEuY3JlYXRlZFRpbWVzdGFtcC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1DQVwiKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBnZXRSb3dQcm9wcyA9IChpdGVtOiBGZWFzdFNhdmVkRGF0YXNldFR5cGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkYXRhLXRlc3Qtc3VialwiOiBgcm93LSR7aXRlbS5zcGVjLm5hbWV9YCxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEV1aUJhc2ljVGFibGUgY29sdW1ucz17Y29sdW1uc30gaXRlbXM9e2RhdGFzZXRzfSByb3dQcm9wcz17Z2V0Um93UHJvcHN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0c0xpc3RpbmdUYWJsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV1aUVtcHR5UHJvbXB0LCBFdWlUaXRsZSwgRXVpTGluaywgRXVpQnV0dG9uIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IEZlYXN0SWNvbkJsdWUgZnJvbSBcIi4uLy4uL2dyYXBoaWNzL0ZlYXN0SWNvbkJsdWVcIjtcblxuY29uc3QgRGF0YXNldHNJbmRleEVtcHR5U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEV1aUVtcHR5UHJvbXB0XG4gICAgICBpY29uVHlwZT17RmVhc3RJY29uQmx1ZX1cbiAgICAgIHRpdGxlPXs8aDI+VGhlcmUgYXJlIG5vIHNhdmVkIGRhdGFzZXRzPC9oMj59XG4gICAgICBib2R5PXtcbiAgICAgICAgPHA+XG4gICAgICAgICAgWW91IGN1cnJlbnRseSBkbyBub3QgaGF2ZSBhbnkgc2F2ZWQgZGF0YXNldHMuIExlYXJuIG1vcmUgYWJvdXRcbiAgICAgICAgICBjcmVhdGluZyBzYXZlZCBkYXRhc2V0cyBpbiBGZWFzdCBEb2NzLlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEV1aUJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5mZWFzdC5kZXYvZ2V0dGluZy1zdGFydGVkL2NvbmNlcHRzL2RhdGFzZXQjY3JlYXRpbmctc2F2ZWQtZGF0YXNldC1mcm9tLWhpc3RvcmljYWwtcmV0cmlldmFsXCIsXG4gICAgICAgICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE9wZW4gRGF0YXNldCBEb2NzXG4gICAgICAgIDwvRXVpQnV0dG9uPlxuICAgICAgfVxuICAgICAgZm9vdGVyPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInh4c1wiPlxuICAgICAgICAgICAgPGgzPldhbnQgdG8gbGVhcm4gbW9yZT88L2gzPlxuICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgPEV1aUxpbmsgaHJlZj1cImh0dHBzOi8vZG9jcy5mZWFzdC5kZXYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBSZWFkIEZlYXN0IGRvY3VtZW50YXRpb25cbiAgICAgICAgICA8L0V1aUxpbms+XG4gICAgICAgIDwvPlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0c0luZGV4RW1wdHlTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEV1aVBhZ2VIZWFkZXIsXG4gIEV1aVBhZ2VDb250ZW50LFxuICBFdWlQYWdlQ29udGVudEJvZHksXG4gIEV1aUxvYWRpbmdTcGlubmVyLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IERhdGFzZXRJY29uMzIgfSBmcm9tIFwiLi4vLi4vZ3JhcGhpY3MvRGF0YXNldEljb25cIjtcblxuaW1wb3J0IHVzZUxvYWRSZWdpc3RyeSBmcm9tIFwiLi4vLi4vcXVlcmllcy91c2VMb2FkUmVnaXN0cnlcIjtcbmltcG9ydCB7IHVzZURvY3VtZW50VGl0bGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRG9jdW1lbnRUaXRsZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcbmltcG9ydCBEYXRhc2V0c0xpc3RpbmdUYWJsZSBmcm9tIFwiLi9EYXRhc2V0c0xpc3RpbmdUYWJsZVwiO1xuaW1wb3J0IERhdGFzZXRzSW5kZXhFbXB0eVN0YXRlIGZyb20gXCIuL0RhdGFzZXRzSW5kZXhFbXB0eVN0YXRlXCI7XG5cbmNvbnN0IHVzZUxvYWRTYXZlZERhdGFTZXRzID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHJlZ2lzdHJ5UXVlcnkgPSB1c2VMb2FkUmVnaXN0cnkocmVnaXN0cnlVcmwpO1xuXG4gIGNvbnN0IGRhdGEgPVxuICAgIHJlZ2lzdHJ5UXVlcnkuZGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiByZWdpc3RyeVF1ZXJ5LmRhdGEub2JqZWN0cy5zYXZlZERhdGFzZXRzO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVnaXN0cnlRdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGlzRXJyb3IsIGRhdGEgfSA9IHVzZUxvYWRTYXZlZERhdGFTZXRzKCk7XG5cbiAgdXNlRG9jdW1lbnRUaXRsZShgU2F2ZWQgRGF0YXNldHMgfCBGZWFzdGApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aVBhZ2VIZWFkZXJcbiAgICAgICAgcmVzdHJpY3RXaWR0aFxuICAgICAgICBpY29uVHlwZT17RGF0YXNldEljb24zMn1cbiAgICAgICAgcGFnZVRpdGxlPVwiRGF0YXNldHNcIlxuICAgICAgLz5cbiAgICAgIDxFdWlQYWdlQ29udGVudFxuICAgICAgICBoYXNCb3JkZXI9e2ZhbHNlfVxuICAgICAgICBoYXNTaGFkb3c9e2ZhbHNlfVxuICAgICAgICBwYWRkaW5nU2l6ZT1cIm5vbmVcIlxuICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9uZVwiXG4gICAgICA+XG4gICAgICAgIDxFdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEV1aUxvYWRpbmdTcGlubmVyIHNpemU9XCJtXCIgLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzRXJyb3IgJiYgPHA+V2UgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZy48L3A+fVxuICAgICAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YSAmJiA8RGF0YXNldHNMaXN0aW5nVGFibGUgZGF0YXNldHM9e2RhdGF9IC8+fVxuICAgICAgICAgIHtpc1N1Y2Nlc3MgJiYgIWRhdGEgJiYgPERhdGFzZXRzSW5kZXhFbXB0eVN0YXRlIC8+fVxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4vdXNlTG9hZFJlZ2lzdHJ5XCI7XG5cbmNvbnN0IHVzZUxvYWRSZWxhdGlvbnNoaXBEYXRhID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHJlZ2lzdHJ5UXVlcnkgPSB1c2VMb2FkUmVnaXN0cnkocmVnaXN0cnlVcmwpO1xuXG4gIGNvbnN0IGRhdGEgPVxuICAgIHJlZ2lzdHJ5UXVlcnkuZGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiByZWdpc3RyeVF1ZXJ5LmRhdGEucmVsYXRpb25zaGlwcztcblxuICByZXR1cm4ge1xuICAgIC4uLnJlZ2lzdHJ5UXVlcnksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxvYWRSZWxhdGlvbnNoaXBEYXRhO1xuIiwiaW1wb3J0IHVzZUxvYWRSZWxhdGlvbnNoaXBEYXRhIGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZUxvYWRSZWxhdGlvbnNoaXBzRGF0YVwiO1xuaW1wb3J0IHsgRW50aXR5UmVsYXRpb24gfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9wYXJzZUVudGl0eVJlbGF0aW9uc2hpcHNcIjtcblxuY29uc3QgZW50aXR5R3JvdXBCeU5hbWUgPSAoZGF0YTogRW50aXR5UmVsYXRpb25bXSkgPT4ge1xuICByZXR1cm4gZGF0YVxuICAgIC5maWx0ZXIoKGVkZ2UpID0+IHtcbiAgICAgIHJldHVybiBlZGdlLnNvdXJjZS50eXBlID09PSBcImVudGl0eVwiO1xuICAgIH0pXG4gICAgLnJlZHVjZSgobWVtbzogUmVjb3JkPHN0cmluZywgRW50aXR5UmVsYXRpb25bXT4sIGN1cnJlbnQpID0+IHtcbiAgICAgIGlmIChtZW1vW2N1cnJlbnQuc291cmNlLm5hbWVdKSB7XG4gICAgICAgIG1lbW9bY3VycmVudC5zb3VyY2UubmFtZV0ucHVzaChjdXJyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW9bY3VycmVudC5zb3VyY2UubmFtZV0gPSBbY3VycmVudF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH0sIHt9KTtcbn07XG5cbmNvbnN0IHVzZUZlYXR1cmVWaWV3RWRnZXNCeUVudGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSB1c2VMb2FkUmVsYXRpb25zaGlwRGF0YSgpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnksXG4gICAgZGF0YTpcbiAgICAgIHF1ZXJ5LmlzU3VjY2VzcyAmJiBxdWVyeS5kYXRhID8gZW50aXR5R3JvdXBCeU5hbWUocXVlcnkuZGF0YSkgOiB1bmRlZmluZWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VGZWF0dXJlVmlld0VkZ2VzQnlFbnRpdHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IEV1aUN1c3RvbUxpbmsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXVpQ3VzdG9tTGlua1wiO1xuaW1wb3J0IHsgRmVhc3RFbnRpdHlUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvZmVhc3RFbnRpdGllc1wiO1xuaW1wb3J0IHVzZUZlYXR1cmVWaWV3RWRnZXNCeUVudGl0eSBmcm9tIFwiLi91c2VGZWF0dXJlVmlld0VkZ2VzQnlFbnRpdHlcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmludGVyZmFjZSBFbnRpdGllc0xpc3RpbmdUYWJsZVByb3BzIHtcbiAgZW50aXRpZXM6IEZlYXN0RW50aXR5VHlwZVtdO1xufVxuXG5jb25zdCBFbnRpdGllc0xpc3RpbmdUYWJsZSA9ICh7IGVudGl0aWVzIH06IEVudGl0aWVzTGlzdGluZ1RhYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc1N1Y2Nlc3MsIGRhdGEgfSA9IHVzZUZlYXR1cmVWaWV3RWRnZXNCeUVudGl0eSgpO1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgZmllbGQ6IFwic3BlYy5uYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlbmRlcjogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFdWlDdXN0b21MaW5rXG4gICAgICAgICAgICBocmVmPXtgL3AvJHtwcm9qZWN0TmFtZX0vZW50aXR5LyR7bmFtZX1gfVxuICAgICAgICAgICAgdG89e2AvcC8ke3Byb2plY3ROYW1lfS9lbnRpdHkvJHtuYW1lfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9FdWlDdXN0b21MaW5rPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVHlwZVwiLFxuICAgICAgZmllbGQ6IFwic3BlYy52YWx1ZVR5cGVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVuZGVyOiAodmFsdWVUeXBlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIiMgb2YgRlZzXCIsXG4gICAgICByZW5kZXI6IChpdGVtOiBGZWFzdEVudGl0eVR5cGUpID0+IHtcbiAgICAgICAgaWYgKGlzU3VjY2VzcyAmJiBkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbaXRlbS5zcGVjLm5hbWVdID8gZGF0YVtpdGVtLnNwZWMubmFtZV0ubGVuZ3RoIDogXCIwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiLlwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZ2V0Um93UHJvcHMgPSAoaXRlbTogRmVhc3RFbnRpdHlUeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGF0YS10ZXN0LXN1YmpcIjogYHJvdy0ke2l0ZW0uc3BlYy5uYW1lfWAsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlCYXNpY1RhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGl0ZW1zPXtlbnRpdGllc30gcm93UHJvcHM9e2dldFJvd1Byb3BzfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXRpZXNMaXN0aW5nVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlFbXB0eVByb21wdCwgRXVpVGl0bGUsIEV1aUxpbmssIEV1aUJ1dHRvbiB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBGZWFzdEljb25CbHVlIGZyb20gXCIuLi8uLi9ncmFwaGljcy9GZWFzdEljb25CbHVlXCI7XG5cbmNvbnN0IEVudGl0eUluZGV4RW1wdHlTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RXVpRW1wdHlQcm9tcHRcbiAgICAgIGljb25UeXBlPXtGZWFzdEljb25CbHVlfVxuICAgICAgdGl0bGU9ezxoMj5UaGVyZSBhcmUgbm8gZW50aXRpZXM8L2gyPn1cbiAgICAgIGJvZHk9e1xuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIHByb2plY3QgZG9lcyBub3QgaGF2ZSBhbnkgRW50aXRpZXMuIExlYXJuIG1vcmUgYWJvdXQgY3JlYXRpbmdcbiAgICAgICAgICBFbnRpdGllcyBpbiBGZWFzdCBEb2NzLlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEV1aUJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5mZWFzdC5kZXYvZ2V0dGluZy1zdGFydGVkL2NvbmNlcHRzL2VudGl0eVwiLFxuICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBPcGVuIEVudGl0aWVzIERvY3NcbiAgICAgICAgPC9FdWlCdXR0b24+XG4gICAgICB9XG4gICAgICBmb290ZXI9e1xuICAgICAgICA8PlxuICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHhzXCI+XG4gICAgICAgICAgICA8aDM+V2FudCB0byBsZWFybiBtb3JlPzwvaDM+XG4gICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICA8RXVpTGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLmZlYXN0LmRldi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIFJlYWQgRmVhc3QgZG9jdW1lbnRhdGlvblxuICAgICAgICAgIDwvRXVpTGluaz5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eUluZGV4RW1wdHlTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEV1aVBhZ2VIZWFkZXIsXG4gIEV1aVBhZ2VDb250ZW50LFxuICBFdWlQYWdlQ29udGVudEJvZHksXG4gIEV1aUxvYWRpbmdTcGlubmVyLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IEVudGl0eUljb24zMiB9IGZyb20gXCIuLi8uLi9ncmFwaGljcy9FbnRpdHlJY29uXCI7XG5cbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5XCI7XG5pbXBvcnQgRW50aXRpZXNMaXN0aW5nVGFibGUgZnJvbSBcIi4vRW50aXRpZXNMaXN0aW5nVGFibGVcIjtcbmltcG9ydCB7IHVzZURvY3VtZW50VGl0bGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRG9jdW1lbnRUaXRsZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcbmltcG9ydCBFbnRpdHlJbmRleEVtcHR5U3RhdGUgZnJvbSBcIi4vRW50aXR5SW5kZXhFbXB0eVN0YXRlXCI7XG5cbmNvbnN0IHVzZUxvYWRFbnRpdGllcyA9ICgpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm9iamVjdHMuZW50aXRpZXM7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWdpc3RyeVF1ZXJ5LFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzU3VjY2VzcywgaXNFcnJvciwgZGF0YSB9ID0gdXNlTG9hZEVudGl0aWVzKCk7XG5cbiAgdXNlRG9jdW1lbnRUaXRsZShgRW50aXRpZXMgfCBGZWFzdGApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aVBhZ2VIZWFkZXJcbiAgICAgICAgcmVzdHJpY3RXaWR0aFxuICAgICAgICBpY29uVHlwZT17RW50aXR5SWNvbjMyfVxuICAgICAgICBwYWdlVGl0bGU9XCJFbnRpdGllc1wiXG4gICAgICAvPlxuICAgICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICAgIGhhc0JvcmRlcj17ZmFsc2V9XG4gICAgICAgIGhhc1NoYWRvdz17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAgPEV1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cIm1cIiAvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNFcnJvciAmJiA8cD5XZSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLjwvcD59XG4gICAgICAgICAge2lzU3VjY2VzcyAmJiAhZGF0YSAmJiA8RW50aXR5SW5kZXhFbXB0eVN0YXRlIC8+fVxuICAgICAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YSAmJiA8RW50aXRpZXNMaXN0aW5nVGFibGUgZW50aXRpZXM9e2RhdGF9IC8+fVxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRXVpRGVzY3JpcHRpb25MaXN0LFxuICBFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbixcbiAgRXVpRGVzY3JpcHRpb25MaXN0VGl0bGUsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBFdWlDdXN0b21MaW5rIGZyb20gXCIuL0V1aUN1c3RvbUxpbmtcIjtcblxuaW50ZXJmYWNlIFRhZ3NEaXNwbGF5UHJvcHMge1xuICBjcmVhdGVMaW5rPzogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIHRhZ3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIG93bmVyPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuY29uc3QgVGFnc0Rpc3BsYXkgPSAoe1xuICB0YWdzLFxuICBjcmVhdGVMaW5rLFxuICBvd25lcixcbiAgZGVzY3JpcHRpb24sXG59OiBUYWdzRGlzcGxheVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEV1aURlc2NyaXB0aW9uTGlzdCB0ZXh0U3R5bGU9XCJyZXZlcnNlXCI+XG4gICAgICB7b3duZXIgPyAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e1wib3duZXJcIn0+XG4gICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdFRpdGxlPm93bmVyPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+e293bmVyfTwvRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgICAge2Rlc2NyaXB0aW9uID8gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtcImRlc2NyaXB0aW9uXCJ9PlxuICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5kZXNjcmlwdGlvbjwvRXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+XG4gICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgICAge09iamVjdC5lbnRyaWVzKHRhZ3MpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17a2V5fT5cbiAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT57a2V5fTwvRXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+XG4gICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIHtjcmVhdGVMaW5rID8gKFxuICAgICAgICAgICAgICAgIDxFdWlDdXN0b21MaW5rIHRvPXtjcmVhdGVMaW5rKGtleSwgdmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICA8L0V1aUN1c3RvbUxpbms+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFnc0Rpc3BsYXk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlLCBFdWlMb2FkaW5nU3Bpbm5lciB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBFdWlDdXN0b21MaW5rIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0V1aUN1c3RvbUxpbmtcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdXNlTG9hZFJlbGF0aW9uc2hpcERhdGEgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlTG9hZFJlbGF0aW9uc2hpcHNEYXRhXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWxhdGlvbiB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL3BhcnNlRW50aXR5UmVsYXRpb25zaGlwc1wiO1xuaW1wb3J0IHsgRkVBU1RfRkNPX1RZUEVTIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIEZlYXR1cmVWaWV3RWRnZXNMaXN0SW50ZXJhY2Uge1xuICBmdk5hbWVzOiBzdHJpbmdbXTtcbn1cblxuY29uc3Qgd2hlcmVGU2NvbnN1bWVzVGhpc0Z2ID0gKGZ2TmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAocjogRW50aXR5UmVsYXRpb24pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgci5zb3VyY2UubmFtZSA9PT0gZnZOYW1lICYmXG4gICAgICByLnRhcmdldC50eXBlID09PSBGRUFTVF9GQ09fVFlQRVMuZmVhdHVyZVNlcnZpY2VcbiAgICApO1xuICB9O1xufTtcblxuY29uc3QgdXNlR2V0RlNDb25zdW1lcnNPZkZWID0gKGZ2TGlzdDogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgcmVsYXRpb25zaGlwUXVlcnkgPSB1c2VMb2FkUmVsYXRpb25zaGlwRGF0YSgpO1xuXG4gIGNvbnN0IGRhdGEgPSByZWxhdGlvbnNoaXBRdWVyeS5kYXRhXG4gICAgPyBmdkxpc3QucmVkdWNlKChtZW1vOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4sIGZ2TmFtZSkgPT4ge1xuICAgICAgICBpZiAocmVsYXRpb25zaGlwUXVlcnkuZGF0YSkge1xuICAgICAgICAgIG1lbW9bZnZOYW1lXSA9IHJlbGF0aW9uc2hpcFF1ZXJ5LmRhdGFcbiAgICAgICAgICAgIC5maWx0ZXIod2hlcmVGU2NvbnN1bWVzVGhpc0Z2KGZ2TmFtZSkpXG4gICAgICAgICAgICAubWFwKChmcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZnMudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwge30pXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWxhdGlvbnNoaXBRdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgRmVhdHVyZVZpZXdFZGdlc0xpc3QgPSAoeyBmdk5hbWVzIH06IEZlYXR1cmVWaWV3RWRnZXNMaXN0SW50ZXJhY2UpID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgfSA9IHVzZUdldEZTQ29uc3VtZXJzT2ZGVihmdk5hbWVzKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgZmllbGQ6IFwiXCIsXG4gICAgICByZW5kZXI6IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RXVpQ3VzdG9tTGlua1xuICAgICAgICAgICAgaHJlZj17YC9wLyR7cHJvamVjdE5hbWV9L2ZlYXR1cmUtdmlldy8ke25hbWV9YH1cbiAgICAgICAgICAgIHRvPXtgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS12aWV3LyR7bmFtZX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvRXVpQ3VzdG9tTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZTIENvbnN1bWVyc1wiLFxuICAgICAgcmVuZGVyOiAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cInNcIiAvPn1cbiAgICAgICAgICAgIHtkYXRhICYmIGRhdGFbbmFtZV0ubGVuZ3RofVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZ2V0Um93UHJvcHMgPSAoaXRlbTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGF0YS10ZXN0LXN1YmpcIjogYHJvdy0ke2l0ZW19YCxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEV1aUJhc2ljVGFibGUgY29sdW1ucz17Y29sdW1uc30gaXRlbXM9e2Z2TmFtZXN9IHJvd1Byb3BzPXtnZXRSb3dQcm9wc30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVWaWV3RWRnZXNMaXN0O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5XCI7XG5cbmNvbnN0IHVzZUxvYWRFbnRpdHkgPSAoZW50aXR5TmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlZ2lzdHJ5VXJsID0gdXNlQ29udGV4dChSZWdpc3RyeVBhdGhDb250ZXh0KTtcbiAgY29uc3QgcmVnaXN0cnlRdWVyeSA9IHVzZUxvYWRSZWdpc3RyeShyZWdpc3RyeVVybCk7XG5cbiAgY29uc3QgZGF0YSA9XG4gICAgcmVnaXN0cnlRdWVyeS5kYXRhID09PSB1bmRlZmluZWRcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHJlZ2lzdHJ5UXVlcnkuZGF0YS5vYmplY3RzLmVudGl0aWVzPy5maW5kKFxuICAgICAgICAgIChmdikgPT4gZnYuc3BlYy5uYW1lID09PSBlbnRpdHlOYW1lXG4gICAgICAgICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWdpc3RyeVF1ZXJ5LFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2FkRW50aXR5O1xuIiwiaW1wb3J0IHtcbiAgRXVpRmxleEdyb3VwLFxuICBFdWlIb3Jpem9udGFsUnVsZSxcbiAgRXVpTG9hZGluZ1NwaW5uZXIsXG4gIEV1aVRpdGxlLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQge1xuICBFdWlQYW5lbCxcbiAgRXVpVGV4dCxcbiAgRXVpRmxleEl0ZW0sXG4gIEV1aVNwYWNlcixcbiAgRXVpRGVzY3JpcHRpb25MaXN0LFxuICBFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZSxcbiAgRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24sXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgVGFnc0Rpc3BsYXkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFnc0Rpc3BsYXlcIjtcbmltcG9ydCBGZWF0dXJlVmlld0VkZ2VzTGlzdCBmcm9tIFwiLi9GZWF0dXJlVmlld0VkZ2VzTGlzdFwiO1xuaW1wb3J0IHVzZUZlYXR1cmVWaWV3RWRnZXNCeUVudGl0eSBmcm9tIFwiLi91c2VGZWF0dXJlVmlld0VkZ2VzQnlFbnRpdHlcIjtcbmltcG9ydCB1c2VMb2FkRW50aXR5IGZyb20gXCIuL3VzZUxvYWRFbnRpdHlcIjtcblxuY29uc3QgRW50aXR5T3ZlcnZpZXdUYWIgPSAoKSA9PiB7XG4gIGxldCB7IGVudGl0eU5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IGVOYW1lID0gZW50aXR5TmFtZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGVudGl0eU5hbWU7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGlzRXJyb3IsIGRhdGEgfSA9IHVzZUxvYWRFbnRpdHkoZU5hbWUpO1xuICBjb25zdCBpc0VtcHR5ID0gZGF0YSA9PT0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGZ2RWRnZXMgPSB1c2VGZWF0dXJlVmlld0VkZ2VzQnlFbnRpdHkoKTtcbiAgY29uc3QgZnZFZGdlc1N1Y2Nlc3MgPSBmdkVkZ2VzLmlzU3VjY2VzcztcbiAgY29uc3QgZnZFZGdlc0RhdGEgPSBmdkVkZ2VzLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxFdWlMb2FkaW5nU3Bpbm5lciBzaXplPVwibVwiIC8+IExvYWRpbmdcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7aXNFbXB0eSAmJiA8cD5ObyBlbnRpdHkgd2l0aCBuYW1lOiB7ZW50aXR5TmFtZX08L3A+fVxuICAgICAge2lzRXJyb3IgJiYgPHA+RXJyb3IgbG9hZGluZyBlbnRpdHk6IHtlbnRpdHlOYW1lfTwvcD59XG4gICAgICB7aXNTdWNjZXNzICYmIGRhdGEgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEV1aUZsZXhHcm91cD5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPlByb3BlcnRpZXM8L2gzPlxuICAgICAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0PlxuICAgICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdFRpdGxlPkpvaW4gS2V5PC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuc3BlYy5qb2luS2V5fVxuICAgICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cblxuICAgICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdFRpdGxlPkRlc2NyaXB0aW9uPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuc3BlYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5WYWx1ZSBUeXBlPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuc3BlYy52YWx1ZVR5cGV9XG4gICAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0PlxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJtXCIgLz5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5DcmVhdGVkPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWV0YS5jcmVhdGVkVGltZXN0YW1wID8gKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWV0YS5jcmVhdGVkVGltZXN0YW1wLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIpXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEV1aVRleHQ+Tm8gY3JlYXRlZFRpbWVzdGFtcCBzcGVjaWZpZWQgb24gdGhpcyBlbnRpdHkuPC9FdWlUZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cblxuICAgICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdFRpdGxlPlVwZGF0ZWQ8L0V1aURlc2NyaXB0aW9uTGlzdFRpdGxlPlxuICAgICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tZXRhLmxhc3RVcGRhdGVkVGltZXN0YW1wID8gKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWV0YS5sYXN0VXBkYXRlZFRpbWVzdGFtcC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1DQVwiKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxFdWlUZXh0Pk5vIGxhc3RVcGRhdGVkVGltZXN0YW1wIHNwZWNpZmllZCBvbiB0aGlzIGVudGl0eS48L0V1aVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0PlxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPkZlYXR1cmUgVmlld3M8L2gzPlxuICAgICAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgICAgICB7ZnZFZGdlc1N1Y2Nlc3MgJiYgZnZFZGdlc0RhdGEgPyAoXG4gICAgICAgICAgICAgICAgICBmdkVkZ2VzRGF0YVtlTmFtZV0gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlVmlld0VkZ2VzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgIGZ2TmFtZXM9e2Z2RWRnZXNEYXRhW2VOYW1lXS5tYXAoKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEV1aVRleHQ+Tm8gZmVhdHVyZSB2aWV3cyBoYXZlIHRoaXMgZW50aXR5PC9FdWlUZXh0PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RXVpVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgRXJyb3IgbG9hZGluZyBmZWF0dXJlIHZpZXdzIHRoYXQgaGF2ZSB0aGlzIGVudGl0eS5cbiAgICAgICAgICAgICAgICAgIDwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJtXCIgLz5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0gZ3Jvdz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5MYWJlbHM8L2gzPlxuICAgICAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5zcGVjLmxhYmVscyA/IChcbiAgICAgICAgICAgICAgICAgIDxUYWdzRGlzcGxheSB0YWdzPXtkYXRhLnNwZWMubGFiZWxzfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RXVpVGV4dD5ObyBsYWJlbHMgc3BlY2lmaWVkIG9uIHRoaXMgZW50aXR5LjwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICA8L0V1aUZsZXhHcm91cD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFbnRpdHlPdmVydmlld1RhYjtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWdpc3RyeVBhdGhDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9SZWdpc3RyeVBhdGhDb250ZXh0XCI7XG5pbXBvcnQgdXNlTG9hZFJlZ2lzdHJ5IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZUxvYWRSZWdpc3RyeVwiO1xuXG5jb25zdCB1c2VMb2FkRmVhdHVyZVZpZXcgPSAoZmVhdHVyZVZpZXdOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm1lcmdlZEZWTWFwW2ZlYXR1cmVWaWV3TmFtZV07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWdpc3RyeVF1ZXJ5LFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCB1c2VMb2FkUmVndWxhckZlYXR1cmVWaWV3ID0gKGZlYXR1cmVWaWV3TmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlZ2lzdHJ5VXJsID0gdXNlQ29udGV4dChSZWdpc3RyeVBhdGhDb250ZXh0KTtcbiAgY29uc3QgcmVnaXN0cnlRdWVyeSA9IHVzZUxvYWRSZWdpc3RyeShyZWdpc3RyeVVybCk7XG5cbiAgY29uc3QgZGF0YSA9XG4gICAgcmVnaXN0cnlRdWVyeS5kYXRhID09PSB1bmRlZmluZWRcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHJlZ2lzdHJ5UXVlcnkuZGF0YS5vYmplY3RzLmZlYXR1cmVWaWV3cz8uZmluZCgoZnYpID0+IHtcbiAgICAgICAgICByZXR1cm4gZnYuc3BlYy5uYW1lID09PSBmZWF0dXJlVmlld05hbWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVnaXN0cnlRdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgdXNlTG9hZE9uRGVtYW5kRmVhdHVyZVZpZXcgPSAoZmVhdHVyZVZpZXdOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm9iamVjdHMub25EZW1hbmRGZWF0dXJlVmlld3M/LmZpbmQoKGZ2KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZ2LnNwZWMubmFtZSA9PT0gZmVhdHVyZVZpZXdOYW1lO1xuICAgICAgICB9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlZ2lzdHJ5UXVlcnksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxvYWRGZWF0dXJlVmlldztcbmV4cG9ydCB7IHVzZUxvYWRSZWd1bGFyRmVhdHVyZVZpZXcsIHVzZUxvYWRPbkRlbWFuZEZlYXR1cmVWaWV3IH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdXNlTG9hZEZlYXR1cmVWaWV3IGZyb20gXCIuLi8uLi9wYWdlcy9mZWF0dXJlLXZpZXdzL3VzZUxvYWRGZWF0dXJlVmlld1wiO1xuaW1wb3J0IHtcbiAgUmVndWxhckZlYXR1cmVWaWV3Q3VzdG9tVGFiUHJvcHMsXG4gIFJlZ3VsYXJGZWF0dXJlVmlld1F1ZXJ5UmV0dXJuVHlwZSxcbn0gZnJvbSBcIi4uLy4uL2N1c3RvbS10YWJzL3R5cGVzXCI7XG5pbXBvcnQgeyBGRUFTVF9GVl9UWVBFUyB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL21lcmdlZEZWVHlwZXNcIjtcblxuaW50ZXJmYWNlIFJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYkxvYWRpbmdXcmFwcGVyUHJvcHMge1xuICBDb21wb25lbnQ6IChwcm9wczogUmVndWxhckZlYXR1cmVWaWV3Q3VzdG9tVGFiUHJvcHMpID0+IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJMb2FkaW5nV3JhcHBlciA9ICh7XG4gIENvbXBvbmVudCxcbn06IFJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYkxvYWRpbmdXcmFwcGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBmZWF0dXJlVmlld05hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGlmICghZmVhdHVyZVZpZXdOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRoaXMgcm91dGUgaGFzIG5vICdmZWF0dXJlVmlld05hbWUnIHBhcnQuIFRoaXMgcm91dGUgaXMgbGlrZWx5IG5vdCBzdXBwb3NlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQuYFxuICAgICk7XG4gIH1cblxuICBjb25zdCBmZWFzdE9iamVjdFF1ZXJ5ID0gdXNlTG9hZEZlYXR1cmVWaWV3KGZlYXR1cmVWaWV3TmFtZSk7XG5cbiAgaWYgKFxuICAgIGZlYXN0T2JqZWN0UXVlcnkuaXNTdWNjZXNzICYmXG4gICAgZmVhc3RPYmplY3RRdWVyeS5kYXRhICYmXG4gICAgZmVhc3RPYmplY3RRdWVyeS5kYXRhLnR5cGUgIT09IEZFQVNUX0ZWX1RZUEVTLnJlZ3VsYXJcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4uIFNvbWVob3cgYSBjdXN0b20gdGFiIG9uIGEgUmVndWxhciBGViBwYWdlIHJlY2VpdmVkIGRhdGEgdGhhdCBkb2VzIG5vdCBoYXZlIHRoZSBzaGFwZT9gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudFxuICAgICAgaWQ9e2ZlYXR1cmVWaWV3TmFtZX1cbiAgICAgIGZlYXN0T2JqZWN0UXVlcnk9e2ZlYXN0T2JqZWN0UXVlcnkgYXMgUmVndWxhckZlYXR1cmVWaWV3UXVlcnlSZXR1cm5UeXBlfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJMb2FkaW5nV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB1c2VMb2FkRmVhdHVyZVZpZXcgZnJvbSBcIi4uLy4uL3BhZ2VzL2ZlYXR1cmUtdmlld3MvdXNlTG9hZEZlYXR1cmVWaWV3XCI7XG5pbXBvcnQge1xuICBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiUHJvcHMsXG4gIE9uRGVtYW5kRmVhdHVyZVZpZXdRdWVyeVJldHVyblR5cGUsXG59IGZyb20gXCIuLi8uLi9jdXN0b20tdGFicy90eXBlc1wiO1xuaW1wb3J0IHsgRkVBU1RfRlZfVFlQRVMgfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9tZXJnZWRGVlR5cGVzXCI7XG5cbmludGVyZmFjZSBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJQcm9wcyB7XG4gIENvbXBvbmVudDogKHByb3BzOiBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiUHJvcHMpID0+IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXIgPSAoe1xuICBDb21wb25lbnQsXG59OiBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IGZlYXR1cmVWaWV3TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgaWYgKCFmZWF0dXJlVmlld05hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhpcyByb3V0ZSBoYXMgbm8gJ2ZlYXR1cmVWaWV3TmFtZScgcGFydC4gVGhpcyByb3V0ZSBpcyBsaWtlbHkgbm90IHN1cHBvc2VkIHRvIHJlbmRlciB0aGlzIGNvbXBvbmVudC5gXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZlYXN0T2JqZWN0UXVlcnkgPSB1c2VMb2FkRmVhdHVyZVZpZXcoZmVhdHVyZVZpZXdOYW1lKTtcblxuICBpZiAoXG4gICAgZmVhc3RPYmplY3RRdWVyeS5pc1N1Y2Nlc3MgJiZcbiAgICBmZWFzdE9iamVjdFF1ZXJ5LmRhdGEgJiZcbiAgICBmZWFzdE9iamVjdFF1ZXJ5LmRhdGEudHlwZSAhPT0gRkVBU1RfRlZfVFlQRVMub25kZW1hbmRcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4uIFNvbWVob3cgYSBjdXN0b20gdGFiIG9uIGEgT0RGViBwYWdlIHJlY2VpdmVkIGRhdGEgdGhhdCBkb2VzIG5vdCBoYXZlIHRoZSBzaGFwZT9gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudFxuICAgICAgaWQ9e2ZlYXR1cmVWaWV3TmFtZX1cbiAgICAgIGZlYXN0T2JqZWN0UXVlcnk9e2ZlYXN0T2JqZWN0UXVlcnkgYXMgT25EZW1hbmRGZWF0dXJlVmlld1F1ZXJ5UmV0dXJuVHlwZX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYkxvYWRpbmdXcmFwcGVyO1xuIiwiaW1wb3J0IHsgRkVBU1RfRkNPX1RZUEVTIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWdpc3RyeVBhdGhDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9SZWdpc3RyeVBhdGhDb250ZXh0XCI7XG5cbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFbnRpdHlSZWZlcmVuY2UgfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9wYXJzZUVudGl0eVJlbGF0aW9uc2hpcHNcIjtcblxuY29uc3QgdXNlTG9hZEZlYXR1cmVTZXJ2aWNlID0gKGZlYXR1cmVTZXJ2aWNlTmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlZ2lzdHJ5VXJsID0gdXNlQ29udGV4dChSZWdpc3RyeVBhdGhDb250ZXh0KTtcbiAgY29uc3QgcmVnaXN0cnlRdWVyeSA9IHVzZUxvYWRSZWdpc3RyeShyZWdpc3RyeVVybCk7XG5cbiAgY29uc3QgZGF0YSA9XG4gICAgcmVnaXN0cnlRdWVyeS5kYXRhID09PSB1bmRlZmluZWRcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHJlZ2lzdHJ5UXVlcnkuZGF0YS5vYmplY3RzLmZlYXR1cmVTZXJ2aWNlcz8uZmluZChcbiAgICAgICAgICAoZnMpID0+IGZzLnNwZWMubmFtZSA9PT0gZmVhdHVyZVNlcnZpY2VOYW1lXG4gICAgICAgICk7XG5cbiAgbGV0IGVudGl0aWVzID1cbiAgICBkYXRhID09PSB1bmRlZmluZWRcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHJlZ2lzdHJ5UXVlcnkuZGF0YT8uaW5kaXJlY3RSZWxhdGlvbnNoaXBzXG4gICAgICAgICAgLmZpbHRlcigocmVsYXRpb25zaGlwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICByZWxhdGlvbnNoaXAudGFyZ2V0LnR5cGUgPT09IEZFQVNUX0ZDT19UWVBFUy5mZWF0dXJlU2VydmljZSAmJlxuICAgICAgICAgICAgICByZWxhdGlvbnNoaXAudGFyZ2V0Lm5hbWUgPT09IGRhdGEuc3BlYy5uYW1lICYmXG4gICAgICAgICAgICAgIHJlbGF0aW9uc2hpcC5zb3VyY2UudHlwZSA9PT0gRkVBU1RfRkNPX1RZUEVTLmVudGl0eVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKHJlbGF0aW9uc2hpcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlbGF0aW9uc2hpcC5zb3VyY2U7XG4gICAgICAgICAgfSk7XG4gIC8vIERlZHVwbGljYXRlIG9uIG5hbWUgb2YgZW50aXR5XG4gIGlmIChlbnRpdGllcykge1xuICAgIGxldCBlbnRpdHlUb05hbWU6IHsgW2tleTogc3RyaW5nXTogRW50aXR5UmVmZXJlbmNlIH0gPSB7fTtcbiAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMpIHtcbiAgICAgIGVudGl0eVRvTmFtZVtlbnRpdHkubmFtZV0gPSBlbnRpdHk7XG4gICAgfVxuICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdHlUb05hbWUpO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4ucmVnaXN0cnlRdWVyeSxcbiAgICBkYXRhLFxuICAgIGVudGl0aWVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZEZlYXR1cmVTZXJ2aWNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJQcm9wcyB9IGZyb20gXCIuLi8uLi9jdXN0b20tdGFicy90eXBlc1wiO1xuaW1wb3J0IHVzZUxvYWRGZWF0dXJlU2VydmljZSBmcm9tIFwiLi4vLi4vcGFnZXMvZmVhdHVyZS1zZXJ2aWNlcy91c2VMb2FkRmVhdHVyZVNlcnZpY2VcIjtcblxuaW50ZXJmYWNlIEZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJQcm9wcyB7XG4gIENvbXBvbmVudDogKHByb3BzOiBGZWF0dXJlU2VydmljZUN1c3RvbVRhYlByb3BzKSA9PiBKU1guRWxlbWVudDtcbn1cblxuY29uc3QgRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJMb2FkaW5nV3JhcHBlciA9ICh7XG4gIENvbXBvbmVudCxcbn06IEZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IGZlYXR1cmVTZXJ2aWNlTmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgaWYgKCFmZWF0dXJlU2VydmljZU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhpcyByb3V0ZSBoYXMgbm8gJ2ZlYXR1cmVTZXJ2aWNlTmFtZScgcGFydC4gVGhpcyByb3V0ZSBpcyBsaWtlbHkgbm90IHN1cHBvc2VkIHRvIHJlbmRlciB0aGlzIGNvbXBvbmVudC5gXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZlYXN0T2JqZWN0UXVlcnkgPSB1c2VMb2FkRmVhdHVyZVNlcnZpY2UoZmVhdHVyZVNlcnZpY2VOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgaWQ9e2ZlYXR1cmVTZXJ2aWNlTmFtZX0gZmVhc3RPYmplY3RRdWVyeT17ZmVhc3RPYmplY3RRdWVyeX0gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXI7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVnaXN0cnlQYXRoQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvUmVnaXN0cnlQYXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgRkVBU1RfRkNPX1RZUEVTIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvdHlwZXNcIjtcbmltcG9ydCB1c2VMb2FkUmVnaXN0cnkgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlTG9hZFJlZ2lzdHJ5XCI7XG5cbmNvbnN0IHVzZUxvYWREYXRhU291cmNlID0gKGRhdGFTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm9iamVjdHMuZGF0YVNvdXJjZXM/LmZpbmQoXG4gICAgICAgICAgKGRzKSA9PiBkcy5uYW1lID09PSBkYXRhU291cmNlTmFtZVxuICAgICAgICApO1xuXG4gIGNvbnN0IGNvbnN1bWluZ0ZlYXR1cmVWaWV3cyA9IFxuICAgIHJlZ2lzdHJ5UXVlcnkuZGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiByZWdpc3RyeVF1ZXJ5LmRhdGEucmVsYXRpb25zaGlwcy5maWx0ZXIoXG4gICAgICAgIChyZWxhdGlvbnNoaXApID0+IHsgXG4gICAgICAgICAgcmV0dXJuIChyZWxhdGlvbnNoaXAuc291cmNlLnR5cGUgPT09IEZFQVNUX0ZDT19UWVBFUy5kYXRhU291cmNlICYmXG4gICAgICAgICAgcmVsYXRpb25zaGlwLnNvdXJjZS5uYW1lID09PSBkYXRhPy5uYW1lICYmXG4gICAgICAgICAgcmVsYXRpb25zaGlwLnRhcmdldC50eXBlID09PSBGRUFTVF9GQ09fVFlQRVMuZmVhdHVyZVZpZXcpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVnaXN0cnlRdWVyeSxcbiAgICBkYXRhLFxuICAgIGNvbnN1bWluZ0ZlYXR1cmVWaWV3c1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZERhdGFTb3VyY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlQ3VzdG9tVGFiUHJvcHMgfSBmcm9tIFwiLi4vLi4vY3VzdG9tLXRhYnMvdHlwZXNcIjtcbmltcG9ydCB1c2VMb2FkRGF0YVNvdXJjZSBmcm9tIFwiLi4vLi4vcGFnZXMvZGF0YS1zb3VyY2VzL3VzZUxvYWREYXRhU291cmNlXCI7XG5cbmludGVyZmFjZSBEYXRhU291cmNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJQcm9wcyB7XG4gIENvbXBvbmVudDogKHByb3BzOiBEYXRhU291cmNlQ3VzdG9tVGFiUHJvcHMpID0+IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBEYXRhU291cmNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXIgPSAoe1xuICBDb21wb25lbnQsXG59OiBEYXRhU291cmNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJQcm9wcykgPT4ge1xuICBsZXQgeyBkYXRhU291cmNlTmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgaWYgKCFkYXRhU291cmNlTmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUaGlzIHJvdXRlIGhhcyBubyAnZGF0YVNvdXJjZU5hbWUnIHBhcnQuIFRoaXMgcm91dGUgaXMgbGlrZWx5IG5vdCBzdXBwb3NlZCB0byByZW5kZXIgdGhpcyBjb21wb25lbnQuYFxuICAgICk7XG4gIH1cblxuICBjb25zdCBmZWFzdE9iamVjdFF1ZXJ5ID0gdXNlTG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZU5hbWUpO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IGlkPXtkYXRhU291cmNlTmFtZX0gZmVhc3RPYmplY3RRdWVyeT17ZmVhc3RPYmplY3RRdWVyeX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlQ3VzdG9tVGFiTG9hZGluZ1dyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBFbnRpdHlDdXN0b21UYWJQcm9wcyB9IGZyb20gXCIuLi8uLi9jdXN0b20tdGFicy90eXBlc1wiO1xuaW1wb3J0IHVzZUxvYWRFbnRpdHkgZnJvbSBcIi4uLy4uL3BhZ2VzL2VudGl0aWVzL3VzZUxvYWRFbnRpdHlcIjtcblxuaW50ZXJmYWNlIEVudGl0eUN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyUHJvcHMge1xuICBDb21wb25lbnQ6IChwcm9wczogRW50aXR5Q3VzdG9tVGFiUHJvcHMpID0+IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBFbnRpdHlDdXN0b21UYWJMb2FkaW5nV3JhcHBlciA9ICh7XG4gIENvbXBvbmVudCxcbn06IEVudGl0eUN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyUHJvcHMpID0+IHtcbiAgbGV0IHsgZW50aXR5TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgaWYgKCFlbnRpdHlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRoaXMgcm91dGUgaGFzIG5vICdlbnRpdHlOYW1lJyBwYXJ0LiBUaGlzIHJvdXRlIGlzIGxpa2VseSBub3Qgc3VwcG9zZWQgdG8gcmVuZGVyIHRoaXMgY29tcG9uZW50LmBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZmVhc3RPYmplY3RRdWVyeSA9IHVzZUxvYWRFbnRpdHkoZW50aXR5TmFtZSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgaWQ9e2VudGl0eU5hbWV9IGZlYXN0T2JqZWN0UXVlcnk9e2ZlYXN0T2JqZWN0UXVlcnl9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXI7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVnaXN0cnlQYXRoQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvUmVnaXN0cnlQYXRoQ29udGV4dFwiO1xuaW1wb3J0IHVzZUxvYWRSZWdpc3RyeSBmcm9tIFwiLi4vLi4vcXVlcmllcy91c2VMb2FkUmVnaXN0cnlcIjtcblxuY29uc3QgdXNlTG9hZEVudGl0eSA9IChlbnRpdHlOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm9iamVjdHMuc2F2ZWREYXRhc2V0cz8uZmluZChcbiAgICAgICAgICAoZnYpID0+IGZ2LnNwZWMubmFtZSA9PT0gZW50aXR5TmFtZVxuICAgICAgICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVnaXN0cnlRdWVyeSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZEVudGl0eTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIHVzZVJlc29sdmVkUGF0aCxcbiAgcmVzb2x2ZVBhdGgsXG4gIHVzZUxvY2F0aW9uLFxuICBOYXZpZ2F0ZUZ1bmN0aW9uLFxuICBSb3V0ZSxcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IFJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYkxvYWRpbmdXcmFwcGVyIGZyb20gXCIuLi91dGlscy9jdXN0b20tdGFicy9SZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJMb2FkaW5nV3JhcHBlclwiO1xuaW1wb3J0IE9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJMb2FkaW5nV3JhcHBlciBmcm9tIFwiLi4vdXRpbHMvY3VzdG9tLXRhYnMvT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYkxvYWRpbmdXcmFwcGVyXCI7XG5pbXBvcnQgRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJMb2FkaW5nV3JhcHBlciBmcm9tIFwiLi4vdXRpbHMvY3VzdG9tLXRhYnMvRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJMb2FkaW5nV3JhcHBlclwiO1xuaW1wb3J0IERhdGFTb3VyY2VDdXN0b21UYWJMb2FkaW5nV3JhcHBlciBmcm9tIFwiLi4vdXRpbHMvY3VzdG9tLXRhYnMvRGF0YVNvdXJjZUN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyXCI7XG5pbXBvcnQgRW50aXR5Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXIgZnJvbSBcIi4uL3V0aWxzL2N1c3RvbS10YWJzL0VudGl0eUN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyXCI7XG5pbXBvcnQgRGF0YXNldEN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyIGZyb20gXCIuLi91dGlscy9jdXN0b20tdGFicy9EYXRhc2V0Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJcIjtcblxuaW1wb3J0IHtcbiAgUmVndWxhckZlYXR1cmVWaWV3Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlLFxuICBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlLFxuICBGZWF0dXJlU2VydmljZUN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZSxcbiAgRGF0YVNvdXJjZUN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZSxcbiAgRW50aXR5Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlLFxuICBEYXRhc2V0Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlLFxuICBDdXN0b21UYWJSZWdpc3RyYXRpb25JbnRlcmZhY2UsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbmludGVyZmFjZSBGZWFzdFRhYnNSZWdpc3RyeUludGVyZmFjZSB7XG4gIFJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYnM/OiBSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJSZWdpc3RyYXRpb25JbnRlcmZhY2VbXTtcbiAgT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYnM/OiBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlW107XG4gIEZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFicz86IEZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlW107XG4gIERhdGFTb3VyY2VDdXN0b21UYWJzPzogRGF0YVNvdXJjZUN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZVtdO1xuICBFbnRpdHlDdXN0b21UYWJzPzogRW50aXR5Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlW107XG4gIERhdGFzZXRDdXN0b21UYWJzPzogRGF0YXNldEN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZVtdO1xufVxuXG5pbnRlcmZhY2UgTmF2aWdhdGlvblRhYkludGVyZmFjZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFRhYnNSZWdpc3RyeUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZlYXN0VGFic1JlZ2lzdHJ5SW50ZXJmYWNlPih7fSk7XG5cbmNvbnN0IHVzZUdlbmVyaWNDdXN0b21UYWJzTmF2aWdhdGlvbiA9IDxcbiAgVCBleHRlbmRzIEN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZVxuPihcbiAgZW50cmllczogVFtdLFxuICBuYXZpZ2F0ZTogTmF2aWdhdGVGdW5jdGlvblxuKSA9PiB7XG4gIC8vIENoZWNrIGZvciBEdXBsaWNhdGVzXG4gIGNvbnN0IGFycmF5T2ZQYXRocyA9IGVudHJpZXMubWFwKCh0YWIpID0+IHRhYi5wYXRoKTtcblxuICBjb25zdCBkdXBsaWNhdGVkUGF0aHMgPSBhcnJheU9mUGF0aHMuZmlsdGVyKFxuICAgIChpdGVtLCBpbmRleCkgPT4gYXJyYXlPZlBhdGhzLmluZGV4T2YoaXRlbSkgIT09IGluZGV4XG4gICk7XG5cbiAgLy8gVGhyb3cgZXJyb3IgaWYgbXVsdGlwbGUgY3VzdG9tIHRhYnMgYmVpbmcgcmVnaXN0ZXJlZCB0byB0aGUgc2FtZSBwYXRoXG4gIGlmIChkdXBsaWNhdGVkUGF0aHMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYE1vcmUgdGhhbiBvbmUgdGFicyByZWdpc3RlcmVkIGZvciBwYXRoIHVybDogJHtkdXBsaWNhdGVkUGF0aHMuam9pbihcbiAgICAgICAgXCIsIFwiXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgW2N1c3RvbU5hdmlnYXRpb25UYWJzLCBzZXRUYWJzXSA9IHVzZVN0YXRlPE5hdmlnYXRpb25UYWJJbnRlcmZhY2VbXT4oXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBmZWF0dXJlVmlld1Jvb3QgPSB1c2VSZXNvbHZlZFBhdGgoXCJcIik7IC8vIFJvb3Qgb2YgRmVhdHVyZSBWaWV3IFNlY3Rpb25cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTsgLy8gQ3VycmVudCBMb2NhdGlvblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRhYnMoXG4gICAgICBlbnRyaWVzLm1hcCgoeyBsYWJlbCwgcGF0aCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkVGFiUGF0aCA9IHJlc29sdmVQYXRoKHBhdGgsIGZlYXR1cmVWaWV3Um9vdC5wYXRobmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgLy8gQ2FuJ3QgdXNlIHRoZSBtYXRjaCBob29rcyBoZXJlIGIvYyB3ZSdyZSBpbiBhIGxvb3AgZHVlXG4gICAgICAgICAgLy8gdG8gUmVhY3QgaG9va3MgbmVlZGluZyBhIHByZWRpY3RhYmxlIG51bWJlciBvZlxuICAgICAgICAgIC8vIGhvb2tzIHRvIGJlIHJ1bi4gU2VlOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcnVsZXMuaHRtbFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IHBhdGhuYW1lID09PSByZXNvbHZlZFRhYlBhdGgucGF0aG5hbWUsXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUocGF0aCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW3BhdGhuYW1lLCBuYXZpZ2F0ZSwgZmVhdHVyZVZpZXdSb290LnBhdGhuYW1lLCBlbnRyaWVzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjdXN0b21OYXZpZ2F0aW9uVGFicyxcbiAgfTtcbn07XG5cbi8vIENyZWF0aW5nIFJvdXRlc1xuaW50ZXJmYWNlIElubmVyQ29tcG9uZW50PFQ+IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBDb21wb25lbnQ6IChwcm9wczogVCkgPT4gSlNYLkVsZW1lbnQ7XG59XG50eXBlIFdyYXBwZXJDb21wb25lbnRUeXBlPFQ+ID0gKHtcbiAgQ29tcG9uZW50LFxufToge1xuICBDb21wb25lbnQ6IChwcm9wczogVCkgPT4gSlNYLkVsZW1lbnQ7XG59KSA9PiBKU1guRWxlbWVudDtcblxuY29uc3QgZ2VuZXJpY0N1c3RvbVRhYlJvdXRlcyA9IDxULD4oXG4gIHRhYnM6IElubmVyQ29tcG9uZW50PFQ+W10sXG4gIFdyYXBwZXJDb21wb25lbnQ6IFdyYXBwZXJDb21wb25lbnRUeXBlPFQ+XG4pID0+IHtcbiAgcmV0dXJuIHRhYnMubWFwKCh7IHBhdGgsIENvbXBvbmVudCB9KSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgIHJldHVybiA8V3JhcHBlckNvbXBvbmVudCBDb21wb25lbnQ9e0NvbXBvbmVudH0gLz47XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Um91dGUga2V5PXtwYXRofSBwYXRoPXtgLyR7cGF0aH0vKmB9IGVsZW1lbnQ9ezxXcmFwcGVkQ29tcG9uZW50IC8+fSAvPlxuICAgICk7XG4gIH0pO1xufTtcblxuLy8gTmF2aWdhdGlvbiBIb29rcyBmb3IgRWFjaCBDdXN0b20gVGFiIFR5cGVcbmNvbnN0IHVzZVJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYnMgPSAobmF2aWdhdGU6IE5hdmlnYXRlRnVuY3Rpb24pID0+IHtcbiAgY29uc3QgeyBSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJzIH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVGFic1JlZ2lzdHJ5Q29udGV4dCk7XG5cbiAgcmV0dXJuIHVzZUdlbmVyaWNDdXN0b21UYWJzTmF2aWdhdGlvbjxSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJSZWdpc3RyYXRpb25JbnRlcmZhY2U+KFxuICAgIFJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYnMgfHwgW10sXG4gICAgbmF2aWdhdGVcbiAgKTtcbn07XG5cbmNvbnN0IHVzZU9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJzID0gKG5hdmlnYXRlOiBOYXZpZ2F0ZUZ1bmN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYnMgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChUYWJzUmVnaXN0cnlDb250ZXh0KTtcblxuICByZXR1cm4gdXNlR2VuZXJpY0N1c3RvbVRhYnNOYXZpZ2F0aW9uPE9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJSZWdpc3RyYXRpb25JbnRlcmZhY2U+KFxuICAgIE9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJzIHx8IFtdLFxuICAgIG5hdmlnYXRlXG4gICk7XG59O1xuXG5jb25zdCB1c2VGZWF0dXJlU2VydmljZUN1c3RvbVRhYnMgPSAobmF2aWdhdGU6IE5hdmlnYXRlRnVuY3Rpb24pID0+IHtcbiAgY29uc3QgeyBGZWF0dXJlU2VydmljZUN1c3RvbVRhYnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoVGFic1JlZ2lzdHJ5Q29udGV4dCk7XG5cbiAgcmV0dXJuIHVzZUdlbmVyaWNDdXN0b21UYWJzTmF2aWdhdGlvbjxGZWF0dXJlU2VydmljZUN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZT4oXG4gICAgRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJzIHx8IFtdLFxuICAgIG5hdmlnYXRlXG4gICk7XG59O1xuXG5jb25zdCB1c2VEYXRhU291cmNlQ3VzdG9tVGFicyA9IChuYXZpZ2F0ZTogTmF2aWdhdGVGdW5jdGlvbikgPT4ge1xuICBjb25zdCB7IERhdGFTb3VyY2VDdXN0b21UYWJzIH0gPSBSZWFjdC51c2VDb250ZXh0KFRhYnNSZWdpc3RyeUNvbnRleHQpO1xuXG4gIHJldHVybiB1c2VHZW5lcmljQ3VzdG9tVGFic05hdmlnYXRpb248RGF0YVNvdXJjZUN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZT4oXG4gICAgRGF0YVNvdXJjZUN1c3RvbVRhYnMgfHwgW10sXG4gICAgbmF2aWdhdGVcbiAgKTtcbn07XG5cbmNvbnN0IHVzZUVudGl0eUN1c3RvbVRhYnMgPSAobmF2aWdhdGU6IE5hdmlnYXRlRnVuY3Rpb24pID0+IHtcbiAgY29uc3QgeyBFbnRpdHlDdXN0b21UYWJzIH0gPSBSZWFjdC51c2VDb250ZXh0KFRhYnNSZWdpc3RyeUNvbnRleHQpO1xuXG4gIHJldHVybiB1c2VHZW5lcmljQ3VzdG9tVGFic05hdmlnYXRpb248RW50aXR5Q3VzdG9tVGFiUmVnaXN0cmF0aW9uSW50ZXJmYWNlPihcbiAgICBFbnRpdHlDdXN0b21UYWJzIHx8IFtdLFxuICAgIG5hdmlnYXRlXG4gICk7XG59O1xuXG5jb25zdCB1c2VEYXRhc2V0Q3VzdG9tVGFicyA9IChuYXZpZ2F0ZTogTmF2aWdhdGVGdW5jdGlvbikgPT4ge1xuICBjb25zdCB7IERhdGFzZXRDdXN0b21UYWJzIH0gPSBSZWFjdC51c2VDb250ZXh0KFRhYnNSZWdpc3RyeUNvbnRleHQpO1xuXG4gIHJldHVybiB1c2VHZW5lcmljQ3VzdG9tVGFic05hdmlnYXRpb248RGF0YXNldEN1c3RvbVRhYlJlZ2lzdHJhdGlvbkludGVyZmFjZT4oXG4gICAgRGF0YXNldEN1c3RvbVRhYnMgfHwgW10sXG4gICAgbmF2aWdhdGVcbiAgKTtcbn07XG5cbi8vIFJvdXRlcyBmb3IgRWFjaCBDdXN0b20gVGFiIFR5cGVcbmNvbnN0IHVzZVJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYlJvdXRlcyA9ICgpID0+IHtcbiAgY29uc3QgeyBSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJzIH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVGFic1JlZ2lzdHJ5Q29udGV4dCk7XG5cbiAgcmV0dXJuIGdlbmVyaWNDdXN0b21UYWJSb3V0ZXMoXG4gICAgUmVndWxhckZlYXR1cmVWaWV3Q3VzdG9tVGFicyB8fCBbXSxcbiAgICBSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJMb2FkaW5nV3JhcHBlclxuICApO1xufTtcblxuY29uc3QgdXNlT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYlJvdXRlcyA9ICgpID0+IHtcbiAgY29uc3QgeyBPbkRlbWFuZEZlYXR1cmVWaWV3Q3VzdG9tVGFicyB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFRhYnNSZWdpc3RyeUNvbnRleHQpO1xuXG4gIHJldHVybiBnZW5lcmljQ3VzdG9tVGFiUm91dGVzKFxuICAgIE9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJzIHx8IFtdLFxuICAgIE9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJMb2FkaW5nV3JhcHBlclxuICApO1xufTtcblxuY29uc3QgdXNlRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJSb3V0ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJzIH0gPSBSZWFjdC51c2VDb250ZXh0KFRhYnNSZWdpc3RyeUNvbnRleHQpO1xuXG4gIHJldHVybiBnZW5lcmljQ3VzdG9tVGFiUm91dGVzKFxuICAgIEZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFicyB8fCBbXSxcbiAgICBGZWF0dXJlU2VydmljZUN1c3RvbVRhYkxvYWRpbmdXcmFwcGVyXG4gICk7XG59O1xuXG5jb25zdCB1c2VEYXRhU291cmNlQ3VzdG9tVGFiUm91dGVzID0gKCkgPT4ge1xuICBjb25zdCB7IERhdGFTb3VyY2VDdXN0b21UYWJzIH0gPSBSZWFjdC51c2VDb250ZXh0KFRhYnNSZWdpc3RyeUNvbnRleHQpO1xuXG4gIHJldHVybiBnZW5lcmljQ3VzdG9tVGFiUm91dGVzKFxuICAgIERhdGFTb3VyY2VDdXN0b21UYWJzIHx8IFtdLFxuICAgIERhdGFTb3VyY2VDdXN0b21UYWJMb2FkaW5nV3JhcHBlclxuICApO1xufTtcblxuY29uc3QgdXNlRW50aXR5Q3VzdG9tVGFiUm91dGVzID0gKCkgPT4ge1xuICBjb25zdCB7IEVudGl0eUN1c3RvbVRhYnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoVGFic1JlZ2lzdHJ5Q29udGV4dCk7XG5cbiAgcmV0dXJuIGdlbmVyaWNDdXN0b21UYWJSb3V0ZXMoXG4gICAgRW50aXR5Q3VzdG9tVGFicyB8fCBbXSxcbiAgICBFbnRpdHlDdXN0b21UYWJMb2FkaW5nV3JhcHBlclxuICApO1xufTtcblxuY29uc3QgdXNlRGF0YXNldEN1c3RvbVRhYlJvdXRlcyA9ICgpID0+IHtcbiAgY29uc3QgeyBEYXRhc2V0Q3VzdG9tVGFicyB9ID0gUmVhY3QudXNlQ29udGV4dChUYWJzUmVnaXN0cnlDb250ZXh0KTtcblxuICByZXR1cm4gZ2VuZXJpY0N1c3RvbVRhYlJvdXRlcyhcbiAgICBEYXRhc2V0Q3VzdG9tVGFicyB8fCBbXSxcbiAgICBEYXRhc2V0Q3VzdG9tVGFiTG9hZGluZ1dyYXBwZXJcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNSZWdpc3RyeUNvbnRleHQ7XG5leHBvcnQge1xuICAvLyBOYXZpZ2F0aW9uXG4gIHVzZVJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYnMsXG4gIHVzZU9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJzLFxuICB1c2VGZWF0dXJlU2VydmljZUN1c3RvbVRhYnMsXG4gIHVzZURhdGFTb3VyY2VDdXN0b21UYWJzLFxuICB1c2VFbnRpdHlDdXN0b21UYWJzLFxuICB1c2VEYXRhc2V0Q3VzdG9tVGFicyxcbiAgLy8gUm91dGVzXG4gIHVzZVJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYlJvdXRlcyxcbiAgdXNlT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYlJvdXRlcyxcbiAgdXNlRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJSb3V0ZXMsXG4gIHVzZURhdGFTb3VyY2VDdXN0b21UYWJSb3V0ZXMsXG4gIHVzZUVudGl0eUN1c3RvbVRhYlJvdXRlcyxcbiAgdXNlRGF0YXNldEN1c3RvbVRhYlJvdXRlcyxcbn07XG5cbmV4cG9ydCB0eXBlIHsgRmVhc3RUYWJzUmVnaXN0cnlJbnRlcmZhY2UgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtcbiAgRXVpUGFnZUhlYWRlcixcbiAgRXVpUGFnZUNvbnRlbnQsXG4gIEV1aVBhZ2VDb250ZW50Qm9keSxcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgeyBFbnRpdHlJY29uMzIgfSBmcm9tIFwiLi4vLi4vZ3JhcGhpY3MvRW50aXR5SWNvblwiO1xuaW1wb3J0IHsgdXNlTWF0Y2hFeGFjdCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VNYXRjaFN1YnBhdGhcIjtcbmltcG9ydCBFbnRpdHlPdmVydmlld1RhYiBmcm9tIFwiLi9FbnRpdHlPdmVydmlld1RhYlwiO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRUaXRsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VEb2N1bWVudFRpdGxlXCI7XG5pbXBvcnQge1xuICB1c2VFbnRpdHlDdXN0b21UYWJzLFxuICB1c2VFbnRpdHlDdXN0b21UYWJSb3V0ZXMsXG59IGZyb20gXCIuLi8uLi9jdXN0b20tdGFicy9UYWJzUmVnaXN0cnlDb250ZXh0XCI7XG5cbmNvbnN0IEVudGl0eUluc3RhbmNlID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCB7IGVudGl0eU5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IHsgY3VzdG9tTmF2aWdhdGlvblRhYnMgfSA9IHVzZUVudGl0eUN1c3RvbVRhYnMobmF2aWdhdGUpO1xuICBjb25zdCBDdXN0b21UYWJSb3V0ZXMgPSB1c2VFbnRpdHlDdXN0b21UYWJSb3V0ZXMoKTtcblxuICB1c2VEb2N1bWVudFRpdGxlKGAke2VudGl0eU5hbWV9IHwgRW50aXR5IHwgRmVhc3RgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFdWlQYWdlSGVhZGVyXG4gICAgICAgIHJlc3RyaWN0V2lkdGhcbiAgICAgICAgaWNvblR5cGU9e0VudGl0eUljb24zMn1cbiAgICAgICAgcGFnZVRpdGxlPXtgRW50aXR5OiAke2VudGl0eU5hbWV9YH1cbiAgICAgICAgdGFicz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIk92ZXJ2aWV3XCIsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOiB1c2VNYXRjaEV4YWN0KFwiXCIpLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBuYXZpZ2F0ZShcIlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5jdXN0b21OYXZpZ2F0aW9uVGFicyxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8RXVpUGFnZUNvbnRlbnRcbiAgICAgICAgaGFzQm9yZGVyPXtmYWxzZX1cbiAgICAgICAgaGFzU2hhZG93PXtmYWxzZX1cbiAgICAgICAgcGFkZGluZ1NpemU9XCJub25lXCJcbiAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIm5vbmVcIlxuICAgICAgPlxuICAgICAgICA8RXVpUGFnZUNvbnRlbnRCb2R5PlxuICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8RW50aXR5T3ZlcnZpZXdUYWIgLz59IC8+XG4gICAgICAgICAgICB7Q3VzdG9tVGFiUm91dGVzfVxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eUluc3RhbmNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRXVpQmFzaWNUYWJsZSxcbiAgRXVpVGFibGVDb21wdXRlZENvbHVtblR5cGUsXG4gIEV1aVRhYmxlRmllbGREYXRhQ29sdW1uVHlwZSxcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IEV1aUN1c3RvbUxpbmsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXVpQ3VzdG9tTGlua1wiO1xuaW1wb3J0IHtcbiAgRmVhc3RGZWF0dXJlSW5TZXJ2aWNlVHlwZSxcbiAgRmVhc3RGZWF0dXJlU2VydmljZVR5cGUsXG59IGZyb20gXCIuLi8uLi9wYXJzZXJzL2ZlYXN0RmVhdHVyZVNlcnZpY2VzXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbnRlcmZhY2UgRmVhdHVyZVNlcnZpY2VMaXN0aW5nVGFibGVQcm9wcyB7XG4gIHRhZ0tleXNTZXQ6IFNldDxzdHJpbmc+O1xuICBmZWF0dXJlU2VydmljZXM6IEZlYXN0RmVhdHVyZVNlcnZpY2VUeXBlW107XG59XG5cbnR5cGUgRmVhdHVyZVNlcnZpY2VUeXBlQ29sdW1uID1cbiAgfCBFdWlUYWJsZUZpZWxkRGF0YUNvbHVtblR5cGU8RmVhc3RGZWF0dXJlU2VydmljZVR5cGU+XG4gIHwgRXVpVGFibGVDb21wdXRlZENvbHVtblR5cGU8RmVhc3RGZWF0dXJlU2VydmljZVR5cGU+O1xuXG5jb25zdCBGZWF0dXJlU2VydmljZUxpc3RpbmdUYWJsZSA9ICh7XG4gIHRhZ0tleXNTZXQsXG4gIGZlYXR1cmVTZXJ2aWNlcyxcbn06IEZlYXR1cmVTZXJ2aWNlTGlzdGluZ1RhYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgY29sdW1uczogRmVhdHVyZVNlcnZpY2VUeXBlQ29sdW1uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJOYW1lXCIsXG4gICAgICBmaWVsZDogXCJzcGVjLm5hbWVcIixcbiAgICAgIHJlbmRlcjogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFdWlDdXN0b21MaW5rXG4gICAgICAgICAgICBocmVmPXtgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS1zZXJ2aWNlLyR7bmFtZX1gfVxuICAgICAgICAgICAgdG89e2AvcC8ke3Byb2plY3ROYW1lfS9mZWF0dXJlLXNlcnZpY2UvJHtuYW1lfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9FdWlDdXN0b21MaW5rPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiIyBvZiBGZWF0dXJlc1wiLFxuICAgICAgZmllbGQ6IFwic3BlYy5mZWF0dXJlc1wiLFxuICAgICAgcmVuZGVyOiAoZmVhdHVyZVZpZXdzOiBGZWFzdEZlYXR1cmVJblNlcnZpY2VUeXBlW10pID0+IHtcbiAgICAgICAgdmFyIG51bUZlYXR1cmVzID0gMDtcbiAgICAgICAgZmVhdHVyZVZpZXdzLmZvckVhY2goKGZlYXR1cmVWaWV3KSA9PiB7XG4gICAgICAgICAgbnVtRmVhdHVyZXMgKz0gZmVhdHVyZVZpZXcuZmVhdHVyZUNvbHVtbnMubGVuZ3RoO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG51bUZlYXR1cmVzO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ3JlYXRlZCBhdFwiLFxuICAgICAgZmllbGQ6IFwibWV0YS5jcmVhdGVkVGltZXN0YW1wXCIsXG4gICAgICByZW5kZXI6IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIpO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIHRhZ0tleXNTZXQuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIHJlbmRlcjogKGl0ZW06IEZlYXN0RmVhdHVyZVNlcnZpY2VUeXBlKSA9PiB7XG4gICAgICAgIGxldCB0YWcgPSA8c3Bhbj5uL2E8L3NwYW4+O1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5zcGVjLnRhZ3MgPyBpdGVtLnNwZWMudGFnc1trZXldIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRhZyA9IDxzcGFuPnt2YWx1ZX08L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhZztcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFJvd1Byb3BzID0gKGl0ZW06IEZlYXN0RmVhdHVyZVNlcnZpY2VUeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGF0YS10ZXN0LXN1YmpcIjogYHJvdy0ke2l0ZW0uc3BlYy5uYW1lfWAsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlCYXNpY1RhYmxlXG4gICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgaXRlbXM9e2ZlYXR1cmVTZXJ2aWNlc31cbiAgICAgIHJvd1Byb3BzPXtnZXRSb3dQcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVNlcnZpY2VMaXN0aW5nVGFibGU7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtLCBTdHJpbmdQYXJhbSB9IGZyb20gXCJ1c2UtcXVlcnktcGFyYW1zXCI7XG5cbmltcG9ydCB7IHNvcnRUYWdzQnlUb3RhbFVzYWdlIH0gZnJvbSBcIi4vdXNlRkNPRXhwbG9yZVN1Z2dlc3Rpb25zXCI7XG5cbnR5cGUgdGFnVG9rZW5UeXBlID0gUmVjb3JkPFwia2V5XCIgfCBcInZhbHVlXCIsIHN0cmluZz47XG50eXBlIHRhZ1Rva2VuR3JvdXBzVHlwZSA9IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPjtcbnR5cGUgdGFnQWdncmVnYXRpb25SZWNvcmRUeXBlID1cbiAgfCBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duW10+PlxuICB8IHVuZGVmaW5lZDtcblxudHlwZSBTdWdnZXN0aW9uTW9kZXMgPSBcIktFWVwiIHwgXCJWQUxVRVwiO1xuXG5pbnRlcmZhY2UgZmlsdGVySW5wdXRJbnRlcmZhY2Uge1xuICB0YWdUb2tlbkdyb3VwczogdGFnVG9rZW5Hcm91cHNUeXBlO1xuICBzZWFyY2hUb2tlbnM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgVGFnU3VnZ2VzdGlvbkluc3RhbmNlIHtcbiAgc3VnZ2VzdGlvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBnZW5lcmF0ZUVtcHR5U3RhdGVTdWdnZXN0aW9ucyA9IChcbiAgdGFnc0FnZ3JlZ2F0aW9uRGF0YTogdGFnQWdncmVnYXRpb25SZWNvcmRUeXBlXG4pID0+IHtcbiAgaWYgKHRhZ3NBZ2dyZWdhdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gc29ydFRhZ3NCeVRvdGFsVXNhZ2UodGFnc0FnZ3JlZ2F0aW9uRGF0YSkubWFwKFxuICAgICAgKFt0YWdLZXksIHJlY29yZE9mVGFnVmFsdWVzXSkgPT4ge1xuICAgICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBPYmplY3Qua2V5cyhyZWNvcmRPZlRhZ1ZhbHVlcykubGVuZ3RoO1xuICAgICAgICBjb25zdCB0b3RhbEVudHJpZXMgPSBPYmplY3QudmFsdWVzKHJlY29yZE9mVGFnVmFsdWVzKS5yZWR1Y2UoXG4gICAgICAgICAgKG1lbW8sIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtZW1vICsgY3VycmVudC5sZW5ndGg7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWdnZXN0aW9uOiB0YWdLZXksXG4gICAgICAgICAgZGVzY3JpcHRpb246IGAke3VuaXF1ZVZhbHVlc30gdW5pcXVlIHRhZyB2YWx1ZXMuICR7dG90YWxFbnRyaWVzfSB0b3RhbCBlbnRyaWVzLmAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IGdlbmVyYXRlVGFnS2V5U3VnZ2VzdGlvbnMgPSAoXG4gIGlucHV0OiBzdHJpbmcsXG4gIHRhZ3NBZ2dyZWdhdGlvbkRhdGE6IHRhZ0FnZ3JlZ2F0aW9uUmVjb3JkVHlwZVxuKSA9PiB7XG4gIGlmICh0YWdzQWdncmVnYXRpb25EYXRhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRhZ3NBZ2dyZWdhdGlvbkRhdGEpXG4gICAgICAuZmlsdGVyKChbcG90ZW50aWFsVGFnS2V5LCBzdW1tYXJ5XSkgPT4ge1xuICAgICAgICByZXR1cm4gcG90ZW50aWFsVGFnS2V5LmluZGV4T2YoaW5wdXQpID49IDA7XG4gICAgICB9KVxuICAgICAgLm1hcCgoW3BvdGVudGlhbFRhZ0tleSwgc3VtbWFyeV0pID0+IHtcbiAgICAgICAgY29uc3QgdGFnVmFsdWVWYXJpYW50cyA9IE9iamVjdC5lbnRyaWVzKHN1bW1hcnkpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VnZ2VzdGlvbjogcG90ZW50aWFsVGFnS2V5LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHt0YWdWYWx1ZVZhcmlhbnRzLmxlbmd0aH0gZGlmZmVyZW50IHRhZyB2YWx1ZXNgLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRhZ1ZhbHVlU3VnZ2VzdGlvbnMgPSAoXG4gIGlucHV0OiBzdHJpbmcsXG4gIHRhZ3NBZ2dyZWdhdGlvbkRhdGE6IHRhZ0FnZ3JlZ2F0aW9uUmVjb3JkVHlwZVxuKSA9PiB7XG4gIGlmICh0YWdzQWdncmVnYXRpb25EYXRhKSB7XG4gICAgY29uc3QgW2N1cnJlbnRUYWdLZXksIGN1cnJlbnRUYWdWYWx1ZV0gPSBpbnB1dC5zcGxpdChcIjpcIik7XG4gICAgY29uc3QgZW50cmllc1dpdGhUYWdLZXkgPSB0YWdzQWdncmVnYXRpb25EYXRhW2N1cnJlbnRUYWdLZXldO1xuXG4gICAgY29uc3Qgc3VtbWFyaXplQ2FsbGJhY2sgPSAoZW50cnk6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgcG90ZW50aWFsVGFnS2V5ID0gZW50cnlbMF0gYXMgc3RyaW5nO1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGVudHJ5WzFdIGFzIHVua25vd25bXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VnZ2VzdGlvbjogcG90ZW50aWFsVGFnS2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogYCR7c3VtbWFyeS5sZW5ndGh9IGVudHJpZXNgLFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgaWYgKGVudHJpZXNXaXRoVGFnS2V5KSB7XG4gICAgICBpZiAoY3VycmVudFRhZ1ZhbHVlICYmIGN1cnJlbnRUYWdWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhlbnRyaWVzV2l0aFRhZ0tleSlcbiAgICAgICAgICAuZmlsdGVyKChbcG90ZW50aWFsVGFnVmFsdWUsIGVudHJpZXNdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBwb3RlbnRpYWxUYWdWYWx1ZS5pbmRleE9mKGN1cnJlbnRUYWdWYWx1ZSkgPj0gMCAvLyAmJlxuICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxUYWdWYWx1ZSAhPT0gY3VycmVudFRhZ1ZhbHVlIC8vIERvbid0IHNob3cgZXhhY3QgbWF0Y2hlcywgYi9jIHRoYXQgbWVhbnMgd2UgcHJvYmFibHkgYWxyZWFkeSBzZWxlY3RlZCBpdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoc3VtbWFyaXplQ2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGVudHJpZXNXaXRoVGFnS2V5KS5tYXAoc3VtbWFyaXplQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWxsU3BhY2VQb3NpdGlvbnMoczogc3RyaW5nKSB7XG4gIGNvbnN0IGluZGljZXM6IG51bWJlcltdID0gW107XG4gIHdoaWxlIChcbiAgICBzLmluZGV4T2YoXCIgXCIsIGluZGljZXMubGVuZ3RoID8gaW5kaWNlc1tpbmRpY2VzLmxlbmd0aCAtIDFdICsgMSA6IDApICE9PVxuICAgICAgLTEgJiZcbiAgICBpbmRpY2VzLmxlbmd0aCA8IDEwMFxuICApIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGluZGljZXNbaW5kaWNlcy5sZW5ndGggLSAxXSB8fCAwO1xuICAgIGNvbnN0IGluZGV4ID0gcy5pbmRleE9mKFwiIFwiLCBwb3NpdGlvbiArIDEpO1xuICAgIGluZGljZXMucHVzaChpbmRleCk7XG4gIH1cbiAgcmV0dXJuIGluZGljZXM7XG59XG5cbmludGVyZmFjZSBUYWdTcGxpdHRlclJldHVybkludGVyZmFjZSB7XG4gIGNodW5rczogc3RyaW5nW107XG4gIHRva2VuSW5Gb2N1c0luZGV4OiBudW1iZXI7XG4gIGN1cnJlbnRUYWc6IHN0cmluZztcbn1cblxuY29uc3QgcGFyc2VUb2tlbklucHV0ID0gKFxuICBjdXJzb3JQb3NpdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICB0YWdzU3RyaW5nOiBzdHJpbmdcbik6IFRhZ1NwbGl0dGVyUmV0dXJuSW50ZXJmYWNlID0+IHtcbiAgLy8gR2V0IHdoZXJlIHRoZSBzcGFjZXMgaW4gdGhlIHRhZ1N0cmluZywgcGx1cyBhIHN0YXJ0IGFuZCBlbmQgdmFsdWVcbiAgLy8gZS5nLiBcIkE6YSBCOmJcIiB3b3VsZCByZXR1cm5cbiAgLy8gWzAsIDMsIDddXG4gIGNvbnN0IGNodW5rcyA9IHRhZ3NTdHJpbmcuc3BsaXQoXCIgXCIpO1xuXG4gIGNvbnN0IGFsbFNwYWNlUG9zaXRpb25zID0gWzBdXG4gICAgLmNvbmNhdChnZXRBbGxTcGFjZVBvc2l0aW9ucyh0YWdzU3RyaW5nKSlcbiAgICAuY29uY2F0KHRhZ3NTdHJpbmcubGVuZ3RoICsgMSk7XG5cbiAgbGV0IHRva2VuSW5Gb2N1c0luZGV4ID0gMDtcbiAgaWYgKGN1cnNvclBvc2l0aW9uKSB7XG4gICAgdG9rZW5JbkZvY3VzSW5kZXggPSBhbGxTcGFjZVBvc2l0aW9ucy5maW5kSW5kZXgoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgY3Vyc29yUG9zaXRpb24gPj0gdmFsdWUgJiZcbiAgICAgICAgY3Vyc29yUG9zaXRpb24gPD0gYWxsU3BhY2VQb3NpdGlvbnNbaW5kZXggKyAxXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRUYWcgPSBjaHVua3NbdG9rZW5JbkZvY3VzSW5kZXhdIHx8IFwiXCI7XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VGFnLFxuICAgIGNodW5rcyxcbiAgICB0b2tlbkluRm9jdXNJbmRleCxcbiAgfTtcbn07XG5cbmNvbnN0IHVzZVNlYXJjaFF1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVF1ZXJ5UGFyYW0oXCJxXCIsIFN0cmluZ1BhcmFtKTtcbiAgY29uc3Qgc2VhcmNoU3RyaW5nID0gcXVlcnkgfHwgXCJcIjtcblxuICBjb25zdCBzZWFyY2hUb2tlbnMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoXCIgXCIpLmZpbHRlcigodCkgPT4gdC5sZW5ndGggPj0gMyk7XG5cbiAgY29uc3Qgc2V0U2VhcmNoU3RyaW5nID0gKGQ6IHN0cmluZykgPT4ge1xuICAgIHNldFF1ZXJ5KGQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoU3RyaW5nLFxuICAgIHNlYXJjaFRva2VucyxcbiAgICBzZXRTZWFyY2hTdHJpbmcsXG4gIH07XG59O1xuXG5jb25zdCB1c2VUYWdzV2l0aFN1Z2dlc3Rpb25zID0gKFxuICB0YWdzQWdncmVnYXRpb25EYXRhOiB0YWdBZ2dyZWdhdGlvblJlY29yZFR5cGVcbikgPT4ge1xuICBjb25zdCBbcmF3dGFnc1N0cmluZywgc2V0VGFnc1N0cmluZ1BhcmFtXSA9IHVzZVF1ZXJ5UGFyYW0oXG4gICAgXCJ0YWdzXCIsXG4gICAgU3RyaW5nUGFyYW1cbiAgKTtcblxuICBjb25zdCB0YWdzU3RyaW5nID0gcmF3dGFnc1N0cmluZyB8fCBcIlwiO1xuXG4gIC8vIFNwYWNlcyBpbiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmdcbiAgLy8gcmVhbGx5IG1lc3NlcyB3aXRoIHBhcnNlVG9rZW5JbnB1dCgpLiBKdXN0IHByZXZlbnQgaXQuXG4gIGNvbnN0IHNldFRhZ3NTdHJpbmcgPSAoczogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGFnc1N0cmluZ1BhcmFtKHMudHJpbVN0YXJ0KCkpO1xuICB9O1xuXG4gIGNvbnN0IFtjdXJzb3JQb3NpdGlvbiwgc2V0Q3Vyc29yXSA9IHVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3Qgc2V0Q3Vyc29yUG9zaXRpb24gPSAocG9zaXRpb246IG51bWJlciB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIHNldEN1cnNvcihwb3NpdGlvbik7XG4gIH07XG5cbiAgLy8gUGFyc2UgaW5wdXQgaW50byB0b2tlbnMsIGFuZCBkZXRlY3Qgd2hpY2ggdG9rZW5cbiAgLy8gd2UgYXJlIGZvY3VzZWQgb24gZ2l2ZW4gdGhlIGN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uXG4gIGNvbnN0IHsgY2h1bmtzLCB0b2tlbkluRm9jdXNJbmRleCwgY3VycmVudFRhZyB9ID0gcGFyc2VUb2tlbklucHV0KFxuICAgIGN1cnNvclBvc2l0aW9uLFxuICAgIHRhZ3NTdHJpbmdcbiAgKTtcblxuICBjb25zdCBzdWdnZXN0aW9uTW9kZTogU3VnZ2VzdGlvbk1vZGVzID1cbiAgICBjdXJyZW50VGFnLmluZGV4T2YoXCI6XCIpIDwgMCA/IFwiS0VZXCIgOiBcIlZBTFVFXCI7XG5cbiAgbGV0IHRhZ1N1Z2dlc3Rpb25zOiBUYWdTdWdnZXN0aW9uSW5zdGFuY2VbXSA9IFtdO1xuICBpZiAodGFnc0FnZ3JlZ2F0aW9uRGF0YSkge1xuICAgIGlmIChjdXJyZW50VGFnLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzdWdnZXN0aW9uTW9kZSA9PT0gXCJLRVlcIikge1xuICAgICAgICB0YWdTdWdnZXN0aW9ucyA9IGdlbmVyYXRlVGFnS2V5U3VnZ2VzdGlvbnMoXG4gICAgICAgICAgY3VycmVudFRhZyxcbiAgICAgICAgICB0YWdzQWdncmVnYXRpb25EYXRhXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWdTdWdnZXN0aW9ucyA9IGdlbmVyYXRlVGFnVmFsdWVTdWdnZXN0aW9ucyhcbiAgICAgICAgICBjdXJyZW50VGFnLFxuICAgICAgICAgIHRhZ3NBZ2dyZWdhdGlvbkRhdGFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3VycmVudCBUYWcgaXMgZW1wdHlcbiAgICAgIHRhZ1N1Z2dlc3Rpb25zID0gZ2VuZXJhdGVFbXB0eVN0YXRlU3VnZ2VzdGlvbnModGFnc0FnZ3JlZ2F0aW9uRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSGVscGVyIG1ldGhvZCBmb3IgYWNjZXB0aW5nIHN1Z2dlc3Rpb25zXG4gIGNvbnN0IHNldFN1Z2dlc3Rpb25BdFBvc2l0aW9uSW5UYWdzU3RyaW5nID0gKFxuICAgIHN1Z2dlc3Rpb246IHN0cmluZyxcbiAgICBwb3NpdGlvbjogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IG5leHRUYWdzVG9rZW5zID0gY2h1bmtzLnNsaWNlKDApO1xuICAgIG5leHRUYWdzVG9rZW5zW3Bvc2l0aW9uXSA9IHN1Z2dlc3Rpb247XG5cbiAgICBzZXRUYWdzU3RyaW5nKG5leHRUYWdzVG9rZW5zLmpvaW4oXCIgXCIpKTtcbiAgfTtcblxuICBjb25zdCBhY2NlcHRTdWdnZXN0aW9uID0gKHN1Z2dlc3Rpb246IFRhZ1N1Z2dlc3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgIGlmIChzdWdnZXN0aW9uTW9kZSA9PT0gXCJLRVlcIikge1xuICAgICAgY29uc3QgbmV3S2V5VGV4dCA9IHN1Z2dlc3Rpb24uc3VnZ2VzdGlvbiArIFwiOlwiO1xuXG4gICAgICBzZXRTdWdnZXN0aW9uQXRQb3NpdGlvbkluVGFnc1N0cmluZyhuZXdLZXlUZXh0LCB0b2tlbkluRm9jdXNJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFtjdXJyZW50VGFnS2V5XSA9IGN1cnJlbnRUYWcuc3BsaXQoXCI6XCIpO1xuXG4gICAgICBjb25zdCBuZXdUYWdUZXh0ID0gYCR7Y3VycmVudFRhZ0tleX06YCArIHN1Z2dlc3Rpb24uc3VnZ2VzdGlvbjtcblxuICAgICAgc2V0U3VnZ2VzdGlvbkF0UG9zaXRpb25JblRhZ3NTdHJpbmcobmV3VGFnVGV4dCwgdG9rZW5JbkZvY3VzSW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0YWdLZXlzU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgY29uc3QgdGFnVG9rZW5zOiB0YWdUb2tlblR5cGVbXSA9IGNodW5rc1xuICAgIC5maWx0ZXIoKGNodW5rOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBjaHVuay5pbmRleE9mKFwiOlwiKSA+IDA7XG4gICAgfSlcbiAgICAubWFwKChjaHVuaykgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBjaHVuay5zcGxpdChcIjpcIik7XG4gICAgICB0YWdLZXlzU2V0LmFkZChwYXJ0c1swXSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogcGFydHNbMF0sXG4gICAgICAgIHZhbHVlOiBwYXJ0c1sxXSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgY29uc3QgdGFnVG9rZW5Hcm91cHMgPSB0YWdUb2tlbnMucmVkdWNlKFxuICAgIChtZW1vOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4sIGN1cnJlbnQpID0+IHtcbiAgICAgIGlmIChtZW1vW2N1cnJlbnQua2V5XSkge1xuICAgICAgICBtZW1vW2N1cnJlbnQua2V5XS5wdXNoKGN1cnJlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtb1tjdXJyZW50LmtleV0gPSBbY3VycmVudC52YWx1ZV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH0sXG4gICAge31cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHNldEN1cnNvclBvc2l0aW9uLFxuICAgIGN1cnJlbnRUYWcsXG4gICAgdGFnc1N0cmluZyxcbiAgICBzZXRUYWdzU3RyaW5nLFxuICAgIHRhZ1Rva2VucyxcbiAgICB0YWdUb2tlbkdyb3VwcyxcbiAgICB0YWdLZXlzU2V0LCAvLyBVc2VkIHRvIGRldGVybWluZSB3aGljaCBjb2x1bW5zIHRvIGFkZCB0byBzZWFyY2ggcmVzdWx0cyxcbiAgICBzdWdnZXN0aW9uTW9kZSxcbiAgICB0YWdTdWdnZXN0aW9ucyxcbiAgICBhY2NlcHRTdWdnZXN0aW9uLFxuICB9O1xufTtcblxuZXhwb3J0IHsgdXNlVGFnc1dpdGhTdWdnZXN0aW9ucywgdXNlU2VhcmNoUXVlcnkgfTtcbmV4cG9ydCB0eXBlIHtcbiAgZmlsdGVySW5wdXRJbnRlcmZhY2UsXG4gIHRhZ1Rva2VuR3JvdXBzVHlwZSxcbiAgVGFnU3VnZ2VzdGlvbkluc3RhbmNlLFxuICBTdWdnZXN0aW9uTW9kZXMsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRXVpRW1wdHlQcm9tcHQsIEV1aVRpdGxlLCBFdWlMaW5rLCBFdWlCdXR0b24gfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgRmVhc3RJY29uQmx1ZSBmcm9tIFwiLi4vLi4vZ3JhcGhpY3MvRmVhc3RJY29uQmx1ZVwiO1xuXG5jb25zdCBGZWF0dXJlU2VydmljZUluZGV4RW1wdHlTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RXVpRW1wdHlQcm9tcHRcbiAgICAgIGljb25UeXBlPXtGZWFzdEljb25CbHVlfVxuICAgICAgdGl0bGU9ezxoMj5UaGVyZSBhcmUgbm8gZmVhdHVyZSBzZXJ2aWNlczwvaDI+fVxuICAgICAgYm9keT17XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgcHJvamVjdCBkb2VzIG5vdCBoYXZlIGFueSBGZWF0dXJlIFNlcnZpY2VzLiBMZWFybiBtb3JlIGFib3V0XG4gICAgICAgICAgY3JlYXRpbmcgRmVhdHVyZSBTZXJ2aWNlcyBpbiBGZWFzdCBEb2NzLlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEV1aUJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5mZWFzdC5kZXYvZ2V0dGluZy1zdGFydGVkL2NvbmNlcHRzL2ZlYXR1cmUtc2VydmljZVwiLFxuICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBPcGVuIEZlYXR1cmUgU2VydmljZXMgRG9jc1xuICAgICAgICA8L0V1aUJ1dHRvbj5cbiAgICAgIH1cbiAgICAgIGZvb3Rlcj17XG4gICAgICAgIDw+XG4gICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4eHNcIj5cbiAgICAgICAgICAgIDxoMz5XYW50IHRvIGxlYXJuIG1vcmU/PC9oMz5cbiAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgIDxFdWlMaW5rIGhyZWY9XCJodHRwczovL2RvY3MuZmVhc3QuZGV2L1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgUmVhZCBGZWFzdCBkb2N1bWVudGF0aW9uXG4gICAgICAgICAgPC9FdWlMaW5rPlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVNlcnZpY2VJbmRleEVtcHR5U3RhdGU7XG4iLCJpbXBvcnQgeyBFdWlUaXRsZSwgRXVpSW5wdXRQb3BvdmVyLCBFdWlTZWxlY3RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTdWdnZXN0aW9uTW9kZXMsXG4gIFRhZ1N1Z2dlc3Rpb25JbnN0YW5jZSxcbn0gZnJvbSBcIi4uL2hvb2tzL3VzZVNlYXJjaElucHV0V2l0aFRhZ3NcIjtcblxuaW50ZXJmYWNlIFRhZ1NlYXJjaEludGVyZmFjZSB7XG4gIGN1cnJlbnRUYWc6IHN0cmluZztcbiAgdGFnc1N0cmluZzogc3RyaW5nO1xuICBzZXRUYWdzU3RyaW5nOiAodGFnc1N0cmluZzogc3RyaW5nKSA9PiB2b2lkO1xuICBhY2NlcHRTdWdnZXN0aW9uOiAoc3VnZ2VzdGlvbjogVGFnU3VnZ2VzdGlvbkluc3RhbmNlKSA9PiB2b2lkO1xuICB0YWdTdWdnZXN0aW9uczogVGFnU3VnZ2VzdGlvbkluc3RhbmNlW107XG4gIHN1Z2dlc3Rpb25Nb2RlOiBTdWdnZXN0aW9uTW9kZXM7XG4gIHNldEN1cnNvclBvc2l0aW9uOiAocG9zaXRpb246IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFNlbGVjdGFibGVPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGVja2VkPzogXCJvblwiIHwgXCJvZmZcIiB8IHVuZGVmaW5lZDtcbiAgc3VnZ2VzdGlvbjogVGFnU3VnZ2VzdGlvbkluc3RhbmNlO1xufVxuXG4vLyBIZWxwZXIgRnVuY3Rpb25zXG5jb25zdCBzdWdnZXN0aW9uRm9ybWF0dGVyID0gKGl0ZW06IFRhZ1N1Z2dlc3Rpb25JbnN0YW5jZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiBpdGVtLnN1Z2dlc3Rpb24sXG4gICAgc3VnZ2VzdGlvbjogaXRlbSxcbiAgICBzaG93SWNvbnM6IGZhbHNlLFxuICAgIGFwcGVuZDogPHNwYW4+e2l0ZW0uZGVzY3JpcHRpb259PC9zcGFuPixcbiAgfTtcbn07XG5cbmNvbnN0IGdldEN1cnNvclBvc2l0aW9uID0gKFxuICBpbnB1dE5vZGU6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudCB8IG51bGw+XG4pID0+IHtcbiAgcmV0dXJuIGlucHV0Tm9kZS5jdXJyZW50Py5zZWxlY3Rpb25TdGFydCB8fCB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBjb21wdXRlUGxhY2Vob2xkZXJUZXh0ID0gKFxuICB0YWdTdWdnZXN0aW9uczogVGFnU3VnZ2VzdGlvbkluc3RhbmNlW10gfCB1bmRlZmluZWRcbikgPT4ge1xuICByZXR1cm4gIXRhZ1N1Z2dlc3Rpb25zXG4gICAgPyBcIlwiXG4gICAgOiBcImUuZy4gXCIgK1xuICAgICAgICB0YWdTdWdnZXN0aW9uc1xuICAgICAgICAgIC5zbGljZSgwLCAyKVxuICAgICAgICAgIC5tYXAoKHMpID0+IGBcIiR7cy5zdWdnZXN0aW9ufVwiYClcbiAgICAgICAgICAuam9pbihcIiBvciBcIik7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVJlc3VsdHNDb3VudCA9IChcbiAgY3VycmVudFRhZzogc3RyaW5nLFxuICBzdWdnZXN0aW9uTW9kZTogU3VnZ2VzdGlvbk1vZGVzLFxuICB0YWdTdWdnZXN0aW9uczogVGFnU3VnZ2VzdGlvbkluc3RhbmNlW11cbikgPT4ge1xuICBsZXQgcmVzdWx0c0NvdW50ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGN1cnJlbnRUYWdJc0VtcHR5ID0gY3VycmVudFRhZy5sZW5ndGggPD0gMDtcbiAgY29uc3QgY3VycmVudFRhZ0hhc05vVmFsdWUgPSBjdXJyZW50VGFnLnNwbGl0KFwiOlwiKVsxXSA9PT0gXCJcIjtcbiAgY29uc3Qgb3BlcmF0aW5nV29yZCA9XG4gICAgY3VycmVudFRhZ0lzRW1wdHkgfHwgY3VycmVudFRhZ0hhc05vVmFsdWUgPyBcInBvc3NpYmxlXCIgOiBcIm1hdGNoaW5nXCI7XG4gIGNvbnN0IGNvdW50ZXJXb3JkID0gc3VnZ2VzdGlvbk1vZGUgPT09IFwiS0VZXCIgPyBga2V5YCA6IGB2YWx1ZWA7XG5cbiAgaWYgKHRhZ1N1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBpc1BsdXJhbCA9IHRhZ1N1Z2dlc3Rpb25zLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCI7XG4gICAgcmVzdWx0c0NvdW50ID0gKFxuICAgICAgPHNwYW4+e2Ake3RhZ1N1Z2dlc3Rpb25zLmxlbmd0aH0gJHtvcGVyYXRpbmdXb3JkfSAke2NvdW50ZXJXb3JkfSR7aXNQbHVyYWx9YH08L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzQ291bnQ7XG59O1xuXG4vLyBIb29rc1xuY29uc3QgdXNlSW5wdXRIYWNrID0gKFxuICBzZXRUYWdzU3RyaW5nOiAoczogc3RyaW5nKSA9PiB2b2lkLFxuICBzZXRDdXJzb3JQb3NpdGlvbjogKG46IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxuKSA9PiB7XG4gIC8vIEhBQ0sgLS0tIHJvdXRlIGFyb3VuZCB0aGUgbGFjayBvZiBvbkNoYW5nZVxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9lbGFzdGljL2V1aS9pc3N1ZXMvNTY1MVxuICBjb25zdCBpbnB1dE5vZGUgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgY29uc3Qgczogc3RyaW5nID0gaW5wdXROb2RlLmN1cnJlbnQ/LnZhbHVlIHx8IFwiXCI7XG5cbiAgICAgIHNldFRhZ3NTdHJpbmcocyk7XG4gICAgICBzZXRDdXJzb3JQb3NpdGlvbihnZXRDdXJzb3JQb3NpdGlvbihpbnB1dE5vZGUpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29waWVkTm9kZSA9IGlucHV0Tm9kZS5jdXJyZW50O1xuXG4gICAgaWYgKGNvcGllZE5vZGUpIHtcbiAgICAgIGNvcGllZE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGNvcGllZE5vZGUpIHtcbiAgICAgICAgY29waWVkTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2IpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtpbnB1dE5vZGUsIHNldFRhZ3NTdHJpbmcsIHNldEN1cnNvclBvc2l0aW9uXSk7XG5cbiAgcmV0dXJuIGlucHV0Tm9kZTtcbn07XG5cbmNvbnN0IHVzZVNlbGVjdGFibGVPcHRpb25zID0gKFxuICB0YWdTdWdnZXN0aW9uczogVGFnU3VnZ2VzdGlvbkluc3RhbmNlW10sXG4gIGFjY2VwdFN1Z2dlc3Rpb246IChzdWdnZXN0aW9uOiBUYWdTdWdnZXN0aW9uSW5zdGFuY2UpID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxTZWxlY3RhYmxlT3B0aW9uW10+KFxuICAgIHRhZ1N1Z2dlc3Rpb25zID8gdGFnU3VnZ2VzdGlvbnMubWFwKHN1Z2dlc3Rpb25Gb3JtYXR0ZXIpIDogW11cbiAgKTtcblxuICBjb25zdCBvblNlbGVjdGFibGVDaGFuZ2UgPSAob3B0aW9uczogU2VsZWN0YWJsZU9wdGlvbltdKSA9PiB7XG4gICAgLy8gR2V0IHRoZSB0aGluZyB0aGF0IGp1c3QgZ290IFwiY2hlY2tlZFwiXG4gICAgY29uc3QgY2xpY2tlZEl0ZW0gPSBvcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLmNoZWNrZWQgPT09IFwib25cIik7XG5cbiAgICBpZiAoY2xpY2tlZEl0ZW0pIHtcbiAgICAgIGFjY2VwdFN1Z2dlc3Rpb24oY2xpY2tlZEl0ZW0uc3VnZ2VzdGlvbik7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFVwZGF0ZSBvcHRpb25zIHdoZW4gbmV3IHNldCBvZiBzdWdnZXN0aW9ucyBhcmUgcGFzc2VkIGRvd25cbiAgICBzZXRPcHRpb25zKHRhZ1N1Z2dlc3Rpb25zLm1hcChzdWdnZXN0aW9uRm9ybWF0dGVyKSk7XG4gIH0sIFt0YWdTdWdnZXN0aW9ucywgc2V0T3B0aW9uc10pO1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBvblNlbGVjdGFibGVDaGFuZ2UsXG4gIH07XG59O1xuXG5jb25zdCBUYWdTZWFyY2ggPSAoe1xuICBjdXJyZW50VGFnLFxuICB0YWdzU3RyaW5nLFxuICBzZXRUYWdzU3RyaW5nLFxuICBhY2NlcHRTdWdnZXN0aW9uLFxuICB0YWdTdWdnZXN0aW9ucyxcbiAgc3VnZ2VzdGlvbk1vZGUsXG4gIHNldEN1cnNvclBvc2l0aW9uLFxufTogVGFnU2VhcmNoSW50ZXJmYWNlKSA9PiB7XG4gIC8vIEhBQ0sgLS0tIHJvdXRlIGFyb3VuZCB0aGUgbGFjayBvZiBvbkNoYW5nZVxuICBjb25zdCBpbnB1dE5vZGUgPSB1c2VJbnB1dEhhY2soc2V0VGFnc1N0cmluZywgc2V0Q3Vyc29yUG9zaXRpb24pO1xuXG4gIC8vIEhhbmRsaW5nIFN1Z2dlc3Rpb24gT3B0aW9uc1xuICBjb25zdCB7IG9wdGlvbnMsIG9uU2VsZWN0YWJsZUNoYW5nZSB9ID0gdXNlU2VsZWN0YWJsZU9wdGlvbnMoXG4gICAgdGFnU3VnZ2VzdGlvbnMsIC8vIEdldHMgdHVybmVkIGludG8gb3B0aW9uc1xuICAgIGFjY2VwdFN1Z2dlc3Rpb24gLy8gR2V0IHRyaWdnZXJlZCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZFxuICApO1xuXG4gIC8vIFVzaW5nIEV1aUlucHV0UG9wb3ZlcjogaHR0cHM6Ly9lbGFzdGljLmdpdGh1Yi5pby9ldWkvIy9sYXlvdXQvcG9wb3ZlclxuICBjb25zdCBbaGFzRm9jdXMsIHNldEhhc0ZvY3VzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAvLyBQcm9wcyBmb3IgRXVpRmllbGRTZWFyY2hcbiAgY29uc3Qgc2VhcmNoUHJvcHMgPSB7XG4gICAgdmFsdWU6IHRhZ3NTdHJpbmcsXG4gICAgaW5wdXRSZWY6IChub2RlOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgLy8gSFRNTElucHV0RWxlbWVudCBpcyBob29rZWQgaW50byB1c2VJbnB1dEhhY2tcbiAgICAgIGlucHV0Tm9kZS5jdXJyZW50ID0gbm9kZTtcbiAgICB9LFxuICAgIG9uZm9jdXM6ICgpID0+IHtcbiAgICAgIHNldEhhc0ZvY3VzKHRydWUpO1xuICAgIH0sXG4gICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiBjb21wdXRlUGxhY2Vob2xkZXJUZXh0KHRhZ1N1Z2dlc3Rpb25zKSxcbiAgfTtcblxuICBjb25zdCByZXN1bHRzQ291bnQgPSBnZW5lcmF0ZVJlc3VsdHNDb3VudChcbiAgICBjdXJyZW50VGFnLFxuICAgIHN1Z2dlc3Rpb25Nb2RlLFxuICAgIHRhZ1N1Z2dlc3Rpb25zXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICA8aDI+RmlsdGVyIGJ5IFRhZ3M8L2gyPlxuICAgICAgPC9FdWlUaXRsZT5cbiAgICAgIDxFdWlTZWxlY3RhYmxlXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHtcbiAgICAgICAgICBzZXRIYXNGb2N1cyh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SGFzRm9jdXMoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgICBzZWFyY2hhYmxlPXt0cnVlfVxuICAgICAgICBpc1ByZUZpbHRlcmVkPXt0cnVlfVxuICAgICAgICBzZWFyY2hQcm9wcz17c2VhcmNoUHJvcHN9XG4gICAgICAgIGFyaWEtbGFiZWw9XCJGaWx0ZXIgYnkgXCJcbiAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0YWJsZUNoYW5nZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgc2luZ2xlU2VsZWN0aW9uPXt0cnVlfVxuICAgICAgICBsaXN0UHJvcHM9e3sgYm9yZGVyZWQ6IHRydWUgfX1cbiAgICAgID5cbiAgICAgICAgeyhsaXN0LCBzZWFyY2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEV1aUlucHV0UG9wb3ZlclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZGlzYWJsZUZvY3VzVHJhcD17dHJ1ZX1cbiAgICAgICAgICAgICAgaW5wdXQ9ezw+e3NlYXJjaH08Lz59XG4gICAgICAgICAgICAgIGlzT3Blbj17aGFzRm9jdXN9XG4gICAgICAgICAgICAgIGNsb3NlUG9wb3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEhhc0ZvY3VzKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Jlc3VsdHNDb3VudH1cbiAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICA8L0V1aUlucHV0UG9wb3Zlcj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9FdWlTZWxlY3RhYmxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFnU2VhcmNoO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgRXVpUGFnZUhlYWRlcixcbiAgRXVpUGFnZUNvbnRlbnQsXG4gIEV1aVBhZ2VDb250ZW50Qm9keSxcbiAgRXVpTG9hZGluZ1NwaW5uZXIsXG4gIEV1aVRpdGxlLFxuICBFdWlTcGFjZXIsXG4gIEV1aUZsZXhHcm91cCxcbiAgRXVpRmxleEl0ZW0sXG4gIEV1aUZpZWxkU2VhcmNoLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IEZlYXR1cmVTZXJ2aWNlSWNvbjMyIH0gZnJvbSBcIi4uLy4uL2dyYXBoaWNzL0ZlYXR1cmVTZXJ2aWNlSWNvblwiO1xuXG5pbXBvcnQgdXNlTG9hZFJlZ2lzdHJ5IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZUxvYWRSZWdpc3RyeVwiO1xuaW1wb3J0IEZlYXR1cmVTZXJ2aWNlTGlzdGluZ1RhYmxlIGZyb20gXCIuL0ZlYXR1cmVTZXJ2aWNlTGlzdGluZ1RhYmxlXCI7XG5pbXBvcnQge1xuICB1c2VTZWFyY2hRdWVyeSxcbiAgdXNlVGFnc1dpdGhTdWdnZXN0aW9ucyxcbiAgZmlsdGVySW5wdXRJbnRlcmZhY2UsXG4gIHRhZ1Rva2VuR3JvdXBzVHlwZSxcbn0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNlYXJjaElucHV0V2l0aFRhZ3NcIjtcbmltcG9ydCB7IEZlYXN0RmVhdHVyZVNlcnZpY2VUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvZmVhc3RGZWF0dXJlU2VydmljZXNcIjtcbmltcG9ydCB7IHVzZURvY3VtZW50VGl0bGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRG9jdW1lbnRUaXRsZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5UGF0aENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL1JlZ2lzdHJ5UGF0aENvbnRleHRcIjtcbmltcG9ydCBGZWF0dXJlU2VydmljZUluZGV4RW1wdHlTdGF0ZSBmcm9tIFwiLi9GZWF0dXJlU2VydmljZUluZGV4RW1wdHlTdGF0ZVwiO1xuaW1wb3J0IFRhZ1NlYXJjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdTZWFyY2hcIjtcbmltcG9ydCB7IHVzZUZlYXR1cmVTZXJ2aWNlVGFnc0FnZ3JlZ2F0aW9uIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRhZ3NBZ2dyZWdhdGlvblwiO1xuXG5jb25zdCB1c2VMb2FkRmVhdHVyZVNlcnZpY2VzID0gKCkgPT4ge1xuICBjb25zdCByZWdpc3RyeVVybCA9IHVzZUNvbnRleHQoUmVnaXN0cnlQYXRoQ29udGV4dCk7XG4gIGNvbnN0IHJlZ2lzdHJ5UXVlcnkgPSB1c2VMb2FkUmVnaXN0cnkocmVnaXN0cnlVcmwpO1xuXG4gIGNvbnN0IGRhdGEgPVxuICAgIHJlZ2lzdHJ5UXVlcnkuZGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiByZWdpc3RyeVF1ZXJ5LmRhdGEub2JqZWN0cy5mZWF0dXJlU2VydmljZXM7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWdpc3RyeVF1ZXJ5LFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCBzaG91bGRJbmNsdWRlRlNzR2l2ZW5Ub2tlbkdyb3VwcyA9IChcbiAgZW50cnk6IEZlYXN0RmVhdHVyZVNlcnZpY2VUeXBlLFxuICB0YWdUb2tlbkdyb3VwczogdGFnVG9rZW5Hcm91cHNUeXBlXG4pID0+IHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRhZ1Rva2VuR3JvdXBzKS5ldmVyeSgoW2tleSwgdmFsdWVzXSkgPT4ge1xuICAgIGNvbnN0IGVudHJ5VGFnVmFsdWUgPSBlbnRyeS5zcGVjLnRhZ3MgPyBlbnRyeS5zcGVjLnRhZ3Nba2V5XSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChlbnRyeVRhZ1ZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWVzLmV2ZXJ5KCh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCA/IGVudHJ5VGFnVmFsdWUuaW5kZXhPZih2YWx1ZSkgPj0gMCA6IHRydWU7IC8vIERvbid0IGZpbHRlciBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBmaWx0ZXJGbiA9IChcbiAgZGF0YTogRmVhc3RGZWF0dXJlU2VydmljZVR5cGVbXSxcbiAgZmlsdGVySW5wdXQ6IGZpbHRlcklucHV0SW50ZXJmYWNlXG4pID0+IHtcbiAgbGV0IGZpbHRlcmVkQnlUYWdzID0gZGF0YTtcblxuICBpZiAoT2JqZWN0LmtleXMoZmlsdGVySW5wdXQudGFnVG9rZW5Hcm91cHMpLmxlbmd0aCkge1xuICAgIGZpbHRlcmVkQnlUYWdzID0gZGF0YS5maWx0ZXIoKGVudHJ5KSA9PiB7XG4gICAgICByZXR1cm4gc2hvdWxkSW5jbHVkZUZTc0dpdmVuVG9rZW5Hcm91cHMoXG4gICAgICAgIGVudHJ5LFxuICAgICAgICBmaWx0ZXJJbnB1dC50YWdUb2tlbkdyb3Vwc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChmaWx0ZXJJbnB1dC5zZWFyY2hUb2tlbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZpbHRlcmVkQnlUYWdzLmZpbHRlcigoZW50cnkpID0+IHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbnB1dC5zZWFyY2hUb2tlbnMuZmluZCgodG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRva2VuLmxlbmd0aCA+PSAzICYmIGVudHJ5LnNwZWMubmFtZS5pbmRleE9mKHRva2VuKSA+PSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRCeVRhZ3M7XG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzU3VjY2VzcywgaXNFcnJvciwgZGF0YSB9ID0gdXNlTG9hZEZlYXR1cmVTZXJ2aWNlcygpO1xuICBjb25zdCB0YWdBZ2dyZWdhdGlvblF1ZXJ5ID0gdXNlRmVhdHVyZVNlcnZpY2VUYWdzQWdncmVnYXRpb24oKTtcblxuICB1c2VEb2N1bWVudFRpdGxlKGBGZWF0dXJlIFNlcnZpY2VzIHwgRmVhc3RgKTtcblxuICBjb25zdCB7IHNlYXJjaFN0cmluZywgc2VhcmNoVG9rZW5zLCBzZXRTZWFyY2hTdHJpbmcgfSA9IHVzZVNlYXJjaFF1ZXJ5KCk7XG5cbiAgY29uc3Qge1xuICAgIGN1cnJlbnRUYWcsXG4gICAgdGFnc1N0cmluZyxcbiAgICB0YWdUb2tlbkdyb3VwcyxcbiAgICB0YWdLZXlzU2V0LFxuICAgIHRhZ1N1Z2dlc3Rpb25zLFxuICAgIHN1Z2dlc3Rpb25Nb2RlLFxuICAgIHNldFRhZ3NTdHJpbmcsXG4gICAgYWNjZXB0U3VnZ2VzdGlvbixcbiAgICBzZXRDdXJzb3JQb3NpdGlvbixcbiAgfSA9IHVzZVRhZ3NXaXRoU3VnZ2VzdGlvbnModGFnQWdncmVnYXRpb25RdWVyeS5kYXRhKTtcblxuICBjb25zdCBmaWx0ZXJSZXN1bHQgPSBkYXRhXG4gICAgPyBmaWx0ZXJGbihkYXRhLCB7IHRhZ1Rva2VuR3JvdXBzLCBzZWFyY2hUb2tlbnMgfSlcbiAgICA6IGRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8RXVpUGFnZUhlYWRlclxuICAgICAgICByZXN0cmljdFdpZHRoXG4gICAgICAgIGljb25UeXBlPXtGZWF0dXJlU2VydmljZUljb24zMn1cbiAgICAgICAgcGFnZVRpdGxlPVwiRmVhdHVyZSBTZXJ2aWNlc1wiXG4gICAgICAvPlxuICAgICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICAgIGhhc0JvcmRlcj17ZmFsc2V9XG4gICAgICAgIGhhc1NoYWRvdz17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAgPEV1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cIm1cIiAvPiBMb2FkaW5nXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNFcnJvciAmJiA8cD5XZSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nLjwvcD59XG4gICAgICAgICAge2lzU3VjY2VzcyAmJiAhZGF0YSAmJiA8RmVhdHVyZVNlcnZpY2VJbmRleEVtcHR5U3RhdGUgLz59XG4gICAgICAgICAge2lzU3VjY2VzcyAmJiBmaWx0ZXJSZXN1bHQgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXsyfT5cbiAgICAgICAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgICAgPEV1aUZpZWxkU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hTdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoU3RyaW5nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICA8RXVpRmxleEl0ZW0gZ3Jvdz17M30+XG4gICAgICAgICAgICAgICAgICA8VGFnU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWc9e2N1cnJlbnRUYWd9XG4gICAgICAgICAgICAgICAgICAgIHRhZ3NTdHJpbmc9e3RhZ3NTdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgIHNldFRhZ3NTdHJpbmc9e3NldFRhZ3NTdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdFN1Z2dlc3Rpb249e2FjY2VwdFN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHRhZ1N1Z2dlc3Rpb25zPXt0YWdTdWdnZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbk1vZGU9e3N1Z2dlc3Rpb25Nb2RlfVxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJzb3JQb3NpdGlvbj17c2V0Q3Vyc29yUG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDwvRXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJtXCIgLz5cbiAgICAgICAgICAgICAgPEZlYXR1cmVTZXJ2aWNlTGlzdGluZ1RhYmxlXG4gICAgICAgICAgICAgICAgZmVhdHVyZVNlcnZpY2VzPXtmaWx0ZXJSZXN1bHR9XG4gICAgICAgICAgICAgICAgdGFnS2V5c1NldD17dGFnS2V5c1NldH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9FdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICA8L0V1aVBhZ2VDb250ZW50PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEV1aUJhc2ljVGFibGUsXG4gIEV1aUJhZGdlLFxuICBFdWlUYWJsZUZpZWxkRGF0YUNvbHVtblR5cGUsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBFdWlDdXN0b21MaW5rIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0V1aUN1c3RvbUxpbmtcIjtcbmltcG9ydCB7IGdlbmVyaWNGVlR5cGUgfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9tZXJnZWRGVlR5cGVzXCI7XG5pbXBvcnQgeyBFdWlUYWJsZUNvbXB1dGVkQ29sdW1uVHlwZSB9IGZyb20gXCJAZWxhc3RpYy9ldWkvc3JjL2NvbXBvbmVudHMvYmFzaWNfdGFibGVcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmludGVyZmFjZSBGZWF0dXJlVmlld0xpc3RpbmdUYWJsZVByb3BzIHtcbiAgdGFnS2V5c1NldDogU2V0PHN0cmluZz47XG4gIGZlYXR1cmVWaWV3czogZ2VuZXJpY0ZWVHlwZVtdO1xufVxuXG50eXBlIGdlbmVyaWNGVlR5cGVDb2x1bW4gPVxuICB8IEV1aVRhYmxlRmllbGREYXRhQ29sdW1uVHlwZTxnZW5lcmljRlZUeXBlPlxuICB8IEV1aVRhYmxlQ29tcHV0ZWRDb2x1bW5UeXBlPGdlbmVyaWNGVlR5cGU+O1xuXG5jb25zdCBGZWF0dXJlVmlld0xpc3RpbmdUYWJsZSA9ICh7XG4gIHRhZ0tleXNTZXQsXG4gIGZlYXR1cmVWaWV3cyxcbn06IEZlYXR1cmVWaWV3TGlzdGluZ1RhYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgY29sdW1uczogZ2VuZXJpY0ZWVHlwZUNvbHVtbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgZmllbGQ6IFwibmFtZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZW5kZXI6IChuYW1lOiBzdHJpbmcsIGl0ZW06IGdlbmVyaWNGVlR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RXVpQ3VzdG9tTGlua1xuICAgICAgICAgICAgaHJlZj17YC9wLyR7cHJvamVjdE5hbWV9L2ZlYXR1cmUtdmlldy8ke25hbWV9YH1cbiAgICAgICAgICAgIHRvPXtgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS12aWV3LyR7bmFtZX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfSB7aXRlbS50eXBlID09PSBcIm9uZGVtYW5kXCIgJiYgPEV1aUJhZGdlPm9uZGVtYW5kPC9FdWlCYWRnZT59XG4gICAgICAgICAgPC9FdWlDdXN0b21MaW5rPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiIyBvZiBGZWF0dXJlc1wiLFxuICAgICAgZmllbGQ6IFwiZmVhdHVyZXNcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVuZGVyOiAoZmVhdHVyZXM6IHVua25vd25bXSkgPT4ge1xuICAgICAgICByZXR1cm4gZmVhdHVyZXMubGVuZ3RoO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgY29tZSB1cCBpbiBzZWFyY2hcbiAgdGFnS2V5c1NldC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgbmFtZToga2V5LFxuICAgICAgcmVuZGVyOiAoaXRlbTogZ2VuZXJpY0ZWVHlwZSkgPT4ge1xuICAgICAgICBsZXQgdGFnID0gPHNwYW4+bi9hPC9zcGFuPjtcblxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcInJlZ3VsYXJcIikge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5vYmplY3Quc3BlYy50YWdzXG4gICAgICAgICAgICA/IGl0ZW0ub2JqZWN0LnNwZWMudGFnc1trZXldXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGFnID0gPHNwYW4+e3ZhbHVlfTwvc3Bhbj47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhZztcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFJvd1Byb3BzID0gKGl0ZW06IGdlbmVyaWNGVlR5cGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkYXRhLXRlc3Qtc3VialwiOiBgcm93LSR7aXRlbS5uYW1lfWAsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlCYXNpY1RhYmxlXG4gICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgaXRlbXM9e2ZlYXR1cmVWaWV3c31cbiAgICAgIHJvd1Byb3BzPXtnZXRSb3dQcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVZpZXdMaXN0aW5nVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlFbXB0eVByb21wdCwgRXVpVGl0bGUsIEV1aUxpbmssIEV1aUJ1dHRvbiB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBGZWFzdEljb25CbHVlIGZyb20gXCIuLi8uLi9ncmFwaGljcy9GZWFzdEljb25CbHVlXCI7XG5cbmNvbnN0IEZlYXR1cmVWaWV3SW5kZXhFbXB0eVN0YXRlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxFdWlFbXB0eVByb21wdFxuICAgICAgaWNvblR5cGU9e0ZlYXN0SWNvbkJsdWV9XG4gICAgICB0aXRsZT17PGgyPlRoZXJlIGFyZSBubyBmZWF0dXJlIHZpZXdzPC9oMj59XG4gICAgICBib2R5PXtcbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyBwcm9qZWN0IGRvZXMgbm90IGhhdmUgYW55IEZlYXR1cmUgVmlld3MuIExlYXJuIG1vcmUgYWJvdXRcbiAgICAgICAgICBjcmVhdGluZyBGZWF0dXJlIFZpZXdzIGluIEZlYXN0IERvY3MuXG4gICAgICAgIDwvcD5cbiAgICAgIH1cbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8RXVpQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9kb2NzLmZlYXN0LmRldi9nZXR0aW5nLXN0YXJ0ZWQvY29uY2VwdHMvZmVhdHVyZS12aWV3XCIsXG4gICAgICAgICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE9wZW4gRmVhdHVyZSBWaWV3IERvY3NcbiAgICAgICAgPC9FdWlCdXR0b24+XG4gICAgICB9XG4gICAgICBmb290ZXI9e1xuICAgICAgICA8PlxuICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHhzXCI+XG4gICAgICAgICAgICA8aDM+V2FudCB0byBsZWFybiBtb3JlPzwvaDM+XG4gICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICA8RXVpTGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLmZlYXN0LmRldi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIFJlYWQgRmVhc3QgZG9jdW1lbnRhdGlvblxuICAgICAgICAgIDwvRXVpTGluaz5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVWaWV3SW5kZXhFbXB0eVN0YXRlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgRXVpUGFnZUhlYWRlcixcbiAgRXVpUGFnZUNvbnRlbnQsXG4gIEV1aVBhZ2VDb250ZW50Qm9keSxcbiAgRXVpTG9hZGluZ1NwaW5uZXIsXG4gIEV1aVNwYWNlcixcbiAgRXVpVGl0bGUsXG4gIEV1aUZpZWxkU2VhcmNoLFxuICBFdWlGbGV4R3JvdXAsXG4gIEV1aUZsZXhJdGVtLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IEZlYXR1cmVWaWV3SWNvbjMyIH0gZnJvbSBcIi4uLy4uL2dyYXBoaWNzL0ZlYXR1cmVWaWV3SWNvblwiO1xuXG5pbXBvcnQgdXNlTG9hZFJlZ2lzdHJ5IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZUxvYWRSZWdpc3RyeVwiO1xuaW1wb3J0IEZlYXR1cmVWaWV3TGlzdGluZ1RhYmxlIGZyb20gXCIuL0ZlYXR1cmVWaWV3TGlzdGluZ1RhYmxlXCI7XG5pbXBvcnQge1xuICBmaWx0ZXJJbnB1dEludGVyZmFjZSxcbiAgdXNlU2VhcmNoUXVlcnksXG4gIHVzZVRhZ3NXaXRoU3VnZ2VzdGlvbnMsXG59IGZyb20gXCIuLi8uLi9ob29rcy91c2VTZWFyY2hJbnB1dFdpdGhUYWdzXCI7XG5pbXBvcnQgeyBnZW5lcmljRlZUeXBlLCByZWd1bGFyRlZJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9tZXJnZWRGVlR5cGVzXCI7XG5pbXBvcnQgeyB1c2VEb2N1bWVudFRpdGxlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZURvY3VtZW50VGl0bGVcIjtcbmltcG9ydCBSZWdpc3RyeVBhdGhDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9SZWdpc3RyeVBhdGhDb250ZXh0XCI7XG5pbXBvcnQgRmVhdHVyZVZpZXdJbmRleEVtcHR5U3RhdGUgZnJvbSBcIi4vRmVhdHVyZVZpZXdJbmRleEVtcHR5U3RhdGVcIjtcbmltcG9ydCB7IHVzZUZlYXR1cmVWaWV3VGFnc0FnZ3JlZ2F0aW9uIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRhZ3NBZ2dyZWdhdGlvblwiO1xuaW1wb3J0IFRhZ1NlYXJjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdTZWFyY2hcIjtcblxuY29uc3QgdXNlTG9hZEZlYXR1cmVWaWV3cyA9ICgpID0+IHtcbiAgY29uc3QgcmVnaXN0cnlVcmwgPSB1c2VDb250ZXh0KFJlZ2lzdHJ5UGF0aENvbnRleHQpO1xuICBjb25zdCByZWdpc3RyeVF1ZXJ5ID0gdXNlTG9hZFJlZ2lzdHJ5KHJlZ2lzdHJ5VXJsKTtcblxuICBjb25zdCBkYXRhID1cbiAgICByZWdpc3RyeVF1ZXJ5LmRhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcmVnaXN0cnlRdWVyeS5kYXRhLm1lcmdlZEZWTGlzdDtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlZ2lzdHJ5UXVlcnksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IHNob3VsZEluY2x1ZGVGVnNHaXZlblRva2VuR3JvdXBzID0gKFxuICBlbnRyeTogcmVndWxhckZWSW50ZXJmYWNlLFxuICB0YWdUb2tlbkdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+XG4pID0+IHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRhZ1Rva2VuR3JvdXBzKS5ldmVyeSgoW2tleSwgdmFsdWVzXSkgPT4ge1xuICAgIGNvbnN0IGVudHJ5VGFnVmFsdWUgPSBlbnRyeS5vYmplY3Quc3BlYy50YWdzXG4gICAgICA/IGVudHJ5Lm9iamVjdC5zcGVjLnRhZ3Nba2V5XVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZW50cnlUYWdWYWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlcy5ldmVyeSgodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDAgPyBlbnRyeVRhZ1ZhbHVlLmluZGV4T2YodmFsdWUpID49IDAgOiB0cnVlOyAvLyBEb24ndCBmaWx0ZXIgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZmlsdGVyRm4gPSAoZGF0YTogZ2VuZXJpY0ZWVHlwZVtdLCBmaWx0ZXJJbnB1dDogZmlsdGVySW5wdXRJbnRlcmZhY2UpID0+IHtcbiAgbGV0IGZpbHRlcmVkQnlUYWdzID0gZGF0YTtcblxuICBpZiAoT2JqZWN0LmtleXMoZmlsdGVySW5wdXQudGFnVG9rZW5Hcm91cHMpLmxlbmd0aCkge1xuICAgIGZpbHRlcmVkQnlUYWdzID0gZGF0YS5maWx0ZXIoKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkudHlwZSA9PT0gXCJyZWd1bGFyXCIpIHtcbiAgICAgICAgcmV0dXJuIHNob3VsZEluY2x1ZGVGVnNHaXZlblRva2VuR3JvdXBzKFxuICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgIGZpbHRlcklucHV0LnRhZ1Rva2VuR3JvdXBzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIE9ERlZzIGRvbid0IGhhdmUgdGFncyB5ZXRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChmaWx0ZXJJbnB1dC5zZWFyY2hUb2tlbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZpbHRlcmVkQnlUYWdzLmZpbHRlcigoZW50cnkpID0+IHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbnB1dC5zZWFyY2hUb2tlbnMuZmluZCgodG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRva2VuLmxlbmd0aCA+PSAzICYmIGVudHJ5Lm5hbWUuaW5kZXhPZih0b2tlbikgPj0gMDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQnlUYWdzO1xufTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGlzRXJyb3IsIGRhdGEgfSA9IHVzZUxvYWRGZWF0dXJlVmlld3MoKTtcbiAgY29uc3QgdGFnQWdncmVnYXRpb25RdWVyeSA9IHVzZUZlYXR1cmVWaWV3VGFnc0FnZ3JlZ2F0aW9uKCk7XG5cbiAgdXNlRG9jdW1lbnRUaXRsZShgRmVhdHVyZSBWaWV3cyB8IEZlYXN0YCk7XG5cbiAgY29uc3QgeyBzZWFyY2hTdHJpbmcsIHNlYXJjaFRva2Vucywgc2V0U2VhcmNoU3RyaW5nIH0gPSB1c2VTZWFyY2hRdWVyeSgpO1xuXG4gIGNvbnN0IHtcbiAgICBjdXJyZW50VGFnLFxuICAgIHRhZ3NTdHJpbmcsXG4gICAgdGFnVG9rZW5Hcm91cHMsXG4gICAgdGFnS2V5c1NldCxcbiAgICB0YWdTdWdnZXN0aW9ucyxcbiAgICBzdWdnZXN0aW9uTW9kZSxcbiAgICBzZXRUYWdzU3RyaW5nLFxuICAgIGFjY2VwdFN1Z2dlc3Rpb24sXG4gICAgc2V0Q3Vyc29yUG9zaXRpb24sXG4gIH0gPSB1c2VUYWdzV2l0aFN1Z2dlc3Rpb25zKHRhZ0FnZ3JlZ2F0aW9uUXVlcnkuZGF0YSk7XG5cbiAgY29uc3QgZmlsdGVyUmVzdWx0ID0gZGF0YVxuICAgID8gZmlsdGVyRm4oZGF0YSwgeyB0YWdUb2tlbkdyb3Vwcywgc2VhcmNoVG9rZW5zIH0pXG4gICAgOiBkYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aVBhZ2VIZWFkZXJcbiAgICAgICAgcmVzdHJpY3RXaWR0aFxuICAgICAgICBpY29uVHlwZT17RmVhdHVyZVZpZXdJY29uMzJ9XG4gICAgICAgIHBhZ2VUaXRsZT1cIkZlYXR1cmUgVmlld3NcIlxuICAgICAgLz5cbiAgICAgIDxFdWlQYWdlQ29udGVudFxuICAgICAgICBoYXNCb3JkZXI9e2ZhbHNlfVxuICAgICAgICBoYXNTaGFkb3c9e2ZhbHNlfVxuICAgICAgICBwYWRkaW5nU2l6ZT1cIm5vbmVcIlxuICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9uZVwiXG4gICAgICA+XG4gICAgICAgIDxFdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEV1aUxvYWRpbmdTcGlubmVyIHNpemU9XCJtXCIgLz4gTG9hZGluZ1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzRXJyb3IgJiYgPHA+V2UgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZy48L3A+fVxuICAgICAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YT8ubGVuZ3RoID09PSAwICYmIDxGZWF0dXJlVmlld0luZGV4RW1wdHlTdGF0ZSAvPn1cbiAgICAgICAgICB7aXNTdWNjZXNzICYmIGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIGZpbHRlclJlc3VsdCAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxFdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICAgICAgPEV1aUZsZXhJdGVtIGdyb3c9ezJ9PlxuICAgICAgICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+U2VhcmNoPC9oMj5cbiAgICAgICAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8RXVpRmllbGRTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFN0cmluZ31cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hTdHJpbmcoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXszfT5cbiAgICAgICAgICAgICAgICAgIDxUYWdTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhZz17Y3VycmVudFRhZ31cbiAgICAgICAgICAgICAgICAgICAgdGFnc1N0cmluZz17dGFnc1N0cmluZ31cbiAgICAgICAgICAgICAgICAgICAgc2V0VGFnc1N0cmluZz17c2V0VGFnc1N0cmluZ31cbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0U3VnZ2VzdGlvbj17YWNjZXB0U3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgdGFnU3VnZ2VzdGlvbnM9e3RhZ1N1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uTW9kZT17c3VnZ2VzdGlvbk1vZGV9XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnNvclBvc2l0aW9uPXtzZXRDdXJzb3JQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cIm1cIiAvPlxuICAgICAgICAgICAgICA8RmVhdHVyZVZpZXdMaXN0aW5nVGFibGVcbiAgICAgICAgICAgICAgICB0YWdLZXlzU2V0PXt0YWdLZXlzU2V0fVxuICAgICAgICAgICAgICAgIGZlYXR1cmVWaWV3cz17ZmlsdGVyUmVzdWx0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuY29uc3QgaGlzdG9ncmFtU2NoZW1hID0gei5hcnJheShcbiAgei5vYmplY3Qoe1xuICAgIHgwOiB6Lm51bWJlcigpLFxuICAgIHgxOiB6Lm51bWJlcigpLFxuICAgIGNvdW50OiB6Lm51bWJlcigpLFxuICB9KVxuKTtcblxuY29uc3QgbnVtZXJpY0NvbHVtblN1bW1hcnlTdGF0aWNzU2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICB2YWx1ZVR5cGU6IHoubGl0ZXJhbChcIklOVDY0XCIpLFxuICBzYW1wbGVWYWx1ZXM6IHouYXJyYXkoei5udW1iZXIoKSksXG4gIGhpc3RvZ3JhbTogaGlzdG9ncmFtU2NoZW1hLm9wdGlvbmFsKCksXG4gIHByb3BvcnRpb25PZlplcm9zOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIHByb3BvcnRpb25NaXNzaW5nOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIG1pbjogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBtYXg6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBzdHJpbmdDb2x1bW5TdW1tYXJ5U3RhdGljc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgdmFsdWVUeXBlOiB6LmxpdGVyYWwoXCJTVFJJTkdcIiksXG4gIHNhbXBsZVZhbHVlczogei5hcnJheSh6LnN0cmluZygpKSxcbn0pO1xuXG5jb25zdCBjb2x1bW5zU3VtbWFyeVN0YXRpc3RpY3NTY2hlbWEgPSB6LnVuaW9uKFtcbiAgbnVtZXJpY0NvbHVtblN1bW1hcnlTdGF0aWNzU2NoZW1hLFxuICBzdHJpbmdDb2x1bW5TdW1tYXJ5U3RhdGljc1NjaGVtYSxcbl0pO1xuXG5jb25zdCBmZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzU2NoZW1hID0gei5vYmplY3Qoe1xuICBjb2x1bW5zU3VtbWFyeVN0YXRpc3RpY3M6IHoucmVjb3JkKGNvbHVtbnNTdW1tYXJ5U3RhdGlzdGljc1NjaGVtYSksXG59KTtcblxudHlwZSBGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzVHlwZSA9IHouaW5mZXI8XG4gIHR5cGVvZiBmZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzU2NoZW1hXG4+O1xuXG50eXBlIE51bWVyaWNDb2x1bW5TdW1tYXJ5U3RhdGlzdGljVHlwZSA9IHouaW5mZXI8XG4gIHR5cGVvZiBudW1lcmljQ29sdW1uU3VtbWFyeVN0YXRpY3NTY2hlbWFcbj47XG50eXBlIFN0cmluZ0NvbHVtblN1bW1hcnlTdGF0aXN0aWNUeXBlID0gei5pbmZlcjxcbiAgdHlwZW9mIHN0cmluZ0NvbHVtblN1bW1hcnlTdGF0aWNzU2NoZW1hXG4+O1xuXG50eXBlIEhpc3RvZ3JhbURhdGFUeXBlID0gei5pbmZlcjx0eXBlb2YgaGlzdG9ncmFtU2NoZW1hPjtcblxuZXhwb3J0IHsgZmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1NjaGVtYSB9O1xuZXhwb3J0IHR5cGUge1xuICBGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzVHlwZSxcbiAgSGlzdG9ncmFtRGF0YVR5cGUsXG4gIE51bWVyaWNDb2x1bW5TdW1tYXJ5U3RhdGlzdGljVHlwZSxcbiAgU3RyaW5nQ29sdW1uU3VtbWFyeVN0YXRpc3RpY1R5cGUsXG59O1xuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBmZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzU2NoZW1hLFxuICBGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzVHlwZSxcbn0gZnJvbSBcIi4uL3BhcnNlcnMvZmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1wiO1xuXG5jb25zdCB1c2VMb2FkRmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljcyA9IChmZWF0dXJlVmlld05hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBxdWVyeUtleSA9IGBmZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzOiR7ZmVhdHVyZVZpZXdOYW1lfWA7XG4gIGNvbnN0IHVybCA9IGAvbWV0YWRhdGEvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZVZpZXcvJHtmZWF0dXJlVmlld05hbWV9Lmpzb25gO1xuXG4gIHJldHVybiB1c2VRdWVyeShcbiAgICBxdWVyeUtleSxcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW48RmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1R5cGU+KChqc29uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGZlYXR1cmVWaWV3U3VtbWFyeVN0YXRpc3RpY3NTY2hlbWEucGFyc2UoanNvbik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtbWFyeTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFsZVRpbWU6IDE1ICogNjAgKiAxMDAwLCAvLyBHaXZlbiB0aGF0IHdlIGFyZSByZWFkaW5nIGZyb20gYSByZWdpc3RyeSBkdW1wLCB0aGlzIHNlZW1zIHJlYXNvbmFibGUgZm9yIG5vdy5cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2FkRmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljcztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dGVudCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPj0gdmFsdWUpIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA+PSB2YWx1ZSkgbWluID0gbWF4ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbbWluLCBtYXhdO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGlzdG9ncmFtRGF0YVR5cGUgfSBmcm9tIFwiLi4vcGFyc2Vycy9mZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzXCI7XG5pbXBvcnQgeyBleHRlbnQgfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7IHNjYWxlTGluZWFyIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBFdWlCYWRnZSwgdXNlRXVpVGhlbWUgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmludGVyZmFjZSBTcGFya2xpbmVIaXN0b2dyYW1Qcm9wcyB7XG4gIGRhdGE6IEhpc3RvZ3JhbURhdGFUeXBlO1xufVxuXG5jb25zdCBTcGFya2xpbmVIaXN0b2dyYW0gPSAoeyBkYXRhIH06IFNwYXJrbGluZUhpc3RvZ3JhbVByb3BzKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gMTAwO1xuICBjb25zdCBoZWlnaHQgPSAyNDtcblxuICBjb25zdCB5TWF4ID0gaGVpZ2h0IC0gMjtcblxuICBjb25zdCB7IGV1aVRoZW1lIH0gPSB1c2VFdWlUaGVtZSgpO1xuXG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB4MEV4dGVudCA9IGV4dGVudChkYXRhLCAoZCkgPT4gZC54MCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKHgwRXh0ZW50KVxuICAgICAgLnJhbmdlKFswLCB3aWR0aCAtIHdpZHRoIC8gZGF0YS5sZW5ndGhdKTtcblxuICAgIGNvbnN0IHlFeHRlbnQgPSBleHRlbnQoZGF0YSwgKGQpID0+IGQuY291bnQpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKS5kb21haW4oeUV4dGVudCkucmFuZ2UoWzAsIHlNYXhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8cmVjdFxuICAgICAgICAgIHg9ezB9XG4gICAgICAgICAgeT17aGVpZ2h0IC0gMX1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXsxfVxuICAgICAgICAgIGZpbGw9e2V1aVRoZW1lLmNvbG9ycy5tZWRpdW1TaGFkZX1cbiAgICAgICAgLz5cbiAgICAgICAge2RhdGEubWFwKChkKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0geVNjYWxlKGQuY291bnQpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIGtleT17ZC54MH1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRoIC8gZGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgIGhlaWdodD17YmFySGVpZ2h0fVxuICAgICAgICAgICAgICB5PXt5TWF4IC0gYmFySGVpZ2h0fVxuICAgICAgICAgICAgICB4PXt4U2NhbGUoZC54MCl9XG4gICAgICAgICAgICAgIGZpbGw9e2V1aVRoZW1lLmNvbG9ycy5wcmltYXJ5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxFdWlCYWRnZSBjb2xvcj1cIndhcm5pbmdcIj5oaXN0b2dyYW0gbi9hPC9FdWlCYWRnZT47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwYXJrbGluZUhpc3RvZ3JhbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEZlYXR1cmVGbGFncyB7XG4gIGVuYWJsZWRGZWF0dXJlU3RhdGlzdGljcz86IGJvb2xlYW47XG59XG5cbmNvbnN0IEZlYXR1cmVGbGFnc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZlYXR1cmVGbGFncz4oe30pO1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlRmxhZ3NDb250ZXh0O1xuZXhwb3J0IHR5cGUgeyBGZWF0dXJlRmxhZ3MgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlLCBFdWlMb2FkaW5nU3Bpbm5lciwgRXVpQmFkZ2UgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgeyBGZWFzdEZlYXR1cmVDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL3BhcnNlcnMvZmVhc3RGZWF0dXJlVmlld3NcIjtcbmltcG9ydCB1c2VMb2FkRmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljcyBmcm9tIFwiLi4vcXVlcmllcy91c2VMb2FkRmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1wiO1xuaW1wb3J0IFNwYXJrbGluZUhpc3RvZ3JhbSBmcm9tIFwiLi9TcGFya2xpbmVIaXN0b2dyYW1cIjtcbmltcG9ydCBGZWF0dXJlRmxhZ3NDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9GZWF0dXJlRmxhZ3NDb250ZXh0XCI7XG5cbmludGVyZmFjZSBGZWF0dXJlc0xpc3RQcm9wcyB7XG4gIGZlYXR1cmVWaWV3TmFtZTogc3RyaW5nO1xuICBmZWF0dXJlczogRmVhc3RGZWF0dXJlQ29sdW1uVHlwZVtdO1xufVxuXG5jb25zdCBGZWF0dXJlc0xpc3QgPSAoeyBmZWF0dXJlVmlld05hbWUsIGZlYXR1cmVzIH06IEZlYXR1cmVzTGlzdFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZW5hYmxlZEZlYXR1cmVTdGF0aXN0aWNzIH0gPSB1c2VDb250ZXh0KEZlYXR1cmVGbGFnc0NvbnRleHQpO1xuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgaXNTdWNjZXNzLCBkYXRhIH0gPVxuICAgIHVzZUxvYWRGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzKGZlYXR1cmVWaWV3TmFtZSk7XG5cbiAgbGV0IGNvbHVtbnM6IHsgbmFtZTogc3RyaW5nOyByZW5kZXI/OiBhbnk7IGZpZWxkOiBhbnkgfVtdID0gW1xuICAgIHsgbmFtZTogXCJOYW1lXCIsIGZpZWxkOiBcIm5hbWVcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVmFsdWUgVHlwZVwiLFxuICAgICAgZmllbGQ6IFwidmFsdWVUeXBlXCIsXG4gICAgfSxcbiAgXTtcblxuICBpZiAoZW5hYmxlZEZlYXR1cmVTdGF0aXN0aWNzKSB7XG4gICAgY29sdW1ucy5wdXNoKFxuICAgICAgLi4uW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJTYW1wbGVcIixcbiAgICAgICAgICBmaWVsZDogXCJcIixcbiAgICAgICAgICByZW5kZXI6IChpdGVtOiBGZWFzdEZlYXR1cmVDb2x1bW5UeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aXN0aWNzID1cbiAgICAgICAgICAgICAgaXNTdWNjZXNzICYmIGRhdGEgJiYgZGF0YS5jb2x1bW5zU3VtbWFyeVN0YXRpc3RpY3NbaXRlbS5uYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPEV1aUxvYWRpbmdTcGlubmVyIHNpemU9XCJzXCIgLz59XG4gICAgICAgICAgICAgICAge2lzRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgPEV1aUJhZGdlIGNvbG9yPVwid2FybmluZ1wiPmVycm9yIGxvYWRpbmcgc2FtcGxlczwvRXVpQmFkZ2U+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7c3RhdGlzdGljcyAmJiBzdGF0aXN0aWNzLnNhbXBsZVZhbHVlcy5qb2luKFwiLFwiKX1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU3BhcmtsaW5lc1wiLFxuICAgICAgICAgIGZpZWxkOiBcIlwiLFxuICAgICAgICAgIHJlbmRlcjogKGl0ZW06IEZlYXN0RmVhdHVyZUNvbHVtblR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPVxuICAgICAgICAgICAgICBpc1N1Y2Nlc3MgJiYgZGF0YSAmJiBkYXRhLmNvbHVtbnNTdW1tYXJ5U3RhdGlzdGljc1tpdGVtLm5hbWVdO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHN0YXRpc3RpY3MgJiZcbiAgICAgICAgICAgICAgc3RhdGlzdGljcy52YWx1ZVR5cGUgPT09IFwiSU5UNjRcIiAmJlxuICAgICAgICAgICAgICBzdGF0aXN0aWNzLmhpc3RvZ3JhbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8U3BhcmtsaW5lSGlzdG9ncmFtIGRhdGE9e3N0YXRpc3RpY3MuaGlzdG9ncmFtfSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGdldFJvd1Byb3BzID0gKGl0ZW06IEZlYXN0RmVhdHVyZUNvbHVtblR5cGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkYXRhLXRlc3Qtc3VialwiOiBgcm93LSR7aXRlbS5uYW1lfWAsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlCYXNpY1RhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGl0ZW1zPXtmZWF0dXJlc30gcm93UHJvcHM9e2dldFJvd1Byb3BzfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXNMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRXVpQ29kZUJsb2NrLFxuICBFdWlEZXNjcmlwdGlvbkxpc3QsXG4gIEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uLFxuICBFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZSxcbiAgRXVpRmxleEdyb3VwLFxuICBFdWlGbGV4SXRlbSxcbiAgRXVpU3BhY2VyLFxuICBFdWlUaXRsZSxcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbnRlcmZhY2UgQmF0Y2hTb3VyY2VQcm9wZXJ0aWVzVmlld1Byb3BzIHtcbiAgYmF0Y2hTb3VyY2U6IHtcbiAgICB0eXBlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIG93bmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGRhdGFTb3VyY2VDbGFzc1R5cGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgZmlsZU9wdGlvbnM/OlxuICAgICAgfCB7XG4gICAgICAgICAgdXJpPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB8IHVuZGVmaW5lZDtcbiAgICBtZXRhPzpcbiAgICAgIHwge1xuICAgICAgICAgIGxhdGVzdEV2ZW50VGltZXN0YW1wPzogRGF0ZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBlYXJsaWVzdEV2ZW50VGltZXN0YW1wPzogRGF0ZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfCB1bmRlZmluZWQ7XG4gICAgYmlncXVlcnlPcHRpb25zPzpcbiAgICAgIHwge1xuICAgICAgICAgIGRidE1vZGVsU2VyaWFsaXplZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfCB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmNvbnN0IEJhdGNoU291cmNlUHJvcGVydGllc1ZpZXcgPSAocHJvcHM6IEJhdGNoU291cmNlUHJvcGVydGllc1ZpZXdQcm9wcykgPT4ge1xuICBjb25zdCBiYXRjaFNvdXJjZSA9IHByb3BzLmJhdGNoU291cmNlO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFdWlGbGV4R3JvdXA+XG4gICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXtmYWxzZX0+XG4gICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgICAgIHsoYmF0Y2hTb3VyY2UuZGF0YVNvdXJjZUNsYXNzVHlwZSB8fCBiYXRjaFNvdXJjZS50eXBlKSAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+U291cmNlIFR5cGU8L0V1aURlc2NyaXB0aW9uTGlzdFRpdGxlPlxuICAgICAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5kYXRhU291cmNlQ2xhc3NUeXBlID8gKFxuICAgICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7YmF0Y2hTb3VyY2UuZGF0YVNvdXJjZUNsYXNzVHlwZS5zcGxpdChcIi5cIikuYXQoLTEpfVxuICAgICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICApIDogYmF0Y2hTb3VyY2UudHlwZSA/IChcbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2JhdGNoU291cmNlLnR5cGV9XG4gICAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5vd25lciAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+T3duZXI8L0V1aURlc2NyaXB0aW9uTGlzdFRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5vd25lcn1cbiAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+RGVzY3JpcHRpb248L0V1aURlc2NyaXB0aW9uTGlzdFRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5maWxlT3B0aW9ucyAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+RmlsZSBVUkw8L0V1aURlc2NyaXB0aW9uTGlzdFRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtiYXRjaFNvdXJjZS5maWxlT3B0aW9ucyA/IGJhdGNoU291cmNlLmZpbGVPcHRpb25zLnVyaSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7YmF0Y2hTb3VyY2UubWV0YT8ubGF0ZXN0RXZlbnRUaW1lc3RhbXAgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdFRpdGxlPkxhdGVzdCBFdmVudDwvRXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAge2JhdGNoU291cmNlLm1ldGEubGF0ZXN0RXZlbnRUaW1lc3RhbXAudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICBcImVuLUNBXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7YmF0Y2hTb3VyY2UubWV0YT8uZWFybGllc3RFdmVudFRpbWVzdGFtcCAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+XG4gICAgICAgICAgICAgICAgICBFYXJsaWVzdCBFdmVudFxuICAgICAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAge2JhdGNoU291cmNlLm1ldGEuZWFybGllc3RFdmVudFRpbWVzdGFtcC50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgIFwiZW4tQ0FcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgPC9FdWlGbGV4SXRlbT5cblxuICAgICAgICB7YmF0Y2hTb3VyY2UuYmlncXVlcnlPcHRpb25zPy5kYnRNb2RlbFNlcmlhbGl6ZWQgJiYgKFxuICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXtmYWxzZX0+XG4gICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJsXCIgLz5cbiAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICApfVxuICAgICAgICB7YmF0Y2hTb3VyY2UuYmlncXVlcnlPcHRpb25zPy5kYnRNb2RlbFNlcmlhbGl6ZWQgJiYgKFxuICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgPGgzPkRidCBUcmFuc2Zvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgPEV1aUNvZGVCbG9ja1xuICAgICAgICAgICAgICBsYW5ndWFnZT1cInNxbFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwibVwiXG4gICAgICAgICAgICAgIHBhZGRpbmdTaXplPVwibVwiXG4gICAgICAgICAgICAgIGlzQ29weWFibGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2JhdGNoU291cmNlLmJpZ3F1ZXJ5T3B0aW9ucy5kYnRNb2RlbFNlcmlhbGl6ZWR9XG4gICAgICAgICAgICA8L0V1aUNvZGVCbG9jaz5cbiAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICApfVxuICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhdGNoU291cmNlUHJvcGVydGllc1ZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IEV1aUN1c3RvbUxpbmsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXVpQ3VzdG9tTGlua1wiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW50ZXJmYWNlIENvbnN1bWluZ0ZlYXR1cmVTZXJ2aWNlc0xpc3RJbnRlcmFjZSB7XG4gIGZzTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBDb25zdW1pbmdGZWF0dXJlU2VydmljZXNMaXN0ID0gKHtcbiAgZnNOYW1lcyxcbn06IENvbnN1bWluZ0ZlYXR1cmVTZXJ2aWNlc0xpc3RJbnRlcmFjZSkgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgZmllbGQ6IFwiXCIsXG4gICAgICByZW5kZXI6IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RXVpQ3VzdG9tTGlua1xuICAgICAgICAgICAgaHJlZj17YC9wLyR7cHJvamVjdE5hbWV9L2ZlYXR1cmUtc2VydmljZS8ke25hbWV9YH1cbiAgICAgICAgICAgIHRvPXtgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS1zZXJ2aWNlLyR7bmFtZX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvRXVpQ3VzdG9tTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBnZXRSb3dQcm9wcyA9IChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkYXRhLXRlc3Qtc3VialwiOiBgcm93LSR7aXRlbX1gLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RXVpQmFzaWNUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBpdGVtcz17ZnNOYW1lc30gcm93UHJvcHM9e2dldFJvd1Byb3BzfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3VtaW5nRmVhdHVyZVNlcnZpY2VzTGlzdDtcbiIsImltcG9ydCB7XG4gIEV1aUJhZGdlLFxuICBFdWlGbGV4R3JvdXAsXG4gIEV1aUZsZXhJdGVtLFxuICBFdWlIb3Jpem9udGFsUnVsZSxcbiAgRXVpUGFuZWwsXG4gIEV1aVNwYWNlcixcbiAgRXVpU3RhdCxcbiAgRXVpVGV4dCxcbiAgRXVpVGl0bGUsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRmVhdHVyZXNMaXN0RGlzcGxheSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GZWF0dXJlc0xpc3REaXNwbGF5XCI7XG5pbXBvcnQgVGFnc0Rpc3BsYXkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFnc0Rpc3BsYXlcIjtcbmltcG9ydCB7IGVuY29kZVNlYXJjaFF1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4uLy4uL2hvb2tzL2VuY29kZVNlYXJjaFF1ZXJ5U3RyaW5nXCI7XG5pbXBvcnQgeyBGZWFzdEZlYXR1cmVWaWV3VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL2ZlYXN0RmVhdHVyZVZpZXdzXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWxhdGlvbiB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL3BhcnNlRW50aXR5UmVsYXRpb25zaGlwc1wiO1xuaW1wb3J0IHsgRkVBU1RfRkNPX1RZUEVTIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvdHlwZXNcIjtcbmltcG9ydCB1c2VMb2FkUmVsYXRpb25zaGlwRGF0YSBmcm9tIFwiLi4vLi4vcXVlcmllcy91c2VMb2FkUmVsYXRpb25zaGlwc0RhdGFcIjtcbmltcG9ydCBCYXRjaFNvdXJjZVByb3BlcnRpZXNWaWV3IGZyb20gXCIuLi9kYXRhLXNvdXJjZXMvQmF0Y2hTb3VyY2VQcm9wZXJ0aWVzVmlld1wiO1xuaW1wb3J0IENvbnN1bWluZ0ZlYXR1cmVTZXJ2aWNlc0xpc3QgZnJvbSBcIi4vQ29uc3VtaW5nRmVhdHVyZVNlcnZpY2VzTGlzdFwiO1xuXG5jb25zdCB3aGVyZUZTY29uc3VtZXNUaGlzRnYgPSAoZnZOYW1lOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIChyOiBFbnRpdHlSZWxhdGlvbikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICByLnNvdXJjZS5uYW1lID09PSBmdk5hbWUgJiZcbiAgICAgIHIudGFyZ2V0LnR5cGUgPT09IEZFQVNUX0ZDT19UWVBFUy5mZWF0dXJlU2VydmljZVxuICAgICk7XG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUmVndWxhckZlYXR1cmVWaWV3T3ZlcnZpZXdUYWJQcm9wcyB7XG4gIGRhdGE6IEZlYXN0RmVhdHVyZVZpZXdUeXBlO1xufVxuXG5jb25zdCBSZWd1bGFyRmVhdHVyZVZpZXdPdmVydmlld1RhYiA9ICh7XG4gIGRhdGEsXG59OiBSZWd1bGFyRmVhdHVyZVZpZXdPdmVydmlld1RhYlByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgeyBmZWF0dXJlVmlld05hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IGZ2TmFtZSA9IGZlYXR1cmVWaWV3TmFtZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGZlYXR1cmVWaWV3TmFtZTtcblxuICBjb25zdCByZWxhdGlvbnNoaXBRdWVyeSA9IHVzZUxvYWRSZWxhdGlvbnNoaXBEYXRhKCk7XG5cbiAgY29uc3QgZnNOYW1lcyA9IHJlbGF0aW9uc2hpcFF1ZXJ5LmRhdGFcbiAgICA/IHJlbGF0aW9uc2hpcFF1ZXJ5LmRhdGEuZmlsdGVyKHdoZXJlRlNjb25zdW1lc1RoaXNGdihmdk5hbWUpKS5tYXAoKGZzKSA9PiB7XG4gICAgICAgIHJldHVybiBmcy50YXJnZXQubmFtZTtcbiAgICAgIH0pXG4gICAgOiBbXTtcbiAgY29uc3QgbnVtT2ZGcyA9IGZzTmFtZXMubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aUZsZXhHcm91cD5cbiAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgIDxFdWlTdGF0IHRpdGxlPXtgJHtudW1PZkZzfWB9IGRlc2NyaXB0aW9uPVwiQ29uc3VtaW5nIFNlcnZpY2VzXCIgLz5cbiAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgIDwvRXVpRmxleEdyb3VwPlxuICAgICAgPEV1aVNwYWNlciBzaXplPVwibFwiIC8+XG4gICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICA8RXVpRmxleEl0ZW0+XG4gICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgIDxoMz5GZWF0dXJlcyAoe2RhdGEuc3BlYy5mZWF0dXJlcy5sZW5ndGh9KTwvaDM+XG4gICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgIHtkYXRhLnNwZWMuZmVhdHVyZXMgPyAoXG4gICAgICAgICAgICAgIDxGZWF0dXJlc0xpc3REaXNwbGF5XG4gICAgICAgICAgICAgICAgZmVhdHVyZVZpZXdOYW1lPXtkYXRhLnNwZWMubmFtZX1cbiAgICAgICAgICAgICAgICBmZWF0dXJlcz17ZGF0YS5zcGVjLmZlYXR1cmVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEV1aVRleHQ+Tm8gZmVhdHVyZXMgc3BlY2lmaWVkIG9uIHRoaXMgZmVhdHVyZSB2aWV3LjwvRXVpVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9FdWlQYW5lbD5cbiAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGdyb3c9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgPGgzPkVudGl0aWVzPC9oMz5cbiAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAgICAgICAge2RhdGEuc3BlYy5lbnRpdGllcyA/IChcbiAgICAgICAgICAgICAgPEV1aUZsZXhHcm91cCB3cmFwIHJlc3BvbnNpdmU9e2ZhbHNlfSBndXR0ZXJTaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5zcGVjLmVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RXVpRmxleEl0ZW0gZ3Jvdz17ZmFsc2V9IGtleT17ZW50aXR5fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RXVpQmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAvcC8ke3Byb2plY3ROYW1lfS9lbnRpdHkvJHtlbnRpdHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0FyaWFMYWJlbD17ZW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0LXN1Yj1cInRlc3RFeGFtcGxlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0V1aUJhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8RXVpVGV4dD5ObyBFbnRpdGllcy48L0V1aVRleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgICAgPEV1aVNwYWNlciBzaXplPVwibVwiIC8+XG4gICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgIDxoMz5Db25zdW1pbmcgRmVhdHVyZSBTZXJ2aWNlczwvaDM+XG4gICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgIHtmc05hbWVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIDxDb25zdW1pbmdGZWF0dXJlU2VydmljZXNMaXN0IGZzTmFtZXM9e2ZzTmFtZXN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8RXVpVGV4dD5ObyBzZXJ2aWNlcyBjb25zdW1lIHRoaXMgZmVhdHVyZSB2aWV3PC9FdWlUZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cIm1cIiAvPlxuICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGdyb3c9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgPGgzPlRhZ3M8L2gzPlxuICAgICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICB7ZGF0YS5zcGVjLnRhZ3MgPyAoXG4gICAgICAgICAgICAgIDxUYWdzRGlzcGxheVxuICAgICAgICAgICAgICAgIHRhZ3M9e2RhdGEuc3BlYy50YWdzfVxuICAgICAgICAgICAgICAgIGNyZWF0ZUxpbms9eyhrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS12aWV3P2AgK1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVTZWFyY2hRdWVyeVN0cmluZyhgJHtrZXl9OiR7dmFsdWV9YClcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvd25lcj17ZGF0YS5zcGVjLm93bmVyfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLnNwZWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8RXVpVGV4dD5ObyBUYWdzIHNwZWNpZmllZCBvbiB0aGlzIGZlYXR1cmUgdmlldy48L0V1aVRleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICA8L0V1aUZsZXhHcm91cD5cbiAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cImxcIiAvPlxuICAgICAgPEV1aUZsZXhHcm91cD5cbiAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9PlxuICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICA8aDM+QmF0Y2ggU291cmNlPC9oMz5cbiAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAgICAgICAgPEJhdGNoU291cmNlUHJvcGVydGllc1ZpZXcgYmF0Y2hTb3VyY2U9e2RhdGEuc3BlYy5iYXRjaFNvdXJjZX0gLz5cbiAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICA8RXVpU3BhY2VyIHNpemU9XCJsXCIgLz5cbiAgICAgIDxFdWlQYW5lbD5cbiAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgIDxoMz5NYXRlcmlhbGl6YXRpb24gSW50ZXJ2YWxzPC9oMz5cbiAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtkYXRhLm1ldGEubWF0ZXJpYWxpemF0aW9uSW50ZXJ2YWxzPy5tYXAoKGludGVydmFsLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIHtpbnRlcnZhbC5zdGFydFRpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tQ0FcIil9IHRve1wiIFwifVxuICAgICAgICAgICAgICAgIHtpbnRlcnZhbC5lbmRUaW1lLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgPC9FdWlQYW5lbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVndWxhckZlYXR1cmVWaWV3T3ZlcnZpZXdUYWI7XG4iLCJpbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTnVtZXJpY0NvbHVtblN1bW1hcnlTdGF0aXN0aWNUeXBlIH0gZnJvbSBcIi4uL3BhcnNlcnMvZmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1wiO1xuaW1wb3J0IFNwYXJrbGluZUhpc3RvZ3JhbSBmcm9tIFwiLi9TcGFya2xpbmVIaXN0b2dyYW1cIjtcblxuaW50ZXJmYWNlIE51bWVyaWNGZWF0dXJlc1RhYmxlUHJvcHMge1xuICBkYXRhOiBOdW1lcmljQ29sdW1uU3VtbWFyeVN0YXRpc3RpY1R5cGVbXTtcbn1cblxuY29uc3QgTnVtZXJpY0ZlYXR1cmVzVGFibGUgPSAoeyBkYXRhIH06IE51bWVyaWNGZWF0dXJlc1RhYmxlUHJvcHMpID0+IHtcbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7IG5hbWU6IFwiTmFtZVwiLCBmaWVsZDogXCJuYW1lXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlZhbHVlIFR5cGVcIixcbiAgICAgIGZpZWxkOiBcInZhbHVlVHlwZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTYW1wbGVcIixcbiAgICAgIHJlbmRlcjogKHN0YXRpc3RpY3M6IE51bWVyaWNDb2x1bW5TdW1tYXJ5U3RhdGlzdGljVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtzdGF0aXN0aWNzICYmIHN0YXRpc3RpY3Muc2FtcGxlVmFsdWVzLmpvaW4oXCIsXCIpfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNaW4vTWF4XCIsXG4gICAgICByZW5kZXI6IChzdGF0aXN0aWNzOiBOdW1lcmljQ29sdW1uU3VtbWFyeVN0YXRpc3RpY1R5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0YXRpc3RpY3MubWluICE9PSB1bmRlZmluZWQgJiYgc3RhdGlzdGljcy5tYXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gYCR7c3RhdGlzdGljcy5taW59LyR7c3RhdGlzdGljcy5tYXh9YFxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHsgbmFtZTogXCJ6ZXJvc1wiLCBmaWVsZDogXCJwcm9wb3J0aW9uT2ZaZXJvc1wiIH0sXG4gICAgeyBuYW1lOiBcIm1pc3NpbmdcIiwgZmllbGQ6IFwicHJvcG9ydGlvbk1pc3NpbmdcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3BhcmtsaW5lc1wiLFxuICAgICAgcmVuZGVyOiAoc3RhdGlzdGljczogTnVtZXJpY0NvbHVtblN1bW1hcnlTdGF0aXN0aWNUeXBlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0aXN0aWNzICYmIHN0YXRpc3RpY3MuaGlzdG9ncmFtKSB7XG4gICAgICAgICAgcmV0dXJuIDxTcGFya2xpbmVIaXN0b2dyYW0gZGF0YT17c3RhdGlzdGljcy5oaXN0b2dyYW19IC8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZ2V0Um93UHJvcHMgPSAoaXRlbTogTnVtZXJpY0NvbHVtblN1bW1hcnlTdGF0aXN0aWNUeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGF0YS10ZXN0LXN1YmpcIjogYHJvdy0ke2l0ZW0ubmFtZX1gLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RXVpQmFzaWNUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBpdGVtcz17ZGF0YX0gcm93UHJvcHM9e2dldFJvd1Byb3BzfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtZXJpY0ZlYXR1cmVzVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEV1aUVtcHR5UHJvbXB0LCBFdWlMb2FkaW5nQ29udGVudCwgRXVpVGl0bGUgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHVzZUxvYWRGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzIGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZUxvYWRGZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzXCI7XG5pbXBvcnQge1xuICBOdW1lcmljQ29sdW1uU3VtbWFyeVN0YXRpc3RpY1R5cGUsXG4gIFN0cmluZ0NvbHVtblN1bW1hcnlTdGF0aXN0aWNUeXBlLFxufSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9mZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzXCI7XG5pbXBvcnQgTnVtZXJpY0ZlYXR1cmVzVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTnVtZXJpY0ZlYXR1cmVzVGFibGVcIjtcblxuaW50ZXJmYWNlIENvbHVtbnNCeUdyb3VwIHtcbiAgSU5UNjQ/OiBOdW1lcmljQ29sdW1uU3VtbWFyeVN0YXRpc3RpY1R5cGVbXTtcbiAgU1RSSU5HPzogU3RyaW5nQ29sdW1uU3VtbWFyeVN0YXRpc3RpY1R5cGVbXTtcbn1cblxuY29uc3QgRmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1RhYiA9ICgpID0+IHtcbiAgbGV0IHsgZmVhdHVyZVZpZXdOYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBpZiAoIWZlYXR1cmVWaWV3TmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgRmVhdHVyZSBWaWV3IE5hbWVcIik7XG4gIH1cblxuICBjb25zdCB7IGlzRXJyb3IsIGRhdGEgfSA9XG4gICAgdXNlTG9hZEZlYXR1cmVWaWV3U3VtbWFyeVN0YXRpc3RpY3MoZmVhdHVyZVZpZXdOYW1lKTtcblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RXVpRW1wdHlQcm9tcHRcbiAgICAgICAgaWNvblR5cGU9XCJhbGVydFwiXG4gICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgdGl0bGU9ezxoMj5FcnJvciBsb2FkaW5nIFN0YXRpc3RpY3M8L2gyPn1cbiAgICAgICAgYm9keT17XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyBzdGF0aXN0aWNzIGZvcntcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e2ZlYXR1cmVWaWV3TmFtZX08L3N0cm9uZz4uIFBsZWFzZSBjaGVjayB0aGF0IHN0YXRpc3RpY3NcbiAgICAgICAgICAgIGhhdmUgYmVlbiBnZW5lcmF0ZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnN0IGNvbHVtbnNCeUdyb3VwID0gT2JqZWN0LmVudHJpZXMoXG4gICAgICBkYXRhLmNvbHVtbnNTdW1tYXJ5U3RhdGlzdGljc1xuICAgICkucmVkdWNlPENvbHVtbnNCeUdyb3VwPigobWVtbywgW2tleSwgY29sdW1uU3RhdGlzdGljc10pID0+IHtcbiAgICAgIGlmIChjb2x1bW5TdGF0aXN0aWNzLnZhbHVlVHlwZSA9PT0gXCJJTlQ2NFwiKSB7XG4gICAgICAgIGlmICghbWVtb1tcIklOVDY0XCJdKSB7XG4gICAgICAgICAgbWVtb1tjb2x1bW5TdGF0aXN0aWNzLnZhbHVlVHlwZV0gPSBbY29sdW1uU3RhdGlzdGljc107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVtb1tcIklOVDY0XCJdLnB1c2goY29sdW1uU3RhdGlzdGljcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtblN0YXRpc3RpY3MudmFsdWVUeXBlID09PSBcIlNUUklOR1wiKSB7XG4gICAgICAgIGlmICghbWVtb1tcIlNUUklOR1wiXSkge1xuICAgICAgICAgIG1lbW9bY29sdW1uU3RhdGlzdGljcy52YWx1ZVR5cGVdID0gW2NvbHVtblN0YXRpc3RpY3NdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbW9bXCJTVFJJTkdcIl0ucHVzaChjb2x1bW5TdGF0aXN0aWNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7Y29sdW1uc0J5R3JvdXBbXCJJTlQ2NFwiXSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgPGgzPk51bWVyaWMgQ29sdW1uczwvaDM+XG4gICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgPE51bWVyaWNGZWF0dXJlc1RhYmxlIGRhdGE9e2NvbHVtbnNCeUdyb3VwW1wiSU5UNjRcIl19IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPEV1aUxvYWRpbmdDb250ZW50IGxpbmVzPXs0fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVWaWV3U3VtbWFyeVN0YXRpc3RpY3NUYWI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtcbiAgRXVpUGFnZUhlYWRlcixcbiAgRXVpUGFnZUNvbnRlbnQsXG4gIEV1aVBhZ2VDb250ZW50Qm9keSxcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlVmlld0ljb24zMiB9IGZyb20gXCIuLi8uLi9ncmFwaGljcy9GZWF0dXJlVmlld0ljb25cIjtcblxuaW1wb3J0IHsgdXNlTWF0Y2hFeGFjdCwgdXNlTWF0Y2hTdWJwYXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZU1hdGNoU3VicGF0aFwiO1xuaW1wb3J0IHsgRmVhc3RGZWF0dXJlVmlld1R5cGUgfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9mZWFzdEZlYXR1cmVWaWV3c1wiO1xuaW1wb3J0IFJlZ3VsYXJGZWF0dXJlVmlld092ZXJ2aWV3VGFiIGZyb20gXCIuL1JlZ3VsYXJGZWF0dXJlVmlld092ZXJ2aWV3VGFiXCI7XG5pbXBvcnQgRmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1RhYiBmcm9tIFwiLi9GZWF0dXJlVmlld1N1bW1hcnlTdGF0aXN0aWNzVGFiXCI7XG5cbmltcG9ydCB7XG4gIHVzZVJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYnMsXG4gIHVzZVJlZ3VsYXJGZWF0dXJlVmlld0N1c3RvbVRhYlJvdXRlcyxcbn0gZnJvbSBcIi4uLy4uL2N1c3RvbS10YWJzL1RhYnNSZWdpc3RyeUNvbnRleHRcIjtcbmltcG9ydCBGZWF0dXJlRmxhZ3NDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9GZWF0dXJlRmxhZ3NDb250ZXh0XCI7XG5cbmludGVyZmFjZSBSZWd1bGFyRmVhdHVyZUluc3RhbmNlUHJvcHMge1xuICBkYXRhOiBGZWFzdEZlYXR1cmVWaWV3VHlwZTtcbn1cblxuY29uc3QgUmVndWxhckZlYXR1cmVJbnN0YW5jZSA9ICh7IGRhdGEgfTogUmVndWxhckZlYXR1cmVJbnN0YW5jZVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZW5hYmxlZEZlYXR1cmVTdGF0aXN0aWNzIH0gPSB1c2VDb250ZXh0KEZlYXR1cmVGbGFnc0NvbnRleHQpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgeyBjdXN0b21OYXZpZ2F0aW9uVGFicyB9ID0gdXNlUmVndWxhckZlYXR1cmVWaWV3Q3VzdG9tVGFicyhuYXZpZ2F0ZSk7XG4gIGxldCB0YWJzID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIk92ZXJ2aWV3XCIsXG4gICAgICBpc1NlbGVjdGVkOiB1c2VNYXRjaEV4YWN0KFwiXCIpLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZShcIlwiKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBsZXQgc3RhdGlzdGljc0lzU2VsZWN0ZWQgPSB1c2VNYXRjaFN1YnBhdGgoXCJzdGF0aXN0aWNzXCIpO1xuICBpZiAoZW5hYmxlZEZlYXR1cmVTdGF0aXN0aWNzKSB7XG4gICAgdGFicy5wdXNoKHtcbiAgICAgIGxhYmVsOiBcIlN0YXRpc3RpY3NcIixcbiAgICAgIGlzU2VsZWN0ZWQ6IHN0YXRpc3RpY3NJc1NlbGVjdGVkLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZShcInN0YXRpc3RpY3NcIik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgdGFicy5wdXNoKC4uLmN1c3RvbU5hdmlnYXRpb25UYWJzKTtcblxuICBjb25zdCBUYWJSb3V0ZXMgPSB1c2VSZWd1bGFyRmVhdHVyZVZpZXdDdXN0b21UYWJSb3V0ZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFdWlQYWdlSGVhZGVyXG4gICAgICAgIHJlc3RyaWN0V2lkdGhcbiAgICAgICAgaWNvblR5cGU9e0ZlYXR1cmVWaWV3SWNvbjMyfVxuICAgICAgICBwYWdlVGl0bGU9e2Ake2RhdGEuc3BlYy5uYW1lfWB9XG4gICAgICAgIHRhYnM9e3RhYnN9XG4gICAgICAvPlxuICAgICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICAgIGhhc0JvcmRlcj17ZmFsc2V9XG4gICAgICAgIGhhc1NoYWRvdz17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAgPEV1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIHBhdGg9XCIvXCJcbiAgICAgICAgICAgICAgZWxlbWVudD17PFJlZ3VsYXJGZWF0dXJlVmlld092ZXJ2aWV3VGFiIGRhdGE9e2RhdGF9IC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBwYXRoPVwiL3N0YXRpc3RpY3NcIlxuICAgICAgICAgICAgICBlbGVtZW50PXs8RmVhdHVyZVZpZXdTdW1tYXJ5U3RhdGlzdGljc1RhYiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7VGFiUm91dGVzfVxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ3VsYXJGZWF0dXJlSW5zdGFuY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlLCBFdWlQYW5lbCwgRXVpVGV4dCwgRXVpVGl0bGUgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IEZlYXR1cmVWaWV3UHJvamVjdGlvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vcGFyc2Vycy9mZWFzdE9ERlZTXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEV1aUN1c3RvbUxpbmsgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRXVpQ3VzdG9tTGlua1wiO1xuXG5pbnRlcmZhY2UgUmVxdWVzdERhdGFEaXNwbGF5UGFuZWxQcm9wcyBleHRlbmRzIEZlYXR1cmVWaWV3UHJvamVjdGlvblR5cGUge31cblxuY29uc3QgRmVhdHVyZVZpZXdQcm9qZWN0aW9uRGlzcGxheVBhbmVsID0gKHtcbiAgZmVhdHVyZVZpZXdQcm9qZWN0aW9uLFxufTogUmVxdWVzdERhdGFEaXNwbGF5UGFuZWxQcm9wcykgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29sdW1uIE5hbWVcIixcbiAgICAgIGZpZWxkOiBcIm5hbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVHlwZVwiLFxuICAgICAgZmllbGQ6IFwidmFsdWVUeXBlXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9PlxuICAgICAgPEV1aVRleHQgc2l6ZT1cInhzXCI+XG4gICAgICAgIDxzcGFuPkZlYXR1cmUgVmlldzwvc3Bhbj5cbiAgICAgIDwvRXVpVGV4dD5cbiAgICAgIDxFdWlUaXRsZSBzaXplPVwic1wiPlxuICAgICAgICA8RXVpQ3VzdG9tTGlua1xuICAgICAgICAgIGhyZWY9e2AvcC8ke3Byb2plY3ROYW1lfS9mZWF0dXJlLXZpZXcvJHtmZWF0dXJlVmlld1Byb2plY3Rpb24uZmVhdHVyZVZpZXdOYW1lfWB9XG4gICAgICAgICAgdG89e2AvcC8ke3Byb2plY3ROYW1lfS9mZWF0dXJlLXZpZXcvJHtmZWF0dXJlVmlld1Byb2plY3Rpb24uZmVhdHVyZVZpZXdOYW1lfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmVhdHVyZVZpZXdQcm9qZWN0aW9uLmZlYXR1cmVWaWV3TmFtZX1cbiAgICAgICAgPC9FdWlDdXN0b21MaW5rPlxuICAgICAgPC9FdWlUaXRsZT5cbiAgICAgIDxFdWlCYXNpY1RhYmxlXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGl0ZW1zPXtmZWF0dXJlVmlld1Byb2plY3Rpb24uZmVhdHVyZUNvbHVtbnN9XG4gICAgICAvPlxuICAgIDwvRXVpUGFuZWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlVmlld1Byb2plY3Rpb25EaXNwbGF5UGFuZWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlLCBFdWlQYW5lbCwgRXVpVGV4dCwgRXVpVGl0bGUgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUmVxdWVzdERhdGFTb3VyY2VUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3BhcnNlcnMvZmVhc3RPREZWU1wiO1xuaW1wb3J0IEV1aUN1c3RvbUxpbmsgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRXVpQ3VzdG9tTGlua1wiO1xuXG5pbnRlcmZhY2UgUmVxdWVzdERhdGFEaXNwbGF5UGFuZWxQcm9wcyBleHRlbmRzIFJlcXVlc3REYXRhU291cmNlVHlwZSB7fVxuXG5jb25zdCBSZXF1ZXN0RGF0YURpc3BsYXlQYW5lbCA9ICh7XG4gIHJlcXVlc3REYXRhU291cmNlLFxufTogUmVxdWVzdERhdGFEaXNwbGF5UGFuZWxQcm9wcykgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKHJlcXVlc3REYXRhU291cmNlLnJlcXVlc3REYXRhT3B0aW9ucy5zY2hlbWEpLm1hcChcbiAgICAoW2tleSwgdHlwZV0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJLZXlcIixcbiAgICAgIGZpZWxkOiBcImtleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUeXBlXCIsXG4gICAgICBmaWVsZDogXCJ0eXBlXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9PlxuICAgICAgPEV1aVRleHQgc2l6ZT1cInhzXCI+XG4gICAgICAgIDxzcGFuPlJlcXVlc3QgRGF0YTwvc3Bhbj5cbiAgICAgIDwvRXVpVGV4dD5cbiAgICAgIDxFdWlUaXRsZSBzaXplPVwic1wiPlxuICAgICAgICA8RXVpQ3VzdG9tTGlua1xuICAgICAgICAgIGhyZWY9e2AvcC8ke3Byb2plY3ROYW1lfS9kYXRhLXNvdXJjZS8ke3JlcXVlc3REYXRhU291cmNlLm5hbWV9YH1cbiAgICAgICAgICB0bz17YC9wLyR7cHJvamVjdE5hbWV9L2RhdGEtc291cmNlLyR7cmVxdWVzdERhdGFTb3VyY2UubmFtZX1gfVxuICAgICAgICA+XG4gICAgICAgICAge3JlcXVlc3REYXRhU291cmNlLm5hbWV9XG4gICAgICAgIDwvRXVpQ3VzdG9tTGluaz5cbiAgICAgIDwvRXVpVGl0bGU+XG4gICAgICA8RXVpQmFzaWNUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBpdGVtcz17aXRlbXN9IC8+XG4gICAgPC9FdWlQYW5lbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3REYXRhRGlzcGxheVBhbmVsO1xuIiwiaW1wb3J0IHtcbiAgRXVpRmxleEdyb3VwLFxuICBFdWlGbGV4SXRlbSxcbiAgRXVpSG9yaXpvbnRhbFJ1bGUsXG4gIEV1aVRleHQsXG4gIEV1aVRpdGxlLFxuICBFdWlQYW5lbCxcbiAgRXVpQ29kZUJsb2NrLFxuICBFdWlTcGFjZXIsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlc0xpc3REaXNwbGF5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZlYXR1cmVzTGlzdERpc3BsYXlcIjtcbmltcG9ydCB7XG4gIEZlYXN0T0RGVlR5cGUsXG4gIFJlcXVlc3REYXRhU291cmNlVHlwZSxcbiAgRmVhdHVyZVZpZXdQcm9qZWN0aW9uVHlwZSxcbn0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvZmVhc3RPREZWU1wiO1xuaW1wb3J0IHsgRW50aXR5UmVsYXRpb24gfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9wYXJzZUVudGl0eVJlbGF0aW9uc2hpcHNcIjtcbmltcG9ydCB7IEZFQVNUX0ZDT19UWVBFUyB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL3R5cGVzXCI7XG5pbXBvcnQgdXNlTG9hZFJlbGF0aW9uc2hpcERhdGEgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlTG9hZFJlbGF0aW9uc2hpcHNEYXRhXCI7XG5pbXBvcnQgRmVhdHVyZVZpZXdQcm9qZWN0aW9uRGlzcGxheVBhbmVsIGZyb20gXCIuL2NvbXBvbmVudHMvRmVhdHVyZVZpZXdQcm9qZWN0aW9uRGlzcGxheVBhbmVsXCI7XG5pbXBvcnQgUmVxdWVzdERhdGFEaXNwbGF5UGFuZWwgZnJvbSBcIi4vY29tcG9uZW50cy9SZXF1ZXN0RGF0YURpc3BsYXlQYW5lbFwiO1xuaW1wb3J0IENvbnN1bWluZ0ZlYXR1cmVTZXJ2aWNlc0xpc3QgZnJvbSBcIi4vQ29uc3VtaW5nRmVhdHVyZVNlcnZpY2VzTGlzdFwiO1xuXG5pbnRlcmZhY2UgT25EZW1hbmRGZWF0dXJlVmlld092ZXJ2aWV3VGFiUHJvcHMge1xuICBkYXRhOiBGZWFzdE9ERlZUeXBlO1xufVxuXG5jb25zdCB3aGVyZUZTY29uc3VtZXNUaGlzRnYgPSAoZnZOYW1lOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIChyOiBFbnRpdHlSZWxhdGlvbikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICByLnNvdXJjZS5uYW1lID09PSBmdk5hbWUgJiZcbiAgICAgIHIudGFyZ2V0LnR5cGUgPT09IEZFQVNUX0ZDT19UWVBFUy5mZWF0dXJlU2VydmljZVxuICAgICk7XG4gIH07XG59O1xuXG5jb25zdCBPbkRlbWFuZEZlYXR1cmVWaWV3T3ZlcnZpZXdUYWIgPSAoe1xuICBkYXRhLFxufTogT25EZW1hbmRGZWF0dXJlVmlld092ZXJ2aWV3VGFiUHJvcHMpID0+IHtcbiAgY29uc3QgaW5wdXRzID0gT2JqZWN0LmVudHJpZXMoZGF0YS5zcGVjLnNvdXJjZXMpO1xuXG4gIGNvbnN0IHJlbGF0aW9uc2hpcFF1ZXJ5ID0gdXNlTG9hZFJlbGF0aW9uc2hpcERhdGEoKTtcbiAgY29uc3QgZnNOYW1lcyA9IHJlbGF0aW9uc2hpcFF1ZXJ5LmRhdGFcbiAgICA/IHJlbGF0aW9uc2hpcFF1ZXJ5LmRhdGFcbiAgICAgICAgLmZpbHRlcih3aGVyZUZTY29uc3VtZXNUaGlzRnYoZGF0YS5zcGVjLm5hbWUpKVxuICAgICAgICAubWFwKChmcykgPT4ge1xuICAgICAgICAgIHJldHVybiBmcy50YXJnZXQubmFtZTtcbiAgICAgICAgfSlcbiAgICA6IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aUZsZXhHcm91cD5cbiAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9PlxuICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJzXCI+XG4gICAgICAgICAgICAgIDxoMz5UcmFuc2Zvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgIDxFdWlDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJweVwiIGZvbnRTaXplPVwibVwiIHBhZGRpbmdTaXplPVwibVwiPlxuICAgICAgICAgICAgICB7ZGF0YS5zcGVjLnVzZXJEZWZpbmVkRnVuY3Rpb24uYm9keX1cbiAgICAgICAgICAgIDwvRXVpQ29kZUJsb2NrPlxuICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICA8L0V1aUZsZXhHcm91cD5cbiAgICAgIDxFdWlGbGV4R3JvdXA+XG4gICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfT5cbiAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgPGgzPkZlYXR1cmVzICh7ZGF0YS5zcGVjLmZlYXR1cmVzLmxlbmd0aH0pPC9oMz5cbiAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAgICAgICAge2RhdGEuc3BlYy5mZWF0dXJlcyA/IChcbiAgICAgICAgICAgICAgPEZlYXR1cmVzTGlzdERpc3BsYXlcbiAgICAgICAgICAgICAgICBmZWF0dXJlVmlld05hbWU9e2RhdGEuc3BlYy5uYW1lfVxuICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtkYXRhLnNwZWMuZmVhdHVyZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8RXVpVGV4dD5ObyBUYWdzIHNlcGNpZmllZCBvbiB0aGlzIGZlYXR1cmUgdmlldy48L0V1aVRleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfT5cbiAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgPGgzPklucHV0cyAoe2lucHV0cy5sZW5ndGh9KTwvaDM+XG4gICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgIDxFdWlGbGV4R3JvdXAgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtpbnB1dHMubWFwKChba2V5LCBpbnB1dEdyb3VwXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoaW5wdXRHcm91cCBhcyBSZXF1ZXN0RGF0YVNvdXJjZVR5cGUpLnJlcXVlc3REYXRhU291cmNlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RXVpRmxleEl0ZW0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxSZXF1ZXN0RGF0YURpc3BsYXlQYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLihpbnB1dEdyb3VwIGFzIFJlcXVlc3REYXRhU291cmNlVHlwZSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0R3JvdXAgYXMgRmVhdHVyZVZpZXdQcm9qZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEV1aUZsZXhJdGVtIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZVZpZXdQcm9qZWN0aW9uRGlzcGxheVBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uKGlucHV0R3JvdXAgYXMgRmVhdHVyZVZpZXdQcm9qZWN0aW9uVHlwZSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIDxFdWlDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc29uXCIgZm9udFNpemU9XCJtXCIgcGFkZGluZ1NpemU9XCJtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGlucHV0R3JvdXAsIG51bGwsIDIpfVxuICAgICAgICAgICAgICAgICAgICA8L0V1aUNvZGVCbG9jaz5cbiAgICAgICAgICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0V1aUZsZXhHcm91cD5cbiAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cIm1cIiAvPlxuICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9PlxuICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICA8aDM+Q29uc3VtaW5nIEZlYXR1cmUgU2VydmljZXM8L2gzPlxuICAgICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICB7ZnNOYW1lcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8Q29uc3VtaW5nRmVhdHVyZVNlcnZpY2VzTGlzdCBmc05hbWVzPXtmc05hbWVzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEV1aVRleHQ+Tm8gc2VydmljZXMgY29uc3VtZSB0aGlzIGZlYXR1cmUgdmlldzwvRXVpVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9FdWlQYW5lbD5cbiAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgIDwvRXVpRmxleEdyb3VwPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPbkRlbWFuZEZlYXR1cmVWaWV3T3ZlcnZpZXdUYWI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtcbiAgRXVpUGFnZUhlYWRlcixcbiAgRXVpUGFnZUNvbnRlbnQsXG4gIEV1aVBhZ2VDb250ZW50Qm9keSxcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlVmlld0ljb24zMiB9IGZyb20gXCIuLi8uLi9ncmFwaGljcy9GZWF0dXJlVmlld0ljb25cIjtcbmltcG9ydCB7IHVzZU1hdGNoRXhhY3QgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlTWF0Y2hTdWJwYXRoXCI7XG5pbXBvcnQgeyBGZWFzdE9ERlZUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvZmVhc3RPREZWU1wiO1xuaW1wb3J0IE9uRGVtYW5kRmVhdHVyZVZpZXdPdmVydmlld1RhYiBmcm9tIFwiLi9PbkRlbWFuZEZlYXR1cmVWaWV3T3ZlcnZpZXdUYWJcIjtcblxuaW1wb3J0IHtcbiAgdXNlT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYnMsXG4gIHVzZU9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJSb3V0ZXMsXG59IGZyb20gXCIuLi8uLi9jdXN0b20tdGFicy9UYWJzUmVnaXN0cnlDb250ZXh0XCI7XG5cbmludGVyZmFjZSBPbkRlbWFuZEZlYXR1cmVJbnN0YW5jZVByb3BzIHtcbiAgZGF0YTogRmVhc3RPREZWVHlwZTtcbn1cblxuY29uc3QgT25EZW1hbmRGZWF0dXJlSW5zdGFuY2UgPSAoeyBkYXRhIH06IE9uRGVtYW5kRmVhdHVyZUluc3RhbmNlUHJvcHMpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgeyBmZWF0dXJlVmlld05hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IHsgY3VzdG9tTmF2aWdhdGlvblRhYnMgfSA9IHVzZU9uRGVtYW5kRmVhdHVyZVZpZXdDdXN0b21UYWJzKG5hdmlnYXRlKTtcbiAgY29uc3QgQ3VzdG9tVGFiUm91dGVzID0gdXNlT25EZW1hbmRGZWF0dXJlVmlld0N1c3RvbVRhYlJvdXRlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV1aVBhZ2VIZWFkZXJcbiAgICAgICAgcmVzdHJpY3RXaWR0aFxuICAgICAgICBpY29uVHlwZT17RmVhdHVyZVZpZXdJY29uMzJ9XG4gICAgICAgIHBhZ2VUaXRsZT17YCR7ZmVhdHVyZVZpZXdOYW1lfWB9XG4gICAgICAgIHRhYnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJPdmVydmlld1wiLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogdXNlTWF0Y2hFeGFjdChcIlwiKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgbmF2aWdhdGUoXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4uY3VzdG9tTmF2aWdhdGlvblRhYnMsXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICAgIGhhc0JvcmRlcj17ZmFsc2V9XG4gICAgICAgIGhhc1NoYWRvdz17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAgPEV1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIHBhdGg9XCIvXCJcbiAgICAgICAgICAgICAgZWxlbWVudD17PE9uRGVtYW5kRmVhdHVyZVZpZXdPdmVydmlld1RhYiBkYXRhPXtkYXRhfSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Q3VzdG9tVGFiUm91dGVzfVxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uRGVtYW5kRmVhdHVyZUluc3RhbmNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRXVpTG9hZGluZ1NwaW5uZXIgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IEZlYXN0RmVhdHVyZVZpZXdUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnNlcnMvZmVhc3RGZWF0dXJlVmlld3NcIjtcbmltcG9ydCBSZWd1bGFyRmVhdHVyZUluc3RhbmNlIGZyb20gXCIuL1JlZ3VsYXJGZWF0dXJlVmlld0luc3RhbmNlXCI7XG5pbXBvcnQgeyBGRUFTVF9GVl9UWVBFUyB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL21lcmdlZEZWVHlwZXNcIjtcbmltcG9ydCB7IEZlYXN0T0RGVlR5cGUgfSBmcm9tIFwiLi4vLi4vcGFyc2Vycy9mZWFzdE9ERlZTXCI7XG5pbXBvcnQgdXNlTG9hZEZlYXR1cmVWaWV3IGZyb20gXCIuL3VzZUxvYWRGZWF0dXJlVmlld1wiO1xuaW1wb3J0IE9uRGVtYW5kRmVhdHVyZUluc3RhbmNlIGZyb20gXCIuL09uRGVtYW5kRmVhdHVyZVZpZXdJbnN0YW5jZVwiO1xuXG5jb25zdCBGZWF0dXJlVmlld0luc3RhbmNlID0gKCkgPT4ge1xuICBjb25zdCB7IGZlYXR1cmVWaWV3TmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgZnZOYW1lID0gZmVhdHVyZVZpZXdOYW1lID09PSB1bmRlZmluZWQgPyBcIlwiIDogZmVhdHVyZVZpZXdOYW1lO1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGlzRXJyb3IsIGRhdGEgfSA9IHVzZUxvYWRGZWF0dXJlVmlldyhmdk5hbWUpO1xuICBjb25zdCBpc0VtcHR5ID0gZGF0YSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cIm1cIiAvPiBMb2FkaW5nXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbiAgaWYgKGlzRW1wdHkpIHtcbiAgICByZXR1cm4gPHA+Tm8gZmVhdHVyZSB2aWV3IHdpdGggbmFtZToge2ZlYXR1cmVWaWV3TmFtZX08L3A+O1xuICB9XG5cbiAgaWYgKGlzRXJyb3IpIHtcbiAgICBpc0Vycm9yICYmIDxwPkVycm9yIGxvYWRpbmcgZmVhdHVyZSB2aWV3OiB7ZmVhdHVyZVZpZXdOYW1lfTwvcD47XG4gIH1cblxuICBpZiAoaXNTdWNjZXNzICYmICFpc0VtcHR5KSB7XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gRkVBU1RfRlZfVFlQRVMucmVndWxhcikge1xuICAgICAgY29uc3QgZnY6IEZlYXN0RmVhdHVyZVZpZXdUeXBlID0gZGF0YS5vYmplY3Q7XG5cbiAgICAgIHJldHVybiA8UmVndWxhckZlYXR1cmVJbnN0YW5jZSBkYXRhPXtmdn0gLz47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gRkVBU1RfRlZfVFlQRVMub25kZW1hbmQpIHtcbiAgICAgIGNvbnN0IG9kZnY6IEZlYXN0T0RGVlR5cGUgPSBkYXRhLm9iamVjdDtcblxuICAgICAgcmV0dXJuIDxPbkRlbWFuZEZlYXR1cmVJbnN0YW5jZSBkYXRhPXtvZGZ2fSAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPHA+Tm8gRGF0YSBTbyBTYWQ8L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVZpZXdJbnN0YW5jZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IHsgRmVhc3RGZWF0dXJlSW5TZXJ2aWNlVHlwZSB9IGZyb20gXCIuLi9wYXJzZXJzL2ZlYXN0RmVhdHVyZVNlcnZpY2VzXCI7XG5pbXBvcnQgRXVpQ3VzdG9tTGluayBmcm9tIFwiLi9FdWlDdXN0b21MaW5rXCI7XG5pbXBvcnQgeyBGRUFTVF9GRUFUVVJFX1ZBTFVFX1RZUEVTIH0gZnJvbSBcIi4uL3BhcnNlcnMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmludGVyZmFjZSBGZWF0dXJlVmlld3NMaXN0SW50ZXJhY2Uge1xuICBmZWF0dXJlVmlld3M6IEZlYXN0RmVhdHVyZUluU2VydmljZVR5cGVbXTtcbn1cblxuY29uc3QgRmVhdHVyZXNJblNlcnZpY2VMaXN0ID0gKHsgZmVhdHVyZVZpZXdzIH06IEZlYXR1cmVWaWV3c0xpc3RJbnRlcmFjZSkgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBGZWF0dXJlSW5TZXJ2aWNlID0gei5vYmplY3Qoe1xuICAgIGZlYXR1cmVWaWV3TmFtZTogei5zdHJpbmcoKSxcbiAgICBmZWF0dXJlQ29sdW1uTmFtZTogei5zdHJpbmcoKSxcbiAgICB2YWx1ZVR5cGU6IHoubmF0aXZlRW51bShGRUFTVF9GRUFUVVJFX1ZBTFVFX1RZUEVTKSxcbiAgfSk7XG4gIHR5cGUgRmVhdHVyZUluU2VydmljZVR5cGUgPSB6LmluZmVyPHR5cGVvZiBGZWF0dXJlSW5TZXJ2aWNlPjtcblxuICB2YXIgaXRlbXM6IEZlYXR1cmVJblNlcnZpY2VUeXBlW10gPSBbXTtcbiAgZmVhdHVyZVZpZXdzLmZvckVhY2goKGZlYXR1cmVWaWV3KSA9PiB7XG4gICAgZmVhdHVyZVZpZXcuZmVhdHVyZUNvbHVtbnMuZm9yRWFjaCgoZmVhdHVyZUNvbHVtbikgPT4ge1xuICAgICAgY29uc3Qgcm93OiBGZWF0dXJlSW5TZXJ2aWNlVHlwZSA9IHtcbiAgICAgICAgZmVhdHVyZVZpZXdOYW1lOiBmZWF0dXJlVmlldy5mZWF0dXJlVmlld05hbWUsXG4gICAgICAgIGZlYXR1cmVDb2x1bW5OYW1lOiBmZWF0dXJlQ29sdW1uLm5hbWUsXG4gICAgICAgIHZhbHVlVHlwZTogZmVhdHVyZUNvbHVtbi52YWx1ZVR5cGUsXG4gICAgICB9O1xuICAgICAgaXRlbXMucHVzaChyb3cpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRmVhdHVyZSBWaWV3XCIsXG4gICAgICBmaWVsZDogXCJmZWF0dXJlVmlld05hbWVcIixcbiAgICAgIHJlbmRlcjogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFdWlDdXN0b21MaW5rXG4gICAgICAgICAgICBocmVmPXtgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS12aWV3LyR7bmFtZX1gfVxuICAgICAgICAgICAgdG89e2AvcC8ke3Byb2plY3ROYW1lfS9mZWF0dXJlLXZpZXcvJHtuYW1lfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9FdWlDdXN0b21MaW5rPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRmVhdHVyZSBDb2x1bW5cIixcbiAgICAgIGZpZWxkOiBcImZlYXR1cmVDb2x1bW5OYW1lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlZhbHVlIFR5cGVcIixcbiAgICAgIGZpZWxkOiBcInZhbHVlVHlwZVwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZ2V0Um93UHJvcHMgPSAoaXRlbTogRmVhdHVyZUluU2VydmljZVR5cGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkYXRhLXRlc3Qtc3VialwiOiBgcm93LSR7aXRlbS5mZWF0dXJlVmlld05hbWV9YCxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEV1aUJhc2ljVGFibGUgY29sdW1ucz17Y29sdW1uc30gaXRlbXM9e2l0ZW1zfSByb3dQcm9wcz17Z2V0Um93UHJvcHN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlc0luU2VydmljZUxpc3Q7XG4iLCJpbXBvcnQge1xuICBFdWlCYWRnZSxcbiAgRXVpRmxleEdyb3VwLFxuICBFdWlGbGV4SXRlbSxcbiAgRXVpSG9yaXpvbnRhbFJ1bGUsXG4gIEV1aUxvYWRpbmdTcGlubmVyLFxuICBFdWlQYW5lbCxcbiAgRXVpU3BhY2VyLFxuICBFdWlTdGF0LFxuICBFdWlUZXh0LFxuICBFdWlUZXh0QWxpZ24sXG4gIEV1aVRpdGxlLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEZlYXR1cmVzSW5TZXJ2aWNlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GZWF0dXJlc0luU2VydmljZURpc3BsYXlcIjtcbmltcG9ydCBUYWdzRGlzcGxheSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdzRGlzcGxheVwiO1xuaW1wb3J0IHsgZW5jb2RlU2VhcmNoUXVlcnlTdHJpbmcgfSBmcm9tIFwiLi4vLi4vaG9va3MvZW5jb2RlU2VhcmNoUXVlcnlTdHJpbmdcIjtcbmltcG9ydCBGZWF0dXJlVmlld0VkZ2VzTGlzdCBmcm9tIFwiLi4vZW50aXRpZXMvRmVhdHVyZVZpZXdFZGdlc0xpc3RcIjtcbmltcG9ydCB1c2VMb2FkRmVhdHVyZVNlcnZpY2UgZnJvbSBcIi4vdXNlTG9hZEZlYXR1cmVTZXJ2aWNlXCI7XG5cbmNvbnN0IEZlYXR1cmVTZXJ2aWNlT3ZlcnZpZXdUYWIgPSAoKSA9PiB7XG4gIGxldCB7IGZlYXR1cmVTZXJ2aWNlTmFtZSwgcHJvamVjdE5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IGZzTmFtZSA9IGZlYXR1cmVTZXJ2aWNlTmFtZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGZlYXR1cmVTZXJ2aWNlTmFtZTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNTdWNjZXNzLCBpc0Vycm9yLCBkYXRhLCBlbnRpdGllcyB9ID1cbiAgICB1c2VMb2FkRmVhdHVyZVNlcnZpY2UoZnNOYW1lKTtcbiAgY29uc3QgaXNFbXB0eSA9IGRhdGEgPT09IHVuZGVmaW5lZDtcblxuICBsZXQgbnVtRmVhdHVyZXMgPSAwO1xuICBsZXQgbnVtRmVhdHVyZVZpZXdzID0gMDtcbiAgaWYgKGRhdGEpIHtcbiAgICBkYXRhLnNwZWMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZVZpZXcpID0+IHtcbiAgICAgIG51bUZlYXR1cmVWaWV3cyArPSAxO1xuICAgICAgbnVtRmVhdHVyZXMgKz0gZmVhdHVyZVZpZXcuZmVhdHVyZUNvbHVtbnMubGVuZ3RoO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cIm1cIiAvPiBMb2FkaW5nXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAge2lzRW1wdHkgJiYgPHA+Tm8gZmVhdHVyZSBzZXJ2aWNlIHdpdGggbmFtZToge2ZlYXR1cmVTZXJ2aWNlTmFtZX08L3A+fVxuICAgICAge2lzRXJyb3IgJiYgPHA+RXJyb3IgbG9hZGluZyBmZWF0dXJlIHNlcnZpY2U6IHtmZWF0dXJlU2VydmljZU5hbWV9PC9wPn1cbiAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RXVpRmxleEdyb3VwIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXtmYWxzZX0+XG4gICAgICAgICAgICAgIDxFdWlTdGF0IHRpdGxlPXtgJHtudW1GZWF0dXJlc31gfSBkZXNjcmlwdGlvbj1cIlRvdGFsIEZlYXR1cmVzXCIgLz5cbiAgICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgICA8RXVpRmxleEl0ZW0+XG4gICAgICAgICAgICAgIDxFdWlUZXh0QWxpZ24gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+ZnJvbTwvcD5cbiAgICAgICAgICAgICAgPC9FdWlUZXh0QWxpZ24+XG4gICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICA8RXVpU3RhdFxuICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtudW1GZWF0dXJlVmlld3N9YH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZlYXR1cmUgVmlld3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEV1aVN0YXRcbiAgICAgICAgICAgICAgICB0aXRsZT17YCR7ZGF0YS5tZXRhLmNyZWF0ZWRUaW1lc3RhbXAudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgXCJlbi1DQVwiXG4gICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ3JlYXRlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgIDwvRXVpRmxleEdyb3VwPlxuICAgICAgICAgIDxFdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICA8RXVpRmxleEl0ZW0gZ3Jvdz17Mn0+XG4gICAgICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMj5GZWF0dXJlczwvaDI+XG4gICAgICAgICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICAgICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAgICAgICAgICAgIHtkYXRhLnNwZWMuZmVhdHVyZXMgPyAoXG4gICAgICAgICAgICAgICAgICA8RmVhdHVyZXNJblNlcnZpY2VMaXN0IGZlYXR1cmVWaWV3cz17ZGF0YS5zcGVjLmZlYXR1cmVzfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RXVpVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgTm8gZmVhdHVyZXMgc3BlY2lmaWVkIGZvciB0aGlzIGZlYXR1cmUgc2VydmljZS5cbiAgICAgICAgICAgICAgICAgIDwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXsxfT5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0gZ3Jvdz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5UYWdzPC9oMz5cbiAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICAgICAge2RhdGEuc3BlYy50YWdzID8gKFxuICAgICAgICAgICAgICAgICAgPFRhZ3NEaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e2RhdGEuc3BlYy50YWdzfVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaW5rPXsoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBgL3AvJHtwcm9qZWN0TmFtZX0vZmVhdHVyZS1zZXJ2aWNlP2AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlU2VhcmNoUXVlcnlTdHJpbmcoYCR7a2V5fToke3ZhbHVlfWApXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxFdWlUZXh0Pk5vIFRhZ3Mgc3BlY2lmaWVkIG9uIHRoaXMgZmVhdHVyZSBzZXJ2aWNlLjwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJtXCIgLz5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPkVudGl0aWVzPC9oMz5cbiAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICAgICAge2VudGl0aWVzID8gKFxuICAgICAgICAgICAgICAgICAgPEV1aUZsZXhHcm91cCB3cmFwIHJlc3BvbnNpdmU9e2ZhbHNlfSBndXR0ZXJTaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgICAge2VudGl0aWVzLm1hcCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXtmYWxzZX0ga2V5PXtlbnRpdHkubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFdWlCYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvcC8ke3Byb2plY3ROYW1lfS9lbnRpdHkvJHtlbnRpdHkubmFtZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0FyaWFMYWJlbD17ZW50aXR5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0LXN1Yj1cInRlc3RFeGFtcGxlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50aXR5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRXVpQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxFdWlUZXh0Pk5vIEVudGl0aWVzLjwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgICA8RXVpU3BhY2VyIHNpemU9XCJtXCIgLz5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPkFsbCBGZWF0dXJlIFZpZXdzPC9oMz5cbiAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICAgICAge2RhdGEuc3BlYy5mZWF0dXJlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgPEZlYXR1cmVWaWV3RWRnZXNMaXN0XG4gICAgICAgICAgICAgICAgICAgIGZ2TmFtZXM9e2RhdGEuc3BlYy5mZWF0dXJlcy5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi5mZWF0dXJlVmlld05hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEV1aVRleHQ+Tm8gZmVhdHVyZSB2aWV3cyBpbiB0aGlzIGZlYXR1cmUgc2VydmljZTwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICA8L0V1aUZsZXhHcm91cD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVTZXJ2aWNlT3ZlcnZpZXdUYWI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7XG4gIEV1aVBhZ2VIZWFkZXIsXG4gIEV1aVBhZ2VDb250ZW50LFxuICBFdWlQYWdlQ29udGVudEJvZHksXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcblxuaW1wb3J0IHsgRmVhdHVyZVNlcnZpY2VJY29uMzIgfSBmcm9tIFwiLi4vLi4vZ3JhcGhpY3MvRmVhdHVyZVNlcnZpY2VJY29uXCI7XG5pbXBvcnQgeyB1c2VNYXRjaEV4YWN0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZU1hdGNoU3VicGF0aFwiO1xuaW1wb3J0IEZlYXR1cmVTZXJ2aWNlT3ZlcnZpZXdUYWIgZnJvbSBcIi4vRmVhdHVyZVNlcnZpY2VPdmVydmlld1RhYlwiO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRUaXRsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VEb2N1bWVudFRpdGxlXCI7XG5cbmltcG9ydCB7XG4gIHVzZUZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFicyxcbiAgdXNlRmVhdHVyZVNlcnZpY2VDdXN0b21UYWJSb3V0ZXMsXG59IGZyb20gXCIuLi8uLi9jdXN0b20tdGFicy9UYWJzUmVnaXN0cnlDb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVTZXJ2aWNlSW5zdGFuY2UgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHsgZmVhdHVyZVNlcnZpY2VOYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VEb2N1bWVudFRpdGxlKGAke2ZlYXR1cmVTZXJ2aWNlTmFtZX0gfCBGZWF0dXJlIFNlcnZpY2UgfCBGZWFzdGApO1xuXG4gIGNvbnN0IHsgY3VzdG9tTmF2aWdhdGlvblRhYnMgfSA9IHVzZUZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFicyhuYXZpZ2F0ZSk7XG4gIGNvbnN0IEN1c3RvbVRhYlJvdXRlcyA9IHVzZUZlYXR1cmVTZXJ2aWNlQ3VzdG9tVGFiUm91dGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8RXVpUGFnZUhlYWRlclxuICAgICAgICByZXN0cmljdFdpZHRoXG4gICAgICAgIGljb25UeXBlPXtGZWF0dXJlU2VydmljZUljb24zMn1cbiAgICAgICAgcGFnZVRpdGxlPXtgRmVhdHVyZSBTZXJ2aWNlOiAke2ZlYXR1cmVTZXJ2aWNlTmFtZX1gfVxuICAgICAgICB0YWJzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiT3ZlcnZpZXdcIixcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHVzZU1hdGNoRXhhY3QoXCJcIiksXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIG5hdmlnYXRlKFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmN1c3RvbU5hdmlnYXRpb25UYWJzLFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICAgIDxFdWlQYWdlQ29udGVudFxuICAgICAgICBoYXNCb3JkZXI9e2ZhbHNlfVxuICAgICAgICBoYXNTaGFkb3c9e2ZhbHNlfVxuICAgICAgICBwYWRkaW5nU2l6ZT1cIm5vbmVcIlxuICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9uZVwiXG4gICAgICA+XG4gICAgICAgIDxFdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxGZWF0dXJlU2VydmljZU92ZXJ2aWV3VGFiIC8+fSAvPlxuICAgICAgICAgICAge0N1c3RvbVRhYlJvdXRlc31cbiAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9FdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICA8L0V1aVBhZ2VDb250ZW50PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlU2VydmljZUluc3RhbmNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRXVpUGFuZWwgfSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHVzZUxvYWREYXRhU291cmNlIGZyb20gXCIuL3VzZUxvYWREYXRhU291cmNlXCI7XG5cbmNvbnN0IERhdGFTb3VyY2VSYXdEYXRhID0gKCkgPT4ge1xuICBsZXQgeyBkYXRhU291cmNlTmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgZHNOYW1lID0gZGF0YVNvdXJjZU5hbWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBkYXRhU291cmNlTmFtZTtcblxuICBjb25zdCB7IGlzU3VjY2VzcywgZGF0YSB9ID0gdXNlTG9hZERhdGFTb3VyY2UoZHNOYW1lKTtcblxuICByZXR1cm4gaXNTdWNjZXNzICYmIGRhdGEgPyAoXG4gICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0gaGFzU2hhZG93PXtmYWxzZX0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKX08L3ByZT5cbiAgICA8L0V1aVBhbmVsPlxuICApIDogKFxuICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGhhc1NoYWRvdz17ZmFsc2V9PlxuICAgICAgTm8gZGF0YSBzbyBzYWRcbiAgICA8L0V1aVBhbmVsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZVJhd0RhdGE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IHsgRkVBU1RfRkVBVFVSRV9WQUxVRV9UWVBFUyB9IGZyb20gXCIuLi8uLi9wYXJzZXJzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBSZXF1ZXN0RGF0YVNvdXJjZVNjaGVtYUZpZWxkIHtcbiAgZmllbGROYW1lOiBzdHJpbmc7XG4gIHZhbHVlVHlwZTogRkVBU1RfRkVBVFVSRV9WQUxVRV9UWVBFUztcbn1cblxuaW50ZXJmYWNlIFJlcXVlc3REYXRhU291cmNlU2NoZW1hIHtcbiAgZmllbGRzOiBSZXF1ZXN0RGF0YVNvdXJjZVNjaGVtYUZpZWxkW107XG59XG5cbmNvbnN0IFJlcXVlc3REYXRhU291cmNlU2NoZW1hVGFibGUgPSAoeyBmaWVsZHMgfTogUmVxdWVzdERhdGFTb3VyY2VTY2hlbWEpID0+IHtcbiAgY29uc29sZS5sb2coZmllbGRzKTtcbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkZpZWxkXCIsXG4gICAgICBmaWVsZDogXCJmaWVsZE5hbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVmFsdWUgVHlwZVwiLFxuICAgICAgZmllbGQ6IFwidmFsdWVUeXBlXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBnZXRSb3dQcm9wcyA9IChpdGVtOiBSZXF1ZXN0RGF0YVNvdXJjZVNjaGVtYUZpZWxkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGF0YS10ZXN0LXN1YmpcIjogYHJvdy0ke2l0ZW0uZmllbGROYW1lfWAsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFdWlCYXNpY1RhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGl0ZW1zPXtmaWVsZHN9IHJvd1Byb3BzPXtnZXRSb3dQcm9wc30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3REYXRhU291cmNlU2NoZW1hVGFibGU7XG4iLCJpbXBvcnQge1xuICBFdWlGbGV4R3JvdXAsXG4gIEV1aUhvcml6b250YWxSdWxlLFxuICBFdWlMb2FkaW5nU3Bpbm5lcixcbiAgRXVpVGV4dCxcbiAgRXVpVGl0bGUsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCB7XG4gIEV1aVBhbmVsLFxuICBFdWlGbGV4SXRlbSxcbiAgRXVpRGVzY3JpcHRpb25MaXN0LFxuICBFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZSxcbiAgRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24sXG4gIEV1aVNwYWNlcixcbn0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCYXRjaFNvdXJjZVByb3BlcnRpZXNWaWV3IGZyb20gXCIuL0JhdGNoU291cmNlUHJvcGVydGllc1ZpZXdcIjtcbmltcG9ydCBGZWF0dXJlVmlld0VkZ2VzTGlzdCBmcm9tIFwiLi4vZW50aXRpZXMvRmVhdHVyZVZpZXdFZGdlc0xpc3RcIjtcbmltcG9ydCBSZXF1ZXN0RGF0YVNvdXJjZVNjaGVtYVRhYmxlIGZyb20gXCIuL1JlcXVlc3REYXRhU291cmNlU2NoZW1hVGFibGVcIjtcbmltcG9ydCB1c2VMb2FkRGF0YVNvdXJjZSBmcm9tIFwiLi91c2VMb2FkRGF0YVNvdXJjZVwiO1xuXG5jb25zdCBEYXRhU291cmNlT3ZlcnZpZXdUYWIgPSAoKSA9PiB7XG4gIGxldCB7IGRhdGFTb3VyY2VOYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCBkc05hbWUgPSBkYXRhU291cmNlTmFtZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFTb3VyY2VOYW1lO1xuICBjb25zdCB7IGlzTG9hZGluZywgaXNTdWNjZXNzLCBpc0Vycm9yLCBkYXRhLCBjb25zdW1pbmdGZWF0dXJlVmlld3MgfSA9XG4gICAgdXNlTG9hZERhdGFTb3VyY2UoZHNOYW1lKTtcbiAgY29uc3QgaXNFbXB0eSA9IGRhdGEgPT09IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEV1aUxvYWRpbmdTcGlubmVyIHNpemU9XCJtXCIgLz4gTG9hZGluZ1xuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICAgIHtpc0VtcHR5ICYmIDxwPk5vIGRhdGEgc291cmNlIHdpdGggbmFtZToge2RhdGFTb3VyY2VOYW1lfTwvcD59XG4gICAgICB7aXNFcnJvciAmJiA8cD5FcnJvciBsb2FkaW5nIGRhdGEgc291cmNlOiB7ZGF0YVNvdXJjZU5hbWV9PC9wPn1cbiAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGhhc1NoYWRvdz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlByb3BlcnRpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5maWxlT3B0aW9ucyB8fCBkYXRhLmJpZ3F1ZXJ5T3B0aW9ucyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8QmF0Y2hTb3VyY2VQcm9wZXJ0aWVzVmlldyBiYXRjaFNvdXJjZT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IGRhdGEudHlwZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RXVpRGVzY3JpcHRpb25MaXN0VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cIm1cIiAvPlxuICAgICAgICAgICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgICAgIDxFdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLnJlcXVlc3REYXRhT3B0aW9ucyA/IChcbiAgICAgICAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEV1aVRpdGxlIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlcXVlc3QgU291cmNlIFNjaGVtYTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8RXVpSG9yaXpvbnRhbFJ1bGUgbWFyZ2luPVwieHNcIj48L0V1aUhvcml6b250YWxSdWxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZXF1ZXN0RGF0YVNvdXJjZVNjaGVtYVRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e2RhdGEucmVxdWVzdERhdGFPcHRpb25zLnNjaGVtYS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogb2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBvYmoudmFsdWVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9FdWlQYW5lbD5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICAgICAgICAgPEV1aUZsZXhJdGVtPlxuICAgICAgICAgICAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+Q29uc3VtaW5nIEZlYXR1cmUgVmlld3M8L2gyPlxuICAgICAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCI+PC9FdWlIb3Jpem9udGFsUnVsZT5cbiAgICAgICAgICAgICAgICB7Y29uc3VtaW5nRmVhdHVyZVZpZXdzICYmIGNvbnN1bWluZ0ZlYXR1cmVWaWV3cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgPEZlYXR1cmVWaWV3RWRnZXNMaXN0XG4gICAgICAgICAgICAgICAgICAgIGZ2TmFtZXM9e2NvbnN1bWluZ0ZlYXR1cmVWaWV3cy5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi50YXJnZXQubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RXVpVGV4dD5ObyBjb25zdW1pbmcgZmVhdHVyZSB2aWV3czwvRXVpVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICA8L0V1aUZsZXhHcm91cD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlT3ZlcnZpZXdUYWI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFdWlDb2RlQmxvY2ssXG4gIEV1aVBhbmVsLFxuICBFdWlIb3Jpem9udGFsUnVsZSxcbiAgRXVpVGl0bGUsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdXNlTG9hZERhdGFTb3VyY2UgZnJvbSBcIi4vdXNlTG9hZERhdGFTb3VyY2VcIjtcblxuY29uc3QgRGF0YVNvdXJjZURidCA9ICgpID0+IHtcbiAgbGV0IHsgZGF0YVNvdXJjZU5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IGRzTmFtZSA9IGRhdGFTb3VyY2VOYW1lID09PSB1bmRlZmluZWQgPyBcIlwiIDogZGF0YVNvdXJjZU5hbWU7XG5cbiAgY29uc3QgeyBpc1N1Y2Nlc3MsIGRhdGEgfSA9IHVzZUxvYWREYXRhU291cmNlKGRzTmFtZSk7XG5cbiAgcmV0dXJuIGlzU3VjY2VzcyAmJiBkYXRhICYmIGRhdGEuYmlncXVlcnlPcHRpb25zID8gKFxuICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGhhc1NoYWRvdz17ZmFsc2V9PlxuICAgICAgPEV1aVRpdGxlIHNpemU9XCJzXCI+XG4gICAgICAgIDxoMz5EYnQgVHJhbnNmb3JtYXRpb248L2gzPlxuICAgICAgPC9FdWlUaXRsZT5cbiAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICA8RXVpQ29kZUJsb2NrIGxhbmd1YWdlPVwic3FsXCIgZm9udFNpemU9XCJtXCIgcGFkZGluZ1NpemU9XCJtXCIgaXNDb3B5YWJsZT5cbiAgICAgICAge2RhdGEuYmlncXVlcnlPcHRpb25zLmRidE1vZGVsU2VyaWFsaXplZH1cbiAgICAgIDwvRXVpQ29kZUJsb2NrPlxuICAgIDwvRXVpUGFuZWw+XG4gICkgOiAoXG4gICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0gaGFzU2hhZG93PXtmYWxzZX0+XG4gICAgICBObyBkYXRhIHNvIHNhZFxuICAgIDwvRXVpUGFuZWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlRGJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBFdWlQYWdlSGVhZGVyLFxuICBFdWlQYWdlQ29udGVudCxcbiAgRXVpUGFnZUNvbnRlbnRCb2R5LFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJY29uMzIgfSBmcm9tIFwiLi4vLi4vZ3JhcGhpY3MvRGF0YVNvdXJjZUljb25cIjtcbmltcG9ydCB7IHVzZU1hdGNoRXhhY3QsIHVzZU1hdGNoU3VicGF0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VNYXRjaFN1YnBhdGhcIjtcbmltcG9ydCB7IHVzZURvY3VtZW50VGl0bGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRG9jdW1lbnRUaXRsZVwiO1xuaW1wb3J0IERhdGFTb3VyY2VSYXdEYXRhIGZyb20gXCIuL0RhdGFTb3VyY2VSYXdEYXRhXCI7XG5pbXBvcnQgRGF0YVNvdXJjZU92ZXJ2aWV3VGFiIGZyb20gXCIuL0RhdGFTb3VyY2VPdmVydmlld1RhYlwiO1xuaW1wb3J0IERhdGFTb3VyY2VEYnQgZnJvbSBcIi4vRGF0YVNvdXJjZURidFwiO1xuaW1wb3J0IHVzZUxvYWREYXRhU291cmNlIGZyb20gXCIuL3VzZUxvYWREYXRhU291cmNlXCI7XG5cbmltcG9ydCB7XG4gIHVzZURhdGFTb3VyY2VDdXN0b21UYWJzLFxuICB1c2VEYXRhU291cmNlQ3VzdG9tVGFiUm91dGVzLFxufSBmcm9tIFwiLi4vLi4vY3VzdG9tLXRhYnMvVGFic1JlZ2lzdHJ5Q29udGV4dFwiO1xuXG5jb25zdCBEYXRhU291cmNlSW5zdGFuY2UgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHsgZGF0YVNvdXJjZU5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIHVzZURvY3VtZW50VGl0bGUoYCR7ZGF0YVNvdXJjZU5hbWV9IHwgRGF0YSBTb3VyY2UgfCBGZWFzdGApO1xuICBjb25zdCBkc05hbWUgPSBkYXRhU291cmNlTmFtZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFTb3VyY2VOYW1lO1xuICBjb25zdCB7IGlzU3VjY2VzcywgZGF0YSB9ID0gdXNlTG9hZERhdGFTb3VyY2UoZHNOYW1lKTtcblxuICBsZXQgdGFicyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJPdmVydmlld1wiLFxuICAgICAgaXNTZWxlY3RlZDogdXNlTWF0Y2hFeGFjdChcIlwiKSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGUoXCJcIik7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZGJ0VGFiID0ge1xuICAgIGxhYmVsOiBcIkRidCBEZWZpbml0aW9uXCIsXG4gICAgaXNTZWxlY3RlZDogdXNlTWF0Y2hTdWJwYXRoKFwiZGJ0XCIpLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG5hdmlnYXRlKFwiZGJ0XCIpO1xuICAgIH0sXG4gIH07XG4gIGlmIChpc1N1Y2Nlc3MgJiYgZGF0YT8uYmlncXVlcnlPcHRpb25zPy5kYnRNb2RlbFNlcmlhbGl6ZWQpIHtcbiAgICB0YWJzLnB1c2goZGJ0VGFiKTtcbiAgfVxuXG4gIGNvbnN0IHsgY3VzdG9tTmF2aWdhdGlvblRhYnMgfSA9IHVzZURhdGFTb3VyY2VDdXN0b21UYWJzKG5hdmlnYXRlKTtcbiAgdGFicyA9IHRhYnMuY29uY2F0KGN1c3RvbU5hdmlnYXRpb25UYWJzKTtcblxuICBjb25zdCBDdXN0b21UYWJSb3V0ZXMgPSB1c2VEYXRhU291cmNlQ3VzdG9tVGFiUm91dGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8RXVpUGFnZUhlYWRlclxuICAgICAgICByZXN0cmljdFdpZHRoXG4gICAgICAgIGljb25UeXBlPXtEYXRhU291cmNlSWNvbjMyfVxuICAgICAgICBwYWdlVGl0bGU9e2BEYXRhIFNvdXJjZTogJHtkYXRhU291cmNlTmFtZX1gfVxuICAgICAgICB0YWJzPXt0YWJzfVxuICAgICAgLz5cbiAgICAgIDxFdWlQYWdlQ29udGVudFxuICAgICAgICBoYXNCb3JkZXI9e2ZhbHNlfVxuICAgICAgICBoYXNTaGFkb3c9e2ZhbHNlfVxuICAgICAgICBwYWRkaW5nU2l6ZT1cIm5vbmVcIlxuICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9uZVwiXG4gICAgICA+XG4gICAgICAgIDxFdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxEYXRhU291cmNlT3ZlcnZpZXdUYWIgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yYXctZGF0YVwiIGVsZW1lbnQ9ezxEYXRhU291cmNlUmF3RGF0YSAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RidFwiIGVsZW1lbnQ9ezxEYXRhU291cmNlRGJ0IC8+fSAvPlxuICAgICAgICAgICAge0N1c3RvbVRhYlJvdXRlc31cbiAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9FdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICA8L0V1aVBhZ2VDb250ZW50PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlSW5zdGFuY2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFdWlDYXJkLFxuICBFdWlGbGV4R3JpZCxcbiAgRXVpRmxleEl0ZW0sXG4gIEV1aUljb24sXG4gIEV1aUxvYWRpbmdDb250ZW50LFxuICBFdWlQYWdlQ29udGVudCxcbiAgRXVpUGFnZUNvbnRlbnRCb2R5LFxuICBFdWlUZXh0LFxuICBFdWlUaXRsZSxcbiAgRXVpSG9yaXpvbnRhbFJ1bGUsXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCB7IHVzZUxvYWRQcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi4vY29udGV4dHMvUHJvamVjdExpc3RDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRmVhc3RJY29uQmx1ZSBmcm9tIFwiLi4vZ3JhcGhpY3MvRmVhc3RJY29uQmx1ZVwiO1xuXG5jb25zdCBSb290UHJvamVjdFNlbGVjdGlvblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGRhdGEgfSA9IHVzZUxvYWRQcm9qZWN0c0xpc3QoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5kZWZhdWx0KSB7XG4gICAgICAvLyBJZiBhIGRlZmF1bHQgaXMgc2V0LCByZWRpcmVjdCB0aGVyZS5cbiAgICAgIG5hdmlnYXRlKGAvcC8ke2RhdGEuZGVmYXVsdH1gKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiBkYXRhLnByb2plY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSBvbmUgcHJvamVjdCwgcmVkaXJlY3QgdGhlcmUuXG4gICAgICBuYXZpZ2F0ZShgL3AvJHtkYXRhLnByb2plY3RzWzBdLmlkfWApO1xuICAgIH1cbiAgfSwgW2RhdGEsIG5hdmlnYXRlXSk7XG5cbiAgY29uc3QgcHJvamVjdENhcmRzID0gZGF0YT8ucHJvamVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RXVpRmxleEl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgIDxFdWlDYXJkXG4gICAgICAgICAgaWNvbj17PEV1aUljb24gc2l6ZT1cInh4bFwiIHR5cGU9e0ZlYXN0SWNvbkJsdWV9IC8+fVxuICAgICAgICAgIHRpdGxlPXtgJHtpdGVtLm5hbWV9YH1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbT8uZGVzY3JpcHRpb24gfHwgXCJcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtpdGVtLmlkfWApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0V1aUZsZXhJdGVtPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEV1aVBhZ2VDb250ZW50XG4gICAgICBoYXNCb3JkZXI9e2ZhbHNlfVxuICAgICAgaGFzU2hhZG93PXtmYWxzZX1cbiAgICAgIHBhZGRpbmdTaXplPVwibm9uZVwiXG4gICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIm5vbmVcIlxuICAgID5cbiAgICAgIDxFdWlQYWdlQ29udGVudEJvZHk+XG4gICAgICAgIDxFdWlUaXRsZSBzaXplPVwic1wiPlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIEZlYXN0PC9oMT5cbiAgICAgICAgPC9FdWlUaXRsZT5cbiAgICAgICAgPEV1aVRleHQ+XG4gICAgICAgICAgPHA+U2VsZWN0IG9uZSBvZiB0aGUgcHJvamVjdHMuPC9wPlxuICAgICAgICA8L0V1aVRleHQ+XG4gICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJtXCIgLz5cbiAgICAgICAge2lzTG9hZGluZyAmJiA8RXVpTG9hZGluZ0NvbnRlbnQgbGluZXM9ezF9IC8+fVxuICAgICAgICB7aXNTdWNjZXNzICYmIGRhdGE/LnByb2plY3RzICYmIChcbiAgICAgICAgICA8RXVpRmxleEdyaWQgY29sdW1ucz17M30gZ3V0dGVyU2l6ZT1cImxcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0Q2FyZHN9XG4gICAgICAgICAgPC9FdWlGbGV4R3JpZD5cbiAgICAgICAgKX1cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnRCb2R5PlxuICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb290UHJvamVjdFNlbGVjdGlvblBhZ2U7XG4iLCJpbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRGF0YXNldEZlYXR1cmVFbnRyeSB7XG4gIGZlYXR1cmVOYW1lOiBzdHJpbmc7XG4gIGZlYXR1cmVWaWV3TmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGF0YXNldEZlYXR1cmVzVGFibGVQcm9wcyB7XG4gIGZlYXR1cmVzOiBEYXRhc2V0RmVhdHVyZUVudHJ5W107XG59XG5cbmNvbnN0IERhdGFzZXRGZWF0dXJlc1RhYmxlID0gKHsgZmVhdHVyZXMgfTogRGF0YXNldEZlYXR1cmVzVGFibGVQcm9wcykgPT4ge1xuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRmVhdHVyZVwiLFxuICAgICAgZmllbGQ6IFwiZmVhdHVyZU5hbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU291cmMgRmVhdHVyZSBWaWV3XCIsXG4gICAgICBmaWVsZDogXCJmZWF0dXJlVmlld05hbWVcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiA8RXVpQmFzaWNUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBpdGVtcz17ZmVhdHVyZXN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldEZlYXR1cmVzVGFibGU7XG4iLCJpbXBvcnQgeyBFdWlCYXNpY1RhYmxlIH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRGF0YXNldEpvaW5LZXkge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEYXRhc2V0Sm9pbktleXNUYWJsZVByb3BzIHtcbiAgam9pbktleXM6IERhdGFzZXRKb2luS2V5W107XG59XG5cbmNvbnN0IERhdGFzZXRKb2luS2V5c1RhYmxlID0gKHsgam9pbktleXMgfTogRGF0YXNldEpvaW5LZXlzVGFibGVQcm9wcykgPT4ge1xuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgZmllbGQ6IFwibmFtZVwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIDxFdWlCYXNpY1RhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGl0ZW1zPXtqb2luS2V5c30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0Sm9pbktleXNUYWJsZTtcbiIsImltcG9ydCB7XG4gIEV1aUZsZXhHcm91cCxcbiAgRXVpSG9yaXpvbnRhbFJ1bGUsXG4gIEV1aUxvYWRpbmdTcGlubmVyLFxuICBFdWlUaXRsZSxcbiAgRXVpUGFuZWwsXG4gIEV1aUZsZXhJdGVtLFxuICBFdWlTcGFjZXIsXG4gIEV1aURlc2NyaXB0aW9uTGlzdCxcbiAgRXVpRGVzY3JpcHRpb25MaXN0VGl0bGUsXG4gIEV1aURlc2NyaXB0aW9uTGlzdERlc2NyaXB0aW9uLFxufSBmcm9tIFwiQGVsYXN0aWMvZXVpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERhdGFzZXRGZWF0dXJlc1RhYmxlIGZyb20gXCIuL0RhdGFzZXRGZWF0dXJlc1RhYmxlXCI7XG5pbXBvcnQgRGF0YXNldEpvaW5LZXlzVGFibGUgZnJvbSBcIi4vRGF0YXNldEpvaW5LZXlzVGFibGVcIjtcbmltcG9ydCB1c2VMb2FkRGF0YXNldCBmcm9tIFwiLi91c2VMb2FkRGF0YXNldFwiO1xuXG5jb25zdCBFbnRpdHlPdmVydmlld1RhYiA9ICgpID0+IHtcbiAgbGV0IHsgZGF0YXNldE5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGlmICghZGF0YXNldE5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlJvdXRlIGRvZXNuJ3QgaGF2ZSBhICdkYXRhc2V0TmFtZScgcGFydC4gVGhpcyByb3V0ZSBpcyBsaWtlbHkgcmVuZGVyaW5nIHRoZSB3cm9uZyBjb21wb25lbnQuXCJcbiAgICApO1xuICB9XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzU3VjY2VzcywgaXNFcnJvciwgZGF0YSB9ID0gdXNlTG9hZERhdGFzZXQoZGF0YXNldE5hbWUpO1xuICBjb25zdCBpc0VtcHR5ID0gZGF0YSA9PT0gdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RXVpTG9hZGluZ1NwaW5uZXIgc2l6ZT1cIm1cIiAvPiBMb2FkaW5nXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAge2lzRW1wdHkgJiYgPHA+Tm8gZGF0YXNldCB3aXRoIG5hbWU6IHtkYXRhc2V0TmFtZX08L3A+fVxuICAgICAge2lzRXJyb3IgJiYgPHA+RXJyb3IgbG9hZGluZyBkYXRhc2V0OiB7ZGF0YXNldE5hbWV9PC9wPn1cbiAgICAgIHtpc1N1Y2Nlc3MgJiYgZGF0YSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RXVpRmxleEdyb3VwPlxuICAgICAgICAgICAgPEV1aUZsZXhJdGVtIGdyb3c9ezJ9PlxuICAgICAgICAgICAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+RmVhdHVyZXM8L2gyPlxuICAgICAgICAgICAgICAgIDwvRXVpVGl0bGU+XG4gICAgICAgICAgICAgICAgPEV1aUhvcml6b250YWxSdWxlIG1hcmdpbj1cInhzXCIgLz5cbiAgICAgICAgICAgICAgICA8RGF0YXNldEZlYXR1cmVzVGFibGVcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtkYXRhLnNwZWMuZmVhdHVyZXMubWFwKChqb2luZWROYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2ZlYXR1cmVWaWV3TmFtZSwgZmVhdHVyZU5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICBqb2luZWROYW1lLnNwbGl0KFwiOlwiKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVWaWV3TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cIm1cIiAvPlxuICAgICAgICAgICAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8RXVpVGl0bGUgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+Sm9pbiBLZXlzPC9oMj5cbiAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICAgICAgPERhdGFzZXRKb2luS2V5c1RhYmxlXG4gICAgICAgICAgICAgICAgICBqb2luS2V5cz17ZGF0YS5zcGVjLmpvaW5LZXlzLm1hcCgoam9pbktleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBqb2luS2V5IH07XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0V1aVBhbmVsPlxuICAgICAgICAgICAgPC9FdWlGbGV4SXRlbT5cbiAgICAgICAgICAgIDxFdWlGbGV4SXRlbSBncm93PXsxfT5cbiAgICAgICAgICAgICAgPEV1aVBhbmVsIGhhc0JvcmRlcj17dHJ1ZX0gZ3Jvdz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxFdWlUaXRsZSBzaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Qcm9wZXJ0aWVzPC9oMz5cbiAgICAgICAgICAgICAgICA8L0V1aVRpdGxlPlxuICAgICAgICAgICAgICAgIDxFdWlIb3Jpem9udGFsUnVsZSBtYXJnaW49XCJ4c1wiIC8+XG4gICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgU291cmNlIEZlYXR1cmUgU2VydmljZVxuICAgICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuc3BlYy5mZWF0dXJlU2VydmljZX1cbiAgICAgICAgICAgICAgICAgIDwvRXVpRGVzY3JpcHRpb25MaXN0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3Q+XG4gICAgICAgICAgICAgIDwvRXVpUGFuZWw+XG4gICAgICAgICAgICAgIDxFdWlTcGFjZXIgc2l6ZT1cIm1cIiAvPlxuICAgICAgICAgICAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfSBncm93PXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPEV1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5DcmVhdGVkPC9FdWlEZXNjcmlwdGlvbkxpc3RUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWV0YS5jcmVhdGVkVGltZXN0YW1wLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIpfVxuICAgICAgICAgICAgICAgICAgPC9FdWlEZXNjcmlwdGlvbkxpc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L0V1aURlc2NyaXB0aW9uTGlzdD5cbiAgICAgICAgICAgICAgPC9FdWlQYW5lbD5cbiAgICAgICAgICAgIDwvRXVpRmxleEl0ZW0+XG4gICAgICAgICAgPC9FdWlGbGV4R3JvdXA+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRW50aXR5T3ZlcnZpZXdUYWI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdWlQYW5lbCB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdXNlTG9hZERhdGFzZXQgZnJvbSBcIi4vdXNlTG9hZERhdGFzZXRcIjtcblxuY29uc3QgRGF0YXNldEV4cGVjdGF0aW9uc1RhYiA9ICgpID0+IHtcbiAgbGV0IHsgZGF0YXNldE5hbWUgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGlmICghZGF0YXNldE5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IGRhdGFzZXQgbmFtZS5cIik7XG4gIH1cbiAgY29uc3QgeyBpc1N1Y2Nlc3MsIGRhdGEgfSA9IHVzZUxvYWREYXRhc2V0KGRhdGFzZXROYW1lKTtcblxuICBpZiAoIWRhdGEgfHwgIWRhdGEuc3BlYy5wcm9maWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGhhc1NoYWRvdz17ZmFsc2V9PlxuICAgICAgICBObyBkYXRhIHNvIHNhZFxuICAgICAgPC9FdWlQYW5lbD5cbiAgICApO1xuICB9XG5cbiAgbGV0IGV4cGVjdGF0aW9uc0RhdGE7XG5cbiAgdHJ5IHtcbiAgICBleHBlY3RhdGlvbnNEYXRhID0gSlNPTi5wYXJzZShkYXRhLnNwZWMucHJvZmlsZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBFeHBlY3RhdGlvbnMgUHJvZmlsZTogJHtlfWApO1xuICB9XG5cbiAgcmV0dXJuIGlzU3VjY2VzcyAmJiBleHBlY3RhdGlvbnNEYXRhID8gKFxuICAgIDxFdWlQYW5lbCBoYXNCb3JkZXI9e3RydWV9IGhhc1NoYWRvdz17ZmFsc2V9PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZXhwZWN0YXRpb25zRGF0YSwgbnVsbCwgMil9PC9wcmU+XG4gICAgPC9FdWlQYW5lbD5cbiAgKSA6IChcbiAgICA8RXVpUGFuZWwgaGFzQm9yZGVyPXt0cnVlfSBoYXNTaGFkb3c9e2ZhbHNlfT5cbiAgICAgIE5vIGRhdGEgc28gc2FkXG4gICAgPC9FdWlQYW5lbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFzZXRFeHBlY3RhdGlvbnNUYWI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7XG4gIEV1aVBhZ2VIZWFkZXIsXG4gIEV1aVBhZ2VDb250ZW50LFxuICBFdWlQYWdlQ29udGVudEJvZHksXG59IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcblxuaW1wb3J0IHsgRGF0YXNldEljb24zMiB9IGZyb20gXCIuLi8uLi9ncmFwaGljcy9EYXRhc2V0SWNvblwiO1xuXG5pbXBvcnQgeyB1c2VNYXRjaEV4YWN0LCB1c2VNYXRjaFN1YnBhdGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlTWF0Y2hTdWJwYXRoXCI7XG5pbXBvcnQgRGF0YXNldE92ZXJ2aWV3VGFiIGZyb20gXCIuL0RhdGFzZXRPdmVydmlld1RhYlwiO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRUaXRsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VEb2N1bWVudFRpdGxlXCI7XG5pbXBvcnQgRGF0YXNldEV4cGVjdGF0aW9uc1RhYiBmcm9tIFwiLi9EYXRhc2V0RXhwZWN0YXRpb25zVGFiXCI7XG5pbXBvcnQge1xuICB1c2VEYXRhc2V0Q3VzdG9tVGFicyxcbiAgdXNlRGF0YVNvdXJjZUN1c3RvbVRhYlJvdXRlcyxcbn0gZnJvbSBcIi4uLy4uL2N1c3RvbS10YWJzL1RhYnNSZWdpc3RyeUNvbnRleHRcIjtcblxuY29uc3QgRGF0YXNldEluc3RhbmNlID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCB7IGRhdGFzZXROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VEb2N1bWVudFRpdGxlKGAke2RhdGFzZXROYW1lfSB8IFNhdmVkIERhdGFzZXRzIHwgRmVhc3RgKTtcblxuICBjb25zdCB7IGN1c3RvbU5hdmlnYXRpb25UYWJzIH0gPSB1c2VEYXRhc2V0Q3VzdG9tVGFicyhuYXZpZ2F0ZSk7XG4gIGNvbnN0IEN1c3RvbVRhYlJvdXRlcyA9IHVzZURhdGFTb3VyY2VDdXN0b21UYWJSb3V0ZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFdWlQYWdlSGVhZGVyXG4gICAgICAgIHJlc3RyaWN0V2lkdGhcbiAgICAgICAgaWNvblR5cGU9e0RhdGFzZXRJY29uMzJ9XG4gICAgICAgIHBhZ2VUaXRsZT17YEVudGl0eTogJHtkYXRhc2V0TmFtZX1gfVxuICAgICAgICB0YWJzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiT3ZlcnZpZXdcIixcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHVzZU1hdGNoRXhhY3QoXCJcIiksXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIG5hdmlnYXRlKFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkV4cGVjdGF0aW9uc1wiLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogdXNlTWF0Y2hTdWJwYXRoKFwiZXhwZWN0YXRpb25zXCIpLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBuYXZpZ2F0ZShcImV4cGVjdGF0aW9uc1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5jdXN0b21OYXZpZ2F0aW9uVGFicyxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8RXVpUGFnZUNvbnRlbnRcbiAgICAgICAgaGFzQm9yZGVyPXtmYWxzZX1cbiAgICAgICAgaGFzU2hhZG93PXtmYWxzZX1cbiAgICAgICAgcGFkZGluZ1NpemU9XCJub25lXCJcbiAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIm5vbmVcIlxuICAgICAgPlxuICAgICAgICA8RXVpUGFnZUNvbnRlbnRCb2R5PlxuICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8RGF0YXNldE92ZXJ2aWV3VGFiIC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZXhwZWN0YXRpb25zXCIgZWxlbWVudD17PERhdGFzZXRFeHBlY3RhdGlvbnNUYWIgLz59IC8+XG4gICAgICAgICAgICB7Q3VzdG9tVGFiUm91dGVzfVxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0V1aVBhZ2VDb250ZW50Qm9keT5cbiAgICAgIDwvRXVpUGFnZUNvbnRlbnQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFzZXRJbnN0YW5jZTtcbiIsImltcG9ydCB7IEV1aUVtcHR5UHJvbXB0LCBFdWlMb2FkaW5nQ29udGVudCB9IGZyb20gXCJAZWxhc3RpYy9ldWlcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBQcm9qZWN0TGlzdENvbnRleHQsXG4gIHVzZUxvYWRQcm9qZWN0c0xpc3QsXG59IGZyb20gXCIuLi9jb250ZXh0cy9Qcm9qZWN0TGlzdENvbnRleHRcIjtcbmltcG9ydCBQcm9qZWN0U2VsZWN0b3IgZnJvbSBcIi4vUHJvamVjdFNlbGVjdG9yXCI7XG5cbmNvbnN0IE5vUHJvamVjdEd1YXJkID0gKCkgPT4ge1xuICBjb25zdCB7IHByb2plY3ROYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZGF0YSB9ID0gdXNlTG9hZFByb2plY3RzTGlzdCgpO1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFByb2plY3RMaXN0Q29udGV4dCk7XG5cbiAgaWYgKGlzTG9hZGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiA8RXVpTG9hZGluZ0NvbnRlbnQgbGluZXM9ezN9IC8+O1xuICB9XG5cbiAgaWYgKGlzRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEV1aUVtcHR5UHJvbXB0XG4gICAgICAgIGljb25UeXBlPVwiYWxlcnRcIlxuICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgIHRpdGxlPXs8aDI+RXJyb3IgTG9hZGluZyBQcm9qZWN0IExpc3Q8L2gyPn1cbiAgICAgICAgYm9keT17XG4gICAgICAgICAgcHJvamVjdExpc3RDb250ZXh0Py5pc0N1c3RvbSA/IChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBVbmFibGUgdG8gZmV0Y2ggcHJvamVjdCBsaXN0LiBDaGVjayB0aGUgcHJvbWlzZSBwcm92aWRlZCB0byBGZWFzdFxuICAgICAgICAgICAgICBVSSBpbiA8Y29kZT5wcm9qZWN0TGlzdFByb21pc2U8L2NvZGU+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVW5hYmxlIHRvIGZpbmRcbiAgICAgICAgICAgICAgPGNvZGU+cHJvamVjdHMtbGlzdC5qc29uPC9jb2RlPi4gQ2hlY2sgdGhhdCB5b3UgaGF2ZSBhIHByb2plY3RcbiAgICAgICAgICAgICAgbGlzdCBmaWxlIGRlZmluZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRhdGE/LnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdC5pZCA9PT0gcHJvamVjdE5hbWU7XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFdWlFbXB0eVByb21wdFxuICAgICAgICBpY29uVHlwZT1cImFsZXJ0XCJcbiAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICB0aXRsZT17PGgyPkVycm9yIExvYWRpbmcgUHJvamVjdDwvaDI+fVxuICAgICAgICBib2R5PXtcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlcmUgaXMgbm8gcHJvamVjdCB3aXRoIGlkIDxzdHJvbmc+e3Byb2plY3ROYW1lfTwvc3Ryb25nPiBpbntcIiBcIn1cbiAgICAgICAgICAgICAgPGNvZGU+cHJvamVjdHMtbGlzdC5qc29uPC9jb2RlPi4gQ2hlY2sgdGhhdCB5b3UgaGF2ZSB0aGUgY29ycmVjdFxuICAgICAgICAgICAgICBwcm9qZWN0IGlkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+WW91IGNhbiBhbHNvIHNlbGVjdCBvbmUgb2YgdGhlIHByb2plY3QgaW4gdGhlIGZvbGxvd2luZyBsaXN0OjwvcD5cbiAgICAgICAgICAgIDxQcm9qZWN0U2VsZWN0b3IgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPE91dGxldCAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vUHJvamVjdEd1YXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCJAZWxhc3RpYy9ldWkvZGlzdC9ldWlfdGhlbWVfbGlnaHQuY3NzXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEV1aVByb3ZpZGVyLCBFdWlFcnJvckJvdW5kYXJ5IH0gZnJvbSBcIkBlbGFzdGljL2V1aVwiO1xuXG5pbXBvcnQgUHJvamVjdE92ZXJ2aWV3UGFnZSBmcm9tIFwiLi9wYWdlcy9Qcm9qZWN0T3ZlcnZpZXdQYWdlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL3BhZ2VzL0xheW91dFwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vcGFnZXMvTm9NYXRjaFwiO1xuaW1wb3J0IERhdGFzb3VyY2VJbmRleCBmcm9tIFwiLi9wYWdlcy9kYXRhLXNvdXJjZXMvSW5kZXhcIjtcbmltcG9ydCBEYXRhc2V0SW5kZXggZnJvbSBcIi4vcGFnZXMvc2F2ZWQtZGF0YS1zZXRzL0luZGV4XCI7XG5pbXBvcnQgRW50aXR5SW5kZXggZnJvbSBcIi4vcGFnZXMvZW50aXRpZXMvSW5kZXhcIjtcbmltcG9ydCBFbnRpdHlJbnN0YW5jZSBmcm9tIFwiLi9wYWdlcy9lbnRpdGllcy9FbnRpdHlJbnN0YW5jZVwiO1xuaW1wb3J0IEZlYXR1cmVTZXJ2aWNlSW5kZXggZnJvbSBcIi4vcGFnZXMvZmVhdHVyZS1zZXJ2aWNlcy9JbmRleFwiO1xuaW1wb3J0IEZlYXR1cmVWaWV3SW5kZXggZnJvbSBcIi4vcGFnZXMvZmVhdHVyZS12aWV3cy9JbmRleFwiO1xuaW1wb3J0IEZlYXR1cmVWaWV3SW5zdGFuY2UgZnJvbSBcIi4vcGFnZXMvZmVhdHVyZS12aWV3cy9GZWF0dXJlVmlld0luc3RhbmNlXCI7XG5pbXBvcnQgRmVhdHVyZVNlcnZpY2VJbnN0YW5jZSBmcm9tIFwiLi9wYWdlcy9mZWF0dXJlLXNlcnZpY2VzL0ZlYXR1cmVTZXJ2aWNlSW5zdGFuY2VcIjtcbmltcG9ydCBEYXRhU291cmNlSW5zdGFuY2UgZnJvbSBcIi4vcGFnZXMvZGF0YS1zb3VyY2VzL0RhdGFTb3VyY2VJbnN0YW5jZVwiO1xuaW1wb3J0IFJvb3RQcm9qZWN0U2VsZWN0aW9uUGFnZSBmcm9tIFwiLi9wYWdlcy9Sb290UHJvamVjdFNlbGVjdGlvblBhZ2VcIjtcbmltcG9ydCBEYXRhc2V0SW5zdGFuY2UgZnJvbSBcIi4vcGFnZXMvc2F2ZWQtZGF0YS1zZXRzL0RhdGFzZXRJbnN0YW5jZVwiO1xuaW1wb3J0IE5vUHJvamVjdEd1YXJkIGZyb20gXCIuL2NvbXBvbmVudHMvTm9Qcm9qZWN0R3VhcmRcIjtcblxuaW1wb3J0IFRhYnNSZWdpc3RyeUNvbnRleHQsIHtcbiAgRmVhc3RUYWJzUmVnaXN0cnlJbnRlcmZhY2UsXG59IGZyb20gXCIuL2N1c3RvbS10YWJzL1RhYnNSZWdpc3RyeUNvbnRleHRcIjtcbmltcG9ydCBGZWF0dXJlRmxhZ3NDb250ZXh0LCB7XG4gIEZlYXR1cmVGbGFncyxcbn0gZnJvbSBcIi4vY29udGV4dHMvRmVhdHVyZUZsYWdzQ29udGV4dFwiO1xuaW1wb3J0IHtcbiAgUHJvamVjdExpc3RDb250ZXh0LFxuICBQcm9qZWN0c0xpc3RDb250ZXh0SW50ZXJmYWNlLFxufSBmcm9tIFwiLi9jb250ZXh0cy9Qcm9qZWN0TGlzdENvbnRleHRcIjtcblxuaW50ZXJmYWNlIEZlYXN0VUlDb25maWdzIHtcbiAgdGFic1JlZ2lzdHJ5PzogRmVhc3RUYWJzUmVnaXN0cnlJbnRlcmZhY2U7XG4gIGZlYXR1cmVGbGFncz86IEZlYXR1cmVGbGFncztcbiAgcHJvamVjdExpc3RQcm9taXNlPzogUHJvbWlzZTxhbnk+O1xufVxuXG5jb25zdCBkZWZhdWx0UHJvamVjdExpc3RQcm9taXNlID0gKCkgPT4ge1xuICByZXR1cm4gZmV0Y2goXCIvcHJvamVjdHMtbGlzdC5qc29uXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfSk7XG59O1xuXG5jb25zdCBGZWFzdFVJU2Fuc1Byb3ZpZGVycyA9ICh7XG4gIGZlYXN0VUlDb25maWdzLFxufToge1xuICBmZWFzdFVJQ29uZmlncz86IEZlYXN0VUlDb25maWdzO1xufSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRleHQ6IFByb2plY3RzTGlzdENvbnRleHRJbnRlcmZhY2UgPVxuICAgIGZlYXN0VUlDb25maWdzPy5wcm9qZWN0TGlzdFByb21pc2VcbiAgICAgID8ge1xuICAgICAgICAgIHByb2plY3RzTGlzdFByb21pc2U6IGZlYXN0VUlDb25maWdzPy5wcm9qZWN0TGlzdFByb21pc2UsXG4gICAgICAgICAgaXNDdXN0b206IHRydWUsXG4gICAgICAgIH1cbiAgICAgIDogeyBwcm9qZWN0c0xpc3RQcm9taXNlOiBkZWZhdWx0UHJvamVjdExpc3RQcm9taXNlKCksIGlzQ3VzdG9tOiBmYWxzZSB9O1xuXG4gIHJldHVybiAoXG4gICAgPEV1aVByb3ZpZGVyIGNvbG9yTW9kZT1cImxpZ2h0XCI+XG4gICAgICA8RXVpRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPFRhYnNSZWdpc3RyeUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17ZmVhc3RVSUNvbmZpZ3M/LnRhYnNSZWdpc3RyeSB8fCB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGZWF0dXJlRmxhZ3NDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17ZmVhc3RVSUNvbmZpZ3M/LmZlYXR1cmVGbGFncyB8fCB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHJvamVjdExpc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9qZWN0TGlzdENvbnRleHR9PlxuICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgLz59PlxuICAgICAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxSb290UHJvamVjdFNlbGVjdGlvblBhZ2UgLz59IC8+XG4gICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wLzpwcm9qZWN0TmFtZS8qXCIgZWxlbWVudD17PE5vUHJvamVjdEd1YXJkIC8+fT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxQcm9qZWN0T3ZlcnZpZXdQYWdlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImRhdGEtc291cmNlL1wiIGVsZW1lbnQ9ezxEYXRhc291cmNlSW5kZXggLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJkYXRhLXNvdXJjZS86ZGF0YVNvdXJjZU5hbWUvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17PERhdGFTb3VyY2VJbnN0YW5jZSAvPn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImZlYXR1cmUtdmlldy9cIlxuICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9ezxGZWF0dXJlVmlld0luZGV4IC8+fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiZmVhdHVyZS12aWV3LzpmZWF0dXJlVmlld05hbWUvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17PEZlYXR1cmVWaWV3SW5zdGFuY2UgLz59XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJmZWF0dXJlLXNlcnZpY2UvXCJcbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXs8RmVhdHVyZVNlcnZpY2VJbmRleCAvPn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImZlYXR1cmUtc2VydmljZS86ZmVhdHVyZVNlcnZpY2VOYW1lLypcIlxuICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9ezxGZWF0dXJlU2VydmljZUluc3RhbmNlIC8+fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImVudGl0eS9cIiBlbGVtZW50PXs8RW50aXR5SW5kZXggLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJlbnRpdHkvOmVudGl0eU5hbWUvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17PEVudGl0eUluc3RhbmNlIC8+fVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiZGF0YS1zZXQvXCIgZWxlbWVudD17PERhdGFzZXRJbmRleCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImRhdGEtc2V0LzpkYXRhc2V0TmFtZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXs8RGF0YXNldEluc3RhbmNlIC8+fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb01hdGNoIC8+fSAvPlxuICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvUHJvamVjdExpc3RDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvRmVhdHVyZUZsYWdzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9UYWJzUmVnaXN0cnlDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9FdWlFcnJvckJvdW5kYXJ5PlxuICAgIDwvRXVpUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWFzdFVJU2Fuc1Byb3ZpZGVycztcbmV4cG9ydCB0eXBlIHsgRmVhc3RVSUNvbmZpZ3MgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgUXVlcnlQYXJhbVByb3ZpZGVyIH0gZnJvbSBcInVzZS1xdWVyeS1wYXJhbXNcIjtcbmltcG9ydCBSb3V0ZUFkYXB0ZXIgZnJvbSBcIi4vaGFja3MvUm91dGVBZGFwdGVyXCI7XG5pbXBvcnQgRmVhc3RVSVNhbnNQcm92aWRlcnMsIHsgRmVhc3RVSUNvbmZpZ3MgfSBmcm9tIFwiLi9GZWFzdFVJU2Fuc1Byb3ZpZGVyc1wiO1xuXG5pbnRlcmZhY2UgRmVhc3RVSVByb3BzIHtcbiAgcmVhY3RRdWVyeUNsaWVudD86IFF1ZXJ5Q2xpZW50O1xuICBmZWFzdFVJQ29uZmlncz86IEZlYXN0VUlDb25maWdzO1xufVxuXG5jb25zdCBkZWZhdWx0UXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuY29uc3QgRmVhc3RVSSA9ICh7IHJlYWN0UXVlcnlDbGllbnQsIGZlYXN0VUlDb25maWdzIH06IEZlYXN0VUlQcm9wcykgPT4ge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHJlYWN0UXVlcnlDbGllbnQgfHwgZGVmYXVsdFF1ZXJ5Q2xpZW50O1xuXG4gIGNvbnN0IGdldEJhc2VQYXRoID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmZpbHRlcihwID0+IHAgIT09IFwiXCIpO1xuICAgIGxldCBiYXNlbmFtZSA9ICcnXG4gICAgaWYgKHBhdGgubGVuZ3RoID49IDUgJiYgcGF0aFswXSA9PT0gXCJydVwiKSBiYXNlbmFtZSA9IGAke3BhdGhbMF19L3Byb2plY3RzLyR7cGF0aFsyXX0vZGV2ZWxvcG1lbnQvZmVhdHVyZV9zdG9yZWA7XG4gICAgaWYgKHBhdGgubGVuZ3RoID49IDQgJiYgcGF0aFswXSAhPT0gXCJydVwiKSBiYXNlbmFtZSA9IGAvcHJvamVjdHMvJHtwYXRoWzFdfS9kZXZlbG9wbWVudC9mZWF0dXJlX3N0b3JlYDtcbiAgICBpZiAocGF0aFswXSA9PT0gJ2ZlYXN0JykgYmFzZW5hbWUgPSBwYXRoWzFdID9gLyR7cGF0aFswXX0vJHtwYXRoWzFdfWAgOiBgLyR7cGF0aFswXX1gXG5cbiAgICByZXR1cm4gYmFzZW5hbWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXIgYmFzZW5hbWU9e2dldEJhc2VQYXRoKCl9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxRdWVyeVBhcmFtUHJvdmlkZXJcbiAgICAgICAgICBSZWFjdFJvdXRlclJvdXRlPXtSb3V0ZUFkYXB0ZXIgYXMgdW5rbm93biBhcyBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGZWFzdFVJU2Fuc1Byb3ZpZGVycyBmZWFzdFVJQ29uZmlncz17ZmVhc3RVSUNvbmZpZ3N9IC8+XG4gICAgICAgIDwvUXVlcnlQYXJhbVByb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXN0VUk7XG5leHBvcnQgdHlwZSB7IEZlYXN0VUlDb25maWdzIH07XG4iXSwibmFtZXMiOlsiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsImFzc2lnbiIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIiwiZiIsInJlcXVpcmUkJDAiLCJnIiwiU3ltYm9sIiwiZm9yIiwiaCIsIkZyYWdtZW50IiwibSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiUmVhY3RDdXJyZW50T3duZXIiLCJwIiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJxIiwiYyIsImEiLCJrIiwiYiIsImQiLCJlIiwibCIsImRlZmF1bHRQcm9wcyIsIiQkdHlwZW9mIiwidHlwZSIsInByb3BzIiwiX293bmVyIiwiY3VycmVudCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJlYWN0IiwiX2Fzc2lnbiIsInJlcXVpcmUkJDEiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsImV4cG9ydHMiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsIlJFQUNUX0JMT0NLX1RZUEUiLCJSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSIsIlJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUiLCJSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSIsIlJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSIsInN5bWJvbEZvciIsIlJFQUNUX1NDT1BFX1RZUEUiLCJSRUFDVF9PUEFRVUVfSURfVFlQRSIsIlJFQUNUX09GRlNDUkVFTl9UWVBFIiwiTUFZQkVfSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwibWF5YmVJdGVyYXRvciIsIlJlYWN0U2hhcmVkSW50ZXJuYWxzIiwiZXJyb3IiLCJmb3JtYXQiLCJfbGVuMiIsImFyZ3MiLCJBcnJheSIsIl9rZXkyIiwicHJpbnRXYXJuaW5nIiwibGV2ZWwiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwic3RhY2siLCJnZXRTdGFja0FkZGVuZHVtIiwiY29uY2F0IiwiYXJnc1dpdGhGb3JtYXQiLCJpdGVtIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJjb25zb2xlIiwiZW5hYmxlU2NvcGVBUEkiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXRXcmFwcGVkTmFtZSIsIm91dGVyVHlwZSIsImlubmVyVHlwZSIsIndyYXBwZXJOYW1lIiwiZnVuY3Rpb25OYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiZ2V0Q29udGV4dE5hbWUiLCJnZXRDb21wb25lbnROYW1lIiwidGFnIiwiY29udGV4dCIsInByb3ZpZGVyIiwiX2NvbnRleHQiLCJyZW5kZXIiLCJfcmVuZGVyIiwibGF6eUNvbXBvbmVudCIsInBheWxvYWQiLCJfcGF5bG9hZCIsImluaXQiLCJfaW5pdCIsIngiLCJkaXNhYmxlZERlcHRoIiwicHJldkxvZyIsInByZXZJbmZvIiwicHJldldhcm4iLCJwcmV2RXJyb3IiLCJwcmV2R3JvdXAiLCJwcmV2R3JvdXBDb2xsYXBzZWQiLCJwcmV2R3JvdXBFbmQiLCJkaXNhYmxlZExvZyIsIl9fcmVhY3REaXNhYmxlZExvZyIsImRpc2FibGVMb2dzIiwibG9nIiwiaW5mbyIsIndhcm4iLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnRpZXMiLCJyZWVuYWJsZUxvZ3MiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyIiwicHJlZml4IiwiZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUiLCJvd25lckZuIiwiRXJyb3IiLCJtYXRjaCIsInRyaW0iLCJyZWVudHJ5IiwiY29tcG9uZW50RnJhbWVDYWNoZSIsIlBvc3NpYmx5V2Vha01hcCIsIldlYWtNYXAiLCJNYXAiLCJkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lIiwiZm4iLCJjb25zdHJ1Y3QiLCJmcmFtZSIsImdldCIsImNvbnRyb2wiLCJwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlIiwicHJlcGFyZVN0YWNrVHJhY2UiLCJwcmV2aW91c0Rpc3BhdGNoZXIiLCJGYWtlIiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiLCJSZWZsZWN0Iiwic2FtcGxlIiwic2FtcGxlTGluZXMiLCJjb250cm9sTGluZXMiLCJfZnJhbWUiLCJyZXBsYWNlIiwic3ludGhldGljRnJhbWUiLCJkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUiLCJzaG91bGRDb25zdHJ1Y3QiLCJDb21wb25lbnQiLCJpc1JlYWN0Q29tcG9uZW50IiwiZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQiLCJlbGVtZW50Iiwib3duZXIiLCJfc291cmNlIiwic2V0RXh0cmFTdGFja0ZyYW1lIiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImNvbXBvbmVudE5hbWUiLCJoYXMiLCJiaW5kIiwidHlwZVNwZWNOYW1lIiwiZXJyb3IkMSIsImV4IiwibWVzc2FnZSIsIlJFU0VSVkVEX1BST1BTIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImRpZFdhcm5BYm91dFN0cmluZ1JlZnMiLCJoYXNWYWxpZFJlZiIsImNvbmZpZyIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzUmVhY3RXYXJuaW5nIiwiaGFzVmFsaWRLZXkiLCJ3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQiLCJzZWxmIiwic3RhdGVOb2RlIiwiZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdLZXkiLCJkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ1JlZiIsIlJlYWN0RWxlbWVudCIsIl9zdG9yZSIsImZyZWV6ZSIsImpzeERFViIsIm1heWJlS2V5IiwicHJvcE5hbWUiLCJSZWFjdEN1cnJlbnRPd25lciQxIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCJnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0iLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsImlzQXJyYXkiLCJjaGlsZCIsIml0ZXJhdG9yRm4iLCJlbnRyaWVzIiwic3RlcCIsIm5leHQiLCJkb25lIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJfbmFtZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJqc3hXaXRoVmFsaWRhdGlvbiIsImlzU3RhdGljQ2hpbGRyZW4iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImNoaWxkcmVuIiwianN4V2l0aFZhbGlkYXRpb25TdGF0aWMiLCJqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMiLCJqc3giLCJqc3hzIiwianN4UnVudGltZU1vZHVsZSIsIl9qc3hzIiwiX2pzeCIsIl9fYXNzaWduIiwidGhpcyIsInQiLCJfX3NwcmVhZEFycmF5IiwiaWwiLCJqIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlUXVlcnlQYXJhbXMiLCJwYXJhbUNvbmZpZ01hcCIsInF1ZXJ5IiwiZW5jb2RlZFF1ZXJ5IiwicGFyYW1OYW1lcyIsIl9pIiwicGFyYW1OYW1lc18xIiwicGFyYW1OYW1lIiwiZGVjb2RlZFZhbHVlIiwiZW5jb2RlIiwiU2lkZWJhciIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwibWV0YUtleSIsImFsdEtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImlzTGVmdENsaWNrRXZlbnQiLCJidXR0b24iLCJpc1RhcmdldEJsYW5rIiwiZ2V0QXR0cmlidXRlIiwiRXVpQ3VzdG9tTGluayIsInJlc3QiLCJuYXZpZ2F0ZSIsInVzZU5hdmlnYXRlIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJ1c2VIcmVmIiwicGF0aG5hbWUiLCJJbmRleCIsIndoZXJlRlNjb25zdW1lc1RoaXNGdiIsInVzZUxvYWRFbnRpdHkiLCJFbnRpdHlPdmVydmlld1RhYiIsImZpbHRlckZuIiwiZXh0ZW50IiwidmFsdWVvZiIsIm1pbiIsIm1heCIsImluZGV4IiwiRmVhdHVyZXNMaXN0RGlzcGxheSIsInVzZUxvYWREYXRhc2V0IiwiRGF0YXNldE92ZXJ2aWV3VGFiIiwiRGF0YXNvdXJjZUluZGV4IiwiRmVhdHVyZVZpZXdJbmRleCIsIkZlYXR1cmVTZXJ2aWNlSW5kZXgiLCJFbnRpdHlJbmRleCIsIkRhdGFzZXRJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOzs7QUFDQSxJQUFJQSxxQkFBcUIsR0FBR0MsTUFBTSxDQUFDRCxxQkFBbkM7QUFDQSxJQUFJRSxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkQsY0FBdEM7QUFDQSxJQUFJRSxnQkFBZ0IsR0FBR0gsTUFBTSxDQUFDRSxTQUFQLENBQWlCRSxvQkFBeEM7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDdEIsTUFBSUEsR0FBRyxLQUFLLElBQVIsSUFBZ0JBLEdBQUcsS0FBS0MsU0FBNUIsRUFBdUM7QUFDdEMsVUFBTSxJQUFJQyxTQUFKLENBQWMsdURBQWQsQ0FBTjtBQUNBOztBQUVELFNBQU9SLE1BQU0sQ0FBQ00sR0FBRCxDQUFiO0FBQ0E7O0FBRUQsU0FBU0csZUFBVCxHQUEyQjtBQUMxQixNQUFJO0FBQ0gsUUFBSSxDQUFDVCxNQUFNLENBQUNVLE1BQVosRUFBb0I7QUFDbkIsYUFBTyxLQUFQO0FBQ0EsS0FIRTs7OztBQVFILFFBQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsS0FBWCxDQUFaLENBUkc7O0FBU0hELElBQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQUFYOztBQUNBLFFBQUlYLE1BQU0sQ0FBQ2EsbUJBQVAsQ0FBMkJGLEtBQTNCLEVBQWtDLENBQWxDLE1BQXlDLEdBQTdDLEVBQWtEO0FBQ2pELGFBQU8sS0FBUDtBQUNBLEtBWkU7OztBQWVILFFBQUlHLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMs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
