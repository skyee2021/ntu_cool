import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

  // 查找所有用戶
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  // 查找單個用戶
  async findOne(_id: string): Promise<User> {
    return await this.userModel.findById(_id);
  }

  // 添加單個用戶
  async addOne(body: CreateUserDTO): Promise<void> {
    await this.userModel.create(body);
  }

  // 編輯單個用戶
  async editOne(_id: string, body: EditUserDTO): Promise<void> {
    await this.userModel.findByIdAndUpdate(_id, body);
  }

  // 刪除單個用戶
  async deleteOne(_id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(_id);
  }
}
