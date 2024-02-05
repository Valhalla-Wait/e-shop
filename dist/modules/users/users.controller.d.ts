import { UsersService } from './users.service';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto/user.in.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): CreateUserDto;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): UpdateUserDto;
    remove({ id }: DeleteUserDto): string;
}
