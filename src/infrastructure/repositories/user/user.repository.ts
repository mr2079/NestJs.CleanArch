import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/domain/contracts/user/user.repository.interface';
import { User } from 'src/domain/entities/user/user.entity';
import { UserDto } from 'src/infrastructure/dtos/user/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map(user => this.toUserDto(user));
  }
  async findOne(id: string): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ id: id });
    return this.toUserDto(user);
  }
  insert(user: UserDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(user: UserDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private toUserDto(user: User) {
    return new UserDto(
      user.userName,
      user.firstName,
      user.lastName,
      user.phoneNumber,
      user.email,
    );
  }
}
