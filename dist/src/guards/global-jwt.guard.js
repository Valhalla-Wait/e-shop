"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalJwtGuard = void 0;
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const constants_1 = require("src/modules/jwt/constants");
const validMetaKeys = [constants_1.IS_PUBLIC_KEY, constants_1.IS_ADMIN_KEY];
let GlobalJwtGuard = class GlobalJwtGuard extends (0, passport_1.AuthGuard)(constants_1.JwtAccessType.GLOBAL) {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        for (const key of validMetaKeys) {
            const value = this.reflector.getAllAndOverride(key, [
                context.getHandler(),
                context.getClass(),
            ]);
            if (value)
                return true;
        }
        console.log('USER');
        return super.canActivate(context);
    }
};
exports.GlobalJwtGuard = GlobalJwtGuard;
exports.GlobalJwtGuard = GlobalJwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], GlobalJwtGuard);
//# sourceMappingURL=global-jwt.guard.js.map