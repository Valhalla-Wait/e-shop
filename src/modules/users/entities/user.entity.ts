import { BaseEntityWithDatesAndIdColumns } from 'src/modules/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntityWithDatesAndIdColumns {
  @Column({ name: 'first_name', nullable: false })
  readonly firstName: string;

  @Column({ name: 'last_name', nullable: false })
  readonly lastName: string;
}
