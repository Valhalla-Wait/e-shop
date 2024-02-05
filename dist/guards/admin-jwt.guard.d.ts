import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext } from '@nestjs/common';
declare const AdminJwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AdminJwtGuard extends AdminJwtGuard_base implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
