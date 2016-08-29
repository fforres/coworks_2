webpackJsonp([ 9, 13 ], {
    801: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getCoworks = a;
        t.getCoworksWatcher = c;
        var n = r(329);
        var s = r(880);
        var u = r(949);
        var i = [ a, c ].map(regeneratorRuntime.mark);
        function a() {
            return regeneratorRuntime.wrap(function e(t) {
                while (1) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.prev = 0;
                        t.next = 3;
                        return (0, n.put)((0, u.suggestionSuccess)());

                      case 3:
                        t.next = 9;
                        break;

                      case 5:
                        t.prev = 5;
                        t.t0 = t["catch"](0);
                        t.next = 9;
                        return (0, n.put)((0, u.suggestionError)());

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }
            }, i[0], this, [ [ 0, 5 ] ]);
        }
        function c() {
            return regeneratorRuntime.wrap(function e(t) {
                while (1) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2;
                        return (0, n.take)(s.SUGGESTION_SENDING);

                      case 2:
                        if (!t.sent) {
                            t.next = 9;
                            break;
                        }
                        t.next = 5;
                        return (0, n.put)((0, u.suggestionSending)());

                      case 5:
                        t.next = 7;
                        return (0, n.call)(a);

                      case 7:
                        t.next = 0;
                        break;

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }
            }, i[1], this);
        }
        t.default = [ c ];
    },
    880: function(e, t) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = t.SUGGESTION_SENDING = "app/Home/SUGGESTION_SENDING";
        var n = t.SUGGESTION_ERROR = "app/Home/SUGGESTION_ERROR";
        var s = t.SUGGESTION_SUCCESS = "app/Home/SUGGESTION_SUCCESS";
    },
    949: function(e, t, r) {
        "use strict";
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.actions = t.suggestionSuccess = t.suggestionError = t.suggestionSending = undefined;
        var n = r(880);
        var s = t.suggestionSending = function c() {
            return {
                type: n.SUGGESTION_SENDING
            };
        };
        var u = t.suggestionError = function o() {
            return {
                type: n.SUGGESTION_ERROR
            };
        };
        var i = t.suggestionSuccess = function S() {
            return {
                type: n.SUGGESTION_SUCCESS
            };
        };
        var a = t.actions = {
            suggestionSending: s,
            suggestionError: u,
            suggestionSuccess: i
        };
    }
});