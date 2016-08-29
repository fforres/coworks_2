webpackJsonp([ 2, 13 ], {
    337: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getCoworkByKey = h;
        t.findCoworkByNameWatcher = d;
        t.rootSaga = p;
        var n = r(329);
        var o = r(865);
        var i = r(884);
        var s = r(885);
        var a = r(886);
        var u = c(a);
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var f = [ h, d, p ].map(regeneratorRuntime.mark);
        var l = {};
        function h() {
            var e = this;
            return regeneratorRuntime.wrap(function t(r) {
                while (1) {
                    switch (r.prev = r.next) {
                      case 0:
                        r.prev = 0;
                        return r.delegateYield(regeneratorRuntime.mark(function o() {
                            var t, r, a;
                            return regeneratorRuntime.wrap(function c(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        e.next = 2;
                                        return (0, n.select)((0, s.selectCurrentFilters)());

                                      case 2:
                                        t = e.sent;
                                        r = t.value;
                                        if (r) {
                                            e.next = 9;
                                            break;
                                        }
                                        e.next = 7;
                                        return (0, n.put)((0, i.coworkLoadingError)(true));

                                      case 7:
                                        e.next = 14;
                                        break;

                                      case 9:
                                        e.next = 11;
                                        return (0, n.call)(function() {
                                            return u.default.get('\n        {\n          coworkByName(name:"' + r + '") {\n            name\n            longDescription\n            latitud\n            longitud\n            phoneNumber\n            number\n            street\n            webpage\n            city {\n              name\n              id\n            }\n            country {\n              name\n              id\n            }\n          }\n        }\n      ').then(function(e) {
                                                return e.json();
                                            }).then(function(e) {
                                                return e.data;
                                            }).catch(console.error);
                                        });

                                      case 11:
                                        a = e.sent;
                                        e.next = 14;
                                        return (0, n.put)((0, i.coworkLoaded)(a.coworkByName));

                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, o, e);
                        })(), "t0", 2);

                      case 2:
                        r.next = 8;
                        break;

                      case 4:
                        r.prev = 4;
                        r.t1 = r["catch"](0);
                        r.next = 8;
                        return (0, n.put)((0, i.coworkLoadingError)(true));

                      case 8:
                      case "end":
                        return r.stop();
                    }
                }
            }, f[0], this, [ [ 0, 4 ] ]);
        }
        function d() {
            var e, t;
            return regeneratorRuntime.wrap(function r(i) {
                while (1) {
                    switch (i.prev = i.next) {
                      case 0:
                        if (false) {
                            i.next = 11;
                            break;
                        }
                        i.next = 3;
                        return (0, n.take)(o.GET_COWORK_BY_KEY);

                      case 3:
                        e = i.sent;
                        t = l[e];
                        if (!(!t || !t.isRunning())) {
                            i.next = 9;
                            break;
                        }
                        i.next = 8;
                        return (0, n.fork)(h);

                      case 8:
                        l[e] = i.sent;

                      case 9:
                        i.next = 0;
                        break;

                      case 11:
                      case "end":
                        return i.stop();
                    }
                }
            }, f[1], this);
        }
        function p() {
            return regeneratorRuntime.wrap(function e(t) {
                while (1) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2;
                        return (0, n.fork)(d);

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }
            }, f[2], this);
        }
        t.default = [ d ];
    },
    865: function(e, t) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = t.DEFAULT_ACTION = "app/RightSide/DEFAULT_ACTION";
        var n = t.GET_COWORK_BY_KEY = "app/CurrentCowork/GET_COWORK_BY_KEY";
        var o = t.GET_COWORK_BY_KEY_SUCCESS = "app/CurrentCowork/GET_COWORK_BY_KEY_SUCCESS";
        var i = t.GET_COWORK_BY_KEY_ERROR = "app/CurrentCowork/GET_COWORK_BY_KEY_ERROR";
        var s = t.SET_FILTER = "app/CurrentCowork/SET_FILTER";
        var a = t.CLEAR_FILTER = "app/CurrentCowork/CLEAR_FILTER";
    },
    884: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.actions = t.clearFilter = t.setFilter = t.coworkLoadingError = t.coworkLoaded = t.getCoworkByKey = undefined;
        var n = r(865);
        var o = t.getCoworkByKey = function f() {
            return {
                type: n.GET_COWORK_BY_KEY
            };
        };
        var i = t.coworkLoaded = function l(e) {
            return {
                type: n.GET_COWORK_BY_KEY_SUCCESS,
                cowork: e
            };
        };
        var s = t.coworkLoadingError = function h(e) {
            return {
                type: n.GET_COWORK_BY_KEY_ERROR,
                error: e
            };
        };
        var a = t.setFilter = function d(e, t) {
            return {
                type: n.SET_FILTER,
                key: e,
                value: t
            };
        };
        var u = t.clearFilter = function p() {
            return {
                type: n.CLEAR_FILTER
            };
        };
        var c = t.actions = {
            getCoworkByKey: o,
            coworkLoaded: i,
            coworkLoadingError: s,
            setFilter: a,
            clearFilter: u
        };
    },
    885: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.selectCurrentFilters = t.selectCurrentCowork = t.selectRightSideDomain = t.selectRightSide = undefined;
        var n = r(202);
        var o = function u() {
            return function(e) {
                return e.get("currentCowork");
            };
        };
        var i = function c() {
            return (0, n.createSelector)(o(), function(e) {
                return e.get("cowork");
            });
        };
        var s = function f() {
            return (0, n.createSelector)(o(), function(e) {
                return e.get("filter");
            });
        };
        var a = function l() {
            return (0, n.createSelector)(o(), function(e) {
                return e.toJS();
            });
        };
        t.default = a;
        t.selectRightSide = a;
        t.selectRightSideDomain = o;
        t.selectCurrentCowork = i;
        t.selectCurrentFilters = s;
    },
    886: function(e, t, r) {
        "use strict";
        (function(e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            var n = r(330);
            var o = i(n);
            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            var s = function a() {
                return {
                    get: function t(r) {
                        var n = new URL(o.default.graphQlApi.url);
                        n.searchParams.append("query", r);
                        return e(n, {
                            method: "GET"
                        });
                    },
                    post: function r(t) {
                        var r = new URL(o.default.graphQlApi.url);
                        r.searchParams.append("query", t);
                        return e(r, {
                            method: "POST"
                        });
                    }
                };
            };
            t.default = s();
        }).call(t, r(925));
    },
    925: function(e, t) {
        (function(e) {
            "use strict";
            if (e.fetch) {
                return;
            }
            var t = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                    try {
                        new Blob();
                        return true;
                    } catch (e) {
                        return false;
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            function r(e) {
                if (typeof e !== "string") {
                    e = String(e);
                }
                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
                    throw new TypeError("Invalid character in header field name");
                }
                return e.toLowerCase();
            }
            function n(e) {
                if (typeof e !== "string") {
                    e = String(e);
                }
                return e;
            }
            function o(e) {
                var r = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: t === undefined,
                            value: t
                        };
                    }
                };
                if (t.iterable) {
                    r[Symbol.iterator] = function() {
                        return r;
                    };
                }
                return r;
            }
            function i(e) {
                this.map = {};
                if (e instanceof i) {
                    e.forEach(function(e, t) {
                        this.append(t, e);
                    }, this);
                } else if (e) {
                    Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t]);
                    }, this);
                }
            }
            i.prototype.append = function(e, t) {
                e = r(e);
                t = n(t);
                var o = this.map[e];
                if (!o) {
                    o = [];
                    this.map[e] = o;
                }
                o.push(t);
            };
            i.prototype["delete"] = function(e) {
                delete this.map[r(e)];
            };
            i.prototype.get = function(e) {
                var t = this.map[r(e)];
                return t ? t[0] : null;
            };
            i.prototype.getAll = function(e) {
                return this.map[r(e)] || [];
            };
            i.prototype.has = function(e) {
                return this.map.hasOwnProperty(r(e));
            };
            i.prototype.set = function(e, t) {
                this.map[r(e)] = [ n(t) ];
            };
            i.prototype.forEach = function(e, t) {
                Object.getOwnPropertyNames(this.map).forEach(function(r) {
                    this.map[r].forEach(function(n) {
                        e.call(t, n, r, this);
                    }, this);
                }, this);
            };
            i.prototype.keys = function() {
                var e = [];
                this.forEach(function(t, r) {
                    e.push(r);
                });
                return o(e);
            };
            i.prototype.values = function() {
                var e = [];
                this.forEach(function(t) {
                    e.push(t);
                });
                return o(e);
            };
            i.prototype.entries = function() {
                var e = [];
                this.forEach(function(t, r) {
                    e.push([ r, t ]);
                });
                return o(e);
            };
            if (t.iterable) {
                i.prototype[Symbol.iterator] = i.prototype.entries;
            }
            function s(e) {
                if (e.bodyUsed) {
                    return Promise.reject(new TypeError("Already read"));
                }
                e.bodyUsed = true;
            }
            function a(e) {
                return new Promise(function(t, r) {
                    e.onload = function() {
                        t(e.result);
                    };
                    e.onerror = function() {
                        r(e.error);
                    };
                });
            }
            function u(e) {
                var t = new FileReader();
                t.readAsArrayBuffer(e);
                return a(t);
            }
            function c(e) {
                var t = new FileReader();
                t.readAsText(e);
                return a(t);
            }
            function f() {
                this.bodyUsed = false;
                this._initBody = function(e) {
                    this._bodyInit = e;
                    if (typeof e === "string") {
                        this._bodyText = e;
                    } else if (t.blob && Blob.prototype.isPrototypeOf(e)) {
                        this._bodyBlob = e;
                    } else if (t.formData && FormData.prototype.isPrototypeOf(e)) {
                        this._bodyFormData = e;
                    } else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
                        this._bodyText = e.toString();
                    } else if (!e) {
                        this._bodyText = "";
                    } else if (t.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(e)) {} else {
                        throw new Error("unsupported BodyInit type");
                    }
                    if (!this.headers.get("content-type")) {
                        if (typeof e === "string") {
                            this.headers.set("content-type", "text/plain;charset=UTF-8");
                        } else if (this._bodyBlob && this._bodyBlob.type) {
                            this.headers.set("content-type", this._bodyBlob.type);
                        } else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
                            this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                        }
                    }
                };
                if (t.blob) {
                    this.blob = function() {
                        var e = s(this);
                        if (e) {
                            return e;
                        }
                        if (this._bodyBlob) {
                            return Promise.resolve(this._bodyBlob);
                        } else if (this._bodyFormData) {
                            throw new Error("could not read FormData body as blob");
                        } else {
                            return Promise.resolve(new Blob([ this._bodyText ]));
                        }
                    };
                    this.arrayBuffer = function() {
                        return this.blob().then(u);
                    };
                    this.text = function() {
                        var e = s(this);
                        if (e) {
                            return e;
                        }
                        if (this._bodyBlob) {
                            return c(this._bodyBlob);
                        } else if (this._bodyFormData) {
                            throw new Error("could not read FormData body as text");
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };
                } else {
                    this.text = function() {
                        var e = s(this);
                        return e ? e : Promise.resolve(this._bodyText);
                    };
                }
                if (t.formData) {
                    this.formData = function() {
                        return this.text().then(p);
                    };
                }
                this.json = function() {
                    return this.text().then(JSON.parse);
                };
                return this;
            }
            var l = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
            function h(e) {
                var t = e.toUpperCase();
                return l.indexOf(t) > -1 ? t : e;
            }
            function d(e, t) {
                t = t || {};
                var r = t.body;
                if (d.prototype.isPrototypeOf(e)) {
                    if (e.bodyUsed) {
                        throw new TypeError("Already read");
                    }
                    this.url = e.url;
                    this.credentials = e.credentials;
                    if (!t.headers) {
                        this.headers = new i(e.headers);
                    }
                    this.method = e.method;
                    this.mode = e.mode;
                    if (!r) {
                        r = e._bodyInit;
                        e.bodyUsed = true;
                    }
                } else {
                    this.url = e;
                }
                this.credentials = t.credentials || this.credentials || "omit";
                if (t.headers || !this.headers) {
                    this.headers = new i(t.headers);
                }
                this.method = h(t.method || this.method || "GET");
                this.mode = t.mode || this.mode || null;
                this.referrer = null;
                if ((this.method === "GET" || this.method === "HEAD") && r) {
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                }
                this._initBody(r);
            }
            d.prototype.clone = function() {
                return new d(this);
            };
            function p(e) {
                var t = new FormData();
                e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var r = e.split("=");
                        var n = r.shift().replace(/\+/g, " ");
                        var o = r.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(n), decodeURIComponent(o));
                    }
                });
                return t;
            }
            function y(e) {
                var t = new i();
                var r = (e.getAllResponseHeaders() || "").trim().split("\n");
                r.forEach(function(e) {
                    var r = e.trim().split(":");
                    var n = r.shift().trim();
                    var o = r.join(":").trim();
                    t.append(n, o);
                });
                return t;
            }
            f.call(d.prototype);
            function m(e, t) {
                if (!t) {
                    t = {};
                }
                this.type = "default";
                this.status = t.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = t.statusText;
                this.headers = t.headers instanceof i ? t.headers : new i(t.headers);
                this.url = t.url || "";
                this._initBody(e);
            }
            f.call(m.prototype);
            m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                });
            };
            m.error = function() {
                var e = new m(null, {
                    status: 0,
                    statusText: ""
                });
                e.type = "error";
                return e;
            };
            var w = [ 301, 302, 303, 307, 308 ];
            m.redirect = function(e, t) {
                if (w.indexOf(t) === -1) {
                    throw new RangeError("Invalid status code");
                }
                return new m(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                });
            };
            e.Headers = i;
            e.Request = d;
            e.Response = m;
            e.fetch = function(e, r) {
                return new Promise(function(n, o) {
                    var i;
                    if (d.prototype.isPrototypeOf(e) && !r) {
                        i = e;
                    } else {
                        i = new d(e, r);
                    }
                    var s = new XMLHttpRequest();
                    function a() {
                        if ("responseURL" in s) {
                            return s.responseURL;
                        }
                        if (/^X-Request-URL:/m.test(s.getAllResponseHeaders())) {
                            return s.getResponseHeader("X-Request-URL");
                        }
                        return;
                    }
                    s.onload = function() {
                        var e = {
                            status: s.status,
                            statusText: s.statusText,
                            headers: y(s),
                            url: a()
                        };
                        var t = "response" in s ? s.response : s.responseText;
                        n(new m(t, e));
                    };
                    s.onerror = function() {
                        o(new TypeError("Network request failed"));
                    };
                    s.ontimeout = function() {
                        o(new TypeError("Network request failed"));
                    };
                    s.open(i.method, i.url, true);
                    if (i.credentials === "include") {
                        s.withCredentials = true;
                    }
                    if ("responseType" in s && t.blob) {
                        s.responseType = "blob";
                    }
                    i.headers.forEach(function(e, t) {
                        s.setRequestHeader(t, e);
                    });
                    s.send(typeof i._bodyInit === "undefined" ? null : i._bodyInit);
                });
            };
            e.fetch.polyfill = true;
        })(typeof self !== "undefined" ? self : this);
        e.exports = self.fetch;
    }
});