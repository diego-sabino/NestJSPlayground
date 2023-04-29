import { Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { FindAllUsersDTO } from "./dtos/user.dto";

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  async findAll(): Promise<FindAllUsersDTO[]> {
    return await this.userService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    return await this.userService.findOne(id);
  }

  @Get('/email/:email')
  async findByEmail(@Param('email') email: string): Promise<UserEntity> {
    return await this.userService.findByEmail(email);
  }

  @Get('/email/:email/password/:password')
  async findByEmailAndPassword(@Param('email') email: string, @Param('password') password: string): Promise<UserEntity> {
    return await this.userService.findByEmailAndPassword(email, password);
  }

  @Get('/email/:email/isActive')
  async findByEmailAndIsActive(@Param('email') email: string): Promise<UserEntity> {
    return await this.userService.findByEmailAndIsActive(email);
  }

  @Post()
  async create(user: UserEntity): Promise<UserEntity> {
    return await this.userService.create(user);
  }

  @Put('/:id')
  async update(@Param('id') id: string, user: UserEntity): Promise<void> {
    await this.userService.update(id, user);
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(id);
  }
}