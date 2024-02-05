"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PUBLIC_KEY = exports.IS_ADMIN_KEY = exports.JwtAccessType = exports.JwtGlobalServiceSymbol = exports.JwtAdminServiceSymbol = void 0;
exports.JwtAdminServiceSymbol = Symbol.for('JwtAdminService');
exports.JwtGlobalServiceSymbol = Symbol.for('JwtGlobalService');
var JwtAccessType;
(function (JwtAccessType) {
    JwtAccessType["ADMIN"] = "jwt-admin";
    JwtAccessType["GLOBAL"] = "jwt-global";
})(JwtAccessType || (exports.JwtAccessType = JwtAccessType = {}));
exports.IS_ADMIN_KEY = 'isAdmin';
exports.IS_PUBLIC_KEY = 'isPublic';
//# sourceMappingURL=constants.js.map