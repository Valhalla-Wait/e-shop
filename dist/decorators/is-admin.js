"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const common_1 = require("@nestjs/common");
const admin_jwt_guard_1 = require("../guards/admin-jwt.guard");
const constants_1 = require("../modules/jwt/constants");
function Admin() {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(constants_1.IS_ADMIN_KEY, true), (0, common_1.UseGuards)(admin_jwt_guard_1.AdminJwtGuard));
}
exports.Admin = Admin;
//# sourceMappingURL=is-admin.js.map