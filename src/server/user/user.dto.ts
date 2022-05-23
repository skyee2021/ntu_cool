export class CreateUserDTO {
  readonly _id: string;
  readonly user_name: string;
  readonly user_email: string;
}

export class EditUserDTO {
  readonly user_name: string;
  readonly user_email: string;
}