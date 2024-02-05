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
exports.GlobalJwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const constants_1 = require("../constants");
const users_service_1 = require("../../users/users.service");
let GlobalJwtStrategy = class GlobalJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, constants_1.JwtAccessType.GLOBAL) {
    constructor(usersService) {
        super({
            secretOrKey: process.env.JWT_ACCESS_USER_TOKEN_SECRET,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
        this.usersService = usersService;
    }
    async validate(payload) {
        try {
            console.log(payload);
            return false;
        }
        catch (err) {
            throw new common_1.HttpException('Нет доступа', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
exports.GlobalJwtStrategy = GlobalJwtStrategy;
exports.GlobalJwtStrategy = GlobalJwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], GlobalJwtStrategy);
//# sourceMappingURL=global-jwt.strategy.js.map