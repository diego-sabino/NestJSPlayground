import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class FindAllUsersDTO {
  constructor(
    readonly id,
    readonly firstName,
    readonly lastName,
    readonly email
  ){}
}

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail(undefined, { message: "Email is required" })
  email: string;

  @MinLength(6)
  password: string;
}

export class UpdateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail(undefined, { message: "Email is required" })
  email: string;

  @MinLength(6)
  password: string;
}
