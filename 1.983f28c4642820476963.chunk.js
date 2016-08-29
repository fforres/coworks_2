webpackJsonp([ 1, 13 ], {
    335: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.Login = undefined;
        var n = function() {
            var e = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
            return function t(r, n, o, a) {
                var u = r && r.defaultProps;
                var i = arguments.length - 3;
                if (!n && i !== 0) {
                    n = {};
                }
                if (n && u) {
                    for (var f in u) {
                        if (n[f] === void 0) {
                            n[f] = u[f];
                        }
                    }
                } else if (!n) {
                    n = u || {};
                }
                if (i === 1) {
                    n.children = a;
                } else if (i > 1) {
                    var s = Array(i);
                    for (var c = 0; c < i; c++) {
                        s[c] = arguments[c + 3];
                    }
                    n.children = s;
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
        var a = r(1);
        var u = m(a);
        var i = r(203);
        var f = r(874);
        var s = m(f);
        var c = r(868);
        var l = r(331);
        var p = r(972);
        var v = m(p);
        var d = r(202);
        var T = r(131);
        var y = r(327);
        function m(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function g(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function h(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e;
        }
        function E(e, t) {
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
        var b = n("h1", {}, void 0, " Login ");
        var S = t.Login = function(e) {
            E(t, e);
            function t(e) {
                g(this, t);
                var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.gotoHome = r.gotoHome.bind(r);
                r.saveUserSession = r.saveUserSession.bind(r);
                return r;
            }
            o(t, [ {
                key: "componentDidMount",
                value: function r() {
                    if (this.props.loggedIn) {
                        this.gotoHome();
                    } else {
                        this.saveUserSession();
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function a(e) {
                    if (this.props.loggedIn && this.props.loggedIn !== e.loggedIn) {
                        this.gotoHome();
                    } else {
                        this.saveUserSession();
                    }
                }
            }, {
                key: "saveUserSession",
                value: function u() {
                    var e = JSON.parse(localStorage.getItem("AUTH0_DATA"));
                    if (e) {
                        localStorage.removeItem("AUTH0_DATA");
                        this.props.saveUserSession(e);
                    }
                }
            }, {
                key: "gotoHome",
                value: function i() {
                    this.props.changeRoute("/");
                }
            }, {
                key: "render",
                value: function f() {
                    return n("div", {
                        className: v.default.login
                    }, void 0, n(s.default, {
                        title: "Login",
                        meta: [ {
                            name: "Crea tu cuenta en CWRKS!",
                            content: "CWRKS, es EL sitio colaborativo para encontrar tu mejor opcion de cowork"
                        } ]
                    }), b);
                }
            } ]);
            return t;
        }(u.default.Component);
        var A = (0, d.createStructuredSelector)({
            queryParams: (0, l.selectQueryParams)(),
            loggedIn: (0, c.selectLoggedIn)()
        });
        function _(e) {
            return {
                saveUserSession: function t(r, n) {
                    return e((0, y.saveUserSession)(r, n));
                },
                changeRoute: function r(t) {
                    return e((0, T.push)(t));
                },
                dispatch: e
            };
        }
        t.default = (0, i.connect)(A, _)(S);
    },
    868: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.selectCode = t.selectUserData = t.selectLoggedIn = t.selectLoginDomain = undefined;
        var n = r(202);
        var o = function s() {
            return function(e) {
                return e.get("login");
            };
        };
        var a = function c() {
            return (0, n.createSelector)(o(), function(e) {
                return e.get("loggedIn");
            });
        };
        var u = function l() {
            return (0, n.createSelector)(o(), function(e) {
                return e.get("userData");
            });
        };
        var i = function p() {
            return (0, n.createSelector)(o(), function(e) {
                return e.get("code");
            });
        };
        var f = function v() {
            return (0, n.createSelector)(o(), function(e) {
                return e.toJS();
            });
        };
        t.default = f;
        t.selectLoginDomain = o;
        t.selectLoggedIn = a;
        t.selectUserData = u;
        t.selectCode = i;
    },
    874: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
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
        var o = function W(e, t, r) {
            var n = true;
            e: while (n) {
                var o = e, a = t, u = r;
                n = false;
                if (o === null) o = Function.prototype;
                var i = Object.getOwnPropertyDescriptor(o, a);
                if (i === undefined) {
                    var f = Object.getPrototypeOf(o);
                    if (f === null) {
                        return undefined;
                    } else {
                        e = f;
                        t = a;
                        r = u;
                        n = true;
                        i = f = undefined;
                        continue e;
                    }
                } else if ("value" in i) {
                    return i.value;
                } else {
                    var s = i.get;
                    if (s === undefined) {
                        return undefined;
                    }
                    return s.call(u);
                }
            }
        };
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n];
                    }
                }
            }
            return e;
        };
        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function f(e, t) {
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
        function s(e, t, r) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                e[t] = r;
            }
            return e;
        }
        var c = r(1);
        var l = u(c);
        var p = r(877);
        var v = u(p);
        var d = r(328);
        var T = u(d);
        var y = r(9);
        var m = u(y);
        var g = r(875);
        var h = r(876);
        var E = u(h);
        var b = "data-react-helmet";
        var S = function Y(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
        };
        var A = function V(e, t) {
            var r = [].concat(e).reverse();
            for (var n = 0; n < r.length; n++) {
                var o = r[n];
                if (o[t]) {
                    return o[t];
                }
            }
            return null;
        };
        var _ = function J(e) {
            var t = A(e, "title");
            var r = A(e, "titleTemplate");
            if (r && t) {
                return r.replace(/\%s/g, t);
            }
            var n = A(e, "defaultTitle");
            return t || n || "";
        };
        var P = function Q(e) {
            return A(e, "onChangeClientState") || function() {};
        };
        var O = function B(e) {
            return e.filter(function(e) {
                return typeof e[g.TAG_NAMES.HTML] !== "undefined";
            }).map(function(e) {
                return e[g.TAG_NAMES.HTML];
            }).reduce(function(e, t) {
                return a({}, e, t);
            }, {});
        };
        var w = function K(e, t) {
            return t.filter(function(e) {
                return typeof e[g.TAG_NAMES.BASE] !== "undefined";
            }).map(function(e) {
                return e[g.TAG_NAMES.BASE];
            }).reverse().reduce(function(t, r) {
                if (!t.length) {
                    var n = Object.keys(r);
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o];
                        var u = a.toLowerCase();
                        if (e.indexOf(u) !== -1) {
                            return t.concat(r);
                        }
                    }
                }
                return t;
            }, []);
        };
        var M = function z(e, t, r) {
            var n = {};
            var o = r.filter(function(t) {
                return typeof t[e] !== "undefined";
            }).map(function(t) {
                return t[e];
            }).reverse().reduce(function(e, r) {
                var o = {};
                r.filter(function(e) {
                    var r = undefined;
                    var a = Object.keys(e);
                    for (var u = 0; u < a.length; u++) {
                        var i = a[u];
                        var f = i.toLowerCase();
                        if (t.indexOf(f) !== -1 && !(r === g.TAG_PROPERTIES.REL && e[r].toLowerCase() === "canonical") && !(f === g.TAG_PROPERTIES.REL && e[f].toLowerCase() === "stylesheet")) {
                            r = f;
                        }
                        if (t.indexOf(i) !== -1 && (i === g.TAG_PROPERTIES.INNER_HTML || i === g.TAG_PROPERTIES.CSS_TEXT)) {
                            r = i;
                        }
                    }
                    if (!r) {
                        return false;
                    }
                    var s = e[r].toLowerCase();
                    if (!n[r]) {
                        n[r] = {};
                    }
                    if (!o[r]) {
                        o[r] = {};
                    }
                    if (!n[r][s]) {
                        o[r][s] = true;
                        return true;
                    }
                    return false;
                }).reverse().forEach(function(t) {
                    return e.push(t);
                });
                var a = Object.keys(o);
                for (var u = 0; u < a.length; u++) {
                    var i = a[u];
                    var f = (0, m["default"])({}, n[i], o[i]);
                    n[i] = f;
                }
                return e;
            }, []).reverse();
            return o;
        };
        var j = function X(e) {
            document.title = e || document.title;
        };
        var R = function Z(e) {
            var t = document.getElementsByTagName("html")[0];
            var r = t.getAttribute(b);
            var n = r ? r.split(",") : [];
            var o = [].concat(n);
            var a = Object.keys(e);
            for (var u = 0; u < a.length; u++) {
                var i = a[u];
                var f = e[i] || "";
                t.setAttribute(i, f);
                if (n.indexOf(i) === -1) {
                    n.push(i);
                }
                var s = o.indexOf(i);
                if (s !== -1) {
                    o.splice(s, 1);
                }
            }
            for (var u = o.length - 1; u >= 0; u--) {
                t.removeAttribute(o[u]);
            }
            if (n.length === o.length) {
                t.removeAttribute(b);
            } else {
                t.setAttribute(b, n.join(","));
            }
        };
        var L = function $(e, t) {
            var r = document.head || document.querySelector("head");
            var n = r.querySelectorAll(e + "[" + b + "]");
            var o = Array.prototype.slice.call(n);
            var a = [];
            var u = undefined;
            if (t && t.length) {
                t.forEach(function(t) {
                    var r = document.createElement(e);
                    for (var n in t) {
                        if (t.hasOwnProperty(n)) {
                            if (n === "innerHTML") {
                                r.innerHTML = t.innerHTML;
                            } else if (n === "cssText") {
                                if (r.styleSheet) {
                                    r.styleSheet.cssText = t.cssText;
                                } else {
                                    r.appendChild(document.createTextNode(t.cssText));
                                }
                            } else {
                                var i = typeof t[n] === "undefined" ? "" : t[n];
                                r.setAttribute(n, i);
                            }
                        }
                    }
                    r.setAttribute(b, "true");
                    if (o.some(function(e, t) {
                        u = t;
                        return r.isEqualNode(e);
                    })) {
                        o.splice(u, 1);
                    } else {
                        a.push(r);
                    }
                });
            }
            o.forEach(function(e) {
                return e.parentNode.removeChild(e);
            });
            a.forEach(function(e) {
                return r.appendChild(e);
            });
            return {
                oldTags: o,
                newTags: a
            };
        };
        var C = function ee(e) {
            var t = Object.keys(e);
            var r = "";
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                var a = typeof e[o] !== "undefined" ? o + '="' + e[o] + '"' : "" + o;
                r += a + " ";
            }
            return r.trim();
        };
        var k = function te(e, t) {
            var r = "<" + e + " " + b + '="true">' + S(t) + "</" + e + ">";
            return r;
        };
        var x = function re(e, t) {
            var r = t.map(function(t) {
                var r = Object.keys(t).filter(function(e) {
                    return !(e === "innerHTML" || e === "cssText");
                }).map(function(e) {
                    if (typeof t[e] === "undefined") {
                        return e;
                    }
                    var r = S(t[e]);
                    return e + '="' + r + '"';
                }).join(" ").trim();
                var n = t.innerHTML || t.cssText || "";
                return "<" + e + " " + b + '="true" ' + r + (e === g.TAG_NAMES.SCRIPT || e === g.TAG_NAMES.STYLE ? ">" + n + "</" + e + ">" : "/>");
            }).join("");
            return r;
        };
        var I = function ne(e, t) {
            var r = [ l["default"].createElement(g.TAG_NAMES.TITLE, s({
                key: t
            }, b, true), t) ];
            return r;
        };
        var N = function oe(e, t) {
            var r = t.map(function(t, r) {
                var n = s({
                    key: r
                }, b, true);
                Object.keys(t).forEach(function(e) {
                    var r = g.REACT_TAG_MAP[e] || e;
                    if (r === "innerHTML" || r === "cssText") {
                        var o = t.innerHTML || t.cssText;
                        n.dangerouslySetInnerHTML = {
                            __html: o
                        };
                    } else {
                        n[r] = t[e];
                    }
                });
                return l["default"].createElement(e, n);
            });
            return r;
        };
        var G = function ae(e, t) {
            switch (e) {
              case g.TAG_NAMES.TITLE:
                return {
                    toComponent: function r() {
                        return I(e, t);
                    },
                    toString: function n() {
                        return k(e, t);
                    }
                };

              case g.TAG_NAMES.HTML:
                return {
                    toComponent: function o() {
                        return t;
                    },
                    toString: function a() {
                        return C(t);
                    }
                };

              default:
                return {
                    toComponent: function u() {
                        return N(e, t);
                    },
                    toString: function i() {
                        return x(e, t);
                    }
                };
            }
        };
        var H = function ue(e) {
            var t = e.htmlAttributes;
            var r = e.title;
            var n = e.baseTag;
            var o = e.metaTags;
            var a = e.linkTags;
            var u = e.scriptTags;
            var i = e.styleTags;
            return {
                htmlAttributes: G(g.TAG_NAMES.HTML, t),
                title: G(g.TAG_NAMES.TITLE, r),
                base: G(g.TAG_NAMES.BASE, n),
                meta: G(g.TAG_NAMES.META, o),
                link: G(g.TAG_NAMES.LINK, a),
                script: G(g.TAG_NAMES.SCRIPT, u),
                style: G(g.TAG_NAMES.STYLE, i)
            };
        };
        var U = function ie(e) {
            var t = function(t) {
                f(r, t);
                function r() {
                    i(this, r);
                    o(Object.getPrototypeOf(r.prototype), "constructor", this).apply(this, arguments);
                }
                n(r, [ {
                    key: "shouldComponentUpdate",
                    value: function a(e) {
                        return !(0, T["default"])(this.props, e);
                    }
                }, {
                    key: "render",
                    value: function u() {
                        return l["default"].createElement(e, this.props);
                    }
                } ], [ {
                    key: "propTypes",
                    value: {
                        htmlAttributes: l["default"].PropTypes.object,
                        title: l["default"].PropTypes.string,
                        defaultTitle: l["default"].PropTypes.string,
                        titleTemplate: l["default"].PropTypes.string,
                        base: l["default"].PropTypes.object,
                        meta: l["default"].PropTypes.arrayOf(l["default"].PropTypes.object),
                        link: l["default"].PropTypes.arrayOf(l["default"].PropTypes.object),
                        script: l["default"].PropTypes.arrayOf(l["default"].PropTypes.object),
                        style: l["default"].PropTypes.arrayOf(l["default"].PropTypes.object),
                        onChangeClientState: l["default"].PropTypes.func
                    },
                    enumerable: true
                }, {
                    key: "peek",
                    value: e.peek,
                    enumerable: true
                }, {
                    key: "rewind",
                    value: function s() {
                        var t = e.rewind();
                        if (!t) {
                            t = H({
                                htmlAttributes: [],
                                title: "",
                                baseTag: [],
                                metaTags: [],
                                linkTags: [],
                                scriptTags: [],
                                styleTags: []
                            });
                        }
                        return t;
                    },
                    enumerable: true
                }, {
                    key: "canUseDOM",
                    set: function c(t) {
                        e.canUseDOM = t;
                    }
                } ]);
                return r;
            }(l["default"].Component);
            return t;
        };
        var D = function fe(e) {
            return {
                htmlAttributes: O(e),
                title: _(e),
                baseTag: w([ g.TAG_PROPERTIES.HREF ], e),
                metaTags: M(g.TAG_NAMES.META, [ g.TAG_PROPERTIES.NAME, g.TAG_PROPERTIES.CHARSET, g.TAG_PROPERTIES.HTTPEQUIV, g.TAG_PROPERTIES.PROPERTY ], e),
                linkTags: M(g.TAG_NAMES.LINK, [ g.TAG_PROPERTIES.REL, g.TAG_PROPERTIES.HREF ], e),
                scriptTags: M(g.TAG_NAMES.SCRIPT, [ g.TAG_PROPERTIES.SRC, g.TAG_PROPERTIES.INNER_HTML ], e),
                styleTags: M(g.TAG_NAMES.STYLE, [ g.TAG_PROPERTIES.CSS_TEXT ], e),
                onChangeClientState: P(e)
            };
        };
        var q = function se(e) {
            var t = e.htmlAttributes;
            var r = e.title;
            var n = e.baseTag;
            var o = e.metaTags;
            var a = e.linkTags;
            var u = e.scriptTags;
            var i = e.styleTags;
            var f = e.onChangeClientState;
            R(t);
            j(r);
            var s = {
                baseTag: L(g.TAG_NAMES.BASE, n),
                metaTags: L(g.TAG_NAMES.META, o),
                linkTags: L(g.TAG_NAMES.LINK, a),
                scriptTags: L(g.TAG_NAMES.SCRIPT, u),
                styleTags: L(g.TAG_NAMES.STYLE, i)
            };
            var c = {};
            var l = {};
            Object.keys(s).forEach(function(e) {
                var t = s[e];
                var r = t.newTags;
                var n = t.oldTags;
                if (r.length) {
                    c[e] = r;
                }
                if (n.length) {
                    l[e] = s[e].oldTags;
                }
            });
            f(e, c, l);
        };
        var F = (0, v["default"])(D, q, H);
        t["default"] = U(F(E["default"]));
        e.exports = t["default"];
    },
    875: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = {
            HTML: "htmlAttributes",
            TITLE: "title",
            BASE: "base",
            META: "meta",
            LINK: "link",
            SCRIPT: "script",
            STYLE: "style"
        };
        t.TAG_NAMES = r;
        var n = {
            NAME: "name",
            CHARSET: "charset",
            HTTPEQUIV: "http-equiv",
            REL: "rel",
            HREF: "href",
            PROPERTY: "property",
            SRC: "src",
            INNER_HTML: "innerHTML",
            CSS_TEXT: "cssText"
        };
        t.TAG_PROPERTIES = n;
        var o = {
            charset: "charSet",
            "http-equiv": "httpEquiv"
        };
        t.REACT_TAG_MAP = o;
    },
    876: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
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
        var o = function l(e, t, r) {
            var n = true;
            e: while (n) {
                var o = e, a = t, u = r;
                n = false;
                if (o === null) o = Function.prototype;
                var i = Object.getOwnPropertyDescriptor(o, a);
                if (i === undefined) {
                    var f = Object.getPrototypeOf(o);
                    if (f === null) {
                        return undefined;
                    } else {
                        e = f;
                        t = a;
                        r = u;
                        n = true;
                        i = f = undefined;
                        continue e;
                    }
                } else if ("value" in i) {
                    return i.value;
                } else {
                    var s = i.get;
                    if (s === undefined) {
                        return undefined;
                    }
                    return s.call(u);
                }
            }
        };
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function i(e, t) {
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
        var f = r(1);
        var s = a(f);
        var c = function(e) {
            i(t, e);
            function t() {
                u(this, t);
                o(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
            }
            n(t, [ {
                key: "render",
                value: function r() {
                    return null;
                }
            } ]);
            return t;
        }(s["default"].Component);
        t["default"] = c;
        e.exports = t["default"];
    },
    877: function(e, t, r) {
        "use strict";
        "use strict";
        var n = function() {
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
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function u(e, t) {
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
        var i = r(1);
        var f = o(i);
        var s = r(878);
        var c = o(s);
        var l = r(879);
        var p = o(l);
        e.exports = function v(e, t, r) {
            if (typeof e !== "function") {
                throw new Error("Expected reducePropsToState to be a function.");
            }
            if (typeof t !== "function") {
                throw new Error("Expected handleStateChangeOnClient to be a function.");
            }
            if (typeof r !== "undefined" && typeof r !== "function") {
                throw new Error("Expected mapStateOnServer to either be undefined or a function.");
            }
            function o(e) {
                return e.displayName || e.name || "Component";
            }
            return function s(l) {
                if (typeof l !== "function") {
                    throw new Error("Expected WrappedComponent to be a React component.");
                }
                var v = [];
                var d = undefined;
                function T() {
                    d = e(v.map(function(e) {
                        return e.props;
                    }));
                    if (y.canUseDOM) {
                        t(d);
                    } else if (r) {
                        d = r(d);
                    }
                }
                var y = function(e) {
                    u(t, e);
                    function t() {
                        a(this, t);
                        e.apply(this, arguments);
                    }
                    t.peek = function r() {
                        return d;
                    };
                    t.rewind = function i() {
                        if (t.canUseDOM) {
                            throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");
                        }
                        var e = d;
                        d = undefined;
                        v = [];
                        return e;
                    };
                    t.prototype.shouldComponentUpdate = function s(e) {
                        return !p["default"](e, this.props);
                    };
                    t.prototype.componentWillMount = function y() {
                        v.push(this);
                        T();
                    };
                    t.prototype.componentDidUpdate = function m() {
                        T();
                    };
                    t.prototype.componentWillUnmount = function g() {
                        var e = v.indexOf(this);
                        v.splice(e, 1);
                        T();
                    };
                    t.prototype.render = function h() {
                        return f["default"].createElement(l, this.props);
                    };
                    n(t, null, [ {
                        key: "displayName",
                        value: "SideEffect(" + o(l) + ")",
                        enumerable: true
                    }, {
                        key: "canUseDOM",
                        value: c["default"].canUseDOM,
                        enumerable: true
                    } ]);
                    return t;
                }(i.Component);
                return y;
            };
        };
    },
    878: function(e, t) {
        "use strict";
        "use strict";
        var r = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        var n = {
            canUseDOM: r,
            canUseWorkers: typeof Worker !== "undefined",
            canUseEventListeners: r && !!(window.addEventListener || window.attachEvent),
            canUseViewport: r && !!window.screen,
            isInWorker: !r
        };
        e.exports = n;
    },
    879: function(e, t) {
        "use strict";
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function n(e, t) {
            if (e === t) {
                return true;
            }
            if (typeof e !== "object" || e === null || typeof t !== "object" || t === null) {
                return false;
            }
            var n = Object.keys(e);
            var o = Object.keys(t);
            if (n.length !== o.length) {
                return false;
            }
            var a = r.bind(t);
            for (var u = 0; u < n.length; u++) {
                if (!a(n[u]) || e[n[u]] !== t[n[u]]) {
                    return false;
                }
            }
            return true;
        }
        e.exports = n;
    },
    960: function(e, t, r) {
        t = e.exports = r(200)();
        t.push([ e.i, ".G1yvjMZkpWXEtPSjhpyFF {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.CL03vM3CzuDRhfdxdYCf_ {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.E1ti0qxoPq4PGP7gjT5Jh {\n  width: 6rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n._3V8J0LVQtWFcudVw1mbLzD {\n  font-size: 3rem;\n}\n\n.jZoMQkcgPcLgR8-A8m9HR {\n  font-family: FontAwesome;\n  font-awesome: facebook;\n}\n\n._20wrTvswTcLeUlemINS4cs {\n  font-family: FontAwesome;\n  font-awesome: twitter;\n}\n", "" ]);
        t.locals = {
            login: "G1yvjMZkpWXEtPSjhpyFF",
            link: "CL03vM3CzuDRhfdxdYCf_",
            iconsWrapper: "E1ti0qxoPq4PGP7gjT5Jh",
            icon: "_3V8J0LVQtWFcudVw1mbLzD",
            facebook: "jZoMQkcgPcLgR8-A8m9HR",
            twitter: "_20wrTvswTcLeUlemINS4cs"
        };
    },
    972: function(e, t, r) {
        var n = r(960);
        if (typeof n === "string") n = [ [ e.i, n, "" ] ];
        var o = r(201)(n, {});
        if (n.locals) e.exports = n.locals;
        if (false) {
            if (!n.locals) {
                e.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&-autoprefixer&importLoaders=1!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
                    var t = require("!!./../../../node_modules/css-loader/index.js?modules&-autoprefixer&importLoaders=1!./../../../node_modules/postcss-loader/index.js!./styles.css");
                    if (typeof t === "string") t = [ [ e.id, t, "" ] ];
                    o(t);
                });
            }
            e.hot.dispose(function() {
                o();
            });
        }
    }
});