import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtAdminServiceSymbol } from './constants';

@Module({
  imports: [
    JwtModule.register({
      secretOrKeyProvider: () => process.env.JWT_ACCESS_ADMIN_TOKEN_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_ACCESS_ADMIN_TOKEN_EXPIRE_TIME,
      },
    }),
  ],
  providers: [{ provide: JwtAdminServiceSymbol, useExisting: JwtService }],
  exports: [JwtAdminServiceSymbol],
})
export class JwtAdminModule {}
