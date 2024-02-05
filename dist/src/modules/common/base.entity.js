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
exports.BaseEntityWithDatesAndIdColumns = exports.BaseEntityWithDatesColumns = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class BaseEntityWithDatesColumns extends typeorm_1.BaseEntity {
}
exports.BaseEntityWithDatesColumns = BaseEntityWithDatesColumns;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp without time zone',
        default: () => 'LOCALTIMESTAMP',
    }),
    __metadata("design:type", Date)
], BaseEntityWithDatesColumns.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp without time zone',
        default: () => 'LOCALTIMESTAMP',
    }),
    __metadata("design:type", Date)
], BaseEntityWithDatesColumns.prototype, "updatedAt", void 0);
class BaseEntityWithDatesAndIdColumns extends BaseEntityWithDatesColumns {
}
exports.BaseEntityWithDatesAndIdColumns = BaseEntityWithDatesAndIdColumns;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BaseEntityWithDatesAndIdColumns.prototype, "id", void 0);
//# sourceMappingURL=base.entity.js.map