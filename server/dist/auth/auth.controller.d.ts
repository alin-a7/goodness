import { CreateUserDto, LoginUserDto } from '../user/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: LoginUserDto): Promise<import("../user/user.schema").User>;
    registration(userDto: CreateUserDto): Promise<import("../user/user.schema").User>;
}
