webpackJsonp([ 8, 10 ], {
    796: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            var e = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
            return function t(r, n, o, u) {
                var a = r && r.defaultProps;
                var f = arguments.length - 3;
                if (!n && f !== 0) {
                    n = {};
                }
                if (n && a) {
                    for (var i in a) {
                        if (n[i] === void 0) {
                            n[i] = a[i];
                        }
                    }
                } else if (!n) {
                    n = a || {};
                }
                if (f === 1) {
                    n.children = u;
                } else if (f > 1) {
                    var l = Array(f);
                    for (var c = 0; c < f; c++) {
                        l[c] = arguments[c + 3];
                    }
                    n.children = l;
                }
                return {
                    $$typeof: e,
                    type: r,
                    key: o === undefined ? null : "" + o,
                    ref: null,
                    props: n,
                    _owner: null
                };
            };
        }();
        var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
            };
        }();
        var u = r(1);
        var a = c(u);
        var f = r(202);
        var i = r(826);
        var l = c(i);
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function s(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function p(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e;
        }
        function d(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
        }
        var y = function(e) {
            d(t, e);
            function t() {
                s(this, t);
                return p(this, Object.getPrototypeOf(t).apply(this, arguments));
            }
            o(t, [ {
                key: "render",
                value: function r() {
                    return n("h1", {}, void 0, a.default.createElement(f.FormattedMessage, l.default.header));
                }
            } ]);
            return t;
        }(a.default.Component);
        t.default = y;
    },
    826: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(202);
        t.default = (0, n.defineMessages)({
            header: {
                id: "app.components.NotFoundPage.header",
                defaultMessage: "This is NotFoundPage component !"
            }
        });
    }
});