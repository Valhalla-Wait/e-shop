"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
dotenv.config();
const config = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT || 5432),
    logging: false,
    synchronize: false,
    entities: ['dist/src/modules/**/*.entity.js'],
    migrations: ['dist/src/database/migrations/*.js'],
};
exports.connectionSource = new typeorm_1.DataSource(config);
let TypeOrmConfigService = class TypeOrmConfigService {
    createTypeOrmOptions() {
        return {
            ...config,
            migrationsRun: true,
            autoLoadEntities: true,
        };
    }
};
TypeOrmConfigService = __decorate([
    (0, common_1.Injectable)()
], TypeOrmConfigService);
exports.default = TypeOrmConfigService;
//# sourceMappingURL=ormConfig.js.map