export declare class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export declare class DeleteUserDto {
    readonly id: string;
}
export {};
