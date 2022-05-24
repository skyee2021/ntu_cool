import { RequestMethod } from '@nestjs/common';
import { IsNotEmpty, IsString, IsEmail, Matches } from 'class-validator';
import { regPositive } from './regex.util';

export class CreateUserDTO {
  readonly _id: string;
  @IsString()
  @IsNotEmpty()
  public readonly user_name: string;
  // @IsEmail()
  @Matches(regPositive, { message: 'wrong' })
  @IsString()
  @IsNotEmpty()
  public readonly user_email: string;
}

export class EditUserDTO {
  @IsString()
  @IsNotEmpty()
  public readonly user_name: string;
  // @IsEmail()
  @Matches(regPositive, { message: 'wrong' })
  @IsString()
  @IsNotEmpty()
  public readonly user_email: string;
}
