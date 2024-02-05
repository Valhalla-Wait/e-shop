import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AbstractStrategy, PassportStrategy } from '@nestjs/passport';
import { JwtAccessType } from '../constants';
import { UsersService } from 'src/modules/users/users.service';
import { UserTokenPayload } from './types';

@Injectable()
export class GlobalJwtStrategy
  extends PassportStrategy(Strategy, JwtAccessType.GLOBAL)
  implements AbstractStrategy
{
  constructor(private readonly usersService: UsersService) {
    super({
      secretOrKey: process.env.JWT_ACCESS_USER_TOKEN_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate(payload: UserTokenPayload) {
    try {
      //VALIDATE LOGIC (findOneOrError)
      // const existUser = await usersService.findOne(payload.id);
      console.log(payload);
      return false;
    } catch (err) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
