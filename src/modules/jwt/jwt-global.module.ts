import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { JwtGlobalServiceSymbol } from './constants';

@Module({
  imports: [
    JwtModule.register({
      secretOrKeyProvider: () => process.env.JWT_ACCESS_USER_TOKEN_SECRET,
      signOptions: { expiresIn: process.env.JWT_ACCESS_USER_TOKEN_EXPIRE_TIME },
    }),
  ],
  providers: [{ provide: JwtGlobalServiceSymbol, useExisting: JwtService }],
  exports: [JwtGlobalServiceSymbol],
})
export class JwtGlobalModule {}
