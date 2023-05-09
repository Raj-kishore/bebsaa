import {
  Injectable,
  BadRequestException
} from '@nestjs/common';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  HashService
} from './hash.service';
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

  constructor(@InjectModel(User.name) private readonly UserModel: Model<UserDocument>, private hashService: HashService) { }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createUser = new this.UserModel(createUserDto);

    // check if user exists
    const user = await this.getUserByEmail(createUser.Email);
    if (user) {
      throw new BadRequestException();
    }
    // Hash Password
    createUser.Password = await this.hashService.hashPassword(createUser.Password);
    return createUser.save();
  }

  async getUserByEmail(Email: string) {
    return this.UserModel.findOne({
      Email
    })
      .exec();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.UserModel.find()
      .exec();
  }



  // async findOne(id: string) {
  //   return this.UserModel.findById(id);
  // }

  // async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
  //   return this.UserModel.findByIdAndUpdate(id, updateUserDto);
  // }

  // async remove(id: string) {
  //   return this.UserModel.findByIdAndRemove(id);
  // }
}