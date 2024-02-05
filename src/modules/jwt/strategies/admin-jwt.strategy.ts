import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AbstractStrategy, PassportStrategy } from '@nestjs/passport';

import { JwtAccessType } from '../constants';

@Injectable()
export class AdminJwtStrategy
  extends PassportStrategy(Strategy, JwtAccessType.ADMIN)
  implements AbstractStrategy
{
  constructor() {
    super({
      secretOrKey: process.env.JWT_ACCESS_ADMIN_TOKEN_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate() {
    return true;
  }
}
