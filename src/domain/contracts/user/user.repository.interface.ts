import { UserDto } from "src/infrastructure/dtos/user/user.dto";

export interface IUserRepository {
    findAll() : Promise<UserDto[]>;
    findOne(id: string) : Promise<UserDto>;
    insert(user: UserDto) : Promise<void>;
    update(user: UserDto) : Promise<void>;
    delete(id: string) : Promise<void>;
}