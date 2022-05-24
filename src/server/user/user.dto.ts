import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDTO {
  readonly _id: string;
  @IsString()
  @IsNotEmpty()
  public readonly user_name: string;
  @IsEmail(/^\S@\S$/)
  @IsString()
  @IsNotEmpty()
  public readonly user_email: string;
}

export class EditUserDTO {
  @IsString()
  @IsNotEmpty()
  public readonly user_name: string;
  @IsEmail(/^\S@\S$/)
  @IsString()
  @IsNotEmpty()
  public readonly user_email: string;
}
