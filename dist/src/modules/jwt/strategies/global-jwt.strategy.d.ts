import { AbstractStrategy } from '@nestjs/passport';
import { UsersService } from 'src/modules/users/users.service';
import { UserTokenPayload } from './types';
declare const GlobalJwtStrategy_base: new (...args: any[]) => any;
export declare class GlobalJwtStrategy extends GlobalJwtStrategy_base implements AbstractStrategy {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: UserTokenPayload): Promise<boolean>;
}
export {};
