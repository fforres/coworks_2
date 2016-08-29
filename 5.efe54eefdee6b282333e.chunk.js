webpackJsonp([ 5, 13 ], {
    333: function(e, r, a) {
        "use strict";
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var O = a(12);
        var t = a(863);
        var s = (0, O.fromJS)({
            coworksArr: [],
            loading: false,
            error: false
        });
        function o() {
            var e = arguments.length <= 0 || arguments[0] === undefined ? s : arguments[0];
            var r = arguments[1];
            switch (r.type) {
              case t.GET_COWORKS:
                return e.set("loading", true).set("error", false);

              case t.GET_COWORKS_SUCCESS:
                return e.set("loading", false).set("error", false).set("coworksArr", r.coworks);

              case t.GET_COWORKS_ERROR:
                return e.set("error", r.error).set("loading", false);

              default:
                return e;
            }
        }
        r.default = o;
    },
    863: function(e, r) {
        "use strict";
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var a = r.ADD_COWORK = "app/Home/ADD_COWORK";
        var O = r.SET_COWORKS = "app/Home/SET_COWORKS";
        var t = r.SEARCH_COWORKS = "app/Home/SEARCH_COWORKS";
        var s = r.GET_COWORKS = "app/Home/GET_COWORKS";
        var o = r.GET_COWORKS_SUCCESS = "app/Home/GET_COWORKS_SUCCESS";
        var S = r.GET_COWORKS_ERROR = "app/Home/GET_COWORKS_ERROR";
    }
});