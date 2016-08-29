webpackJsonp([ 4, 13 ], {
    336: function(e, r, t) {
        "use strict";
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var a = t(12);
        var _ = t(865);
        var s = (0, a.fromJS)({
            loading: false,
            error: false,
            welcome: true,
            cowork: false,
            filter: {
                key: false,
                value: false
            }
        });
        function o() {
            var e = arguments.length <= 0 || arguments[0] === undefined ? s : arguments[0];
            var r = arguments[1];
            switch (r.type) {
              case _.GET_COWORK_BY_KEY:
                return e.set("error", false).set("loading", true).set("welcome", false);

              case _.GET_COWORK_BY_KEY_SUCCESS:
                return e.set("loading", false).set("error", false).set("welcome", false).set("cowork", r.cowork);

              case _.GET_COWORK_BY_KEY_ERROR:
                return e.set("loading", false).set("error", r.error).set("welcome", false).set("cowork", false);

              case _.SET_FILTER:
                return e.set("filter", {
                    key: r.key,
                    value: r.value
                });

              case _.CLEAR_FILTER:
                return e.set("filter", s.filter);

              default:
                return e;
            }
        }
        r.default = o;
    },
    865: function(e, r) {
        "use strict";
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var t = r.DEFAULT_ACTION = "app/RightSide/DEFAULT_ACTION";
        var a = r.GET_COWORK_BY_KEY = "app/CurrentCowork/GET_COWORK_BY_KEY";
        var _ = r.GET_COWORK_BY_KEY_SUCCESS = "app/CurrentCowork/GET_COWORK_BY_KEY_SUCCESS";
        var s = r.GET_COWORK_BY_KEY_ERROR = "app/CurrentCowork/GET_COWORK_BY_KEY_ERROR";
        var o = r.SET_FILTER = "app/CurrentCowork/SET_FILTER";
        var E = r.CLEAR_FILTER = "app/CurrentCowork/CLEAR_FILTER";
    }
});