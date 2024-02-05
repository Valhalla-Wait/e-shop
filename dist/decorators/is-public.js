"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../modules/jwt/constants");
function Public() {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(constants_1.IS_PUBLIC_KEY, true));
}
exports.Public = Public;
//# sourceMappingURL=is-public.js.map