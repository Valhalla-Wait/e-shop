import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { GlobalJwtStrategy } from '../jwt/strategies/global-jwt.strategy';
import { AdminJwtStrategy } from '../jwt/strategies/admin-jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AdminJwtStrategy, GlobalJwtStrategy],
})
export class UsersModule {}
