import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { UserService } from '../user/user.service';
import { CreateUserDto, LoginUserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    return user;
  }

  async registration(userDto: CreateUserDto) {
    const users = await this.userService.getAll();
    const candidate = users.filter(({ email }) => email === userDto.email)[0];
    if (candidate) {
      throw new HttpException(
        'A user with this email exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    return user;
  }

  private async validateUser(userDto: LoginUserDto) {
    const users = await this.userService.getAll();
    const user = users.filter(({ email }) => email === userDto.email)[0];
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Incorrect email or password',
    });
  }
}
