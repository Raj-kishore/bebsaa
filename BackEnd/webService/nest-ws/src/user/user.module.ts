import {
  Module
} from '@nestjs/common';
import {
  UserService
} from './user.service';
import {
  UserController
} from './user.controller';
import {
  User,
  UserSchema
} from '../schema/user.schema';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { HashService } from './hash.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1800s'
      },
    })
  ],
  controllers: [UserController],
  providers: [UserService, HashService, AuthService, JwtStrategy, LocalStrategy]
})
export class UserModule { }