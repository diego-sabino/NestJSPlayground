import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { FindAllUsersDTO } from "./user.dto";

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
  async create(@Body() user: UserEntity): Promise<{ message: string, user: FindAllUsersDTO }> {
    await this.userService.create(user);
    return {
      message: 'User created successfully',
      user: new FindAllUsersDTO(user.id, user.firstName, user.lastName, user.email)
    }
  }

  @Put('/:id')
  async update(@Param('id') id: string, user: UserEntity): Promise<{ message: string; user: FindAllUsersDTO }> {
    await this.userService.update(id, user);
    return {
      message: 'User updated successfully',
      user: new FindAllUsersDTO(user.id, user.firstName, user.lastName, user.email)
    }
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.userService.delete(id);
    return {
      message: 'User deleted successfully'
    }
  }
}