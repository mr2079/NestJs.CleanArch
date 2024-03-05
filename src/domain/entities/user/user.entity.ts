import { Column, Entity } from "typeorm";
import { BaseEntity } from "../common/base.entity";

@Entity()
export class User extends BaseEntity {
    @Column('varchar', { nullable: false })
    userName: string;

    @Column('nvarchar', { nullable: true })
    firstName: string;

    @Column('nvarchar', { nullable: true })
    lastName: string;

    @Column('varchar', { nullable: true })
    phoneNumber: string;

    @Column('varchar', { nullable: true })
    email: string;
}