import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { UserService } from './user.service';
import { AddFriendDto, CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Patch()
  update(@Body() dto: UpdateUserDto) {
    return this.userService.update(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.userService.delete(id);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.userService.getOne(id);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Patch(':id')
  ratingUpgrade(@Param('id') id: ObjectId) {
    return this.userService.ratingUpgrade(id);
  }

  @Post('/friend')
  addFriend(@Body() dto: AddFriendDto) {
    return this.userService.addFriend(dto);
  }
}
