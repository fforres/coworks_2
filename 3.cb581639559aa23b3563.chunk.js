webpackJsonp([ 3, 13 ], {
    334: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getCoworks = c;
        t.getCoworksWatcher = h;
        var n = r(329);
        var o = r(863);
        var s = r(867);
        var i = r(886);
        var a = u(i);
        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var f = [ c, h ].map(regeneratorRuntime.mark);
        function c() {
            var e;
            return regeneratorRuntime.wrap(function t(r) {
                while (1) {
                    switch (r.prev = r.next) {
                      case 0:
                        r.prev = 0;
                        r.next = 3;
                        return (0, n.call)(function() {
                            return a.default.get("\n        {\n          coworkList {\n            name\n            id\n            shortDescription\n            number\n            street\n            latitud\n            longitud\n            city {\n              name\n            }\n            country {\n              name\n            }\n          }\n        }\n      ").then(function(e) {
                                return e.json();
                            }).then(function(e) {
                                return e.data;
                            }).catch(console.error);
                        });

                      case 3:
                        e = r.sent;
                        r.next = 6;
                        return (0, n.put)((0, s.coworksLoaded)(e.coworkList));

                      case 6:
                        r.next = 13;
                        break;

                      case 8:
                        r.prev = 8;
                        r.t0 = r["catch"](0);
                        console.error(r.t0);
                        r.next = 13;
                        return (0, n.put)((0, s.coworksLoadingError)(true));

                      case 13:
                      case "end":
                        return r.stop();
                    }
                }
            }, f[0], this, [ [ 0, 8 ] ]);
        }
        function h() {
            return regeneratorRuntime.wrap(function e(t) {
                while (1) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2;
                        return (0, n.take)(o.GET_COWORKS);

                      case 2:
                        if (!t.sent) {
                            t.next = 7;
                            break;
                        }
                        t.next = 5;
                        return (0, n.call)(c);

                      case 5:
                        t.next = 0;
                        break;

                      case 7:
                      case "end":
                        return t.stop();
                    }
                }
            }, f[1], this);
        }
        t.default = [ h ];
    },
    863: function(e, t) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = t.ADD_COWORK = "app/Home/ADD_COWORK";
        var n = t.SET_COWORKS = "app/Home/SET_COWORKS";
        var o = t.SEARCH_COWORKS = "app/Home/SEARCH_COWORKS";
        var s = t.GET_COWORKS = "app/Home/GET_COWORKS";
        var i = t.GET_COWORKS_SUCCESS = "app/Home/GET_COWORKS_SUCCESS";
        var a = t.GET_COWORKS_ERROR = "app/Home/GET_COWORKS_ERROR";
    },
    867: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.actions = t.coworksLoadingError = t.coworksLoaded = t.getCoworks = undefined;
        var n = r(863);
        var o = t.getCoworks = function u() {
            return {
                type: n.GET_COWORKS
            };
        };
        var s = t.coworksLoaded = function f(e) {
            return {
                type: n.GET_COWORKS_SUCCESS,
                coworks: e
            };
        };
        var i = t.coworksLoadingError = function c(e) {
            return {
                type: n.GET_COWORKS_ERROR,
                error: e
            };
        };
        var a = t.actions = {
            getCoworks: o,
            coworksLoaded: s,
            coworksLoadingError: i
        };
    },
    886: function(e, t, r) {
        "use strict";
        (function(e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            var n = r(330);
            var o = s(n);
            function s(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            var i = function a() {
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
            t.default = i();
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
            function s(e) {
                this.map = {};
                if (e instanceof s) {
                    e.forEach(function(e, t) {
                        this.append(t, e);
                    }, this);
                } else if (e) {
                    Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t]);
                    }, this);
                }
            }
            s.prototype.append = function(e, t) {
                e = r(e);
                t = n(t);
                var o = this.map[e];
                if (!o) {
                    o = [];
                    this.map[e] = o;
                }
                o.push(t);
            };
            s.prototype["delete"] = function(e) {
                delete this.map[r(e)];
            };
            s.prototype.get = function(e) {
                var t = this.map[r(e)];
                return t ? t[0] : null;
            };
            s.prototype.getAll = function(e) {
                return this.map[r(e)] || [];
            };
            s.prototype.has = function(e) {
                return this.map.hasOwnProperty(r(e));
            };
            s.prototype.set = function(e, t) {
                this.map[r(e)] = [ n(t) ];
            };
            s.prototype.forEach = function(e, t) {
                Object.getOwnPropertyNames(this.map).forEach(function(r) {
                    this.map[r].forEach(function(n) {
                        e.call(t, n, r, this);
                    }, this);
                }, this);
            };
            s.prototype.keys = function() {
                var e = [];
                this.forEach(function(t, r) {
                    e.push(r);
                });
                return o(e);
            };
            s.prototype.values = function() {
                var e = [];
                this.forEach(function(t) {
                    e.push(t);
                });
                return o(e);
            };
            s.prototype.entries = function() {
                var e = [];
                this.forEach(function(t, r) {
                    e.push([ r, t ]);
                });
                return o(e);
            };
            if (t.iterable) {
                s.prototype[Symbol.iterator] = s.prototype.entries;
            }
            function i(e) {
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
            function f(e) {
                var t = new FileReader();
                t.readAsText(e);
                return a(t);
            }
            function c() {
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
                        var e = i(this);
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
                        var e = i(this);
                        if (e) {
                            return e;
                        }
                        if (this._bodyBlob) {
                            return f(this._bodyBlob);
                        } else if (this._bodyFormData) {
                            throw new Error("could not read FormData body as text");
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };
                } else {
                    this.text = function() {
                        var e = i(this);
                        return e ? e : Promise.resolve(this._bodyText);
                    };
                }
                if (t.formData) {
                    this.formData = function() {
                        return this.text().then(l);
                    };
                }
                this.json = function() {
                    return this.text().then(JSON.parse);
                };
                return this;
            }
            var h = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
            function d(e) {
                var t = e.toUpperCase();
                return h.indexOf(t) > -1 ? t : e;
            }
            function p(e, t) {
                t = t || {};
                var r = t.body;
                if (p.prototype.isPrototypeOf(e)) {
                    if (e.bodyUsed) {
                        throw new TypeError("Already read");
                    }
                    this.url = e.url;
                    this.credentials = e.credentials;
                    if (!t.headers) {
                        this.headers = new s(e.headers);
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
                    this.headers = new s(t.headers);
                }
                this.method = d(t.method || this.method || "GET");
                this.mode = t.mode || this.mode || null;
                this.referrer = null;
                if ((this.method === "GET" || this.method === "HEAD") && r) {
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                }
                this._initBody(r);
            }
            p.prototype.clone = function() {
                return new p(this);
            };
            function l(e) {
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
                var t = new s();
                var r = (e.getAllResponseHeaders() || "").trim().split("\n");
                r.forEach(function(e) {
                    var r = e.trim().split(":");
                    var n = r.shift().trim();
                    var o = r.join(":").trim();
                    t.append(n, o);
                });
                return t;
            }
            c.call(p.prototype);
            function m(e, t) {
                if (!t) {
                    t = {};
                }
                this.type = "default";
                this.status = t.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = t.statusText;
                this.headers = t.headers instanceof s ? t.headers : new s(t.headers);
                this.url = t.url || "";
                this._initBody(e);
            }
            c.call(m.prototype);
            m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new s(this.headers),
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
            var b = [ 301, 302, 303, 307, 308 ];
            m.redirect = function(e, t) {
                if (b.indexOf(t) === -1) {
                    throw new RangeError("Invalid status code");
                }
                return new m(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                });
            };
            e.Headers = s;
            e.Request = p;
            e.Response = m;
            e.fetch = function(e, r) {
                return new Promise(function(n, o) {
                    var s;
                    if (p.prototype.isPrototypeOf(e) && !r) {
                        s = e;
                    } else {
                        s = new p(e, r);
                    }
                    var i = new XMLHttpRequest();
                    function a() {
                        if ("responseURL" in i) {
                            return i.responseURL;
                        }
                        if (/^X-Request-URL:/m.test(i.getAllResponseHeaders())) {
                            return i.getResponseHeader("X-Request-URL");
                        }
                        return;
                    }
                    i.onload = function() {
                        var e = {
                            status: i.status,
                            statusText: i.statusText,
                            headers: y(i),
                            url: a()
                        };
                        var t = "response" in i ? i.response : i.responseText;
                        n(new m(t, e));
                    };
                    i.onerror = function() {
                        o(new TypeError("Network request failed"));
                    };
                    i.ontimeout = function() {
                        o(new TypeError("Network request failed"));
                    };
                    i.open(s.method, s.url, true);
                    if (s.credentials === "include") {
                        i.withCredentials = true;
                    }
                    if ("responseType" in i && t.blob) {
                        i.responseType = "blob";
                    }
                    s.headers.forEach(function(e, t) {
                        i.setRequestHeader(t, e);
                    });
                    i.send(typeof s._bodyInit === "undefined" ? null : s._bodyInit);
                });
            };
            e.fetch.polyfill = true;
        })(typeof self !== "undefined" ? self : this);
        e.exports = self.fetch;
    }
});