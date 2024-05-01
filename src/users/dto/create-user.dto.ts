import { IsEmail, IsNumber, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  readonly id: number;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsStrongPassword()
  readonly password: string;
}
