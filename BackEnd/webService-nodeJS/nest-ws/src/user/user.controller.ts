import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards
  } from '@nestjs/common';
  import {
    UserService
  } from './user.service';
  import {
    CreateUserDto
  } from '../dto/create-user.dto';
  import {
    UpdateUserDto
  } from '../dto/update-user.dto';
  import {
    AuthGuard
  } from '@nestjs/passport';


  @Controller('User')
  export class UserController {
    constructor(private readonly UserService: UserService) {}
  
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.UserService.create(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('Email')
    getUserByEmail(@Param() param) {
      return this.UserService.getUserByEmail(param.Email);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Get('findAll')
    findAll() {
      return this.UserService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':email')
    findOne(@Param('email') email: string) {
      return this.UserService.getUserByEmail(email);
    }
  
    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //   return this.UserService.findOne(id);
    // }
  
    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this.UserService.update(id, updateUserDto);
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.UserService.remove(id);
    // }
  }