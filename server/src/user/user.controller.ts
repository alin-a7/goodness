import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class UserController {
  create() {}

  update() {}

  delete() {}

  @Get()
  getOne() {
    return 'Hello';
  }

  getAll() {}
}
