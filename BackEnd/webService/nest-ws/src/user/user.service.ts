import {
    Injectable
  } from '@nestjs/common';
  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
  import {
    CreateUserDto
  } from '../dto/create-user.dto';
  import {
    UpdateUserDto
  } from '../dto/update-user.dto';
  import {
    User,
    UserDocument
  } from '../schema/user.schema';
  
  @Injectable()
  export class UserService {
  
    constructor(@InjectModel(User.name) private readonly UserModel: Model < UserDocument > ) {}
  
    async create(createUserDto: CreateUserDto): Promise < UserDocument > {
      const User = new this.UserModel(createUserDto);
      return User.save();
    }
  
    async findAll(): Promise < UserDocument[] > {
      return this.UserModel.find()
        .exec();
    }
  
    async findOne(id: string) {
      return this.UserModel.findById(id);
    }
  
    async update(id: string, updateUserDto: UpdateUserDto): Promise < UserDocument > {
      return this.UserModel.findByIdAndUpdate(id, updateUserDto);
    }
  
    async remove(id: string) {
      return this.UserModel.findByIdAndRemove(id);
    }
  }