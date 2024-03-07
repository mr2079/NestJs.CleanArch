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
    return users.map((user) => this.toUserDto(user));
  }
  async findOne(id: string): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ id: id });
    return this.toUserDto(user);
  }
  async insert(user: User): Promise<void> {
    try {
      await this.userRepository.insert(user);
    } catch {
      throw new Error;
    }
  }
  async update(user: User): Promise<void> {
    try {
      await this.userRepository.update({ id: user.id }, user);
    } catch {
      throw new Error;
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.userRepository.delete({ id: id });
    } catch {
      throw new Error;
    }
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
