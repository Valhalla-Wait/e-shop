import { CreateUserDto, UpdateUserDto } from './dto/user.in.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): CreateUserDto;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): UpdateUserDto;
    remove(id: string): string;
}
