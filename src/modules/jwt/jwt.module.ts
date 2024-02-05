import { Module } from '@nestjs/common';
import { JwtAdminModule } from './jwt-admin.module';
import { JwtGlobalModule } from './jwt-global.module';

@Module({
  imports: [JwtAdminModule, JwtGlobalModule],
  exports: [JwtAdminModule, JwtGlobalModule],
})
export class JwtProviderModule {}
