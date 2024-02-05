import { AbstractStrategy } from '@nestjs/passport';
declare const AdminJwtStrategy_base: new (...args: any[]) => any;
export declare class AdminJwtStrategy extends AdminJwtStrategy_base implements AbstractStrategy {
    constructor();
    validate(): Promise<boolean>;
}
export {};
