"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtProviderModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_admin_module_1 = require("./jwt-admin.module");
const jwt_global_module_1 = require("./jwt-global.module");
let JwtProviderModule = class JwtProviderModule {
};
exports.JwtProviderModule = JwtProviderModule;
exports.JwtProviderModule = JwtProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_admin_module_1.JwtAdminModule, jwt_global_module_1.JwtGlobalModule],
        exports: [jwt_admin_module_1.JwtAdminModule, jwt_global_module_1.JwtGlobalModule],
    })
], JwtProviderModule);
//# sourceMappingURL=jwt.module.js.map