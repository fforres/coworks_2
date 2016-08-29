webpackJsonp([ 10, 13 ], {
    800: function(e, s, r) {
        "use strict";
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: true
        });
        var t = r(12);
        var a = r(880);
        var S = (0, t.fromJS)({
            loading: false,
            success: false,
            error: false
        });
        function u() {
            var e = arguments.length <= 0 || arguments[0] === undefined ? S : arguments[0];
            var s = arguments[1];
            switch (s.type) {
              case a.SUGGESTION_SENDING:
                return e.set("loading", true).set("success", false).set("error", false);

              case a.SUGGESTION_SUCCESS:
                return e.set("loading", false).set("success", true).set("error", false);

              case a.SUGGESTION_ERROR:
                return e.set("loading", false).set("success", false).set("error", true);

              default:
                return e;
            }
        }
        s.default = u;
    },
    880: function(e, s) {
        "use strict";
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: true
        });
        var r = s.SUGGESTION_SENDING = "app/Home/SUGGESTION_SENDING";
        var t = s.SUGGESTION_ERROR = "app/Home/SUGGESTION_ERROR";
        var a = s.SUGGESTION_SUCCESS = "app/Home/SUGGESTION_SUCCESS";
    }
});