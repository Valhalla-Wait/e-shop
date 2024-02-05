import { Exclude, Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateUserDto {
  @Expose()
  @IsString()
  @ApiProperty()
  readonly firstName: string;

  @Expose()
  @IsString()
  @ApiProperty()
  readonly lastName: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class DeleteUserDto {
  @Expose()
  @ApiProperty()
  @IsUUID('4')
  readonly id: string;
}
