import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.userRepository.findOneByOrFail({ id });
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async update(id: string, user: UserEntity): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOneByOrFail({ email });
  }

  async findByEmailAndPassword(email: string, password: string): Promise<UserEntity> {
    return await this.userRepository.findOneByOrFail({ email, password });
  }

  async findByEmailAndIsActive(email: string): Promise<UserEntity> {
    return await this.userRepository.findOneByOrFail({ email, isActive: true });
  }
}