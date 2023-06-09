import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { UserService } from './user.service';
import {
  CreateUserDto,
  FollowAndUnfollowDto,
  RatingDto,
  UpdateUserDto,
} from './dto/user.dto';

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

  @Patch('/rating')
  ratingUpgrade(@Body() dto: RatingDto) {
    return this.userService.ratingUpgrade(dto);
  }

  @Post('/friend')
  followAndUnfollow(@Body() dto: FollowAndUnfollowDto) {
    return this.userService.followAndUnfollow(dto);
  }
}
