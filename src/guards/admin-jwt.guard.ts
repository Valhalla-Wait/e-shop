import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtAccessType } from 'src/modules/jwt/constants';

@Injectable()
export class AdminJwtGuard
  extends AuthGuard(JwtAccessType.ADMIN)
  implements CanActivate
{
  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('ADMIN');
    return super.canActivate(context);
  }
}
