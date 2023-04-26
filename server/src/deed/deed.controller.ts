import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { DeedService } from './deed.service';
import { CreateDeedDto, UpdateDeedDto } from './dto/deed.dto';
import { CreateCommentDto } from './dto/comment.dto';

@Controller('/deed')
export class DeedController {
  constructor(private deedService: DeedService) {}
  @Post()
  create(@Body() dto: CreateDeedDto) {
    return this.deedService.create(dto);
  }
  @Patch()
  update(@Body() dto: UpdateDeedDto) {
    return this.deedService.update(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.deedService.delete(id);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.deedService.getOne(id);
  }

  @Get()
  getAll() {
    return this.deedService.getAll();
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.deedService.addComment(dto);
  }
}
