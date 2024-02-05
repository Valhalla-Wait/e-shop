import { BaseEntity } from 'typeorm';
type BaseEntityTypeWithDatesColumns = {
    createdAt: Date;
    updatedAt: Date;
};
type BaseEntityTypeWithDatesAndIdColumns = BaseEntityTypeWithDatesColumns & {
    id: string;
};
export type BaseEntityType<WithId extends boolean> = WithId extends true ? BaseEntityTypeWithDatesAndIdColumns : BaseEntityTypeWithDatesColumns;
export declare class BaseEntityWithDatesColumns extends BaseEntity implements BaseEntityType<false> {
    createdAt: Date;
    updatedAt: Date;
}
export declare class BaseEntityWithDatesAndIdColumns extends BaseEntityWithDatesColumns implements BaseEntityType<true> {
    id: string;
}
export {};
